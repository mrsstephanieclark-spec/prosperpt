import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import GetInTouchBox from "@/components/GetInTouchBox";
import { ArrowRight, Activity, Zap, Dumbbell, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Physical Therapy, Pelvic Health & Personal Training | Prosper PT & Wellness",
  description: "Explore physical therapy, dry needling, pelvic health, personal training, and recovery services at Prosper PT & Wellness in Shelbyville, KY. Mobile, in-office, and telehealth options.",
};

const serviceCards = [
  {
    title: "Physical Therapy",
    description: "Orthopedic and sports rehab, dry needling, manual therapy, cupping, and kinesiotaping.",
    href: "/services/physical-therapy",
    icon: <Activity className="w-6 h-6 text-accent" />,
    image: "/images/1.jpg",
  },
  {
    title: "Women's & Pelvic Health",
    description: "Pelvic health, incontinence (male and female), fertility-related conditions, and pre/postnatal care.",
    href: "/services/pelvic-health",
    icon: <ShieldCheck className="w-6 h-6 text-accent" />,
    image: "/images/10.jpg",
  },
  {
    title: "Personal Training & Running Coaching",
    description: "General wellness, strength, sport-specific training, and running performance coaching.",
    href: "/services/personal-training-running",
    icon: <Dumbbell className="w-6 h-6 text-accent" />,
    image: "/images/11.jpg",
  },
  {
    title: "Recovery & Red Light Therapy",
    description: "Kineon Move+Pro rental and HEALiX infrared blanket sessions for recovery and maintenance care.",
    href: "/services/recovery-red-light-therapy",
    icon: <Zap className="w-6 h-6 text-accent" />,
    image: "/images/6.jpg",
  },
];

export default function ServicesHub() {
  return (
    <div>
      {/* Header */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
              Our Practice Areas
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              Everything You Need to Move Well
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              Every patient is different, so every plan is built around you — your goals, your schedule, and your life. Browse our services below, or start here and we'll help you figure out the right fit.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid list */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* SEO keyword context block */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-sans text-xs text-primary/60 max-w-xl mx-auto leading-relaxed">
              We offer comprehensive **physical therapy services in Shelbyville, KY**, including advanced therapeutic modalities like **dry needling**, myofascial **cupping**, specialized **pelvic health** care, and targeted **personal training**.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {serviceCards.map((service, index) => (
              <FadeIn key={service.title} direction="up" delay={index * 0.1}>
                <div className="bg-cream rounded-3xl overflow-hidden border border-secondary/10 flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
                  <div className="relative aspect-[3/2] w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="p-3 bg-white text-accent rounded-2xl w-fit mb-4">
                        {service.icon}
                      </div>
                      <h2 className="font-serif text-2xl font-bold text-primary mb-3">
                        {service.title}
                      </h2>
                      <p className="font-sans text-sm text-primary/80 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1 text-accent font-semibold text-sm hover:text-accent/80 transition-colors group"
                    >
                      Learn More Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Wellness Membership block */}
          <div className="bg-cream rounded-3xl p-8 max-w-3xl mx-auto border border-secondary/15">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <div className="p-4 bg-white text-secondary rounded-2xl shadow-sm shrink-0">
                <ShieldCheck className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  Stay on Track Between Visits
                </h3>
                <p className="font-sans text-sm text-primary/85 leading-relaxed mb-4">
                  Ask us about our ongoing wellness membership for ongoing maintenance care and recovery support between visits.
                </p>
                <Link
                  href="/contact"
                  className="font-sans text-xs font-semibold text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1 group"
                >
                  Start Here to Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Get in Touch Box repeated */}
      <GetInTouchBox />
    </div>
  );
}
