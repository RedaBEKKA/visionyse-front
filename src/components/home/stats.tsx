"use client";

import type { JSX } from "react";
import { scaleUp } from "./animation-variants";
import { motion } from "motion/react";

export function Stats(): JSX.Element {
  const stats = [
    { value: "99%", label: "Transcription Accuracy" },
    { value: "75%", label: "Time Saved" },
    { value: "3x", label: "Faster Insights" },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleUp}
        >
          <div className="px-6 py-12 text-white md:py-16">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Proven Results
              </h2>
              <p className="mx-auto max-w-2xl text-lg opacity-90">
                Our customers see significant improvements in their sales
                processes.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="mb-2 text-4xl font-bold md:text-5xl">
                    {stat.value}
                  </div>
                  <p className="text-lg opacity-90">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
