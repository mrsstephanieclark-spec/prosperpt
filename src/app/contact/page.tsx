import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact & Book Consult",
  description: "Get in touch with Prosper PT & Wellness in Shelbyville, KY. Submit our simple form to request a free consult with one of our physical therapists.",
};

export default function Contact() {
  return (
    <div>
      {/* Header */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
              Get Started
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6 leading-tight">
              Start your path to movement wellness
            </h1>
            <p className="font-sans text-base sm:text-lg text-primary/80 leading-relaxed max-w-2xl mx-auto">
              Ready to recover without insurance limitations? Fill out our quick consult form, and one of our doctorate-level therapists will reach out directly.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Form + Info Layout */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left side details */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              <FadeIn direction="left">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-6">
                  Practice Information
                </h2>
                <p className="font-sans text-sm text-primary/80 leading-relaxed mb-8">
                  Prosper PT & Wellness is a self-pay, family-owned practice. We offer flexible session times at our office, in your home, online, or at CrossFit Shelbyville.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-cream text-secondary">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-primary">Phone</h4>
                      <p className="font-sans text-xs text-primary/75 mt-0.5">[Phone — TBD]</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-cream text-secondary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-primary">Email</h4>
                      <a href="mailto:meg@prosperptky.com" className="font-sans text-xs text-primary/75 hover:text-accent mt-0.5 block transition-colors">
                        meg@prosperptky.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-cream text-secondary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-primary">Office Location</h4>
                      <p className="font-sans text-xs text-primary/75 mt-0.5">
                        [Address — TBD] &bull; Shelbyville, KY
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-5 rounded-2xl bg-cream border border-secondary/10">
                  <h4 className="font-serif text-xs font-bold text-primary mb-1.5">
                    Important Form Note
                  </h4>
                  <p className="font-sans text-[11px] text-primary/70 leading-relaxed">
                    To comply with healthcare privacy regulations and maintain security, our forms are restricted to contact details only. We will request your medical history securely during your initial call or intake portal.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right side form */}
            <div className="lg:col-span-7 bg-cream rounded-3xl p-8 sm:p-12 border border-secondary/15 shadow-sm">
              <FadeIn direction="right">
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                  Request a Free Consult Call
                </h3>
                <p className="font-sans text-sm text-primary/70 mb-8">
                  Submit your contact details below. A doctorate-level therapist will contact you directly within 24 business hours.
                </p>
                <ContactForm />
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
