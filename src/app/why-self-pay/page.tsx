import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Why We're Self-Pay | Prosper PT & Wellness | Shelbyville, KY",
  description: "Why Prosper PT & Wellness doesn't take insurance — and why that means better, more personal care. Learn how self-pay physical therapy works.",
};

export default function WhySelfPay() {
  return (
    <div>
      {/* Header */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
              Our Billing Philosophy
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              Why We Don't Take Insurance — And Why That's a Good Thing
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              If you have wondered **why physical therapy doesn't take insurance**, the answer is simple: it allows us to prioritize your actual recovery over administrative rules.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column - Narrative Text */}
            <div className="lg:col-span-7">
              <FadeIn direction="left">
                <div className="font-sans text-base sm:text-lg text-primary/85 space-y-6 leading-relaxed">
                  <p>
                    When it comes to your health, you deserve undivided attention and a recovery path built around your actual capabilities. In a traditional medical billing setup, that is rarely what happens. By choosing a **self-pay physical therapy** model, we operate entirely out-of-network, placing the control of your recovery back where it belongs: with you and your therapist.
                  </p>
                  <p>
                    In practice, choosing **cash-pay PT in Shelbyville, KY** means you never have an insurance company adjuster dictating how long your sessions can be, how many total visits you are allowed, or what specific treatment modalities you are approved to receive. Your care plan is built strictly around your personal physical goals — not billing codes or pre-authorizations.
                  </p>
                  <p>
                    Our founder, Dr. Meg Raymer-Brown, built Prosper PT & Wellness this way by design. After spending seven years in corporate outpatient clinics—where therapists are routinely double-booked, appointments are rushed, and insurance limitations restrict treatment decisions—she wanted to create a change. Meg wanted the autonomy to offer patients the thorough, whole-person care they actually need to heal fully.
                  </p>
                  <p>
                    Today, a growing number of active adults, runners, and seniors are choosing to invest directly in higher-quality, one-on-one care. Instead of settling for rushed corporate physical therapy visits where you spend most of your time working with aides or doing exercises you could manage at home, Prosper provides doctorate-level manual therapy, dry needling, cupping, and strength adjustments at every single session.
                  </p>
                  <p>
                    We accept Health Savings Account (HSA) and Flexible Spending Account (FSA) cards, allowing you to use tax-free funds to cover all physical therapy and wellness sessions. We are happy to provide superbills (itemized receipts) upon request, which you can submit to your insurance provider for potential out-of-network reimbursement.
                  </p>
                </div>

                {/* Note box */}
                <div className="mt-10 p-6 bg-cream rounded-2xl border border-secondary/10 text-sm text-primary/80">
                  <strong>Please Note:</strong> Due to federal guidelines, we cannot bill Medicare or Medicaid, nor can superbills be submitted to Medicare/Medicaid for self-pay services.
                </div>
              </FadeIn>
            </div>

            {/* Right Column - Client Photo & Caption */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <FadeIn direction="right">
                <div className="relative aspect-[3/2] w-full rounded-[2rem] overflow-hidden shadow-sm border border-secondary/15 mb-8">
                  <Image
                    src="/images/7.jpg"
                    alt="Close-up of physical therapy recovery device being adjusted by gloved therapist for patient's treatment session"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="bg-cream rounded-3xl p-8 border border-secondary/15">
                  <h3 className="font-serif text-xl font-bold text-primary mb-4">
                    Advanced Therapeutic Tools
                  </h3>
                  <p className="font-sans text-sm text-primary/80 leading-relaxed">
                    By operating outside of insurance rules, we are free to utilize state-of-the-art modalities—including dry needling, cupping, and clinical-grade red light therapy—whenever they serve your recovery goals, at no extra cost.
                  </p>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-primary text-cream py-16 md:py-24 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="font-sans text-base text-cream/80 max-w-md mx-auto mb-8">
              Take control of your recovery today with doctorate-level, 1-on-1 care designed around your life.
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
