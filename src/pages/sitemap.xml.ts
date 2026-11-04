import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { siteConfig } from "../data/site-config";

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL(siteConfig.url);
  const pages = siteConfig.nav
    .map((item) => item.href)
    .filter((href) => !siteConfig.hiddenPages.includes(href))
    .map((href) => (href === "/" ? "/" : `${href}/`));
  const events = (await getCollection("events")).map((e) => `/events/${e.slug}/`);
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...[...pages, ...events].map((path) => `  <url><loc>${new URL(path, base).href}</loc></url>`),
    "</urlset>",
  ].join("\n");
  return new Response(body + "\n", { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
