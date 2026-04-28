import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { TransaviaHeader } from '../components/TransaviaLogo';
import imgSuitcase from '../../imports/f0942c1bb45a0d91adef0d9a0a52f0e997c540a0.jpg';
import svgPaths from '../../imports/MesureBagae/svg-4dszqtdgns';

// MI 7: Number roll animation
function NumberRoll({ target, suffix = 'cm' }: { target: number; suffix?: string }) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (target === 0) return;
    const duration = 1200;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplayed(Math.round(target * eased));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target]);

  return <span>{displayed}{suffix}</span>;
}

type Phase = 'detecting' | 'measuring' | 'done';

export default function MesureBagage() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<Phase>('detecting');
  const [measuredH, setMeasuredH] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const t1 = setTimeout(() => {
      setPhase('measuring');
      setTimeout(() => setMeasuredH(56), 1000);
    }, 1800);

    const t2 = setTimeout(() => setPhase('done'), 3500);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div
      className="flex flex-col overflow-hidden bg-black"
      style={{ height: '100%', fontFamily: "'Nunito', system-ui, sans-serif" }}
    >
      <TransaviaHeader onBack={() => navigate('/choix-bagage')} />

      {/* ── ZONE CAMÉRA ── */}
      <div className="relative flex-1 overflow-hidden">

        {/* Photo valise */}
        <div className="absolute inset-0">
          <img
            src={imgSuitcase}
            alt=""
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* ── LIGNE DE MESURE VERTICALE — hauteur de la valise ── */}
        {/* La valise occupe environ : left 25%→65%, top 6%→88% dans ce cadrage */}

        {/* Ligne verticale droite (côté droit de la valise) */}
        <AnimatePresence>
          {phase !== 'detecting' && (
            <motion.div
              className="absolute z-20 pointer-events-none"
              style={{ left: '66%', top: '7%', width: 3, borderRadius: 2, background: 'white', boxShadow: '0 0 6px rgba(255,255,255,0.8)' }}
              initial={{ height: 0 }}
              animate={{ height: '80%' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          )}
        </AnimatePresence>

        {/* Tick haut */}
        <AnimatePresence>
          {phase !== 'detecting' && (
            <motion.div
              className="absolute z-20 pointer-events-none"
              style={{ left: 'calc(66% - 12px)', top: '7%', height: 3, borderRadius: 2, background: 'white', boxShadow: '0 0 6px rgba(255,255,255,0.8)' }}
              initial={{ width: 0 }}
              animate={{ width: 27 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            />
          )}
        </AnimatePresence>

        {/* Tick bas */}
        <AnimatePresence>
          {phase !== 'detecting' && (
            <motion.div
              className="absolute z-20 pointer-events-none"
              style={{ left: 'calc(66% - 12px)', top: 'calc(7% + 80%)', height: 3, borderRadius: 2, background: 'white', boxShadow: '0 0 6px rgba(255,255,255,0.8)' }}
              initial={{ width: 0 }}
              animate={{ width: 27 }}
              transition={{ duration: 0.4, delay: 0.85 }}
            />
          )}
        </AnimatePresence>

        {/* Label dimension MI 7 */}
        {measuredH > 0 && (
          <motion.div
            className="absolute z-20 bg-white rounded-[6px] px-2.5 py-1 pointer-events-none"
            style={{ left: 'calc(66% + 10px)', top: 'calc(7% + 37%)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <span className="text-[15px] font-bold text-black block text-center">
              <NumberRoll target={measuredH} />
            </span>
          </motion.div>
        )}

        {/* Cadre AR — coins de détection */}
        <div className="absolute z-10 pointer-events-none"
          style={{ left: '22%', top: '5%', width: '46%', height: '82%' }}>
          {/* Coins blancs */}
          {[
            { top: 0, left: 0, borderTop: '3px solid white', borderLeft: '3px solid white', borderRadius: '4px 0 0 0' },
            { top: 0, right: 0, borderTop: '3px solid white', borderRight: '3px solid white', borderRadius: '0 4px 0 0' },
            { bottom: 0, left: 0, borderBottom: '3px solid white', borderLeft: '3px solid white', borderRadius: '0 0 0 4px' },
            { bottom: 0, right: 0, borderBottom: '3px solid white', borderRight: '3px solid white', borderRadius: '0 0 4px 0' },
          ].map((style, i) => (
            <div key={i} className="absolute" style={{ ...style, width: 24, height: 24 }} />
          ))}
        </div>

        {/* Detecting indicator */}
        {phase === 'detecting' && (
          <motion.div
            className="absolute z-20"
            style={{ top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="bg-white/90 rounded-[12px] px-4 py-2 flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-[#E20076] border-t-transparent rounded-full animate-spin" />
              <span className="text-sm text-[#222] font-semibold">Détection en cours...</span>
            </div>
          </motion.div>
        )}

        {/* Done badge */}
        {phase === 'done' && (
          <motion.div
            className="absolute z-20"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-[#00AB61] rounded-[12px] px-4 py-2 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="7" fill="white" fillOpacity="0.3" />
                <path d="M3 7L6 10L11 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-white text-sm font-semibold">Dimensions conformes ✓</span>
            </div>
          </motion.div>
        )}

        {/* Bouton état */}
        <div className="absolute z-30" style={{ bottom: 36, left: '50%', transform: 'translateX(-50%)' }}>
          <motion.div
            className="rounded-full flex items-center justify-center"
            style={{ width: 64, height: 64, border: '3px solid #140D8A' }}
            animate={{
              backgroundColor: phase === 'done' ? '#00AB61' : 'white',
              borderColor: phase === 'done' ? '#00AB61' : '#140D8A',
            }}
            transition={{ duration: 0.4 }}
          >
            {phase === 'done' ? (
              <motion.svg width="28" height="22" viewBox="0 0 28 22" fill="none"
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}>
                <path d="M2 11L9.5 18.5L26 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            ) : (
              <div className="w-9 h-9 rounded-full border-[3px] border-[#140D8A]" />
            )}
          </motion.div>
          <p className="text-white text-xs text-center mt-2 font-semibold"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
            {phase === 'detecting' ? 'Analyse...' : phase === 'measuring' ? 'Mesure...' : 'Mesuré !'}
          </p>
        </div>
      </div>

      {/* ── BOTTOM BAR STICKY ── */}
      <div className="shrink-0 bg-white border-t border-[#DDD] z-30">
        <div className="px-6 py-3 flex items-center justify-between" style={{ height: 72 }}>
          <div>
            <p className="text-[12px] text-[#444]">Bagage détecté :</p>
            <AnimatePresence mode="wait">
              {phase === 'done' && (
                <motion.p key="done" className="text-[17px] font-bold text-[#00AB61]"
                  initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
                  Cabine (+20€)
                </motion.p>
              )}
              {phase === 'measuring' && (
                <motion.p key="measuring" className="text-[17px] font-bold text-[#222]"
                  initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
                  Mesure en cours...
                </motion.p>
              )}
              {phase === 'detecting' && (
                <motion.p key="detecting" className="text-[17px] font-bold text-[#222]"
                  initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
                  Analyse...
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <motion.button
            onClick={() => navigate('/choix-bagage', { state: { detectedCabine: true } })}
            disabled={phase !== 'done'}
            className="flex items-center gap-2 px-6 py-3 rounded-[999px] font-semibold text-[15px] text-white"
            animate={{ backgroundColor: phase === 'done' ? '#E20076' : '#AAAAAA' }}
            transition={{ duration: 0.3 }}
            whileTap={phase === 'done' ? { scale: 0.96 } : {}}
          >
            Suivant
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d={svgPaths.p31a8a300} fill="white" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}