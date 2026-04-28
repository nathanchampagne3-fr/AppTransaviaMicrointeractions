import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router';
import { TransaviaHeader } from '../components/TransaviaLogo';
import { useBooking } from '../context/BookingContext';
import { motion, AnimatePresence } from 'motion/react';

// MI 3: Validation check icon
function ValidationIcon({ valid, visible }: { valid: boolean; visible: boolean }) {
  if (!visible) return null;
  return (
    <motion.div
      className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center ${valid ? 'bg-[#00AB61]' : 'bg-[#E20076]'}`}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {valid ? (
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <span className="text-white text-xs font-bold leading-none">✕</span>
      )}
    </motion.div>
  );
}

// MI 4: Shake animation
function ShakeField({ shake, children }: { shake: boolean; children: React.ReactNode }) {
  return (
    <motion.div
      animate={shake ? { x: [0, -4, 4, -4, 4, -4, 4, 0] } : {}}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

// MI 5: Input with real-time validation
function ValidatedInput({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  validator,
  hint,
  optional,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  validator?: (v: string) => boolean;
  hint?: string;
  optional?: boolean;
  error?: string | null;
}) {
  const valid = validator ? validator(value) : value.length > 0;
  // Afficher l'icône dès le 1er caractère saisi
  const showCheck = value.length > 0;

  return (
    <div className="mb-5">
      <label className="text-[16px] font-semibold text-[#222] block mb-1">
        {label}
        {optional && <span className="text-xs font-normal text-[#8C8C8C] ml-1">Facultatif</span>}
      </label>
      {hint && <p className="text-[14px] text-[#6A6A6A] mb-1">{hint}</p>}
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full h-[48px] rounded-[12px] border px-[13px] pr-10 text-[16px] bg-white outline-none transition-colors
            ${showCheck ? (valid ? 'border-[#00AB61]' : 'border-[#E20076]') : 'border-[#8C8C8C]'}
            focus:border-[#140D8A]`}
        />
        <ValidationIcon valid={valid} visible={showCheck} />
      </div>
      {error && (
        <p className="text-xs text-[#E20076] mt-1">⚠ {error}</p>
      )}
    </div>
  );
}

const SCANNED_DATA = {
  prenom: 'MARC RICHARD',
  nom: 'BORDENET',
  sexe: 'homme' as const,
  dateNaissance: '10/11/1972',
  numPasseport: '08CY060918',
  typeVoyage: 'Personnel',
  email: 'marc.bordenet@gmail.com',
  telephone: '612345678',
};

