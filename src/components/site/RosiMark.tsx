/* Het Rosí-logo, als vector nagetekend van het origineel: een gevulde
   oranje roos in een crème capsule-kader, met ROSÍ eronder, op
   saliegroen. Vector, zodat het op elk formaat scherp blijft. */

export function RosiRoos({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 64" className={className} aria-hidden="true">
      <RoosTekening />
    </svg>
  );
}

function RoosTekening() {
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      {/* steel en bladeren */}
      <path d="M20 26c0 10 0 22 0 32" fill="none" stroke="#5c6b47" strokeWidth="2.4" />
      <path d="M20 41c-6.2-.9-9.6-4.2-10.4-9.8 5.8.5 9.4 3.9 10.4 9.8Z" fill="#5c6b47" />
      <path d="M20 50c6.2-.9 9.6-4.2 10.4-9.8-5.8.5-9.4 3.9-10.4 9.8Z" fill="#5c6b47" />
      {/* bloem: gevuld, met donkere bladnerven zoals in het logo */}
      <path
        d="M20 27.5c-6.8 0-11.4-4.6-11.4-11.2C8.6 9.4 13.4 4.6 20 4.6s11.4 4.8 11.4 11.7c0 6.6-4.6 11.2-11.4 11.2Z"
        fill="#c96d3a"
      />
      <g fill="none" stroke="#8f4520" strokeWidth="1.7">
        <path d="M20.5 8.2c-4.4.4-6.7 3.5-5.9 7 .7 3 3.4 4.7 6.4 4 2.5-.6 3.9-2.9 3.2-5.1-.6-1.9-2.8-2.8-4.5-1.8-1.4.8-1.7 2.6-.6 3.6" />
        <path d="M11.5 20.5c1.7 3.2 4.6 5.1 8.5 5.3" />
        <path d="M28.5 20.5c-1.7 3.2-4.6 5.1-8.5 5.3" />
        <path d="M12.2 11.5c-1 1.6-1.4 3.4-1.2 5.4" />
        <path d="M27.8 11.5c1 1.6 1.4 3.4 1.2 5.4" />
      </g>
    </g>
  );
}

export function RosiMedaillon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden="true">
      <circle cx="80" cy="80" r="78" fill="var(--olive)" />

      {/* Draaiende tekstring; staat stil bij prefers-reduced-motion */}
      <g className="medaillon-draai">
        <defs>
          <path id="rosi-ring" d="M80 12.5a67.5 67.5 0 1 1 -.01 0" fill="none" />
        </defs>
        <text
          fill="var(--cream)"
          fillOpacity="0.85"
          fontSize="9.5"
          letterSpacing="3"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <textPath href="#rosi-ring">
            COFFEE&nbsp;&middot;&nbsp;BITES&nbsp;&middot;&nbsp;WINE&nbsp;NIGHTS&nbsp;&middot;&nbsp;MONSTER&nbsp;&middot;&nbsp;
          </textPath>
        </text>
      </g>

      {/* Capsule-kader met de roos, zoals in het logo */}
      <rect
        x="58"
        y="26"
        width="44"
        height="80"
        rx="22"
        fill="none"
        stroke="#e6cfa4"
        strokeWidth="1.8"
      />
      <g transform="translate(61.5 33.5) scale(0.93)">
        <RoosTekening />
      </g>

      <text
        x="80"
        y="130"
        textAnchor="middle"
        fill="#e6cfa4"
        fontSize="14.5"
        letterSpacing="4.5"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        ROSÍ
      </text>
    </svg>
  );
}
