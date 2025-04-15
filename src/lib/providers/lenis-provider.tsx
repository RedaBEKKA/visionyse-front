"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function LenisProvider(): null {
  useEffect(() => {
    const lenis = new Lenis();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    lenis.on("scroll", (e: unknown) => {});

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return null;
}
