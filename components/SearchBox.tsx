"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { paises } from "@/data/paises";

export function SearchBox() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const resultados = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return [];
    return paises.filter((pais) =>
      pais.name.toLowerCase().includes(term)
    );
  }, [query]);

  const handleSelect = (slug: string) => {
    setQuery("");
    router.push(`/pais/${slug}`);
  };

  return (
    <div className="relative">
      <input
        className="input"
        placeholder="Buscar país..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 120)}
      />
      {focused && resultados.length > 0 && (
        <ul className="absolute z-10 mt-2 w-full rounded-xl border border-white/10 bg-slate-900/95 shadow-xl">
          {resultados.map((pais) => (
            <li key={pais.slug}>
              <button
                className="w-full px-4 py-3 text-left text-sm hover:bg-white/5"
                onMouseDown={() => handleSelect(pais.slug)}
              >
                {pais.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
