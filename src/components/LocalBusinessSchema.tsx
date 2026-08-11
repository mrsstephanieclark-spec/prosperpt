export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PhysicalTherapy",
    "name": "Prosper PT & Wellness",
    "image": "https://prosperptky.com/images/hero_pt_wellness.jpg",
    "@id": "https://prosperptky.com/#localbusiness",
    "url": "https://prosperptky.com",
    "telephone": "[Phone — TBD]",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[Address — TBD]",
      "addressLocality": "Shelbyville",
      "addressRegion": "KY",
      "postalCode": "40065",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.2117",  // Approximate coordinates for Shelbyville center
      "longitude": "-85.2289"
    },
    "description": "Doctorate-level, 1-on-1 physical therapy, pelvic health, and performance coaching. Self-pay by design, offering home, office, and CrossFit gym appointments in Shelbyville, KY.",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      // No social media links provided yet
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
