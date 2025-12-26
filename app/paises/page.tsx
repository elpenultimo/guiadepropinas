"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { paises } from "@/data/paises";

export default function PaisesPage() {
  const [query, setQuery] = useState("");

  const filtrados = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return paises;
    return paises.filter((pais) =>
      pais.name.toLowerCase().includes(term)
    );
  }, [query]);

  return (
    <section className="space-y-4">
      <header className="space-y-2">
        <p className="badge">Directorio</p>
        <h1 className="text-3xl font-bold">Países</h1>
        <p className="muted">Filtra por nombre y abre la guía detallada.</p>
      </header>
      <div className="card">
        <input
          className="input"
          placeholder="Buscar por nombre..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
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
