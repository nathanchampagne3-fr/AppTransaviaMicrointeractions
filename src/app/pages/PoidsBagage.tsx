import { useState } from 'react';
import { useNavigate } from 'react-router';
import { TransaviaHeader } from '../components/TransaviaLogo';
import { useBooking } from '../context/BookingContext';
import { motion, AnimatePresence } from 'motion/react';

const WEIGHT_PRICES: Record<number, number> = {
  5: 10,
  10: 18,
  15: 25,
  20: 35,
  23: 40,
  26: 48,
  30: 55,
};

const WEIGHTS = [5, 10, 15, 20, 23, 26, 30];

// Couleur de la valise selon le poids
function getBagColor(weight: number): string {
  if (weight <= 10) return '#00AB61';  // vert léger
  if (weight <= 15) return '#2FCC71';  // vert moyen
  if (weight <= 20) return '#E5A800';  // orange
  if (weight <= 23) return '#FF6B00';  // orange foncé
  return '#E20076';                    // rouge/rose — très lourd
}

// Scale de la valise : 0.7 (5kg) → 1.6 (30kg)
function getBagScale(weight: number): number {
  const min = WEIGHTS[0];
  const max = WEIGHTS[WEIGHTS.length - 1];
  const t = (weight - min) / (max - min); // 0 → 1
  return 0.68 + t * 0.92;
}

