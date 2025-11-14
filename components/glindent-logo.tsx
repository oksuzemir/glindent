export function GlindentLogo({
  className = "",
  variant = "white",
}: { className?: string; variant?: "white" | "green" }) {
  const textColor = variant === "white" ? "var(--foreground)" : "var(--primary-start)"
  const taglineColor = variant === "white" ? "rgba(255,255,255,0.7)" : "var(--primary-end)"

  return (
    <svg
      width="180"
      height="36"
      viewBox="0 0 180 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x="0"
        y="24"
        fill={textColor}
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="28"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        glindent
      </text>
      <text
        x="0"
        y="34"
        fill={taglineColor}
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="8"
        fontWeight="400"
        letterSpacing="0.15em"
      >
        WAY TO DENTISTRY
      </text>
    </svg>
  )
}
