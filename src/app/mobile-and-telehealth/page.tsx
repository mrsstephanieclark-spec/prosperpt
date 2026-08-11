import Link from "next/link";
import { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { MapPin, Building, Laptop } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile & Telehealth Physical Therapy | Prosper PT & Wellness | Shelbyville, KY",
  description: "Physical therapy that comes to you — mobile visits, in-office appointments, and telehealth options from Prosper PT & Wellness in Shelbyville, KY.",
};

const columns = [
  {
    icon: <MapPin className="w-6 h-6 text-accent" />,
    title: "Mobile",
    desc: "Dr. Meg or a team member comes to you: your home, your gym, or your workplace, within the Shelbyville, KY area.",
    bestFor: "Busy schedules, home workouts, or anyone who trains at a gym like CrossFit and wants therapy in that same environment.",
  },
  {
    icon: <Building className="w-6 h-6 text-accent" />,
    title: "In-Office",
    desc: "Traditional physical therapy appointments at our comfortable clinical practice location.",
    bestFor: "Patients who prefer a dedicated treatment space.",
  },
  {
    icon: <Laptop className="w-6 h-6 text-accent" />,
    title: "Telehealth",
    desc: "Virtual physical therapy, personal training, and running coaching sessions via secure video calls.",
    bestFor: "Follow-ups, coaching check-ins, and patients who travel or can't make it in person.",
  },
];

export default function MobileTelehealth() {
  return (
    <div>
      {/* Header */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
              Treatment Options
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              Care That Fits Your Life
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              Not everyone can carve out time to sit in a waiting room. That's why Prosper offers three ways to get care — so your schedule and location don't get in the way of getting better.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3-Column Layout */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {columns.map((col, idx) => (
              <FadeIn key={col.title} direction="up" delay={idx * 0.1}>
                <div className="bg-cream rounded-3xl p-8 border border-secondary/10 flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
                  <div>
                    <div className="p-3 bg-white text-accent rounded-2xl w-fit mb-6 shadow-sm">
                      {col.icon}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                      {col.title}
                    </h3>
                    <p className="font-sans text-sm text-primary/80 leading-relaxed mb-6">
                      {col.desc}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-secondary/10">
                    <p className="font-sans text-xs font-semibold text-secondary">
                      <span className="uppercase text-[10px] tracking-wider text-primary/50 block mb-1">Best For</span>
                      {col.bestFor}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* SEO natural context block */}
          <div className="max-w-3xl mx-auto text-center border-t border-secondary/15 pt-12">
            <p className="font-sans text-xs text-primary/60 max-w-xl mx-auto leading-relaxed">
              If you are looking for **mobile physical therapy in Shelbyville, KY**, convenient **home physical therapy**, secure **telehealth physical therapy in Kentucky**, or are searching for "**mobile PT near me**", we fit care to your lifestyle.
            </p>
          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-primary text-cream py-16 md:py-24 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Wherever You Are, We'll Meet You There.
            </h2>
            <p className="font-sans text-base text-cream/80 max-w-md mx-auto mb-8">
              Choose the delivery option that works for your schedule, and let's start your recovery.
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
