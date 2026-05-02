export function Logo({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <circle cx="100" cy="100" r="97" stroke="#003087" strokeWidth="6" fill="white" />
      {/* Inner ring */}
      <circle cx="100" cy="100" r="83" stroke="#C8102E" strokeWidth="2" fill="none" />

      {/* Dog silhouette (simplified) with butcher cuts */}
      <g transform="translate(52, 55)" fill="#003087" opacity="0.85">
        {/* Body */}
        <ellipse cx="50" cy="48" rx="38" ry="24" />
        {/* Head */}
        <circle cx="82" cy="32" r="16" />
        {/* Snout */}
        <ellipse cx="94" cy="36" rx="8" ry="6" />
        {/* Ear */}
        <ellipse cx="80" cy="18" rx="7" ry="11" transform="rotate(-15 80 18)" />
        {/* Tail */}
        <path d="M12 40 Q0 20 8 10" stroke="#003087" strokeWidth="6" fill="none" strokeLinecap="round" />
        {/* Legs */}
        <rect x="20" y="65" width="9" height="20" rx="2" fill="#003087" />
        <rect x="35" y="65" width="9" height="20" rx="2" fill="#003087" />
        <rect x="55" y="65" width="9" height="20" rx="2" fill="#003087" />
        <rect x="70" y="65" width="9" height="20" rx="2" fill="#003087" />
      </g>

      {/* Butcher cut lines */}
      <line x1="80" y1="72" x2="80" y2="110" stroke="white" strokeWidth="1.5" strokeDasharray="3,2" />
      <line x1="100" y1="68" x2="100" y2="112" stroke="white" strokeWidth="1.5" strokeDasharray="3,2" />
      <line x1="120" y1="72" x2="120" y2="110" stroke="white" strokeWidth="1.5" strokeDasharray="3,2" />
      <line x1="68" y1="85" x2="138" y2="85" stroke="white" strokeWidth="1.5" strokeDasharray="3,2" />

      {/* Top arc text: FERME GAGNON */}
      <path id="topArc" d="M 20,100 A 80,80 0 0,1 180,100" fill="none" />
      <text fontSize="15" fontWeight="700" fill="#003087" fontFamily="'Oswald', sans-serif" letterSpacing="3">
        <textPath href="#topArc" startOffset="8%">FERME GAGNON</textPath>
      </text>

      {/* Middle text */}
      <text
        x="100"
        y="150"
        textAnchor="middle"
        fontSize="11"
        fontWeight="600"
        fill="#C8102E"
        fontFamily="'Oswald', sans-serif"
        letterSpacing="2"
      >
        VIANDE DE CHIEN BIO
      </text>

      {/* Bottom arc text: DEPUIS 1987 */}
      <path id="bottomArc" d="M 28,100 A 72,72 0 0,0 172,100" fill="none" />
      <text fontSize="11" fontWeight="500" fill="#003087" fontFamily="'Oswald', sans-serif" letterSpacing="2">
        <textPath href="#bottomArc" startOffset="20%">DEPUIS 1987</textPath>
      </text>

      {/* Quebec flag fleur-de-lys dots */}
      <circle cx="35" cy="100" r="3" fill="#003087" />
      <circle cx="165" cy="100" r="3" fill="#003087" />
    </svg>
  );
}
