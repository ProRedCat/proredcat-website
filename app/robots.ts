import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Link preview crawlers that respect robots.txt. Non-production pages still send
// noindex metadata and headers, so allowing them only enables previews.
const previewCrawlers = ["LinkedInBot", "Twitterbot", "facebookexternalhit", "Slackbot"];

export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV !== "production") {
    return {
      rules: [
        { userAgent: previewCrawlers, allow: "/" },
        { userAgent: "*", disallow: "/" },
      ],
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
