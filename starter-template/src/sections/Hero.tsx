import memojiImage from "@/assets/images/memoji-avatar-1.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from '@/assets/icons/star.svg'
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from '@/assets/icons/sparkle.svg'


export const HeroSection = () => {
  return (
  <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
    <div className="absolute inset-0 -z-30 opacity-0" 
    style={{
      backgroundImage: `url(${grainImage.src})`,
    }}></div>
    <div className="size-[620px] hero-ring"></div>
    <div className="size-[820px] hero-ring"></div>
    <div className="size-[1020px] hero-ring"></div>
    <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={800} rotation={-72}>
            <StarIcon className="size-28 text-amber-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={18}>
            <StarIcon className="size-12 text-amber-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
            <StarIcon className="size-8 text-amber-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-12}>
            <SparkleIcon className="size-8 text-amber-300/70" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={77}>
            <SparkleIcon className="size-5 text-amber-300/70" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
            <SparkleIcon className="size-10 text-amber-300/70" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
            <SparkleIcon className="size-14 text-amber-300/70" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={88}>
            <div className="size-3 rounded-full bg-amber-300/70" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
            <div className="size-2 rounded-full bg-amber-300/70" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
            <div className="size-2 rounded-full bg-amber-300/70" />
        </HeroOrbit>
        </div>
    <div className="container">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif tracking-wider">
            <span className="font-light">DANIEL</span>
            <span className="font-normal relative inline-block">
              <span className="font-medium ml-1">C.</span>
              <span className="absolute -top-1 sm:-top-2 -right-2 sm:-right-0.5 text-[10px] sm:text-xs md:text-sm font-light tracking-widest">DEV</span>
            </span>
          </div>
        </div>
        <div className="bg-white-10 border border-black/15 rounded-full backdrop-blur px-3 sm:px-4 py-1 sm:py-1.5 inline-flex items-center gap-2 sm:gap-3 rounded-lg">
          <div className='bg-green-500 size-3 rounded-full animate-pulse'></div>
          <div className="text-sm font-medium">Available for new projects</div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
      <h1 className="font-serif text-3xl text-center mt-16 sm:mt-20 tracking-wide">
        Full-Stack Developer
      </h1>
      <p className="mt-2 text-center text-black/60">
        Where complexity and creativity collide—I&apos;m there.
      </p>
      </div>
      <div className="flex flex-row items-center justify-center mt-4 gap-4 justify-center">
        <button className="inline-flex items-center justify-center gap-2 border border-black/15 rounded-xl backdrop-blur px-6 h-12 py-1.5 w-[180px] bg-white text-black transition-all duration-300 hover:bg-black/5 hover:shadow-sm">
          <span className="font-seminbold">See my work</span>
        </button>
        <button className="inline-flex items-center justify-center gap-2 border border-black/15 rounded-xl backdrop-blur px-6 h-12 py-1.5 w-[180px] bg-black text-white transition-all duration-300 hover:bg-black/90 hover:shadow-sm">
          <span className="font-seminbold">Let's connect</span>
        </button>
      </div>
    </div>
  </div>
);
};

