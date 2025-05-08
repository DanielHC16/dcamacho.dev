'use client';

import { useState, useEffect } from "react";
import tally_image from "@/assets/images/tally_win.jpeg";
import cheflakbayintro from "@/assets/images/cheflakbayintro.jpg";
import coming_soon from "@/assets/images/coming-soon.jpg";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const TypewriterText = ({ text, className = "" }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530); // Blink every 530ms

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150); // Slower typing speed

      return () => clearTimeout(timeout);
    } else {
      // When typing is complete, wait 3 seconds then start erasing
      const pauseTimeout = setTimeout(() => {
        setIsComplete(true);
      }, 3000);
      return () => clearTimeout(pauseTimeout);
    }
  }, [currentIndex, text]);

  useEffect(() => {
    if (isComplete && displayText.length > 0) {
      const eraseTimeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
      }, 50); // Erase one character at a time

      return () => clearTimeout(eraseTimeout);
    } else if (isComplete && displayText.length === 0) {
      // Reset everything when fully erased
      setCurrentIndex(0);
      setIsComplete(false);
    }
  }, [isComplete, displayText]);

  return (
    <span className={`${className} inline-flex justify-center min-w-[300px]`}>
      {displayText}
      <span className={`inline-block w-[2px] h-[1.2em] bg-amber-400 ml-[1px] align-middle -mb-[1px] ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`} />
    </span>
  );
};

const portfolioProjects = [
  {
    company: "GDSC InnOlympics",
    year: "2024",
    title: "TALLY - Think and Learn Life Yields",
    results: [
      { title: "Won Best Working Project Award" },
      { title: "Led a team of 4 to succesfully deliver the project" },
      { title: "Recognized for Innovation and Creativity" },
    ],
    link: "https://devpost.com/software/tally-teach-and-learn-life-yields",
    image: tally_image,
  },
  {
    company: "IT Skills Olympics - University of Makati",
    year: "2024",
    title: "Chef Lakbay",
    results: [
      { title: "Represented PLM in the annual IT Skills Olympics hosted by University of Makati" },
      { title: "Helped develop a working game application using Unity" },
      { title: "Led a team of 3 to succesfully pitch the game to a panel of judges" },
    ],
    link: "https://github.com/timtulang/Chef-Lakbay",
    image: cheflakbayintro,
  },
  {
    company: "Samahan ng mga  Kababaihan",
    year: "2025",
    title: "Local Organization App",
    results: [
      { title: "Developed a solution for a local organization" },
      { title: "Improved organization productivity by 50%" },
      { title: "Increased company organization by 30%" },
    ],
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: coming_soon,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center gap-2">
            <p className="font-semibold tracking-widest text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-amber-300 flex justify-center w-full">
              <TypewriterText text="Innovate to Cultivate" />
            </p>
            <h2 className="text-2xl md:text-5xl font-serif font-semibold tracking-widest bg-gradient-to-r from-gray-900 to-amber-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          <p className="font-serif text-2xl md:text-xl text-black/60 mt-6 max-w-md">
            A collection of my recent work
          </p>
          <div className="flex flex-col mt-6 gap-14 w-full">
            {portfolioProjects.map((project) => (
              <div 
                key={project.title} 
                className="bg-gray-200/20 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-gray-900/20 p-12 after:pointer-events-none"
              >
                <div className="flex">
                  <div className="bg-gradient-to-r from-gray-800 to-amber-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                </div>
                <h3 className="font-serif text-3xl mt-4 md:mt-5">{project.title}</h3>
                <hr className="border-t-2 border-gray/5 mt-6 md:mt-7"/>
                <ul className="flex flex-col gap-4 mt-6 md:mt-7">
                  {project.results.map((result) => (
                    <li key={result.title} className="flex gap-3 text-base text-black/60">
                      <CheckCircleIcon className="size-5 flex-shrink-0 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-white text-gray-950 h-14 w-full rounded-xl font-semibold transition-all duration-300 hover:bg-black/5 hover:shadow-sm border border-black/15 backdrop-blur inline-flex items-center justify-center gap-2 mt-6">
                    <span className="font-seminbold">Learn More</span>
                    <ArrowUpRightIcon className="size-5"/>
                  </button>
                </a>
                <div className="relative w-full aspect-[16/9] mt-5 overflow-hidden rounded-xl after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-xl after:outline-gray-900/20 after:pointer-events-none">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    className="rounded-xl object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    quality={100}
                    unoptimized
                    loading="eager"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
