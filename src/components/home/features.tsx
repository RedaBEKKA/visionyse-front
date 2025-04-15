"use client";

import type { JSX } from "react";
import { motion } from "motion/react";
import { fadeIn, featureVariant, staggerContainer } from "./animation-variants";
import { Mic, FileText, Search, Sparkles } from "lucide-react";

export function Features(): JSX.Element {
  const features = [
    {
      icon: <Mic className="h-6 w-6 text-purple-500" />,
      title: "Audio Recording",
      description:
        "Automatically record and store sales calls with prospects for future reference.",
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      title: "Transcription",
      description:
        "Convert speech to text with our advanced transcription technology.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-amber-500" />,
      title: "AI Summary",
      description:
        "Get concise AI-generated summaries of your calls using Gladia.io.",
    },
    {
      icon: <Search className="h-6 w-6 text-green-500" />,
      title: "Search & Analysis",
      description:
        "Easily search through calls and analyze conversation patterns.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Powerful Features
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Our platform offers everything you need to get the most out of your
            sales conversations.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              variants={featureVariant}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
