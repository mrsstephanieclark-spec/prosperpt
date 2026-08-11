import Link from "next/link";
import Image from "next/image";
import TrustBar from "@/components/TrustBar";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { ArrowRight, MapPin, ShieldCheck, Heart, User, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div>
      <LocalBusinessSchema />
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Text */}
            <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
              <FadeIn direction="left">
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-primary font-sans text-xs uppercase tracking-widest font-semibold mb-6">
                  Shelbyville, KY &bull; Physical Therapy & Wellness
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.1] mb-6">
                  Care that revolves around <span className="text-secondary italic font-normal">you</span>, not your insurance.
                </h1>
                <p className="font-sans text-base sm:text-lg text-primary/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Doctorate-level, 1-on-1 physical therapy, pelvic health, and performance coaching. No insurance restrictions, no rushed appointments—just dedicated, personalized care to get you back to what you love.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-white font-sans text-base font-semibold shadow-md hover:bg-accent/90 hover:scale-[1.02] transition-all text-center"
                  >
                    Book a Free Consult
                  </Link>
                  <Link
                    href="/services"
                    className="w-full sm:w-auto px-8 py-4 rounded-full border border-primary/20 text-primary font-sans text-base font-semibold hover:bg-primary/5 transition-all text-center flex items-center justify-center gap-2"
                  >
                    Explore Services <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-6 flex justify-center">
              <FadeIn direction="right" className="relative w-full max-w-lg lg:max-w-none">
                <div className="relative aspect-[3/2] w-full rounded-[2rem] overflow-hidden shadow-lg border-4 border-white organic-shape-1">
                  <Image
                    src="/images/hero_pt_wellness.jpg"
                    alt="Dr. Meg Raymer-Brown physical therapist assisting a client with mobility stretches"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -left-6 bg-secondary text-white px-6 py-4 rounded-2xl shadow-md hidden sm:block">
                  <p className="font-serif text-2xl font-bold leading-none">100%</p>
                  <p className="font-sans text-xs tracking-wider uppercase mt-1">One-on-One Care</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Meet Dr. Meg (Backstory) */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Dr Meg Portrait */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <FadeIn direction="left" className="relative w-full max-w-sm">
                <div className="aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden shadow-md border-4 border-white organic-shape-2">
                  <Image
                    src="/images/meg_portrait.jpg"
                    alt="Dr. Meg Raymer-Brown, PT, DPT, Cert. DN"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-sm border border-secondary/10">
                  <p className="font-serif text-sm font-bold text-primary">Dr. Meg Raymer-Brown</p>
                  <p className="font-sans text-[11px] text-secondary font-medium tracking-wide uppercase mt-0.5">
                    PT, DPT, Cert. DN &bull; Founder
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <FadeIn direction="right">
                <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
                  Why We Started Prosper
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-6 leading-tight">
                  Tired of rushed clinic visits? So were we.
                </h2>
                <div className="font-sans text-base text-primary/80 space-y-4 mb-8 leading-relaxed">
                  <p>
                    Founder Dr. Meg Raymer-Brown spent seven years in a busy, corporate outpatient clinic. She watched patients get passed around, therapists juggle multiple people at once, and treatment plans get dictated by insurance limitations rather than what the person actually needed.
                  </p>
                  <p>
                    She founded Prosper PT & Wellness alongside Dr. Whitney Ensor and Dr. Kim Wilson to change that. By choosing a self-pay model, our hands are untied. Your care is determined strictly by you and your therapist.
                  </p>
                  <p className="font-medium text-primary">
                    Always 1-on-1. Always with your own doctorate-level therapist. No aides, no techs, and no insurance denials.
                  </p>
                </div>
                <Link
                  href="/our-story"
                  className="inline-flex items-center gap-2 text-accent font-semibold text-base hover:text-accent/80 transition-colors"
                >
                  Read Our Full Story <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn direction="up">
              <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
                Our Services
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-6">
                Personalized wellness for active lifestyles
              </h2>
              <p className="font-sans text-base sm:text-lg text-primary/70 leading-relaxed">
                Whether you want to recover from an injury, manage chronic pain, address bladder or pelvic dysfunction, or enhance athletic performance, we provide expert doctorate-level support.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="group bg-cream rounded-3xl p-8 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between border border-secondary/10">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                    Physical Therapy
                  </h3>
                  <p className="font-sans text-sm text-primary/80 mb-6 leading-relaxed">
                    Treating back pain, neck pain, headaches, joint pain, and sports injuries. Integrating dry needling, cupping, and targeted movement adjustments to equip you to self-manage and prevent future injury.
                  </p>
                </div>
                <Link
                  href="/services/physical-therapy"
                  className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>

            {/* Service 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="group bg-cream rounded-3xl p-8 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between border border-secondary/10">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                    Pelvic & Bladder Health
                  </h3>
                  <p className="font-sans text-sm text-primary/80 mb-6 leading-relaxed">
                    Providing individualized pelvic health physical therapy for men and women dealing with incontinence, pelvic pain, or bladder dysfunction, as well as specialized prenatal, postpartum, and fertility-related support.
                  </p>
                </div>
                <Link
                  href="/services/pelvic-health"
                  className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>

            {/* Service 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="group bg-cream rounded-3xl p-8 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between border border-secondary/10">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                    Personal Training & Running
                  </h3>
                  <p className="font-sans text-sm text-primary/80 mb-6 leading-relaxed">
                    Providing running coaching, video gait analysis, and strength training. Perfect for student athletes, runners, and active adults looking to build capacity and return to sport.
                  </p>
                </div>
                <Link
                  href="/services/personal-training-running"
                  className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>

            {/* Service 4 */}
            <FadeIn direction="up" delay={0.4}>
              <div className="group bg-cream rounded-3xl p-8 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between border border-secondary/10">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                    Recovery & Red Light Therapy
                  </h3>
                  <p className="font-sans text-sm text-primary/80 mb-6 leading-relaxed">
                    Utilizing clinical red light therapy panel sessions, cupping, and recovery physical therapy to speed cellular repair, decrease muscle soreness, and support ongoing wellness maintenance.
                  </p>
                </div>
                <Link
                  href="/services/recovery-red-light-therapy"
                  className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Prosper Difference (Grid) */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Pillars text */}
            <div className="lg:col-span-5">
              <FadeIn direction="left">
                <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
                  The Prosper Difference
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-6 leading-tight">
                  A modern approach to feeling your best
                </h2>
                <p className="font-sans text-base text-primary/80 leading-relaxed mb-6">
                  We look at your body as a whole, considering your sleep, stress, and lifestyle goals. Because you deserve a path that is tailored to you, not an insurance formula.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-sans text-sm font-semibold text-primary">No referral or approvals required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-sans text-sm font-semibold text-primary">Flexible locations: home, office, gym, or telehealth</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-sans text-sm font-semibold text-primary">Ongoing maintenance and recovery memberships available</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Pillars cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FadeIn direction="up">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-secondary/5">
                  <div className="p-2.5 rounded-lg bg-cream text-secondary w-fit mb-4">
                    <User className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-primary mb-2">Same Therapist</h4>
                  <p className="font-sans text-xs text-primary/70 leading-relaxed">
                    You'll see the exact same doctor every single visit. No hand-offs, no repeating your history to a stranger.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.1}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-secondary/5">
                  <div className="p-2.5 rounded-lg bg-cream text-secondary w-fit mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-primary mb-2">No Insurance Limits</h4>
                  <p className="font-sans text-xs text-primary/70 leading-relaxed">
                    No insurance company dictating how long your visits are or what treatments are approved.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-secondary/5">
                  <div className="p-2.5 rounded-lg bg-cream text-secondary w-fit mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-primary mb-2">Flexible Locations</h4>
                  <p className="font-sans text-xs text-primary/70 leading-relaxed">
                    Book appointments at your home, office, telehealth, or CrossFit Shelbyville to fit your schedule.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-secondary/5">
                  <div className="p-2.5 rounded-lg bg-cream text-secondary w-fit mb-4">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-primary mb-2">Whole-Person Care</h4>
                  <p className="font-sans text-xs text-primary/70 leading-relaxed">
                    We treat the person, not just the diagnosis, aligning treatment with your exact lifestyle goals.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn direction="up">
              <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
                Testimonials
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-6">
                Hear from our active community
              </h2>
              <p className="font-sans text-base text-primary/70">
                See how Dr. Meg, Dr. Whitney, and Dr. Kim help runners, athletes, and local Shelbyville families live without limits.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <FadeIn direction="up">
              <div className="bg-cream rounded-3xl p-8 border border-secondary/5 h-full flex flex-col justify-between">
                <p className="font-sans text-sm text-primary/80 italic leading-relaxed mb-6">
                  "I was struggling with knee pain while preparing for my marathon. Meg worked with me 1-on-1 at CrossFit Shelbyville. She analyzed my running gate and adjusted my strength drills. Not only is my knee pain gone, but I also set a personal record!"
                </p>
                <div>
                  <p className="font-serif text-sm font-bold text-primary">Austin M.</p>
                  <p className="font-sans text-[11px] text-secondary font-medium tracking-wide uppercase mt-0.5">
                    Runner & Athlete
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Review 2 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-cream rounded-3xl p-8 border border-secondary/5 h-full flex flex-col justify-between">
                <p className="font-sans text-sm text-primary/80 italic leading-relaxed mb-6">
                  "After having my second child, I was dealing with constant back discomfort and core weakness. Whitney designed a personalized pelvic health program that was gentle and incredibly effective. She made me feel completely comfortable and listened to."
                </p>
                <div>
                  <p className="font-serif text-sm font-bold text-primary">Sarah T.</p>
                  <p className="font-sans text-[11px] text-secondary font-medium tracking-wide uppercase mt-0.5">
                    Postpartum Mom
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Review 3 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-cream rounded-3xl p-8 border border-secondary/5 h-full flex flex-col justify-between">
                <p className="font-sans text-sm text-primary/80 italic leading-relaxed mb-6">
                  "Having Kim treat me in my home was a game changer for my schedule. I've done physical therapy elsewhere, but the undivided attention for a full hour makes a huge difference. I am back to playing golf without lower back stiffness."
                </p>
                <div>
                  <p className="font-serif text-sm font-bold text-primary">Robert K.</p>
                  <p className="font-sans text-[11px] text-secondary font-medium tracking-wide uppercase mt-0.5">
                    Active Adult
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="font-sans text-sm font-bold text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1.5"
            >
              Read More Patient Reviews &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Start Here / Low-Friction Form Section */}
      <section id="start-here" className="py-20 md:py-28 bg-cream border-t border-secondary/15">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-secondary/15 text-center">
            <FadeIn direction="up">
              <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
                Start Here
              </span>
              <h2 className="font-serif text-3xl font-bold text-primary mt-3 mb-3">
                Begin your recovery
              </h2>
              <p className="font-sans text-sm text-primary/70 mb-8 max-w-sm mx-auto">
                Submit your contact details. A doctorate-level therapist will contact you directly within 24 business hours.
              </p>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
