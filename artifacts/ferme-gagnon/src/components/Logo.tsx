export function Logo({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ferme Gagnon"
    >
      <defs>
        <path id="fg-top-arc" d="M 24,100 A 76,76 0 0,1 176,100" fill="none" />
        <path id="fg-bot-arc" d="M 30,100 A 70,70 0 0,0 170,100" fill="none" />
      </defs>

      {/* Outer disc */}
      <circle cx="100" cy="100" r="98" fill="#003087" />
      {/* Inner cream face */}
      <circle cx="100" cy="100" r="90" fill="#f5efe3" />
      {/* Hairline rings */}
      <circle cx="100" cy="100" r="86" fill="none" stroke="#003087" strokeWidth="1.2" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="#C8102E" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />

      {/* Top arc text — FERME GAGNON */}
      <text
        fontFamily="'Oswald', 'Arial Narrow', sans-serif"
        fontSize="17"
        fontWeight="700"
        fill="#003087"
        letterSpacing="3.2"
      >
        <textPath href="#fg-top-arc" startOffset="50%" textAnchor="middle">
          FERME GAGNON
        </textPath>
      </text>

      {/* Bottom arc text — DEPUIS 1987 */}
      <text
        fontFamily="'Oswald', 'Arial Narrow', sans-serif"
        fontSize="11"
        fontWeight="600"
        fill="#003087"
        letterSpacing="4"
      >
        <textPath href="#fg-bot-arc" startOffset="50%" textAnchor="middle">
          DEPUIS · 1987
        </textPath>
      </text>

      {/* Decorative side stars */}
      <g fill="#C8102E">
        <polygon points="0,-3.2 0.94,-0.97 3.2,-0.97 1.36,0.37 2.06,2.59 0,1.28 -2.06,2.59 -1.36,0.37 -3.2,-0.97 -0.94,-0.97" transform="translate(22,100)" />
        <polygon points="0,-3.2 0.94,-0.97 3.2,-0.97 1.36,0.37 2.06,2.59 0,1.28 -2.06,2.59 -1.36,0.37 -3.2,-0.97 -0.94,-0.97" transform="translate(178,100)" />
      </g>

      {/* Central medallion */}
      <circle cx="100" cy="100" r="48" fill="#C8102E" />
      <circle cx="100" cy="100" r="48" fill="none" stroke="#f5efe3" strokeWidth="2" />
      <circle cx="100" cy="100" r="44" fill="none" stroke="#003087" strokeWidth="1" opacity="0.4" />

      {/* Dog silhouette — clean side profile, sitting */}
      <g fill="#f5efe3" transform="translate(100 104)">
        {/* Body / haunch */}
        <path d="M -22,8
                 C -22,-4 -14,-12 -4,-12
                 L 14,-12
                 C 22,-12 26,-6 26,2
                 L 26,14
                 C 26,18 24,20 20,20
                 L -18,20
                 C -22,20 -24,18 -24,14 Z" />
        {/* Front leg */}
        <rect x="-2" y="14" width="6" height="14" rx="1.5" />
        {/* Back leg / paw */}
        <path d="M -22,18 L -22,26 C -22,28 -20,28 -18,28 L -8,28 C -6,28 -6,26 -7,25 L -16,18 Z" />
        {/* Tail */}
        <path d="M 24,4 C 32,0 34,-6 30,-10" stroke="#f5efe3" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Neck */}
        <path d="M 14,-12 L 18,-22 L 26,-22 L 24,-10 Z" />
        {/* Head */}
        <ellipse cx="26" cy="-24" rx="11" ry="9" />
        {/* Snout */}
        <path d="M 32,-22 L 40,-22 L 40,-17 L 32,-17 Z" />
        <circle cx="39" cy="-22" r="1.2" fill="#003087" />
        {/* Floppy ear */}
        <path d="M 18,-30 Q 16,-22 22,-20 Q 26,-22 24,-30 Z" fill="#003087" opacity="0.85" />
        {/* Eye */}
        <circle cx="28" cy="-25" r="1.2" fill="#003087" />
        {/* Collar */}
        <rect x="20" y="-19" width="7" height="2" fill="#003087" />
      </g>

      {/* Banner across medallion bottom */}
      <path d="M 60,128 L 140,128 L 134,140 L 66,140 Z" fill="#003087" />
      <path d="M 60,128 L 54,134 L 60,134 Z" fill="#001a4a" />
      <path d="M 140,128 L 146,134 L 140,134 Z" fill="#001a4a" />
      <text
        x="100"
        y="137"
        textAnchor="middle"
        fontFamily="'Oswald', 'Arial Narrow', sans-serif"
        fontSize="8.5"
        fontWeight="700"
        fill="#f5efe3"
        letterSpacing="2.5"
      >
        VIANDE BIO DU QUÉBEC
      </text>
    </svg>
  );
}
