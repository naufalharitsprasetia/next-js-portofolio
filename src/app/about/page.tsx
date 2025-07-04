"use client";

import Image from "next/image";
import Typewriter from "react-ts-typewriter";
import { Calendar, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ChromaGrid from "../../components/reactbits/ChromaGrid";
import ClickSpark from "../../components/reactbits/ClickSpark";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/grid";
import "swiper/css/pagination";
import "../slider.css";

// import required modules
import { Grid, Pagination, Autoplay } from "swiper/modules";

const items = [
  {
    image: "/lomba1.jpg",
    title: "Juara 1 Coding Competition",
    subtitle: "by SurabayaDev x Universitas 17 Agustus 1945 Surabaya",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "#",
  },
  {
    image: "/lomba2.jpg",
    title: "Juara 3 Web Development Competition",
    subtitle: "Teknovistafest 2024 by Universitas Airlangga Surabaya",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "#",
  },
  {
    image: "/lomba3.jpeg",
    title: "Juara 2 Web Development",
    subtitle: "ICONFEST 4.0 (2024) by Universitas Muhammadiyah Semarang",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "#",
  },
  {
    image: "/lomba4.jpeg",
    title: "Juara 1 Web Competition",
    subtitle: "Technowars 11 x EJT Expo by Universitas PGRI Kanjuruhan Malang",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "#",
  },
  {
    image: "/pkm.jpg",
    title: "Peserta Pekan Kreativitas Mahasiswa",
    subtitle: "PKM Internal 2023 Universitas Darusaalam Gontor",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "#",
  },
];

export default function AboutPage() {
  return (
    <>
      <ClickSpark
        sparkColor="#2b7fff"
        sparkSize={12}
        sparkRadius={16}
        sparkCount={8}
        duration={400}
      >
        {/* Your content here */}
        <div className="main-container">
          <div className="container-about max-w-7xl mx-auto px-6 lg:px-20 pb-12 pt-20">
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
                        Hello, I am <br />
                        <span className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-transparent bg-clip-text animate-gradient">
                          Naufal Harits Prasetia
                        </span>
                      </h1>
                    </div>
                    <h2 className="text-xl xs:text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-600 via-blue-300 to-blue-400 bg-clip-text h-8 xs:h-9 sm:h-10 md:h-12 flex items-center">
                      <Typewriter
                        text={[
                          "Web Developer",
                          "Full Stack Developer",
                          "Back end Developer",
                          "Front end Developer",
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
                    currently studying at the University of Darussalam Gontor.
                    As a Bangkit Academy 2024 (Batch 2) cohort specializing in
                    Machine Learning, I work on real-world AI projects while
                    building scalable applications. Passionate about solving
                    complex problems and creating innovative digital
                    experiences, I actively engage in tech communities and love
                    collaborating on impactful projects. In my free time, I
                    enjoy sport, exploring new places, and staying updated with
                    tech trends.
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
            {/* Education */}
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
                      <div className="flex md:w-40 md:h-40 justify-center md:justify-start items-center place-self-center">
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
                          Bachelor of Informatics Engineering{" "}
                          <span className="text-xs">(S.Kom)</span>
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
                                Juara 1 Lomba Web Competition di Universitas
                                PGRI Kanjuruhan Malang 2023
                              </p>
                            </div>

                            <div className="flex items-start gap-3 dark:text-gray-300 text-gray-700">
                              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-sm leading-relaxed">
                                Juara 3 Lomba Web Development di acara
                                Teknovistafest Universitas Airlangga Surabaya
                                2024
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
                            A1 : Mumtaz/Excellent
                          </div>
                        </div>

                        {/* Degree Title */}
                        <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-gray-900">
                          Islamic Boarding School Student{" "}
                          <span className="text-xs">(Santri)</span>
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
                                Sekretaris Bagian Keterampilan di Organisasi
                                Pelajar Pondok Modern (OPPM) Kelas 5 Gontor
                                Pusat
                              </p>
                            </div>

                            <div className="flex items-start gap-3 dark:text-gray-300 text-gray-700">
                              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-sm leading-relaxed">
                                Sekretaris Bagian Pengajaran di Organisasi
                                Pelajar Pondok Modern (OPPM) Kelas 6 Kendari
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 dark:text-gray-300 text-gray-700">
                            <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm leading-relaxed">
                              Ketua Bagian Elektro di Panitia Panggung Gembira
                              696 Pondok Modern Darussalam Gontor Kendari
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            {/* Achievments */}
            <div className="achievments-container px-8 py-12">
              {/* Achievments Section */}
              <div className="space-y-8">
                <h1 className="text-4xl/normal md:text-5xl/normal font-bold text-center animate-gradient text-transparent bg-gradient-to-br from-blue-700  to-blue-400 bg-clip-text">
                  <span>Achievements</span>{" "}
                </h1>
                <br />
                <div className="relative">
                  <ChromaGrid
                    className="p-16 rounded-xl border-8 border-blue-500"
                    items={items}
                    radius={300}
                    damping={0.45}
                    fadeOut={0.6}
                    ease="power3.out"
                  />
                </div>
              </div>
            </div>
            {/*  */}
            {/* Experience */}
            <div className="experience-container px-8 py-12">
              {/* Experience Section */}
              <div className="space-y-8">
                <h1 className="text-4xl/normal md:text-5xl/normal font-bold text-center animate-gradient text-transparent bg-gradient-to-br from-blue-700  to-blue-400 bg-clip-text">
                  <span>Experience</span>{" "}
                </h1>
                <br />
                {/* Start Here */}
                <div className="overflow-hidden whitespace-nowrap">
                  <div className="flex animate-marquee gap-4">
                    {[...Array(2)].map((_, i) => (
                      // Duplikasi agar loop tak terlihat berhenti
                      <div key={i} className="flex gap-10 p-4">
                        {/* Mulai Card Experience */}
                        {[
                          {
                            img: "/experiences/pptik.jpg",
                            title:
                              "Staff PPTIK (Pusat Pelayanan Teknologi Informasi dan Komunikasi) Unida Gontor",
                            date: "Feb 2023 - Present",
                          },
                          {
                            img: "/experiences/dema.JPG",
                            title:
                              "Ketua Bag. Pers dan Publikasi Dewan Mahasiswa UNIDA Gontor - Kabinet Hadisatya",
                            date: "Aug 2023 - Aug 2025",
                          },
                          {
                            img: "/experiences/tafsil.jpg",
                            title:
                              "Anggota Peneliti (Hibah Ristekdikti) - website tafsil.id",
                            date: "May 2024 - Oct 2024",
                          },
                          {
                            img: "/experiences/iium.jpg",
                            title:
                              "Internasional Community Service Programme with IIUM (Malaysia)",
                            date: "Feb 2025 - Mar 2025",
                          },
                          {
                            img: "/experiences/bangkit.jpg",
                            title:
                              "Machine Learning Cohort at Bangkit Academy 2024 Batch 2",
                            date: "Sep 2024 - Dec 2024",
                          },
                          {
                            img: "/experiences/ospek.png",
                            title:
                              "Panitia Ospek 2024 - Bagian Penerimaan Mahasiswa Baru (PMB)",
                            date: "Nov 2024",
                          },
                          {
                            img: "/experiences/aslab.png",
                            title:
                              "Asisten Praktikum - Asisten Dosen - Asisten Lab",
                            date: "2023 - 2024",
                          },
                          {
                            img: "/experiences/juri.jpg",
                            title: "Juri Lomba Web Development FESTIDA 2024",
                            date: "Nov 2024",
                          },
                        ].map((exp, idx) => (
                          <div
                            key={idx}
                            className="min-w-[300px] max-w-[300px] flex-shrink-0 bg-white dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 dark:text-gray-50 shadow-md rounded-lg overflow-hidden"
                          >
                            <div className="w-full h-52">
                              <Image
                                src={exp.img}
                                width={300}
                                height={200}
                                alt={exp.title}
                                className="w-full h-52 object-cover"
                              />
                            </div>
                            <div className="p-4 flex flex-col">
                              <h1 className="font-medium text-sm text-wrap">
                                {exp.title}
                              </h1>
                              <p className="text-xs mt-5 font-light">
                                {exp.date}
                              </p>
                            </div>
                          </div>
                        ))}
                        {/* End Cards */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            {/* certifications */}
            <div className="certifications-container px-8 py-12">
              {/* certifications Section */}
              <div className="space-y-8">
                <h1 className="text-4xl/normal md:text-5xl/normal font-bold text-center animate-gradient text-transparent bg-gradient-to-br from-blue-700  to-blue-400 bg-clip-text">
                  <span>Licenses & Certifications</span>{" "}
                </h1>
                <br />
                {/* Start Here */}
                <div className="">
                  <Swiper
                    style={{ height: "450px" }}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                        grid: {
                          rows: 2,
                        },
                      },
                      640: {
                        slidesPerView: 2,
                        grid: {
                          rows: 2,
                        },
                      },
                      1024: {
                        slidesPerView: 3,
                        grid: {
                          rows: 2,
                        },
                      },
                      1440: {
                        slidesPerView: 3,
                        grid: {
                          rows: 2,
                        },
                      },
                    }}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Grid, Pagination, Autoplay]}
                    className="mySwiper"
                  >
                    {[
                      "/certif/alikhtibar.png",
                      "/certif/bangkit.jpg",
                      "/certif/bwa.png",
                      "/certif/coursera1.png",
                      "/certif/coursera2.png",
                      "/certif/coursera3.png",
                      "/certif/coursera4.png",
                      "/certif/codepolitan.png",
                      "/certif/dema.png",
                      "/certif/devfest.png",
                      "/certif/dicoding1.png",
                      "/certif/dicoding2.png",
                      "/certif/dicoding3.png",
                      "/certif/iium.png",
                      "/certif/inagata.jpeg",
                      "/certif/juri.jpg",
                      "/certif/lomba1.png",
                      "/certif/lomba2.png",
                      "/certif/lomba3.png",
                      "/certif/lomba4.png",
                      "/certif/lomba5.png",
                      "/certif/lomba6.jpeg",
                      "/certif/lomba7.png",
                      "/certif/lomba8.png",
                      "/certif/msib.png",
                      "/certif/pku.jpg",
                      "/certif/progate.png",
                      "/certif/udemy.png",
                    ].map((src, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="w-full h-full">
                          <Image
                            width={400}
                            height={200}
                            src={src}
                            alt={`certif-${idx}`}
                            className="w-full h-52 object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            {/* PENUTUP */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                  Ingin Tahu Lebih Lanjut ?
                </h3>
                <p className="text-sm sm:text-base text-blue-100 mb-6 max-w-2xl mx-auto px-4">
                  Jelajahi profil LinkedIn saya untuk mengetahui lebih banyak
                  tentang pengalaman, proyek, dan pencapaian saya secara lebih
                  lengkap dan detail.
                </p>
                <a
                  href="https://www.linkedin.com/in/naufal-harits-prasetia-35b443283/"
                  target="_blank"
                  className="inline-flex mx-auto justify-center items-center bg-white text-blue-600 font-semibold py-3 px-6 sm:px-8 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    className="w-8 h-8 inline-block mr-3"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#155dfc"
                      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    />
                  </svg>
                  Kunjungi LinkedIn Saya
                </a>
              </div>
            </div>{" "}
            {/*  */}
          </div>
        </div>
      </ClickSpark>
      {/* BIOGRAFI, EDUCATION, CERTIFICATION, ACHIEVMENT , Experience*/}
    </>
  );
}
