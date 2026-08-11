import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ContactBox from "@/components/ContactBox";
import { Quote } from "lucide-react";

export const metadata = {
  title: "Client Testimonials",
  description: "Read physical therapy and wellness success stories from runners, moms, and active adults in Shelbyville, KY who recovered with Prosper PT.",
};

const reviews = [
  {
    quote: "I was struggling with knee pain while preparing for my marathon. Meg worked with me 1-on-1 at CrossFit Shelbyville. She analyzed my running gait and adjusted my strength drills. Not only is my knee pain gone, but I also set a personal record!",
    author: "Austin M.",
    tag: "Runner & Athlete",
  },
  {
    quote: "After having my second child, I was dealing with constant back discomfort and core weakness. Whitney designed a personalized pelvic health program that was gentle and incredibly effective. She made me feel completely comfortable and listened to.",
    author: "Sarah T.",
    tag: "Postpartum Mom",
  },
  {
    quote: "Having Kim treat me in my home was a game changer for my schedule. I've done physical therapy elsewhere, but the undivided attention for a full hour makes a huge difference. I am back to playing golf without lower back stiffness.",
    author: "Robert K.",
    tag: "Active Adult",
  },
  {
    quote: "I had terrible tension headaches for years. Dr. Meg combined dry needling with upper back mobility work, and my headaches have practically disappeared. She also showed me how to maintain my posture at my desk so they don't return.",
    author: "Jessica P.",
    tag: "Office Professional",
  },
  {
    quote: "I had bladder leakage issues that made me nervous to return to running or CrossFit. Dr. Whitney was incredibly professional, explainable, and respectful. Her pelvic floor program gave me my active lifestyle back. It was life-changing.",
    author: "Amanda L.",
    tag: "CrossFit Athlete",
  },
  {
    quote: "As a student athlete, I wanted to build strength and recover from shoulder stiffness. Dr. Kim set up a custom strength plan that fit perfectly with my school sports schedule. I feel stronger and safer on the field.",
    author: "Tyler S.",
    tag: "High School Athlete",
  },
];

export default function Testimonials() {
  return (
    <div>
      {/* Header */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
              Success Stories
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              What our clients say about their recovery
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              Read how Dr. Meg, Dr. Whitney, and Dr. Kim help runners, athletes, busy moms, and local Shelbyville residents live active lives without limits.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials list */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((rev, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.05}>
                <div className="bg-cream rounded-3xl p-8 border border-secondary/5 h-full flex flex-col justify-between hover:shadow-sm transition-all duration-300">
                  <div className="relative">
                    <Quote className="w-8 h-8 text-secondary/20 absolute -top-4 -left-4 shrink-0" />
                    <p className="font-sans text-sm text-primary/80 italic leading-relaxed mb-6 pl-4 relative z-10">
                      "{rev.quote}"
                    </p>
                  </div>
                  <div>
                    <p className="font-serif text-sm font-bold text-primary">{rev.author}</p>
                    <p className="font-sans text-[11px] text-secondary font-medium tracking-wide uppercase mt-0.5">
                      {rev.tag}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable Contact Box */}
      <ContactBox />
    </div>
  );
}
