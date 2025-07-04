"use client";

import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import ShinyText from "../components/reactbits/ShinyText";
import SplashCursor from "../components/reactbits/SplashCursor";
import ClickSpark from "../components/reactbits/ClickSpark";

export default function Portfolio() {
  return (
    <ClickSpark
      sparkColor="#2b7fff"
      sparkSize={12}
      sparkRadius={16}
      sparkCount={8}
      duration={400}
    >
      <div className="main-container">
        <div className="home-container max-w-7xl mx-auto px-6 lg:px-20 pb-12 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SplashCursor />
            {/* Left Content */}
            <div className="space-y-7">
              {/* Badge */}
              <div className="mt-4 inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                Full Stack Web Developer
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl/[4rem] md:text-5xl/[4rem] lg:text-6xl/[4rem] font-bold text-gray-900 dark:text-white leading-tight">
                  Hi, I am{" "}
                  <ShinyText
                    text="Naufal"
                    disabled={false}
                    speed={4}
                    className=""
                    color="text-blue-600/70 dark:text-blue-400/70"
                  />
                  <br />
                  Harits Prasetia
                </h1>

                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                  I build responsive, accessible web applications with modern
                  technologies and clean, maintainable code.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  target="_blank"
                  href="https://wa.me/081220594202"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 text-white px-8 py-3 rounded-lg font-medium"
                >
                  Hire me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-medium bg-transparent text-gray-800 dark:text-white text-sm sm:text-base"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </div>

              {/* Social Links */}
              <div className="pt-5">
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  Find me on:
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      width={20}
                      height={20}
                      className="w-5 h-5 "
                    >
                      <path
                        className="fill-gray-600 dark:fill-gray-400 hover:fill-gray-900 dark:hover:fill-white"
                        d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            {/* Right Content - Profile Section */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Profile Circle */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 blur-xl opacity-30 animate-pulse"></div>
                  <div className="relative w-full h-full rounded-full border-4 border-white dark:border-gray-800 shadow-xl overflow-hidden">
                    <Image
                      src="/3potoku.png"
                      alt="Naufal Harits Prasetia"
                      priority
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-1 -right-3">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg px-4 py-2 border border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Full Stack Web
                    </p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">
                      Developer
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-3 -left-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg px-4 py-2 border border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Expert in
                    </p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">
                      Next.js & Laravel
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClickSpark>
  );
}
