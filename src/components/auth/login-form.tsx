"use client";

import { motion } from "motion/react";
import { Eye, EyeOff, Mail, Lock, Loader2 } from "lucide-react";
import Link from "next/link";
import type { JSX } from "react";
import { cn } from "@/lib/utils/utils";
import { useLogin } from "@/lib/hooks/useLogin";

export function LoginForm(): JSX.Element {
  const {
    handleSubmit,
    isPending,
    onSubmit,
    register,
    setShowPassword,
    showPassword,
    errors,
  } = useLogin();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Mail className="h-5 w-5" />
          </div>
          <input
            id="email"
            type="email"
            className={cn(
              "w-full rounded-md border py-2 pr-4 pl-10 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700",
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 dark:border-gray-600",
            )}
            placeholder="your@email.com"
            {...register("email")}
          />
        </div>
        {errors.email && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1 text-xs text-red-500"
          >
            {errors.email.message}
          </motion.p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Lock className="h-5 w-5" />
          </div>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            className={cn(
              "w-full rounded-md border py-2 pr-10 pl-10 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700",
              errors.password
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 dark:border-gray-600",
            )}
            placeholder="••••••••"
            {...register("password")}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
        {errors.password && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1 text-xs text-red-500"
          >
            {errors.password.message}
          </motion.p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 text-sm text-gray-600 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <Link
          href="#"
          className="text-sm text-blue-600 hover:underline dark:text-blue-400"
        >
          Forgot password?
        </Link>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isPending}
        className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-md bg-blue-600 px-4 py-2 font-medium text-white shadow transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending && <Loader2 className="animate-spin" />}
        Login
      </motion.button>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Register
          </Link>
        </p>
      </div>
    </form>
  );
}
