/* Het Rosí-beeldmerk. Het roosje is als vector nagetekend (header,
   favicon); het medaillon toont het originele logobestand in een
   donkergroene ring met draaiende tekst. */
import logoRosi from "@/assets/logo-rosi.jpg";

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
      {/* Donkere ring als lijst, met het originele logo in het midden */}
      <circle cx="80" cy="80" r="79" fill="var(--olive-deep)" />
      <defs>
        <clipPath id="rosi-logo-clip">
          <circle cx="80" cy="80" r="61" />
        </clipPath>
      </defs>
      <image
        href={logoRosi}
        x="19"
        y="19"
        width="122"
        height="122"
        clipPath="url(#rosi-logo-clip)"
        preserveAspectRatio="xMidYMid slice"
      />
      <circle cx="80" cy="80" r="61" fill="none" stroke="var(--cream)" strokeOpacity="0.35" />

      {/* Draaiende tekstring; staat stil bij prefers-reduced-motion */}
      <g className="medaillon-draai">
        <defs>
          <path id="rosi-ring" d="M80 10.5a69.5 69.5 0 1 1 -.01 0" fill="none" />
        </defs>
        <text
          fill="var(--cream)"
          fillOpacity="0.9"
          fontSize="9.5"
          letterSpacing="3"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <textPath href="#rosi-ring">
            COFFEE&nbsp;&middot;&nbsp;BITES&nbsp;&middot;&nbsp;WINE&nbsp;NIGHTS&nbsp;&middot;&nbsp;MONSTER&nbsp;&middot;&nbsp;
          </textPath>
        </text>
      </g>
    </svg>
  );
}
