import { API_URL } from "@/lib/utils/constants";
import { useSession } from "next-auth/react";
import { useRef } from "react";
import {
  useForm,
  type UseFormRegister,
  type SubmitHandler,
  type Control,
  type FieldErrors,
  type UseFormHandleSubmit,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  recordingSchema,
  type RecordingFormData,
} from "@/lib/schema/recording-schmea";

type useAddRecordingReturn = {
  onSubmit: SubmitHandler<RecordingFormData>;
  errors: FieldErrors<RecordingFormData>;
  isSubmitting: boolean;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  register: UseFormRegister<RecordingFormData>;
  control: Control<RecordingFormData>;
  handleSubmit: UseFormHandleSubmit<RecordingFormData>;
};

export function useAddRecording(
  onRecordingAdded: () => void,
): useAddRecordingReturn {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RecordingFormData>({
    resolver: zodResolver(recordingSchema),
  });

  const onSubmit: SubmitHandler<RecordingFormData> = async (data) => {
    try {
      const audioFile = data.file.item(0);
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("file", audioFile as Blob);

      const response = await fetch(`${API_URL}/api/recording/createRecording`, {
        method: "POST",
        headers: { authorization: `Bearer ${session?.user.accessToken}` },
        body: formData,
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData?.message || "Failed to upload recording");
      }

      reset();
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      toast.success("Recording uploaded successfully!");
      onRecordingAdded();
    } catch (error: unknown) {
      let errorMsg = "Error uploading recording. Please try again.";
      if (error instanceof Error) {
        errorMsg = error.message;
      }
      toast.error(errorMsg);
      console.error(error);
    }
  };

  return {
    onSubmit,
    errors,
    isSubmitting,
    fileInputRef,
    register,
    control,
    handleSubmit,
  };
}
