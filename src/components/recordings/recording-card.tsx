"use client";

import { useDeleteRecording } from "@/lib/hooks/useDeleteRecording";
import { useTranscribe } from "@/lib/hooks/useTranscribe";
import type { Recording } from "@/lib/types/recording";
import { FileText, Trash2 } from "lucide-react";
import Link from "next/link";
import { type JSX, useState } from "react";

export function RecordingCard({
  recording,
}: {
  recording: Recording;
}): JSX.Element {
  const { handleDelete } = useDeleteRecording(recording);
  const { transcribe } = useTranscribe(recording);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);

  const hasTranscription =
    recording.transcriptionResult?.result?.transcription?.full_transcript;

  const fileExtension =
    recording.filePath.split(".").pop()?.toUpperCase() || "AUDIO";

  const transcriptPreview = hasTranscription
    ? `${recording.transcriptionResult?.result?.transcription?.full_transcript.substring(0, 100)}...`
    : "No transcript available";

  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transition-all duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <Link href={`/recordings/${recording._id}`}>
            <h3 className="truncate text-xl font-bold">{recording.name}</h3>
          </Link>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
              {fileExtension}
            </span>
            <button
              title="delete"
              onClick={handleDelete}
              className="cursor-pointer rounded-md duration-200 hover:bg-red-400 hover:text-white"
            >
              <Trash2 className="text-red-700 duration-200 hover:text-white" />
            </button>
            <button
              title="transcribe"
              onClick={transcribe}
              className="cursor-pointer rounded-md duration-200 hover:bg-green-400 hover:text-white"
            >
              <FileText className="rounded-md bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" />
            </button>
          </div>
        </div>

        <div className="mb-4 flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="mr-3">{recording?.createdAt}</span>
          <span>By {recording.user.fullName}</span>
        </div>
        {hasTranscription && (
          <div className="mb-4">
            <div
              className={`text-sm ${showTranscript ? "line-clamp-none" : "line-clamp-2"} text-gray-700 dark:text-gray-300`}
            >
              {showTranscript
                ? recording.transcriptionResult?.result?.transcription
                    ?.full_transcript
                : transcriptPreview}
            </div>
            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="mt-2 text-sm text-purple-600 hover:underline dark:text-purple-400"
            >
              {showTranscript ? "Show less" : "Show full transcript"}
            </button>
          </div>
        )}
      </div>

      {recording.gladiaId && (
        <div className="border-t border-gray-100 bg-gray-50 px-5 py-3 text-xs text-gray-500 dark:border-gray-700 dark:bg-gray-700/50 dark:text-gray-400">
          Gladia ID: {recording.gladiaId}
        </div>
      )}
    </div>
  );
}
