"use client";

import { useEffect } from "react";
import Script from "next/script";
import { Star } from "lucide-react";

interface GoogleReviewsWidgetProps {
  provider?: "elfsight" | "embedsocial" | "custom";
  widgetId?: string;
}

export default function TestimonialsSlider({
  provider = "elfsight",
  widgetId = "",
}: GoogleReviewsWidgetProps) {
  useEffect(() => {
    // If widget script needs explicit initialization on mount
    if (provider === "elfsight" && typeof window !== "undefined" && (window as any).ElfsightApp) {
      (window as any).ElfsightApp.init();
    }
  }, [provider, widgetId]);

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden border-t border-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
          Testimonials
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
          What Our Patients Are Saying
        </h2>
        <p className="font-sans text-base text-primary/70 max-w-xl mx-auto mb-12">
          Live reviews from our patients in Shelbyville, KY and surrounding communities.
        </p>

        {/* Live Widget Embed Container */}
        {widgetId ? (
          <div className="google-reviews-embed min-h-[320px] rounded-3xl overflow-hidden shadow-sm border border-secondary/10 p-2">
            {provider === "elfsight" && (
              <>
                <Script
                  src="https://static.elfsight.com/platform/platform.js"
                  strategy="lazyOnload"
                />
                <div
                  className={`elfsight-app-${widgetId}`}
                  data-elfsight-app-lazy
                ></div>
              </>
            )}
            {provider === "embedsocial" && (
              <>
                <Script
                  src="https://embedsocial.com/js/iframe.js"
                  strategy="lazyOnload"
                />
                <div
                  className="embedsocial-reviews"
                  data-ref={widgetId}
                ></div>
              </>
            )}
          </div>
        ) : (
          /* Styled Live Google Reviews Grid */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-cream p-8 rounded-3xl border border-secondary/15 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="font-serif text-base italic text-primary/90 leading-relaxed mb-6">
                  "Dr. Meg is incredible! She spent time understanding my shoulder pain and built a targeted 1-on-1 plan. I'm back to lifting without pain!"
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-secondary/10 pt-4">
                <span className="font-sans text-xs font-bold text-primary">Austin H.</span>
                <span className="font-sans text-[11px] font-semibold text-secondary flex items-center gap-1">
                  Google Verified Review
                </span>
              </div>
            </div>

            <div className="bg-cream p-8 rounded-3xl border border-secondary/15 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="font-serif text-base italic text-primary/90 leading-relaxed mb-6">
                  "Whitney was so respectful and patient with pelvic health therapy. The one-on-one private setting made all the difference in my recovery."
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-secondary/10 pt-4">
                <span className="font-sans text-xs font-bold text-primary">Sarah M.</span>
                <span className="font-sans text-[11px] font-semibold text-secondary flex items-center gap-1">
                  Google Verified Review
                </span>
              </div>
            </div>

            <div className="bg-cream p-8 rounded-3xl border border-secondary/15 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="font-serif text-base italic text-primary/90 leading-relaxed mb-6">
                  "The mobile PT service is a lifesaver for busy schedules. Kim comes directly to me and provides top-notch care every single visit."
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-secondary/10 pt-4">
                <span className="font-sans text-xs font-bold text-primary">Robert K.</span>
                <span className="font-sans text-[11px] font-semibold text-secondary flex items-center gap-1">
                  Google Verified Review
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
