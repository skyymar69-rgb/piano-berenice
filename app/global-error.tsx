"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          background: "#fbf7ef",
          color: "#1a1d29",
          padding: "4rem 1.5rem",
          textAlign: "center",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ fontSize: "2rem", margin: "0 0 1rem" }}>
          Erreur critique
        </h1>
        <p>Le site rencontre un problème majeur. Rechargez la page.</p>
        {error.digest && (
          <p style={{ fontSize: "0.8rem", opacity: 0.7 }}>
            Réf : {error.digest}
          </p>
        )}
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: "2rem",
            padding: "0.75rem 1.5rem",
            background: "#1a2540",
            color: "#fff",
            border: "0",
            borderRadius: "9999px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Réessayer
        </button>
      </body>
    </html>
  );
}
