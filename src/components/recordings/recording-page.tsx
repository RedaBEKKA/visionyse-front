"use client";

import { type JSX } from "react";
import { AddRecordingForm } from "./add-recording-form";
import { RecordingCard } from "./recording-card";
import { SkeletonRecordingList } from "./recording-card-skeleton";
import { useGetRecordings } from "@/lib/hooks/useGetRecordings";

export function RecordingPage(): JSX.Element {
  const {
    showAddForm,
    toggleAddForm,
    handleRecordingAdded,
    recordings,
    loading,
    error,
  } = useGetRecordings();

  return (
    <div className="min-h-screen w-full bg-[#ffffff] p-4 text-black antialiased transition-colors duration-200 md:p-6 lg:p-8 dark:bg-[#121212] dark:text-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col items-start justify-between md:flex-row md:items-center">
          <div>
            <h1 className="mb-2 text-3xl font-bold">Your Recordings</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage and view all your audio recordings
            </p>
          </div>
          <button
            onClick={toggleAddForm}
            className="mt-4 flex cursor-pointer items-center rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors duration-200 hover:bg-purple-700 md:mt-0"
          >
            {showAddForm ? "Cancel" : "Add New Recording"}
          </button>
        </div>

        {showAddForm && (
          <div className="mb-8 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <AddRecordingForm onRecordingAdded={handleRecordingAdded} />
          </div>
        )}

        {loading ? (
          <SkeletonRecordingList count={6} />
        ) : error ? (
          <div className="rounded-lg border border-red-200 bg-red-100 px-4 py-3 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
            {error}
          </div>
        ) : recordings.length === 0 ? (
          <div className="rounded-lg bg-gray-50 py-16 text-center dark:bg-gray-800/50">
            <h3 className="mb-2 text-xl font-medium">No recordings found</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Start by adding your first recording
            </p>
            <button
              onClick={toggleAddForm}
              className="cursor-pointer rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors duration-200 hover:bg-purple-700"
            >
              Add Recording
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recordings.map((recording) => (
              <RecordingCard key={recording._id} recording={recording} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
