import ContactForm from "./ContactForm";
import FadeIn from "./FadeIn";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactBox() {
  return (
    <section className="bg-cream py-16 md:py-24 border-t border-secondary/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-secondary/15 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Column: Context */}
            <div className="lg:col-span-7 bg-primary text-cream p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <FadeIn direction="left">
                  <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold">
                    Get In Touch
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
                    Ready to live without limitations?
                  </h2>
                  <p className="font-sans text-base text-cream/80 max-w-lg mb-8 leading-relaxed">
                    You don't need a referral or insurance approval to start feeling better. Fill out this quick form, and one of our doctorate-level physical therapists will contact you directly to discuss how we can help.
                  </p>
                </FadeIn>
              </div>

              <div className="space-y-6 pt-6 border-t border-cream/10">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-secondary">Phone</h4>
                    <p className="font-sans text-sm text-cream/90 mt-0.5">[Phone — TBD]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-secondary">Email</h4>
                    <a href="mailto:meg@prosperptky.com" className="font-sans text-sm text-cream/90 hover:text-accent mt-0.5 block transition-colors">
                      meg@prosperptky.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-secondary">Location</h4>
                    <p className="font-sans text-sm text-cream/90 mt-0.5">[Address — TBD], Shelbyville, KY</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 bg-white flex flex-col justify-center">
              <FadeIn direction="right">
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                  Start Here
                </h3>
                <p className="font-sans text-sm text-primary/70 mb-8">
                  Submit your contact details and we'll reach out to schedule a free consult.
                </p>
                <ContactForm />
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
