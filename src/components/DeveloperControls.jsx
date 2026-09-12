import React from 'react';

/**
 * DeveloperControls Component
 * Diagnostic deck to simulate hardware triggers, goal completion, and sarcastic notifications.
 */
export function DeveloperControls({
  goalReached,
  onToggleGoal,
  onTriggerNotification,
  onCycleRoast,
  soundEnabled,
  onToggleSound,
  idleCountdown,
}) {
  return (
    <footer className="mt-4 sm:mt-6 w-full max-w-lg bg-neutral-950 border border-neutral-800 rounded-xl p-3 sm:p-4 shadow-xl z-20 font-mono">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-2.5">
        <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-2 h-2 rounded bg-neutral-600" />
          <span>Developer Diagnostic Deck</span>
        </span>
        <button
          onClick={onToggleSound}
          type="button"
          className="text-[10px] px-2 py-0.5 rounded border border-neutral-700 bg-neutral-900 text-neutral-300 hover:border-neutral-500 transition-colors flex items-center gap-1"
          title="Toggle Web Audio Synthesizer Haptics"
        >
          <span>{soundEnabled ? '🔊' : '🔇'}</span>
          <span>{soundEnabled ? 'AUDIO ON' : 'MUTED'}</span>
        </button>
      </div>

      <!-- Interactive Triggers Grid -->
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {/* Toggle Daily Goal */}
        <button
          onClick={onToggleGoal}
          type="button"
          className="py-2 px-2.5 rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 active:scale-95 text-[11px] text-left text-neutral-200 transition-all flex flex-col justify-center"
        >
          <span className="text-[9px] text-neutral-500 uppercase">Mock Daily Goal</span>
          <span
            className={`font-bold ${
              goalReached ? 'text-emerald-400' : 'text-red-400'
            }`}
          >
            {goalReached ? 'MET (10,482 STEPS)' : 'UNMET (LOCKED)'}
          </span>
        </button>

        {/* Force Vibration & Notification */}
        <button
          onClick={onTriggerNotification}
          type="button"
          className="py-2 px-2.5 rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 active:scale-95 text-[11px] text-left text-neutral-200 transition-all flex flex-col justify-center"
        >
          <span className="text-[9px] text-neutral-500 uppercase">Simulate Inactivity</span>
          <span className="font-bold text-amber-400">VIBRATE & ALERT</span>
        </button>

        {/* Cycle Sarcastic Roast */}
        <button
          onClick={onCycleRoast}
          type="button"
          className="py-2 px-2.5 rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 active:scale-95 text-[11px] text-left text-neutral-200 transition-all flex flex-col justify-center"
        >
          <span className="text-[9px] text-neutral-500 uppercase">Cynic Interceptor</span>
          <span className="font-bold text-white">TEST ROAST</span>
        </button>
      </div>

      <div className="mt-2.5 pt-2 border-t border-neutral-900 text-[10px] text-neutral-500 flex items-center justify-between">
        <span>
          Inactivity Auto-Alert: <span className="text-neutral-300">{idleCountdown}s</span>
        </span>
        <span>Tap crown or pusher for hardware clicks</span>
      </div>
    </footer>
  );
}
