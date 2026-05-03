export function Logo({ size = 120, className }: { size?: number; className?: string }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo.png`}
      alt="Ferme Gagnon — Viande Bio du Québec"
      width={size}
      height={size}
      style={{ width: size, height: size, display: "block" }}
      loading="eager"
      decoding="async"
      className={className}
    />
  );
}
