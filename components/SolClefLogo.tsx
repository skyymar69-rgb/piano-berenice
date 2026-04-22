type Props = {
  className?: string;
  title?: string;
  size?: number;
};

export function SolClefLogo({
  className,
  title = "Clé de sol",
  size = 28,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 72"
      width={size}
      height={size * (72 / 48)}
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      <defs>
        <linearGradient id="solclef-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--primary, #1a2540)" />
          <stop offset="1" stopColor="var(--accent, #b8894a)" />
        </linearGradient>
      </defs>
      <path
        fill="url(#solclef-grad)"
        d="M25.9 2.3c-2 2.2-3.1 5.2-3.1 8.6 0 3.3.9 6.5 2.5 10.1-5.9 4.2-10.1 9.1-10.1 15.7 0 5.9 4.1 10.8 9.5 12.4l.8 4.9c.2 1.3-.1 2.5-.9 3.5-.9 1-2.2 1.6-3.7 1.6-2.2 0-4-1.4-4.6-3.3 2.1-.4 3.6-2.2 3.6-4.4 0-2.5-2-4.5-4.5-4.5s-4.6 2-4.6 4.6c0 5 4.3 9 9.6 9 2.9 0 5.4-1.1 7.1-3.1 1.5-1.8 2.2-4.1 1.9-6.5l-.8-4.7c.4 0 .8.1 1.2.1 5.8 0 10.5-4.7 10.5-10.5 0-4.8-3.2-8.9-7.7-10.2l-1.1-6.5c3.1-2.5 5-6.2 5-10.1 0-3.2-1.1-6-3.1-8.3-.2-.3-.7-.3-1-.1-2 1.7-3.4 4.6-3.4 7.8 0 3.5 1.5 6.7 3.9 8.9l1 6.2c-.7-.1-1.4-.2-2.1-.2-5.5 0-10 4.5-10 10 0 3.8 2.1 7.1 5.2 8.8l-.7-4.1c-1.2-1-1.9-2.5-1.9-4.2 0-3 2.4-5.4 5.4-5.4s5.4 2.4 5.4 5.4c0 2.5-1.7 4.6-4 5.2l-1-5.7c-.3-1.9-.8-3.7-1.5-5.4-1.6-3.8-2.6-7.2-2.6-10.4 0-2.7.7-5.1 2.1-7 .3-.2.3-.6 0-.8-.3-.3-.7-.3-1 0z"
      />
    </svg>
  );
}
