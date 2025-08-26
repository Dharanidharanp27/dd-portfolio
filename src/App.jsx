import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaInstagram,
  FaTwitter,
  FaPhone,
} from "react-icons/fa";

import cert1 from "./assets/cert1.jpg";
import cert2 from "./assets/cert2.jpg";
import cert3 from "./assets/cert3.jpg";
import cert4 from "./assets/cert4.jpg";
import cert5 from "./assets/cert5.jpg";

import pro1 from "./assets/web.jpg";
import pro2 from "./assets/driver.jpg";
import pro3 from "./assets/traffic.jpg";

import profilePic from "./assets/profile.jpg";

// Sample projects
const projectsSample = [
  {
    title: "E-commerce Website",
    subtitle: "MERN stack",
    image: pro1,
    link: "https://github.com/Dharanidharanp27/Websites",
  },
  {
    title: "Traffic Sign Classifier",
    subtitle: "Python | CNN",
    image: pro2,
    link: "https://github.com/Dharanidharanp27/tnsdc-genAI",
  },
  {
    title: "Driver Fatigue Detection",
    subtitle: "Python | YOLO",
    image: pro3,
    link: "https://github.com/Dharanidharanp27/DRIVER-FATIGUE-DETECTION-AND-ALERT-SYSTEM-USING-YOLO-v11",
  },
];

// Skill categories
const skillCategories = {
  Frontend: ["React.js", "HTML", "CSS & TailwindCSS", "JavaScript"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MongoDB", "SQL", "MySQL"],
  Tools: ["Git", "VS Code", "Pycharm"],
  Programming_Languages: ["Java", "Python"],
  Concepts: ["OOPS", "RESTful API"],
};

// Education data
const education = [
  {
    discipline: "B.E. Computer Science and Engineering",
    school: "Saranathan College of Engineering",
    year: "2021 - 2025",
    grade: "7.8 CGPA",
  },
  {
    discipline: "HSC - Class 12th",
    school: "Vignesh Sri Renga Matriculation Higher Secondary School",
    year: "2021",
    grade: "85.31%",
  },
  {
    discipline: "SSLC - Class 10th",
    school: "Vignesh Sri Renga Matriculation Higher Secondary School",
    year: "2019",
    grade: "84.2%",
  },
];

// Certificates data
const certificates = [
  { title: "The Web Developer Bootcamp 2025 - Udemy", image: cert1 },
  { title: "Data Structures and Algorithms - Inlustro (2022)", image: cert2 },
  {
    title: "Building Real Life project AI-based application - Inlustro (2023)",
    image: cert3,
  },
  { title: "Enterprise Python - Inlusto (2023)", image: cert4 },
  {
    title: "Introduction to Artificial Intelligence - Inlustro (2024)",
    image: cert5,
  },
];

export default function App() {
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState(0);
  const [openSkill, setOpenSkill] = useState(null); // category when expanded
  const [preview, setPreview] = useState(null); // certificate preview

  const toggle = () => setDark((v) => !v);
  const next = () =>
    setActive((s) => (s + 1) % projectsSample.length);
  const prev = () =>
    setActive((s) => (s - 1 + projectsSample.length) % projectsSample.length);

  const pageBg = dark
    ? "bg-[#071020] text-white"
    : "bg-white text-[#041428]";
  const cardBase = dark
    ? "border-white/10 bg-white/5"
    : "border-gray-200 bg-gray-100";
  const subtleText = dark ? "text-gray-300" : "text-gray-700";

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${pageBg}`}
    >
      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern
              id="grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="100"
                height="100"
                fill={dark ? "#031017" : "#f7fafc"}
              />
              <path
                d="M100 0 L0 0 0 100"
                stroke={
                  dark
                    ? "rgba(79,70,229,0.06)"
                    : "rgba(99,102,241,0.06)"
                }
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

{/* Navbar */}
<header
  className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300
    ${dark ? "bg-[#071020]/90 text-white backdrop-blur-md shadow-md" : "bg-white/90 text-[#041428] backdrop-blur-md shadow-md"}
  `}
>
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-violet-400 flex items-center justify-center shadow-lg">
      <span className="font-bold text-sm">DP</span>
    </div>
    <div className="hidden sm:block">
      <div className="text-sm font-semibold">{dark ? "Dharanidharan P" : "Dharanidharan P"}</div>
      <div className={`text-xs ${dark ? "text-gray-400" : "text-gray-500"}`}>Full-Stack Developer</div>
    </div>
  </div>

  <div className="flex items-center gap-4">
    <nav className={`hidden md:flex gap-6 text-sm transition-colors duration-300`}>
      {["About","Projects","Skills","Education","Certificates","Contact"].map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className={`hover:text-cyan-400 transition-colors duration-200 ${dark ? "text-gray-200" : "text-gray-600"}`}
        >
          {link}
        </a>
      ))}
    </nav>

    <button
      onClick={toggle}
      className={`p-2 rounded-md transition-colors duration-300
        ${dark ? "bg-white/5 hover:bg-white/10" : "bg-gray-100 hover:bg-gray-200"}`}
    >
      {dark ? <FaMoon /> : <FaSun className="text-yellow-500" />}
    </button>
  </div>
