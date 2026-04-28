export function StatusBar() {
  const now = new Date();
  const time = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

  return (
    <div
      style={{
        height: 50,
        background: 'transparent',
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: 6,
        paddingLeft: 20,
        paddingRight: 20,
        position: 'relative',
        zIndex: 50,
        flexShrink: 0,
      }}
    >
      {/* Heure — gauche */}
      <span style={{ fontSize: 15, fontWeight: 700, color: '#111', minWidth: 48, letterSpacing: '-0.3px', fontFamily: "'Nunito', system-ui, sans-serif" }}>
        {time}
      </span>

      {/* Centre — espace Dynamic Island */}
      <div style={{ flex: 1 }} />

      {/* Icônes — droite */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {/* Signal */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <rect x="0" y="7" width="3" height="5" rx="0.8" fill="#111" />
          <rect x="4.5" y="4.5" width="3" height="7.5" rx="0.8" fill="#111" />
          <rect x="9" y="2" width="3" height="10" rx="0.8" fill="#111" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.8" fill="#111" opacity="0.3" />
        </svg>

        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 9.5C8.83 9.5 9.5 10.17 9.5 11C9.5 11.83 8.83 12.5 8 12.5C7.17 12.5 6.5 11.83 6.5 11C6.5 10.17 7.17 9.5 8 9.5Z" fill="#111"/>
          <path d="M4.17 7.17C4.94 6.41 6.03 5.9 7.27 5.76C7.51 5.73 7.75 5.72 8 5.72C8.25 5.72 8.49 5.73 8.73 5.76C9.97 5.9 11.06 6.41 11.83 7.17L13 6C11.9 4.9 10.35 4.2 8.63 4.04C8.43 4.02 8.22 4 8 4C7.78 4 7.57 4.02 7.37 4.04C5.65 4.2 4.1 4.9 3 6L4.17 7.17Z" fill="#111"/>
          <path d="M1 4C2.45 2.55 4.37 1.58 6.5 1.22C6.99 1.14 7.49 1.09 8 1.09C8.51 1.09 9.01 1.14 9.5 1.22C11.63 1.58 13.55 2.55 15 4L13.85 5.14C12.68 3.98 11.1 3.2 9.32 3.02C8.89 2.97 8.45 2.95 8 2.95C7.55 2.95 7.11 2.97 6.68 3.02C4.9 3.2 3.32 3.98 2.15 5.14L1 4Z" fill="#111"/>
        </svg>

        {/* Batterie */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#111', fontFamily: "'Nunito', system-ui, sans-serif" }}>87%</span>
          <svg width="25" height="13" viewBox="0 0 25 13" fill="none">
            <rect x="0.5" y="0.5" width="21" height="12" rx="3.5" stroke="#111" strokeOpacity="0.35"/>
            <rect x="1.5" y="1.5" width="18" height="10" rx="2.5" fill="#111"/>
            <path d="M23 4.5V8.5C23.83 8.16 24.5 7.38 24.5 6.5C24.5 5.62 23.83 4.84 23 4.5Z" fill="#111" opacity="0.4"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
