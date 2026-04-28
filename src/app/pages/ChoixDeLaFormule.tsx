import { useState } from 'react';
import { useNavigate } from 'react-router';
import { TransaviaHeader } from '../components/TransaviaLogo';
import { useBooking } from '../context/BookingContext';

const FORMULES = [
  {
    id: 'Basic',
    name: 'Basic',
    subtitle: 'Bagage léger',
    price: 98,
    color: '#140D8A',
    badge: null,
    items: [
      { label: 'Bagage à main ●', included: true },
      { label: 'Mini Flying Blue ●', included: true },
    ],
    note: 'Pour une petite escapade avec affaires légères et embarquement prioritaire inclus',
  },
  {
    id: '100',
    name: '100',
    subtitle: null,
    price: 146,
    color: '#00AB61',
    badge: '+ DE VOYAGES POUR LE MÊME TARIF',
    items: [
      { label: 'Bagage à main ●', included: true },
      { label: 'Bagage cabine ●', included: true },
      { label: 'Bagage standard ●', included: true },
      { label: 'Services prioritaires ●', included: true },
      { label: 'Mini Flying Blue ●', included: true },
    ],
    note: 'Sélectionnez vos sièges préférés et voyagez léger avec tout ce dont vous avez besoin',
  },
  {
    id: 'Plus',
    name: 'Plus',
    subtitle: 'Bagage illimité',
    price: 159,
    color: '#7B5AF5',
    badge: null,
    items: [
      { label: 'Bagage à main ●', included: true },
      { label: 'Bagage cabine ●', included: true },
      { label: 'Bagage standard ●', included: true },
      { label: 'Siège ●', included: true },
      { label: 'Changement de vol ●', included: true },
      { label: 'Mini Flying Blue ●', included: true },
    ],
    note: 'Pour voyager en toute liberté avec vos bagages, un siège garanti et la possibilité de modifier votre vol',
  },
  {
    id: 'Max',
    name: 'Max',
    subtitle: 'Tout inclus',
    price: 212,
    color: '#E20076',
    badge: null,
    items: [
      { label: 'Bagage à main ●', included: true },
      { label: 'Bagage cabine ●', included: true },
      { label: 'Bagage(s) en soute ●', included: true },
      { label: 'Siège ●', included: true },
      { label: 'Possibilité de changer ●', included: true },
      { label: 'Changement de destination ●', included: true },
      { label: 'Mini Flying Blue ●', included: true },
    ],
    note: 'La formule la plus complète pour un voyage sans contrainte',
  },
];

export default function ChoixDeLaFormule() {
  const navigate = useNavigate();
  const { setSelectedFormule, setTotal, numPassengers } = useBooking();
  const [selected, setSelected] = useState('Basic');

  const handleSelect = (id: string, price: number) => {
    setSelected(id);
    setSelectedFormule(id);
    setTotal(price * numPassengers);
  };

  const handleNext = () => {
    navigate('/info-passager/1');
  };

  const selectedFormule = FORMULES.find((f) => f.id === selected)!;

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col" style={{ fontFamily: "'Nunito', system-ui, sans-serif" }}>
      <TransaviaHeader onBack={() => navigate('/choix-du-vol')} />

      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-4 pt-6 pb-4">
          <h1 className="text-2xl font-bold text-[#222]">Profitez davantage de votre voyage !</h1>
        </div>

        <div className="flex flex-col gap-3 px-4">
          {FORMULES.map((f) => (
            <div
              key={f.id}
              className={`bg-white rounded-2xl overflow-hidden border-2 transition-all ${
                selected === f.id ? 'border-[#00AB61] shadow-lg' : 'border-transparent shadow-sm'
              }`}
            >
              {f.badge && (
                <div className="bg-[#00AB61] text-white text-xs font-bold px-3 py-1 text-center">
                  {f.badge}
                </div>
              )}
              <div className="p-4">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <span className="font-bold text-[#222] text-xl">{f.name}</span>
                    {f.subtitle && <span className="text-sm text-[#666] ml-2">{f.subtitle}</span>}
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-[#222]">{f.price} €</span>
                    <p className="text-xs text-[#666]">par passager</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 mb-3 mt-3">
                  {f.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: f.color }}>
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-sm text-[#222]">{item.label.replace(' ●', '')}</span>
                    </div>
                  ))}
                </div>
                {f.note && (
                  <p className="text-xs text-[#666] mb-3 italic">{f.note}</p>
                )}
                <button
                  onClick={() => handleSelect(f.id, f.price)}
                  className={`w-full py-3 rounded-full font-semibold text-sm transition-all active:scale-95 ${
                    selected === f.id
                      ? 'bg-[#00AB61] text-white'
                      : 'bg-white text-[#140D8A] border border-[#140D8A]'
                  }`}
                >
                  {selected === f.id ? '✓ Sélectionné' : 'Sélectionner'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#DDD] px-6 py-3 z-50">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-[#444]">Total</span>
            <p className="font-bold text-[#222]">
              {(selectedFormule.price * numPassengers).toFixed(2).replace('.', ',')} €
            </p>
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