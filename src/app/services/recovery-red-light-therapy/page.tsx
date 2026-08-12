import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import GetInTouchBox from "@/components/GetInTouchBox";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Recovery & Red Light Therapy | Prosper PT & Wellness | Shelbyville, KY",
  description: "Red light therapy and recovery services in Shelbyville, KY — Kineon Move+Pro and HEALiX infrared sessions to reduce pain, inflammation, and speed recovery.",
};

const inclusions = [
  {
    title: "Kineon Move+Pro red light therapy",
    desc: "A portable, clinical-grade device (available for rent) that improves local circulation, reduces joint pain, and decreases deep muscle tissue inflammation.",
  },
  {
    title: "HEALiX infrared blanket sessions",
    desc: "Full-body infrared therapy that uses radiant heat to penetrate joints and muscles, supporting deeper physical recovery, relaxation, and toxic release.",
  },
];

export default function RecoveryRedLightTherapy() {
  return (
    <div>
      {/* Header */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
              Wellness Maintenance
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              Recovery That Keeps You Moving
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              Recovery isn't just for after an injury — it's part of staying ahead of one. Our recovery services help reduce inflammation, improve circulation, and keep your body feeling good between sessions.
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
                  What's Included in Your Recovery Care
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

                {/* Torso device therapy showcase */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-sm border border-secondary/15 mb-8">
                  <Image
                    src="/images/5.jpg"
                    alt="Close-up of cellular healing device application during localized pain management recovery session"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 bg-cream rounded-2xl border-l-4 border-accent">
                  <h4 className="font-serif text-sm font-bold text-primary mb-1">
                    Advanced Cellular Healing
                  </h4>
                  <p className="font-sans text-xs text-primary/70 leading-relaxed">
                    If you want clinical **red light therapy in Shelbyville, KY**, specialized **recovery therapy**, full-body **infrared therapy in Kentucky**, or ongoing **pain management**, our recovery sessions are designed to speed cell repair, ease stiffness, and restore vitality.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <FadeIn direction="right">
                <div className="relative aspect-[3/2] w-full rounded-[2rem] overflow-hidden shadow-sm border border-secondary/15 mb-8">
                  <Image
                    src="/images/6.jpg"
                    alt="Applying local red light recovery device to client's knee joint to reduce pain and inflammation"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="bg-cream rounded-3xl p-8 border border-secondary/15">
                  <h3 className="font-serif text-xl font-bold text-primary mb-4">
                    Who This Is For
                  </h3>
                  <p className="font-sans text-sm text-primary/80 leading-relaxed mb-6">
                    Athletes and active patients who want "maintenance care" between sessions, anyone managing chronic inflammation or pain, and patients looking to speed up recovery after treatment.
                  </p>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full px-5 py-3 rounded-full bg-accent text-white font-sans text-sm font-semibold hover:bg-accent/90 transition-colors shadow-sm"
                  >
                    Schedule a Recovery Session
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
