import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { 
  Heart, 
  Award, 
  UserCheck, 
  Users, 
  GraduationCap, 
  ShieldCheck 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story | Prosper PT & Wellness | Shelbyville, KY",
  description: "Why Prosper PT & Wellness exists — Dr. Meg Raymer-Brown's story, our faith-driven mission, and why we built a practice around one-on-one, whole-person care.",
};

const values = [
  {
    icon: <Heart className="w-5 h-5 text-accent" />,
    title: "Faith",
    desc: "Our work is rooted in purpose and service. Prosper is a faith-based physical therapy practice built around serving others and bringing hope to our Shelbyville community.",
  },
  {
    icon: <Award className="w-5 h-5 text-accent" />,
    title: "Clinical Excellence",
    desc: "Real expertise, not shortcuts. We provide advanced, doctorate-level treatment plans to give you top-tier results.",
  },
  {
    icon: <UserCheck className="w-5 h-5 text-accent" />,
    title: "Whole-Person Care",
    desc: "We treat the root cause, and the whole person behind it. We look at lifestyle, goals, sleep, and stressors, not just billing codes.",
  },
  {
    icon: <Users className="w-5 h-5 text-accent" />,
    title: "Relationships",
    desc: "You're known here, not just another chart. You will work with the same therapist every single time to ensure continuity.",
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-accent" />,
    title: "Empowerment",
    desc: "Our goal is for you to be equipped to manage your own health — not to need us forever. We equip you to stay injury-free.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-accent" />,
    title: "Integrity & Trust",
    desc: "Honest, transparent care, every time. You know what you're paying upfront with no hidden costs.",
  },
];

export default function OurStory() {
  return (
    <div>
      {/* Header */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
              Our Journey
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              Why Prosper Exists
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              If you have been looking for an attentive, doctorate-level **physical therapist in Shelbyville, KY**, this is our **self-pay PT story** and our mission to provide patient-first care.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Dr Meg Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <FadeIn direction="left" className="relative w-full max-w-md">
                <div className="aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden shadow-sm border border-secondary/15 organic-shape-1">
                  <Image
                    src="/images/meg_portrait.jpg"
                    alt="Dr. Meg Raymer-Brown, PT, DPT, Cert. DN"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-cream px-5 py-3.5 rounded-2xl shadow-sm border border-secondary/10">
                  <p className="font-serif text-xs font-bold text-primary">Dr. Meg Raymer-Brown</p>
                  <p className="font-sans text-[10px] text-secondary font-medium tracking-wide uppercase mt-0.5">
                    Founder &bull; PT, DPT, Cert. DN
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Narrative Context */}
            <div className="lg:col-span-7">
              <FadeIn direction="right">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  A personal note from our founder
                </h2>
                
                <div className="font-sans text-base text-primary/85 space-y-6 leading-relaxed mb-8">
                  <p>
                    "I spent seven years working in a busy corporate outpatient clinic. My time with patients was often rushed, and my hands were tied by insurance limitations — no matter what the patient actually needed. I watched people get sicker and sicker, and I saw how fractured healthcare had become.
                  </p>
                  <p>
                    I wanted the autonomy to spend real time with patients — to be thorough, and to deliver care that considers a person's whole life, not just their injury. That's why I started Prosper: a practice built around one-on-one attention, flexibility, and whole-person care, without an insurance company standing between me and my patients.
                  </p>
                  <p>
                    The name Prosper comes from Jeremiah 29:11 — a reminder that this work is about more than fixing pain. It's about hope, purpose, and helping people get back to full, active lives."
                  </p>
                </div>

                {/* Pull-quote block & client photo */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-cream p-6 rounded-2xl border border-secondary/10 relative h-fit">
                    <span className="absolute top-1 left-2 text-5xl text-secondary/15 font-serif select-none">“</span>
                    <blockquote className="font-serif text-base italic text-primary/95 leading-relaxed mb-3 pl-4">
                      "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."
                    </blockquote>
                    <cite className="font-sans text-[10px] font-semibold text-secondary not-italic uppercase tracking-wider block text-right">
                      &mdash; Jeremiah 29:11
                    </cite>
                  </div>
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-sm border border-secondary/15">
                    <Image
                      src="/images/2.jpg"
                      alt="Physical therapist performing hands-on soft tissue manipulation and joint alignment on patient's hip and lower back"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-cream py-20 md:py-28 border-t border-secondary/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn direction="up">
              <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
                Our Standards
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
                What We Believe
              </h2>
              <p className="font-sans text-base text-primary/70">
                These core standards guide how we serve our patients and build relationships in Shelbyville.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, index) => (
              <FadeIn key={val.title} direction="up" delay={index * 0.05}>
                <div className="bg-white rounded-3xl p-8 border border-secondary/5 h-full flex flex-col justify-between hover:shadow-sm transition-all duration-300">
                  <div>
                    <div className="p-3 bg-cream text-accent rounded-2xl w-fit mb-6">
                      {val.icon}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-primary mb-3">
                      {val.title}
                    </h3>
                    <p className="font-sans text-sm text-primary/80 leading-relaxed font-normal">
                      {val.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-primary text-cream py-16 md:py-24 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Ready to Feel Seen and Heard?
            </h2>
            <p className="font-sans text-base text-cream/80 max-w-md mx-auto mb-8">
              Experience the difference of faith-based, patient-first physical therapy built around your actual lifestyle goals.
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
