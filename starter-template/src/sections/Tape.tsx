import StarIcon from "@/assets/icons/star.svg"

const words = [
  "Versatile",
  "Analytical",
  "Innovative",
  "Creative",
  "Problem Solver",
  "Resourceful",
  "Detail-Oriented",
  "Hardworking",
  "Team Player",
  "Collaborative",
  "Effiecient",
  "Goal-Oriented",
  "Communicative",
  "Solution-Driven",
  "Focused",
  "Resilient",
  "Logical",
  "Adaptive",
  "Reliable",
  "Organized"
]

export const TapeSection = () => {
  return (
   <div className="py-16 lg:py-24">
    <div className="bg-gradient-to-r from-gray-600 to-amber-300 overflow-x-clip -mx-1">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
    <div className="flex flex-none gap-4 py-3" 
    >
    {[...new Array(2)].map((_, index) => (
      <div key={index} className="flex flex-none gap-4 py-3 animate-move-left">
        {words.map(word => (
          <div key={word} className="inline-flex gap-4 items-center">
            <span className="text-white uppercase font-extrabold text-sm">{word}</span>
            <StarIcon className="size-6 text-white -rotate-12" />
          </div>
        ))}
      </div>
    ))}
    </div>
    </div>
    </div>
  </div>
  );
};


