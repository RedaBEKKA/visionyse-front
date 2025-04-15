import { useSession } from "next-auth/react";
import { API_URL } from "../utils/constants";
import { toast } from "sonner";
import type { Recording } from "../helpers/getRecording";

type useDeleteRecordingReturn = {
  handleDelete: () => Promise<void>;
};

export function useDeleteRecording(
  recording: Recording,
): useDeleteRecordingReturn {
  const { data: session } = useSession();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recording?",
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${API_URL}/api/recording/deleteById/${recording._id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${session?.user.accessToken}`,
          },
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage =
          errorData?.message || "Failed to delete recording.";
        throw new Error(errorMessage);
      }

      toast.success("Recording deleted successfully.");
      window.location.reload();
    } catch (err) {
      const error =
        err instanceof Error ? err : new Error("Unknown error occurred");
      console.error("Delete recording error:", error);
      toast.error(error.message);
    }
  };

  return { handleDelete };
}
