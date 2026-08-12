"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const setPlaySpeed = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  };

  useEffect(() => {
    setPlaySpeed();
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      poster="/images/hero_pt_wellness.jpg"
      className="object-cover w-full h-full opacity-55"
      onLoadedMetadata={setPlaySpeed}
      onCanPlay={setPlaySpeed}
    >
      <source src="/images/updated-hero-video.mp4?v=3" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
