import { SITE_URL } from "@/lib/site";

const ROBOTS_BODY = `User-agent: *
Allow: /
Sitemap: ${SITE_URL}/sitemap.xml`;

export const GET = async () =>
  new Response(ROBOTS_BODY, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
