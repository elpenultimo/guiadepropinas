import type { MetadataRoute } from "next";
import { continentesList } from "@/data/continentes";
import { paises } from "@/data/paises";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://guiadepropinas.vercel.app";
  const staticRoutes = ["", "/paises", "/continentes", "/privacidad", "/aviso"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    })
  );

  const countryRoutes = paises.map((pais) => ({
    url: `${base}/pais/${pais.slug}`,
    lastModified: new Date(),
  }));

  const continentRoutes = continentesList.map((continente) => ({
    url: `${base}/continente/${continente.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...countryRoutes, ...continentRoutes];
}
