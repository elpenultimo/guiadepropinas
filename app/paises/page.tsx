"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { paises } from "@/data/paises";

export default function PaisesPage() {
  const [query, setQuery] = useState("");
  const [continente, setContinente] = useState<string>("todos");

  const continentes = useMemo(
    () =>
      Array.from(
        new Set(
          paises
            .map((pais) => pais.continente)
            .filter((value): value is NonNullable<typeof value> => Boolean(value))
        )
      ),
    []
  );

  const filtrados = useMemo(() => {
    const term = query.trim().toLowerCase();
    return paises.filter((pais) => {
      const matchNombre = !term || pais.name.toLowerCase().includes(term);
      const matchContinente = continente === "todos" || pais.continente === continente;
      return matchNombre && matchContinente;
    });
  }, [query, continente]);

  return (
    <section className="space-y-4">
      <header className="space-y-2">
        <p className="badge">Directorio</p>
        <h1 className="text-3xl font-bold">Países</h1>
        <p className="muted">Filtra por nombre y abre la guía detallada.</p>
      </header>
      <div className="card">
        <div className="space-y-3">
          <input
            className="input"
            placeholder="Buscar por nombre..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div>
            <p className="text-sm font-semibold mb-2">Filtrar por continente</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setContinente("todos")}
                className={`rounded-full border px-3 py-1 text-sm transition-colors ${
                  continente === "todos"
                    ? "border-accent bg-accent/10 text-white"
                    : "border-white/20 text-white/80 hover:border-white/50"
                }`}
              >
                Todos
              </button>
              {continentes.map((item) => (
                <button
                  key={item}
                  onClick={() => setContinente(item)}
                  className={`rounded-full border px-3 py-1 text-sm transition-colors ${
                    continente === item
                      ? "border-accent bg-accent/10 text-white"
                      : "border-white/20 text-white/80 hover:border-white/50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid-cards">
        {filtrados.map((pais) => (
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
    </section>
  );
}
