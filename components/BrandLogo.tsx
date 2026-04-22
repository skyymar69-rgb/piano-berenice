import { school } from "@/lib/school";

type Props = {
  size?: number;
  className?: string;
  priority?: boolean;
};

/**
 * Logo officiel de l'Académie de piano Bérénice :
 * piano à queue, clé de sol et portée musicale, ton bleu nuit / doré.
 */
export function BrandLogo({
  size = 40,
  className = "",
  priority = false,
}: Props) {
  return (
    <img
      src="/logo.webp"
      alt={`Logo ${school.brand.name} — piano et clé de sol`}
      title={school.brand.name}
      width={size}
      height={size}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      className={`shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
