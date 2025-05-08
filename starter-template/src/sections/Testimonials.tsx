'use client';

import Image from "next/image";
import { useState } from "react";
import dark_saas from "@/assets/images/dark-saas-landing-page.png";
import pabilipal from "@/assets/images/pabilipal.png";
import flutterfirebase from "@/assets/images/FlutterFirebase.png";
import weatherapp from "@/assets/images/weather-app.png";
import texttospeech from "@/assets/images/TextToSpeech.png";
import firstWebsite from "@/assets/images/1stWebsite.png";
import schoolManagement from "@/assets/images/school-management-proj.png";
import SNEK from "@/assets/images/SNEK.png";
import comingsoon from "@/assets/images/coming-soon.jpg";


const otherProjects = [
  {
    title: "Pabili Pal",
    description: "Stocks and Inventory Management System with a POS functionality.",
    image: pabilipal,
    link: "https://www.linkedin.com/in/daniel-camacho-09519829b/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAAEh2y3EBh7y8kW7iH7eG-Bepo4vQKfianWg",
    techStack: ["Native Android (Java)", "SQLite"]
  },
  {
    title: "Quotes App",
    description: "A simple quotes app that allows you to save your favorite quotes.",
    image: flutterfirebase,
    link: "https://github.com/DanielHC16/flutter_quotes",
    techStack: ["Flutter", "Firebase", "Dart"]
  },
  {
    title: "1st Personal Website",
    description: "The first iteration of my personal website. Added an AI chatbot for fun.",
    image: firstWebsite,
    link: "https://danielhc16.github.io/PersonalWebsite/",
    techStack: ["HTML", "CSS", "JavaScript", "OpenAI API"]
  },
  {
    title: "School Management System",
    description: "A school management system that allows you to manage your school's data.",
    image: schoolManagement,
    link: "https://github.com/marianoluiz/school-system",
    techStack: ["Java", "SQL"]
  },
  {
    title: "Weather App",
    description: "A weather app that allows you to check the weather of your current location. Using OpenWeather API.",
    image: weatherapp,
    link: "https://github.com/DanielHC16/weather-App",
    techStack: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Snake Game",
    description: "The recreation of the classic snake game.",
    image: SNEK,
    link: "https://github.com/DanielHC16/snakeGame-Project",
    techStack: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "A simple text to speech web app",
    description: "A simple text to speech web app that allows you to convert text to speech.",
    image: texttospeech,
    link: "https://github.com/DanielHC16/textToSpeech-App",
    techStack: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Coming Soon",
    description: "...",
    image: comingsoon,
    link: "#",
    techStack: []
  },
  {
    title: "Coming Soon",
    description: "...",
    image: comingsoon,
    link: "#",
    techStack: []
  }
];

export const TestimonialsSection = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="relative pb-48">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center gap-2">
            <p className="font-semibold tracking-widest text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-amber-300">
              Building Cool Stuff I Love to Share
            </p>
            <h2 className="text-2xl md:text-5xl font-serif font-semibold tracking-widest bg-gradient-to-r from-gray-900 to-amber-300 bg-clip-text text-transparent">
              More Projects
            </h2>
          </div>
          <p className="font-serif text-2xl md:text-xl text-black/60 mt-4 max-w-md text-center">
            Building is my passion, and these are some of the projects I&apos;ve worked on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
            {otherProjects.map((project, index) => (
              <a 
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  transitionDelay: `${(index % 3) * 100}ms`,
                }}
                className={`group bg-gray-200/20 rounded-xl overflow-hidden shadow-sm hover:shadow-xl 
                  transition-all duration-700 ease-in-out transform border-2 border-gray-900/5 hover:border-amber-500/20
                  ${index >= 3 && !showAll 
                    ? 'opacity-0 translate-y-8 scale-95 h-0 md:h-0 pointer-events-none' 
                    : 'opacity-100 translate-y-0 scale-100'
                  }`}
              >
                <div className="relative aspect-[16/11] overflow-hidden group">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover transition-all duration-700 ease-in-out transform
                      group-hover:scale-110 group-hover:brightness-105"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
                </div>
                <div className="p-5 flex flex-col min-h-[280px]">
                  <div className="h-[120px]">
                    <h3 
                      className="block font-serif text-xl font-semibold text-gray-900 group-hover:text-amber-400 
                        transition-colors duration-300 ease-in-out line-clamp-1"
                    >
                      {project.title}
                    </h3>
                    <p className="text-black/60 mt-1 text-base group-hover:text-black/80 
                      transition-colors duration-300 line-clamp-3">{project.description}</p>
                  </div>
                  <div className="mt-auto p-3 bg-black/5 rounded-lg border border-black/10">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 text-sm bg-white/50 rounded-md text-black/70 
                            border border-black/10 hover:bg-white hover:text-black/90 hover:border-black/20
                            transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="mt-4 bg-white text-gray-950 h-12 px-8 rounded-xl font-semibold 
              transition-all duration-300 ease-in-out transform hover:scale-105
              hover:bg-amber-500/10
              hover:shadow-md active:scale-95 border border-black/15 backdrop-blur"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none" />
    </section>
  );
};
