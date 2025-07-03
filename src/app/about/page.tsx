"use client";

import Image from "next/image";
import Typewriter from "react-ts-typewriter";
import { Calendar, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <>
      <div className="container-about">
        <div className="bio-container flex flex-col md:flex-row">
          <div className="this-image">
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
                Hi, I am Naufal Harits Prasetia, an aspiring Full-Stack
                Developer and Machine Learning Enthusiast from Indonesia,
                currently studying at the University of Darussalam Gontor. As a
                Bangkit Academy 2024 (Batch 2) cohort specializing in Machine
                Learning, I work on real-world AI projects while building
                scalable applications. Passionate about solving complex problems
                and creating innovative digital experiences, I actively engage
                in tech communities and love collaborating on impactful
                projects. In my free time, I enjoy photography, exploring new
                places, and staying updated with tech trends.
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-3 xs:gap-4 pt-2 md:pt-3">
                <a
                  href=""
                  target="_blank"
                  className="justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-blue-600/90 w-full xs:w-auto text-xs xs:text-sm md:text-base h-9 xs:h-10 md:h-11 px-4 xs:px-5 md:px-6 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white flex items-center gap-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
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
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="education-container px-8 py-12 my-12">
          {/* Education Section */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center animate-gradient text-transparent bg-gradient-to-br from-blue-700  to-blue-400 bg-clip-text">
              <span> Education</span>{" "}
            </h1>

            <Card className="dark:bg-gray-800 dark:border-gray-700 bg-white border-gray-200 shadow-lg py-0">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* University Logo */}
                  <div className="flex w-40 h-40 justify-center md:justify-start items-center place-self-center">
                    <Image
                      src="/unidalogo.png"
                      alt="Universitas Darussalam Gontor"
                      width={160}
                      height={240}
                      className="w-auto h-auto mx-auto"
                    />
                  </div>
                  {/* Education Details */}
                  <div className="flex-1 space-y-4">
                    {/* Date and GPA */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="flex items-center gap-2 text-sm dark:text-gray-400 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>July 2022 - Present</span>
                      </div>
                      <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                        GPA: 3.86/4.00
                      </div>
                    </div>

                    {/* Degree Title */}
                    <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-gray-900">
                      Bachelor of Informatics Engineering (S.Kom)
                    </h2>

                    {/* University Name */}
                    <div className="flex items-center gap-2 dark:text-gray-300 text-gray-700">
                      <GraduationCap className="w-5 h-5" />
                      <span className="text-lg">
                        Universitas Darussalam Gontor
                      </span>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3 mt-6">
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-3 dark:text-gray-300 text-gray-700">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm leading-relaxed">
                            Juara 1 Lomba Web Competition di Universitas PGRI
                            Kanjuruhan Malang 2023
                          </p>
                        </div>

                        <div className="flex items-start gap-3 dark:text-gray-300 text-gray-700">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm leading-relaxed">
                            Juara 3 Lomba Web Development di acara
                            Teknovistafest Universitas Airlangga Surabaya 2024
                          </p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-3 dark:text-gray-300 text-gray-700">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm leading-relaxed">
                            Staff at Pusat Pelayanan Teknologi Informasi dan
                            Komunikasi (PPTIK)
                          </p>
                        </div>

                        <div className="flex items-start gap-3 dark:text-gray-300 text-gray-700">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm leading-relaxed">
                            Wakil Ketua Departemen Pers dan Publikasi Dewan
                            Mahasiswa (DEMA) Universitas Darussalam Gontor
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700 bg-white border-gray-200 shadow-lg py-0">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* University Logo */}
                  <div className="flex w-40 h-40 justify-center md:justify-start items-center place-self-center">
                    <Image
                      src="/gontor.png"
                      alt="Pondok Modern Darussalam Gontor"
                      width={300}
                      height={200}
                      className="w-auto h-auto mx-auto"
                    />
                  </div>
                  {/* Education Details */}
                  <div className="flex-1 space-y-4">
                    {/* Date and GPA */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="flex items-center gap-2 text-sm dark:text-gray-400 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>July 2016 - April 2022</span>
                      </div>
                      <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                        A1 : Mumtaz
                      </div>
                    </div>

                    {/* Degree Title */}
                    <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-gray-900">
                      Islamic Boarding School Student (Santri)
                    </h2>

                    {/* University Name */}
                    <div className="flex items-center gap-2 dark:text-gray-300 text-gray-700">
                      <GraduationCap className="w-5 h-5" />
                      <span className="text-lg">
                        Pondok Modern Darussalam Gontor
                      </span>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3 mt-6">
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-3 dark:text-gray-300 text-gray-700">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm leading-relaxed">
                            Sekretaris Bagian Keterampilan di Organisasi Pelajar
                            Pondok Modern (OPPM) Kelas 5 Gontor Pusat
                          </p>
                        </div>

                        <div className="flex items-start gap-3 dark:text-gray-300 text-gray-700">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm leading-relaxed">
                            Sekretaris Bagian Pengajaran di Organisasi Pelajar
                            Pondok Modern (OPPM) Kelas 6 Kendari
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 dark:text-gray-300 text-gray-700">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm leading-relaxed">
                          Ketua Bagian Elektro di Panitia Panggung Gembira 696
                          Pondok Modern Darussalam Gontor Kendari
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* BIOGRAFI, EDUCATION, CERTIFICATION, ACHIEVMENT , Experience*/}
    </>
  );
}
