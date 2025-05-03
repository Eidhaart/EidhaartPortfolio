"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

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
          <Moon size={20} strokeWidth={1.5} />
        ) : (
          <Sun size={20} strokeWidth={1.5} />
        )}
      </span>
    </button>
  );
}
