import svgPaths from '../../imports/ChoixDuVol/svg-wk8b3g7avm';
import { useNavigate } from 'react-router';

export function TransaviaLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`shrink-0 ${className}`} style={{ height: 28, width: 168 }}>
      <svg fill="none" viewBox="0 0 140 24" className="w-full h-full">
        <path d={svgPaths.p3f1bfb40} fill="white" />
        <path d={svgPaths.p30fff600} fill="white" />
        <path d={svgPaths.p1b15b880} fill="white" />
        <path d={svgPaths.p4a9efe8}  fill="white" />
        <path d={svgPaths.pb9bd400}  fill="white" />
        <path d={svgPaths.p3e670f60} fill="white" />
        <path d={svgPaths.p2b038800} fill="white" />
        <path d={svgPaths.p3b883cc0} fill="white" />
        <path d={svgPaths.pf543c00}  fill="white" />
        <path d={svgPaths.p11fbf900} fill="white" />
      </svg>
    </div>
  );
}

/**
 * Header à deux niveaux :
 *   1. Barre blanche (48 px) avec un × de fermeture
 *   2. Barre verte  (56 px) avec le logo Transavia
 */
export function TransaviaHeader({
  onBack,
}: {
  onBack?: () => void;
}) {
  const navigate = useNavigate();
  return (
    <div className="shrink-0 sticky top-0 z-40">
      {/* Barre blanche — visible seulement quand il y a une action retour */}
      {onBack && (
        <div
          className="bg-white flex items-center px-4"
          style={{ height: 48 }}
        >
          <button
            onClick={onBack}
            className="flex items-center justify-center rounded-full"
            style={{ width: 36, height: 36 }}
            aria-label="Retour"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M12 3L6 9L12 15"
                stroke="#111111"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Barre verte — toujours visible */}
      <div
        className="bg-[#00AB61] flex items-center px-5"
        style={{ height: 56 }}
      >
        <TransaviaLogo />
      </div>
    </div>
  );
}