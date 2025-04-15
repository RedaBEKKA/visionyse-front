import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { RecordingPage } from "@/components/recordings/recording-page";
import type { Metadata } from "next";
import type { JSX } from "react";

export const metadata: Metadata = {
  title: "Recordings | Visionyze",
  description: "Recordings page",
};

export default async function page(): Promise<JSX.Element> {
  const session = await auth();
  if (!session) redirect("/login");

  return <RecordingPage />;
}
