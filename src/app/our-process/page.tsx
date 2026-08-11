import Link from "next/link";
import { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { PhoneCall, Search, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process | Prosper PT & Wellness | Shelbyville, KY",
  description: "How physical therapy works at Prosper PT & Wellness — from your free consult to a treatment plan built around your goals.",
};

const steps = [
  {
    number: "01",
    icon: <PhoneCall className="w-6 h-6 text-accent" />,
    title: "Step 1 — Start Here",
    desc: "Fill out a quick form with your name, phone, and email, and we'll reach out to learn about your goals and see if Prosper is the right fit.",
  },
  {
    number: "02",
    icon: <Search className="w-6 h-6 text-accent" />,
    title: "Step 2 — Evaluation",
    desc: "A full, unrushed assessment of your mobility, strength, and function — so we understand what's really going on, not just the symptom.",
  },
  {
    number: "03",
    icon: <Calendar className="w-6 h-6 text-accent" />,
    title: "Step 3 — Treatment Plan",
    desc: "A custom plan built around your specific goals, whether that's returning to a sport, managing pain, or simply moving through life without limitations.",
  },
];

export default function OurProcess() {
  return (
    <div>
      {/* Header */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
              Patient Journey
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              How It Works
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              Understanding the **physical therapy process** helps you feel comfortable. Here is **what to expect at physical therapy**, starting with your initial **PT evaluation in Shelbyville, KY**.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 relative">
            {/* Connected-line visual for desktop */}
            <div className="absolute left-[39px] md:left-1/2 top-10 bottom-10 w-0.5 bg-secondary/15 -translate-x-1/2 hidden md:block"></div>

            {steps.map((step, idx) => (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row items-start relative ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step Content */}
                <div className="w-full md:w-[45%] pl-16 md:pl-0">
                  <FadeIn direction={idx % 2 === 1 ? "left" : "right"}>
                    <div className="bg-cream rounded-3xl p-8 border border-secondary/10 hover:shadow-sm transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-white text-accent rounded-2xl shadow-sm">
                          {step.icon}
                        </div>
                        <span className="font-serif text-3xl font-extrabold text-secondary/30">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="font-sans text-sm text-primary/75 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </FadeIn>
                </div>

                {/* Central Dot */}
                <div className="absolute left-[39px] md:left-1/2 top-10 w-5 h-5 rounded-full bg-accent border-4 border-white shadow-sm -translate-x-1/2 z-10"></div>
                
                {/* Spacer */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-primary text-cream py-16 md:py-24 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="font-sans text-base text-cream/80 max-w-md mx-auto mb-8">
              Submit our simple contact form to set up your free consultation call with one of our doctorate-level physical therapists.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-accent text-white font-sans text-base font-semibold shadow-md hover:bg-accent/90 hover:scale-[1.02] transition-all"
            >
              Start Here &rarr;
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
