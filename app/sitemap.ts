import type { MetadataRoute } from "next";
import { paises } from "@/data/paises";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://guiadepropinas.vercel.app";
  const staticRoutes = ["", "/paises", "/privacidad", "/aviso"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const countryRoutes = paises.map((pais) => ({
    url: `${base}/pais/${pais.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...countryRoutes];
}
