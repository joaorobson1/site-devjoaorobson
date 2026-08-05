import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Exigido pelo `output: "export"` — grava o arquivo no build em vez de
// gerá-lo por request.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
