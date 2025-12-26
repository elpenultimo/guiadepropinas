import { continentesList } from "@/data/continentes";
import { paises } from "@/data/paises";
import { SITE_LASTMOD, SITE_URL } from "@/lib/site";

const XML_HEADER = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";

type SitemapEntry = {
  loc: string;
  changefreq: "weekly" | "monthly";
  priority: number;
};

const basePaths: SitemapEntry[] = [
  { loc: `${SITE_URL}/`, changefreq: "weekly", priority: 1.0 },
  { loc: `${SITE_URL}/paises`, changefreq: "weekly", priority: 0.9 },
  { loc: `${SITE_URL}/continentes`, changefreq: "weekly", priority: 0.8 },
  {
    loc: `${SITE_URL}/ranking/paises-sin-propina`,
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    loc: `${SITE_URL}/ranking/paises-mayor-propina`,
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    loc: `${SITE_URL}/guia/propina-restaurantes`,
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    loc: `${SITE_URL}/guia/propina-hoteles`,
    changefreq: "monthly",
    priority: 0.7,
  },
];

const continentPaths: SitemapEntry[] = continentesList.map((continente) => ({
  loc: `${SITE_URL}/continente/${continente.slug}`,
  changefreq: "monthly",
  priority: 0.7,
}));

const countryPaths: SitemapEntry[] = paises.map((pais) => ({
  loc: `${SITE_URL}/pais/${pais.slug}`,
  changefreq: "monthly",
  priority: 0.6,
}));

const buildUrlNode = ({ loc, changefreq, priority }: SitemapEntry): string => `
  <url>
    <loc>${loc}</loc>
    <lastmod>${SITE_LASTMOD}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;

const generateXml = (): string => {
  const urls = [...basePaths, ...continentPaths, ...countryPaths]
    .map(buildUrlNode)
    .join("\n");

  return `${XML_HEADER}
<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">${urls}
</urlset>`;
};

export const GET = async () => {
  const xml = generateXml();

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
