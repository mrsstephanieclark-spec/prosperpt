import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { CheckCircle2, Home, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Thank You",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYou() {
  return (
    <div className="bg-cream min-h-[60vh] flex items-center py-16 md:py-24">
      <div className="max-w-md mx-auto px-4 text-center">
        <FadeIn direction="up">
          <div className="p-4 bg-white rounded-full text-secondary w-fit mx-auto shadow-sm mb-6 border border-secondary/10">
            <CheckCircle2 className="w-12 h-12 text-secondary" />
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-4">
            Thank you for reaching out!
          </h1>
          
          <p className="font-sans text-sm text-primary/80 leading-relaxed mb-8 max-w-sm mx-auto">
            Your request has been received. One of our doctorate-level therapists (Dr. Meg, Dr. Whitney, or Dr. Kim) will contact you directly within 24 business hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-sans text-sm font-semibold hover:bg-accent/90 transition-colors shadow-sm"
            >
              <Home className="w-4 h-4" /> Back to Home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full border border-primary/20 text-primary font-sans text-sm font-semibold hover:bg-primary/5 transition-colors"
            >
              Explore Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
