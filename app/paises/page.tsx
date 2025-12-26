import { Suspense } from "react";
import type { Metadata } from "next";
import PaisesClient from "./PaisesClient";

type SearchParams = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const normalizeContinente = (value: string | string[] | null | undefined) => {
  if (Array.isArray(value)) return value[0];
  return value ?? undefined;
};

const buildCanonical = (params: URLSearchParams, page: number) => {
  if (page <= 1) {
    return "/paises";
  }

  const nextParams = new URLSearchParams();

  if (params.get("continente")) {
    nextParams.set("continente", params.get("continente") as string);
  }

  if (params.get("q")) {
    nextParams.set("q", params.get("q") as string);
  }

  nextParams.set("page", String(page));

  const queryString = nextParams.toString();
  return queryString ? `/paises?${queryString}` : "/paises";
};

export function generateMetadata({ searchParams }: SearchParams): Metadata {
  const params = new URLSearchParams();

  if (typeof searchParams.q === "string" && searchParams.q.trim()) {
    params.set("q", searchParams.q.trim());
  }

  if (normalizeContinente(searchParams.continente)) {
    params.set("continente", normalizeContinente(searchParams.continente) as string);
  }

  const page = Math.max(1, Number(searchParams.page) || 1);
  const canonical = buildCanonical(params, page);

  const baseTitle = normalizeContinente(searchParams.continente)
    ? `Países de ${normalizeContinente(searchParams.continente)}`
    : "Países";

  const title = params.get("q")
    ? `${baseTitle}: Resultados para '${params.get("q")}' – Guía de Propinas`
    : `${baseTitle} – Guía de Propinas`;

  return {
    title: { absolute: title },
    alternates: {
      canonical,
    },
    description:
      params.get("q") || params.get("continente")
        ? "Explora países filtrados por continente o nombre y descubre cómo dejar propina en cada destino."
        : "Listado completo de países con sus recomendaciones de propinas para restaurantes, taxis y hoteles.",
  };
}

export default function PaisesPage() {
  return (
    <Suspense fallback={<div className="muted">Cargando países…</div>}>
      <PaisesClient />
    </Suspense>
  );
}
