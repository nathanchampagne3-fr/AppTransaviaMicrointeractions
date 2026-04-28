import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { TransaviaHeader } from '../components/TransaviaLogo';
import { useBooking } from '../context/BookingContext';
import { motion, AnimatePresence } from 'motion/react';
import imgFlight from '../../imports/ConfirmationVol-1/81054f1884f50f62c4449e2a544240ebeaaf65bb.png';
import svgPaths from '../../imports/ConfirmationVol-1/svg-pcolqqowz3';

// ── Divider
function SectionDivider() {
  return <div style={{ background: '#F7F7F7', height: 8, borderTop: '1px solid #EBEBEB', borderBottom: '1px solid #EBEBEB' }} />;
}

// ── Checkbox
function Check({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', cursor: 'pointer' }} onClick={onChange}>
      <div style={{ marginTop: 2, width: 20, height: 20, borderRadius: 4, border: checked ? 'none' : '1.5px solid #8C8C8C', background: checked ? '#00AB61' : 'white', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {checked && (
          <svg width="11" height="9" viewBox="0 0 12 10" fill="none">
            <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <div style={{ flex: 1, fontSize: 14, color: '#444', lineHeight: '22px' }}>{label}</div>
    </div>
  );
}

// ── MI 11: Number Roll
function NumberRoll({ value, duration = 900 }: { value: number; duration?: number }) {
  const [displayed, setDisplayed] = useState(0);
  const startedRef = useRef(false);
  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    const start = Date.now();
    const tick = () => {
      const t = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplayed(Math.round(value * eased));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [value, duration]);
  return <>{displayed}</>;
}

// ── Barcode
function Barcode() {
  const pattern = [3,1,2,1,4,1,1,2,3,1,2,4,1,3,1,2,1,4,2,1,3,1,2,1,2,3,1,4,1,2,1,3,2,1,4,1,2,1,3,1];
  let x = 0;
  const rects: JSX.Element[] = [];
  pattern.forEach((w, i) => {
    if (i % 2 === 0) {
      rects.push(<rect key={i} x={x} y="0" width={w * 2.2} height="40" fill="#111" />);
    }
    x += w * 2.2;
  });
  return (
    <svg width="100%" height="40" viewBox={`0 0 ${x} 40`} preserveAspectRatio="none">
      {rects}
    </svg>
  );
}

// ─────────────────────────────────────────────
// ── MI 11 + MI 12: BOARDING PASS OVERLAY
// ─────────────────────────────────────────────
type WalletPhase = 'none' | 'animating' | 'done';

function BoardingPassOverlay({
  finalTotal,
  onClose,
  passengers,
  selectedSeats,
}: {
  finalTotal: number;
  onClose: () => void;
  passengers: any[];
  selectedSeats: string[];
}) {
  const [printSection, setPrintSection] = useState(0);
  const [walletPhase, setWalletPhase] = useState<WalletPhase>('none');
  const [currentPassengerIndex, setCurrentPassengerIndex] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i <= 6; i++) {
      timers.push(setTimeout(() => setPrintSection(i), 600 + i * 350));
    }
    return () => timers.forEach(clearTimeout);
  }, []);

  const allPrinted = printSection >= 6;
  const currentPassenger = passengers[currentPassengerIndex] || passengers[0];
  const currentSeat = selectedSeats[currentPassengerIndex] || '12A';
  const passengerName = `${currentPassenger?.prenom || ''} ${currentPassenger?.nom || ''}`.toUpperCase().trim() || `PASSAGER ${currentPassengerIndex + 1}`;
  const hasMultiplePassengers = passengers.length > 1;

  const handleWallet = () => {
    setWalletPhase('animating');
    setTimeout(() => setWalletPhase('done'), 700);
  };

  return (
    <motion.div
      className="absolute inset-0 z-50 flex flex-col"
      style={{ background: 'rgba(8,6,20,0.93)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      {/* ── Success header */}
      <motion.div
        className="flex flex-col items-center pt-7 pb-3 shrink-0"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.35 }}
      >
        <motion.div
          className="w-12 h-12 rounded-full bg-[#00AB61] flex items-center justify-center mb-2.5"
          style={{ boxShadow: '0 0 0 8px rgba(0,171,97,0.15)' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 380, damping: 18, delay: 0.25 }}
        >
          <svg width="22" height="18" viewBox="0 0 28 22" fill="none">
            <path d="M2 11L9.5 18.5L26 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
        <p className="text-white font-bold" style={{ fontSize: 17 }}>Réservation confirmée !</p>
        {/* MI 11: Number roll */}
        <motion.p
          className="mt-1"
          style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Total payé :{' '}
          <span className="text-white font-bold">
            <NumberRoll value={finalTotal} />,00 €
          </span>
        </motion.p>
      </motion.div>

      {/* ── Boarding pass card */}
      <motion.div
        className="flex-1 flex flex-col min-h-0"
        initial={{ y: '100%' }}
        animate={walletPhase === 'animating' ? { scale: 0.15, opacity: 0 } : { y: 0, scale: 1, opacity: 1 }}
        transition={
          walletPhase === 'animating'
            ? { duration: 0.6, ease: [0.4, 0, 0.8, 1] }
            : { type: 'spring', stiffness: 260, damping: 30, delay: 0.05 }
        }
      >
        <div
          className="flex-1 flex flex-col min-h-0 relative"
          style={{ background: 'white', borderRadius: '22px 22px 0 0', boxShadow: '0 -6px 32px rgba(0,0,0,0.5)', overflow: 'hidden' }}
        >
          {/* Print scan line */}
          {!allPrinted && (
            <motion.div
              className="absolute left-0 right-0 h-0.5 pointer-events-none z-20"
              style={{
                background: 'linear-gradient(90deg, transparent, #E20076 40%, #FF4DB8 50%, #E20076 60%, transparent)',
                boxShadow: '0 0 10px 3px rgba(226,0,118,0.55)',
              }}
              animate={{ top: ['28%', '88%'] }}
              transition={{ duration: 2.2, ease: 'linear', repeat: Infinity }}
            />
          )}

          {/* Scrollable boarding pass content */}
          <div className="flex-1 overflow-y-auto" style={{ minHeight: 0 }}>

            {/* ── Section 1: Header */}
            <AnimatePresence>
              {printSection >= 1 && (
                <motion.div
                  className="flex items-center justify-between px-5 pt-4 pb-3"
                  style={{ borderBottom: '1px solid #F0F0F0' }}
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}
                >
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <div className="w-4 h-4 rounded bg-[#00AB61] flex items-center justify-center">
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M6 1L11 10H1L6 1Z" fill="white" /></svg>
                      </div>
                      <span className="font-bold text-[#00AB61]" style={{ fontSize: 15, letterSpacing: '-0.2px' }}>transavia</span>
                    </div>
                    <p style={{ fontSize: 9, color: '#AAA', letterSpacing: '1.8px' }}>CARTE D'EMBARQUEMENT</p>
                  </div>
                  <div className="text-right">
                    <p style={{ fontSize: 9, color: '#AAA', letterSpacing: '1px' }}>VOL</p>
                    <p className="font-bold text-[#222]" style={{ fontSize: 20 }}>TO3010</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Section 2: Route */}
            <AnimatePresence>
              {printSection >= 2 && (
                <motion.div
                  className="flex items-center justify-between px-5 py-3"
                  style={{ borderBottom: '1px solid #F0F0F0' }}
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}
                >
                  <div className="text-center">
                    <p className="font-bold text-[#222]" style={{ fontSize: 26, lineHeight: 1 }}>ORY</p>
                    <p style={{ fontSize: 10, color: '#888', marginTop: 2 }}>Paris Orly</p>
                    <p className="font-bold text-[#140D8A]" style={{ fontSize: 15, marginTop: 3 }}>06:25</p>
                  </div>
                  <div className="flex flex-col items-center flex-1 px-2">
                    <div className="flex items-center w-full gap-1">
                      <div className="h-px flex-1" style={{ background: '#E0E0E0' }} />
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.21v-1.895l-8.956-4.899V4.5a1.5 1.5 0 0 0-3 0v4.916L2 14.315v1.895l8.044-2.424V18.5l-1.854 1.39V21l3.31-.75 3.31.75v-1.11L12.956 18.5v-4.714L22 16.21z" fill="#00AB61" />
                      </svg>
                      <div className="h-px flex-1" style={{ background: '#E0E0E0' }} />
                    </div>
                    <p style={{ fontSize: 9, color: '#BBB', marginTop: 3 }}>3h 25min</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-[#222]" style={{ fontSize: 26, lineHeight: 1 }}>RAK</p>
                    <p style={{ fontSize: 10, color: '#888', marginTop: 2 }}>Marrakech</p>
                    <p className="font-bold text-[#140D8A]" style={{ fontSize: 15, marginTop: 3 }}>08:50</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Section 3: Passager + Date */}
            <AnimatePresence>
              {printSection >= 3 && (
                <motion.div
                  className="flex px-5 py-2.5 gap-4"
                  style={{ borderBottom: '1px solid #F0F0F0' }}
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}
                >
                  <div className="flex-1">
                    <p style={{ fontSize: 8, color: '#AAA', letterSpacing: '1.2px', marginBottom: 2 }}>PASSAGER</p>
                    <p className="font-bold text-[#222]" style={{ fontSize: 12 }}>{passengerName}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: 8, color: '#AAA', letterSpacing: '1.2px', marginBottom: 2 }}>DATE</p>
                    <p className="font-bold text-[#222]" style={{ fontSize: 12 }}>15 JUN 2025</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Section 4: Gate / Siège / Classe */}
            <AnimatePresence>
              {printSection >= 4 && (
                <motion.div
                  className="flex px-5 py-2.5"
                  style={{ borderBottom: '1px solid #F0F0F0' }}
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}
                >
                  {[
                    { label: 'PORTE', value: 'B22', big: true },
                    { label: 'SIÈGE', value: currentSeat, big: true },
                    { label: 'CLASSE', value: 'ECO', big: true },
                    { label: 'EMBARQ.', value: '05:55', big: false },
                  ].map(({ label, value, big }) => (
                    <div key={label} className="flex-1">
                      <p style={{ fontSize: 8, color: '#AAA', letterSpacing: '1.2px', marginBottom: 2 }}>{label}</p>
                      <p style={{ fontSize: big ? 18 : 14, fontWeight: 700, color: big ? '#222' : '#140D8A' }}>{value}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Tear line */}
            <AnimatePresence>
              {printSection >= 4 && (
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="w-4 h-4 rounded-full -ml-2 shrink-0" style={{ background: '#F5F5F5', border: '1px solid #E8E8E8' }} />
                  <div className="flex-1 border-t-2 border-dashed" style={{ borderColor: '#E0E0E0' }} />
                  <div className="w-4 h-4 rounded-full -mr-2 shrink-0" style={{ background: '#F5F5F5', border: '1px solid #E8E8E8' }} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Section 5: Barcode */}
            <AnimatePresence>
              {printSection >= 5 && (
                <motion.div
                  className="px-5 py-3"
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                >
                  <Barcode />
                  <p className="text-center mt-1.5" style={{ fontSize: 9, color: '#AAA', letterSpacing: '2px' }}>
                    TO3010 ORY RAK 15JUN25 {currentSeat} ECO
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation entre boarding passes (si plusieurs passagers) */}
            <AnimatePresence>
              {printSection >= 5 && hasMultiplePassengers && (
                <motion.div
                  className="px-5 py-3 flex items-center justify-center gap-4"
                  style={{ borderTop: '1px solid #F0F0F0' }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <button
                    onClick={() => setCurrentPassengerIndex(Math.max(0, currentPassengerIndex - 1))}
                    disabled={currentPassengerIndex === 0}
                    style={{ padding: 8, opacity: currentPassengerIndex === 0 ? 0.3 : 1, cursor: currentPassengerIndex === 0 ? 'default' : 'pointer', background: 'none', border: 'none' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M12 4L6 10L12 16" stroke="#140D8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div className="flex flex-col items-center gap-1">
                    <p style={{ fontSize: 11, color: '#888' }}>Carte d'embarquement</p>
                    <div className="flex gap-1.5">
                      {passengers.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentPassengerIndex(idx)}
                          style={{
                            width: idx === currentPassengerIndex ? 20 : 6,
                            height: 6,
                            borderRadius: 3,
                            background: idx === currentPassengerIndex ? '#140D8A' : '#DDD',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setCurrentPassengerIndex(Math.min(passengers.length - 1, currentPassengerIndex + 1))}
                    disabled={currentPassengerIndex === passengers.length - 1}
                    style={{ padding: 8, opacity: currentPassengerIndex === passengers.length - 1 ? 0.3 : 1, cursor: currentPassengerIndex === passengers.length - 1 ? 'default' : 'pointer', background: 'none', border: 'none' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M8 4L14 10L8 16" stroke="#140D8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Spacer */}
            <div style={{ height: 8 }} />
          </div>

          {/* ── Section 6: Actions (sticky at bottom of card) */}
          <AnimatePresence>
            {printSection >= 6 && walletPhase === 'none' && (
              <motion.div
                className="shrink-0 px-5 pb-5 pt-2"
                style={{ borderTop: '1px solid #F0F0F0', background: 'white' }}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col gap-2.5">
                  {/* Télécharger */}
                  <motion.button
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-[999px]"
                    style={{ border: '1.5px solid #140D8A', color: '#140D8A', fontSize: 14, fontWeight: 600, background: 'white' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1v9M4 7l4 4 4-4M2 13h12" stroke="#140D8A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Télécharger le PDF
                  </motion.button>

                  {/* Apple Wallet */}
                  <motion.button
                    onClick={handleWallet}
                    className="w-full flex items-center justify-center gap-2.5 py-3 rounded-[14px]"
                    style={{ background: '#000', color: 'white', fontSize: 14, fontWeight: 600 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <svg width="20" height="14" viewBox="0 0 28 20" fill="none">
                      <rect x="0" y="3" width="28" height="17" rx="3" fill="#1C3B5A" />
                      <rect x="0" y="0" width="28" height="12" rx="3" fill="#2B5CA8" />
                      <rect x="0" y="4" width="28" height="7" rx="2" fill="#1C3B5A" />
                      <rect x="3" y="8" width="8" height="5" rx="1.5" fill="#FFD60A" />
                    </svg>
                    Ajouter à Apple Wallet
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* ── MI 12: Wallet success overlay */}
      <AnimatePresence>
        {walletPhase === 'done' && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-60"
            style={{ background: 'rgba(8,6,20,0.97)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Wallet icon bounce (MI 12) */}
            <motion.div
              className="mb-5 flex flex-col items-center"
              initial={{ scale: 0, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 16, delay: 0.1 }}
            >
              <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-3"
                style={{ background: 'linear-gradient(145deg, #2B5CA8, #1C3B5A)', boxShadow: '0 12px 40px rgba(43,92,168,0.5)' }}>
                <svg width="44" height="32" viewBox="0 0 28 20" fill="none">
                  <rect x="0" y="3" width="28" height="17" rx="3" fill="#1C3B5A" />
                  <rect x="0" y="0" width="28" height="12" rx="3" fill="#3A6FCC" />
                  <rect x="0" y="4" width="28" height="7" rx="2" fill="#1C3B5A" />
                  <rect x="3" y="8" width="8" height="5" rx="1.5" fill="#FFD60A" />
                </svg>
              </div>
              {/* Toast (MI 12) */}
              <motion.div
                className="flex items-center gap-2 px-5 py-2.5 rounded-full"
                style={{ background: 'rgba(0,171,97,0.15)', border: '1px solid rgba(0,171,97,0.35)' }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#00AB61" />
                  <path d="M4 8L7 11L12 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-white font-semibold" style={{ fontSize: 13 }}>Carte ajoutée au Wallet !</span>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-center mb-8 px-8"
              style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: '20px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Votre carte d'embarquement est désormais disponible dans Apple Wallet.
            </motion.p>

            {/* CTA Retour — toujours visible */}
            <motion.button
              onClick={onClose}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-[999px]"
              style={{ background: '#E20076', color: 'white', fontSize: 15, fontWeight: 600, minWidth: 220 }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileTap={{ scale: 0.96 }}
            >
              Retour à l'accueil
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M14.373 8.872C14.764 8.472 14.764 7.824 14.373 7.424L9.19 2.115C8.8 1.715 8.167 1.715 7.777 2.115L7.305 2.597C6.915 3.001 6.915 3.642 7.305 4.045L9.979 6.783H2.333C1.781 6.783 1.333 7.241 1.333 7.807V8.489C1.333 9.055 1.781 9.513 2.333 9.513H9.978L7.305 12.251C6.914 12.654 6.914 13.295 7.305 13.699L7.777 14.181C8.167 14.581 8.8 14.581 9.19 14.181L14.373 8.872Z" fill="white" />
              </svg>
            </motion.button>

            {/* Bail-out : revenir sans wallet si jamais */}
            <motion.button
              onClick={onClose}
              className="mt-4"
              style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', background: 'none', border: 'none', cursor: 'pointer' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Passer
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// ── PAGE PRINCIPALE
// ─────────────────────────────────────────────
export default function Confirmation() {
  const navigate = useNavigate();
  const { total, passengers, numPassengers, selectedSeats } = useBooking();

  const [petePan, setPetePan] = useState(false);
  const [co2, setCo2] = useState(false);
  const [cgu, setCgu] = useState(false);
  const [totalOpen, setTotalOpen] = useState(false);
  const [showBoardingPass, setShowBoardingPass] = useState(false);

  const finalTotal = total + (petePan ? 2 : 0) + (co2 ? 9.65 : 0);

  const handleSuivant = () => {
    if (!cgu) return;
    setShowBoardingPass(true);
  };

  return (
    <div style={{ height: '100%', fontFamily: "'Nunito', system-ui, sans-serif" }} className="flex flex-col overflow-hidden bg-[#F5F5F5] relative">
      {/* HEADER */}
      <TransaviaHeader onBack={() => navigate('/choix-place')} />

      {/* SCROLLABLE */}
      <div className="flex-1 overflow-y-auto" style={{ minHeight: 0 }}>

        {/* Page title */}
        <div className="bg-white px-5 pt-4 pb-3">
          <h1 style={{ fontSize: 22, fontWeight: 700, color: '#222', lineHeight: '30px' }}>Vérifiez votre réservation</h1>
        </div>

        {/* ── VOLS ── */}
        <div className="bg-white mt-px">
          <div className="px-5 pb-5">
            <p style={{ fontSize: 18, fontWeight: 700, color: '#222', lineHeight: '28px', paddingTop: 16, paddingBottom: 16 }}>Vols</p>

            {/* Flight photo */}
            <div style={{ height: 110, borderRadius: 10, overflow: 'hidden', marginBottom: 10 }}>
              <img src={imgFlight} alt="Paris – Marrakech"
                style={{ width: '100%', height: '188%', marginTop: '-44%', objectFit: 'fill', display: 'block' }}
                draggable={false} />
            </div>

            {/* Tarif badge */}
            <div style={{ background: '#F7F7F7', border: '1px solid #EBEBEB', borderRadius: 8, padding: '8px 12px', marginBottom: 14 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#444' }}>Vous avez choisi le Tarif Basic</p>
            </div>

            {/* Flight details */}
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                <path d={svgPaths.p1d0406e0} fill="#00AB61" />
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#222' }}>Vol aller</p>
                <p style={{ fontSize: 13, color: '#444' }}>Paris (Orly) à Marrakech</p>
                <p style={{ fontSize: 13, color: '#444' }}>15 juin, 06:25 - 08:50</p>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <p style={{ fontSize: 13, color: '#444' }}>3h 25min</p>
                  <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#8C8C8C' }} />
                  <p style={{ fontSize: 13, color: '#444' }}>TO3010</p>
                </div>
              </div>
            </div>
            <p style={{ fontSize: 11, color: '#8C8C8C', marginTop: 16, lineHeight: '16px' }}>* Les horaires de vol sont locaux</p>
          </div>
        </div>

        <SectionDivider />

        {/* ── PASSAGERS ── */}
        <div className="bg-white px-5 py-4">
          <p style={{ fontSize: 18, fontWeight: 700, color: '#222', marginBottom: 16 }}>Passagers</p>
          {passengers.slice(0, numPassengers).map((passenger, idx) => {
            const passengerName = `${passenger.prenom} ${passenger.nom}`.toUpperCase().trim() || `PASSAGER ${idx + 1}`;
            const civilite = passenger.sexe === 'homme' ? 'M.' : passenger.sexe === 'femme' ? 'Mme' : '';
            return (
              <div key={passenger.id} style={{ marginBottom: idx < numPassengers - 1 ? 16 : 0 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
                  <svg width="20" height="20" viewBox="0 0 16 20" fill="none" style={{ flexShrink: 0 }}>
                    <path d={svgPaths.p43a7980} fill="#00AB61" />
                  </svg>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: '#222' }}>
                      {civilite} {passengerName}
                    </p>
                    <p style={{ fontSize: 12, color: '#444' }}>Adulte</p>
                  </div>
                </div>
                {!passenger.flyingBlue && idx === numPassengers - 1 && (
                  <div style={{ background: '#E7F0FE', border: '1px solid #BCD2FB', borderRadius: 10, padding: '14px 14px' }}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#2464DB', flexShrink: 0, marginTop: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="8" height="8" viewBox="0 0 20 20" fill="none"><path d={svgPaths.p3ee9ef00} fill="white" /></svg>
                      </div>
                      <p style={{ fontSize: 12, color: '#102E65', lineHeight: '18px', flex: 1 }}>
                        Aucun numéro Flying Blue saisi. Vous pourrez l'ajouter plus tard sur Mon Transavia.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <SectionDivider />

        {/* ── COORDONNÉES ── */}
        <div className="bg-white px-5 py-4">
          <p style={{ fontSize: 18, fontWeight: 700, color: '#222', marginBottom: 12 }}>Coordonnées</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {passengers[0] && (
              <>
                <p style={{ fontSize: 13, color: '#222' }}>
                  {passengers[0].sexe === 'homme' ? 'M.' : passengers[0].sexe === 'femme' ? 'Mme' : ''}{' '}
                  {`${passengers[0].prenom} ${passengers[0].nom}`.toUpperCase().trim() || 'PASSAGER 1'}
                </p>
                <p style={{ fontSize: 13, color: '#222' }}>{passengers[0].email || 'email@example.com'}</p>
                <p style={{ fontSize: 13, color: '#222' }}>
                  {passengers[0].indicatif || '+33'}{passengers[0].telephone || '000000000'}
                </p>
              </>
            )}
          </div>
        </div>

        <SectionDivider />

        {/* ── BAGAGES ── */}
        <div className="bg-white px-5 py-4">
          <p style={{ fontSize: 18, fontWeight: 700, color: '#222', marginBottom: 12 }}>Bagages</p>
          <p style={{ fontSize: 14, fontWeight: 600, color: '#222', marginBottom: 10 }}>Paris (Orly) à Marrakech</p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <path d={svgPaths.p2e7e1e00} fill="#00AB61" />
              <path d={svgPaths.pef660e0} fill="#00AB61" fillRule="evenodd" clipRule="evenodd" />
              <path d={svgPaths.p6631b00} fill="#00AB61" />
            </svg>
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#222' }}>1 x bagage à main</p>
              <p style={{ fontSize: 12, color: '#444' }}>40 x 30 x 20 cm. Sous le siège devant vous</p>
            </div>
          </div>
          <div style={{ border: '1px solid #625DB1', borderRadius: 999, padding: '7px 14px', display: 'inline-flex', cursor: 'pointer' }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#140D8A' }}>Afficher par passager</p>
          </div>
        </div>

        <SectionDivider />

        {/* ── PETER PAN ── */}
        <div className="bg-white px-5 py-4">
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#222', flex: 1, paddingRight: 8 }}>Soutenez le club de vacances Peter Pan</p>
            <svg width="20" height="20" viewBox="0 0 20 18" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
              <path d={svgPaths.p1b9cb840} fill="#00AB61" />
            </svg>
          </div>
          <p style={{ fontSize: 12, color: '#666', lineHeight: '18px', marginBottom: 14 }}>
            Le club Peter Pan organise des vacances pour les jeunes atteints d'une maladie chronique. La fondation se compose intégralement de volontaires de l'équipe Transavia.
          </p>
          <Check checked={petePan} onChange={() => setPetePan(v => !v)}
            label="Oui, je soutiens Peter Pan avec une contribution unique de 2 €" />
        </div>

        <SectionDivider />

        {/* ── CO₂ ── */}
        <div className="bg-white px-5 py-4">
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#222', flex: 1, paddingRight: 8 }}>Réduire les émissions de CO₂ de l'aviation</p>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
              <path d={svgPaths.p39facc80} fill="#00AB61" />
            </svg>
          </div>
          <p style={{ fontSize: 12, color: '#666', lineHeight: '18px', marginBottom: 10 }}>
            Votre voyage émet ~169,86 kg de CO₂. Pour 9,65 €, contribuez à l'achat de SAF et réduisez d'environ 13,55 kg les émissions sur nos futurs vols.
          </p>
          <p style={{ fontSize: 12, color: '#00e', textDecoration: 'underline', marginBottom: 14, lineHeight: '18px' }}>En savoir plus sur les émissions de CO₂ et le SAF</p>
          <Check checked={co2} onChange={() => setCo2(v => !v)}
            label={<span>Je contribue de <strong>9,65 €</strong> à l'achat de SAF</span>} />
        </div>

        <SectionDivider />

        {/* ── CONDITIONS ── */}
        <div className="bg-white px-5 py-4">
          <Check checked={cgu} onChange={() => setCgu(v => !v)}
            label={<span>J'ai lu et j'accepte les <span style={{ color: '#00e', textDecoration: 'underline' }}>conditions générales de Transavia</span></span>} />
        </div>

        {/* Legal footer */}
        <div className="bg-[#F5F5F5] px-5 pt-3 pb-2">
          {['© 2025 Transavia', 'Conditions d\'utilisation', 'Confidentialité', 'Cookies maîtrisés'].map(link => (
            <p key={link} style={{ fontSize: 11, color: '#AAA', lineHeight: '20px' }}>{link}</p>
          ))}
        </div>
        <div style={{ height: 6 }} />
      </div>

      {/* ── STICKY BOTTOM BAR ── */}
      <div className="shrink-0 bg-white border-t border-[#DDD] z-20">
        {/* Total collapsible */}
        <button
          onClick={() => setTotalOpen(v => !v)}
          style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#444' }}>Total</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 17, fontWeight: 700, color: '#222' }}>{finalTotal.toFixed(2).replace('.', ',')} €</span>
            <motion.svg width="10" height="6" viewBox="0 0 10 6" fill="none"
              animate={{ rotate: totalOpen ? 0 : 180 }} transition={{ duration: 0.2 }}>
              <path d="M1 1L5 5L9 1" stroke="#222" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </div>
        </button>

        <AnimatePresence>
          {totalOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }}
              style={{ overflow: 'hidden', borderTop: '1px solid #F0F0F0', padding: '0 20px' }}>
              <div style={{ paddingTop: 6, paddingBottom: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#666' }}>
                  <span>Vol + services</span><span>{total.toFixed(2).replace('.', ',')} €</span>
                </div>
                {petePan && <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#666' }}><span>Peter Pan</span><span>2,00 €</span></div>}
                {co2 && <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#666' }}><span>Contribution CO₂</span><span>9,65 €</span></div>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 20px 14px' }}>
          <motion.button
            onClick={() => navigate('/choix-place')}
            style={{ border: '1.5px solid #625DB1', borderRadius: 999, padding: '9px 18px', background: 'white', fontSize: 14, fontWeight: 600, color: '#140D8A', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
            whileTap={{ scale: 0.97 }}>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M10 2L4 8L10 14" stroke="#140D8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Retour
          </motion.button>
          {/* MI 11: Bouton Payer avec pulse */}
          <motion.button
            onClick={handleSuivant}
            disabled={!cgu}
            style={{ background: cgu ? '#E20076' : '#AAAAAA', color: 'white', border: 'none', borderRadius: 999, padding: '11px 22px', fontSize: 14, fontWeight: 600, cursor: cgu ? 'pointer' : 'default', display: 'flex', alignItems: 'center', gap: 8 }}
            animate={cgu ? { scale: [1, 0.97, 1] } : {}}
            transition={cgu ? { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } : {}}
            whileTap={cgu ? { scale: 0.94 } : {}}>
            Payer
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M14.373 8.872C14.764 8.472 14.764 7.824 14.373 7.424L9.19 2.115C8.8 1.715 8.167 1.715 7.777 2.115L7.305 2.597C6.915 3.001 6.915 3.642 7.305 4.045L9.979 6.783H2.333C1.781 6.783 1.333 7.241 1.333 7.807V8.489C1.333 9.055 1.781 9.513 2.333 9.513H9.978L7.305 12.251C6.914 12.654 6.914 13.295 7.305 13.699L7.777 14.181C8.167 14.581 8.8 14.581 9.19 14.181L14.373 8.872Z" fill="white" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* ── MI 11 + MI 12: BOARDING PASS OVERLAY ── */}
      <AnimatePresence>
        {showBoardingPass && (
          <BoardingPassOverlay
            finalTotal={finalTotal}
            onClose={() => navigate('/')}
            passengers={passengers.slice(0, numPassengers)}
            selectedSeats={selectedSeats}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
