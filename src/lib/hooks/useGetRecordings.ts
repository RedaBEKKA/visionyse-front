import { API_URL } from "@/lib/utils/constants";
import { useSession } from "next-auth/react";
import type { ApiResponse, Recording } from "@/lib/types/recording";
import { useEffect, useState } from "react";

type useGetRecordingsReturn = {
  showAddForm: boolean;
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
  toggleAddForm: () => void;
  handleRecordingAdded: () => void;
  handlePageChange: (newPage: number) => void;
  recordings: Recording[];
  loading: boolean;
  error: string | null;
  pagination: {
    page: number;
    pages: number;
    next: number | null;
    prev: number | null;
    limit: number;
    totalItems: number;
  };
};

export function useGetRecordings(): useGetRecordingsReturn {
  const { data: session } = useSession();
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    pages: 1,
    next: null as number | null,
    prev: null as number | null,
    limit: 5,
    totalItems: 0,
  });

  useEffect(() => {
    if (session) fetchRecordings();
  }, [session]);

  const fetchRecordings = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/recording/getAll`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${session?.user.accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch recordings");
      }

      const data: ApiResponse = await response.json();
      setRecordings(data.data);
      setPagination({
        page: data.page,
        pages: data.pages,
        next: data.next,
        prev: data.prev,
        limit: data.limit,
        totalItems: data.totalItems,
      });
    } catch (err) {
      setError("Error fetching recordings. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  const handleRecordingAdded = () => {
    fetchRecordings();
    setShowAddForm(false);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagination.pages) {
      fetchRecordings();
    }
  };

  return {
    showAddForm,
    setShowAddForm,
    toggleAddForm,
    handleRecordingAdded,
    handlePageChange,
    recordings,
    loading,
    error,
    pagination,
  };
}