// SVG valise animée
function AnimatedSuitcase({ weight }: { weight: number }) {
  const scale = getBagScale(weight);
  const color = getBagColor(weight);
  const price = WEIGHT_PRICES[weight];

  return (
    <div className="flex flex-col items-center">
      {/* Conteneur fixe pour la valise — évite le chevauchement du texte "Passager" */}
      <div style={{ height: 170, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
        <motion.div
          animate={{ scale }}
          transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          style={{ transformOrigin: 'center bottom', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            {/* Poignée */}
            <motion.rect
              x="33" y="8" width="34" height="14" rx="7"
              stroke={color} strokeWidth="4.5" fill="none"
              animate={{ stroke: color }}
              transition={{ duration: 0.4 }}
            />
            {/* Corps valise */}
            <motion.rect
              x="10" y="22" width="80" height="65" rx="10"
              animate={{ fill: color }}
              transition={{ duration: 0.4 }}
            />
            {/* Reflet */}
            <rect x="10" y="22" width="80" height="65" rx="10" fill="white" fillOpacity="0.08" />
            {/* Bandes horizontales */}
            <rect x="10" y="44" width="80" height="4" fill="white" fillOpacity="0.18" />
            <rect x="10" y="62" width="80" height="4" fill="white" fillOpacity="0.18" />
            {/* Serrures */}
            <rect x="38" y="52" width="10" height="6" rx="2" fill="white" fillOpacity="0.5" />
            <rect x="52" y="52" width="10" height="6" rx="2" fill="white" fillOpacity="0.5" />
            {/* Roulettes */}
            <circle cx="26" cy="91" r="5" fill="#444" />
            <circle cx="74" cy="91" r="5" fill="#444" />
          </svg>
        </motion.div>
      </div>

      {/* Badge poids + prix */}
      <motion.div
        className="flex items-center gap-3 mt-3"
        layout
      >
        <motion.div
          className="rounded-full px-4 py-1.5 flex items-center gap-1.5"
          animate={{ backgroundColor: color }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-white font-bold text-base">{weight} kg</span>
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.span
            key={price}
            className="text-[#222] font-bold text-base"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
          >
            +{price} €
          </motion.span>
        </AnimatePresence>
      </motion.div>

      {/* Gauge textuelle */}
      <div className="mt-2 flex items-center gap-1">
        {WEIGHTS.map((w) => (
          <motion.div
            key={w}
            className="h-1.5 rounded-full"
            style={{ width: 28 }}
            animate={{
              backgroundColor: w <= weight ? color : '#DDD',
              scaleY: w === weight ? 2 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
      <p className="text-xs text-[#888] mt-1.5">
        {weight <= 10 ? 'Léger 😊' : weight <= 20 ? 'Moyen 🧳' : weight <= 26 ? 'Lourd 💪' : 'Très lourd ⚠️'}
      </p>
    </div>
  );
}

export default function PoidsBagage() {
  const navigate = useNavigate();
  const { numPassengers, total, setTotal } = useBooking();
  const [weights, setWeights] = useState<number[]>(Array(numPassengers).fill(5));

  const setWeight = (pIdx: number, w: number) => {
    const newWeights = [...weights];
    const oldPrice = WEIGHT_PRICES[newWeights[pIdx]];
    newWeights[pIdx] = w;
    const newPrice = WEIGHT_PRICES[w];
    setWeights(newWeights);
    setTotal(total - oldPrice + newPrice);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col" style={{ fontFamily: "'Nunito', system-ui, sans-serif" }}>
      <TransaviaHeader onBack={() => navigate('/choix-bagage')} />

      <div className="flex-1 overflow-y-auto pb-28">
        {/* Promo banner */}
        <div className="bg-[#E7F9EF] border border-[#AFD9C5] rounded-xl mx-4 mt-4 p-3 flex items-start gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
            <path d="M8 1.333C4.318 1.333 1.333 4.318 1.333 8C1.333 11.682 4.318 14.667 8 14.667C11.682 14.667 14.667 11.682 14.667 8C14.667 4.318 11.682 1.333 8 1.333ZM8.667 11.333H7.333V7.333H8.667V11.333ZM8.667 6H7.333V4.667H8.667V6Z" fill="#00AB61" />
          </svg>
          <p className="text-sm text-[#02391E] font-semibold">
            Réservez maintenant votre bagage en soute et économisez jusqu'à 50%. Le prix peut être plus élevé après le paiement de la réservation.
          </p>
        </div>

        {/* Vol aller */}
        <div className="mx-4 mt-4">
          <div className="flex items-center gap-2 mb-3">
            <svg width="20" height="20" viewBox="0 0 26 26" fill="none">
              <path d="M2.21 9.126L3.304 12.709C3.369 12.919 3.368 13.145 3.303 13.356L2.21 16.852C2.125 17.123 2.173 17.419 2.34 17.649C2.506 17.879 2.771 18.018 3.055 18.022L3.547 18.027C3.854 18.03 4.141 17.878 4.312 17.623L5.937 15.137C6.032 14.991 6.201 14.912 6.374 14.934L9.624 15.18C10.135 15.253 10.386 15.753 10.386 16.252L9.071 23.272C9.044 23.403 9.078 23.539 9.161 23.643C9.245 23.748 9.37 23.809 9.504 23.812L10.985 23.833C11.328 23.839 11.644 23.646 11.795 23.338L15.706 15.452C15.784 15.3 15.939 15.205 16.109 15.205C21.544 15.209 23.832 15.18 23.831 12.984C23.829 10.776 21.589 10.798 16.108 10.795C15.939 10.794 15.784 10.698 15.707 10.547L11.796 2.663C11.643 2.356 11.328 2.164 10.985 2.167L9.505 2.186C9.371 2.188 9.246 2.25 9.162 2.354C9.078 2.459 9.046 2.595 9.073 2.726L10.387 9.759C10.387 10.283 10.136 10.753 9.627 10.826L6.375 11.052C6.204 11.077 6.033 10.999 5.939 10.854L4.301 8.360C4.134 8.106 3.85 7.954 3.546 7.955L3.055 7.959C2.771 7.963 2.507 8.101 2.34 8.331C2.174 8.561 2.126 8.855 2.21 9.126Z" fill="#00AB61" />
            </svg>
            <p className="font-bold text-[#222]">Vol aller</p>
            <p className="text-sm text-[#666]">Paris (Orly) → Marrakech</p>
          </div>

          {/* Each passenger */}
          {Array.from({ length: numPassengers }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <p className="font-bold text-[#222]">Passager {i + 1}</p>
                <span className="text-xs text-[#666]">Bagage en soute</span>
              </div>

              {/* === VALISE ANIMÉE === */}
              <AnimatedSuitcase weight={weights[i]} />

              {/* Slider */}
              <div className="relative px-1 mt-2">
                <input
                  type="range"
                  min={0}
                  max={WEIGHTS.length - 1}
                  value={WEIGHTS.indexOf(weights[i])}
                  onChange={(e) => setWeight(i, WEIGHTS[parseInt(e.target.value)])}
                  className="w-full h-2 appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, ${getBagColor(weights[i])} 0%, ${getBagColor(weights[i])} ${(WEIGHTS.indexOf(weights[i]) / (WEIGHTS.length - 1)) * 100}%, #DDD ${(WEIGHTS.indexOf(weights[i]) / (WEIGHTS.length - 1)) * 100}%, #DDD 100%)`,
                    borderRadius: '4px',
                    outline: 'none',
                  }}
                />
                <div className="flex justify-between mt-1">
                  {WEIGHTS.map((w) => (
                    <span key={w} className={`text-xs ${weights[i] === w ? 'font-bold' : 'text-[#999]'}`} style={{ color: weights[i] === w ? getBagColor(weights[i]) : undefined }}>
                      {w}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-sm text-[#666]">
                <span>Total aller</span>
                <motion.span
                  key={WEIGHT_PRICES[weights[i]]}
                  className="font-bold text-[#222]"
                  initial={{ scale: 1.3, opacity: 0.7 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  {WEIGHT_PRICES[weights[i]]} €
                </motion.span>
              </div>
            </div>
          ))}
        </div>

        {/* Special bags */}
        <div className="mx-4 mt-2 bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="font-bold text-[#222] text-center mb-2">Emporter des équipements de sport ou autres bagages spéciaux ?</h3>
        </div>

        {/* Checkbox */}
        <div className="mx-4 mt-3 flex items-start gap-3 p-4 bg-white rounded-2xl">
          <div className="w-5 h-5 border border-[#8C8C8C] rounded flex items-center justify-center shrink-0">
          </div>
          <p className="text-sm text-[#222]">Oui, à l'étape suivante, j'ajoute mes bagages spéciaux.</p>
        </div>
      </div>

      {/* Bottom bar — fixed */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#DDD] px-6 py-3 z-50">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-[#444]">Total</span>
            <p className="font-bold text-[#222]">{total.toFixed(2).replace('.', ',')} €</p>
          </div>
          <motion.button
            onClick={() => navigate('/choix-place')}
            className="bg-[#E20076] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2"
            whileTap={{ scale: 0.95 }}
          >
            Suivant
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14.373 8.872C14.764 8.472 14.764 7.824 14.373 7.424L9.19 2.115C8.8 1.715 8.167 1.715 7.777 2.115L7.305 2.597C6.915 3.001 6.915 3.642 7.305 4.045L9.979 6.783H2.333C1.781 6.783 1.333 7.241 1.333 7.807V8.489C1.333 9.055 1.781 9.513 2.333 9.513H9.978L7.305 12.251C6.914 12.654 6.914 13.295 7.305 13.699L7.777 14.181C8.167 14.581 8.8 14.581 9.19 14.181L14.373 8.872Z" fill="white" /></svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}