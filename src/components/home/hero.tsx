"use client";

import type { JSX } from "react";
import { fadeIn, scaleUp } from "./animation-variants";
import { ArrowRight, Play, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function Hero(): JSX.Element {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Transform Your Sales Calls Into Actionable Insights
            </h1>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              Visionyze automatically records, transcribes, and summarizes your
              sales calls, helping you focus on what matters most—building
              relationships and closing deals.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/calls"
                  className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 font-medium text-white dark:bg-gray-100 dark:text-gray-900"
                >
                  View Calls <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center rounded-lg border border-gray-300 px-6 py-3 font-medium dark:border-gray-700"
                >
                  Learn More <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="mt-10 md:mt-0 md:w-1/2"
            initial="hidden"
            animate="visible"
            variants={scaleUp}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl dark:shadow-purple-900/20">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-purple-100 to-blue-50 dark:border-gray-800 dark:from-purple-900/20 dark:to-blue-900/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg dark:bg-gray-800"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="ml-1 h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </motion.div>
                </div>
                <div className="absolute right-4 bottom-4 left-4 rounded-lg bg-black/70 p-3 text-sm text-white backdrop-blur-sm">
                  See how Visionyze transforms your sales conversations
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
