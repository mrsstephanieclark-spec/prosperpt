import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ContactBox from "@/components/ContactBox";
import { CheckCircle2, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Physical Therapy",
  description: "Doctorate-level physical therapy in Shelbyville, KY. Dry needling, cupping, sports rehab, and pain management from Dr. Meg Raymer-Brown and team.",
};

const conditions = [
  "Back pain & sciatica",
  "Neck pain & stiffness",
  "Tension headaches & migraines",
  "Shoulder impingement & rotator cuff issues",
  "Knee pain & ligament sprains",
  "Sports injuries & athletic recovery",
  "Plantarm fasciitis & ankle sprains",
  "Chronic pain & joint stiffness",
];

const treatments = [
  {
    name: "Dry Needling",
    desc: "Targeting deep muscle knots (trigger points) to release tension, improve blood flow, and relieve localized pain quickly.",
  },
  {
    name: "Myofascial Cupping",
    desc: "Using localized suction to increase circulation, release fascial restrictions, and promote muscle recovery.",
  },
  {
    name: "Manual Therapy",
    desc: "Hands-on joint mobilization and soft tissue release to restore range of motion and decrease localized pain.",
  },
  {
    name: "Targeted Movement Training",
    desc: "Custom exercise programming designed to address the root movement dysfunction and build long-term strength.",
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
              Doctorate-Level Clinical Care
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              Physical Therapy
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              Recover from pain, restore your mobility, and build the physical capacity to prevent future injuries. Always 1-on-1 with your own therapist.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Context */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Focus areas */}
            <div className="lg:col-span-7">
              <FadeIn direction="left">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  A whole-body approach to pain relief and movement
                </h2>
                <div className="font-sans text-base text-primary/80 space-y-6 leading-relaxed mb-8">
                  <p>
                    Physical therapy at Prosper PT & Wellness is designed to treat the root cause of your pain, not just chase symptoms. We spend a full hour with you at every visit, analyzing how your whole body moves.
                  </p>
                  <p>
                    Because we operate as a self-pay practice, your treatment plans are never limited by insurance authorizations. If you need dry needling, mobility work, and strength coaching in the same session, that is exactly what you get.
                  </p>
                  <p>
                    We integrate evidence-based manual therapy, cupping, and dry needling to reduce acute discomfort, paired with tailored movement education so you leave equipped to self-manage.
                  </p>
                </div>

                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  Treatment Options We Offer
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {treatments.map((treatment) => (
                    <div
                      key={treatment.name}
                      className="p-5 rounded-2xl bg-cream border border-secondary/10"
                    >
                      <h4 className="font-serif text-base font-bold text-primary mb-1">
                        {treatment.name}
                      </h4>
                      <p className="font-sans text-xs text-primary/70 leading-relaxed">
                        {treatment.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Conditions Treated list */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <FadeIn direction="right">
                <div className="bg-cream rounded-3xl p-8 border border-secondary/15">
                  <h3 className="font-serif text-xl font-bold text-primary mb-6">
                    Common Conditions We Treat
                  </h3>
                  <ul className="space-y-4">
                    {conditions.map((condition) => (
                      <li key={condition} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="font-sans text-sm text-primary/95 font-medium">
                          {condition}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-secondary/10">
                    <p className="font-sans text-xs text-primary/70 mb-4">
                      Don't see your condition listed? We treat a wide variety of orthopedic and performance concerns. Let's discuss your goals.
                    </p>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center w-full px-5 py-3 rounded-full bg-accent text-white font-sans text-sm font-semibold hover:bg-accent/90 transition-colors shadow-sm"
                    >
                      Schedule a Free Consult
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
