import { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { TransaviaHeader } from '../components/TransaviaLogo';
import { useBooking } from '../context/BookingContext';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../../imports/ChoixPlace/svg-si2vqxwd2g';

// ── Types
type SeatType   = 'premium' | 'legroom' | 'forward' | 'std_fwd' | 'standard';
type SeatStatus = 'available' | 'occupied' | 'selected';
interface Seat { id: string; row: number; col: string; status: SeatStatus; type: SeatType; price: number; }

function getSeatCfg(row: number): { type: SeatType; price: number } {
  if (row <= 2)  return { type: 'premium',  price: 27 };
  if (row <= 5)  return { type: 'forward',  price: 19 };
  if (row <= 8)  return { type: 'legroom',  price: 19 };
  if (row <= 15) return { type: 'std_fwd',  price: 14 };
  return           { type: 'standard', price: 11 };
}

const OCCUPIED = new Set([
  '1A','2B','3C','4D','5F','7A','8B','9C','10D','10E',
  '11F','12A','14B','15C','16D','17F','18A','19B','20C',
  '21D','22E','23F','24A','25B','26C','27D','3F','6A','6B',
]);
const COLS = ['A','B','C','D','E','F'];
const ROWS = 27;

function makeSeats(): Seat[] {
  return Array.from({ length: ROWS }, (_, ri) => {
    const row = ri + 1;
    const { type, price } = getSeatCfg(row);
    return COLS.map(col => ({
      id: `${row}${col}`, row, col,
      status: OCCUPIED.has(`${row}${col}`) ? 'occupied' : 'available',
      type, price,
    }));
  }).flat();
}
const ALL_SEATS = makeSeats();

// ── Couleurs par type (MI 9)
const SEAT_COLORS: Record<SeatType | 'occupied', { main: string; top: string; arm: string }> = {
  premium:  { main: '#2D1FA8', top: '#4834CC', arm: '#1A1070' },
  forward:  { main: '#00875A', top: '#00AB61', arm: '#005A3C' },
  legroom:  { main: '#0778A8', top: '#1299D0', arm: '#045578' },
  std_fwd:  { main: '#1A4A9A', top: '#2B64C8', arm: '#102E6A' },
  standard: { main: '#5E2CA5', top: '#7B43C4', arm: '#3E1A72' },
  occupied: { main: '#5A5A5A', top: '#777',    arm: '#3A3A3A' },
};
const SELECTED_COLORS = { main: '#E20076', top: '#FF3399', arm: '#A8004F' };

// ── SVG Seat (vue de dessus - style carte cabine)
function SeatSVG({ type, occupied, selected }: { type: SeatType; occupied: boolean; selected: boolean }) {
  const c = selected ? SELECTED_COLORS : SEAT_COLORS[occupied ? 'occupied' : type];
  return (
    <svg width="34" height="38" viewBox="0 0 34 38" fill="none" style={{ display: 'block' }}>
      {/* Dossier */}
      <rect x="2" y="2" width="30" height="20" rx="5" fill={c.main} />
      {/* Appui-tête */}
      <rect x="7" y="1" width="20" height="7" rx="3.5" fill={c.top} />
      {/* Accoudoir gauche */}
      <rect x="0" y="7" width="4" height="14" rx="2" fill={c.arm} />
      {/* Accoudoir droit */}
      <rect x="30" y="7" width="4" height="14" rx="2" fill={c.arm} />
      {/* Assise */}
      <rect x="3" y="24" width="28" height="10" rx="4" fill={c.main} />
      {/* Reflet sur dossier */}
      <rect x="5" y="4" width="24" height="3" rx="1.5" fill="rgba(255,255,255,0.18)" />
      {/* Point de sélection */}
      {selected && (
        <circle cx="17" cy="33" r="3.5" fill="white" opacity="0.85" />
      )}
      {/* Croix pour occupé */}
      {occupied && (
        <>
          <line x1="10" y1="8" x2="24" y2="18" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
          <line x1="24" y1="8" x2="10" y2="18" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

// ── MI 10: Tooltip
function Tooltip({ seat }: { seat: Seat }) {
  const labels: Record<SeatType, string> = {
    premium: 'Première rangée', legroom: "Plus d'espace", forward: "À l'avant",
    std_fwd: 'Standard avant', standard: 'Standard',
  };
  return (
    <motion.div
      className="absolute z-50 bg-white rounded-xl shadow-2xl pointer-events-none"
      style={{ bottom: 48, left: '50%', transform: 'translateX(-50%)', width: 148, padding: '10px 12px' }}
      initial={{ scale: 0.8, opacity: 0, y: 4 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.8, opacity: 0, y: 4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 26 }}
    >
      <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 shadow-sm" />
      <p style={{ fontSize: 11, fontWeight: 700, color: '#222' }}>{labels[seat.type]}</p>
      <p style={{ fontSize: 11, color: '#666', marginTop: 1 }}>Siège {seat.id}</p>
      <p style={{ fontSize: 14, fontWeight: 700, color: '#140D8A', marginTop: 3 }}>{seat.price} €</p>
    </motion.div>
  );
}

// ── MI 10: Long-press ring
function LongPressRing({ progress }: { progress: number }) {
  const R = 17; const circ = 2 * Math.PI * R;
  return (
    <svg className="absolute inset-0 -rotate-90 pointer-events-none z-10" width="34" height="38" viewBox="0 0 34 38">
      <circle cx="17" cy="19" r={R} fill="none" stroke="rgba(226,0,118,0.25)" strokeWidth="3" />
      <circle cx="17" cy="19" r={R} fill="none" stroke="#E20076" strokeWidth="3"
        strokeDasharray={circ} strokeDashoffset={circ - (progress / 100) * circ}
        strokeLinecap="round" style={{ transition: 'stroke-dashoffset 0.01s linear' }} />
    </svg>
  );
}

// ── Seat cell (MI 8, 9, 10)
function SeatCell({ seat, isSelected, anySelected, onSelect, onLongPress, showTip, showPrices }: {
  seat: Seat; isSelected: boolean; anySelected: boolean;
  onSelect: (s: Seat) => void; onLongPress: (s: Seat) => void;
  showTip: boolean; showPrices: boolean;
}) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t0 = useRef(0);
  const [lpProgress, setLpProgress] = useState(0);
  const lpInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearAll = () => {
    if (timer.current) { clearTimeout(timer.current); timer.current = null; }
    if (lpInterval.current) { clearInterval(lpInterval.current); lpInterval.current = null; }
    setLpProgress(0);
  };

  const down = (e: React.PointerEvent) => {
    if (seat.status === 'occupied') return;
    e.stopPropagation();
    t0.current = Date.now();
    setLpProgress(0);
    lpInterval.current = setInterval(() => {
      const elapsed = Date.now() - t0.current;
      setLpProgress(Math.min(100, (elapsed / 600) * 100));
    }, 10);
    timer.current = setTimeout(() => {
      onLongPress(seat);
      clearAll();
    }, 600);
  };
  const up = (e: React.PointerEvent) => {
    if (seat.status === 'occupied') return;
    e.stopPropagation();
    const wasQuick = Date.now() - t0.current < 500;
    clearAll();
    if (wasQuick) onSelect(seat);
  };

  return (
    <div style={{ position: 'relative', width: 34, height: 38, flexShrink: 0, touchAction: 'none', marginRight: 2 }}>
      <AnimatePresence>{showTip && <Tooltip seat={seat} />}</AnimatePresence>
      {lpProgress > 0 && <LongPressRing progress={lpProgress} />}

      {/* Seat SVG */}
      <motion.div
        style={{ position: 'absolute', inset: 0 }}
        animate={isSelected ? { scale: [1, 1.25, 1] } : {}}
        transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <SeatSVG type={seat.type} occupied={seat.status === 'occupied'} selected={isSelected} />
      </motion.div>

      {/* Prix (MI 8 : visible au zoom) */}
      {seat.status !== 'occupied' && showPrices && (
        <div style={{ position: 'absolute', top: 5, left: 0, right: 0, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
          <span style={{ fontSize: 8, fontWeight: 700, color: 'rgba(255,255,255,0.9)', lineHeight: 1 }}>
            {seat.price}€
          </span>
        </div>
      )}

      {/* Dim MI 9 */}
      {anySelected && !isSelected && seat.status !== 'occupied' && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', borderRadius: 5, pointerEvents: 'none' }} />
      )}

      {/* Hit zone */}
      <div
        style={{ position: 'absolute', inset: 0, cursor: seat.status === 'occupied' ? 'default' : 'pointer', touchAction: 'none' }}
        onPointerDown={down}
        onPointerUp={up}
        onPointerLeave={clearAll}
        onPointerCancel={clearAll}
      />
    </div>
  );
}

// ── Légende
function LegendDot({ type, label }: { type: SeatType | 'occupied'; label: string }) {
  const c = SEAT_COLORS[type];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <div style={{ width: 12, height: 12, borderRadius: 3, background: c.main, flexShrink: 0 }} />
      <span style={{ fontSize: 10, color: '#888', lineHeight: '14px' }}>{label}</span>
    </div>
  );
}

// ── Main
export default function ChoixPlace() {
  const navigate = useNavigate();
  const { total, numPassengers, setSelectedSeats, passengers, selectedSeats: initialSelectedSeats } = useBooking();
  const [seats, setSeats] = useState<Seat[]>(() => {
    return ALL_SEATS.map(seat => ({
      ...seat,
      status: initialSelectedSeats.includes(seat.id) ? 'selected' : seat.status
    }));
  });
  const [tipSeat, setTipSeat] = useState<string | null>(null);

  // MI 8: Pinch to zoom
  const [mapScale, setMapScale] = useState(1);
  const lastPinchDist = useRef<number | null>(null);

  const handleSelect = useCallback((seat: Seat) => {
    setTipSeat(null);
    setSeats(prev => {
      const currentlySelected = prev.filter(s => s.status === 'selected');

      if (seat.status === 'selected') {
        // Désélectionner
        const next = prev.map(s => s.id === seat.id ? { ...s, status: 'available' as SeatStatus } : s);
        setSelectedSeats(next.filter(s => s.status === 'selected').map(s => s.id));
        return next;
      } else {
        // Sélectionner si on n'a pas atteint la limite
        if (currentlySelected.length < numPassengers) {
          const next = prev.map(s => s.id === seat.id ? { ...s, status: 'selected' as SeatStatus } : s);
          setSelectedSeats(next.filter(s => s.status === 'selected').map(s => s.id));
          return next;
        }
      }
      return prev;
    });
  }, [setSelectedSeats, numPassengers]);

  const handleLong = useCallback((seat: Seat) => {
    setTipSeat(seat.id);
    setTimeout(() => setTipSeat(null), 3500);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (lastPinchDist.current !== null) {
        const ratio = dist / lastPinchDist.current;
        setMapScale(prev => Math.min(3.5, Math.max(0.75, prev * ratio)));
      }
      lastPinchDist.current = dist;
    }
  }, []);
  const handleTouchEnd = useCallback(() => { lastPinchDist.current = null; }, []);

  const selectedSeats = seats.filter(s => s.status === 'selected');
  const seatTotal = selectedSeats.reduce((sum, seat) => sum + seat.price, total);
  const anySelected = selectedSeats.length > 0;
  const showPrices = mapScale >= 1.4;
  const typeLabel = (t: SeatType) => ({ premium: 'Première rangée', legroom: "Plus d'espace", forward: "À l'avant", std_fwd: 'Standard avant', standard: 'Standard' }[t]);

  return (
    <div style={{ height: '100%', fontFamily: "'Nunito', system-ui, sans-serif" }} className="flex flex-col overflow-hidden bg-[#F5F5F5]">
      <TransaviaHeader onBack={() => navigate('/poids-bagage')} />

      <div className="flex-1 overflow-y-auto" style={{ minHeight: 0 }}
        onClick={() => setTipSeat(null)}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Title */}
        <div className="bg-white px-4 pt-3 pb-2">
          <p style={{ fontSize: 20, fontWeight: 700, color: '#222' }}>Où voulez-vous être assis ?</p>
        </div>

        {/* Info */}
        <div className="mx-3 mt-2 bg-white rounded-xl border border-[#DDD] px-4 py-3">
          <p style={{ fontSize: 13, color: '#6A6A6A', lineHeight: '18px' }}>
            {numPassengers > 1
              ? `Sélectionnez ${numPassengers} sièges (${selectedSeats.length}/${numPassengers} sélectionnés). Prix plus élevé après paiement.`
              : 'Réservez maintenant. Prix plus élevé après paiement. Sans réservation, siège attribué aléatoirement.'}
          </p>
          {!showPrices && (
            <p style={{ fontSize: 11, color: '#140D8A', marginTop: 4 }}>🔍 Pincez pour zoomer et voir les tarifs</p>
          )}
        </div>

        {/* Légende */}
        <div className="mx-3 mt-2 bg-white rounded-xl border border-[#DDD] px-3 py-2">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '4px 8px' }}>
            <LegendDot type="premium"  label="1ère rangée 27€" />
            <LegendDot type="forward"  label="À l'avant 19€" />
            <LegendDot type="legroom"  label="+espace 19€" />
            <LegendDot type="std_fwd"  label="Std avant 14€" />
            <LegendDot type="standard" label="Standard 11€" />
            <LegendDot type="occupied" label="Indisponible" />
          </div>
        </div>

        {/* Zoom indicator */}
        <AnimatePresence>
          {mapScale > 1.08 && (
            <motion.div className="mx-3 mt-2 flex items-center gap-2 bg-[#EEF0FF] rounded-xl px-3 py-2"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <span style={{ fontSize: 11, color: '#140D8A', fontWeight: 600 }}>
                Zoom {mapScale.toFixed(1)}× {showPrices ? '— Tarifs visibles ✓' : ''}
              </span>
              <button onClick={() => setMapScale(1)}
                style={{ marginLeft: 'auto', fontSize: 11, color: '#E20076', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>
                Réinitialiser
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── SEATMAP ── */}
        <div style={{ margin: '8px 0', overflow: 'hidden', background: 'linear-gradient(180deg, #141040 0%, #0D0A30 100%)' }}>
          <div style={{ transform: `scale(${mapScale})`, transformOrigin: 'top center', transition: 'transform 0.05s', paddingTop: 10, paddingBottom: 16 }}>

            {/* AVANT */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <svg width="12" height="12" viewBox="0 0 20.016 20.016" fill="none">
                <path d={svgPaths.p3152cf90} fill="#00AB61" />
              </svg>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.45)', fontWeight: 700, letterSpacing: 2 }}>AVANT</span>
            </div>

            {/* Colonnes */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
              {['A','B','C'].map(c => (
                <div key={c} style={{ width: 36, textAlign: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.55)', fontWeight: 600 }}>{c}</span>
                </div>
              ))}
              <div style={{ width: 28, flexShrink: 0 }} />
              {['D','E','F'].map(c => (
                <div key={c} style={{ width: 36, textAlign: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.55)', fontWeight: 600 }}>{c}</span>
                </div>
              ))}
            </div>

            {/* Rangées */}
            {Array.from({ length: ROWS }).map((_, ri) => {
              const row = ri + 1;
              const rowSeats = seats.filter(s => s.row === row);
              const L = rowSeats.filter(s => ['A','B','C'].includes(s.col));
              const R = rowSeats.filter(s => ['D','E','F'].includes(s.col));
              return (
                <div key={row} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 2 }}>
                  {L.map(s => (
                    <SeatCell key={s.id} seat={s} isSelected={s.status === 'selected'}
                      anySelected={anySelected} onSelect={handleSelect} onLongPress={handleLong}
                      showTip={tipSeat === s.id} showPrices={showPrices} />
                  ))}
                  <div style={{ width: 28, textAlign: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>{row}</span>
                  </div>
                  {R.map(s => (
                    <SeatCell key={s.id} seat={s} isSelected={s.status === 'selected'}
                      anySelected={anySelected} onSelect={handleSelect} onLongPress={handleLong}
                      showTip={tipSeat === s.id} showPrices={showPrices} />
                  ))}
                </div>
              );
            })}

            {/* ARRIÈRE */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontWeight: 700, letterSpacing: 2 }}>ARRIÈRE</span>
            </div>
          </div>
        </div>

        <div style={{ height: 8 }} />
      </div>

      {/* ── STICKY SEAT INFO (MI 9) — entre scroll et bottom bar ── */}
      <AnimatePresence>
        {selectedSeats.length > 0 && (
          <motion.div
            className="shrink-0 z-20 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          >
            <div style={{ background: '#140D8A', borderTop: '1px solid #0A0860' }}>
              {selectedSeats.map((seat, idx) => {
                const passenger = passengers[idx] || { prenom: 'Passager', nom: String(idx + 1) };
                const passengerName = `${passenger.prenom} ${passenger.nom}`.toUpperCase().trim() || `PASSAGER ${idx + 1}`;
                return (
                  <div key={seat.id} className="flex items-center justify-between px-4 py-2.5" style={{ borderBottom: idx < selectedSeats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                    <div className="flex items-center gap-3">
                      {/* Miniature siège */}
                      <div className="shrink-0">
                        <SeatSVG type={seat.type} occupied={false} selected={true} />
                      </div>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 700, color: 'white', lineHeight: '18px' }}>
                          {passengerName}
                        </p>
                        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', lineHeight: '16px' }}>
                          {typeLabel(seat.type)} · Siège {seat.id}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p style={{ fontSize: 18, fontWeight: 700, color: 'white' }}>
                        {seat.price},00 €
                      </p>
                      <button
                        onClick={() => handleSelect(seat)}
                        style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                        Changer
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── BOTTOM BAR ── */}
      <div className="shrink-0 bg-white border-t border-[#DDD] z-20">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px' }}>
          <div>
            <p style={{ fontSize: 12, color: '#666' }}>Total</p>
            <p style={{ fontSize: 18, fontWeight: 700, color: '#222' }}>{seatTotal.toFixed(2).replace('.', ',')} €</p>
          </div>
          <motion.button
            onClick={() => navigate('/confirmation')}
            style={{ background: '#E20076', color: 'white', border: 'none', borderRadius: 999, display: 'flex', alignItems: 'center', gap: 8, padding: '12px 24px', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}
            whileTap={{ scale: 0.95 }}>
            Suivant
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M14.373 8.872C14.764 8.472 14.764 7.824 14.373 7.424L9.19 2.115C8.8 1.715 8.167 1.715 7.777 2.115L7.305 2.597C6.915 3.001 6.915 3.642 7.305 4.045L9.979 6.783H2.333C1.781 6.783 1.333 7.241 1.333 7.807V8.489C1.333 9.055 1.781 9.513 2.333 9.513H9.978L7.305 12.251C6.914 12.654 6.914 13.295 7.305 13.699L7.777 14.181C8.167 14.581 8.8 14.581 9.19 14.181L14.373 8.872Z" fill="white" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}