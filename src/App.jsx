// App.js
import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaCogs,
  FaCar,
  FaBuilding,
  FaLayerGroup,
  FaProjectDiagram,
  FaDraftingCompass,
  FaShieldAlt,
  FaLeaf,
} from "react-icons/fa";
import logo from "./assets/logo.jpeg"; // place logo inside src/assets/

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const App = () => {
  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur shadow z-50">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="AnkerStack Logo" className="h-10 rounded" />
            <h1 className="font-bold text-lg text-[#001f3f]">Anker Stack</h1>
          </div>
          <ul className="hidden md:flex space-x-8 font-medium">
            {["Home", "About", "Vision", "Solutions", "Policies", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#f05a28] transition"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #001f3f, #003366, #005f73)",
        }}
      >
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            className="w-full h-32 text-white/10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="currentColor"
              d="M0,64L60,85.3C120,107,240,149,360,160C480,171,600,149,720,160C840,171,960,213,1080,224C1200,235,1320,213,1380,202.7L1440,192L1440,320H0Z"
            ></path>
          </svg>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={logo}
          alt="AnkerStack Logo"
          className="h-40 mb-6 rounded-xl shadow-lg bg-white p-4"
        />
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow"
        >
          Future-Ready Parking Solutions
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl text-lg md:text-xl mb-8 mx-auto text-gray-200"
        >
          Smart, safe, and innovative stack parking systems for modern cities.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-x-4"
        >
          <a
            href="#about"
            className="bg-[#f05a28] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#d94c1d] transition"
          >
            Know More
          </a>
          <a
            href="#contact"
            className="bg-[#3bb7d2] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#2ea2ba] transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-20 container flex flex-col md:flex-row items-center gap-12 mx-auto px-6"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h3 className="text-3xl font-bold mb-6 text-[#001f3f]">About Us</h3>
          <p className="text-lg leading-relaxed">
            Anker Stack is a pioneer in advanced stack parking solutions,
            dedicated to solving the challenge of urban vehicle parking. We
            design, manufacture, and install innovative systems that maximize
            space efficiently while ensuring safety, durability, and ease of use.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <FaCogs className="text-[#3bb7d2] text-[200px]" />
        </motion.div>
      </section>

      {/* Vision */}
      <section id="vision" className="py-20 bg-gray-50 text-center relative">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 text-[#001f3f]"
        >
          Our Vision
        </motion.h3>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg leading-relaxed"
        >
          We aim to transform congested urban spaces into organized, efficient,
          and sustainable environments through cutting-edge stack parking
          solutions. By blending innovative engineering, automation, and
          uncompromising safety, we make parking simpler, faster, and more
          reliable for everyone.
        </motion.p>
      </section>

      {/* Solutions / Products */}
      <section id="solutions" className="py-20 container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12 text-[#001f3f]">
          Our Solutions
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <FaCar />, title: "2 Pole Hydraulic Stack", desc: "Simple lift parking ideal for bungalows & apartments." },
            { icon: <FaBuilding />, title: "Tower Parking", desc: "Vertical smart tower systems for malls & hospitals." },
            { icon: <FaLayerGroup />, title: "Puzzle Parking", desc: "Fully automated puzzle systems for maximum efficiency." },
            { icon: <FaProjectDiagram />, title: "Pit Parking", desc: "Dependent & Independent pit stack solutions." },
            { icon: <FaCogs />, title: "3-Level Hydraulic", desc: "Triple your car capacity with minimal space." },
            { icon: <FaCar />, title: "Rotary Parking", desc: "Compact rotary systems for up to 12 vehicles." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-6 shadow rounded-xl flex flex-col items-center text-center hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="text-[#f05a28] text-4xl mb-4">{item.icon}</div>
              <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Policies */}
      <section id="policies" className="py-20 bg-gray-100 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-[#001f3f]">
            Our Policies
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 shadow rounded-lg"
            >
              <h4 className="font-semibold text-xl mb-4">Quality Policy</h4>
              <p>
                We are committed to delivering parking solutions that meet the
                highest standards of safety, reliability, and performance, backed
                by rigorous testing and zero-compromise quality control.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-white p-6 shadow rounded-lg"
            >
              <h4 className="font-semibold text-xl mb-4">Design Policy</h4>
              <p>
                Our design team creates custom, space-optimized, and future-ready
                parking systems with precision engineering, safety, and usability
                in mind.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 container mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-12 text-[#001f3f]">Get In Touch</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 shadow rounded-lg flex flex-col items-center">
            <FaPhoneAlt className="text-[#f05a28] text-3xl mb-3" />
            <p className="font-semibold">+91 92843 99735</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg flex flex-col items-center">
            <FaEnvelope className="text-[#3bb7d2] text-3xl mb-3" />
            <p className="font-semibold">hello@ankerstack.com</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg flex flex-col items-center">
            <FaMapMarkerAlt className="text-[#001f3f] text-3xl mb-3" />
            <p className="font-semibold">123 Anywhere St., Any City</p>
          </div>
        </div>

        <form className="max-w-2xl mx-auto space-y-4 bg-white p-8 rounded-lg shadow">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg p-3 h-32"
          ></textarea>
          <button className="bg-[#f05a28] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d94c1d] w-full transition">
            Send Message
          </button>
        </form>

        <div className="mt-12">
          <iframe
            title="map"
            className="w-full h-64 rounded-lg shadow"
            src="https://maps.google.com/maps?q=Nagpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001f3f] text-gray-200 py-10">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">
              Anker Stack
            </h4>
            <p>
              Innovating space-saving parking solutions for a smarter, connected
              future.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-[#f05a28]">
                  About
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#f05a28]">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#policies" className="hover:text-[#f05a28]">
                  Policies
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#f05a28]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">
              Follow Us
            </h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#">
                <FaFacebook className="text-2xl hover:text-[#3bb7d2]" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2xl hover:text-[#3bb7d2]" />
              </a>
              <a href="#">
                <FaTwitter className="text-2xl hover:text-[#3bb7d2]" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Anker Stack Pvt. Ltd. | All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default App;
