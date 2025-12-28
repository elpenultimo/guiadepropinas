const ISO_MAP: Record<string, string> = {
  "Estados Unidos": "US",
  Canadá: "CA",
  México: "MX",
  Brasil: "BR",
  Argentina: "AR",
  Chile: "CL",
  Colombia: "CO",
  Perú: "PE",
  España: "ES",
  Francia: "FR",
  Italia: "IT",
  Alemania: "DE",
  "Reino Unido": "GB",
  Irlanda: "IE",
  Portugal: "PT",
  Japón: "JP",
  China: "CN",
  "Corea del Sur": "KR",
  Singapur: "SG",
  Tailandia: "TH",
  Australia: "AU",
  "Nueva Zelanda": "NZ",
  Marruecos: "MA",
  Turquía: "TR",
  "Emiratos Árabes Unidos": "AE",
  Sudáfrica: "ZA",
};

type CountryFlagProps = {
  countryName: string;
  size?: number;
  className?: string;
};

const toFlagEmoji = (code: string) =>
  code
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    .join("");

export function CountryFlag({ countryName, size = 24, className }: CountryFlagProps) {
  const iso2 = ISO_MAP[countryName];
  const display = iso2 ? toFlagEmoji(iso2) : countryName.slice(0, 2).toUpperCase();

  return (
    <span
      aria-label={`Bandera de ${countryName}`}
      className={`inline-flex items-center justify-center rounded-sm border border-white/10 bg-white/5 px-1 text-base shadow-sm ${
        className ?? ""
      }`}
      style={{ minWidth: size, minHeight: size, fontSize: size * 0.75 }}
    >
      {display}
    </span>
  );
}
