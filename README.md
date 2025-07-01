# 📸 Social Feed UI Clone

A **responsive, frontend-only social media UI clone** built with **HTML**, **Tailwind CSS**, and **JavaScript**. Inspired by modern social platforms, it features login validation, interactive stories, and a dynamic post feed — all handcrafted without using any brand assets or libraries.

### 🔗 Live Demo
👉 [https://dan-socialmedia.netlify.app/](https://dan-socialmedia.netlify.app/)

---

## ✨ Features

- 🧠 **Alphanumeric check** and button state feedback
- 📰 **Dynamic feed** using generated post data
- 📷 **Image/video media** that fit responsively
- ❤️ **Like button** toggle with animation
- 🟣 **Stories with gradient ring** and “viewed” state (stored in `localStorage`)
- 📱 **Responsive** across devices (uses Tailwind breakpoints)
- 💨 Built with **Tailwind CSS CLI** (no frameworks)

---

## 📁 Project Structure

```├── index.html # Feed UI with stories + posts
├── main.js # Story and feed rendering, like toggle
├── src/
│ └── output.css # Tailwind CSS output
├── Images/ # Avatars and custom SVG icons
└── README.md
```

---

## 🧪 Local Setup

To run locally with Tailwind CLI:

```bash
git clone https://github.com/PrathameshPowar-dan/social-media.git
cd social-ui-clone

npm install -D tailwindcss
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