export default function InfoPassager() {
  const navigate = useNavigate();
  const { passengerId } = useParams();
  const location = useLocation();
  const { passengers, updatePassenger, numPassengers, total } = useBooking();

  const id = parseInt(passengerId || '1');
  const passenger = passengers[id - 1] || passengers[0];

  const [direction, setDirection] = useState(0);
  const [slideKey, setSlideKey] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingField, setTypingField] = useState('');
  const [shakeField, setShakeField] = useState('');
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const processedScanRef = useRef(false);

  // Détecter si on arrive depuis un scan réussi (state injecté par DetectionPasseport)
  const scannedFromPassport = !!(location.state as { scannedData?: unknown })?.scannedData;

  // Refs pour le scroll automatique vers chaque champ
  const fieldRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToField = useCallback((fieldKey: string) => {
    const el = fieldRefs.current[fieldKey];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  // MI 2: Typewriter fill effect
  const typewriterFill = useCallback(
    async (data: typeof SCANNED_DATA) => {
      setIsTyping(true);
      // Ordre visuel du formulaire : prénom → nom → date → passeport (email/téléphone saisis manuellement)
      const fields: Array<{ key: keyof typeof SCANNED_DATA; field: string }> = [
        { key: 'prenom',        field: 'Prénom' },
        { key: 'nom',           field: 'Nom' },
        { key: 'dateNaissance', field: 'Date de naissance' },
        { key: 'numPasseport',  field: 'N° passeport' },
      ];
      for (const { key, field } of fields) {
        setTypingField(field);
        scrollToField(key);
        const value = String(data[key] ?? '');
        for (let i = 1; i <= value.length; i++) {
          await new Promise((r) => setTimeout(r, 35));
          updatePassenger(id, { [key]: value.slice(0, i) } as Partial<typeof SCANNED_DATA>);
        }
        await new Promise((r) => setTimeout(r, 120));
      }
      updatePassenger(id, { sexe: data.sexe, typeVoyage: data.typeVoyage });
      setTypingField('');
      setIsTyping(false);
    },
    [id, updatePassenger, scrollToField]
  );

  useEffect(() => {
    const scannedData = (location.state as { scannedData?: typeof SCANNED_DATA })?.scannedData;
    if (scannedData && !processedScanRef.current) {
      processedScanRef.current = true;
      typewriterFill(scannedData);
    }
  }, [location.state, typewriterFill]);

  const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const validatePhone = (v: string) => /^\d{8,10}$/.test(v.replace(/\s/g, ''));
  const validateDate = (v: string) => /\d{2}\/\d{2}\/\d{4}/.test(v);

  const handleNext = () => {
    const newErrors: Record<string, string | null> = {};
    if (!passenger.prenom) {
      newErrors.prenom = 'Le prénom est obligatoire';
      setShakeField('prenom');
      setTimeout(() => setShakeField(''), 1000);
    }
    if (!passenger.nom) newErrors.nom = 'Le nom est obligatoire';
    if (id === 1 && !validateEmail(passenger.email)) newErrors.email = 'Format email invalide';
    setErrors(newErrors);

    if (Object.values(newErrors).every((v) => !v)) {
      if (id < numPassengers) {
        setDirection(1);
        setSlideKey((k) => k + 1);
        setTimeout(() => navigate(`/info-passager/${id + 1}`), 50);
      } else {
        navigate('/choix-bagage');
      }
    }
  };

  return (
    // key={String(id)} force un remount complet quand on change de passager → reset de tous les états locaux
    <div key={String(id)} className="min-h-screen bg-[#F5F5F5] flex flex-col" style={{ fontFamily: "'Nunito', system-ui, sans-serif" }}>
      {/* Bouton retour : revenir au passager précédent si id > 1 */}
      <TransaviaHeader onBack={() => id > 1 ? navigate(`/info-passager/${id - 1}`) : navigate('/choix-de-la-formule')} />

      {/* Progress bar — MI 6 */}
      {numPassengers > 1 && (
        <div className="bg-white px-6 py-3 flex items-center gap-3 border-b border-[#DDD]">
          <div className="flex gap-2 flex-1">
            {Array.from({ length: numPassengers }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 h-1.5 rounded-full transition-all duration-500 ${
                  i < id ? 'bg-[#00AB61]' : i === id - 1 ? 'bg-[#140D8A]' : 'bg-[#DDD]'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-[#666] font-semibold">{id}/{numPassengers}</span>
        </div>
      )}

      {/* MI 6: Slide transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`passenger-${id}-${slideKey}`}
          initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="flex-1 overflow-y-auto pb-28"
          ref={scrollContainerRef}
        >
          {/* Title */}
          <div className="bg-white px-6 pt-6 pb-4">
            <h1 className="text-[24px] font-bold text-[#222]">Passagers</h1>
          </div>

          {/* Passenger card */}
          <div className="bg-white mt-px px-4 pb-4">
            <div className="border border-[#DDD] rounded-[12px] overflow-hidden">
              {/* Passenger header with checkbox */}
              <div className="px-4 pt-5 pb-4">
                <div className="flex items-center gap-2 mb-4">
                  {/* Green checkbox Figma style */}
                  <div className="relative w-[22px] h-[22px] bg-[#00AB61] rounded-[4px] shrink-0">
                    <svg className="absolute inset-0 m-auto" width="13" height="13" viewBox="0 0 13.35 13.34" fill="none">
                      <path d="M1 6.5L5 10.5L12 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-[20px] font-bold text-[#222]">Passager {id} (Adulte)</p>
                </div>
                <p className="text-[16px] text-[#222] leading-[24px] mb-5">
                  Ce passager est la personne qui effectue la réservation ? Le numéro de téléphone sera obligatoire.
                </p>

                {/* === BOUTONS SCAN — exactement comme la maquette Figma === */}
                {/* Scanner le passeport — bouton rose plein */}
                <button
                  onClick={() => navigate('/detection-passeport', { state: { passengerId: id } })}
                  className="w-full bg-[#E20076] text-white font-semibold text-[16px] py-3 rounded-[999px] flex items-center justify-center mb-4 active:scale-95 transition-transform"
                >
                  Scanner le passeport
                </button>

                {/* Importer le passeport — ouvre la CAMÉRA (capture="environment") */}
                <label className="w-full bg-white text-[#140D8A] font-semibold text-[16px] py-3 rounded-[999px] flex items-center justify-center border border-[#625DB1] active:scale-95 transition-transform cursor-pointer">
                  Importer le passeport
                  <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    className="hidden"
                    onChange={() => navigate('/detection-passeport', { state: { passengerId: id } })}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Auto-fill status */}
          {isTyping && (
            <div className="mx-4 mt-3 bg-[#E7F9EF] border border-[#AFD9C5] rounded-[12px] p-3 flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-[#00AB61] border-t-transparent rounded-full animate-spin shrink-0" />
              <p className="text-sm text-[#00AB61] font-semibold">Remplissage automatique : {typingField}...</p>
            </div>
          )}
          {!isTyping && scannedFromPassport && passenger.prenom && (
            <div className="mx-4 mt-3 bg-[#E7F9EF] border border-[#AFD9C5] rounded-[12px] p-3 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#00AB61" />
                <path d="M4 8L7 11L12 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-sm text-[#00AB61] font-semibold">✨ Passeport scanné — formulaire pré-rempli</p>
            </div>
          )}

          {/* FORM */}
          <div className="bg-white mt-3 px-6 pt-5 pb-2">
            {/* Sexe */}
            <div className="mb-5">
              <p className="text-[16px] font-semibold text-[#222] mb-3">Sexe</p>
              <div className="flex gap-8">
                {(['homme', 'femme'] as const).map((s) => (
                  <button key={s} onClick={() => updatePassenger(id, { sexe: s })} className="flex items-center gap-2">
                    <div className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-colors ${passenger.sexe === s ? 'border-[#140D8A]' : 'border-[#8C8C8C]'}`}>
                      {passenger.sexe === s && (
                        <motion.div
                          className="w-[11px] h-[11px] rounded-full bg-[#140D8A]"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                        />
                      )}
                    </div>
                    <span className="text-[16px] font-semibold text-[#222]">{s === 'homme' ? 'Homme' : 'Femme'}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Prénom */}
            <div ref={(el) => { fieldRefs.current['prenom'] = el; }}>
              <ShakeField shake={shakeField === 'prenom'}>
                <ValidatedInput
                  label="Prénom"
                  value={passenger.prenom}
                  onChange={(v) => updatePassenger(id, { prenom: v })}
                  placeholder=""
                  validator={(v) => v.length >= 2}
                  hint="Saisissez votre premier prénom tel que mentionné sur votre passeport/carte d'identité."
                  error={errors.prenom}
                />
              </ShakeField>
            </div>

            {/* Nom */}
            <div ref={(el) => { fieldRefs.current['nom'] = el; }}>
              <ValidatedInput
                label="Nom de famille"
                value={passenger.nom}
                onChange={(v) => updatePassenger(id, { nom: v })}
                placeholder=""
                validator={(v) => v.length >= 2}
                hint="Saisissez tous les noms, tels que mentionnés sur le passeport/carte d'identité"
                error={errors.nom}
              />
            </div>

            {/* Date de naissance */}
            <div className="mb-5" ref={(el) => { fieldRefs.current['dateNaissance'] = el; }}>
              <p className="text-[16px] font-semibold text-[#222] mb-1">Date de naissance</p>
              <div className="flex gap-2">
                <div className="w-[80px]">
                  <input
                    value={passenger.dateNaissance.split('/')[0] || ''}
                    onChange={(e) => {
                      const parts = passenger.dateNaissance.split('/');
                      parts[0] = e.target.value;
                      updatePassenger(id, { dateNaissance: parts.join('/') });
                    }}
                    placeholder="Jour"
                    className="w-full h-[48px] rounded-[12px] border border-[#8C8C8C] px-3 text-[16px] bg-white outline-none text-[#8C8C8C] focus:border-[#140D8A] focus:text-[#222]"
                    maxLength={2}
                  />
                </div>
                <div className="w-[80px]">
                  <input
                    value={passenger.dateNaissance.split('/')[1] || ''}
                    onChange={(e) => {
                      const parts = passenger.dateNaissance.split('/');
                      parts[1] = e.target.value;
                      updatePassenger(id, { dateNaissance: parts.join('/') });
                    }}
                    placeholder="Mois"
                    className="w-full h-[48px] rounded-[12px] border border-[#8C8C8C] px-3 text-[16px] bg-white outline-none text-[#8C8C8C] focus:border-[#140D8A] focus:text-[#222]"
                    maxLength={2}
                  />
                </div>
                <div className="flex-1">
                  <input
                    value={passenger.dateNaissance.split('/')[2] || ''}
                    onChange={(e) => {
                      const parts = passenger.dateNaissance.split('/');
                      parts[2] = e.target.value;
                      updatePassenger(id, { dateNaissance: parts.join('/') });
                    }}
                    placeholder="Année"
                    className="w-full h-[48px] rounded-[12px] border border-[#8C8C8C] px-3 text-[16px] bg-white outline-none text-[#8C8C8C] focus:border-[#140D8A] focus:text-[#222]"
                    maxLength={4}
                  />
                </div>
              </div>
            </div>

            {/* Flying Blue */}
            <div className="mb-5">
              <p className="text-[16px] font-semibold text-[#222] mb-0.5">
                Numéro Flying Blue <span className="text-xs font-normal text-[#8C8C8C]">Facultatif</span>
              </p>
              <div className="relative">
                <input
                  value={passenger.flyingBlue}
                  onChange={(e) => updatePassenger(id, { flyingBlue: e.target.value })}
                  placeholder="Par exemple 123456780012"
                  className="w-full h-[48px] rounded-[12px] border border-[#8C8C8C] px-[13px] text-[16px] bg-white outline-none focus:border-[#140D8A] text-[#222]"
                />
              </div>
            </div>
          </div>

          {/* Contact section (passenger 1 only) */}
          {id === 1 && (
            <div className="bg-white mt-3 px-6 pt-5 pb-2">
              <div className="mb-5">
                <p className="text-[16px] text-[#6A6A6A] leading-[24px]">
                  Veuillez saisir le numéro de téléphone portable et l'adresse e-mail de ce passager. Nous pourrons ainsi envoyer un message à tous les passagers de cette réservation en cas de perturbation.
                </p>
              </div>

              <div ref={(el) => { fieldRefs.current['email'] = el; }}>
                <ValidatedInput
                  label="Adresse e-mail"
                  value={passenger.email}
                  onChange={(v) => updatePassenger(id, { email: v })}
                  placeholder="nom@exemple.fr"
                  type="email"
                  validator={validateEmail}
                  error={errors.email}
                />
              </div>

              {/* Phone */}
              <div className="mb-5" ref={(el) => { fieldRefs.current['telephone'] = el; }}>
                <p className="text-[16px] font-semibold text-[#222] mb-1">Numéro de téléphone mobile</p>
                <div className="flex gap-2">
                  {/* Country selector */}
                  <div className="relative w-[80px] shrink-0">
                    <div className="h-[48px] bg-white border border-[#8C8C8C] rounded-[12px] flex items-center justify-between px-3">
                      <span className="text-[16px] text-[#6A6A6A]">France</span>
                    </div>
                  </div>
                  {/* Phone input */}
                  <div className="relative flex-1">
                    <div className="h-[48px] bg-white border border-[#8C8C8C] rounded-[12px] flex items-center px-3">
                      <span className="text-[16px] text-[#6A6A6A] mr-2">+33</span>
                    </div>
                    <input
                      value={passenger.telephone}
                      onChange={(e) => updatePassenger(id, { telephone: e.target.value })}
                      placeholder="612345678"
                      className={`absolute inset-0 bg-transparent pl-[52px] pr-10 text-[16px] text-[#222] outline-none`}
                    />
                    {passenger.telephone && (
                      <ValidationIcon valid={validatePhone(passenger.telephone)} visible />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Passeport number + Type */}
          <div className="bg-white mt-3 px-6 pt-5 pb-2">
            <div ref={(el) => { fieldRefs.current['numPasseport'] = el; }}>
              <ValidatedInput
                label="Numéro de passeport"
                value={passenger.numPasseport}
                onChange={(v) => updatePassenger(id, { numPasseport: v })}
                placeholder=""
                validator={(v) => v.length >= 6}
              />
            </div>

            <div className="mb-5">
              <p className="text-[16px] font-semibold text-[#222] mb-2">Type de voyage</p>
              <div className="flex gap-3">
                {['Personnel', 'Professionnel'].map((t) => (
                  <button
                    key={t}
                    onClick={() => updatePassenger(id, { typeVoyage: t })}
                    className={`flex-1 h-[48px] rounded-[12px] border text-[16px] font-semibold transition-colors ${
                      passenger.typeVoyage === t
                        ? 'border-[#140D8A] bg-[#EEF0FF] text-[#140D8A]'
                        : 'border-[#8C8C8C] text-[#444] bg-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Enregistrer toggle */}
            <div className="flex items-center gap-3 mb-5 py-3">
              <div className="w-[22px] h-[22px] border border-[#8C8C8C] rounded-[4px] flex items-center justify-center">
                <div className="w-3 h-3 bg-[#140D8A] rounded-sm" />
              </div>
              <span className="text-[16px] text-[#222]">Enregistrer</span>
            </div>
          </div>

          {/* Options */}
          <div className="mx-4 mt-3 mb-3 space-y-3">
            {[
              "Vous souhaitez modifier vos informations passager jusqu'à 48h avant le départ ?",
              'Vous voulez des dates de voyage flexibles ?',
              "Besoin d'une assistance spéciale ?",
            ].map((q, i) => (
              <div key={i} className="bg-white rounded-[12px] p-4 border border-[#DDD]">
                <p className="text-sm text-[#222] mb-3">{q}</p>
                <div className="flex gap-2">
                  <button className="text-xs border border-[#8C8C8C] rounded-[8px] px-3 py-2 text-[#444]">Oui, ajouter</button>
                  <button className="text-xs border border-[#8C8C8C] rounded-[8px] px-3 py-2 text-[#444]">Non merci</button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#DDD] px-6 py-3 z-50">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-[#444]">Total</span>
            <p className="text-lg font-bold text-[#222]">{total.toFixed(2).replace('.', ',')} €</p>
          </div>
          <button
            onClick={handleNext}
            disabled={isTyping}
            className="bg-[#E20076] text-white px-6 py-3 rounded-[999px] font-semibold flex items-center gap-2 active:scale-95 transition-transform disabled:opacity-60"
          >
            {id < numPassengers ? 'Passager suivant' : 'Étape suivante'}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14.373 8.872C14.764 8.472 14.764 7.824 14.373 7.424L9.19 2.115C8.8 1.715 8.167 1.715 7.777 2.115L7.305 2.597C6.915 3.001 6.915 3.642 7.305 4.045L9.979 6.783H2.333C1.781 6.783 1.333 7.241 1.333 7.807V8.489C1.333 9.055 1.781 9.513 2.333 9.513H9.978L7.305 12.251C6.914 12.654 6.914 13.295 7.305 13.699L7.777 14.181C8.167 14.581 8.8 14.581 9.19 14.181L14.373 8.872Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}