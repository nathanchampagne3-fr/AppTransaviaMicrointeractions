interface BottomBarProps {
  total: number;
  label?: string;
  onNext: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

const FIXED_STYLE: React.CSSProperties = {
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: 390,
};

export function BottomBar({ total, label = 'Suivant', onNext, disabled, children }: BottomBarProps) {
  return (
    <div
      className="fixed bottom-0 bg-white border-t border-[#DDD] px-6 py-3 flex items-center justify-between z-50"
      style={FIXED_STYLE}
    >
      <div className="flex flex-col">
        <span className="text-xs text-[#444]">Total</span>
        <span className="text-lg font-bold text-[#222]">{total.toFixed(2).replace('.', ',')} € <span className="text-xs font-normal text-[#444]">∧</span></span>
        {children}
      </div>
      <button
        onClick={onNext}
        disabled={disabled}
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all active:scale-95
          ${disabled ? 'bg-[#ccc]' : 'bg-[#E20076] hover:bg-[#c5006a]'}`}
      >
        {label}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M14.3733 8.872C14.764 8.472 14.764 7.824 14.3733 7.424L9.19 2.11467C8.8 1.71467 8.16667 1.71467 7.77667 2.11467L7.30533 2.59733C6.91519 3.00116 6.91519 3.64151 7.30533 4.04533L9.97867 6.78267H2.33333C1.78133 6.78267 1.33333 7.24133 1.33333 7.80667V8.48933C1.33333 9.05467 1.78133 9.51267 2.33333 9.51333H9.978L7.30533 12.2507C6.91414 12.6541 6.91414 13.2953 7.30533 13.6987L7.77667 14.1813C8.16667 14.5813 8.8 14.5813 9.19 14.1813L14.3733 8.872" fill="white" />
        </svg>
      </button>
    </div>
  );
}
