"use client";

import { useState } from "react";
import type { FAQItem } from "@/data/paises";

export function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="mt-2 divide-y divide-white/10 border border-white/10 rounded-xl">
      {faqs.map((item) => {
        const isOpen = open === item.q;
        return (
          <div key={item.q} className="accordion-item px-4">
            <button
              className="accordion-button"
              onClick={() => setOpen(isOpen ? null : item.q)}
              aria-expanded={isOpen}
            >
              <span className="font-medium">{item.q}</span>
              <span className="text-sm text-white/60">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="muted text-sm pb-1.5 leading-relaxed">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
