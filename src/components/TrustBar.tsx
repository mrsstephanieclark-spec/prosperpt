export default function TrustBar() {
  return (
    <section className="bg-secondary text-cream py-4 border-y border-white/10 shadow-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile View: Scrolling Marquee or wrap */}
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-y-2 gap-x-4 md:gap-x-8 text-center font-sans text-xs tracking-wider uppercase font-semibold">
          <span className="whitespace-nowrap">Always 1-on-1 Care</span>
          <span className="hidden md:inline text-cream/30">|</span>
          <span className="whitespace-nowrap">3 Doctorate-Level Therapists</span>
          <span className="hidden md:inline text-cream/30">|</span>
          <span className="whitespace-nowrap">Mobile, In-Office & Telehealth</span>
          <span className="hidden md:inline text-cream/30">|</span>
          <span className="whitespace-nowrap">Faith-Driven, Family-Owned</span>
        </div>
      </div>
    </section>
  );
}
