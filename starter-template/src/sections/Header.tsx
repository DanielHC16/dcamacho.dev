export const Header = () => {
  return <div className="flex justify-center items-center fixed top-3 left-1/2 -translate-x-1/2 z-10">
    <nav className="flex gap-1 p-0.5 border border-black/15 rounded-full bg-white/10 backdrop-blur">
      <a href="#" className="nav-item">Home</a>
      <a href="#" className="nav-item">Projects</a>
      <a href="#" className="nav-item">About</a>
      <a href="#" className="nav-item">Contacts</a>
    </nav>
  </div>;
};
