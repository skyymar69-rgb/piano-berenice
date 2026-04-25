/**
 * Loader artistique : portée musicale qui se trace ligne par ligne,
 * puis trois notes apparaissent. Plus élégant qu'une simple icône.
 */
export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center"
    >
      <svg
        width="220"
        height="80"
        viewBox="0 0 220 80"
        className="text-[var(--primary)]"
        aria-hidden
      >
        <defs>
          <linearGradient id="line-grad" x1="0" x2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0" />
            <stop offset="0.5" stopColor="currentColor" stopOpacity="0.7" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* 5 lignes de portée qui se tracent en cascade */}
        {[15, 25, 35, 45, 55].map((y, i) => (
          <line
            key={y}
            x1="10"
            y1={y}
            x2="210"
            y2={y}
            stroke="currentColor"
            strokeOpacity="0.2"
            strokeWidth="1"
            strokeDasharray="200"
            strokeDashoffset="200"
            style={{
              animation: `loader-line 1.2s ease-out ${i * 0.12}s forwards`,
            }}
          />
        ))}
        {/* Clé de sol stylisée */}
        <text
          x="20"
          y="48"
          fontSize="38"
          fontFamily="serif"
          fill="var(--accent)"
          opacity="0"
          style={{ animation: "loader-fade-in 0.4s ease-out 0.6s forwards" }}
        >
          𝄞
        </text>
        {/* 3 notes qui apparaissent */}
        {[
          { x: 80, y: 35, delay: 1.0 },
          { x: 120, y: 30, delay: 1.25 },
          { x: 165, y: 40, delay: 1.5 },
        ].map((n, i) => (
          <g key={i}>
            <ellipse
              cx={n.x}
              cy={n.y}
              rx="6"
              ry="4.5"
              fill="var(--accent)"
              opacity="0"
              style={{ animation: `loader-fade-in 0.3s ease-out ${n.delay}s forwards` }}
            />
            <line
              x1={n.x + 6}
              y1={n.y}
              x2={n.x + 6}
              y2={n.y - 25}
              stroke="var(--accent)"
              strokeWidth="1.4"
              opacity="0"
              style={{ animation: `loader-fade-in 0.3s ease-out ${n.delay + 0.05}s forwards` }}
            />
          </g>
        ))}
      </svg>
      <p className="font-serif text-sm italic text-[var(--muted)]">
        Préparation de la partition…
      </p>
      <span className="sr-only">Chargement en cours</span>
      <style>{`
        @keyframes loader-line {
          to { stroke-dashoffset: 0; }
        }
        @keyframes loader-fade-in {
          to { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          line[stroke-dasharray] { stroke-dashoffset: 0 !important; animation: none !important; }
          ellipse, text, line[stroke-width="1.4"] { opacity: 1 !important; animation: none !important; }
        }
      `}</style>
    </div>
  );
}
