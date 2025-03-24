export const ContactSection = () => {
  return (
    <div className="py-16 pt-14">
      <div className="bg-white text-gray-900 py-8 px-10 rounded-3xl text-center">
        <div className="container">
          <h2 className="font-serif text-2xl">
            Want to know <span className="relative text-amber-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full">
              more
            </span>
            ?
          </h2>
          <a 
            href="DHCResume25.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button
              className="mt-4 bg-white text-gray-950 h-12 px-10 rounded-xl font-semibold 
                transition-all duration-300 ease-in-out transform hover:scale-105
                hover:bg-amber-500/10 hover:shadow-md active:scale-95
                border border-black/15 backdrop-blur"
            >
              View Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
