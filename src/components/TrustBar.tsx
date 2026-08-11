import { UserCheck, Award, MapPin, Heart } from "lucide-react";

export default function TrustBar() {
  const items = [
    {
      icon: <UserCheck className="w-5 h-5 text-accent" />,
      text: "Always 1-on-1 Care",
      desc: "Never handed off to a tech",
    },
    {
      icon: <Award className="w-5 h-5 text-accent" />,
      text: "3 Doctorate-Level PTs",
      desc: "Meg, Whitney, and Kim",
    },
    {
      icon: <MapPin className="w-5 h-5 text-accent" />,
      text: "Home, Office & Telehealth",
      desc: "Plus CrossFit Shelbyville",
    },
    {
      icon: <Heart className="w-5 h-5 text-accent" />,
      text: "Faith-Driven & Family-Owned",
      desc: "Shelbyville, KY local business",
    },
  ];

  return (
    <section className="bg-white border-y border-secondary/15 py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 group transition-transform duration-300 hover:scale-[1.01]"
            >
              <div className="p-3 rounded-full bg-cream group-hover:bg-cream/70 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="font-serif text-sm md:text-base font-semibold text-primary">
                  {item.text}
                </h3>
                <p className="font-sans text-xs text-primary/70 mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
