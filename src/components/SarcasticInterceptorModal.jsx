import React from 'react';

/**
 * SarcasticInterceptorModal Component
 * Delivers cynical roasts when the user attempts to inspect their locked metrics.
 */
export function SarcasticInterceptorModal({ isOpen, roast, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-3 sm:inset-4 z-40 rounded-full bg-black/95 backdrop-blur-md border border-red-800 flex flex-col items-center justify-center p-5 text-center transition-all duration-200 animate-in fade-in zoom-in-95">
      {/* Icon */}
      <div className="w-8 h-8 rounded-full bg-red-950/80 border border-red-700/60 flex items-center justify-center mb-2 text-red-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>

      <div className="text-[10px] text-red-500 font-bold uppercase tracking-widest font-mono">
        INTERCEPTION: UNMET RIGHT
      </div>

      <p className="text-xs sm:text-sm font-mono text-neutral-200 my-3 font-semibold leading-relaxed px-2">
        "{roast}"
      </p>

      <p className="text-[9px] text-neutral-500 font-mono mb-3">
        GLANCES ACCELERATE REGRET. RETURN TO SUFFERING.
      </p>

      <button
        onClick={onClose}
        type="button"
        className="px-4 py-1.5 rounded border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 active:scale-95 text-neutral-300 text-[10px] uppercase font-bold tracking-wider font-mono cursor-pointer transition-colors"
      >
        [ I WILL RUN ]
      </button>
    </div>
  );
}
