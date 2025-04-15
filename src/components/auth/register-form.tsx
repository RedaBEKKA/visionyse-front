"use client";

import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  UserCircle,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils/utils";
import type { JSX } from "react";
import { useRegister } from "@/lib/hooks/useRegister";

const inputVariants = {
  focus: { scale: 1.01 },
  blur: { scale: 1 },
};

export function RegisterForm(): JSX.Element {
  const {
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isPending,
    register,
    errors,
    onSubmit,
    handleSubmit,
  } = useRegister();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-1">
        <label htmlFor="pseudo" className="text-sm font-medium">
          Username
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <User className="h-5 w-5" />
          </div>
          <motion.input
            variants={inputVariants}
            whileFocus="focus"
            id="pseudo"
            type="text"
            className={cn(
              "w-full rounded-md border py-2 pr-4 pl-10 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700",
              errors.pseudo
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 dark:border-gray-600",
            )}
            placeholder="johndoe"
            {...register("pseudo")}
          />
        </div>
        {errors.pseudo && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1 text-xs text-red-500"
          >
            {errors.pseudo.message}
          </motion.p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="fullName" className="text-sm font-medium">
          Full Name
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <UserCircle className="h-5 w-5" />
          </div>
          <motion.input
            variants={inputVariants}
            whileFocus="focus"
            id="fullName"
            type="text"
            className={cn(
              "w-full rounded-md border py-2 pr-4 pl-10 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700",
              errors.fullName
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 dark:border-gray-600",
            )}
            placeholder="John Doe"
            {...register("fullName")}
          />
        </div>
        {errors.fullName && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1 text-xs text-red-500"
          >
            {errors.fullName.message}
          </motion.p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Mail className="h-5 w-5" />
          </div>
          <motion.input
            variants={inputVariants}
            whileFocus="focus"
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
          <motion.input
            variants={inputVariants}
            whileFocus="focus"
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

      <div className="space-y-1">
        <label htmlFor="confirmPassword" className="text-sm font-medium">
          Confirm Password
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Lock className="h-5 w-5" />
          </div>
          <motion.input
            variants={inputVariants}
            whileFocus="focus"
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            className={cn(
              "w-full rounded-md border py-2 pr-10 pl-10 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700",
              errors.confirmPassword
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 dark:border-gray-600",
            )}
            placeholder="••••••••"
            {...register("confirmPassword")}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
        {errors.confirmPassword && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1 text-xs text-red-500"
          >
            {errors.confirmPassword.message}
          </motion.p>
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isPending}
        className="in-checked: flex w-full cursor-pointer items-center justify-center gap-3 rounded-md bg-blue-600 px-4 py-2 font-medium text-white shadow transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending && <Loader2 className="animate-spin" />}
        Create Account
      </motion.button>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Login
          </Link>
        </p>
      </div>
    </form>
  );
}
