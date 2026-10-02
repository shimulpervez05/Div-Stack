# 🧱 Dev Stack Builder

A modern, responsive **Dev Stack Builder** website built with React and Vite. Explore development technologies, filter them by category, and create your own stack with a simple interactive interface.

## ✨ Features

- 🔎 Filter 15 technologies by Frontend, Backend, Database, Language, Styling, DevOps, and Tools.
- ➕ Add technologies to a personal stack with duplicate protection and React-Toastify notifications.
- 📱 Fully responsive layout for mobile, tablet, and desktop with a mobile hamburger menu.
- ⏳ Loading state while technology data is fetched from a local JSON file.
- 🎨 Shared orange → pink → violet gradient theme.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Vite
- CSS3
- JSON
- React Icons
- React Toastify

## 🚀 Run Locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## 📁 Project Structure

```text
dev-stack-builder/
├── public/
│   └── data/
│       └── technologies.json
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── StackSidebar.jsx
│   │   └── TechnologyCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like UI inside JavaScript. React uses it to make components easier to read and build.

### 2. What is the difference between props and state?
Props are values passed into a component by its parent. State is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` stores changing data in a React component. I used it for the selected technology stack, loading state, mobile menu, and active category.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects after rendering. I used it to fetch the local `technologies.json` file when the app loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
A unique key helps React identify which list items changed, were added, or were removed so it can update the UI efficiently.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI depending on a condition. Here, the stack shows an empty message when `stack.length === 0`, otherwise it shows the selected items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data through props. A child can communicate back by calling a callback function that the parent passes as a prop.

## 📌 Git Commit Suggestions

Use meaningful commits such as:

```text
feat: create project structure
feat: add responsive navbar
feat: build hero section
feat: add technology JSON data
feat: create technology cards
feat: implement stack add and remove
feat: add react toast notifications
feat: add responsive footer and README
```

## 🌐 Deployment

This Vite project can be deployed to Vercel, Netlify, Cloudflare Pages, or another static hosting service.

> Replace the repository and live-site links in your submission form with your own URLs.
