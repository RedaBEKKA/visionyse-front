"use client";

import type { JSX } from "react";
import { fadeIn } from "./animation-variants";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CallToAction(): JSX.Element {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg md:p-12 dark:border-gray-700 dark:bg-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Transform Your Sales Calls?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Join thousands of sales professionals who are already using
            Visionyze to gain deeper insights from their conversations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/calls"
                className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 font-medium text-white dark:bg-gray-100 dark:text-gray-900"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#"
                className="inline-flex items-center rounded-lg border border-gray-300 px-6 py-3 font-medium dark:border-gray-600"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
