import { auth } from "@/auth";
import { API_URL } from "../utils/constants";

type ApiResponse = {
  data: Data[];
};

type Data = {
  _id: string;
  name: string;
  filePath: string;
  user: User;
  createdAt: string;
};

type User = {
  _id: string;
  fullName: string;
  email: string;
};

export async function getRecordings() {
  const session = await auth();
  if (!session) return;

  try {
    const response = await fetch(`${API_URL}/api/recording/getAll`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.accessToken}`,
      },
    });

    if (!response.ok) {
      console.error("Failed to fetch recordings");
      return;
    }

    const data: ApiResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching recordings:", error);
  }
}
