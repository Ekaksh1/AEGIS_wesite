# AEGIS: Proactive Ransomware Defense Platform

![AEGIS Banner](public/images/aegis-logo.jpeg)

**AEGIS** is a sophisticated cybersecurity platform designed to simulate, detect, and neutralize ransomware threats in real-time. Built with a premium **Midnight Blue & Cyber Cyan** aesthetic, it provides an immersive experience for security researchers, students, and defense teams.

## 🌌 The Aesthetic
AEGIS features a state-of-the-art "Cyberpunk Elite" design system:
- **Midnight Blue Core:** A deep, high-contrast background for maximum visual focus.
- **Cyber Cyan Accents:** High-energy accents that highlight critical system events.
- **Advanced Interactions:** Cursor-following spotlights, magnetic buttons, and glassmorphic components.
- **Subtle Landscapes:** Abstract mountain silhouettes and dynamic particle backgrounds.

## 🛡️ Core Capabilities
- **Attack Simulation:** Execute controlled ransomware scenarios to test system resilience.
- **Real-time Monitoring:** Continuous surveillance of file system modifications using watchdog logic.
- **Automated Containment:** Instant quarantine of suspicious files in the `SafeZone/` and termination of malicious processes.
- **Secure Recovery:** Automatic restoration of critical files from the encrypted `AegisVault/`.

## 🛠️ Technology Stack
- **Frontend:** Next.js 15, Tailwind CSS, Framer Motion (Advanced animations).
- **Core Logic:** Python 3.x, Watchdog, Psutil, Cryptography.
- **UI Components:** Lucide Icons, Custom magnetic and spotlight effects.

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/Ekaksh1/Aegis_ransomware_defense.git
cd Aegis_ransomware_defense
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Run the Defense Pipeline
```bash
python app.py
```

## 🏗️ System Architecture
1. **app.py:** The central orchestrator for monitoring and defense.
2. **simulate_attack.py:** The modular attack simulation engine.
3. **.AegisVault/:** The encrypted backup repository.
4. **SafeZone/:** The isolated quarantine container.

---

Built for the next generation of cybersecurity defense. **AEGIS — Detect. Simulate. Neutralize.**
