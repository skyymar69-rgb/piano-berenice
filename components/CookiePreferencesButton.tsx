"use client";

export function CookiePreferencesButton() {
  const reset = () => {
    try {
      localStorage.removeItem("apb-cookie-consent-v2");
      localStorage.removeItem("apb-cookie-consent-v2:decision");
    } catch {
      /* ignore */
    }
    location.reload();
  };

  return (
    <button
      type="button"
      onClick={reset}
      className="mt-4 inline-flex rounded-full bg-[var(--primary)] px-6 py-2.5 text-sm font-medium text-[var(--primary-contrast)] transition hover:bg-[var(--primary-hover)]"
    >
      Modifier mes préférences cookies
    </button>
  );
}
