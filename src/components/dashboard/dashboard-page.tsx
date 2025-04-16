"use client";

import { type JSX } from "react";
import { Session } from "next-auth";
import { useEditProfile } from "@/lib/hooks/useEditProfile";

export function DashboardPage({
  session,
}: {
  session: Session | null;
}): JSX.Element {
  const {
    isEditing,
    onSubmit,
    handleLogout,
    register,
    errors,
    isSubmitting,
    handleSubmit,
    reset,
    setIsEditing,
  } = useEditProfile(session);
  const user = session?.user;

  return (
    <div className="min-h-screen bg-[#ffffff] text-black antialiased transition-colors duration-200 dark:bg-[#121212] dark:text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLogout}
              className="cursor-pointer rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
              <div className="mb-6 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                  {user?.fullName?.charAt(0) || user?.email?.charAt(0)}
                </div>
              </div>
              <h2 className="mb-4 text-center text-xl font-semibold">
                {user?.fullName}
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Username
                  </p>
                  <p className="font-medium">{user?.pseudo}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <p className="font-medium">{user?.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">ID</p>
                  <p className="truncate font-medium">{user?.id}</p>
                </div>
              </div>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="mt-6 w-full cursor-pointer rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
              <h2 className="mb-6 text-xl font-semibold">
                {isEditing ? "Edit Profile" : "Profile Information"}
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-1 block text-sm font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700"
                    disabled={!isEditing}
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="pseudo"
                    className="mb-1 block text-sm font-medium"
                  >
                    Username
                  </label>
                  <input
                    id="pseudo"
                    type="text"
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700"
                    disabled={!isEditing}
                    {...register("pseudo")}
                  />
                  {errors.pseudo && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.pseudo.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700"
                    disabled={!isEditing}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {isEditing && (
                  <>
                    <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
                      <h3 className="mb-3 text-lg font-medium">
                        Change Password (Optional)
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="oldPassword"
                            className="mb-1 block text-sm font-medium"
                          >
                            Current Password
                          </label>
                          <input
                            id="oldPassword"
                            type="password"
                            className="w-full rounded border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700"
                            {...register("oldPassword")}
                          />
                          {errors.oldPassword && (
                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                              {errors.oldPassword.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="newPassword"
                            className="mb-1 block text-sm font-medium"
                          >
                            New Password
                          </label>
                          <input
                            id="newPassword"
                            type="password"
                            className="w-full rounded border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700"
                            {...register("newPassword")}
                          />
                          {errors.newPassword && (
                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                              {errors.newPassword.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="confirmPassword"
                            className="mb-1 block text-sm font-medium"
                          >
                            Confirm New Password
                          </label>
                          <input
                            id="confirmPassword"
                            type="password"
                            className="w-full rounded border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700"
                            {...register("confirmPassword")}
                          />
                          {errors.confirmPassword && (
                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                              {errors.confirmPassword.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <button
                        type="submit"
                        className="flex-1 cursor-pointer rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Updating..." : "Save Changes"}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setIsEditing(false);
                          reset();
                        }}
                        className="flex-1 cursor-pointer rounded bg-gray-300 px-4 py-2 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
