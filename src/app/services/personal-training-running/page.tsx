import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import GetInTouchBox from "@/components/GetInTouchBox";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Training & Running Coaching | Prosper PT & Wellness | Shelbyville, KY",
  description: "Personal training and running performance coaching in Shelbyville, KY from doctorate-level physical therapists who understand your body and your goals.",
};

const inclusions = [
  {
    title: "General wellness & strength training",
    desc: "Build a stronger, more resilient body at any age or fitness level under doctorate-level supervision.",
  },
  {
    title: "Sport-specific training",
    desc: "Tailored strength, capacity, and conditioning programs designed for your specific sport or outdoor activity.",
  },
  {
    title: "Running coaching",
    desc: "For runners of all levels, focused on running mechanics, gait analysis, efficiency, and injury prevention.",
  },
];

export default function PersonalTrainingRunning() {
  return (
    <div>
      {/* Header */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
              Performance Training
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              Train Smarter, Run Stronger
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              Whether you're building general strength, training for a specific sport, or working toward your next race, our personal training and running coaching come from therapists who understand how your body actually moves — not just a generic workout plan.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <FadeIn direction="left">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  What's Included in Your Training
                </h2>
                
                <div className="space-y-6 mb-10">
                  {inclusions.map((inc) => (
                    <div key={inc.title} className="flex gap-4 p-5 bg-cream rounded-3xl border border-secondary/5">
                      <div className="p-1 rounded-full bg-white text-accent h-fit mt-0.5 shadow-sm">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-primary mb-1">
                          {inc.title}
                        </h3>
                        <p className="font-sans text-sm text-primary/80 leading-relaxed">
                          {inc.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-cream rounded-2xl border-l-4 border-accent">
                  <h4 className="font-serif text-sm font-bold text-primary mb-1">
                    Resilient Fitness Programs
                  </h4>
                  <p className="font-sans text-xs text-primary/70 leading-relaxed">
                    If you want the best **personal training in Shelbyville, KY**, are looking for a dedicated **running coach in Kentucky**, or need specialized **injury prevention training**, we build your plan around how your joints actually move.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <FadeIn direction="right">
                <div className="relative aspect-[3/2] w-full rounded-[2rem] overflow-hidden shadow-sm border border-secondary/15 mb-8">
                  <Image
                    src="/images/running_performance.jpg"
                    alt="Runner training outside under natural daylight"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="bg-cream rounded-3xl p-8 border border-secondary/15">
                  <h3 className="font-serif text-xl font-bold text-primary mb-4">
                    Who This Is For
                  </h3>
                  <p className="font-sans text-sm text-primary/80 leading-relaxed mb-6">
                    Active adults who want to train with a professional who understands injury prevention, runners and swimmers who keep getting sidelined by the same nagging issues, student athletes looking to elevate their performance safely, and anyone who wants a fitness plan built around their real goals.
                  </p>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full px-5 py-3 rounded-full bg-accent text-white font-sans text-sm font-semibold hover:bg-accent/90 transition-colors shadow-sm"
                  >
                    Schedule a Session
                  </Link>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Get in Touch Box repeated */}
      <GetInTouchBox />
    </div>
  );
}
