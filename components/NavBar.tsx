import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/paises", label: "Países" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/aviso", label: "Aviso" },
];

export function NavBar() {
  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-20">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          Guía de Propinas
        </Link>
        <ul className="flex items-center gap-4 text-sm text-white/80">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-white transition-colors"
                prefetch
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
