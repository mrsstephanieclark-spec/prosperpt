import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ContactBox from "@/components/ContactBox";
import { ArrowRight, Activity, Eye, UserPlus, Flame } from "lucide-react";

export const metadata = {
  title: "Our Services",
  description: "Explore doctorate-level physical therapy, pelvic health, running coaching, and red light recovery services at Prosper PT & Wellness in Shelbyville, KY.",
};

const serviceCards = [
  {
    title: "Physical Therapy",
    description: "Doctorate-level orthopedic and sports rehabilitation. We treat back pain, neck pain, headaches, and joint stiffness using dry needling, cupping, and customized functional movement adjustments. The focus is equipping you to self-manage and prevent future pain.",
    href: "/services/physical-therapy",
    icon: <Activity className="w-6 h-6 text-accent" />,
    image: "/images/hero_pt_wellness.jpg",
  },
  {
    title: "Pelvic & Bladder Health",
    description: "Personalized pelvic floor physical therapy for both men and women. We help clients resolve bladder dysfunction, incontinence, and chronic pelvic pain. We also offer specialized prenatal, postpartum, and fertility-related support.",
    href: "/services/pelvic-health",
    icon: <Eye className="w-6 h-6 text-accent" />,
    image: "/images/pelvic_health.jpg",
  },
  {
    title: "Personal Training & Running",
    description: "Comprehensive running performance coaching, video gait analysis, and strength training. Perfect for student athletes, runners, and active adults looking to build physical capacity, improve form, and return to sport safely.",
    href: "/services/personal-training-running",
    icon: <UserPlus className="w-6 h-6 text-accent" />,
    image: "/images/running_performance.jpg",
  },
  {
    title: "Recovery & Red Light Therapy",
    description: "Speed cellular repair, decrease muscle soreness, and support ongoing wellness. We offer clinical red light therapy panel sessions, cupping, and recovery physical therapy—ideal for maintenance work that keeps you active.",
    href: "/services/recovery-red-light-therapy",
    icon: <Flame className="w-6 h-6 text-accent" />,
    image: "/images/recovery_recovery.jpg",
  },
];

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
              Our Services
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              One-on-one care tailored to your lifestyle
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              We look at your body as a whole, considering your sleep, stress, and goals. Select a service below to explore our doctorate-level clinical care.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid list */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 md:space-y-28">
            {serviceCards.map((service, index) => (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Photo container */}
                <div
                  className={`lg:col-span-5 flex justify-center ${
                    index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <FadeIn direction={index % 2 === 1 ? "right" : "left"} className="relative w-full max-w-md">
                    <div className="aspect-[3/2] w-full rounded-[2rem] overflow-hidden shadow-sm border border-secondary/15 organic-shape-1">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>
                  </FadeIn>
                </div>

                {/* Text Context */}
                <div
                  className={`lg:col-span-7 ${
                    index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <FadeIn direction={index % 2 === 1 ? "left" : "right"}>
                    <div className="p-3 bg-cream rounded-full w-fit text-accent mb-6">
                      {service.icon}
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="font-sans text-base text-primary/80 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex gap-4">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-sans text-sm font-semibold shadow-sm hover:bg-accent/90 transition-all hover:scale-[1.01]"
                      >
                        Explore Service Details
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-primary/10 text-primary font-sans text-sm font-medium hover:bg-primary/5 transition-all"
                      >
                        Book Consult <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Membership light mention */}
      <section className="bg-cream py-16 md:py-20 border-t border-secondary/15">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h3 className="font-serif text-2xl font-bold text-primary mb-3">
              Looking for ongoing care?
            </h3>
            <p className="font-sans text-sm text-primary/80 leading-relaxed max-w-xl mx-auto mb-6">
              For clients who have completed their initial rehab or want ongoing recovery support, we offer a light wellness maintenance membership. This includes recurring recovery work, red light sessions, and check-ins to prevent re-injury. Ask your therapist for details.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Reusable Contact Box at bottom (matching pattern) */}
      <ContactBox />
    </div>
  );
}
