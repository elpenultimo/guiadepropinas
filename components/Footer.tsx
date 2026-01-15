import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container flex flex-col items-center gap-4 text-center text-sm leading-relaxed text-white/80">
        <div className="space-y-2">
          <p className="font-semibold text-white">Fuentes y criterio editorial</p>
          <p className="max-w-3xl">
            La información de esta guía se basa en prácticas habituales reportadas por viajeros,
            recomendaciones de guías turísticas, normativas locales, sitios oficiales de turismo y
            plataformas internacionales de viajes y hospitalidad. Las costumbres pueden variar según
            ciudad, tipo de servicio y cambios recientes.
          </p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-white">Guías sobre propinas</p>
          <div className="flex flex-col items-center gap-2">
            <Link href="/por-que-existe-la-propina" className="link text-sm">
              ¿Por qué existe la propina?
            </Link>
            <Link href="/errores-comunes-propinas-viaje" className="link text-sm">
              Errores comunes con las propinas
            </Link>
          </div>
        </div>
        <p className="text-white/60">
          © 2026 Guía de Propinas. Información referencial y sujeta a cambios locales.
        </p>
      </div>
    </footer>
  );
}
