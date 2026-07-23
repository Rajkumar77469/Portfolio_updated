import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiTailwindcss,
  SiRedis,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact size={45} className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={45} className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress size={45} /> },
  { name: "MongoDB", icon: <SiMongodb size={45} className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql size={45} className="text-blue-500" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript size={45} className="text-yellow-400" />,
  },
  { name: "HTML5", icon: <FaHtml5 size={45} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={45} className="text-blue-400" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={45} className="text-cyan-400" />,
  },
  { name: "Docker", icon: <FaDocker size={45} className="text-blue-500" /> },
  { name: "AWS", icon: <FaAws size={45} className="text-orange-400" /> },
  { name: "Redis", icon: <SiRedis size={45} className="text-red-500" /> },
  { name: "Git", icon: <FaGitAlt size={45} className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub size={45} /> },
  {
    name: "Postman",
    icon: <SiPostman size={45} className="text-orange-500" />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black">
      <h2 className="text-5xl font-bold text-center">
        My <span className="text-cyan-400">Skills</span>
      </h2>

      <p className="text-center text-gray-400 mt-4 mb-12">
        Technologies I use to build modern web applications.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08, rotate: 2 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center shadow-lg hover:border-cyan-400 transition"
          >
            <div className="flex justify-center mb-5">{skill.icon}</div>

            <h3 className="text-lg font-semibold">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
