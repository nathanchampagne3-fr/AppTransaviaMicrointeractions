import { ReactNode } from 'react';
import { StatusBar } from './StatusBar';

export function MobileFrame({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0c29 0%, #1a1a3e 50%, #0d1b2a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      {/* Châssis téléphone */}
      <div
        style={{
          width: 390,
          height: 800,
          borderRadius: 50,
          background: '#0a0a0a',
          boxShadow:
            '0 50px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.12), inset 0 0 0 1.5px #2c2c2e',
          padding: '10px',
          position: 'relative',
          flexShrink: 0,
        }}
      >
        {/* Dynamic Island */}
        <div
          style={{
            position: 'absolute',
            top: 18,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 126,
            height: 37,
            background: '#0a0a0a',
            borderRadius: 20,
            zIndex: 200,
          }}
        />

        {/* Bouton power (droite) */}
        <div style={{ position: 'absolute', right: -2.5, top: 150, width: 3, height: 68, background: '#2c2c2e', borderRadius: '0 3px 3px 0' }} />
        {/* Bouton volume haut (gauche) */}
        <div style={{ position: 'absolute', left: -2.5, top: 128, width: 3, height: 42, background: '#2c2c2e', borderRadius: '3px 0 0 3px' }} />
        {/* Bouton volume bas (gauche) */}
        <div style={{ position: 'absolute', left: -2.5, top: 182, width: 3, height: 42, background: '#2c2c2e', borderRadius: '3px 0 0 3px' }} />
        {/* Bouton silencieux (gauche) */}
        <div style={{ position: 'absolute', left: -2.5, top: 80, width: 3, height: 28, background: '#2c2c2e', borderRadius: '3px 0 0 3px' }} />

        {/* Écran intérieur
            ⚠️  transform: translateZ(0) crée un nouveau "containing block"
                → tous les position:fixed enfants se positionnent PAR RAPPORT À CE DIV
                et non par rapport au viewport */}
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 42,
            overflow: 'hidden',
            background: '#ffffff',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: "'Nunito', system-ui, sans-serif",
            /* Magie : fixe les éléments position:fixed à l'intérieur du cadre */
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        >
          {/* Barre de statut iOS */}
          <StatusBar />

          {/* Contenu scrollable */}
          <div
            id="phone-screen"
            style={{
              flex: 1,
              overflowY: 'auto',
              overflowX: 'hidden',
              position: 'relative',
              /* Masquer la scrollbar visuellement */
              scrollbarWidth: 'none',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}