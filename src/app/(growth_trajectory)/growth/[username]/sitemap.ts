import { escapeXml } from "@/lib/helpers";
import { supabase } from "@/lib/supabaseClient";
import { MetadataRoute } from "next";

const BASE_URL = "https://followerstool.vercel.app";
const ITEM_PER_PAGE = 3000;

async function getTotalData() {
  const { count, error } = await supabase
    .from("users")
    .select("*", { count: "exact", head: true })
  if (!error && count) {
    return count ?? 0;
  } else {
    return 0;
  }
}

export type User = { id: number; created_at: string; username: string };

async function getAllDataWithLimit(start: number, end: number) {
  const { data, error } = await supabase
    .from("users") // Replace with your table name
    .select("*")
    .range(start, end - 1); // Supabase `range` is inclusive for start and end, so subtract 1 from end

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data as User[];
}

export async function generateSitemaps() {
  const totalData = (await getTotalData()) || 0;

  const numberOfSitemaps = Math.ceil(totalData / ITEM_PER_PAGE);

  const sitemaps = [{ id: 0 }];

  for (let i = 0; i < numberOfSitemaps; i++) {
    sitemaps.push({
      id: i + 1,
    });
  }

  return sitemaps;
}

export default async function sitemap({
  id = 0,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  // Google's limit is 50,000 URLs per sitemap but supabase limit is 1k (I've incresed this to 3k)
  const start = id * ITEM_PER_PAGE;
  const end = start + ITEM_PER_PAGE;
  const items = await getAllDataWithLimit(start, end);

  const sitemap_ = items.map((item) => ({
    url: `${BASE_URL}/growth/${escapeXml(item.username || "")}`,
    lastModified: item.created_at || new Date(),
    // lastModified: new Date(),
  }));

  return sitemap_;
}
