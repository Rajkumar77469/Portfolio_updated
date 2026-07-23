import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experience = [
  {
    company: "TCS",
    role: "MERN Stack / Node.js Developer",
    duration: "Jan 2025 - Present",
    points: [
      "Designed scalable RESTful APIs using Node.js & Express.js.",
      "Implemented JWT Authentication & Role-Based Access Control.",
      "Integrated React.js frontend with backend services.",
      "Worked with MongoDB, MySQL, Docker & AWS.",
      "API Testing using Postman.",
      "Worked in Agile environment using Git & GitHub.",
    ],
  },
  {
    company: "Engineering Services International",
    role: "Node.js Developer",
    duration: "Oct 2023 - Dec 2024",
    points: [
      "Built backend services using Node.js & Express.js.",
      "Developed REST APIs.",
      "Implemented CRUD operations using MongoDB.",
      "Debugged backend issues.",
      "Performed API testing using Postman.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-zinc-950">
      <h2 className="text-5xl font-bold text-center mb-16">
        Work <span className="text-cyan-400">Experience</span>
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-6 top-0 w-1 h-full bg-cyan-500"></div>

        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative pl-20 mb-14"
          >
            <div className="absolute left-0 top-2 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center">
              <FaBriefcase />
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-cyan-400 transition">
              <h3 className="text-2xl font-bold">{exp.role}</h3>

              <h4 className="text-cyan-400 mt-2">{exp.company}</h4>

              <p className="text-gray-400 mb-6">{exp.duration}</p>

              <ul className="space-y-3 text-gray-300">
                {exp.points.map((point, i) => (
                  <li key={i}>✅ {point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
