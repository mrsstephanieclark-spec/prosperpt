import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import GetInTouchBox from "@/components/GetInTouchBox";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Physical Therapy & Dry Needling | Prosper PT & Wellness | Shelbyville, KY",
  description: "One-on-one orthopedic and sports physical therapy, dry needling, manual therapy, and cupping in Shelbyville, KY. Always with your own therapist — mobile, in-office, or telehealth.",
};

const inclusions = [
  {
    title: "Orthopedic & sports rehab",
    desc: "For injuries, surgeries, and everyday aches and pains that keep you from doing what you love.",
  },
  {
    title: "Dry needling",
    desc: "A technique using thin needles (with or without electrical stimulation) to help release tight muscles, reduce pain, and speed healing.",
  },
  {
    title: "Manual therapy",
    desc: "Hands-on techniques including joint mobilization and soft tissue work.",
  },
  {
    title: "Cupping",
    desc: "Myofascial decompression to improve circulation and reduce pain and inflammation.",
  },
  {
    title: "Kinesiotaping",
    desc: "Supportive taping to aid movement and reduce strain during recovery.",
  },
];

export default function PhysicalTherapy() {
  return (
    <div>
      {/* Header */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
              Therapy Services
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              Physical Therapy, Built Around You
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              Whether you're recovering from an injury, managing chronic pain, or just want to move better, our physical therapy care is always one-on-one, always with your own therapist — no techs, no rush.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <FadeIn direction="left">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  What's Included in Your Care
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

                {/* Hands-on manual therapy techniques showcase */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden shadow-sm border border-secondary/15">
                    <Image
                      src="/images/3.jpg"
                      alt="Close-up of physical therapist performing manual therapy and soft tissue release on patient's lower back"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden shadow-sm border border-secondary/15">
                    <Image
                      src="/images/4.jpg"
                      alt="Close-up of therapist performing neck mobilization technique to relieve tension and cervical headaches"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="p-6 bg-cream rounded-2xl border-l-4 border-accent">
                  <h4 className="font-serif text-sm font-bold text-primary mb-1">
                    Specialized Local Care
                  </h4>
                  <p className="font-sans text-xs text-primary/70 leading-relaxed">
                    If you are looking for advanced **dry needling in Shelbyville, KY**, myofascial **cupping therapy**, localized **back pain treatment**, or effective **headache treatment**, our **orthopedic physical therapy in Kentucky** covers your needs.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <FadeIn direction="right">
                <div className="relative aspect-[3/2] w-full rounded-[2rem] overflow-hidden shadow-sm border border-secondary/15 mb-8">
                  <Image
                    src="/images/1.jpg"
                    alt="Doctor of Physical Therapy performing lower back and hip manual mobilization on patient"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="bg-cream rounded-3xl p-8 border border-secondary/15">
                  <h3 className="font-serif text-xl font-bold text-primary mb-4">
                    Who This Is For
                  </h3>
                  <p className="font-sans text-sm text-primary/80 leading-relaxed mb-6">
                    Active adults and older adults dealing with back pain, headaches, joint pain, or recovering from an injury or surgery — anyone who wants thorough, one-on-one care instead of a rushed, insurance-driven visit.
                  </p>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full px-5 py-3 rounded-full bg-accent text-white font-sans text-sm font-semibold hover:bg-accent/90 transition-colors shadow-sm"
                  >
                    Schedule a Consultation
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
