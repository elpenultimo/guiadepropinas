import * as React from "react";
import * as FlagIcons from "country-flag-icons/react/3x2";

const FLAGS: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = Object.entries(
  FlagIcons,
).reduce((acc, [key, Component]) => {
  if (typeof Component === "function") {
    acc[key.toLowerCase()] = Component as React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }
  return acc;
}, {} as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>);

type CountryFlagProps = {
  iso2?: string;
  size?: number;
  className?: string;
  title?: string;
};

export function CountryFlag({ iso2, size = 24, className, title }: CountryFlagProps) {
  const normalizedIso = iso2?.toLowerCase() ?? "";
  const FlagComponent = normalizedIso ? FLAGS[normalizedIso] : undefined;
  const label = title ?? (normalizedIso ? `Bandera de ${normalizedIso.toUpperCase()}` : "Bandera");

  if (FlagComponent) {
    return (
      <FlagComponent
        width={size}
        height={(size * 2) / 3}
        className={className}
        aria-label={label}
        title={label}
        role="img"
      />
    );
  }

  return (
    <div
      aria-label={label}
      title={label}
      role="img"
      className={`flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-base ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      <span aria-hidden="true">🌍</span>
    </div>
  );
}
