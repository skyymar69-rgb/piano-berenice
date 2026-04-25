import { school } from "@/lib/school";

export function WhatsAppFab() {
  const phone = school.contact.phone.replace(/[^0-9]/g, "");
  const msg = encodeURIComponent(
    "Bonjour, je souhaiterais des informations sur les cours de l'Académie de piano Bérénice.",
  );
  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous écrire sur WhatsApp"
      title="WhatsApp"
      data-tooltip="WhatsApp"
      className="fab-tooltip inline-flex size-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1ebe5a]"
    >
      <svg
        aria-hidden
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2a10 10 0 0 0-8.52 15.2L2 22l4.97-1.43A10 10 0 1 0 12 2zm5.63 13.67c-.24.67-1.38 1.28-1.9 1.36-.49.07-1.1.1-1.78-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.7-4.1-4.85-4.29-.15-.2-1.17-1.55-1.17-2.96 0-1.4.73-2.1.99-2.38.26-.29.56-.36.75-.36.19 0 .38.01.54.02.17 0 .4-.07.62.47.24.57.82 1.97.9 2.11.07.15.12.31.02.5-.1.2-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.12 1 2.07 1.3 2.37 1.45.3.15.48.13.66-.07.18-.2.76-.88.96-1.18.2-.3.4-.25.67-.15.27.1 1.7.8 1.99.95.3.15.49.22.56.35.07.13.07.73-.17 1.4z" />
      </svg>
    </a>
  );
}
