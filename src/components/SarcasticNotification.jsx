import React from 'react';

/**
 * SarcasticNotification Component (Dev.D Climax Inspired Near-Miss Alert)
 * Minimalist smartwatch notification card that slides up from the bottom of the watch face
 * following a violent shake animation when stillness is detected mid-jog.
 */
export function SarcasticNotification({
  isVisible,
  onDismiss,
  copy = "Movement ceased. Are we dying or just giving up?",
}) {
  return (
    <div
      className={`absolute inset-x-3.5 sm:inset-x-5 bottom-3.5 sm:bottom-5 z-30 transform transition-transform duration-300 ease-out bg-[#0d0d12] border border-red-700/80 rounded-xl p-3 sm:p-4 shadow-2xl flex flex-col items-center text-center ${
        isVisible ? 'translate-y-0' : 'translate-y-[140%] pointer-events-none'
      }`}
    >
      {/* Near-Miss Status Header */}
      <div className="flex items-center gap-1.5 text-red-500 text-[8.5px] font-bold uppercase tracking-wider mb-1 font-mono">
        <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-ping" />
        <span>STILLNESS DETECTED // NEAR-MISS</span>
      </div>

      {/* Dev.D Near-Miss Copy */}
      <p className="text-[11px] sm:text-[12px] font-mono text-white font-bold leading-snug my-1 px-1 italic">
        "{copy}"
      </p>

      {/* Subtext */}
      <p className="text-[8.5px] text-neutral-500 font-mono mb-2.5">
        Death almost noticed you just now. Seconds will not return.
      </p>

      {/* Dismissal Button */}
      <button
        onClick={onDismiss}
        type="button"
        className="w-full py-1.5 px-3 rounded bg-red-600 hover:bg-red-500 active:scale-95 text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-1 cursor-pointer font-mono"
      >
        <span>Resume Sprinting</span>
        <span className="text-xs">&rarr;</span>
      </button>
    </div>
  );
}
