import { SolClefLogo } from "@/components/SolClefLogo";

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center"
    >
      <div className="animate-[pulse_1.6s_ease-in-out_infinite]">
        <SolClefLogo size={64} animated />
      </div>
      <p className="font-serif text-sm text-[var(--muted)]">
        Préparation de la partition…
      </p>
      <span className="sr-only">Chargement en cours</span>
    </div>
  );
}
