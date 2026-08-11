import Link from "next/link";
import FadeIn from "./FadeIn";

export default function GetInTouchBox() {
  return (
    <section className="bg-cream py-16 border-t border-secondary/15">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <FadeIn direction="up">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-secondary/15 shadow-sm max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
              Not Sure Where to Start?
            </h3>
            <p className="font-sans text-sm md:text-base text-primary/80 leading-relaxed mb-8">
              Tell us what's going on, and we'll help you figure out the right next step.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-full bg-accent text-white font-sans text-sm font-semibold shadow-sm hover:bg-accent/90 transition-all hover:scale-[1.01]"
            >
              Start Here &rarr;
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
