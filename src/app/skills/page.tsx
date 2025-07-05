"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import ClickSpark from "../../components/reactbits/ClickSpark";
import { technologies, categories } from "./skillsData";
import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "coreldraw",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "tensorflow",
  "googlecloud",
  "mysql",
  "scratch",
  "docker",
  "git",
  "php",
  "laravel",
  "tailwindcss",
  "python",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "go",
  "figma",
];

export default function SkillsPage() {
  const [selectedTech, setSelectedTech] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  const filteredTechs =
    selectedCategory === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  return (
    <ClickSpark
      sparkColor="#2b7fff"
      sparkSize={12}
      sparkRadius={16}
      sparkCount={8}
      duration={400}
    >
      <div className="main-container">
        <div className="container-skills max-w-7xl mx-auto px-6 lg:px-20 pb-12 pt-20">
          <section className="p-4 text-center tech-skills">
            <div className="relative flex size-full items-center justify-center overflow-hidden cursor-pointer">
              <IconCloud images={images} />
            </div>
            <h2 className="text-center text-3xl/normal md:text-4xl/normal font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Keahlian & Teknologi
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto mb-8">
              Teknologi dan tools yang saya gunakan untuk membangun aplikasi web
              yang powerful dan scalable
            </p>

            <div className="flex justify-center flex-wrap gap-3 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer",
                    selectedCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200"
                  )}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {filteredTechs.map((tech, index) => (
                <div
                  key={tech.name}
                  onMouseEnter={() => setSelectedTech(index)}
                  onMouseLeave={() => setSelectedTech(null)}
                  className={cn(
                    "bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-all",
                    selectedTech === index && "ring-2 ring-blue-600"
                  )}
                >
                  <div className="flex flex-col items-center gap-2">
                    {tech.icon}
                    <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      {tech.type}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-white dark:bg-zinc-800 p-6 rounded-xl text-zinc-600 dark:text-zinc-300 font-medium italic">
              {selectedTech !== null ? (
                filteredTechs[selectedTech]?.description
              ) : (
                <span>Hover pada teknologi untuk melihat deskripsi detail</span>
              )}
            </div>
          </section>
          <section className="mt-8 p-4 text-center">
            <h2 className="text-center text-3xl/normal md:text-4xl/normal font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Communication Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 justify-center items-center mx-auto">
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-all">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-[70px] h-[70px] rounded bg-no-repeat bg-contain bg-[url('/lang/indo.png')]" />
                  <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
                    Indonesia
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    Native{" "}
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-all">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-[70px] h-[70px] rounded bg-no-repeat bg-contain bg-[url('/lang/arab.png')]" />
                  <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
                    Arabic
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    Proficient{" "}
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-all">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-[70px] h-[70px] rounded bg-no-repeat bg-contain bg-[url('/lang/english.png')]" />
                  <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
                    English
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    Proficient{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ClickSpark>
  );
}
