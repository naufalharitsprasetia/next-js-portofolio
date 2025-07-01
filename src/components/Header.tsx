"use client";

import { useState } from "react";
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const theme = localStorage.getItem("theme");
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//       setDarkMode(true);
//     }
//   }, []);
//   const toggleTheme = () => {
//     const html = document.documentElement;
//     if (html.classList.contains("dark")) {
//       html.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setDarkMode(false);
//     } else {
//       html.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setDarkMode(true);
//     }
//   };
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }


  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Naufal</h1>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* <button
          onClick={toggleTheme}
          className="ml-4 p-2 text-sm rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
        >
          {darkMode ? "☀️" : "🌙"}
        </button> */}
        <Button
          variant="outline"
          size="icon"
          onClick={toggleDarkMode}
          className="rounded-full border-2 hover:cursor-pointer border-blue-200 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-800 bg-transparent"
        >
          {isDarkMode ? <Sun className="h-4 w-4 text-yellow-500" /> : <Moon className="h-4 w-4 text-blue-600" />}
        </Button>
      </div>
    </header>
  );
}
