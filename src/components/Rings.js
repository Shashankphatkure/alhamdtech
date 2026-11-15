// Concentric "turned part" motif from the company brochure: solid bands, dotted rings and a crosshair.
export default function Rings({ className = '', tone = 'dark', spin = true }) {
  const band = tone === 'dark' ? 'rgb(255 255 255 / 0.07)' : 'rgb(15 27 45 / 0.06)';
  const line = tone === 'dark' ? 'rgb(255 255 255 / 0.28)' : 'rgb(15 27 45 / 0.22)';
  return (
    <svg viewBox="0 0 600 600" fill="none" aria-hidden="true" className={`pointer-events-none ${className}`}>
      <circle cx="300" cy="300" r="255" stroke={band} strokeWidth="62" />
      <circle cx="300" cy="300" r="150" stroke={band} strokeWidth="56" />
      <g className={spin ? 'spin-slow' : ''} style={{ transformOrigin: '300px 300px' }}>
        <circle cx="300" cy="300" r="287" stroke="#ee6510" strokeOpacity="0.75" strokeWidth="1.5" strokeDasharray="2 7" />
        <circle cx="300" cy="300" r="223" stroke="#ee6510" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="2 7" />
      </g>
      <g className={spin ? 'spin-slow-reverse' : ''} style={{ transformOrigin: '300px 300px' }}>
        <circle cx="300" cy="300" r="179" stroke="#ee6510" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="2 7" />
        <circle cx="300" cy="300" r="121" stroke="#ee6510" strokeOpacity="0.75" strokeWidth="1.5" strokeDasharray="2 7" />
      </g>
      <path d="M300 0v600M0 300h600" stroke={line} strokeWidth="1" strokeDasharray="3 6" />
      <circle cx="300" cy="300" r="15" fill="#ee6510" />
      <circle cx="300" cy="300" r="5" fill={tone === 'dark' ? '#fff' : '#f4f6f9'} fillOpacity="0.85" />
    </svg>
  );
}
