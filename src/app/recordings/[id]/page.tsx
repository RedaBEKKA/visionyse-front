import { RecordingPage } from "@/components/recording/recording-page";
import { getRecording } from "@/lib/helpers/getRecording";
import { getTranscription } from "@/lib/helpers/getTranscription";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";
import type { Metadata } from "next";
import type { JSX } from "react";

type Params = Promise<{ id: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;
  const recording = await getRecording(id);

  if (!recording) notFound();

  return { title: recording?.name, description: recording?.name };
}

export default async function page({
  params,
}: {
  params: Params;
}): Promise<JSX.Element> {
  const session = await auth();
  if (!session) redirect("/login");

  const { id } = await params;
  const [recording, transcription] = await Promise.all([
    getRecording(id),
    getTranscription(id),
  ]);

  if (!recording) notFound();

  return <RecordingPage recording={recording} transcription={transcription} />;
}
