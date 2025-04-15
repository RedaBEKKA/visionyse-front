import type { JSX } from "react";
import { Features } from "./features";
import { Hero } from "./hero";
import { HowItWorks } from "./how-it-works";
import { Stats } from "./stats";
import { CallToAction } from "./call-To-Action";
import { Demo } from "./demo";

export function Home(): JSX.Element {
  return (
    <div className="w-full bg-[#ffffff] text-black transition-all duration-200 dark:bg-[#121212] dark:text-gray-100">
      <Hero />
      <Features />
      <Demo />
      <HowItWorks />
      <Stats />
      <CallToAction />
    </div>
  );
}
