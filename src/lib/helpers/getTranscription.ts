import { auth } from "@/auth";
import { API_URL } from "../utils/constants";
import type { TranscriptionApiResponse } from "../types/transcription";

export async function getTranscription(
  id: string,
): Promise<TranscriptionApiResponse | undefined> {
  const session = await auth();
  if (!session) return;

  try {
    const response = await fetch(
      `${API_URL}/api/recording/getTranscriptionResult/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
      },
    );

    if (!response.ok) return;

    const data: TranscriptionApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching transcription:", error);
  }
}
