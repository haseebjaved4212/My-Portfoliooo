export default function Loading() {
  return (
    <div
      className="loading-screen"
      role="status"
      aria-label="Loading Haseeb Javed's portfolio"
    >
      <div className="loading-glow" aria-hidden="true" />

      <div className="loading-content">
        <div className="loading-mark" aria-hidden="true">
          <span className="loading-orbit loading-orbit-one" />
          <span className="loading-orbit loading-orbit-two" />
          <span className="loading-monogram">H</span>
          <span className="loading-orbit-dot" />
        </div>

        <p className="loading-eyebrow">PORTFOLIO / 2026</p>
        <h1 className="loading-title">Haseeb Javed</h1>
        <p className="loading-caption">Building something thoughtful...</p>

        <div className="loading-progress" aria-hidden="true">
          <span />
        </div>
        <span className="sr-only">Loading portfolio</span>
      </div>

      <p className="loading-footer" aria-hidden="true">
        AI  ENGINEER <span>·</span> FULL-STACK DEVELOPER
      </p>
    </div>
  );
}
