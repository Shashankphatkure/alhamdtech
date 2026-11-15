// A horizontal row that slides sideways as the page scrolls past it (CSS scroll-driven animation).
// Browsers without support, or with reduced motion, get an ordinary swipeable row instead.
export default function ScrollRow({ children, reverse = false, className = '' }) {
  return (
    <div className={`scroll-row ${className}`}>
      <div className={`scroll-track ${reverse ? 'scroll-track-reverse' : ''}`}>{children}</div>
    </div>
  );
}
