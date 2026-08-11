"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "[Patient quote — 2 to 3 sentences about their experience and results. Example: Meg helped me recover from knee stiffness so I could complete my training cycles pain-free. The 1-on-1 care made all the difference.]",
    name: "Austin",
    city: "Shelbyville, KY",
  },
  {
    quote: "[Patient quote — 2 to 3 sentences about their experience and results. Example: Whitney resolved my postpartum leakage concerns within a few sessions. She was extremely respectful, explanation-focused, and comforting.]",
    name: "Sarah",
    city: "Shelbyville, KY",
  },
  {
    quote: "[Patient quote — 2 to 3 sentences about their experience and results. Example: Kim's in-home treatments fit my busy schedule perfectly. I am back to playing golf without lower back aches.]",
    name: "Robert",
    city: "Shelbyville, KY",
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
          Testimonials
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mt-3 mb-12">
          What Our Patients Are Saying
        </h2>

        {/* Carousel Container */}
        <div className="relative min-h-[220px] sm:min-h-[180px] flex items-center justify-center px-4 sm:px-12">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full flex flex-col items-center"
            >
              <Quote className="w-10 h-10 text-secondary/15 mb-6" />
              <p className="font-serif text-lg sm:text-xl italic text-primary/80 leading-relaxed max-w-2xl">
                "{testimonials[index].quote}"
              </p>
              <p className="font-sans text-sm font-semibold text-primary mt-6">
                &mdash; {testimonials[index].name}, {testimonials[index].city}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 p-2.5 rounded-full border border-primary/10 text-primary hover:bg-cream hover:text-accent transition-all cursor-pointer hidden sm:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 p-2.5 rounded-full border border-primary/10 text-primary hover:bg-cream hover:text-accent transition-all cursor-pointer hidden sm:block"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bullet Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > index ? 1 : -1);
                setIndex(idx);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                idx === index ? "bg-accent scale-110" : "bg-secondary/30 hover:bg-secondary/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
