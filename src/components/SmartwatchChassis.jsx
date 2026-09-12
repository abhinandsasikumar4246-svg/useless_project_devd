import React from 'react';

/**
 * SmartwatchChassis Component
 * Simulates a physical circular smartwatch housing with realistic matte titanium bezel,
 * tactile crown/pusher buttons, strap contours, and hardware shake/vibration physics.
 */
export function SmartwatchChassis({
  children,
  isVibrating,
  onCrownClick,
  onPusherClick,
}) {
  return (
    <div className="relative flex items-center justify-center my-4 select-none">
      {/* Top Silicone Strap Silhouette */}
      <div className="absolute -top-16 sm:-top-20 w-36 sm:w-44 h-24 bg-gradient-to-b from-[#111114] via-[#1a1b20] to-[#121316] rounded-t-xl border-t border-x border-neutral-800/80 shadow-2xl flex flex-col justify-end items-center pb-2 pointer-events-none z-0">
        <div className="w-28 h-1 bg-neutral-900 rounded mb-1.5" />
        <div className="w-28 h-1 bg-neutral-900 rounded mb-1.5" />
        <div className="w-28 h-1 bg-neutral-900 rounded" />
      </div>

      {/* Bottom Silicone Strap Silhouette */}
      <div className="absolute -bottom-16 sm:-bottom-20 w-36 sm:w-44 h-24 bg-gradient-to-t from-[#111114] via-[#1a1b20] to-[#121316] rounded-b-xl border-b border-x border-neutral-800/80 shadow-2xl flex flex-col justify-start items-center pt-2 pointer-events-none z-0">
        <div className="w-28 h-1 bg-neutral-900 rounded mt-1.5" />
        <div className="w-28 h-1 bg-neutral-900 rounded mt-1.5" />
        <div className="w-28 h-1 bg-neutral-900 rounded" />
      </div>

      {/* Watch Casing with Bezel */}
      <div
        className={`relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-tr from-[#16171a] via-[#23242a] to-[#141518] p-3 sm:p-4 transition-transform duration-150 z-10 ${
          isVibrating ? 'animate-[vibrate_0.35s_cubic-bezier(.36,.07,.19,.97)_both]' : ''
        }`}
        style={{
          boxShadow: `
            0 0 0 1px rgba(255, 255, 255, 0.1),
            0 0 0 6px #121214,
            0 0 0 10px #1e1f24,
            0 0 0 12px #101012,
            0 25px 60px -12px rgba(0, 0, 0, 0.95),
            0 0 80px 10px rgba(0, 0, 0, 0.8)
          `,
        }}
      >
        {/* Tactile Hardware Buttons */}
        {/* Digital Crown (Clickable) */}
        <button
          onClick={onCrownClick}
          title="Tactile Crown: Rotate / Click to Test Haptic Alert"
          className="absolute -right-4 sm:-right-5 top-[32%] w-4 sm:w-5 h-14 sm:h-16 bg-gradient-to-r from-neutral-600 via-neutral-700 to-neutral-500 rounded-r-md border border-neutral-500/40 shadow-lg flex flex-col justify-between py-1.5 cursor-pointer active:scale-95 transition-all hover:brightness-125 z-30 group"
          type="button"
        >
          <div className="w-full h-0.5 bg-neutral-900" />
          <div className="w-full h-0.5 bg-neutral-900" />
          <div className="w-full h-0.5 bg-neutral-900" />
          <div className="w-full h-0.5 bg-neutral-900" />
          <div className="w-full h-0.5 bg-neutral-900" />
        </button>

        {/* Tactical Lower Pusher Button */}
        <button
          onClick={onPusherClick}
          title="Tactical Pusher: Intercept Unearned Glance"
          className="absolute -right-3.5 sm:-right-4 top-[62%] w-3 sm:w-3.5 h-10 sm:h-12 bg-gradient-to-r from-neutral-700 via-neutral-800 to-neutral-600 rounded-r-sm border border-neutral-600/30 shadow-md cursor-pointer active:scale-95 transition-all hover:brightness-125 z-30"
          type="button"
        />

        {/* Circular OLED Screen Container */}
        <div className="relative w-full h-full rounded-full bg-black overflow-hidden flex flex-col items-center justify-between p-6 sm:p-7 border border-neutral-900 shadow-inner">
          {/* Glass Glare Reflection Layer */}
          <div
            className="absolute inset-0 z-10 pointer-events-none rounded-full"
            style={{
              background:
                'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 40%, rgba(255, 255, 255, 0) 60%)',
            }}
          />

          {children}
        </div>
      </div>
    </div>
  );
}
