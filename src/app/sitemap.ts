import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://prosperptky.com";

  const routes = [
    "",
    "/our-story",
    "/meet-the-team",
    "/services",
    "/services/physical-therapy",
    "/services/pelvic-health",
    "/services/personal-training-running",
    "/services/recovery-red-light-therapy",
    "/why-self-pay",
    "/our-process",
    "/mobile-and-telehealth",
    "/testimonials",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services/") ? 0.8 : 0.6,
  }));
}
