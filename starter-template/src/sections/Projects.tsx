import tally_image from "@/assets/images/tally_image.png";
import cheflakbayintro from "@/assets/images/cheflakbayintro.jpg";
import coming_soon from "@/assets/images/coming-soon.jpg";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "GDSC InnOlympics 2024",
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
    company: "2024 IT Skills Olympics - University of Makati",
    year: "2024",
    title: "Chef Lakbay",
    results: [
      { title: "Represented University of Manila in the annual IT Skills Olympics" },
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
    <div>
      <div className="container">
        <div className="flex flex-col items-center gap-2">
          <div className="flex justify-center">
          <h2 className="text-2xl font-serif font-semibold tracking-widest bg-gradient-to-r from-gray-900 to-amber-300 bg-clip-text text-transparent">Featured Projects</h2>
          </div>
          <p className="font-serif text-2xl text-black/60 mt-6">A collection of my recent work</p>
          <div className="flex flex-col mt-10">
            {portfolioProjects.map((project) => (
              <div key={project.title} className="bg-gray-200/20 rounded-3xl relative z-0 overflow-hidden after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-gray-900/20">
                <div>
                  <span>{project.company}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <hr />
                <ul>
                  {project.results.map((result) => (
                    <li>{result.title}</li>
                  ))}
                </ul>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button>Learn More</button>
                </a>
                <Image src={project.image} alt={project.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
