import { useState } from 'react';
import { useNavigate } from 'react-router';
import { TransaviaHeader } from '../components/TransaviaLogo';
import { useBooking } from '../context/BookingContext';

const DESTINATIONS = [
  { from: 'Paris (Orly)', to: 'Marrakech' },
  { from: 'Paris (Orly)', to: 'Porto' },
  { from: 'Paris (CDG)', to: 'Berlin' },
  { from: 'Lyon', to: 'Amsterdam' },
];

export default function HomePage() {
  const navigate = useNavigate();
  const { setNumPassengers } = useBooking();
  const [from, setFrom] = useState('Paris (Orly)');
  const [to, setTo] = useState('Marrakech');
  const [dateAller, setDateAller] = useState('15/06/2026');
  const [dateRetour, setDateRetour] = useState('22/06/2026');
  const [passengers, setPassengersState] = useState('2 Adultes');

  const handleSearch = () => {
    const n = parseInt(passengers) || 2;
    setNumPassengers(n);
    navigate('/choix-du-vol');
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Nunito', system-ui, sans-serif" }}>
      {/* Header unifié — pas de × sur l'accueil */}
      <TransaviaHeader />

      {/* Titre sous le header */}
      <div className="bg-[#00AB61] px-6 pb-6">
        <h1 className="text-white text-2xl font-bold">Où voulez-vous aller ?</h1>
      </div>

      {/* Tabs */}
      <div className="bg-[#00AB61] pb-4 px-4">
        <div className="bg-[#EBEBEB] rounded-2xl p-1 flex gap-1">
          <button className="flex-1 bg-white rounded-xl py-3 flex items-center justify-center gap-1 shadow-sm">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2.21 9.126L3.304 12.709C3.369 12.919 3.368 13.145 3.303 13.356L2.21 16.852C2.125 17.123 2.173 17.419 2.34 17.649C2.506 17.879 2.771 18.018 3.055 18.022L3.547 18.027C3.854 18.03 4.141 17.878 4.312 17.623L5.937 15.137C6.032 14.991 6.201 14.912 6.374 14.934L9.624 15.18C10.135 15.253 10.386 15.753 10.386 16.252L9.071 23.272C9.044 23.403 9.078 23.539 9.161 23.643C9.245 23.748 9.37 23.809 9.504 23.812L10.985 23.833C11.328 23.839 11.644 23.646 11.795 23.338L15.706 15.452C15.784 15.3 15.939 15.205 16.109 15.205C21.544 15.209 23.832 15.18 23.831 12.984C23.829 10.776 21.589 10.798 16.108 10.795C15.939 10.794 15.784 10.698 15.707 10.547L11.796 2.663C11.643 2.356 11.328 2.164 10.985 2.167L9.505 2.186C9.371 2.188 9.246 2.25 9.162 2.354C9.078 2.459 9.046 2.595 9.073 2.726L10.387 9.759C10.387 10.283 10.136 10.753 9.627 10.826L6.375 11.052C6.204 11.077 6.033 10.999 5.939 10.854L4.301 8.360C4.134 8.106 3.85 7.954 3.546 7.955L3.055 7.959C2.771 7.963 2.507 8.101 2.34 8.331C2.174 8.561 2.126 8.855 2.21 9.126Z" fill="#00AB61" />
            </svg>
            <span className="text-[#222] text-sm font-semibold">Vols</span>
          </button>
          <button className="flex-1 py-3 flex items-center justify-center gap-1">
            <span className="text-[#444] text-sm font-semibold">Holidays</span>
          </button>
          <button className="flex-1 py-3 flex items-center justify-center gap-1">
            <span className="text-[#444] text-sm font-semibold">Voitures</span>
          </button>
        </div>
      </div>

      {/* Search Form */}
      <div className="bg-white px-6 pb-8">
        {/* Flight type */}
        <div className="relative mb-3 mt-4">
          <select
            className="w-full h-[50px] bg-white border border-[#8C8C8C] rounded-xl px-3 pr-8 text-[#222] font-semibold text-sm appearance-none"
            value="aller-retour"
            readOnly
          >
            <option>Aller-retour</option>
            <option>Aller simple</option>
          </select>
          <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M1 1L7 7L13 1" stroke="#6A6A6A" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* From/To */}
        <div className="mb-3">
          <div className="border border-[#8C8C8C] rounded-t-xl">
            <div className="relative px-4 pt-6 pb-3">
              <span className="absolute top-2 left-4 text-xs font-semibold text-[#6A6A6A]">De</span>
              <input
                className="w-full text-sm font-semibold text-[#222] outline-none bg-transparent"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Aéroport de départ"
              />
            </div>
          </div>
          <div className="border border-[#8C8C8C] border-t-0 rounded-b-xl">
            <div className="relative px-4 pt-6 pb-3">
              <span className="absolute top-2 left-4 text-xs font-semibold text-[#6A6A6A]">À</span>
              <input
                className="w-full text-sm font-semibold text-[#222] outline-none bg-transparent"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Aéroport d'arrivée"
              />
            </div>
          </div>
        </div>

        {/* Who travels */}
        <div className="mb-3 relative">
          <div className="border border-[#8C8C8C] rounded-xl">
            <div className="relative px-4 pt-6 pb-3">
              <span className="absolute top-2 left-4 text-xs font-semibold text-[#6A6A6A]">Qui voyage ?</span>
              <select
                className="w-full text-sm font-semibold text-[#222] outline-none bg-transparent appearance-none"
                value={passengers}
                onChange={(e) => setPassengersState(e.target.value)}
              >
                <option>1 Adulte</option>
                <option>2 Adultes</option>
                <option>3 Adultes</option>
                <option>4 Adultes</option>
              </select>
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="mb-6 flex gap-0">
          <div className="flex-1 border border-[#8C8C8C] rounded-l-xl">
            <div className="relative px-4 pt-6 pb-3">
              <span className="absolute top-2 left-4 text-xs font-semibold text-[#6A6A6A]">Départ</span>
              <input
                className="w-full text-sm text-[#222] outline-none bg-transparent"
                value={dateAller}
                onChange={(e) => setDateAller(e.target.value)}
                placeholder="Date aller"
              />
            </div>
          </div>
          <div className="flex-1 border border-[#8C8C8C] border-l-0 rounded-r-xl">
            <div className="relative px-4 pt-6 pb-3">
              <span className="absolute top-2 left-4 text-xs font-semibold text-[#6A6A6A]">Retour</span>
              <input
                className="w-full text-sm text-[#222] outline-none bg-transparent"
                value={dateRetour}
                onChange={(e) => setDateRetour(e.target.value)}
                placeholder="Date retour"
              />
            </div>
          </div>
        </div>

        {/* Search button */}
        <button
          onClick={handleSearch}
          className="w-full bg-[#E20076] text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path clipRule="evenodd" fillRule="evenodd" d="M13.3333 12.0833H14.1583L19.1583 17.0833L17.5833 18.6583L12.5833 13.6583V12.8333L12.3083 12.5417C11.2333 13.475 9.8 14.0417 8.20833 14.0417C4.75 14.0417 2 11.2917 2 7.83333C2 4.375 4.75 1.625 8.20833 1.625C11.6667 1.625 14.4167 4.375 14.4167 7.83333C14.4167 9.425 13.85 10.8583 12.9167 11.9333L13.3333 12.0833ZM4.08333 7.83333C4.08333 10.15 5.89167 12 8.20833 12C10.525 12 12.3333 10.15 12.3333 7.83333C12.3333 5.51667 10.525 3.70833 8.20833 3.70833C5.89167 3.70833 4.08333 5.51667 4.08333 7.83333Z" fill="white" />
          </svg>
          Rechercher les vols
        </button>

        {/* Options */}
        <div className="flex gap-6 mt-4 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-8 h-5 bg-[#8C8C8C] rounded-full flex items-center px-0.5">
              <div className="w-4 h-4 bg-white rounded-full shadow" />
            </div>
            <span className="text-xs font-semibold text-[#444] underline">Utiliser des Miles</span>
          </div>
          <span className="text-xs font-semibold text-[#444] underline">Voyage sur mesure</span>
        </div>
      </div>

      {/* Recommended */}
      <div className="px-6 pb-6 bg-[#F5F5F5] pt-6">
        <h2 className="text-lg font-bold text-[#222] mb-4">Nos offres du moment</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
          {[
            { to: 'Marrakech', from: 'Paris', price: 74, emoji: '🇲🇦' },
            { to: 'Porto', from: 'Paris', price: 89, emoji: '🇵🇹' },
            { to: 'Berlin', from: 'Paris', price: 62, emoji: '🇩🇪' },
            { to: 'Lisbonne', from: 'Paris', price: 95, emoji: '🇵🇹' },
          ].map((d, i) => (
            <button
              key={i}
              onClick={handleSearch}
              className="flex-none w-36 bg-white rounded-xl p-3 shadow-sm border border-[#EEE] text-left active:scale-95 transition-transform"
            >
              <span className="text-3xl">{d.emoji}</span>
              <p className="font-bold text-[#222] text-sm mt-1">{d.to}</p>
              <p className="text-xs text-[#666]">depuis {d.from}</p>
              <p className="font-bold text-[#E20076] text-sm mt-1">à partir de {d.price} €</p>
            </button>
          ))}
        </div>
      </div>

      {/* Download app banner */}
      <div className="bg-[#00AB61] p-6 text-white">
        <h3 className="font-bold text-lg mb-2">Téléchargez l'application</h3>
        <p className="text-sm opacity-90 mb-4">Retrouvez tous vos billets directement dans votre poche.</p>
        <div className="flex gap-3">
          <div className="bg-black text-white rounded-lg px-3 py-2 text-xs font-medium">App Store</div>
          <div className="bg-black text-white rounded-lg px-3 py-2 text-xs font-medium">Google Play</div>
        </div>
      </div>
    </div>
  );
}