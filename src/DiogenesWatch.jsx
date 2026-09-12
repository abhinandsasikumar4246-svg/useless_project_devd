import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SmartwatchChassis } from './components/SmartwatchChassis';
import { ExistentialCountdown } from './components/ExistentialCountdown';
import { MetricStonewall } from './components/MetricStonewall';
import { SarcasticNotification } from './components/SarcasticNotification';
import { SarcasticInterceptorModal } from './components/SarcasticInterceptorModal';
import { audio } from './utils/audioSynthesizer';
import { CYNICAL_ROASTS, getRandomRoast } from './utils/cynicalRoasts';

const NEAR_MISS_QUOTES = [
  "Movement ceased. Are we dying or just giving up?",
  "Death almost noticed you just now. Keep moving.",
  "The gutter is waiting. Are you getting back up or staying down?",
  "Every second standing still is borrowed from your grave.",
  "Diogenes lived in a barrel and walked barefoot. You are trembling over a jog."
];

/**
 * The Diogenes Watch Coordinator Component (React Edition)
 * Inspired by the Dev.D climax: A near-miss with death snaps the user out of inertia.
 */
export function DiogenesWatch() {
  const [remainingDays, setRemainingDays] = useState(19709.84920184);
  const [currentTime, setCurrentTime] = useState('');
  const [currentMode, setCurrentMode] = useState('death'); // 'death' | 'nearmiss' | 'cynic' | 'goal'
  const [isShaking, setIsShaking] = useState(false);
  const [nearMissVisible, setNearMissVisible] = useState(false);
  const [interceptorVisible, setInterceptorVisible] = useState(false);
  const [nearMissQuote, setNearMissQuote] = useState(NEAR_MISS_QUOTES[0]);
  const [nearMissIndex, setNearMissIndex] = useState(0);
  const [currentRoast, setCurrentRoast] = useState(CYNICAL_ROASTS[0]);
  const [roastIndex, setRoastIndex] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [stillnessSeconds, setStillnessSeconds] = useState(8);

  const stillnessTimerRef = useRef(null);

  // 8-Decimal real-time death clock ticker (20ms interval)
  useEffect(() => {
    const DECREMENT = 0.00000023148148; // 0.02s / 86400
    const interval = setInterval(() => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${h}:${m}:${s}`);

      if (currentMode !== 'goal') {
        setRemainingDays((prev) => prev - DECREMENT);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [currentMode]);

  // Near-Miss Adrenaline Jolt (Violent Shake + Dev.D Quote)
  const triggerNearMiss = useCallback((customQuote = null) => {
    audio.playVibrationHaptic();
    setIsShaking(true);
    setCurrentMode('nearmiss');

    const quote = customQuote || NEAR_MISS_QUOTES[nearMissIndex % NEAR_MISS_QUOTES.length];
    setNearMissQuote(quote);
    setNearMissIndex((prev) => prev + 1);

    setTimeout(() => {
      setIsShaking(false);
      setNearMissVisible(true);
    }, 380);
  }, [nearMissIndex]);

  // Accelerometer Stillness Auto-Detection
  useEffect(() => {
    stillnessTimerRef.current = setInterval(() => {
      if (currentMode === 'death') {
        setStillnessSeconds((prev) => {
          if (prev <= 1) {
            triggerNearMiss();
            return 14;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(stillnessTimerRef.current);
  }, [currentMode, triggerNearMiss]);

  // Reset stillness on movement
  const handleUserMovement = useCallback(() => {
    if (currentMode === 'death') {
      setStillnessSeconds(8);
    }
  }, [currentMode]);

  useEffect(() => {
    window.addEventListener('mousemove', handleUserMovement, { passive: true });
    window.addEventListener('touchstart', handleUserMovement, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleUserMovement);
      window.removeEventListener('touchstart', handleUserMovement);
    };
  }, [handleUserMovement]);

  // Dismiss Near-Miss Alert
  const handleDismissNearMiss = () => {
    audio.playClick();
    setNearMissVisible(false);
    setCurrentMode('death');
    setStillnessSeconds(8);
  };

  // Cynic Interceptor (Locked Stats Click)
  const handleTapLockedStats = () => {
    if (currentMode === 'goal') {
      setCurrentMode('death');
      return;
    }

    audio.playBuzzer();
    const { roast, nextIndex } = getRandomRoast(roastIndex);
    setCurrentRoast(roast);
    setRoastIndex(nextIndex);
    setInterceptorVisible(true);
    setCurrentMode('cynic');
  };

  const handleCloseInterceptor = () => {
    audio.playClick();
    setInterceptorVisible(false);
    setCurrentMode('death');
    setStillnessSeconds(8);
  };

  // Mode Switcher Tabs
  const handleSelectMode = (mode) => {
    setCurrentMode(mode);
    setNearMissVisible(false);
    setInterceptorVisible(false);

    if (mode === 'death') {
      audio.playClick();
      setStillnessSeconds(8);
    } else if (mode === 'nearmiss') {
      triggerNearMiss();
    } else if (mode === 'cynic') {
      handleTapLockedStats();
    } else if (mode === 'goal') {
      audio.playUnlock();
    }
  };

  // Toggle Sound
  const handleToggleSound = () => {
    const nextVal = !soundEnabled;
    setSoundEnabled(nextVal);
    audio.setEnabled(nextVal);
  };

  return (
    <div className="min-h-screen bg-[#050507] text-neutral-200 flex flex-col items-center justify-center p-3 sm:p-6 select-none font-mono">
      {/* Film grain vignette backdrop */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-[#060608] to-[#020203] -z-10" />

      {/* Header */}
      <header className="w-full max-w-md flex items-center justify-between mb-2">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            <span>The Diogenes Watch</span>
          </div>
          <span className="text-[9px] text-neutral-500 uppercase tracking-tight">
            Useless Projects Hackathon // Dev.D Edition
          </span>
        </div>

        <button
          onClick={handleToggleSound}
          type="button"
          className="text-[10px] px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span>{soundEnabled ? '🔊' : '🔇'}</span>
          <span>{soundEnabled ? 'HAPTICS ON' : 'MUTED'}</span>
        </button>
      </header>

      {/* Mode Selector Tabs */}
      <nav className="w-full max-w-md grid grid-cols-4 gap-1.5 bg-[#0f1013] border border-neutral-800 rounded-lg p-1 mb-3">
        {[
          { id: 'death', label: '1. Death Clock' },
          { id: 'nearmiss', label: '2. Near-Miss' },
          { id: 'cynic', label: '3. Cynic Roast' },
          { id: 'goal', label: '4. Goal Met' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleSelectMode(tab.id)}
            type="button"
            className={`py-1.5 text-[10px] font-bold uppercase tracking-tight rounded transition-all flex flex-col items-center gap-0.5 ${
              currentMode === tab.id
                ? 'bg-[#1f2027] text-white border border-neutral-700 shadow-md'
                : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            <span
              className={`w-1 h-1 rounded-full ${
                currentMode === tab.id ? 'bg-red-600' : 'bg-transparent'
              }`}
            />
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>

      {/* Smartwatch Hardware */}
      <SmartwatchChassis
        isVibrating={isShaking}
        onCrownClick={() => triggerNearMiss()}
        onPusherClick={handleTapLockedStats}
      >
        {/* Top Arc Status */}
        <div className="relative z-10 w-full pt-1 flex items-center justify-between text-[10px] text-neutral-500 font-mono tracking-wider">
          <span className="text-neutral-300 font-semibold">{currentTime || '22:31:28'}</span>
          <span className="text-red-500 font-bold text-[9px] tracking-widest">
            MEMENTO MORI
          </span>
        </div>

        {/* The Existential Death Clock (8 Decimals) */}
        <ExistentialCountdown
          remainingDays={remainingDays}
          goalReached={currentMode === 'goal'}
        />

        {/* Metric Gate Card */}
        <MetricStonewall
          goalReached={currentMode === 'goal'}
          onClickLocked={handleTapLockedStats}
          steps={10482}
        />

        {/* Dev.D Near-Miss Notification Card */}
        <SarcasticNotification
          isVisible={nearMissVisible}
          onDismiss={handleDismissNearMiss}
          copy={nearMissQuote}
        />

        {/* Cynic Interceptor Roast Modal */}
        <SarcasticInterceptorModal
          isOpen={interceptorVisible}
          roast={currentRoast}
          onClose={handleCloseInterceptor}
        />
      </SmartwatchChassis>

      {/* Stillness Status Bar */}
      <div className="w-full max-w-md flex items-center justify-between text-[9.5px] text-neutral-500 bg-[#0b0c0f] border border-neutral-800 rounded p-2 mt-2">
        <span>
          Accelerometer Sensor:{' '}
          <strong className="text-amber-400">
            {currentMode === 'goal'
              ? 'Disarmed (Goal Met)'
              : `${stillnessSeconds}s until stillness shock`}
          </strong>
        </span>
        <span className="text-neutral-400">
          Mode: <strong className="text-white uppercase">{currentMode}</strong>
        </span>
      </div>
    </div>
  );
}
export default DiogenesWatch;
