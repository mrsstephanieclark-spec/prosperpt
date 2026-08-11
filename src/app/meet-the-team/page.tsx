import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ContactBox from "@/components/ContactBox";
import { GraduationCap, Award, Heart } from "lucide-react";

export const metadata = {
  title: "Meet the Team",
  description: "Get to know Dr. Meg Raymer-Brown, Dr. Whitney Ensor, and Dr. Kim Wilson. Our doctorate-level physical therapists offer 1-on-1 care in Shelbyville, KY.",
};

const team = [
  {
    name: "Dr. Meg Raymer-Brown",
    title: "PT, DPT, Cert. DN",
    role: "Founder & Doctor of Physical Therapy",
    image: "/images/meg_portrait.jpg",
    bio: "Dr. Meg Raymer-Brown founded Prosper PT & Wellness to escape the constraints of typical corporate outpatient clinics. Meg holds a Doctorate in Physical Therapy and is certified in Dry Needling. She specializes in orthopedics, sports rehabilitation, and dry needling. Meg is passionate about active lifestyle maintenance, helping runners, weightlifters, and local families stay active and resilient.",
    specialties: ["Dry Needling", "Sports Injury Rehab", "Back & Neck Pain", "Headache Relief"],
    education: "Doctor of Physical Therapy (DPT)",
  },
  {
    name: "Dr. Whitney Ensor",
    title: "PT, DPT",
    role: "Doctor of Physical Therapy",
    image: "/images/whitney_portrait.jpg",
    bio: "Dr. Whitney Ensor specializes in pelvic and bladder health, helping both men and women manage dysfunction, incontinence, and chronic pelvic pain. She also provides dedicated postpartum recovery and prenatal support. Whitney's gentle, evidence-based approach helps clients regain comfort and confidence in their body's strength and natural movement patterns.",
    specialties: ["Pelvic Floor Rehab (Male & Female)", "Postpartum Recovery", "Bladder Dysfunction", "Incontinence Care"],
    education: "Doctor of Physical Therapy (DPT)",
  },
  {
    name: "Dr. Kim Wilson",
    title: "PT, DPT",
    role: "Doctor of Physical Therapy",
    image: "/images/kim_portrait.jpg",
    bio: "Dr. Kim Wilson focuses on running performance, student athletes, and in-home physical therapy. She brings years of clinical experience in orthopedics and performance training. Kim loves working with runners, utilizing video gait analysis and strength programming, and provides flexible mobile therapy options that fit the schedules of busy families and professionals.",
    specialties: ["Running Gait Analysis", "Student Athlete Coaching", "Orthopedic Rehab", "Mobile In-Home Therapy"],
    education: "Doctor of Physical Therapy (DPT)",
  },
];

export default function MeetTheTeam() {
  // Generate Person Schema markup
  const personSchemas = team.map((member) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": member.name,
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
              Our Therapists
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              Meet our doctorate-level clinical specialists
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              At Prosper, you are never passed off to an assistant, tech, or student. You work 1-on-1 with your own doctor at every visit.
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
                        alt={`${member.name}, ${member.title}`}
                        fill
                        className="object-cover"
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
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mt-2 mb-1">
                      {member.name}
                    </h2>
                    <p className="font-sans text-sm font-semibold text-accent mb-6">
                      {member.title}
                    </p>
                    
                    <p className="font-sans text-base text-primary/80 mb-8 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-secondary/10">
                      {/* Education info */}
                      <div className="flex gap-3">
                        <GraduationCap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-serif text-sm font-semibold text-primary">Education</h4>
                          <p className="font-sans text-xs text-primary/70 mt-1">{member.education}</p>
                        </div>
                      </div>

                      {/* Specialties info */}
                      <div className="flex gap-3">
                        <Award className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-serif text-sm font-semibold text-primary">Specialties</h4>
                          <ul className="list-disc list-inside font-sans text-xs text-primary/70 mt-1 space-y-1">
                            {member.specialties.map((spec) => (
                              <li key={spec}>{spec}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable Contact Box */}
      <ContactBox />
    </div>
  );
}
