import { motion } from "framer-motion";
import { FaLaptopCode, FaAws, FaUserGraduate, FaTrophy } from "react-icons/fa";

export default function About() {
  const cards = [
    {
      icon: <FaLaptopCode size={35} className="text-cyan-400" />,
      title: "3+ Years",
      desc: "Experience",
    },
    {
      icon: <FaAws size={35} className="text-orange-400" />,
      title: "AWS",
      desc: "2 Certifications",
    },
    {
      icon: <FaUserGraduate size={35} className="text-green-400" />,
      title: "MCA",
      desc: "NIT Calicut",
    },
    {
      icon: <FaTrophy size={35} className="text-yellow-400" />,
      title: "AIR 270",
      desc: "NIMCET",
    },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-center">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <p className="text-center text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
          I'm a MERN Stack Developer with 3+ years of experience developing
          scalable web applications using React.js, Node.js, Express.js,
          MongoDB, MySQL and AWS. I enjoy building high-performance applications
          with clean architecture and modern UI.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 text-center"
            >
              <div className="flex justify-center mb-5">{item.icon}</div>

              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="text-gray-400 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
