import type { MetadataRoute } from "next";

const siteUrl = "https://your-name.forge.zephvion.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
