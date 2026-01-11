"use client";
import { socialLinks } from "@/config/socialLinks";
import React, { useState, useEffect } from "react";

export default function Hero() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-[#0f172a] px-6 text-center">
      {/* Name */}
      <h1 className="text-4xl font-bold text-[#e5e7eb] sm:text-5xl md:text-6xl">
        James Sullivan
      </h1>

      {/* Subtitle / Role */}
      <p className="mt-3 text-lg text-[#60a5fa] sm:max-w-[650px] sm:text-xl md:text-2xl">
        UTSA CS student building reliable systems and backend-focused
        applications
      </p>

      {/* Description */}
      <p className="mt-4 max-w-xl text-sm text-[#d1d5db] sm:text-base md:text-lg">
        Hands-on experience in C, Bash, and CI/CD pipelines. I enjoy working
        close to the system, solving practical problems, and building software
        that's easy to run, test, and maintain.
      </p>

      {/* Buttons */}
      <div className="mb-12 mt-6 flex flex-col gap-4 sm:flex-row">
        <a
          href={socialLinks.github}
          target="_blank"
          className="rounded-md bg-[#1f2937] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#374151] sm:text-base"
        >
          GitHub
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          className="rounded-md bg-[#0a66c2] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#004182] sm:text-base"
        >
          LinkedIn
        </a>
      </div>

      <p className="text-sm text-gray-500">
        Open to full-time and internship opportunities
      </p>

      {/* Scroll arrow (all devices) */}
      <div
        className={`absolute bottom-4 flex w-full justify-center transition-opacity duration-500 ${
          showArrow ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex animate-bounce flex-col items-center">
          <svg
            className="h-5 w-5 text-[#60a5fa]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <hr className="mt-16 border-gray-200" />
      </div>
    </section>
  );
}
