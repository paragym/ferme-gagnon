export function Logo({ size = 120 }: { size?: number }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo.png`}
      alt="Ferme Gagnon — Viande Bio du Québec"
      width={size}
      height={size}
      style={{ width: size, height: size, display: "block" }}
      loading="eager"
      decoding="async"
    />
  );
}
