import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ContactBox from "@/components/ContactBox";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Personal Training & Running Performance",
  description: "Improve running efficiency, recover from injuries, and build strength. Video gait analysis, athlete training, and coaching in Shelbyville, KY.",
};

const services = [
  {
    name: "Video Gait Analysis",
    desc: "A high-speed video capture of your running form. We analyze your foot strike, cadence, joint angles, and vertical oscillation to identify efficiency gaps and injury risks.",
  },
  {
    name: "Performance Strength Training",
    desc: "Targeted strength, power, and core programming designed specifically for runners and athletes to build structural tolerance and power.",
  },
  {
    name: "Student Athlete Coaching",
    desc: "Helping middle school, high school, and college athletes build capacities, recover from sport-specific loads, and train safely.",
  },
  {
    name: "Active Adult Training",
    desc: "Strength training customized to your lifestyle goals, ensuring you stay active, strong, and capable of doing what you love without physical limits.",
  },
];

const pillars = [
  "Running gait analysis",
  "Cadence & form modifications",
  "Sports-specific injury prevention",
  "Strength training for active seniors",
  "Post-injury return-to-sport testing",
  "Custom workout programming",
];

export default function PersonalTrainingRunning() {
  return (
    <div>
      {/* Header */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
              Sports Performance & Coaching
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              Personal Training & Running Performance
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              Build capacity, refine your running mechanics, and build long-term athletic resilience with doctorate-level specialists.
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
                  Train smarter, move faster, and recover better
                </h2>
                <div className="font-sans text-base text-primary/80 space-y-6 leading-relaxed mb-8">
                  <p>
                    Whether you are preparing for a local 5k, a marathon, a high school sports season, or simply want to stay strong as you age, standard physical fitness shouldn't be based on templates.
                  </p>
                  <p>
                    At Prosper PT & Wellness, we merge the clinical expertise of Doctor of Physical Therapy specialists with performance strength training. We assess your joint mobility, tissue tolerance, and movement patterns to build a customized strength plan.
                  </p>
                  <p>
                    For runners, our video gait analysis breaks down your stride. We don't just tell you to change how you run; we explain the biomechanical load patterns and give you specific strength exercises to support a smoother, faster, pain-free stride.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {services.map((service) => (
                    <div
                      key={service.name}
                      className="p-5 rounded-2xl bg-cream border border-secondary/10"
                    >
                      <h4 className="font-serif text-base font-bold text-primary mb-1">
                        {service.name}
                      </h4>
                      <p className="font-sans text-xs text-primary/70 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right details */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <FadeIn direction="right">
                <div className="relative aspect-[3/2] w-full rounded-3xl overflow-hidden shadow-sm border border-secondary/15 mb-6">
                  <Image
                    src="/images/running_performance.jpg"
                    alt="Active runner training on outdoor nature trail"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="bg-cream rounded-3xl p-8 border border-secondary/15">
                  <h3 className="font-serif text-xl font-bold text-primary mb-6">
                    Performance Features
                  </h3>
                  <ul className="space-y-4">
                    {pillars.map((pillar) => (
                      <li key={pillar} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="font-sans text-sm text-primary/95 font-medium">
                          {pillar}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-secondary/10">
                    <Link
                      href="/contact"
                      className="flex items-center justify-center w-full px-5 py-3 rounded-full bg-accent text-white font-sans text-sm font-semibold hover:bg-accent/90 transition-colors shadow-sm"
                    >
                      Book a Training Session
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
