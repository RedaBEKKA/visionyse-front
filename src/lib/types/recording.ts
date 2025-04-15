export type User = {
  _id: string;
  fullName: string;
  email: string;
};

export type TranscriptionResult = {
  id: string;
  status: string;
  result?: {
    transcription: {
      full_transcript: string;
    };
  };
};

export type Recording = {
  _id: string;
  name: string;
  filePath: string;
  user: User;
  createdAt: string;
  gladiaId?: string;
  gladiaResultUrl?: string;
  transcriptionResult?: TranscriptionResult;
};

export type ApiResponse = {
  page: number;
  pages: number;
  next: number | null;
  prev: number | null;
  limit: number;
  totalItems: number;
  data: Recording[];
};
