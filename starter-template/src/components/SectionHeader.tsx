export const SectionHeader = ({
    title,
    eyebrow,
    description,
}:{
    title: string;
    eyebrow: string;
    description: string;
}) => {
  return (
    <>
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-col items-center gap-2">
        <p className="font-semibold tracking-widest text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-amber-300">
          {eyebrow}
        </p>
        <h2 className="text-2xl md:text-5xl font-serif font-semibold tracking-widest bg-gradient-to-r from-gray-900 to-amber-300 bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
      <p className="font-serif text-2xl md:text-xl text-black/60 mt-4 max-w-md text-center">
        {description}
      </p>
    </div>
    </>
  );
};
