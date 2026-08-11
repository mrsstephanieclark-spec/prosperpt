import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-cream pt-16 pb-8 border-t border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Practice Info */}
          <div className="md:col-span-2 pr-4">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-8 h-8 text-secondary transition-transform duration-300 group-hover:rotate-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v18M12 3C9.5 7.5 5 10 5 12c0 3.866 3.134 7 7 7s7-3.134 7-7c0-2-4.5-4.5-7-9z"
                />
              </svg>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold tracking-wide text-cream leading-none">
                  PROSPER
                </span>
                <span className="font-sans text-[10px] tracking-[0.15em] text-secondary font-medium">
                  PT & WELLNESS
                </span>
              </div>
            </Link>
            <p className="font-sans text-sm text-cream/70 max-w-sm mb-6 leading-relaxed">
              Dr. Meg Raymer-Brown, PT, DPT, Cert. DN alongside Dr. Whitney Ensor and Dr. Kim Wilson. 
              Always one-on-one care with your own doctorate-level therapist. No insurance limitations, just the results you deserve.
            </p>
            <div className="space-y-2 text-sm font-sans">
              <p>
                <span className="font-semibold text-secondary">Phone:</span>{" "}
                <span className="text-cream/90">[Phone — TBD]</span>
              </p>
              <p>
                <span className="font-semibold text-secondary">Email:</span>{" "}
                <a href="mailto:meg@prosperptky.com" className="text-cream/95 hover:text-accent transition-colors">
                  meg@prosperptky.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-secondary">Location:</span>{" "}
                <span className="text-cream/90">[Address — TBD] | Shelbyville, KY</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-base font-semibold text-secondary mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <Link href="/our-story" className="text-cream/70 hover:text-accent transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/meet-the-team" className="text-cream/70 hover:text-accent transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link href="/why-self-pay" className="text-cream/70 hover:text-accent transition-colors">
                  Why Self-Pay
                </Link>
              </li>
              <li>
                <Link href="/our-process" className="text-cream/70 hover:text-accent transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/mobile-and-telehealth" className="text-cream/70 hover:text-accent transition-colors">
                  Mobile & Telehealth
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-cream/70 hover:text-accent transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-base font-semibold text-secondary mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <Link href="/services/physical-therapy" className="text-cream/70 hover:text-accent transition-colors">
                  Physical Therapy
                </Link>
              </li>
              <li>
                <Link href="/services/pelvic-health" className="text-cream/70 hover:text-accent transition-colors">
                  Women's & Pelvic Health
                </Link>
              </li>
              <li>
                <Link href="/services/personal-training-running" className="text-cream/70 hover:text-accent transition-colors">
                  Personal Training & Running
                </Link>
              </li>
              <li>
                <Link href="/services/recovery-red-light-therapy" className="text-cream/70 hover:text-accent transition-colors">
                  Recovery & Red Light
                </Link>
              </li>
              <li className="pt-2 border-t border-cream/10">
                <Link href="/contact" className="text-accent font-semibold hover:text-accent/90 transition-colors">
                  Book Consult &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Insurance disclaimer, copyright, and developer credits */}
        <div className="border-t border-cream/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs font-sans text-cream/50 max-w-2xl text-center md:text-left leading-relaxed">
            <p className="mb-2">
              <strong>Notice:</strong> Prosper PT & Wellness is an out-of-network, self-pay practice. 
              We do not bill commercial health insurance, Medicare, or Medicaid. We can provide itemized receipts 
              (superbills) for clients to self-submit to their insurance carriers for potential reimbursement (excluding Medicare/Medicaid).
            </p>
            <p>
              &copy; {new Date().getFullYear()} Prosper PT & Wellness, LLC. All rights reserved.
            </p>
          </div>
          <div className="text-xs font-sans text-cream/50 text-center md:text-right">
            <p>Designed with care by 10 Hats Branding</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
