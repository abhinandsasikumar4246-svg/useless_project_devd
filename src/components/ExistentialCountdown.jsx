import React from 'react';

/**
 * ExistentialCountdown Component (The Death Clock)
 * Renders the massive remaining days countdown based on a 75-year lifespan quota,
 * ticking down in real time with high 8-decimal precision to induce existential motivation.
 */
export function ExistentialCountdown({
  remainingDays = 19709.84920184,
  goalReached = false,
}) {
  const formatted = Number(remainingDays).toFixed(8);
  const parts = formatted.split('.');
  const integerPart = parseInt(parts[0], 10).toLocaleString();
  const decimalPart = '.' + (parts[1] || '00000000');

  return (
    <div className="relative z-10 my-auto text-center flex flex-col items-center justify-center w-full px-2">
      {/* Warning Sub-Header */}
      <div className="text-[9px] sm:text-[10px] tracking-[0.22em] text-neutral-500 uppercase font-mono mb-1 flex items-center gap-1.5">
        <span className="text-red-600 font-bold">[!]</span>
        <span>MORTAL ALLOTMENT REMAINING</span>
      </div>

      {/* Massive Brutalist Digits + 8-Decimal Anxiety Ticker */}
      <div className="flex flex-col items-center justify-center line-none">
        <div
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-mono select-none"
          style={{
            textShadow: '0 0 16px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 30, 39, 0.35)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {integerPart}
        </div>
        <div
          className="text-xs sm:text-sm font-bold text-red-500 font-mono tracking-wider mt-1"
          style={{
            fontVariantNumeric: 'tabular-nums',
            textShadow: '0 0 10px rgba(255, 30, 39, 0.5)',
          }}
        >
          {decimalPart}
        </div>
      </div>

      {/* Label: DAYS LEFT */}
      <div className="text-[11px] sm:text-[12px] font-bold tracking-[0.45em] text-neutral-300 uppercase mt-1">
        DAYS LEFT
      </div>

      {/* Quota Formula */}
      <p className="text-[8.5px] sm:text-[9px] text-neutral-500 font-mono mt-1 tracking-tight">
        75-YR LIFESPAN − 21-YR BASELINE
      </p>

      {/* Mortality Penalty Badge */}
      <div
        className={`mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded font-mono text-[8.5px] border ${
          goalReached
            ? 'bg-emerald-950/40 border-emerald-900/40 text-emerald-400'
            : 'bg-red-950/40 border-red-900/40 text-red-400'
        }`}
      >
        <span
          className={`w-1 h-1 rounded-full ${
            goalReached ? 'bg-emerald-500' : 'bg-red-500 animate-ping'
          }`}
        />
        <span>
          {goalReached ? 'PENALTY HALTED: BARE MINIMUM MET' : 'DEPRECIATION: PENALTY ACTIVE'}
        </span>
      </div>
    </div>
  );
}
