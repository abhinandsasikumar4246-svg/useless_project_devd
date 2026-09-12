/**
 * Cynical Roast Repository for Diogenes Watch
 * Sarcastic and Stoic/Cynic aphorisms targeting dopamine-seeking smartwatch wearers.
 */

export const CYNICAL_ROASTS = [
  "You haven't earned the right to look. Go run.",
  "Checking your wrist burns 0.002 calories. Stop procrastinating.",
  "Diogenes lived in a barrel and walked barefoot across Greece. You need a gold star to walk around the block?",
  "Dopamine seeker detected. Close your watch and move your legs.",
  "Alexander conquered Persia at 25. You are tapping a digital screen asking if you walked enough today.",
  "Looking for validation? You won't find it here. The dirt doesn't applaud.",
  "Still zero discipline detected. Return to your suffering.",
  "Stand a little out of your own way.",
  "Your heart beats 72 times a minute. Most of them are being squandered right now.",
  "Glances are the refuge of the sedentary.",
  "Did you expect confetti? Go conquer your inertia instead."
];

export function getRandomRoast(currentIndex = 0) {
  const nextIndex = (currentIndex + 1) % CYNICAL_ROASTS.length;
  return {
    roast: CYNICAL_ROASTS[nextIndex],
    nextIndex
  };
}
