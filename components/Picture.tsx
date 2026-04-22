import { imageSrcSet, imageSrc, images, type StaticImage } from "@/lib/images";

type Props = {
  image: StaticImage | keyof typeof images;
  sizes?: string;
  className?: string;
  priority?: boolean;
  fetchpriority?: "high" | "low" | "auto";
  rounded?: boolean;
};

/**
 * Picture responsive avec srcset WebP + fallback AVIF.
 * Utilise <img> natif pour profiter de lazy loading + srcset sans pénalité runtime.
 */
export function Picture({
  image,
  sizes = "(min-width: 1024px) 800px, 100vw",
  className = "",
  priority = false,
  rounded = true,
}: Props) {
  const img: StaticImage =
    typeof image === "string" ? images[image] : image;
  const slug = img.slug;

  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`/images/${slug}-lg.avif 1600w`}
        sizes={sizes}
      />
      <source
        type="image/webp"
        srcSet={imageSrcSet(slug)}
        sizes={sizes}
      />
      <img
        src={imageSrc(slug, "md")}
        alt={img.alt}
        title={img.title}
        width={img.width}
        height={img.height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={`${rounded ? "rounded-2xl" : ""} h-full w-full object-cover ${className}`}
      />
    </picture>
  );
}
