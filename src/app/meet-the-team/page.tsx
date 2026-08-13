import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { Award, ShieldCheck, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Meet the Team | Prosper PT & Wellness | Shelbyville, KY",
  description: "Meet Dr. Meg Raymer-Brown, Dr. Whitney Ensor, and Dr. Kim Wilson — the doctorate-level physical therapists behind Prosper PT & Wellness in Shelbyville, KY.",
};

const team = [
  {
    name: "Dr. Meg Raymer-Brown, PT, DPT, Cert. DN",
    role: "Founder & Doctor of Physical Therapy",
    image: "/images/meg.png",
    tags: ["Orthopedic & Sports Rehab", "Dry Needling", "Mobile PT"],
    bio: "Meg founded Prosper after seven years in corporate outpatient care, where rushed appointments and insurance limitations kept her from giving patients the care they deserved. She built Prosper around one-on-one attention, whole-person care, and the flexibility to meet patients where they are — at home, at the gym, or in the office. As a dry needling therapist in Shelbyville, she helps patients achieve lasting pain relief and mobility.",
  },
  {
    name: "Dr. Whitney Ensor, PT, DPT",
    role: "Doctor of Physical Therapy",
    image: "/images/whitney.png",
    tags: ["Women's Health", "Running Performance", "Personal Training"],
    bio: "Whitney works with active women and runners of all levels, blending clinical expertise with performance coaching to help patients move — and perform — without limitations. She is highly passionate about pelvic floor rehabilitation and active maternity recovery.",
  },
  {
    name: "Dr. Kim Wilson, PT, DPT",
    role: "Doctor of Physical Therapy",
    image: "/images/kim.png",
    tags: ["Pelvic Health", "Wound Care", "Complex Conditions"],
    bio: "Kim treats pelvic health and incontinence in both men and women, along with wound care and complex conditions, bringing a thorough, whole-person approach to every patient she sees. She is recognized as a dedicated pelvic health therapist in Kentucky.",
  },
];

export default function MeetTheTeam() {
  const personSchemas = team.map((member) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": member.name.split(",")[0],
    "jobTitle": member.role,
    "worksFor": {
      "@type": "LocalBusiness",
      "name": "Prosper PT & Wellness",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Shelbyville",
        "addressRegion": "KY",
        "addressCountry": "US"
      }
    },
    "description": member.bio,
    "image": `https://prosperptky.com${member.image}`
  }));

  return (
    <div>
      {/* Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemas) }}
      />

      {/* Header */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
              Our Clinicians
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              Meet the Team Behind Prosper
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              If you are looking for trusted, doctorate-level **Shelbyville, KY physical therapists**, our clinical experts provide direct access care designed around your lifestyle.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Team profiles */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 md:space-y-32">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Photo */}
                <div
                  className={`lg:col-span-5 flex justify-center ${
                    index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <FadeIn direction={index % 2 === 1 ? "right" : "left"} className="relative w-full max-w-md">
                    <div className="aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden shadow-sm border border-secondary/15 organic-shape-1">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-[center_35%]"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>
                  </FadeIn>
                </div>

                {/* Profile Details */}
                <div
                  className={`lg:col-span-7 ${
                    index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <FadeIn direction={index % 2 === 1 ? "left" : "right"}>
                    <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
                      {member.role}
                    </span>
                    <h2 className="font-serif text-3xl font-bold text-primary mt-2 mb-4 leading-tight">
                      {member.name}
                    </h2>
                    
                    {/* Specialty tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3.5 py-1.5 bg-cream text-primary font-sans text-xs font-semibold rounded-full border border-secondary/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="font-sans text-base text-primary/80 mb-6 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Quality statement reinforcement */}
                    <div className="p-4 bg-cream rounded-2xl border border-secondary/10 flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <p className="font-sans text-xs text-primary/80 leading-relaxed font-semibold">
                        At Prosper, you will always work directly and consistently with your own therapist. Your care is never passed off to aides, techs, or student assistants.
                      </p>
                    </div>

                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-primary text-cream py-16 md:py-24 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Ready to Work With a Therapist Who Actually Knows You?
            </h2>
            <p className="font-sans text-base text-cream/80 max-w-md mx-auto mb-8">
              Experience the continuity of care that only comes from seeing the same doctor of physical therapy at every visit.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-accent text-white font-sans text-base font-semibold shadow-md hover:bg-accent/90 hover:scale-[1.02] transition-all"
            >
              Start Here &rarr;
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
