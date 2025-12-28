/* eslint-disable @next/next/no-img-element */
import countries from "i18n-iso-countries";
import esLocale from "i18n-iso-countries/langs/es.json";

countries.registerLocale(esLocale);

const FALLBACKS: Record<string, string> = {
  "Estados Unidos": "US",
  "Reino Unido": "GB",
  Rusia: "RU",
  "Corea del Sur": "KR",
  "Corea del Norte": "KP",
  "Emiratos Árabes Unidos": "AE",
  "República Checa": "CZ",
  Vietnam: "VN",
  "Taiwán": "TW",
};

type CountryFlagProps = {
  countryName: string;
  size?: number;
  className?: string;
};

export function CountryFlag({ countryName, size = 24, className }: CountryFlagProps) {
  const iso2 =
    countries.getAlpha2Code(countryName, "es") ?? FALLBACKS[countryName] ?? null;

  if (!iso2) return null;

  const iso2Lower = iso2.toLowerCase();
  const width = size;
  const height = size;
  const resolution = size > 28 ? "w80" : "w40";

  return (
    <img
      src={`https://flagcdn.com/${resolution}/${iso2Lower}.png`}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={`Bandera de ${countryName}`}
      className={`rounded-sm border border-white/10 shadow-sm ${className ?? ""}`}
    />
  );
}
