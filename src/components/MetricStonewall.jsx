import React from 'react';

/**
 * MetricStonewall Component
 * Anti-glance protection module that obscures actual workout metrics until the user
 * achieves the full daily standard (10,000 steps).
 */
export function MetricStonewall({ goalReached = false, onClickLocked, steps = 10482 }) {
  return (
    <div className="relative z-10 w-full pb-1">
      <div
        onClick={goalReached ? undefined : onClickLocked}
        className="group cursor-pointer rounded-lg border border-neutral-800 bg-neutral-950/90 p-2 sm:p-2.5 transition-all hover:border-red-600/70 hover:bg-neutral-900/90 text-center active:scale-[0.98]"
        title={goalReached ? 'Daily standard met' : 'Tap to inspect metrics'}
        role="button"
        tabIndex={0}
      >
        {!goalReached ? (
          /* Locked State */
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-1.5 text-red-500 text-xs font-bold tracking-wider uppercase mb-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 text-red-500 animate-pulse"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>STATISTICS LOCKED</span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-neutral-400 tracking-tight font-mono">
              KEEP MOVING. NO DOPAMINE HERE.
            </p>
            <span className="text-[8px] text-neutral-600 font-mono mt-0.5 group-hover:text-red-400 transition-colors">
              [ TAP FOR GLANCE AUDIT ]
            </span>
          </div>
        ) : (
          /* Unlocked State */
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-1.5 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 text-emerald-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 9.9-1" />
              </svg>
              <span>{steps.toLocaleString()} STEPS</span>
            </div>
            <p className="text-[8px] sm:text-[9px] text-neutral-400 tracking-tight font-mono">
              BARE MINIMUM MET. DO NOT EXPECT A MEDAL.
            </p>
            <span className="text-[7px] text-neutral-500 uppercase tracking-widest font-mono mt-0.5">
              [ PENALTY FREEZE ACTIVATED ]
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
