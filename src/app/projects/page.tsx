"use client";

import Image from "next/image";
import { ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ClickSpark from "../../components/reactbits/ClickSpark";

const projects = [
  {
    title: "Rap.dev",
    subtitle: "My Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing my skills, projects, and professional journey as a developer. Designed to provide a clear overview of my expertise and experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "+5 more",
    ],
    image: "/projects/ospek.png",
  },
  {
    title: "QuickFly",
    subtitle: "Your Practical and Eco-Friendly Flight Ticket Solution!",
    description:
      "A web-based flight booking application designed for ease and efficiency. Features digital ticketing and real-time integration.",
    technologies: ["React.js", "JavaScript", "Redux", "Redux Thunk", "+7 more"],
    image: "/projects/toefl.png",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <ClickSpark
        sparkColor="#2b7fff"
        sparkSize={12}
        sparkRadius={16}
        sparkCount={8}
        duration={400}
      >
        <div className="main-container">
          <div className="container-skills max-w-7xl mx-auto px-6 lg:px-20 pb-12 pt-20">
            {/*  */}
            <div className="tech-skill-container mt-8">
              <h1 className="text-2xl font-bold text-center">
                This Is My Projects
              </h1>
              <br />{" "}
              <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {/* Profile Section */}
                {projects.map((project, index) => (
                  <Card
                    key={index}
                    className="dark:bg-gray-800 dark:border-gray-700 bg-white transition-colors duration-300 py-0 overflow-auto"
                  >
                    <CardContent className="px-0">
                      <div className="flex flex-col">
                        <div className="">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={300}
                            height={400}
                            className="object-cover w-full h-64"
                          />
                        </div>

                        <div className="space-y-4 p-6">
                          <div>
                            <h3 className="text-xl font-bold dark:text-white text-gray-900">
                              {project.title}
                            </h3>
                            <p className="text-emerald-500 font-medium ">
                              {project.subtitle}
                            </p>
                          </div>

                          <p className="text-sm leading-relaxed dark:text-gray-300 text-gray-600 line-clamp-2">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="secondary"
                                className="dark:bg-emerald-900 dark:text-emerald-100 bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex gap-3 mt-12">
                            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white flex-1">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </Button>
                            <Button
                              variant="outline"
                              className="flex-1 bg-transparent"
                            >
                              <Code className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ClickSpark>
    </>
  );
}
