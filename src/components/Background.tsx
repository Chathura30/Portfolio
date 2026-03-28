export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid" />

      {/* Top-left orb */}
      <div className="orb orb-1" />
      {/* Bottom-right orb */}
      <div className="orb orb-2" />
      {/* Center orb */}
      <div className="orb orb-3" />

      {/* Corner geometric accents */}
      <svg className="absolute top-0 left-0 w-72 h-72 opacity-[0.04]" viewBox="0 0 288 288" fill="none">
        <rect x="1" y="1" width="140" height="140" stroke="#a855f7" strokeWidth="1" />
        <rect x="24" y="24" width="96" height="96" stroke="#a855f7" strokeWidth="0.5" />
        <line x1="0" y1="72" x2="72" y2="0" stroke="#a855f7" strokeWidth="0.5" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-72 h-72 opacity-[0.04]" viewBox="0 0 288 288" fill="none">
        <rect x="147" y="147" width="140" height="140" stroke="#a855f7" strokeWidth="1" />
        <rect x="168" y="168" width="96" height="96" stroke="#a855f7" strokeWidth="0.5" />
        <line x1="288" y1="216" x2="216" y2="288" stroke="#a855f7" strokeWidth="0.5" />
      </svg>

      {/* Horizontal scan line */}
      <div className="scan-line" />
    </div>
  )
}
