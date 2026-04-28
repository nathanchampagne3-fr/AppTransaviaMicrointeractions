import { useState } from 'react';
import { useNavigate } from 'react-router';
import { TransaviaHeader } from '../components/TransaviaLogo';
import { useBooking } from '../context/BookingContext';

const DATES = [
  { label: 'dim. 14 juin', price: 88, available: true },
  { label: 'lun. 15 juin', price: 74, available: true, selected: true },
  { label: 'mar. 16 juin', price: 74, available: true },
];

const FLIGHTS = [
  { dep: '06:25', arr: '08:50', duration: '3h 25min', price: 98, available: 5, selected: true },
  { dep: '07:00', arr: '09:25', duration: '3h 25min', price: 110, available: 5, selected: false },
  { dep: '11:50', arr: '14:15', duration: '3h 25min', price: 98, available: 5, selected: false },
  { dep: '12:50', arr: '15:10', duration: '3h 25min', price: 110, available: 6, selected: false },
  { dep: '19:05', arr: '21:30', duration: '3h 25min', price: 74, available: 3, selected: false, alert: true },
];

export default function ChoixDuVol() {
  const navigate = useNavigate();
  const { setSelectedFlight, total, setTotal, numPassengers } = useBooking();
  const [selectedDate, setSelectedDate] = useState(1);
  const [selectedFlightIdx, setSelectedFlightIdx] = useState(0);

  const handleFlightSelect = (idx: number) => {
    setSelectedFlightIdx(idx);
    const f = FLIGHTS[idx];
    setSelectedFlight({ time: `${f.dep} → ${f.arr}`, price: f.price });
    // Prix × nombre de passagers
    setTotal(f.price * numPassengers);
  };

  const handleNext = () => {
    navigate('/choix-de-la-formule');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col" style={{ fontFamily: "'Nunito', system-ui, sans-serif" }}>
      {/* Header */}
      <TransaviaHeader onBack={() => navigate('/')} />

      {/* Flight summary */}
      <div className="bg-white px-4 py-3 flex items-center justify-between shadow-sm">
        <div>
          <p className="font-bold text-[#222] text-sm">Paris (Orly) - Marrakech</p>
          <div className="flex items-center gap-3 mt-1">
            <div className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 2C8 2.368 7.701 2.667 7.333 2.667H3.667C3.483 2.667 3.333 2.817 3.333 3V11.333C3.333 11.517 3.483 11.667 3.667 11.667H12.333C12.517 11.667 12.667 11.517 12.667 11.333V8C12.667 7.632 12.965 7.333 13.333 7.333H14C14.368 7.333 14.667 7.632 14.667 8V12.333C14.667 13.621 13.621 14.667 12.333 14.667H3.667C2.379 14.667 1.333 13.621 1.333 12.333V3.333C1.333 2.045 2.379 1 3.667 1H7.333C7.701 1 8 1.299 8 1.667V2Z" fill="#444" />
                <path d="M12.5 1.793L14.208 3.5L8.795 8.914C8.595 9.11 8.339 9.207 8 9.207C7.661 9.207 7.405 9.11 7.205 8.914C7.005 8.718 6.793 8.339 6.793 8C6.793 7.661 6.902 7.405 7.097 7.205L12.5 1.793Z" fill="#140D8A" />
              </svg>
              <span className="text-xs text-[#444]">lun. 15 juin</span>
            </div>
            <div className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.74 7.333C2.862 7.333 2.981 7.367 3.087 7.426C3.774 7.804 4.545 8 5.329 8C6.112 8 6.883 7.804 7.57 7.426C7.677 7.367 7.795 7.333 7.917 7.333H8.002C9.474 7.334 10.667 8.528 10.667 10V12C10.667 12.736 10.071 13.333 9.335 13.333H1.332C0.596 13.333 0 12.736 0 12V10C0 8.527 1.193 7.333 2.665 7.333H2.74ZM5.329 0C6.037 0 6.711 0.27 7.217 0.762C7.711 1.255 7.989 1.922 7.993 2.619V4.047C7.998 4.746 7.717 5.416 7.217 5.904C6.711 6.395 6.034 6.669 5.329 6.667C4.624 6.669 3.946 6.395 3.44 5.905C2.947 5.412 2.668 4.744 2.665 4.047V2.62C2.665 1.921 2.934 1.255 3.44 0.763C3.946 0.272 4.624 0 5.329 0Z" fill="#444" />
              </svg>
              <span className="text-xs text-[#444]">2</span>
            </div>
          </div>
        </div>
        <button className="w-8 h-8 bg-white border border-[#625DB1] rounded-full flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M8 2.667H3.667C3.483 2.667 3.333 2.817 3.333 3V11.333C3.333 11.517 3.483 11.667 3.667 11.667H12.333C12.517 11.667 12.667 11.517 12.667 11.333V8C12.667 7.632 12.965 7.333 13.333 7.333H14C14.368 7.333 14.667 7.632 14.667 8V12.333C14.667 13.621 13.621 14.667 12.333 14.667H3.667C2.379 14.667 1.333 13.621 1.333 12.333V3.333C1.333 2.045 2.379 1 3.667 1H7.333C7.701 1 8 1.299 8 1.667V2Z" fill="#140D8A" />
            <path d="M12.499 5.541L8.795 9.245C8.195 9.845 7.895 10.146 7.553 10.385C7.169 10.653 6.746 10.863 6.3 11.007C5.721 11.192 5.433 11.285 5.185 11.2C4.974 11.117 4.804 10.955 4.709 10.749C4.612 10.506 4.689 10.213 4.845 9.629C4.874 9.52 4.906 9.412 4.943 9.306C5.077 8.922 5.259 8.557 5.486 8.219C5.742 7.84 6.073 7.509 6.735 6.847L10.269 3.312C10.294 3.287 10.328 3.273 10.364 3.273C10.399 3.273 10.433 3.287 10.458 3.312L12.499 5.354C12.551 5.406 12.551 5.49 12.499 5.541Z" fill="#140D8A" />
          </svg>
        </button>
      </div>

      {/* Vol type */}
      <div className="bg-white px-4 pt-4 pb-2">
        <div className="flex items-center gap-2 mb-3">
          <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
            <path d="M2.21 9.126L3.304 12.709C3.369 12.919 3.368 13.145 3.303 13.356L2.21 16.852C2.125 17.123 2.173 17.419 2.34 17.649C2.506 17.879 2.771 18.018 3.055 18.022L3.547 18.027C3.854 18.03 4.141 17.878 4.312 17.623L5.937 15.137C6.032 14.991 6.201 14.912 6.374 14.934L9.624 15.18C10.135 15.253 10.386 15.753 10.386 16.252L9.071 23.272C9.044 23.403 9.078 23.539 9.161 23.643C9.245 23.748 9.37 23.809 9.504 23.812L10.985 23.833C11.328 23.839 11.644 23.646 11.795 23.338L15.706 15.452C15.784 15.3 15.939 15.205 16.109 15.205C21.544 15.209 23.832 15.18 23.831 12.984C23.829 10.776 21.589 10.798 16.108 10.795C15.939 10.794 15.784 10.698 15.707 10.547L11.796 2.663C11.643 2.356 11.328 2.164 10.985 2.167L9.505 2.186C9.371 2.188 9.246 2.25 9.162 2.354C9.078 2.459 9.046 2.595 9.073 2.726L10.387 9.759C10.387 10.283 10.136 10.753 9.627 10.826L6.375 11.052C6.204 11.077 6.033 10.999 5.939 10.854L4.301 8.360C4.134 8.106 3.85 7.954 3.546 7.955L3.055 7.959C2.771 7.963 2.507 8.101 2.34 8.331C2.174 8.561 2.126 8.855 2.21 9.126Z" fill="#00AB61" />
          </svg>
          <div>
            <p className="font-bold text-[#222] text-lg">Vol aller</p>
            <div className="flex items-center gap-2 text-sm text-[#444]">
              <span>Paris (Orly)</span>
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M8.77 6.543C9.077 6.243 9.077 5.757 8.77 5.457L4.707 1.475C4.398 1.175 3.908 1.175 3.599 1.475L3.23 1.837C3.083 1.98 3 2.175 3 2.38C3 2.585 3.083 2.78 3.23 2.923L6.37 6L3.23 9.077C3.083 9.22 3 9.415 3 9.62C3 9.825 3.083 10.02 3.23 10.163L3.599 10.525C3.905 10.825 4.401 10.825 4.707 10.525L8.77 6.543Z" fill="#6A6A6A" />
              </svg>
              <span>Marrakech</span>
            </div>
          </div>
        </div>

        {/* Panorama du mois */}
        <button className="w-full border border-[#625DB1] rounded-full py-2 flex items-center justify-center gap-2 mb-3">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path clipRule="evenodd" fillRule="evenodd" d="M5.133 1.333C5.428 1.333 5.667 1.572 5.667 1.867V3.335H10V1.867C10 1.572 10.239 1.333 10.533 1.333H11.467C11.761 1.333 12 1.572 12 1.867V3.335H13.333C14.069 3.335 14.667 3.932 14.667 4.668V13.333C14.667 14.069 14.069 14.667 13.333 14.667H2.667C1.931 14.667 1.333 14.069 1.333 13.333V4.668C1.333 3.932 1.931 3.335 2.667 3.335H3.667V1.867C3.667 1.572 3.906 1.333 4.2 1.333H5.133ZM2.8 7.369C2.726 7.369 2.667 7.428 2.667 7.502V12.667C2.667 13.035 2.965 13.333 3.333 13.333H12.48C12.848 13.333 13.147 13.035 13.147 12.667V7.502C13.147 7.428 13.087 7.369 13.013 7.369H2.8Z" fill="#140D8A" />
          </svg>
          <span className="text-[#140D8A] font-semibold text-sm">Panorama du mois</span>
        </button>
      </div>

      {/* Date selector */}
      <div className="bg-white mb-2 relative flex items-center">
        <button className="w-7 h-[72px] border-r border-[#DDD] flex items-center justify-center text-[#222]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4.465 8.707C4.075 8.316 4.075 7.684 4.465 7.293L9.65 2.107C10.041 1.717 10.673 1.717 11.064 2.107L11.535 2.579C11.723 2.766 11.829 3.021 11.829 3.286C11.829 3.551 11.723 3.806 11.535 3.993L7.529 8L11.535 12.007C11.723 12.194 11.829 12.449 11.829 12.714C11.829 12.979 11.723 13.234 11.535 13.421L11.064 13.893C10.673 14.283 10.041 14.283 9.65 13.893L4.465 8.707Z" fill="#222" /></svg>
        </button>
        <div className="flex flex-1 overflow-hidden">
          {DATES.map((d, i) => (
            <button
              key={i}
              onClick={() => setSelectedDate(i)}
              className={`flex-1 h-[72px] flex flex-col items-center justify-center gap-1 border-r border-[#DDD] last:border-r-0 transition-colors ${selectedDate === i ? 'bg-[#140D8A] text-white' : 'bg-white text-[#222]'}`}
            >
              <span className={`text-xs ${selectedDate === i ? 'text-white' : 'text-[#444]'}`}>{d.label}</span>
              <span className="text-lg font-bold">{d.price} €</span>
            </button>
          ))}
        </div>
        <button className="w-7 h-[72px] flex items-center justify-center text-[#222]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11.694 8.724C12.102 8.324 12.102 7.676 11.694 7.276L6.276 1.967C5.865 1.567 5.21 1.567 4.799 1.967L4.306 2.449C4.111 2.639 4 2.901 4 3.173C4 3.446 4.111 3.707 4.306 3.897L8.493 8L4.306 12.103C4.11 12.293 4 12.554 4 12.827C4 13.099 4.11 13.361 4.306 13.551L4.799 14.033C5.207 14.433 5.868 14.433 6.276 14.033L11.694 8.724Z" fill="#222" /></svg>
        </button>
      </div>

      {/* Flights list */}
      <div className="flex-1 overflow-y-auto">
        {FLIGHTS.map((f, i) => (
          <button
            key={i}
            onClick={() => handleFlightSelect(i)}
            className={`w-full bg-white mb-px px-4 py-4 text-left transition-all ${selectedFlightIdx === i ? 'border-l-4 border-[#00AB61]' : ''}`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#222] text-base">{f.dep}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14.373 8.872C14.764 8.472 14.764 7.824 14.373 7.424L9.19 2.115C8.8 1.715 8.167 1.715 7.777 2.115L7.305 2.597C6.915 3.001 6.915 3.642 7.305 4.045L9.979 6.783H2.333C1.781 6.783 1.333 7.241 1.333 7.807V8.489C1.333 9.055 1.781 9.513 2.333 9.513H9.978L7.305 12.251C6.914 12.654 6.914 13.295 7.305 13.699L7.777 14.181C8.167 14.581 8.8 14.581 9.19 14.181L14.373 8.872Z" fill="#222" />
                </svg>
                <span className="font-bold text-[#222] text-base">{f.arr}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-[#6A6A6A]">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M1.36 5.616L2.033 7.821C2.073 7.95 2.073 8.089 2.033 8.219L1.36 10.371C1.308 10.538 1.337 10.719 1.44 10.861C1.542 11.003 1.705 11.088 1.88 11.091L2.183 11.093C2.371 11.095 2.548 11.002 2.653 10.845L3.653 9.315C3.712 9.226 3.816 9.177 3.923 9.19L5.923 9.341C6.237 9.387 6.391 9.694 6.391 10.001L5.582 14.321C5.566 14.402 5.586 14.486 5.638 14.55C5.689 14.614 5.766 14.652 5.849 14.653L6.76 14.667C6.971 14.67 7.165 14.551 7.259 14.362L9.665 9.509C9.713 9.416 9.809 9.357 9.913 9.357C13.258 9.359 14.666 9.341 14.665 7.99C14.664 6.631 13.285 6.645 9.913 6.643C9.808 6.642 9.713 6.584 9.666 6.491L7.259 1.639C7.165 1.45 6.971 1.332 6.76 1.333L5.849 1.345C5.767 1.347 5.69 1.385 5.638 1.449C5.587 1.513 5.567 1.597 5.583 1.677L6.392 6.005C6.392 6.328 6.237 6.617 5.924 6.662L3.923 6.801C3.818 6.817 3.713 6.769 3.655 6.679L2.647 5.145C2.544 4.988 2.369 4.895 2.182 4.895L1.88 4.898C1.705 4.901 1.542 4.985 1.44 5.127C1.338 5.268 1.308 5.449 1.36 5.616Z" fill="#6A6A6A" /></svg>
                {f.duration}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-xs ${f.alert ? 'text-[#E20076]' : 'text-[#6A6A6A]'}`}>
                {f.alert ? '⚠ ' : ''}{f.available} billet{f.available > 1 ? 's' : ''} disponible{f.available > 1 ? 's' : ''} à ce prix
              </span>
              <span className="font-bold text-[#222] text-lg">{f.price} €</span>
            </div>
            {selectedFlightIdx === i && (
              <div className="mt-2 bg-[#00AB61] rounded-full py-1.5 flex items-center justify-center gap-2">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8.196 14.145C8.035 14.434 7.744 14.627 7.415 14.661C7.086 14.695 6.761 14.566 6.545 14.316L1.577 9.087C1.403 8.885 1.316 8.621 1.336 8.355C1.357 8.089 1.482 7.841 1.685 7.668L2.196 7.231C2.619 6.869 3.256 6.917 3.621 7.338L7.007 10.733L12.182 1.855C12.453 1.369 13.065 1.191 13.554 1.459L14.144 1.782C14.633 2.05 14.811 2.662 14.542 3.149L8.196 14.145Z" fill="white" /></svg>
                <span className="text-white text-sm font-semibold">Choisi</span>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Info */}
      <div className="bg-[#EBF5FF] mx-4 my-3 p-3 rounded-xl flex gap-2">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5">
          <path d="M10.417 7.429C11.107 7.429 11.667 7.989 11.667 8.679V16.25C11.667 16.94 11.107 17.5 10.417 17.5H9.583C8.893 17.5 8.333 16.94 8.333 16.25V8.679C8.333 7.989 8.893 7.429 9.583 7.429H10.417ZM10 2.5C10.92 2.5 11.667 3.247 11.667 4.167C11.667 5.087 10.92 5.833 10 5.833C9.08 5.833 8.333 5.087 8.333 4.167C8.333 3.247 9.08 2.5 10 2.5Z" fill="#140D8A" />
        </svg>
        <p className="text-xs text-[#140D8A]">Pas de frais de réservation ! Les horaires sont indiqués en heures locales. Les prix affichés peuvent varier en fonction de la disponibilité du tarif.</p>
      </div>

      {/* Bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#DDD] px-4 py-3 z-50">
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-sm text-[#444]">Total</span>
            <p className="font-bold text-[#222]">{(FLIGHTS[selectedFlightIdx].price * numPassengers).toFixed(2).replace('.', ',')} €  ∧</p>
          </div>
          <button
            onClick={handleNext}
            className="bg-[#E20076] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 active:scale-95 transition-transform"
          >
            Suivant
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14.373 8.872C14.764 8.472 14.764 7.824 14.373 7.424L9.19 2.115C8.8 1.715 8.167 1.715 7.777 2.115L7.305 2.597C6.915 3.001 6.915 3.642 7.305 4.045L9.979 6.783H2.333C1.781 6.783 1.333 7.241 1.333 7.807V8.489C1.333 9.055 1.781 9.513 2.333 9.513H9.978L7.305 12.251C6.914 12.654 6.914 13.295 7.305 13.699L7.777 14.181C8.167 14.581 8.8 14.581 9.19 14.181L14.373 8.872Z" fill="white" /></svg>
          </button>
        </div>
        <p className="text-xs text-[#E20076]">⚠ 1 billet disponible à ce prix</p>
      </div>
    </div>
  );
}