import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import TrustBar from "@/components/TrustBar";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import TestimonialsSlider from "./TestimonialsSlider";
import { 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  UserCheck, 
  Compass, 
  CalendarRange, 
  HeartHandshake,
  Activity,
  Heart,
  User,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Prosper PT & Wellness | Self-Pay Physical Therapy | Shelbyville, KY",
  description: "One-on-one physical therapy, dry needling, pelvic health, and personal training in Shelbyville, KY. Mobile, in-office, and telehealth appointments — always with your own therapist. Book a free consult.",
};

const whyChooseUs = [
  {
    icon: <UserCheck className="w-5 h-5 text-accent" />,
    title: "Always the Same Therapist",
    desc: "Every session is one-on-one with your own Doctor of Physical Therapy. No techs, no hand-offs, no wasted time.",
  },
  {
    icon: <Compass className="w-5 h-5 text-accent" />,
    title: "Whole-Person Approach",
    desc: "We look at your lifestyle and your goals, not just the injury — because the goal is a plan that actually fits your life.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-accent" />,
    title: "No Insurance Limitations",
    desc: "Free from insurance approvals, denials, and session caps, we build your plan around your goals, not billing codes.",
  },
  {
    icon: <CalendarRange className="w-5 h-5 text-accent" />,
    title: "Flexible by Design",
    desc: "Mobile visits, in-office appointments, telehealth, and extended hours to fit your schedule and location, not the other way around.",
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-accent" />,
    title: "Built for the Long Run",
    desc: "Our goal isn't for you to need us forever. We equip you to self-manage and prevent the next injury.",
  },
];

const teamTeasers = [
  {
    name: "Dr. Meg Raymer-Brown",
    role: "Founder",
    specialty: "Orthopedic care, dry needling, and mobile PT.",
    image: "/images/meg_portrait.jpg",
  },
  {
    name: "Dr. Whitney Ensor",
    role: "Therapist",
    specialty: "Women's health, running performance, and personal training.",
    image: "/images/whitney_portrait.jpg",
  },
  {
    name: "Dr. Kim Wilson",
    role: "Therapist",
    specialty: "Pelvic health, wound care, and complex conditions.",
    image: "/images/kim_portrait.jpg",
  },
];

