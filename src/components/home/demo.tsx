"use client";

import type { JSX } from "react";
import { useState } from "react";
import { motion } from "motion/react";
import { fadeIn, scaleUp } from "./animation-variants";
import { cn } from "@/lib/utils/utils";

export function Demo(): JSX.Element {
  const [activeTab, setActiveTab] = useState<"transcription" | "summary">(
    "transcription",
  );

  return (
    <section className="py-16" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            See It In Action
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Experience how Visionyze transforms your sales calls into valuable
            insights.
          </p>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleUp}
        >
          <div className="flex flex-col md:flex-row">
            <div className="border-b border-gray-200 p-6 md:w-1/3 md:border-r md:border-b-0 dark:border-gray-700">
              <div className="mb-6">
                <h3 className="mb-4 text-xl font-semibold">Call Details</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Client
                    </p>
                    <p className="font-medium">Aymen BEKKA</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Date
                    </p>
                    <p className="font-medium">April 10, 2025</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Duration
                    </p>
                    <p className="font-medium">32 minutes</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Sales Rep
                    </p>
                    <p className="font-medium">Reda Bekka</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-semibold">Key Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {["Product Demo", "Pricing", "Integration", "Timeline"].map(
                    (topic, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700"
                      >
                        {topic}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
            <div className="p-6 md:w-2/3">
              <div className="mb-4 flex border-b border-gray-200 dark:border-gray-700">
                <button
                  className={cn(
                    "cursor-pointer px-4 py-2 text-sm font-medium",
                    activeTab === "transcription"
                      ? "border-b-2 border-gray-900 text-gray-900 dark:border-gray-100 dark:text-gray-100"
                      : "text-gray-500 dark:text-gray-400",
                  )}
                  onClick={() => setActiveTab("transcription")}
                >
                  Transcription
                </button>
                <button
                  className={cn(
                    "cursor-pointer px-4 py-2 text-sm font-medium",
                    activeTab === "summary"
                      ? "border-b-2 border-gray-900 text-gray-900 dark:border-gray-100 dark:text-gray-100"
                      : "text-gray-500 dark:text-gray-400",
                  )}
                  onClick={() => setActiveTab("summary")}
                >
                  AI Summary
                </button>
              </div>
              <div className="h-64 overflow-y-auto pr-2 text-gray-600 dark:text-gray-300">
                {activeTab === "transcription" ? (
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        Reda (0:00)
                      </p>
                      <p>
                        Hi Aymen, thanks for taking the time to meet with me
                        today. I&apos;m excited to show you how our platform can
                        help streamline your sales process.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        Aymen (0:15)
                      </p>
                      <p>
                        Thanks for having me, Reda. I&apos;ve heard good things
                        about your solution and I&apos;m curious to see how it
                        might fit with our current workflow.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        Reda (0:30)
                      </p>
                      <p>
                        Great! Before I dive into the demo, could you tell me a
                        bit more about your current challenges with managing
                        sales conversations?
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        Aymen (0:45)
                      </p>
                      <p>
                        Sure. Our biggest issue right now is that our sales team
                        spends too much time taking notes during calls instead
                        of focusing on the conversation. And then we still miss
                        important details...
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                        Key Points
                      </h4>
                      <ul className="list-disc space-y-1 pl-5">
                        <li>
                          Acme Corporation is looking for a solution to reduce
                          time spent on note-taking during sales calls
                        </li>
                        <li>
                          They currently use a manual process that misses
                          important details
                        </li>
                        <li>
                          Integration with their existing CRM (Salesforce) is a
                          priority
                        </li>
                        <li>
                          Budget concerns were raised regarding the enterprise
                          tier pricing
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                        Action Items
                      </h4>
                      <ul className="list-disc space-y-1 pl-5">
                        <li>
                          Send detailed information about Salesforce integration
                          options
                        </li>
                        <li>
                          Schedule a follow-up call with their technical team
                        </li>
                        <li>
                          Provide case studies from similar companies in their
                          industry
                        </li>
                        <li>
                          Discuss potential custom pricing options for their
                          specific needs
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                        Sentiment Analysis
                      </h4>
                      <p>
                        Overall positive. Client showed strong interest in the
                        product features but expressed some concerns about
                        implementation timeline.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
