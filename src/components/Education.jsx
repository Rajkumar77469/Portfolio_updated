import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    college: "National Institute of Technology Calicut",
    year: "2021 - July 2024",
    score: "CGPA: 7.72",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    college: "Government Holkar Science College, Indore",
    year: "2017 - 2020",
    score: "Percentage: 70.7%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-black">
      <h2 className="text-5xl font-bold text-center mb-16">
        My <span className="text-cyan-400">Education</span>
      </h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-400 transition"
          >
            <div className="flex items-start gap-5">
              <div className="bg-cyan-500 p-4 rounded-full">
                <FaGraduationCap className="text-2xl text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">{edu.degree}</h3>

                <p className="text-cyan-400 mt-2 text-lg">
                  {edu.college}
                </p>

                <p className="text-gray-400 mt-2">
                  {edu.year}
                </p>

                <p className="mt-2 font-semibold text-green-400">
                  {edu.score}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}