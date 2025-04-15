"use client";

import { Loader2 } from "lucide-react";
import { Controller } from "react-hook-form";
import { cn } from "@/lib/utils/utils";
import { useAddRecording } from "@/lib/hooks/useAddRecording";

type AddRecordingFormProps = {
  onRecordingAdded: () => void;
};

export function AddRecordingForm({ onRecordingAdded }: AddRecordingFormProps) {
  const {
    onSubmit,
    errors,
    isSubmitting,
    fileInputRef,
    register,
    control,
    handleSubmit,
  } = useAddRecording(onRecordingAdded);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="mb-4 text-xl font-bold">Add New Recording</h2>
      <div className="mb-4">
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Recording Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter recording name"
          className={cn(
            "w-full rounded-lg px-3 py-2 text-black focus:ring-2 focus:ring-purple-500 focus:outline-none dark:bg-gray-900 dark:text-white",
            errors.name
              ? "border border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none"
              : "border border-gray-300 dark:border-gray-700",
          )}
          {...register("name")}
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="file" className="mb-1 block text-sm font-medium">
          Audio File
        </label>
        <Controller
          control={control}
          name="file"
          defaultValue={undefined as unknown as FileList}
          render={({ field }) => (
            <input
              type="file"
              id="file"
              ref={(e) => {
                field.ref(e);
                fileInputRef.current = e;
              }}
              onChange={(e) => {
                field.onChange(e.target.files);
              }}
              accept="audio/*"
              className={cn(
                "w-full rounded-lg px-3 py-2 text-black focus:ring-2 focus:outline-none dark:bg-gray-900 dark:text-white",
                errors.file
                  ? "border border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none"
                  : "border border-gray-300 dark:border-gray-700",
              )}
              disabled={isSubmitting}
            />
          )}
        />
        {errors.file && (
          <p className="mt-1 text-xs text-red-600">
            {errors.file.message as string}
          </p>
        )}
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Supported formats: MP3, WAV, M4A, etc.
        </p>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors duration-200 hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <Loader2 className="mr-2 -ml-1 h-4 w-4 animate-spin text-white" />
              Uploading...
            </span>
          ) : (
            "Upload Recording"
          )}
        </button>
      </div>
    </form>
  );
}
