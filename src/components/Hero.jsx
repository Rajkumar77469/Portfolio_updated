import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-between gap-10"
    >
      {/* Left */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1"
      >
        <p className="text-cyan-400 text-xl">Hello, I'm</p>

        <h1 className="text-6xl font-bold mt-3">
          Rajkumar <span className="text-cyan-400">Rajput</span>
        </h1>

        <TypeAnimation
          sequence={[
            "MERN Stack Developer",
            2000,
            "Node.js Developer",
            2000,
            "React Developer",
            2000,
            "AWS Certified Developer",
            2000,
          ]}
          wrapper="h2"
          repeat={Infinity}
          className="text-3xl text-gray-300 mt-5"
        />

        <p className="text-gray-400 mt-6 leading-8 max-w-xl">
          MERN Stack Developer with 3+ years of experience building scalable web
          applications using React.js, Node.js, Express.js, MongoDB and AWS.
        </p>

        <div className="flex gap-5 mt-8">
          <a
            href={resume}
            download="Rajkumar_Rajput_Resume.pdf"
            className="bg-cyan-500 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-cyan-600"
          >
            <FaDownload />
            Resume
          </a>
          <a
            href="https://github.com/Rajkumar77469"
            target="_blank"
            rel="noreferrer"
            className="text-3xl hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rajkumar-rajput-68354323b"
            target="_blank"
            rel="noreferrer"
            className="text-3xl hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center"
      >
        <img
          src={profile}
          alt="Rajkumar"
          className="w-[420px] rounded-full border-4 border-cyan-400 shadow-2xl"
        />
      </motion.div>
    </section>
  );
}
