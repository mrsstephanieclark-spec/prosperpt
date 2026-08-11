import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ContactBox from "@/components/ContactBox";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Women's & Pelvic Health",
  description: "Specialized pelvic health physical therapy in Shelbyville, KY. Treating male and female bladder dysfunction, incontinence, prenatal, and postpartum recovery.",
};

const conditions = [
  "Incontinence & bladder leakage (male & female)",
  "Urinary urgency, frequency, or hesitancy",
  "Pelvic pain & discomfort (male & female)",
  "Postpartum core weakness & diastasis recti",
  "Prenatal pelvis pain & birth preparation",
  "Fertility support & pelvic floor alignment",
  "Pain with intercourse or intimacy",
  "Constipation & bowel dysfunction",
];

const pillars = [
  {
    name: "For Both Men & Women",
    desc: "Bladder dysfunction, urinary leakage, and chronic pelvic pain affect both male and female bodies. We offer private, comfortable clinical assessments and targeted care plans tailored to your specific anatomy.",
  },
  {
    name: "Prenatal & Postpartum Support",
    desc: "Help your body prepare for labor, address pelvic girdle discomfort during pregnancy, and recover core capacity, strength, and function after birth. You don't have to live with postpartum leakage.",
  },
  {
    name: "Fertility Support",
    desc: "Integrating gentle visceral mobilization, pelvic alignment techniques, and nervous system regulation to support your body's natural reproductive function and fertility journey.",
  },
  {
    name: "Autonomy & Comfort First",
    desc: "Pelvic floor therapy is deeply personal. We prioritize your comfort, explaining every detail beforehand, and work entirely at your own pace in a private, supportive clinical setting.",
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
              Specialized Clinical Care
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              Pelvic Floor & Bladder Health
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              Private, doctorate-level therapy for incontinence, bladder dysfunction, pelvic discomfort, and maternity recovery in Shelbyville, KY.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left side text */}
            <div className="lg:col-span-7">
              <FadeIn direction="left">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Restoring function, comfort, and control
                </h2>
                <div className="font-sans text-base text-primary/80 space-y-6 leading-relaxed mb-8">
                  <p>
                    Pelvic floor dysfunction is incredibly common, but it is not something you simply have to live with. Many clients are told that leakage, bladder urgency, or pelvic pain are just normal parts of aging or motherhood. We are here to change that narrative.
                  </p>
                  <p>
                    <strong>Bladder dysfunction is not women-only.</strong> We treat both men and women for urinary leakage, urgency, and pelvic floor pain. The pelvic floor is a group of muscles like any other, and it responds to skilled movement re-education, strength coordination, and manual therapy.
                  </p>
                  <p>
                    For moms, we provide comprehensive prenatal support to manage pain and prepare for delivery, along with postpartum care to safely restore core strength, heal diastasis recti, and return to workouts without leakage.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {pillars.map((pillar) => (
                    <div
                      key={pillar.name}
                      className="p-5 rounded-2xl bg-cream border border-secondary/10"
                    >
                      <h4 className="font-serif text-base font-bold text-primary mb-1">
                        {pillar.name}
                      </h4>
                      <p className="font-sans text-xs text-primary/70 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right side check items */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <FadeIn direction="right">
                <div className="relative aspect-[3/2] w-full rounded-3xl overflow-hidden shadow-sm border border-secondary/15 mb-6">
                  <Image
                    src="/images/pelvic_health.jpg"
                    alt="Dr. Meg discussing pelvic anatomy in a warm clinical setting"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="bg-cream rounded-3xl p-8 border border-secondary/15">
                  <h3 className="font-serif text-xl font-bold text-primary mb-6">
                    What We Help Resolve
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
                    <Link
                      href="/contact"
                      className="flex items-center justify-center w-full px-5 py-3 rounded-full bg-accent text-white font-sans text-sm font-semibold hover:bg-accent/90 transition-colors shadow-sm"
                    >
                      Schedule a Private Consult
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
