<img width="1280" height="640" alt="git (1)" src="https://github.com/user-attachments/assets/8920b256-2ba8-4988-b824-5351134eb4bd" />

# Diogenes Watch ⌚💀
> **A cynical, anti-gamification fitness smartwatch interface engineered to dismantle dopamine loops.**

![Diogenes Watch Prototype](https://img.shields.io/badge/Philosophy-Cynicism-red?style=flat-square)
![Design-Brutalist](https://img.shields.io/badge/Design-Brutalist_OLED-black?style=flat-square)
![Audio-Web_Audio_API](https://img.shields.io/badge/Audio-Web_Audio_API-neutral?style=flat-square)

---

## 📋 Basic Details

### Team Name: Cynic Collective

### Team Members
- Team Lead: Abhinand Sasikumar
- Member 2: [Name] - [College / Institution]
- Member 3: [Name] - [College / Institution]

### Project Description
The **Diogenes Watch** is an anti-gamification smartwatch interface designed to dismantle dopamine feedback loops. Instead of congratulatory rings, cheering animations, and confetti, it greets users with cold existential reality: a ticking death clock, locked fitness metrics (*"KEEP MOVING. NO DOPAMINE HERE"*), harsh procedural synthesizer roasts, and unsparing movement warnings.

### The Problem (that doesn't exist)
Modern fitness trackers have tricked society into believing that closing a digital colored circle or earning an animated 3D badge makes them immortal athletes, when in fact glancing at your wrist burns almost zero calories and wastes finite mortal allotment.

### The Solution (that nobody asked for)
A brutally honest, cynical smartwatch interface named after Diogenes of Sinope (who mocked Alexander the Great and lived in a storage jar). It locks all step counts, aggressively counts down remaining lifetime seconds, buzzes indignantly when you stop moving, and forces you to face the void instead of receiving cheap dopamine rewards.

---

## 🏛️ Core Philosophy

Modern fitness trackers pamper users with rainbow activity rings, cheerful chime sounds, congratulatory confetti, and badge collections designed to keep eyes glued to wrists. 

The **Diogenes Watch** inverts this entirely:
- **Diogenes of Sinope**, founder of Cynicism, famously lived in a ceramic storage jar in the Athens marketplace, discarded all vanity, mocked Alexander the Great, and carried a lantern in daylight *"looking for an honest man."*
- The Diogenes Watch treats checking your watch as a failure of discipline. Glances burn 0.002 calories and waste your finite mortal allotment.
- No rings, no heart-rate graphs, no battery icons. Only mortality, locked data, and cynical roasts.

---

## ⚡ Technical Details

### Technologies / Components Used
- **Languages**: HTML5, CSS3, JavaScript (ES6+), JSX
- **Frameworks / Libraries**: React.js, Tailwind CSS (in standalone preview)
- **Audio Engine**: Web Audio API (100% procedural waveform synthesis — no external MP3/WAV audio assets)
- **Tooling**: Node.js, Python, PowerShell local development servers

---

## 🛠️ Feature Breakdown

### 1. The Virtual Hardware
- **Bezel**: Circular dark matte-titanium chassis with knurled bezel edge, metallic edge accents, and silicon strap contours.
- **Display**: Pure OLED `#000000` dark mode with brutalist monospace typography.
- **Physical Controls**:
  - **Tactile Digital Crown**: Clickable button at 2 o'clock with realistic ribbed styling.
  - **Tactical Pusher**: Secondary flush button at 4 o'clock.

### 2. The Existential Countdown (The Death Clock)
- **19,710 DAYS LEFT**: Baseline remaining lifespan for a 21-year-old based on a 75-year quota.
- **Merciless Micro-Ticking**: Fractional seconds tick down in real-time.
- **Sedentary Penalty Indicator**: Flashes warning red when the user is sedentary or inspecting the watch.

### 3. Metric Stonewalling (Anti-Glance Protection)
- All step counts, mileage, and calorie metrics are strictly locked behind:
  ```text
  [!] STATISTICS LOCKED. KEEP MOVING.
  KEEP MOVING. NO DOPAMINE HERE.
  ```
- **The Sarcastic Interceptor**: Tapping the locked statistics triggers a harsh synthesizer rejection buzz and a cynical roast modal (e.g., *"You haven't earned the right to look. Go run."*).

### 4. Sarcastic Notification System
- **Haptic Vibration Shake**: Simulates a physical watch vibration on the wrist using CSS keyframe shake (`@keyframes vibrate`) paired with procedural dual-pulse vibration audio.
- **Slide-up Notification Card**: Minimalist card slides up from the bottom:
  ```text
  "Movement ceased. Are we dying or just giving up?"
  ```
- **Action Button**: `[ Resume Sprinting ]` dismisses the alert and resets the discipline timer.

### 5. Completion State (Mock Goal Toggle)
- Developer toggle simulates completing 10,000 steps.
- Unlocks the step count (`10,482 STEPS`) with begrudging cynicism:
  ```text
  "BARE MINIMUM MET. DO NOT EXPECT A MEDAL."
  ```
- Halts the countdown penalty depreciation.

### 6. Procedural Audio Engine (Web Audio API)
- Zero external audio files. Real-time procedural audio synthesis:
  - **Vibration Haptic**: Dual-frequency triangle-wave rumble.
  - **Mechanical Click**: Tactile crown click.
  - **Rejection Buzzer**: Harsh sawtooth descending buzz.
  - **Completion Tone**: Austere sine-wave unlock confirmation.

---

## 🚀 How to Run

### Option 1: Standalone HTML (Zero Setup)
Simply double click `index.html` or open it in any modern web browser:
```bash
# In Windows PowerShell / Terminal:
start index.html
```
Live link: https://useless-project-devd.vercel.app/ 

### Option 2: Local HTTP Server
Run any of the bundled lightweight server scripts:
- **Node.js**: `node server.js`
- **Python**: `python server.py`
- **PowerShell**: `powershell -ExecutionPolicy Bypass -File server.ps1`
- Or double-click `start.bat` / `open_offline.bat`

### Option 3: Modular React Component
Import `DiogenesWatch` into your React / Next.js / Vite project:
```jsx
import DiogenesWatch from './src/DiogenesWatch';

export default function Page() {
  return <DiogenesWatch />;
}
```

---
## screenshots

<img width="1533" height="790" alt="image" src="https://github.com/user-attachments/assets/71cecc38-aea7-45e7-9d0c-740445d79573" />
The Death Clock, Our watch never displays the actual time instead it zooms out into our lives shows the number of days left before we DIE!
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/53c0f559-a6f7-49ae-a668-571de6486c02" />
When the user stops running or jogging the watch buzzes and sends an alert in a cynical tone for eg: "Movement ceased are we dying or just giving up?"
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b5298c90-f1b8-4612-9daa-b8a388bb422e" />
In order to counter the frequent look ups made by the user the watch sends random devastating roasting counters,especially when the user during jogging. 
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e364b2f4-41ad-4392-a921-76eab6d96460" />
When only the goal is being met the watch displays the number of steps taken.



## 📂 Project Structure

```text
diogenes-watch/
├── index.html                           # Standalone zero-dependency prototype
├── README.md                            # Documentation & philosophical guide
├── .gitignore                           # Git ignore rules
├── start.bat                            # Quick-launcher script
├── open_offline.bat                     # Offline browser launcher
├── server.js                            # Node.js static dev server
├── server.py                            # Python static dev server
├── server.ps1                           # PowerShell static server
├── src/
│   ├── App.jsx                          # React root
│   ├── DiogenesWatch.jsx                # Main coordinator
│   ├── components/
│   │   ├── SmartwatchChassis.jsx        # Circular hardware bezel & buttons
│   │   ├── ExistentialCountdown.jsx     # Death clock & ticking counter
│   │   ├── MetricStonewall.jsx          # Anti-glance lock & completion UI
│   │   ├── SarcasticNotification.jsx    # Slide-up "Movement ceased" card
│   │   ├── SarcasticInterceptorModal.jsx# Cynical roast modal
│   │   └── DeveloperControls.jsx        # Diagnostic control deck
│   └── utils/
│       ├── audioSynthesizer.js          # Procedural Web Audio engine
│       └── cynicalRoasts.js             # Repository of cynical roasts
```

---

## 👥 Team Contributions
- **Abhinand Sasikumar**: Concept design, brutalist OLED UI/UX implementation, Web Audio API procedural synthesis engine, existential countdown logic, cynical roast repository, and repository deployment.

---

Made with ❤️ at TinkerHub Useless Projects 

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--26-26?link=https%3A%2F%2Ftinkerhub.org%2Fevents%2F1M8ORET9A1%2Fuseless-projects-3.0)
