import React from "react";
import type { ComponentType, SVGProps } from "react";

// Importa SOLO algunos países para partir (puedes ampliar después)
import { CL, AR, US, MX, PE, CA } from "country-flag-icons/react/3x2";

const FLAGS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  cl: CL,
  ar: AR,
  us: US,
  mx: MX,
  pe: PE,
  ca: CA,
};

type Props = {
  iso2?: string;
  size?: number;
  className?: string;
  label?: string;
};

export function CountryFlag({
  iso2,
  size = 22,
  className,
  label,
}: Props) {
  const key = (iso2 || "").toLowerCase();
  const Flag = FLAGS[key];

  const a11yLabel = label || (iso2 ? `Bandera ${iso2.toUpperCase()}` : "Bandera");

  if (!Flag) {
    return (
      <span
        role="img"
        aria-label={a11yLabel}
        className={className}
        style={{
          width: size,
          height: size,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 9999,
          background: "rgba(255,255,255,0.12)",
          fontSize: Math.max(12, Math.round(size * 0.65)),
          lineHeight: 1,
        }}
      >
        🌍
      </span>
    );
  }

  return (
    <Flag
      width={Math.round(size * 1.35)}
      height={size}
      className={className}
      role="img"
      aria-label={a11yLabel}
      style={{ borderRadius: 6, display: "inline-block" }}
    >
      <title>{a11yLabel}</title>
    </Flag>
  );
}
