import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { TransaviaHeader } from "../components/TransaviaLogo";
import imgPassport from '../../imports/passeport-en-urgence.jpg';
import svgPaths from "../../imports/DetectionPasseport/svg-du75mm4cs3";

type ScanState = "idle" | "scanning" | "success" | "failed";

const SCANNED_DATA = {
  prenom: "MARC RICHARD",
  nom: "BORDENET",
  sexe: "homme" as const,
  dateNaissance: "10/11/1972",
  numPasseport: "08CY060918",
  typeVoyage: "Personnel",
  email: "marc.bordenet@gmail.com",
  telephone: "612345678",
};

export default function DetectionPasseport() {
  const navigate = useNavigate();
  const location = useLocation();
  const passengerId: number =
    (location.state as { passengerId?: number })?.passengerId ??
    1;

  // Passager 2 → cas d'échec simulé
  const willFail = passengerId === 2;

  const [scanState, setScanState] = useState<ScanState>("idle");
  const [progress, setProgress] = useState(0);
  const [scanLineY, setScanLineY] = useState(0);
  const [pressing, setPressing] = useState(false);

  const timerRef = useRef<ReturnType<
    typeof setInterval
  > | null>(null);
  const lineTimerRef = useRef<ReturnType<
    typeof setInterval
  > | null>(null);
  const progressRef = useRef(0);
  const pressingRef = useRef(false);

  // Scan line animation
  useEffect(() => {
    if (scanState === "scanning") {
      let going = true;
      let y = 5;
      lineTimerRef.current = setInterval(() => {
        y += going ? 1.8 : -1.8;
        if (y >= 95) going = false;
        if (y <= 5) going = true;
        setScanLineY(y);
      }, 16);
    } else {
      if (lineTimerRef.current)
        clearInterval(lineTimerRef.current);
    }
    return () => {
      if (lineTimerRef.current)
        clearInterval(lineTimerRef.current);
    };
  }, [scanState]);

  // MI 1: Long press — start
  const startPress = (e: React.PointerEvent) => {
    if (scanState === "success" || scanState === "failed")
      return;
    e.preventDefault();
    pressingRef.current = true;
    setPressing(true);
    setScanState("scanning");
    progressRef.current = 0;
    setProgress(0);

    timerRef.current = setInterval(() => {
      if (!pressingRef.current) return;
      progressRef.current += 100 / 80;
      if (progressRef.current >= 100) {
        progressRef.current = 100;
        setProgress(100);
        clearInterval(timerRef.current!);
        // Passager 2 → échec, sinon succès
        setScanState(willFail ? "failed" : "success");
        setPressing(false);
      } else {
        setProgress(progressRef.current);
      }
    }, 10);
  };

  // MI 1: Long press — stop
  const stopPress = () => {
    if (scanState === "success" || scanState === "failed")
      return;
    pressingRef.current = false;
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setPressing(false);
    setScanState("idle");
    setProgress(0);
    progressRef.current = 0;
  };

  // Retry après échec
  const handleRetry = () => {
    setScanState("idle");
    setProgress(0);
    progressRef.current = 0;
  };

  const handlePreRemplir = () => {
    navigate(`/info-passager/${passengerId}`, {
      state: { scannedData: SCANNED_DATA },
    });
  };

  const handleManualEntry = () => {
    navigate(`/info-passager/${passengerId}`);
  };

  const isDone =
    scanState === "success" || scanState === "failed";

  // Frame stroke color
  const frameStroke =
    scanState === "success"
      ? "#00AB61"
      : scanState === "failed"
        ? "#E20076"
        : "white";

  // Progress ring
  const R = 30.5;
  const circumference = 2 * Math.PI * R;
  const strokeDashoffset =
    circumference - (progress / 100) * circumference;
  const ringColor =
    scanState === "success"
      ? "#00AB61"
      : scanState === "failed"
        ? "#E20076"
        : "#E20076";

  return (
    <div
      className="flex flex-col overflow-hidden bg-black"
      style={{
        height: "100%",
        fontFamily: "'Nunito', system-ui, sans-serif",
      }}
    >
      {/* ── HEADER (nouveau design) ── */}
      <TransaviaHeader
        onBack={() => navigate(`/info-passager/${passengerId}`)}
      />

      {/* ── ZONE CAMÉRA (flex-1) ── */}
      <div className="relative flex-1 overflow-hidden">
        {/* Photo passeport — fond plein */}
        <div className="absolute inset-0">
          <img
            src={imgPassport}
            alt=""
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* ── SCAN FRAME — positionné sur la page de données du passeport ── */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            left: 12,
            top: "40%",
            width: "calc(100% - 24px)",
            height: "54%",
          }}
        >
          {/* Coins Figma */}
          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 358 251.5"
            fill="none"
            preserveAspectRatio="none"
            className="absolute inset-0"
            animate={
              scanState === "success"
                ? { scale: [1, 1.03, 1] }
                : {}
            }
            transition={{ duration: 0.35 }}
          >
            <path
              d={svgPaths.p21d46c00}
              stroke={frameStroke}
              strokeLinecap="round"
              strokeWidth="5"
            />
            <path
              d={svgPaths.p3d9e5a40}
              stroke={frameStroke}
              strokeLinecap="round"
              strokeWidth="5"
            />
            <path
              d={svgPaths.p2051e600}
              stroke={frameStroke}
              strokeLinecap="round"
              strokeWidth="5"
            />
            <path
              d={svgPaths.p17c69ea0}
              stroke={frameStroke}
              strokeLinecap="round"
              strokeWidth="5"
            />
          </motion.svg>

          {/* Ligne de scan */}
          {scanState === "scanning" && (
            <div
              className="absolute left-0 right-0 h-[2px] pointer-events-none"
              style={{
                top: `${scanLineY}%`,
                background:
                  "linear-gradient(90deg, transparent 0%, #E20076 20%, #FF4DB8 50%, #E20076 80%, transparent 100%)",
                boxShadow: "0 0 10px 3px rgba(226,0,118,0.5)",
              }}
            />
          )}

          {/* Overlay succès */}
          <AnimatePresence>
            {scanState === "success" && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center rounded-[8px]"
                style={{ background: "rgba(0,171,97,0.18)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-[56px] h-[56px] bg-[#00AB61] rounded-full flex items-center justify-center shadow-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 18,
                    delay: 0.1,
                  }}
                >
                  <svg
                    width="26"
                    height="20"
                    viewBox="0 0 28 22"
                    fill="none"
                  >
                    <path
                      d="M2 11L9.5 18.5L26 2"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Overlay échec */}
          <AnimatePresence>
            {scanState === "failed" && (
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center rounded-[8px] gap-2"
                style={{ background: "rgba(226,0,118,0.15)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-[56px] h-[56px] bg-[#E20076] rounded-full flex items-center justify-center shadow-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 18,
                    delay: 0.1,
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M3 3L19 19M19 3L3 19"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>
                <motion.p
                  className="text-white text-xs font-bold text-center px-3"
                  style={{
                    textShadow: "0 1px 4px rgba(0,0,0,0.6)",
                  }}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  Passeport non reconnu
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── BOUTON LONG PRESS — masqué après succès/échec ── */}
        <AnimatePresence>
          {!isDone && (
            <motion.div
  className="absolute z-30 flex flex-col items-center"
  style={{ bottom: 36, left: 'calc(50% - 40px)' }}
  initial={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.5 }}
  transition={{ duration: 0.25 }}
>
  <div
    className="relative"
    style={{ width: 64, height: 64 }}
  >
    {/* Progress ring */}
    <svg
      className="absolute inset-0 -rotate-90"
      width="64"
      height="64"
      viewBox="0 0 64 64"
    >
      <circle
        cx="32"
        cy="32"
        r={R}
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="3"
      />
      <motion.circle
        cx="32"
        cy="32"
        r={R}
        fill="none"
        stroke={ringColor}
        strokeWidth="3"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        style={{
          transition: "stroke-dashoffset 0.01s linear",
        }}
      />
    </svg>
    {/* Bouton blanc */}
    <motion.button
      onPointerDown={startPress}
      onPointerUp={stopPress}
      onPointerLeave={stopPress}
      onPointerCancel={stopPress}
      className="absolute inset-0 rounded-full flex items-center justify-center select-none outline-none"
      style={{
        touchAction: "none",
        WebkitUserSelect: "none",
      }}
      animate={{
        backgroundColor: "#FFFFFF",
        borderColor: "#140D8A",
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="rounded-full"
        animate={{
          scale: pressing ? 0.77 : 1,
          backgroundColor: pressing ? "#E20076" : "rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.15 }}
        style={{
          width: 36,
          height: 36,
          border: "3px solid #140D8A",
          borderRadius: '50%',
        }}
      />
    </motion.button>
  </div>
  <motion.p
    className="text-white text-xs text-center mt-2 font-semibold"
    style={{
      textShadow: "0 1px 4px rgba(0,0,0,0.5)",
    }}
    animate={{ opacity: pressing ? 0.7 : 1 }}
  >
    {scanState === "scanning"
      ? "Scan en cours…"
      : "Maintenir appuyé"}
  </motion.p>
</motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* fin zone caméra */}

      {/* ── BOTTOM BAR STICKY ── */}
      <div className="shrink-0 bg-white border-t border-[#DDD] z-30">
        <div
          className="px-6 py-3 flex items-center justify-between"
          style={{ height: 72 }}
        >
          {/* État gauche */}
          <div>
            <p className="text-[12px] text-[#444]">
              Passeport :
            </p>
            <AnimatePresence mode="wait">
              {scanState === "success" && (
                <motion.p
                  key="success"
                  className="text-[17px] font-bold text-[#00AB61]"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  ✓ Détection réussie
                </motion.p>
              )}
              {scanState === "failed" && (
                <motion.p
                  key="failed"
                  className="text-[17px] font-bold text-[#E20076]"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  ✕ Échec de la détection
                </motion.p>
              )}
              {(scanState === "idle" ||
                scanState === "scanning") && (
                <motion.p
                  key="waiting"
                  className="text-[17px] font-bold text-[#222]"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {scanState === "scanning"
                    ? "Analyse…"
                    : "En attente..."}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Bouton droit */}
          <AnimatePresence mode="wait">
            {scanState === "success" && (
              <motion.button
                key="preremplir"
                onClick={handlePreRemplir}
                className="flex items-center gap-2 px-5 py-3 rounded-[999px] font-semibold text-[15px] text-white bg-[#E20076]"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                whileTap={{ scale: 0.96 }}
              >
                Pré-remplir
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d={svgPaths.p31a8a300} fill="white" />
                </svg>
              </motion.button>
            )}

            {scanState === "failed" && (
              <motion.div
                key="failed-actions"
                className="flex gap-2"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
              >
                <button
                  onClick={handleManualEntry}
                  className="px-4 py-2.5 rounded-[999px] font-semibold text-[14px] text-white bg-[#140D8A]"
                >
                  Saisie manuelle
                </button>
              </motion.div>
            )}

            {(scanState === "idle" ||
              scanState === "scanning") && (
              <motion.button
                key="disabled"
                disabled
                className="flex items-center gap-2 px-5 py-3 rounded-[999px] font-semibold text-[15px] text-white bg-[#AAAAAA]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Pré-remplir
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d={svgPaths.p31a8a300} fill="white" />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}