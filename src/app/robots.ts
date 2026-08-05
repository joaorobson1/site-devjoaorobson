import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Exigido pelo `output: "export"` — grava o arquivo no build em vez de
// gerá-lo por request.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
