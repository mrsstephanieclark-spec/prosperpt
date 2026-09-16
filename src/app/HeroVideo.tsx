import Image from "next/image";

export default function HeroVideo() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Image
        src="/images/hero-static-frame.jpg"
        alt="Physical therapy resistance band exercise session"
        fill
        priority
        sizes="100vw"
        className="object-cover w-full h-full object-[right_30%] scale-105 origin-right"
      />
    </div>
  );
}
