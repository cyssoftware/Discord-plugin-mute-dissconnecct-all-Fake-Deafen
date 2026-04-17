# 🎙️ Discord Voice Plugins Collection

## 📌 Overview
This repository contains two BetterDiscord plugins that enhance voice channel functionality:

1. **FakeDeaf** → Fake being muted or deafened while still talking/listening.  
2. **VoiceControl** → Advanced voice channel controls with hotkeys and a floating UI panel.  

---

## 🔧 Features

### FakeDeaf
- **Fake Mute (F9)** → Show as muted but still talk.  
- **Fake Deafen (F10)** → Show as deafened but still hear.  
- **New Join Mute (F11)** → Auto mute for new VC joiners.  
- **Settings Panel** → Toggle options via checkboxes.  
- **Toast Notifications** → Status updates when toggling.  

### VoiceControl
- **Mute All (Alt + M)** → Instantly mute everyone.  
- **Unmute All (Alt + U)** → Remove mute from all.  
- **Deafen All (Alt + D)** → Block hearing for all.  
- **Disconnect All (Alt + X)** → Kick everyone out of VC.  
- **UI Panel** → Floating control panel with quick buttons.  

---

## 🚀 Installation
1. Download the plugin files (`FakeDeaf.plugin.js` and `VoiceControl.plugin.js`).  
2. Move them into your BetterDiscord plugins folder:  
   - Windows: `%appdata%/BetterDiscord/plugins`  
   - macOS/Linux: `~/.config/BetterDiscord/plugins`  
3. Restart Discord.  
4. Enable the plugins from **User Settings → Plugins**.  

---

## 🖥️ Usage
- **FakeDeaf**: Use hotkeys (F9, F10, F11) or settings panel to toggle fake mute/deafen.  
- **VoiceControl**: Use hotkeys or the floating panel to control the whole voice channel.  

---

## ⚠️ Notes
- Requires **BetterDiscord** installed.  
- VoiceControl actions need proper **server permissions** (Mute/Deafen/Move Members).  
- Both plugins are for **educational and experimental purposes only**.



## 📷 Preview
<img width="900" height="427" alt="image" src="https://github.com/user-attachments/assets/552a9a7b-3d59-4d89-986c-826dea396ef5" />



---

## 🛠️ Development
- Written in **JavaScript (ES6)**.  
- Uses BetterDiscord’s `BdApi.Webpack` modules and WebSocket interception.  

---

## 📄 License
MIT License © 2026 CrimeWare  



