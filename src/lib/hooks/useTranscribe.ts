import { useSession } from "next-auth/react";
import { API_URL } from "../utils/constants";
import { toast } from "sonner";
import type { Recording } from "../helpers/getRecording";

type useTranscribeReturn = {
  transcribe: () => void;
};

export function useTranscribe(recording: Recording): useTranscribeReturn {
  const { data: session } = useSession();

  const transcribe = () => {
    toast.promise(
      async () => {
        const response = await fetch(
          `${API_URL}/api/recording/createTranscription/${recording._id}/`,
          {
            method: "POST",
            headers: {
              authorization: `Bearer ${session?.user.accessToken}`,
            },
          },
        );

        if (!response.ok) {
          const errorData = await response.json();
          const errorMessage =
            errorData?.message || "Failed to transcribe recording.";
          throw new Error(errorMessage);
        }

        return response.json();
      },
      {
        loading: "Creating transcription...",
        success: () => {
          setTimeout(() => window.location.reload(), 1000);
          return "Transcription created successfully!";
        },
        error: (err) => {
          const error =
            err instanceof Error ? err : new Error("Unknown error occurred");
          console.error("Transcribe recording error:", error);
          return error.message;
        },
      },
    );
  };

  return { transcribe };
}
