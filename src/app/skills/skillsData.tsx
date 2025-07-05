import {
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiLaravel,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiAdobephotoshop,
  SiTensorflow,
  SiPython,
  SiCoreldraw,
  SiGooglecloud,
  SiScratch,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
// #skills .container .div-card-item {
//     position: absolute;
//     width: 50px;
//     height: 50px;
//     border-radius: 4px;
//     top: 50%;
//     left: 50%;
//     transform: translateX(-50%) translateY(-50%);
//     background-repeat: no-repeat;
//     background-size: contain;
//   }
// #skills .container .div-card .arab {
//     background-image: url("../img/icon/arab.png");
//   }
{
  /* <div
class="div-card-item arab"
title="Level : Proficient"
></div> */
}
export const technologies = [
  {
    name: "Scratch",
    type: "Education",
    category: "others",
    icon: <SiScratch className="text-yellow-500" size={48} />,
    description:
      "Scratch adalah bahasa pemrograman visual yang dirancang untuk memudahkan anak-anak dan pemula belajar pemrograman.",
  },
  {
    name: "Google Cloud Platform",
    type: "Cloud",
    category: "others",
    icon: <SiGooglecloud className="text-blue-500" size={48} />,
    description:
      "Google Cloud Platform (GCP) adalah serangkaian layanan komputasi awan (cloud computing) yang disediakan oleh Google.",
  },
  {
    name: "Tensorflow",
    type: "Machine Learning",
    category: "machine learning",
    icon: <SiTensorflow className="text-yellow-500" size={48} />,
    description:
      "TensorFlow adalah framework sumber terbuka yang dikembangkan oleh Google untuk komputasi numerik dan pembelajaran mesin, terutama deep learning.",
  },
  {
    name: "Python",
    type: "Machine Learning",
    category: "machine learning",
    icon: <SiPython className="text-gray-700 dark:text-gray-200" size={48} />,
    description:
      "Python adalah bahasa pemrograman yang banyak digunakan dalam aplikasi web, pengembangan perangkat lunak, ilmu data, dan machine learning (ML).",
  },
  {
    name: "Node JS",
    type: "Backend",
    category: "backend",
    icon: <SiNodedotjs className="text-green-500" size={48} />,
    description:
      "Node.js adalah runtime JavaScript yang efisien dan ringan, cocok untuk aplikasi real-time.",
  },
  {
    name: "Express.js",
    type: "Backend",
    category: "backend",
    icon: <SiExpress className="text-gray-700 dark:text-gray-200" size={48} />,
    description:
      "Express.js adalah framework minimalis dan fleksibel untuk Node.js yang digunakan membangun API dan web apps.",
  },
  {
    name: "Nest JS",
    type: "Backend",
    category: "backend",
    icon: <SiNestjs className="text-pink-600" size={48} />,
    description:
      "NestJS adalah framework backend progresif berbasis TypeScript yang menggunakan arsitektur modular.",
  },
  {
    name: "Laravel",
    type: "Backend",
    category: "backend",
    icon: <SiLaravel className="text-red-500" size={48} />,
    description:
      "Laravel adalah framework PHP modern yang elegan dan kuat dengan ekosistem yang lengkap.",
  },
  {
    name: "Photoshop",
    type: "Design",
    category: "design",
    icon: <SiAdobephotoshop className="text-blue-500" size={48} />,
    description:
      "Adobe Photoshop adalah perangkat lunak penyunting gambar (raster graphics editor) yang dikembangkan oleh Adobe Systems.",
  },
  {
    name: "CorelDraw",
    type: "Design",
    category: "design",
    icon: <SiCoreldraw className="text-green-500" size={48} />,
    description:
      "CorelDRAW adalah perangkat lunak editor grafik vektor yang dikembangkan oleh Corel Corporation.",
  },
  {
    name: "React",
    type: "Frontend",
    category: "frontend",
    icon: <SiReact className="text-sky-500" size={48} />,
    description:
      "React adalah library JavaScript untuk membangun antarmuka pengguna interaktif dan responsif.",
  },
  {
    name: "Next.js",
    type: "Frontend",
    category: "frontend",
    icon: <SiNextdotjs className="text-black dark:text-white" size={48} />,
    description:
      "Next.js adalah framework React yang menyediakan SSR dan SSG, ideal untuk website modern.",
  },
  {
    name: "Tailwind CSS",
    type: "Frontend",
    category: "frontend",
    icon: <SiTailwindcss className="text-cyan-500" size={48} />,
    description:
      "Tailwind CSS adalah utility-first CSS framework yang mempercepat pengembangan UI.",
  },
  {
    name: "MongoDB",
    type: "Database",
    category: "database",
    icon: <SiMongodb className="text-green-600" size={48} />,
    description:
      "MongoDB adalah database NoSQL yang fleksibel dan skalabel, cocok untuk data semi-terstruktur.",
  },
  {
    name: "PostgreSQL",
    type: "Database",
    category: "database",
    icon: <SiPostgresql className="text-blue-500" size={48} />,
    description:
      "PostgreSQL adalah RDBMS open-source yang andal dan mendukung fitur SQL tingkat lanjut.",
  },
  {
    name: "Git",
    type: "Tools",
    category: "tools",
    icon: <SiGit className="text-orange-500" size={48} />,
    description:
      "Git adalah sistem version control yang digunakan untuk mengelola kode secara kolaboratif.",
  },
  {
    name: "VS Code",
    type: "Tools",
    category: "tools",
    icon: <DiVisualstudio className="text-blue-600" size={48} />,
    description:
      "Visual Studio Code adalah code editor ringan dan powerful dengan ekosistem ekstensi luas.",
  },
];

export const categories = [
  "all",
  "frontend",
  "backend",
  "database",
  "machine learning",
  "design",
  "tools",
  "others",
];
