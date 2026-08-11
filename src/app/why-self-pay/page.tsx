import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ContactBox from "@/components/ContactBox";
import { ShieldCheck, CalendarRange, Clock, CreditCard, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Why Self-Pay",
  description: "Learn how our self-pay physical therapy model in Shelbyville, KY ensures 1-on-1 time, faster results, and complete autonomy from insurance limits.",
};

const pillars = [
  {
    icon: <Clock className="w-6 h-6 text-accent" />,
    title: "Full 60-Minute Sessions",
    desc: "Typical clinics double-book or hand you off to techs after 15 minutes. At Prosper, you receive a full hour of undivided attention from your doctor of physical therapy, every single visit.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-accent" />,
    title: "No Insurance Constraints",
    desc: "Insurance adjusters who have never met you shouldn't decide how many visits you get or what treatments are allowed. We operate with complete autonomy, focusing only on what actually gets you well.",
  },
  {
    icon: <CalendarRange className="w-6 h-6 text-accent" />,
    title: "Fewer Visits, Faster Healing",
    desc: "By combining high-quality 1-on-1 care, dry needling, cupping, and targeted training in a single visit, our clients heal in fewer total sessions compared to traditional volume-based clinics.",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-accent" />,
    title: "Transparent, Upfront Pricing",
    desc: "No surprise bills in the mail six months later. You know exactly what your care costs upfront. We accept HSA and FSA cards and can provide detailed superbills for out-of-network reimbursement.",
  },
];

export default function WhySelfPay() {
  return (
    <div>
      {/* Header */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
              The Self-Pay Model Explained
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              Why we choose to operate outside of insurance networks
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              Our self-pay model is designed by choice to prioritize you. We believe in providing undivided, doctorate-level care without corporate limitations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Info Text */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <FadeIn direction="left">
                <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
                  The Bottom Line
                </span>
                <h2 className="font-serif text-3xl font-bold text-primary mt-3 mb-6">
                  Quality care saves time and money
                </h2>
                <p className="font-sans text-base text-primary/80 mb-6 leading-relaxed">
                  Traditional physical therapy clinics are forced to see 3-4 patients per hour because insurance companies keep reducing reimbursement rates. 
                </p>
                <p className="font-sans text-base text-primary/80 mb-8 leading-relaxed">
                  This volume-based setup results in rushed visits, slow recovery times, and patients paying high copays for months on end. Prosper is built on a value-based model: undivided attention, expert treatment, and rapid outcomes.
                </p>
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-6 py-3.5 rounded-full bg-accent text-white font-sans text-sm font-semibold hover:bg-accent/90 transition-all shadow-sm"
                >
                  Schedule a Free Consult
                </Link>
              </FadeIn>
            </div>

            {/* Right Pillars List */}
            <div className="lg:col-span-7 space-y-8">
              {pillars.map((pillar, index) => (
                <FadeIn key={pillar.title} direction="up" delay={index * 0.1}>
                  <div className="bg-cream rounded-3xl p-8 border border-secondary/10 flex gap-5 items-start hover:shadow-sm transition-all duration-300">
                    <div className="p-3 bg-white text-accent rounded-2xl shadow-sm shrink-0">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-primary mb-2">
                        {pillar.title}
                      </h3>
                      <p className="font-sans text-sm text-primary/75 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Insurance Details Section */}
      <section className="bg-cream py-16 md:py-24 border-t border-secondary/15">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary text-center mb-8">
              HSA, FSA & Out-Of-Network Submissions
            </h2>
            <div className="bg-white p-8 rounded-3xl border border-secondary/15 space-y-6 text-sm font-sans text-primary/85 leading-relaxed">
              <p>
                <strong>HSA & FSA Accepted:</strong> Since physical therapy is a qualified medical expense, you can use your Health Savings Account (HSA) or Flexible Spending Account (FSA) cards to pay for all sessions, evaluations, and recovery work.
              </p>
              <p>
                <strong>Superbills for Reimbursement:</strong> Upon request, we can provide you with an itemized receipt (called a superbill) containing the medical codes and therapist details required by insurance companies. Many clients with out-of-network benefits successfully submit these superbills to their insurers for partial or full reimbursement.
              </p>
              <p className="p-4 bg-cream rounded-2xl text-xs text-primary/70 border-l-4 border-accent">
                <strong>Medicare & Medicaid Disclaimer:</strong> Due to federal regulations, we do not participate in or bill Medicare or Medicaid. We legally cannot accept Medicare or Medicaid beneficiaries for physical therapy services under a self-pay arrangement, nor can superbills be submitted to Medicare/Medicaid for reimbursement.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Reusable Contact Box */}
      <ContactBox />
    </div>
  );
}
