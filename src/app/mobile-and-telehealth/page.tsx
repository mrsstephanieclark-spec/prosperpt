import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ContactBox from "@/components/ContactBox";
import { Home, Laptop, Dumbbell, MapPin, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Mobile & Telehealth Services",
  description: "Flexible physical therapy locations. Doctorate-level care at your home, office, telehealth, or CrossFit Shelbyville in Shelbyville, KY.",
};

const locations = [
  {
    icon: <Home className="w-6 h-6 text-accent" />,
    title: "In-Home & Office Visits",
    desc: "Skip the drive and receive clinical care in the privacy of your home or office. We bring all necessary equipment (including tables, dry needling supplies, and cupping gear). Perfect for busy moms and professionals.",
  },
  {
    icon: <Dumbbell className="w-6 h-6 text-accent" />,
    title: "At CrossFit Shelbyville",
    desc: "For runners, lifters, and student athletes, we offer in-gym appointments. This allows us to analyze your mechanics under direct loading (barbells, pull-up rigs, running surfaces) to adjust form and prevent injury.",
  },
  {
    icon: <Laptop className="w-6 h-6 text-accent" />,
    title: "Virtual Telehealth Care",
    desc: "Access your physical therapist from anywhere. Through secure video consultations, we guide you through movement screen testing, posture corrections, and self-treatment strategies you can manage independently.",
  },
];

const perks = [
  "No travel or waiting room times",
  "Treatment inside your actual daily movement space",
  "Easy scheduling around work, child care, or training",
  "Secure virtual portal for telehealth visits",
  "Comprehensive gear brought to your home or office",
  "Assessing lifting/running form directly on-site",
];

export default function MobileTelehealth() {
  return (
    <div>
      {/* Header */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
              Care Where You Are
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              Flexible appointment times and locations
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              We bring doctorate-level care directly to you. Schedule sessions at your home, your office, online, or at CrossFit Shelbyville.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Locations grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {locations.map((loc, index) => (
              <FadeIn key={loc.title} direction="up" delay={index * 0.1}>
                <div className="bg-cream rounded-3xl p-8 border border-secondary/10 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="p-3 bg-white text-accent rounded-2xl shadow-sm w-fit mb-6">
                      {loc.icon}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-3">
                      {loc.title}
                    </h3>
                    <p className="font-sans text-sm text-primary/85 leading-relaxed">
                      {loc.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-secondary/10">
                    <span className="font-sans text-xs font-semibold text-accent flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Shelbyville, KY &bull; Flexible Scheduling
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Benefits section */}
          <div className="bg-cream rounded-3xl p-8 sm:p-12 border border-secondary/15">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <FadeIn direction="left">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-4">
                    Why our clients love our flexible model
                  </h3>
                  <p className="font-sans text-sm text-primary/80 leading-relaxed mb-6">
                    You shouldn't have to rearrange your entire work week or pay for child care just to receive high-quality physical therapy. By offering in-home, gym, and telehealth sessions, we make it convenient to recover without compromises.
                  </p>
                </FadeIn>
              </div>

              <div className="lg:col-span-6">
                <FadeIn direction="right">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {perks.map((perk) => (
                      <div key={perk} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4.5 h-4.5 text-accent shrink-0 mt-0.5" />
                        <span className="font-sans text-xs font-semibold text-primary/90">
                          {perk}
                        </span>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable Contact Box */}
      <ContactBox />
    </div>
  );
}
