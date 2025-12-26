"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { type Continente, paises } from "@/data/paises";

const PAGE_SIZE = 24;

const continentes: (Continente | "todos")[] = [
  "todos",
  "América",
  "Europa",
  "Asia",
  "África",
  "Oceanía",
];

const normalizeContinente = (value: string | null): Continente | "todos" => {
  if (!value) return "todos";
  return continentes.includes(value as Continente) ? (value as Continente) : "todos";
};

const buildUrl = (params: URLSearchParams) => {
  const query = params.toString();
  return query ? `/paises?${query}` : "/paises";
};

const getPageNumbers = (current: number, total: number) => {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages = new Set<number>();
  pages.add(1);
  pages.add(total);
  pages.add(current);
  pages.add(current - 1);
  pages.add(current + 1);
  pages.add(current - 2);
  pages.add(current + 2);

  return Array.from(pages)
    .filter((page) => page >= 1 && page <= total)
    .sort((a, b) => a - b);
};

export default function PaisesClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();
  const continente = normalizeContinente(searchParams.get("continente"));
  const query = searchParams.get("q")?.trim() ?? "";
  const page = Math.max(1, Number(searchParams.get("page")) || 1);

  const [searchValue, setSearchValue] = useState(query);

  useEffect(() => {
    setSearchValue(query);
  }, [query]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParamsString);
      params.delete("page");

      const nextQuery = searchValue.trim();

      if (nextQuery) {
        params.set("q", nextQuery);
      } else {
        params.delete("q");
      }

      router.replace(buildUrl(params));
    }, 300);

    return () => clearTimeout(timer);
  }, [searchValue, router, searchParamsString]);

  const sortedPaises = useMemo(
    () => [...paises].sort((a, b) => a.name.localeCompare(b.name, "es")),
    []
  );

  const filtrados = useMemo(() => {
    const term = query.toLowerCase();
    return sortedPaises.filter((pais) => {
      const matchNombre = !term || pais.name.toLowerCase().includes(term);
      const matchContinente = continente === "todos" || pais.continente === continente;
      return matchNombre && matchContinente;
    });
  }, [query, continente, sortedPaises]);

  const totalFiltrados = filtrados.length;
  const totalPages = Math.max(1, Math.ceil(totalFiltrados / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const visibles = filtrados.slice(start, start + PAGE_SIZE);

  useEffect(() => {
    if (page !== currentPage) {
      const params = new URLSearchParams(searchParamsString);

      if (currentPage <= 1) {
        params.delete("page");
      } else {
        params.set("page", String(currentPage));
      }

      router.replace(buildUrl(params));
    }
  }, [currentPage, page, router, searchParamsString]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const updateContinente = (value: Continente | "todos") => {
    const params = new URLSearchParams(searchParamsString);
    params.delete("page");

    if (value === "todos") {
      params.delete("continente");
    } else {
      params.set("continente", value);
    }

    router.push(buildUrl(params));
  };

  const handlePageChange = (targetPage: number) => {
    const params = new URLSearchParams(searchParamsString);

    if (targetPage <= 1) {
      params.delete("page");
    } else {
      params.set("page", String(targetPage));
    }

    router.push(buildUrl(params));
  };

  return (
    <section className="space-y-4">
      <header className="space-y-2">
        <p className="badge">Directorio</p>
        <h1 className="text-3xl font-bold">Países</h1>
        <p className="muted">Filtra por nombre y abre la guía detallada.</p>
      </header>
      <div className="card">
        <div className="space-y-4">
          <input
            className="input"
            placeholder="Buscar por nombre..."
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <div>
            <p className="text-sm font-semibold mb-2">Filtrar por continente</p>
            <div className="flex flex-wrap gap-2">
              {continentes.map((item) => {
                const active = continente === item;
                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={active}
                    onClick={() => updateContinente(item)}
                    className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-900 ${
                      active
                        ? "border-accent bg-white text-slate-900 shadow-lg"
                        : "border-white/20 text-white/80 hover:border-white/50 hover:bg-white/5"
                    }`}
                  >
                    {item === "todos" ? "Todos" : item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-white/70">
        Mostrando {visibles.length} de {totalFiltrados} países
      </p>
      <div className="grid-cards">
        {visibles.map((pais) => (
          <Link
            key={pais.slug}
            href={`/pais/${pais.slug}`}
            className="card hover:border-accent/40 transition-colors"
          >
            <p className="font-semibold text-lg">{pais.name}</p>
            <p className="muted text-sm">Moneda: {pais.moneda}</p>
            <p className="text-sm mt-1">¿Se deja propina? {pais.seDejaPropina}</p>
          </Link>
        ))}
      </div>
      {totalFiltrados === 0 ? (
        <p className="muted">No encontramos países que coincidan con tu búsqueda.</p>
      ) : (
        <nav className="flex flex-wrap items-center gap-2" aria-label="Paginación de países">
          <button
            type="button"
            className="btn btn-ghost"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Anterior
          </button>
          <div className="flex items-center gap-2 text-sm">
            {getPageNumbers(currentPage, totalPages).map((pageNumber, index, array) => {
              const previousPage = array[index - 1];
              const showEllipsis = previousPage && pageNumber - previousPage > 1;

              return (
                <div key={pageNumber} className="flex items-center gap-2">
                  {showEllipsis && <span className="text-white/60">…</span>}
                  <button
                    type="button"
                    className={`rounded-md px-3 py-1 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-900 ${
                      currentPage === pageNumber
                        ? "bg-white text-slate-900 shadow"
                        : "border border-white/10 text-white/80 hover:border-white/40"
                    }`}
                    onClick={() => handlePageChange(pageNumber)}
                    aria-current={currentPage === pageNumber ? "page" : undefined}
                  >
                    {pageNumber}
                  </button>
                </div>
              );
            })}
          </div>
          <button
            type="button"
            className="btn btn-ghost"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Siguiente
          </button>
        </nav>
      )}
    </section>
  );
}
