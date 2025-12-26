"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { type Continente, paises } from "@/data/paises";

export default function PaisesPage() {
  const [query, setQuery] = useState("");
  const [continente, setContinente] = useState<Continente | "todos">("todos");

  const continentes: (Continente | "todos")[] = [
    "todos",
    "América",
    "Europa",
    "Asia",
    "África",
    "Oceanía",
  ];

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
        <div className="space-y-4">
          <input
            className="input"
            placeholder="Buscar por nombre..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
                    onClick={() => setContinente(item)}
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
      <p className="text-sm text-white/70">Mostrando {filtrados.length} países</p>
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
