"use client";

import type { JSX } from "react";
import { fadeIn, featureVariant, staggerContainer } from "./animation-variants";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function HowItWorks(): JSX.Element {
  const steps = [
    {
      number: "01",
      title: "Record",
      description:
        "Capture your sales calls automatically through our secure platform.",
    },
    {
      number: "02",
      title: "Process",
      description:
        "Our AI transcribes the audio and generates insightful summaries.",
    },
    {
      number: "03",
      title: "Access",
      description:
        "View, search, and analyze your calls through our intuitive interface.",
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
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">How It Works</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Our simple three-step process makes it easy to get started.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={featureVariant}
            >
              <div className="h-full rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-4 text-4xl font-bold text-gray-700 dark:text-gray-400">
                  {step.number}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-4 z-10 hidden -translate-y-1/2 transform md:block">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
