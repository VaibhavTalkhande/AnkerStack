import React from 'react';
import { motion } from "framer-motion";
import about from "../assets/Parking System Photos/Parking System Photos/Tower Parking System/Multi-Level-Parking-Garage1.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 relative z-10">
        
        {/* Text Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h3 className="text-4xl font-bold mb-4 text-[#001f3f]">About Us</h3>
          <span className="block w-16 h-1 bg-[#f05a28] mx-auto md:mx-0 mb-6 rounded"></span>
          <p className="text-lg leading-relaxed text-gray-700">
            At <span className="font-semibold text-[#001f3f]">Anker Stack</span>, we pride ourselves on being pioneers in advanced stack parking solutions, committed to solving one of the most pressing challenges of modern cities—vehicle parking. 
            <br /><br />
            We design, manufacture, and install cutting-edge parking systems that maximize space efficiency while ensuring <span className="font-semibold text-[#f05a28]">safety, reliability, and convenience</span>. Our technology-driven solutions cater to residential complexes, commercial hubs, and large-scale infrastructure projects, reshaping the way people think about urban parking.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center relative"
        >
          {/* Decorative Circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f05a28]/20 rounded-full blur-2xl z-0"></div>
          <img
            src={about}
            alt="About Anker Stack"
            className="rounded-2xl shadow-xl max-w-full h-[60vh] object-cover relative z-10"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
