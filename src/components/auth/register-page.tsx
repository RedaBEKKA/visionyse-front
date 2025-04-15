"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { JSX } from "react";
import { RegisterForm } from "./register-form";

export function RegisterPage(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Link
            href="/"
            className="inline-flex items-center text-sm text-blue-600 hover:underline dark:text-blue-400"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to home
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800"
        >
          <h1 className="mb-6 text-center text-2xl font-bold">
            Create an Account
          </h1>
          <RegisterForm />
        </motion.div>
      </div>
    </div>
  );
}
