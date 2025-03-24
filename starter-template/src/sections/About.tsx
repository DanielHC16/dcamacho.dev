import { Card } from "@/components/Card";
import { SectionHeader } from "../components/SectionHeader";
import { TechIcon } from "@/components/TechIcon";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";

import JavaScriptIcon from "@/assets/icons/javascript.svg";
import ReactIcon from "@/assets/icons/react.svg";
import PythonIcon from "@/assets/icons/python.svg";
import JavaIcon from "@/assets/icons/java.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import CSS3Icon from "@/assets/icons/css3.svg";
import HTML5Icon from "@/assets/icons/html5.svg";
import CIcon from "@/assets/icons/c.svg";
import awsIcon from "@/assets/icons/aws.svg";
import figmaIcon from "@/assets/icons/figma.svg";
import firebaseIcon from "@/assets/icons/firebase.svg";
import flutterIcon from "@/assets/icons/flutter.svg";
import photoshopIcon from "@/assets/icons/photoshop.svg";
import postgresqlIcon from "@/assets/icons/postgres.svg";
import mysqlIcon from "@/assets/icons/mysql.svg";

const mainTechStack = [
  {
    title: 'C Programming',
    iconType: CIcon,
  },
  {
    title: 'Java',
    iconType: JavaIcon,
  },
  {
    title: 'Python',
    iconType: PythonIcon,
  },
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'MySQL',
    iconType: mysqlIcon,
  },
  {
    title: 'PostgreSQL',
    iconType: postgresqlIcon,
  },
  {
    title: 'Flutter',
    iconType: flutterIcon,
  },
  {
    title: 'Firebase',
    iconType: firebaseIcon,
  },
];

const otherTechStack = [
  {
    title: 'HTML5',
    iconType: HTML5Icon,
  },
  {
    title: 'CSS3',
    iconType: CSS3Icon,
  },
  {
    title: 'GitHub',
    iconType: GitHubIcon,
  },
  {
    title: 'AWS',
    iconType: awsIcon,
  },
  {
    title: 'Figma',
    iconType: figmaIcon,
  },
  {
    title: 'Photoshop',
    iconType: photoshopIcon,
  },
];

export const AboutSection = () => {
  return (
    <section className="relative -mt-24 pb-16">
      <div className="absolute inset-0 bg-white" />
      <div className="container max-w-5xl mx-auto relative">
        <SectionHeader 
          eyebrow=""
          title="Development Stack"
          description="The Essentials"
        />
        <div className="space-y-6 mt-8">
          <Card>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <StarIcon className="text-amber-500 w-8 h-8" />
                <h3 className="text-xl font-serif font-semibold text-gray-900">Tech Stack</h3>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {mainTechStack.map((item) => (
                  <div key={item.title} className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white/50 hover:bg-white/70 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
                    <TechIcon component={item.iconType} />
                    <span className="text-gray-900 font-medium text-sm text-center">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <StarIcon className="text-amber-500/80 w-6 h-6" />
                <h3 className="text-lg font-serif font-semibold text-gray-900">Other Tools</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {otherTechStack.map((item) => (
                  <div key={item.title} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/50 hover:bg-white/70 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
                    <TechIcon component={item.iconType} />
                    <span className="text-gray-900/70 text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