export default function Home() {
  return (
    <div>
      <LocalBusinessSchema />

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center bg-[#3D7F81] overflow-hidden">
        {/* Full-bleed background video with rich medium-teal gradient overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero_pt_wellness.jpg"
            className="object-cover w-full h-full opacity-55"
          >
            <source src="/images/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(61,127,129,0.85)_0%,rgba(61,127,129,0.85)_50%,rgba(61,127,129,0.45)_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-cream">
          <div className="max-w-2xl">
            <FadeIn direction="left">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Move Better. Feel Great. Live Well.
              </h1>
              <p className="font-sans text-base sm:text-lg lg:text-xl text-cream/90 mb-10 leading-relaxed">
                One-on-one physical therapy and wellness care in Shelbyville, KY — in your home, at the gym, in-office, or online. Always with your own therapist.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="#start-here"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-white font-sans text-base font-semibold shadow-md hover:bg-accent/90 hover:scale-[1.02] transition-all text-center"
                >
                  Start Here &rarr;
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto px-8 py-4 rounded-full border border-cream/35 text-cream font-sans text-base font-semibold hover:bg-cream/10 transition-all text-center"
                >
                  See Our Services
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* MISSION / INTRO SECTION */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeIn direction="left">
                <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
                  Our Mission
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mt-3 mb-6 leading-tight">
                  Care Built Around You, Not a Waiting Room.
                </h2>
                <div className="font-sans text-base text-primary/80 space-y-6 leading-relaxed">
                  <p>
                    We believe your body was made to move and move well. If you are looking for premier{" "}
                    <strong>self-pay physical therapy in Shelbyville, KY</strong>, or need high-quality{" "}
                    <strong>one-on-one physical therapy in Shelbyville</strong>, Prosper is built for you.
                  </p>
                  <p>
                    Our mission is to help active, busy people take control of their health, reduce pain, and get back to what they love — golf, walking, playing with their kids, travel — without limitations. We are proud to provide clinical sessions in-office, as well as convenient{" "}
                    <strong>mobile physical therapy across Kentucky</strong>.
                  </p>
                  <p>
                    Every session is one-on-one, with your own therapist, every time. No techs, no aides, no rush.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Scripture quote */}
            <div className="lg:col-span-5">
              <FadeIn direction="right" className="bg-white p-8 rounded-3xl border border-secondary/15 shadow-sm relative">
                <span className="absolute -top-4 -left-4 text-6xl text-secondary/15 font-serif select-none">“</span>
                <blockquote className="font-serif text-lg md:text-xl italic text-primary/90 leading-relaxed mb-4">
                  "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."
                </blockquote>
                <cite className="font-sans text-xs font-semibold text-secondary not-italic uppercase tracking-wider block text-right">
                  &mdash; Jeremiah 29:11
                </cite>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PROSPER SECTION */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn direction="up">
              <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
                Why Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
                Why Patients Choose Prosper
              </h2>
              <p className="font-sans text-base text-primary/70">
                Experience physical therapy designed to support your actual movement goals without clinic distractions.
              </p>
            </FadeIn>
          </div>

          {/* 5-item grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <FadeIn key={item.title} direction="up" delay={index * 0.05}>
                <div className="bg-cream rounded-3xl p-8 border border-secondary/10 h-full flex flex-col justify-between hover:shadow-sm transition-all duration-300">
                  <div>
                    <div className="p-3 bg-white text-accent rounded-2xl shadow-sm w-fit mb-6">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-primary/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW SECTION */}
      <section className="bg-cream py-20 md:py-28 border-y border-secondary/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn direction="up">
              <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
                Clinical Services
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
                Everything You Need to Move Well, In One Place
              </h2>
              <p className="font-sans text-base text-primary/70">
                From sports rehab to specialized pelvic wellness and active maintenance.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Card 1 */}
            <FadeIn direction="up">
              <div className="bg-white rounded-3xl p-8 border border-secondary/10 h-full flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                    Physical Therapy
                  </h3>
                  <p className="font-sans text-sm text-primary/80 leading-relaxed mb-6">
                    Orthopedic and sports rehab, dry needling, manual therapy, cupping, and kinesiotaping.
                  </p>
                </div>
                <Link
                  href="/services/physical-therapy"
                  className="font-sans text-xs font-semibold text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1 group"
                >
                  Explore Physical Therapy <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white rounded-3xl p-8 border border-secondary/10 h-full flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                    Women's & Pelvic Health
                  </h3>
                  <p className="font-sans text-sm text-primary/80 leading-relaxed mb-6">
                    Pelvic health, incontinence (male and female), fertility-related conditions, and pre/postnatal care.
                  </p>
                </div>
                <Link
                  href="/services/pelvic-health"
                  className="font-sans text-xs font-semibold text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1 group"
                >
                  Explore Pelvic Health <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white rounded-3xl p-8 border border-secondary/10 h-full flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                    Personal Training & Running Coaching
                  </h3>
                  <p className="font-sans text-sm text-primary/80 leading-relaxed mb-6">
                    General wellness, strength, sport-specific training, and running performance coaching.
                  </p>
                </div>
                <Link
                  href="/services/personal-training-running"
                  className="font-sans text-xs font-semibold text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1 group"
                >
                  Explore Performance Training <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>

            {/* Card 4 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white rounded-3xl p-8 border border-secondary/10 h-full flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                    Recovery & Red Light Therapy
                  </h3>
                  <p className="font-sans text-sm text-primary/80 leading-relaxed mb-6">
                    Kineon Move+Pro rental and HEALiX infrared blanket sessions for recovery and maintenance care.
                  </p>
                </div>
                <Link
                  href="/services/recovery-red-light-therapy"
                  className="font-sans text-xs font-semibold text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1 group"
                >
                  Explore Recovery Services <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary/20 text-primary font-sans text-base font-semibold hover:bg-primary/5 transition-all"
            >
              See All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM TEASER */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn direction="up">
              <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
                Meet Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
                Meet the Team Behind Prosper
              </h2>
              <p className="font-sans text-base text-primary/70">
                Doctorate-level therapists committed to your health and movement goals.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {teamTeasers.map((member, index) => (
              <FadeIn key={member.name} direction="up" delay={index * 0.1}>
                <div className="bg-cream rounded-3xl overflow-hidden border border-secondary/10 flex flex-col items-center p-6 text-center hover:shadow-sm transition-all duration-300">
                  <div className="relative w-44 h-44 rounded-full overflow-hidden mb-6 border-4 border-white shadow-sm">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 150px, 200px"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-1">
                    {member.name}
                  </h3>
                  <span className="font-sans text-[11px] font-semibold text-secondary uppercase tracking-widest mb-3">
                    {member.role}
                  </span>
                  <p className="font-sans text-xs text-primary/75 leading-relaxed">
                    {member.specialty}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/meet-the-team"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary/20 text-primary font-sans text-base font-semibold hover:bg-primary/5 transition-all"
            >
              Meet the Full Team &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSlider />

      {/* START HERE FORM SECTION */}
      <section id="start-here" className="bg-cream py-20 md:py-28 border-t border-secondary/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-secondary/15 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column: Leaf mark / Image container */}
              <div className="lg:col-span-6 bg-primary text-cream p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
                    Start Today
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mt-4 mb-6 leading-tight">
                    Start Here
                  </h2>
                  <p className="font-sans text-base text-cream/80 max-w-md leading-relaxed mb-8">
                    Tell us a little about you, and we'll reach out to figure out the best next step together.
                  </p>
                </div>

                {/* Leaf graphic or logo placeholder */}
                <div className="relative z-10 flex items-center gap-3 pt-6 border-t border-cream/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-10 h-10 text-secondary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v18M12 3C9.5 7.5 5 10 5 12c0 3.866 3.134 7 7 7s7-3.134 7-7c0-2-4.5-4.5-7-9z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-cream">Prosper PT & Wellness</h4>
                    <p className="font-sans text-xs text-cream/60">Shelbyville, KY &bull; Family-Owned</p>
                  </div>
                </div>

                {/* Background decorative leaf watermark */}
                <div className="absolute -bottom-24 -right-24 w-80 h-80 opacity-5 pointer-events-none">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M12 3v18M12 3C9.5 7.5 5 10 5 12c0 3.866 3.134 7 7 7s7-3.134 7-7c0-2-4.5-4.5-7-9z" />
                  </svg>
                </div>
              </div>

              {/* Right Column: Reusable HIPAA-compliant form */}
              <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white">
                <ContactForm />
                <p className="font-sans text-xs text-primary/50 text-center mt-4">
                  We'll respond within 1 business day. No spam, ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="bg-primary text-cream py-16 md:py-24 text-center relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-[500px] h-[500px]">
            <path d="M12 3v18M12 3C9.5 7.5 5 10 5 12c0 3.866 3.134 7 7 7s7-3.134 7-7c0-2-4.5-4.5-7-9z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn direction="up">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Move Better?
            </h2>
            <p className="font-sans text-base sm:text-lg text-cream/80 max-w-xl mx-auto mb-8">
              Start here, and let's build a plan to get you back to what you love.
            </p>
            <Link
              href="#start-here"
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
