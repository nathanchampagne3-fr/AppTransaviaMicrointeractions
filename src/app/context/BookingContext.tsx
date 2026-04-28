import React, { createContext, useContext, useState } from 'react';

export interface PassengerInfo {
  id: number;
  prenom: string;
  nom: string;
  sexe: 'homme' | 'femme' | '';
  dateNaissance: string;
  flyingBlue: string;
  email: string;
  indicatif: string;
  telephone: string;
  numPasseport: string;
  typeVoyage: string;
}

export interface BookingState {
  numPassengers: number;
  setNumPassengers: (n: number) => void;
  passengers: PassengerInfo[];
  setPassengers: (p: PassengerInfo[]) => void;
  updatePassenger: (id: number, data: Partial<PassengerInfo>) => void;
  selectedFlight: { time: string; price: number } | null;
  setSelectedFlight: (f: { time: string; price: number } | null) => void;
  selectedFormule: string;
  setSelectedFormule: (f: string) => void;
  selectedBagage: string;
  setSelectedBagage: (b: string) => void;
  baggageWeight: number;
  setBaggageWeight: (w: number) => void;
  selectedSeats: string[];
  setSelectedSeats: (s: string[]) => void;
  total: number;
  setTotal: (t: number) => void;
}

const BookingContext = createContext<BookingState | null>(null);

function createEmptyPassenger(id: number): PassengerInfo {
  return {
    id,
    prenom: '',
    nom: '',
    sexe: '',
    dateNaissance: '',
    flyingBlue: '',
    email: '',
    indicatif: '+33',
    telephone: '',
    numPasseport: '',
    typeVoyage: '',
  };
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [numPassengers, setNumPassengersState] = useState(2);
  const [passengers, setPassengersState] = useState<PassengerInfo[]>([
    createEmptyPassenger(1),
    createEmptyPassenger(2),
  ]);
  const [selectedFlight, setSelectedFlight] = useState<{ time: string; price: number } | null>({
    time: '06:25 → 08:50',
    price: 98,
  });
  const [selectedFormule, setSelectedFormule] = useState('Basic');
  const [selectedBagage, setSelectedBagage] = useState('');
  const [baggageWeight, setBaggageWeight] = useState(5);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  // Prix initial : vol par défaut 98€ × 2 passagers par défaut
  const [total, setTotal] = useState(98 * 2);

  const setNumPassengers = (n: number) => {
    setNumPassengersState(n);
    const newPassengers = Array.from({ length: n }, (_, i) =>
      passengers[i] || createEmptyPassenger(i + 1)
    );
    setPassengersState(newPassengers);
    // Mettre à jour le total proportionnellement au nouveau nombre de passagers
    setTotal((prev) => {
      const pricePerPassenger = prev / numPassengers;
      return Math.round(pricePerPassenger * n * 100) / 100;
    });
  };

  const setPassengers = (p: PassengerInfo[]) => setPassengersState(p);

  const updatePassenger = (id: number, data: Partial<PassengerInfo>) => {
    setPassengersState((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...data } : p))
    );
  };

  return (
    <BookingContext.Provider
      value={{
        numPassengers,
        setNumPassengers,
        passengers,
        setPassengers,
        updatePassenger,
        selectedFlight,
        setSelectedFlight,
        selectedFormule,
        setSelectedFormule,
        selectedBagage,
        setSelectedBagage,
        baggageWeight,
        setBaggageWeight,
        selectedSeats,
        setSelectedSeats,
        total,
        setTotal,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within BookingProvider');
  return ctx;
}