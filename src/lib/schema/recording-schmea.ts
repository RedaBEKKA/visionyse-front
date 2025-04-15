import { z } from "zod";

const isFileList = (value: unknown): value is FileList => {
  return typeof window !== "undefined" && value instanceof FileList;
};

const fileListValidator = z.custom<FileList>((val) => isFileList(val), {
  message: "Expected a FileList",
});

export const recordingSchema = z.object({
  name: z.string().min(1, { message: "Please enter a recording name" }),
  file: fileListValidator
    .refine((files) => files.length > 0, {
      message: "Please select an audio file",
    })
    .refine((files) => files.item(0)?.type.startsWith("audio/") ?? false, {
      message: "Please select a valid audio file",
    }),
});

export type RecordingFormData = z.infer<typeof recordingSchema>;
