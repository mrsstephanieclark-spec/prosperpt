import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import GetInTouchBox from "@/components/GetInTouchBox";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pelvic Health & Incontinence Therapy | Prosper PT & Wellness | Shelbyville, KY",
  description: "Pelvic health physical therapy for men and women in Shelbyville, KY — incontinence, fertility-related conditions, and pre/postnatal care from doctorate-level therapists.",
};

const inclusions = [
  {
    title: "Incontinence",
    desc: "Bladder dysfunction and leakage treatment designed for both men and women. We help coordinate strength and muscle control.",
  },
  {
    title: "Fertility-related conditions",
    desc: "Support for patients navigating fertility challenges, integrating visceral alignment and stress regulation.",
  },
  {
    title: "Pre/postnatal care",
    desc: "From pregnancy support (pelvic girdle alignment) through postpartum core recovery and safe workout returns.",
  },
  {
    title: "Pelvic pain and dysfunction",
    desc: "A thorough, judgment-free evaluation and customized treatment plan to resolve chronic pain and tightness.",
  },
];

export default function PelvicHealth() {
  return (
    <div>
      {/* Header */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
              Inclusive Care
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              Pelvic Health Care for Every Body
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              Pelvic health issues are common, treatable, and nothing to be embarrassed about. We treat both men and women, with the same one-on-one, whole-person approach as every other visit at Prosper.
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

                {/* Core and pelvic stretching showcase */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-sm border border-secondary/15 mb-8">
                  <Image
                    src="/images/9.jpg"
                    alt="Therapist assisting a patient with hip flexor and pelvic floor stretching on a treatment mat"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 bg-cream rounded-2xl border-l-4 border-accent">
                  <h4 className="font-serif text-sm font-bold text-primary mb-1">
                    Specialized Pelvic Support
                  </h4>
                  <p className="font-sans text-xs text-primary/70 leading-relaxed">
                    If you need trusted **pelvic health in Shelbyville, KY**, specialized **fertility physical therapy**, bladder **incontinence treatment**, postpartum physical therapy, or targeted **male incontinence treatment**, our team provides direct support. We ensure that pelvic floor muscle care is private, comfortable, and tailored to your specific goals.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <FadeIn direction="right">
                <div className="relative aspect-[3/2] w-full rounded-[2rem] overflow-hidden shadow-sm border border-secondary/15 mb-8">
                  <Image
                    src="/images/10.jpg"
                    alt="Clinician assisting patient with floor core alignment and pilates-style pelvic stability exercise"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="bg-cream rounded-3xl p-8 border border-secondary/15">
                  <h3 className="font-serif text-xl font-bold text-primary mb-4">
                    Who This Is For
                  </h3>
                  <p className="font-sans text-sm text-primary/80 leading-relaxed mb-6">
                    Moms navigating fertility, pregnancy, or postpartum recovery; anyone — male or female — dealing with incontinence or bladder dysfunction; and anyone experiencing pelvic pain who hasn't found real answers elsewhere.
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