</header>


      <main className="pt-24 pb-24 px-6 md:px-12">
        {/* About + Projects */}
        <section id="about" className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* About */}
          <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col md:flex-row items-center md:items-start gap-6"
  >
    {/* Profile Pic */}
    {/* Intro Text */}
    <div className={`rounded-2xl overflow-hidden border backdrop-blur-lg bg-gradient-to-br from-white/2 to-transparent shadow-2xl transition-colors flex-1 ${cardBase}`}>
          <div className="md:w-40 md:h-40 absolute md:top-6 md:right-6 rounded-full overflow-hidden border-4 border-cyan-500 shadow-xl flex-shrink-0">
      <img
        src={profilePic}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
      <div className="p-6 md:p-14 pt-24 md:pt-28 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Hey,</h1>
        <h1 className="text-4xl md:text-6xl text-cyan-300 font-extrabold tracking-tight">I'm Dharani</h1>

        <p className={`mt-4 md:mt-6 leading-relaxed text-sm md:text-base transition-colors ${subtleText}`}>
          A passionate and driven Software Engineer specializing in React and expanding into full-stack development. With hands-on experience building scalable, responsive web applications and integrating both SQL and NoSQL databases, I thrive in agile environments where clean code and user-centric design matter.
        </p>

        <div className="mt-6 flex justify-center md:justify-start gap-3 flex-wrap">
          <a
            href="/Dharanidharan_Resume.pdf"
            className="px-4 py-2 rounded-full border border-cyan-400 text-cyan-300 
                      bg-transparent hover:bg-cyan-400 hover:text-black transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-4 md:mt-6 flex justify-center md:justify-start gap-4 items-center text-xl">
          <a className={`p-2 rounded-full hover:text-cyan-400 ${dark ? "bg-white/5" : "bg-gray-100"}`} href="https://github.com/dharanidharanp27" ><FaGithub /></a>
          <a className={`p-2 rounded-full hover:text-cyan-400 ${dark ? "bg-white/5" : "bg-gray-100"}`} href="https://www.linkedin.com/in/dharanidharan-p-aa6553229/"><FaLinkedin /></a>
          <a className={`p-2 rounded-full hover:text-cyan-400 ${dark ? "bg-white/5" : "bg-gray-100"}`} href="mailto:dharanidharanp27@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
    </div>
  </motion.div>

          {/* Projects */}
          <motion.div
            id="projects"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className={`rounded-2xl overflow-hidden border backdrop-blur-lg bg-gradient-to-br from-white/2 to-transparent shadow-2xl transition-colors ${cardBase}`}>
              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-300">PROJECTS</h2>
                <p className={`text-sm mt-2 transition-colors ${subtleText}`}>Some of my highlighted works. Click a card to open the repo.</p>

                <div className="mt-8 relative">
                  <div className="flex items-center justify-between">
                    <button onClick={prev} className="p-2 rounded-full bg-white/5 hover:bg-white/10">◀</button>

                    <div className="w-full mx-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {projectsSample.map((p, i) => (
                          <a
                            key={i}
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`rounded-lg overflow-hidden transform transition-all duration-300 ${i === active ? "scale-100 opacity-100" : "scale-90 opacity-40"}`}
                          >
                            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${p.image}')` }}></div>
                            <div className={`p-4 ${dark ? "bg-white/3" : "bg-gray-50"}`}>
                              <div className={`text-sm ${dark ? "text-gray-200" : "text-gray-600"}`}>{p.subtitle}</div>
                              <div className={`text-lg font-semibold ${dark ? "text-white" : "text-[#041428]"} mt-1`}>{p.title}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <button onClick={next} className="p-2 rounded-full bg-white/5 hover:bg-white/10">▶</button>
                  </div>

                  <div className="flex gap-2 justify-center mt-6">
                    {projectsSample.map((_, i) => (
                      <button key={i} onClick={() => setActive(i)} className={`w-3 h-3 rounded-full ${i === active ? "bg-cyan-400" : "bg-white/20"}`}></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-6xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-cyan-300 mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {Object.keys(skillCategories).map((cat) => {
              const isOpen = openSkill === cat;
              return (
                <div
                  key={cat}
                  onClick={() => setOpenSkill(isOpen ? null : cat)}
                  className={`rounded-xl border cursor-pointer transition-all duration-300 overflow-hidden ${cardBase}`}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {cat.replaceAll("_", " ")}
                    </h3>

                    <div
                      className={`grid transition-all duration-500 ${
                        isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
                      }`}
                    >
                      <ul className="overflow-hidden grid grid-cols-2 gap-3">
                        {skillCategories[cat].map((s, i) => (
                          <li
                            key={i}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                              dark
                                ? "bg-white/10 text-gray-200 hover:bg-cyan-500 hover:text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-cyan-100"
                            }`}
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="max-w-6xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-cyan-300 mb-8">Education</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {education.map((edu, i) => (
              <div key={i} className={`rounded-xl border p-6 hover:scale-105 hover:shadow-lg transition ${cardBase}`}>
                <h3 className={`text-lg font-semibold ${dark ? "text-white" : "text-[#041428]"}`}>{edu.discipline}</h3>
                <p className={`text-sm ${dark ? "text-gray-300" : "text-gray-600"}`}>{edu.school}</p>
                <p className={`text-sm ${dark ? "text-gray-300" : "text-gray-600"}`}>{edu.year}</p>
                <p className="text-cyan-300 font-medium">{edu.grade}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certs" className="max-w-6xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-cyan-300 mb-8">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((c, i) => (
              <div
                key={i}
                onClick={() => setPreview(c.image)}
                className={`rounded-xl border overflow-hidden cursor-pointer hover:scale-105 hover:shadow-lg transition ${cardBase}`}
              >
                <img src={c.image} alt={c.title} className="w-full h-60 object-cover" />
                <div className={`p-4 ${dark ? "bg-transparent" : "bg-gray-50"}`}>
                  <p className={`${dark ? "text-gray-300" : "text-gray-700"} text-sm`}>{c.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-6xl mx-auto mt-16">
          <div className={`rounded-2xl border backdrop-blur-lg bg-gradient-to-br from-white/2 to-transparent shadow-2xl p-8 transition-colors ${cardBase}`}>
            <h2 className="text-3xl font-bold text-cyan-300 mb-6">Contact</h2>
            <div className="flex flex-col md:flex-row justify-between gap-6 items-center">
              <div className={`${dark ? "text-gray-300" : "text-gray-700"}`}>
                <p>Email: <a href="mailto:dharanidharanp27@gmail.com" className="hover:text-cyan-400">dharanidharanp27@gmail.com</a></p>
                <p>Phone: <a href="tel:+919363661266" className="hover:text-cyan-400">+91 9363661266</a></p>
              </div>
              <div className="flex gap-4 text-xl">
                <a href="https://github.com/dharanidharanp27" className="hover:text-cyan-400"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/dharanidharan-p-aa6553229/" className="hover:text-cyan-400"><FaLinkedin /></a>
                <a href="https://www.instagram.com/dharani_de_dharan/" className="hover:text-cyan-400"><FaInstagram /></a>
                <a href="https://x.com/DHARANI14890421" className="hover:text-cyan-400"><FaTwitter /></a>
                <a href="mailto:dharanidharanp27@gmail.com" className="hover:text-cyan-400"><FaEnvelope /></a>
                <a href="tel:+919363661266" className="hover:text-cyan-400"><FaPhone /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-5 text-center text-gray-400">
        © {new Date().getFullYear()} Dharanidharan P
      </footer>

      {/* Certificate Modal */}
      {preview && (
        <div
          className="fixed inset-0 bg-black/85 flex items-center justify-center z-50"
          onClick={() => setPreview(null)}
        >
          <img
            src={preview}
            alt="Certificate Preview"
            className="max-w-3xl max-h-[80vh] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
