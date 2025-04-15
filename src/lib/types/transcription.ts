/* eslint-disable @typescript-eslint/no-explicit-any */
export type TranscriptionApiResponse = {
  message: string;
  data: {
    _id: string;
    name: string;
    filePath: string;
    user: {
      _id: string;
      fullName: string;
      email: string;
    };
    createdAt: string;
    gladiaId: string;
    gladiaResultUrl: string;
    transcriptionResult: {
      id: string;
      request_id: string;
      version: number;
      status: string;
      created_at: string;
      completed_at: string;
      custom_metadata: null | any;
      error_code: null | string;
      kind: string;
      file: {
        id: string;
        filename: string;
        source: string;
        audio_duration: number;
        number_of_channels: number;
      };
      request_params: {
        audio_url: string;
        language: string;
        [key: string]: any;
      };
      result: {
        metadata: {
          audio_duration: number;
          number_of_distinct_channels: number;
          billing_time: number;
          transcription_time: number;
        };
        transcription: {
          languages: string[];
          utterances: Array<{
            text: string;
            language: string;
            start: number;
            end: number;
            confidence: number;
            channel: number;
            words: Array<{
              word: string;
              start: number;
              end: number;
              confidence: number;
            }>;
          }>;
          full_transcript: string;
        };
      };
    };
  };
};
