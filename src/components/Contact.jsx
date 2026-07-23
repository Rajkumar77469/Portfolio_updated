import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <h2 className="text-5xl font-bold text-center mb-5">
        Contact <span className="text-cyan-400">Me</span>
      </h2>

      <p className="text-center text-gray-400 mb-14">
        Let's connect and build something amazing together.
      </p>

      <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-5">
            <FaEnvelope className="text-3xl text-cyan-400" />
            <div>
              <h3 className="font-bold">Email</h3>
              <p className="text-gray-400">rajkumarrajput806@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <FaPhone className="text-3xl text-cyan-400" />
            <div>
              <h3 className="font-bold">Phone</h3>
              <p className="text-gray-400">+91 7746992805</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <FaMapMarkerAlt className="text-3xl text-cyan-400" />
            <div>
              <h3 className="font-bold">Location</h3>
              <p className="text-gray-400">Indore, Madhya Pradesh, India</p>
            </div>
          </div>

          <div className="flex gap-5 pt-5">
            <a
              href="https://github.com/Rajkumar77469"
              target="_blank"
              rel="noreferrer"
              className="text-4xl hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rajkumar-rajput-68354323b"
              target="_blank"
              rel="noreferrer"
              className="text-4xl hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.form
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-5 p-4 rounded-lg bg-zinc-800 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-5 p-4 rounded-lg bg-zinc-800 outline-none"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full mb-5 p-4 rounded-lg bg-zinc-800 outline-none"
          ></textarea>

          <button className="w-full bg-cyan-500 py-4 rounded-lg hover:bg-cyan-600 transition font-semibold">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
