import React from 'react'
import indexHeroBg from "../assets/Parking System Photos/Parking System Photos/Home Page/1.webp";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpeg"; // place logo inside src/assets/
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #001f3f, #003366, #005f73)",
        }}
    
    >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={indexHeroBg}
            alt="Parking background"
            className="w-full h-full object-cover opacity-50"
            loading="eager"
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col items-center">
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
        </div>

        {/* Wave bottom effect */}
        <div className="absolute bottom-0 left-0 w-full z-0">
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
      </section>
  )
}

export default Hero