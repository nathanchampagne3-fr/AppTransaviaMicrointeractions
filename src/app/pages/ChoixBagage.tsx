import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { TransaviaHeader } from '../components/TransaviaLogo';
import { useBooking } from '../context/BookingContext';
import { motion, AnimatePresence } from 'motion/react';

const BAGAGES = [
  {
    id: 'main',
    name: '1 bagage à main',
    badge: 'Inclus',
    description: '1 bagage à main par passager\nMax. 40 x 30 x 20 cm\nPlacez-le sous le siège devant vous',
    price: 0,
    icon: '🎒',
  },
  {
    id: 'cabine',
    name: '1 bagage cabine et 1 bagage à main',
    badge: null,
    description: '1 bagage à main (dimensions max. 40 x 30 x 20 cm)\n1 bagage cabine (dimensions max. 55 x 40 x 25 cm)\nMax. 10 kg au total\nEmbarquement prioritaire inclus',
    price: 20,
    icon: '🧳',
  },
];

export default function ChoixBagage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedBagage, setSelectedBagage, total, setTotal } = useBooking();

  const detectedCabine = !!(location.state as { detectedCabine?: boolean })?.detectedCabine;
  const autoAppliedRef = useRef(false);

  // Initialiser la sélection : si on vient de MesureBagage → cabine, sinon état précédent
  const [selected, setSelected] = useState(detectedCabine ? 'cabine' : (selectedBagage || 'main'));
  const [justAutoSelected, setJustAutoSelected] = useState(false);

  // Appliquer le prix automatiquement une seule fois si détection cabine
  useEffect(() => {
    if (detectedCabine && !autoAppliedRef.current) {
      autoAppliedRef.current = true;
      if (selectedBagage !== 'cabine') {
        setSelectedBagage('cabine');
        setTotal(total + 20);
        setJustAutoSelected(true);
        setTimeout(() => setJustAutoSelected(false), 2000);
      }
    }
  }, []); // eslint-disable-line

  const handleSelect = (id: string) => {
    if (id === selected) return;
    const prev = BAGAGES.find(b => b.id === selected)!;
    const next = BAGAGES.find(b => b.id === id)!;
    setSelected(id);
    setSelectedBagage(id);
    setTotal(total - prev.price + next.price);
  };

  const handleMesurer = () => {
    navigate('/mesure-bagage');
  };

  const handleNext = () => {
    navigate('/poids-bagage');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col" style={{ fontFamily: "'Nunito', system-ui, sans-serif" }}>
      <TransaviaHeader onBack={() => navigate(-1)} />

      <div className="flex-1 overflow-y-auto pb-28">
        <div className="px-4 pt-5 pb-2">
          <h1 className="text-2xl font-bold text-[#222]">Bagages cabine</h1>
          <p className="text-base font-bold text-[#222] mt-4 mb-4">Voici ce que vous emportez à bord</p>
        </div>

        {/* Measure CTA — MI 7 */}
        <div className="px-4 mb-4">
          <motion.button
            onClick={handleMesurer}
            className="w-full bg-[#E20076] text-white font-semibold py-4 rounded-full flex items-center justify-center gap-3 shadow-lg"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M21 6H3C2.448 6 2 6.448 2 7v10c0 .552.448 1 1 1h18c.552 0 1-.448 1-1V7c0-.552-.448-1-1-1z" stroke="white" strokeWidth="2" />
              <path d="M6 10v4M9 11v2M12 10v4M15 11v2M18 10v4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Mesurer mon bagage
          </motion.button>
        </div>

        {/* Auto-detected banner */}
        <AnimatePresence>
          {justAutoSelected && (
            <motion.div
              className="mx-4 mb-4 bg-[#E7F9EF] border border-[#AFD9C5] rounded-[12px] p-3 flex items-center gap-2"
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#00AB61" />
                <path d="M4 8L7 11L12 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-sm text-[#00AB61] font-semibold">Valise cabine détectée — sélectionnée automatiquement</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Baggage options */}
        <div className="px-4 flex flex-col gap-3">
          {BAGAGES.map((b) => (
            <motion.button
              key={b.id}
              onClick={() => handleSelect(b.id)}
              className={`w-full bg-white rounded-2xl p-4 text-left border-2 transition-all ${
                selected === b.id ? 'border-[#00AB61]' : 'border-transparent shadow-sm'
              }`}
              whileTap={{ scale: 0.99 }}
              animate={b.id === 'cabine' && justAutoSelected ? { scale: [1, 1.02, 1] } : {}}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-start gap-3">
                {/* Radio */}
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  selected === b.id ? 'border-[#00AB61]' : 'border-[#8C8C8C]'
                }`}>
                  {selected === b.id && (
                    <motion.div
                      className="w-3 h-3 rounded-full bg-[#00AB61]"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                    />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-[#222] text-sm">{b.name}</p>
                    <div className="flex items-center gap-2">
                      {/* Badge +20€ pour cabine sélectionné */}
                      <AnimatePresence>
                        {b.id === 'cabine' && selected === 'cabine' && (
                          <motion.span
                            className="text-xs font-bold text-[#E20076] bg-[#FFE8F3] px-2 py-0.5 rounded-full"
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.7 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                          >
                            +20 €
                          </motion.span>
                        )}
                      </AnimatePresence>
                      <span className="text-lg">{b.icon}</span>
                    </div>
                  </div>
                  {b.badge && (
                    <span className="inline-block bg-[#E7F9EF] text-[#00AB61] text-xs font-semibold px-2 py-0.5 rounded mt-1 mb-2">
                      {b.badge}
                    </span>
                  )}
                  <div className="mt-2">
                    {b.description.split('\n').map((line, i) => (
                      <p key={i} className="text-sm text-[#444]">{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Info */}
        <div className="mx-4 mt-4 flex items-start gap-2 p-3 bg-[#F0F0F0] rounded-xl">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5">
            <path d="M10.417 7.429C11.107 7.429 11.667 7.989 11.667 8.679V16.25C11.667 16.94 11.107 17.5 10.417 17.5H9.583C8.893 17.5 8.333 16.94 8.333 16.25V8.679C8.333 7.989 8.893 7.429 9.583 7.429H10.417ZM10 2.5C10.92 2.5 11.667 3.247 11.667 4.167C11.667 5.087 10.92 5.833 10 5.833C9.08 5.833 8.333 5.087 8.333 4.167C8.333 3.247 9.08 2.5 10 2.5Z" fill="#6A6A6A" />
          </svg>
          <p className="text-xs text-[#6A6A6A]">Plus d'informations concernant le transport des bagages cabine</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#DDD] px-6 py-3 z-50">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-[#444]">Total</span>
            <p className="font-bold text-[#222]">{total.toFixed(2).replace('.', ',')} €</p>
          </div>
          <button
            onClick={handleNext}
            className="bg-[#E20076] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 active:scale-95 transition-transform"
          >
            Suivant
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14.373 8.872C14.764 8.472 14.764 7.824 14.373 7.424L9.19 2.115C8.8 1.715 8.167 1.715 7.777 2.115L7.305 2.597C6.915 3.001 6.915 3.642 7.305 4.045L9.979 6.783H2.333C1.781 6.783 1.333 7.241 1.333 7.807V8.489C1.333 9.055 1.781 9.513 2.333 9.513H9.978L7.305 12.251C6.914 12.654 6.914 13.295 7.305 13.699L7.777 14.181C8.167 14.581 8.8 14.581 9.19 14.181L14.373 8.872Z" fill="white" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
