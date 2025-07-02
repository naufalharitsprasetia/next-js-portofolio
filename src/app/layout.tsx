import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naufal Harits Prasetia | Web Developers",
  description: "This Is My Portfolio (Naufal Harits Prasetia)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-gray-50 dark:bg-gray-950">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div
          className={`min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-gray-50`}
        >
          <main className="max-w-7xl mx-auto px-6 lg:px-20 pb-12 pt-20">
            {/* Main Content */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
