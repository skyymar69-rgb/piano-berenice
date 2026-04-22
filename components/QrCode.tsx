import QRCode from "qrcode";

type Props = {
  value: string;
  label: string;
  caption?: string;
  size?: number;
};

export async function QrCode({ value, label, caption, size = 180 }: Props) {
  const dataUrl = await QRCode.toDataURL(value, {
    width: size * 2,
    margin: 2,
    color: { dark: "#1a2540", light: "#fbf7ef" },
    errorCorrectionLevel: "M",
  });

  return (
    <figure className="flex flex-col items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-5 text-center">
      <img
        src={dataUrl}
        alt={`QR code — ${label}`}
        width={size}
        height={size}
        className="rounded-lg"
      />
      <figcaption>
        <p className="font-serif text-base text-[var(--primary)]">{label}</p>
        {caption && (
          <p className="mt-1 text-xs text-[var(--muted)]">{caption}</p>
        )}
      </figcaption>
    </figure>
  );
}
