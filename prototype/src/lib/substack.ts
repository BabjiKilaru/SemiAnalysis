import { articles as fallbackArticles, type Article } from "./content";
import { SITE } from "./site";

function decodeXml(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function extractTag(xml: string, tag: string): string | null {
  const cdataMatch = xml.match(
    new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`, "i"),
  );
  if (cdataMatch) return decodeXml(cdataMatch[1].trim());

  const tagMatch = xml.match(
    new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"),
  );
  return tagMatch ? decodeXml(tagMatch[1].trim()) : null;
}

function formatDate(pubDate: string): string {
  const parsed = new Date(pubDate);
  if (Number.isNaN(parsed.getTime())) return pubDate;
  return parsed.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function decodeUrl(url: string): string {
  return decodeXml(url).replace(/&amp;/g, "&");
}

function extractImageUrl(itemXml: string): string | undefined {
  const enclosureMatch = itemXml.match(/<enclosure[^>]+url="([^"]+)"/i);
  if (enclosureMatch?.[1]) return decodeUrl(enclosureMatch[1]);

  const mediaMatch = itemXml.match(
    /<media:content[^>]+url="([^"]+)"[^>]*(?:medium="image"|type="image[^"]*")/i,
  );
  if (mediaMatch?.[1]) return decodeUrl(mediaMatch[1]);

  const content = extractTag(itemXml, "content:encoded") ?? extractTag(itemXml, "description") ?? "";

  const imgMatches = content.matchAll(/<img[^>]+src="([^"]+)"/gi);
  for (const match of imgMatches) {
    const src = decodeUrl(match[1]);
    if (
      src.includes("substack-post-media") ||
      src.includes("substackcdn.com/image/fetch")
    ) {
      return src;
    }
  }

  const s3Match = itemXml.match(
    /https:\/\/substack-post-media\.s3\.amazonaws\.com\/public\/images\/[a-f0-9-]+_\d+x\d+\.(?:png|jpe?g|webp)/i,
  );
  if (s3Match?.[0]) return s3Match[0];

  return undefined;
}

function parseItem(itemXml: string): Article {
  const title = extractTag(itemXml, "title") ?? "Untitled";
  const rawExcerpt = extractTag(itemXml, "description") ?? "";
  const url = extractTag(itemXml, "link") ?? SITE.newsletterUrl;
  const author = extractTag(itemXml, "dc:creator") ?? undefined;
  const pubDate = extractTag(itemXml, "pubDate") ?? "";
  const imageUrl = extractImageUrl(itemXml);

  return {
    title,
    excerpt: stripHtml(rawExcerpt).slice(0, 160),
    date: formatDate(pubDate),
    url,
    imageUrl,
    author,
  };
}

export async function fetchSubstackArticles(limit = 4): Promise<Article[]> {
  try {
    const res = await fetch(SITE.substackFeedUrl, {
      // Feed is ~4MB — skip Next.js fetch cache (2MB limit) so the request succeeds
      cache: "no-store",
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml",
        "User-Agent": "SemiAnalysis-Prototype/1.0",
      },
    });
    if (!res.ok) throw new Error(`RSS fetch failed: ${res.status}`);

    const xml = await res.text();
    const items = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];
    if (items.length === 0) throw new Error("No RSS items found");

    return items.slice(0, limit).map(parseItem);
  } catch {
    return fallbackArticles;
  }
}
