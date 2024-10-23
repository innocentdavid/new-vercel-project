import { escapeXml } from "@/lib/helpers";
import { TOOLS } from "@/lib/mockToolsData";
import { MetadataRoute } from "next";

const BASE_URL = "https://www.followerstool.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries = TOOLS.map((tool) => ({
    url: `${BASE_URL}/review/${escapeXml(tool.slug)}`,
    // lastModified: tool.created_at || new Date(),
    lastModified: new Date("2024-10-15"),
  }));

  return sitemapEntries;
}