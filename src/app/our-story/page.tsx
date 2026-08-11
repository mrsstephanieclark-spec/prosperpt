import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ContactBox from "@/components/ContactBox";
import { CheckCircle2, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Our Story",
  description: "Learn how Dr. Meg Raymer-Brown founded Prosper PT & Wellness to escape the limitations of corporate physical therapy and prioritize undivided patient care.",
};

export default function OurStory() {
  return (
    <div>
      {/* Editorial Header */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
              Our Backstory
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              Why we broke away from corporate physical therapy
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              Our founder, Dr. Meg Raymer-Brown, started Prosper PT & Wellness with a single goal: to return to a model where the patient is the only priority.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Visual Callout */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <FadeIn direction="left">
                <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden shadow-sm border border-secondary/15 mb-6">
                  <Image
                    src="/images/meg_portrait.jpg"
                    alt="Dr. Meg Raymer-Brown, PT, DPT, Cert. DN working with a client"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-cream p-6 rounded-2xl border border-secondary/10">
                  <h4 className="font-serif text-base font-semibold text-primary mb-2">Our Mission</h4>
                  <p className="font-sans text-xs text-primary/85 leading-relaxed">
                    To deliver highly personalized, doctorate-level, 1-on-1 care that respects your autonomy, considers your lifestyle, and equips you with the tools to manage your own health for the long term.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Narrative text */}
            <div className="lg:col-span-7">
              <FadeIn direction="right">
                <div className="font-sans text-base text-primary/80 space-y-6 leading-relaxed">
                  <h3 className="font-serif text-2xl font-bold text-primary">The Corporate outpatient Reality</h3>
                  <p>
                    For seven years, Meg worked in a busy corporate outpatient physical therapy clinic. Like many dedicated therapists, she loved her patients but grew increasingly frustrated with the system. 
                  </p>
                  <p>
                    In that corporate setting, time with patients was severely rushed. Therapists were forced to juggle multiple clients simultaneously, passing them off to aides, technicians, or students. Even worse, health insurance limitations dictated exactly what treatments could be provided and how many sessions were allowed—regardless of what the patient actually needed.
                  </p>
                  <p>
                    Meg watched people get sicker, treatments become more fragmented, and patient care suffer under administrative pressures. She knew there had to be a better way to practice.
                  </p>

                  <div className="p-6 bg-cream rounded-2xl border border-secondary/5 my-8">
                    <div className="flex gap-4">
                      <ShieldAlert className="w-6 h-6 text-accent shrink-0" />
                      <div>
                        <h4 className="font-serif text-sm font-semibold text-primary mb-1">
                          The System vs. The Patient
                        </h4>
                        <p className="font-sans text-xs text-primary/70">
                          Insurance-driven models force clinics to focus on volume over value. Short 15-minute windows and high copays result in incomplete recoveries and repeat injuries.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-primary pt-4">Creating Prosper PT & Wellness</h3>
                  <p>
                    Prosper PT & Wellness was born to restore integrity to physical therapy. Meg designed the practice as a self-pay model from day one. By operating outside the limitations of commercial health insurance networks, we gain complete freedom to prioritize you.
                  </p>
                  <p>
                    Alongside Dr. Whitney Ensor and Dr. Kim Wilson, the practice offers undivided, doctorate-level care. Every appointment is a full hour, spent entirely 1-on-1 with the same therapist. 
                  </p>
                  <p>
                    We take a whole-person approach. We don't just treat the spot that hurts; we look at your movement patterns, lifestyle, stress, sleep, and personal goals. Whether your objective is to return to running, walk without pelvic pain, play with your grandchildren, or lift weights, we align your plan with what you love.
                  </p>
                  <p className="font-medium text-primary">
                    Our ultimate goal is to equip you to self-manage so that you don't need us forever. We want to empower you with the resilience, strength, and education to prevent future injuries and stay active.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-cream py-16 md:py-24 border-t border-secondary/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn direction="up">
              <h2 className="font-serif text-3xl font-bold text-primary">Our Core Values</h2>
              <p className="font-sans text-sm text-primary/75 mt-3">
                The principles that guide how we treat, interact, and support our Shelbyville community.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn direction="up">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/5 h-full">
                <CheckCircle2 className="w-6 h-6 text-accent mb-4" />
                <h4 className="font-serif text-lg font-bold text-primary mb-2">Patient Autonomy</h4>
                <p className="font-sans text-xs text-primary/80 leading-relaxed">
                  We believe you should have control over your recovery. You and your doctor decide when you are healed, not an insurance adjuster in a distant office.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/5 h-full">
                <CheckCircle2 className="w-6 h-6 text-accent mb-4" />
                <h4 className="font-serif text-lg font-bold text-primary mb-2">Uncompromised Quality</h4>
                <p className="font-sans text-xs text-primary/80 leading-relaxed">
                  We never double-book clients or delegate your care to assistants. Every session is one-on-one with a doctorate-level clinical specialist.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/5 h-full">
                <CheckCircle2 className="w-6 h-6 text-accent mb-4" />
                <h4 className="font-serif text-lg font-bold text-primary mb-2">Whole-Person Perspective</h4>
                <p className="font-sans text-xs text-primary/80 leading-relaxed">
                  We consider your sleep, lifestyle, stress, nutrition, and personal goals. True wellness requires looking at the big picture, not just the isolated injury.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Reusable Contact Box */}
      <ContactBox />
    </div>
  );
}
