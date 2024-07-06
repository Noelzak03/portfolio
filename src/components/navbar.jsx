function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-transparent text-white">
      <div className=" text-5xl  font-bold">Noel Binoy </div>
      <div className="space-x-4">
        <a href="#about" className="hover:text-gray-400">
          About
        </a>
        <a href="#experience" className="hover:text-gray-400 text-">
          Experience
        </a>
        <a href="#projects" className="hover:text-gray-400">
          Projects
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
