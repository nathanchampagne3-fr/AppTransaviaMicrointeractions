import { createBrowserRouter, Outlet, useLocation } from 'react-router';
import { BookingProvider } from './context/BookingContext';
import { MobileFrame } from './components/MobileFrame';
import HomePage from './pages/HomePage';
import ChoixDuVol from './pages/ChoixDuVol';
import ChoixDeLaFormule from './pages/ChoixDeLaFormule';
import InfoPassager from './pages/InfoPassager';
import DetectionPasseport from './pages/DetectionPasseport';
import ChoixBagage from './pages/ChoixBagage';
import MesureBagage from './pages/MesureBagage';
import PoidsBagage from './pages/PoidsBagage';
import ChoixPlace from './pages/ChoixPlace';
import Confirmation from './pages/Confirmation';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const el = document.getElementById('phone-screen');
    if (el) el.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <BookingProvider>
      <MobileFrame>
        <ScrollToTop />
        <Outlet />
      </MobileFrame>
    </BookingProvider>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'choix-du-vol', Component: ChoixDuVol },
      { path: 'choix-de-la-formule', Component: ChoixDeLaFormule },
      { path: 'info-passager/:passengerId', Component: InfoPassager },
      { path: 'detection-passeport', Component: DetectionPasseport },
      { path: 'choix-bagage', Component: ChoixBagage },
      { path: 'mesure-bagage', Component: MesureBagage },
      { path: 'poids-bagage', Component: PoidsBagage },
      { path: 'choix-place', Component: ChoixPlace },
      { path: 'confirmation', Component: Confirmation },
    ],
  },
]);