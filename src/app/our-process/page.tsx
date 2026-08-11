import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ContactBox from "@/components/ContactBox";
import { PhoneCall, Ruler, HeartHandshake, Award } from "lucide-react";

export const metadata = {
  title: "Our Process",
  description: "Learn how we guide you from a free consult call to full recovery and long-term movement autonomy. Doctorate-level physical therapy process.",
};

const steps = [
  {
    number: "01",
    icon: <PhoneCall className="w-6 h-6 text-accent" />,
    title: "Book a Free Consult Call",
    desc: "We start with a quick, low-friction phone call to discuss what you're dealing with, answer your questions, and ensure we are a good fit. No referrals or insurance paperwork needed.",
  },
  {
    number: "02",
    icon: <Ruler className="w-6 h-6 text-accent" />,
    title: "60-Minute Movement Assessment",
    desc: "Your initial visit is a full hour of 1-on-1 analysis. We look at your whole body's mobility, strength, and alignment, and start active treatment (like dry needling or cupping) on day one.",
  },
  {
    number: "03",
    icon: <HeartHandshake className="w-6 h-6 text-accent" />,
    title: "1-on-1 Targeted Sessions",
    desc: "Subsequent sessions are tailored to your progress. You work with the exact same doctorate-level therapist every visit, blending manual therapy, movement retraining, and strength work.",
  },
  {
    number: "04",
    icon: <Award className="w-6 h-6 text-accent" />,
    title: "Equipped for Autonomy",
    desc: "Our goal is to build your strength and movement confidence so you DON'T need us forever. We equip you to self-manage and prevent future injury, with optional wellness memberships for ongoing recovery.",
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
              The Path to Recovery
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              Our step-by-step approach to personalized wellness
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              From our first consult call to your final discharge, our process is built around your individual movement goals, schedule, and lifestyle.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Steps List */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Center line for desktop */}
            <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary/20 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-16 md:space-y-24">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`flex flex-col md:flex-row items-start relative ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Card block */}
                  <div className="w-full md:w-[45%] pl-16 md:pl-0">
                    <FadeIn direction={index % 2 === 1 ? "left" : "right"}>
                      <div className="bg-cream rounded-3xl p-8 border border-secondary/10 hover:shadow-sm transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-3 bg-white text-accent rounded-2xl shadow-sm">
                            {step.icon}
                          </div>
                          <span className="font-serif text-3xl font-extrabold text-secondary/30 leading-none">
                            {step.number}
                          </span>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-primary mb-2">
                          {step.title}
                        </h3>
                        <p className="font-sans text-sm text-primary/75 leading-relaxed font-normal">
                          {step.desc}
                        </p>
                      </div>
                    </FadeIn>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-[39px] md:left-1/2 top-8 w-6 h-6 rounded-full bg-accent border-4 border-white shadow-sm -translate-x-1/2 z-10"></div>
                  
                  {/* Empty Spacer */}
                  <div className="hidden md:block w-[45%]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Start Here / Low-Friction Form Section */}
      <section className="py-20 md:py-28 bg-cream border-t border-secondary/15">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">
              Begin your movement journey today
            </h2>
            <p className="font-sans text-base text-primary/80 max-w-xl mx-auto mb-10 leading-relaxed">
              We make starting as low-friction as possible. Book your consult call, and let's work together to help you live without limits.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-accent text-white font-sans text-base font-semibold shadow-md hover:bg-accent/90 transition-all hover:scale-[1.02]"
            >
              Start Here
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Reusable Contact Box */}
      <ContactBox />
    </div>
  );
}
