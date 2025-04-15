import { formatDate, formatTime } from "@/lib/utils/utils";
import type { Recording } from "@/lib/helpers/getRecording";
import type { TranscriptionApiResponse } from "@/lib/types/transcription";
import type { JSX } from "react";

type RecordingPageProps = {
  recording: Recording | undefined;
  transcription: TranscriptionApiResponse | undefined;
};

export function RecordingPage({
  recording,
  transcription,
}: RecordingPageProps): JSX.Element {
  const utterances =
    transcription?.data?.transcriptionResult?.result?.transcription
      ?.utterances || [];
  const fullTranscript =
    transcription?.data?.transcriptionResult?.result?.transcription
      ?.full_transcript || "";

  return (
    <div className="min-h-screen bg-[#ffffff] p-4 text-black antialiased transition-colors duration-200 md:p-8 dark:bg-[#121212] dark:text-gray-100">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-bold md:text-3xl">
            {recording?.name}
          </h1>
          <div className="flex flex-col gap-2 text-sm text-gray-600 sm:flex-row sm:items-center sm:gap-4 dark:text-gray-400">
            <span>Recorded by {recording?.user.fullName}</span>
            <span className="hidden sm:inline">•</span>
            <span>{formatDate(recording?.createdAt as string)}</span>
          </div>
        </div>
        {transcription && (
          <div className="mb-8 rounded-xl bg-gray-100 p-6 shadow-sm dark:bg-gray-800">
            <h2 className="mb-4 text-xl font-semibold">Full Transcript</h2>
            <p className="text-gray-700 dark:text-gray-300">{fullTranscript}</p>
          </div>
        )}
        {utterances.length > 0 && (
          <div className="mb-8 overflow-hidden rounded-xl bg-gray-100 shadow-sm duration-200 dark:bg-gray-800">
            <h2 className="p-6 text-xl font-semibold">Transcription Details</h2>
            <div className="overflow-x-auto">
              <table className="w-full duration-200">
                <thead className="bg-gray-200 text-left text-sm font-medium text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-300">
                  <tr>
                    <th className="px-6 py-3">Time</th>
                    <th className="px-6 py-3">Text</th>
                    <th className="px-6 py-3">Confidence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-700 dark:divide-gray-600 dark:text-gray-300">
                  {utterances.map((utterance, index) => (
                    <tr
                      key={index}
                      className="dark:hover:bg-gray-750 duration-200 hover:bg-gray-50 hover:dark:bg-gray-700"
                    >
                      <td className="px-6 py-4 text-sm whitespace-nowrap">
                        {formatTime(utterance.start)} -{" "}
                        {formatTime(utterance.end)}
                      </td>
                      <td className="px-6 py-4">{utterance.text}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-sm">
                            {Math.round(utterance.confidence * 100)}%
                          </span>
                          <div className="h-2 w-full max-w-24 rounded-full bg-gray-300 dark:bg-gray-600">
                            <div
                              className="h-2 rounded-full bg-green-500"
                              style={{
                                width: `${utterance.confidence * 100}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-gray-50 p-6 md:col-span-2 dark:bg-gray-900">
            <h2 className="mb-4 text-xl font-semibold">Recording Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  File Path
                </h3>
                <p className="mt-1 text-sm break-all">{recording?.filePath}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Recording ID
                </h3>
                <p className="mt-1 text-sm">{recording?._id}</p>
              </div>
              {transcription?.data?.transcriptionResult?.file
                ?.audio_duration && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Duration
                  </h3>
                  <p className="mt-1 text-sm">
                    {formatTime(
                      transcription.data.transcriptionResult.file
                        .audio_duration,
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="rounded-xl bg-gray-50 p-6 dark:bg-gray-900">
            <h2 className="mb-4 text-xl font-semibold">Recorded By</h2>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                {recording?.user.fullName.charAt(0)}
              </div>
              <div>
                <p className="font-medium">{recording?.user.fullName}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {recording?.user.email}
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                User ID
              </h3>
              <p className="mt-1 text-sm">{recording?.user._id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
