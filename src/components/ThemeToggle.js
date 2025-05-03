"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  // Load saved theme on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    const logo = document.getElementById("themeLogo");
    if (logo) {
      logo.src =
        savedTheme === "dark"
          ? "/images/eidhaart-white.png"
          : "/images/eidhaart-black.png";
    }
  }, []);

  // Update theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    const logo = document.getElementById("themeLogo");
    if (logo) {
      logo.src =
        newTheme === "dark"
          ? "/images/eidhaart-white.png"
          : "/images/eidhaart-black.png";
    }
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      <span className={`icon-wrapper ${theme === "light" ? "sun" : "moon"}`}>
        {theme === "dark" ? (
          <svg viewBox="0 0 24 24">
            <path d="M12 3a1 1 0 0 0 0 2 7 7 0 0 1 0 14 1 1 0 0 0 0 2 9 9 0 0 0 0-18z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24">
            <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zm10.48 0 1.8-1.79 1.41 1.41-1.79 1.8-1.42-1.42zM12 4a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm0 14a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm8-6a1 1 0 0 1 1 1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1 1 1 0 0 1 1-1zm-16 0a1 1 0 0 1 1 1H3a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1zm12.24 7.76 1.8 1.79 1.41-1.41-1.79-1.8-1.42 1.42zM6.76 19.16l-1.8 1.79 1.41 1.41 1.8-1.79-1.41-1.41zM12 6a6 6 0 1 0 0 12A6 6 0 0 0 12 6z" />
          </svg>
        )}
      </span>
    </button>
  );
}
