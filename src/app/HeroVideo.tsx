"use client";

import { useState } from "react";

export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onPlaying={() => setIsPlaying(true)}
        className={`absolute inset-0 object-cover w-full h-full object-[right_30%] scale-105 origin-right transition-opacity duration-300 ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/images/updated-hero-video.mp4?v=4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
