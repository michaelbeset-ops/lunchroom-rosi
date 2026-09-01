/* Het Rosí-beeldmerk, nagetekend van het logo: een handgetekende roos.
   Los te gebruiken (header, footer) of als medaillon met draaiende
   tekstring (hero). */

export function RosiRoos({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 62"
      className={className}
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g stroke="currentColor" strokeWidth="2.2">
        <path d="M20 34v24" />
        <path d="M20 44c-6.5-1.2-10-4.6-10.6-10" />
        <path d="M20 51c6.5-1.2 10-4.6 10.6-10" />
      </g>
      <g stroke="var(--roos-bloem, currentColor)" strokeWidth="2.2">
        <path d="M9.5 19.5C9 9.5 14 4 20 4s11 5.5 10.5 15.5C30 27 26 31.5 20 31.5S10 27 9.5 19.5Z" />
        <path d="M13.5 13.5c2.5-3.5 7-4.5 10.5-2" />
        <path d="M14 21.5c3.5 2.8 8.5 2 11-1.5" />
      </g>
    </svg>
  );
}

export function RosiMedaillon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden="true">
      <circle cx="80" cy="80" r="78" fill="var(--olive)" />
      <circle cx="80" cy="80" r="55" fill="none" stroke="var(--cream)" strokeOpacity="0.45" />

      {/* Draaiende tekstring; staat stil bij prefers-reduced-motion */}
      <g className="medaillon-draai">
        <defs>
          <path id="rosi-ring" d="M80 13a67 67 0 1 1 -.01 0" fill="none" />
        </defs>
        <text
          fill="var(--cream)"
          fillOpacity="0.9"
          fontSize="10"
          letterSpacing="3.2"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <textPath href="#rosi-ring">
            COFFEE&nbsp;&middot;&nbsp;BITES&nbsp;&middot;&nbsp;WINE&nbsp;NIGHTS&nbsp;&middot;&nbsp;MONSTER&nbsp;&middot;&nbsp;
          </textPath>
        </text>
      </g>

      <g transform="translate(60 40) scale(1)">
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <g stroke="var(--cream)" strokeWidth="2">
            <path d="M20 30v18" />
            <path d="M20 38c-5.5-1-8.5-3.9-9-8.4" />
            <path d="M20 44c5.5-1 8.5-3.9 9-8.4" />
          </g>
          <g stroke="#ecc3a6" strokeWidth="2">
            <path d="M11 17C10.6 8.5 14.9 4 20 4s9.4 4.5 9 13c-.4 6.3-3.8 10.2-9 10.2S11.4 23.3 11 17Z" />
            <path d="M14.4 12c2.1-3 6-3.8 9-1.7" />
            <path d="M14.8 19c3 2.4 7.3 1.7 9.4-1.3" />
          </g>
        </g>
      </g>

      <text
        x="80"
        y="126"
        textAnchor="middle"
        fill="var(--cream)"
        fontSize="14"
        letterSpacing="4.5"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        ROSÍ
      </text>
    </svg>
  );
}
