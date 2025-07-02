"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Cek preferensi dari localStorage saat komponen mount
    const storedMode = localStorage.getItem("theme");
    const prefersDark = storedMode === "dark";

    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-10 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="flex justify-center items-center font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-secondary-foreground hover:bg-secondary/80 px-4 sm:px-6 py-1.5 sm:py-2 gap-2 sm:gap-3 bg-gradient-to-r from-zinc-50 to-zinc-100 hover:from-zinc-100 hover:to-zinc-200 transition-all duration-300 border border-zinc-200 rounded-full dark:from-gray-800 dark:to-gray-900 dark:hover:from-gray-700 dark:hover:to-gray-800 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm hover:shadow"
        >
          <div className="relative flex items-center justify-center w-5 h-5">
            <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-400/60 to-blue-600/60 animate-[ping-pulse_1.8s_ease-out_infinite]"></div>
            <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-400/40 to-blue-600/40 animate-[ping-pulse_2s_ease-out_infinite] delay-200"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-[0_0_0_4px_rgba(16,185,129,0.17)] z-10 animate-[dot-pulse_1.8s_ease-in-out_infinite]"></div>
          </div>
          <span className="text-xl font-bold">
            <span className="text-blue-600 dark:text-blue-400">naufal</span>.hp
          </span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <Button
          variant="outline"
          size="icon"
          onClick={toggleDarkMode}
          className="rounded-full border-2 hover:cursor-pointer border-blue-200 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-800 bg-transparent"
        >
          {isDarkMode ? (
            <Moon className="h-4 w-4 text-blue-600" />
          ) : (
            <Sun className="h-4 w-4 text-yellow-500" />
          )}
        </Button>
      </div>
    </header>
  );
}
