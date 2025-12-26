import { Suspense } from "react";
import PaisesClient from "./PaisesClient";

export default function PaisesPage() {
  return (
    <Suspense fallback={<div className="muted">Cargando países…</div>}>
      <PaisesClient />
    </Suspense>
  );
}
