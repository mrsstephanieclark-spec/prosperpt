import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ContactBox from "@/components/ContactBox";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Recovery & Red Light Therapy",
  description: "Accelerate cellular repair, reduce muscle soreness, and support overall wellness. Red light therapy and cupping in Shelbyville, KY.",
};

const benefits = [
  {
    name: "Accelerated Muscle Recovery",
    desc: "Red light therapy stimulates mitochondrial function, increasing ATP production to speed up tissue recovery and reduce soreness after strenuous workouts.",
  },
  {
    name: "Reduced Joint Pain & Inflammation",
    desc: "Specific wavelengths of red and near-infrared light penetrate deep into joints, helping to naturally modulate inflammatory pathways and ease stiffness.",
  },
  {
    name: "Myofascial Release with Cupping",
    desc: "Paired recovery sessions utilize decompression cupping to increase circulation, relax muscle fibers, and restore normal myofascial gliding.",
  },
  {
    name: "Cellular Health & Repair",
    desc: "In addition to injury recovery, red light sessions promote collagen synthesis, improve circulation, and support general tissue resilience.",
  },
];

const checklist = [
  "Clinical-grade high-power red light panel sessions",
  "Targeted myofascial decompression (cupping)",
  "Doctorate-level therapist-assisted stretching",
  "Joint mobility & range-of-motion assessments",
  "Cellular repair & skin tissue support",
  "Wellness maintenance membership options",
];

export default function RecoveryRedLightTherapy() {
  return (
    <div>
      {/* Header */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
              Cellular Repair & Recovery
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              Recovery & Red Light Therapy
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              Reduce muscle soreness, speed recovery, and maintain optimal wellness using clinical red light therapy and therapist-assisted bodywork.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <FadeIn direction="left">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Maintain your edge, recover from workouts
                </h2>
                <div className="font-sans text-base text-primary/80 space-y-6 leading-relaxed mb-8">
                  <p>
                    Rehabilitation doesn't stop once your pain is gone. True physical wellness is about ongoing maintenance, cellular recovery, and preventatively supporting your body's response to training.
                  </p>
                  <p>
                    At Prosper PT & Wellness, we offer clinical-grade red light therapy sessions (utilizing medical-grade panels that emit red and near-infrared light wavelengths). Near-infrared light penetrates deep into muscle tissues, tendons, and joints to support cellular energy production and reduce inflammation.
                  </p>
                  <p>
                    We combine light therapy with cupping, manual tissue mobilizations, and stretching. This combination decreases restrictions, promotes blood flow, and leaves your muscles feeling open, relaxed, and fully recovered.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit.name}
                      className="p-5 rounded-2xl bg-cream border border-secondary/10"
                    >
                      <h4 className="font-serif text-base font-bold text-primary mb-1">
                        {benefit.name}
                      </h4>
                      <p className="font-sans text-xs text-primary/70 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <FadeIn direction="right">
                <div className="relative aspect-[3/2] w-full rounded-3xl overflow-hidden shadow-sm border border-secondary/15 mb-6">
                  <Image
                    src="/images/recovery_recovery.jpg"
                    alt="Clinical red light therapy and recovery room layout"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="bg-cream rounded-3xl p-8 border border-secondary/15">
                  <h3 className="font-serif text-xl font-bold text-primary mb-6">
                    What is Included
                  </h3>
                  <ul className="space-y-4">
                    {checklist.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="font-sans text-sm text-primary/95 font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-secondary/10">
                    <Link
                      href="/contact"
                      className="flex items-center justify-center w-full px-5 py-3 rounded-full bg-accent text-white font-sans text-sm font-semibold hover:bg-accent/90 transition-colors shadow-sm"
                    >
                      Book a Recovery Session
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable Contact Box */}
      <ContactBox />
    </div>
  );
}
