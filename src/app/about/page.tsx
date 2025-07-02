"use client";

import Image from "next/image";
import Typewriter from "react-ts-typewriter";

export default function AboutPage() {
  return (
    <>
      <div className="main-container flex">
        <div className="">
          <Image
            src="/personalpoto.png"
            alt="Naufal Harits Prasetia"
            priority
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="Kanan pt-20 px-16">
          <div className="space-y-6 sm:space-y-8 px-2 sm:px-4 md:px-6 max-w-4xl mx-auto">
            <div className="space-y-3 sm:space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                  Hello, I am
                  <span className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-transparent bg-clip-text animate-gradient">
                    Naufal Harits Prasetia
                  </span>
                </h1>
              </div>
              <h2 className="text-xl xs:text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-600 via-blue-300 to-blue-400 bg-clip-text h-8 xs:h-9 sm:h-10 md:h-12 flex items-center">
                <Typewriter
                  text={[
                    "Web Developer",
                    "Fullstack Developer",
                    "Backend Developer",
                    "Frontend Developer",
                    "Machine Learning Engineer",
                    "Android Engineer",
                    "Programmer",
                  ]}
                  speed={200}
                  loop={true}
                />
              </h2>
            </div>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
              A motivated and dedicated student in Information Technology with a
              strong academic background and practical experience from bootcamp
              training. Currently pursuing a Bachelors degree in Computer
              Science at the University of Pembangunan Nasional Veteran Jakarta.
              Skilled in managing software development projects from planning to
              deployment, with strong communication and leadership abilities
              that support effective teamwork and high performance.
            </p>
            <div className="flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-3 xs:gap-4 pt-2 md:pt-3">
              <button className="justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-blue-600/90 w-full xs:w-auto text-xs xs:text-sm md:text-base h-9 xs:h-10 md:h-11 px-4 xs:px-5 md:px-6 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white flex items-center gap-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-file-down h-3.5 w-3.5 xs:h-4 xs:w-4 md:h-5 md:w-5"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M12 18v-6"></path>
                  <path d="m9 15 3 3 3-3"></path>
                </svg>
                Download CV
              </button>
              <button className="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm hover:text-accent-foreground w-full xs:w-auto text-xs xs:text-sm md:text-base h-9 xs:h-10 md:h-11 px-4 xs:px-5 md:px-6 border-zinc-200 bg-white/80 hover:bg-zinc-100 text-zinc-900 dark:bg-zinc-800/50 dark:border-zinc-700 dark:hover:bg-zinc-700/50 dark:text-zinc-50 flex items-center gap-2 rounded-xl backdrop-blur-sm">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 496 512"
                  className="h-3.5 w-3.5 xs:h-4 xs:w-4 md:h-5 md:w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
                GitHub
              </button>
              <button className="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm hover:text-accent-foreground w-full xs:w-auto text-xs xs:text-sm md:text-base h-9 xs:h-10 md:h-11 px-4 xs:px-5 md:px-6 border-zinc-200 bg-white/80 hover:bg-zinc-100 text-zinc-900 dark:bg-zinc-800/50 dark:border-zinc-700 dark:hover:bg-zinc-700/50 dark:text-zinc-50 flex items-center gap-2 rounded-xl backdrop-blur-sm">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1.1"
                  viewBox="0 0 16 16"
                  className="h-3.5 w-3.5 xs:h-4 xs:w-4 md:h-5 md:w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM6 13h-2v-7h2v7zM5 5c-0.553 0-1-0.447-1-1s0.447-1 1-1c0.553 0 1 0.447 1 1s-0.447 1-1 1zM13 13h-2v-4c0-0.553-0.447-1-1-1s-1 0.447-1 1v4h-2v-7h2v1.241c0.412-0.566 1.044-1.241 1.75-1.241 1.244 0 2.25 1.119 2.25 2.5v4.5z"></path>
                </svg>
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* BIOGRAFI, EDUCATION, CERTIFICATION, ACHIEVMENT , Experience*/}
    </>
  );
}
