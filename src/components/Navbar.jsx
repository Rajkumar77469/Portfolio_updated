import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/60 backdrop-blur-md z-50 cursor-pointer">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5">
        <h2 className="text-2xl font-bold text-cyan-400">Rajkumar.</h2>

        <div className="flex gap-8">
          <Link to="about" smooth>
            About
          </Link>

          <Link to="skills" smooth>
            Skills
          </Link>

          <Link to="experience" smooth>
            Experience
          </Link>

          <Link to="projects" smooth>
            Projects
          </Link>

          <Link to="contact" smooth>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
