type CountryFlagProps = {
  iso2: string;
  label?: string;
  className?: string;
};

export function CountryFlag({ iso2, label, className }: CountryFlagProps) {
  if (!iso2) return null;

  const src = `https://flagcdn.com/w40/${iso2.toLowerCase()}.png`;

  return (
    <img
      src={src}
      alt={label ? `Bandera de ${label}` : `Bandera ${iso2}`}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}
