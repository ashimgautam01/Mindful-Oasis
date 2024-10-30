"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export const Typing = () => {
  const typingText = " Explore our comprehensive resources and tools to support your mental health journey."; // Define it as a constant
  const [typingIndex, setTypingIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypingIndex((prevIndex) => prevIndex + 1);
      setShowCursor((prevState) => !prevState);
      if (typingIndex >= typingText.length) {
        setTypingIndex(0);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [typingText, typingIndex]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
      <div className="max-w-md px-4 md:px-0">
        <h1 className="text-3xl mb-5 font-bold font-serif tracking-tight text-primary-foreground sm:text-4xl md:text-5xl xl:text-6xl">
          Unlock Your Mental Wellbeing
        </h1>
        <div className="relative">
          <p className="text-lg leading-relaxed text-white">
            <span>{typingText.slice(0, typingIndex)}</span>
            <span className={`typing-cursor ${showCursor ? "blinking" : ""}`}>|</span>
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row mt-20">
          <Link
            href="/assesment"
            className="inline-flex h-12 items-center font-semibold justify-center rounded-md bg-teal-500 px-6 text-sm text-primary shadow-md transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            prefetch={false}
          >
            self-assessment
          </Link>
        </div>
      </div>
    </div>
  );
};
