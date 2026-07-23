import { motion } from "framer-motion";
//import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Internal Order & Service Management System",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "AWS EC2",
      "AWS S3",
    ],
    description:
      "Enterprise application for managing orders and service requests with JWT authentication, request tracking, Docker deployment, and AWS hosting.",
    github: "https://github.com/YOUR_USERNAME",
    live: "#",
  },

  {
    title: "Xcite eCommerce Platform",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "MySQL",
    ],
    description:
      "Modern eCommerce platform with user authentication, product catalog, cart, checkout, search, pagination, and optimized backend APIs for improved performance.",
    github: "https://github.com/YOUR_USERNAME",
    live: "#",
  },
  {
    title: "NITC Placement Website",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    description:
      "A placement management system developed for NIT Calicut to automate the placement process. Features include student registration, company management, eligibility filtering, application tracking, interview scheduling, role-based authentication, and an admin dashboard with Excel report generation.",
    github: "https://github.com/YOUR_USERNAME",
    live: "#",
  },
  {
    title: "Expense Management System",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Chart.js"],
    description:
      "A full-stack expense tracking application that enables users to manage income and expenses, categorize transactions, visualize spending through interactive charts, generate monthly reports, and securely manage data using JWT authentication.",
    github: "https://github.com/YOUR_USERNAME",
    live: "#",
  },
];
export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black">
      <h2 className="text-5xl font-bold text-center mb-5">
        My <span className="text-cyan-400">Projects</span>
      </h2>

      <p className="text-center text-gray-400 mb-16">
        Some projects that showcase my MERN Stack development skills.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-cyan-400 transition"
          >
            {/* Placeholder Banner */}
            <div className="h-52 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white text-center px-4">
                {project.title}
              </h3>
            </div>

            <div className="p-8">
              <p className="text-gray-300 leading-7">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-5 mt-8">
                {/* <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-zinc-800 px-5 py-3 rounded-lg hover:bg-cyan-500 transition"
                >
                  <FaGithub />
                  GitHub
                </a> */}

                {/* <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-cyan-500 px-5 py-3 rounded-lg hover:bg-cyan-600 transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
