"use client";

import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-10 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-blue-600 dark:text-blue-400"
        >
          NaufalHarits
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {link.name}
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
            <Sun className="h-4 w-4 text-yellow-500" />
          ) : (
            <Moon className="h-4 w-4 text-blue-600" />
          )}
        </Button>
      </div>
    </header>
  );
}
