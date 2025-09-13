import React from 'react';
import vision from '../assets/Parking System Photos/Parking System Photos/Tower Parking System/pexels-pixabay-63294.jpg';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Vision = () => {
  return (
    <section
      id="vision"
      className="relative py-24 bg-gradient-to-r from-[#001f3f] via-[#012d5c] to-[#001f3f] text-white overflow-hidden"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-6 relative z-10">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center relative"
        >
          <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-[#f05a28]/30 rounded-full blur-2xl"></div>
          <img
            src={vision}
            alt="Anker Stack Vision"
            className="rounded-2xl shadow-2xl max-w-full h-[60vh] object-cover relative z-10"
            loading="lazy"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h3 className="text-4xl font-bold mb-4">Our Vision</h3>
          <span className="block w-16 h-1 bg-[#f05a28] mx-auto md:mx-0 mb-6 rounded"></span>
          <p className="text-lg leading-relaxed text-gray-200">
            At Anker Stack, our vision is to <span className="text-[#f05a28] font-semibold">revolutionize urban spaces</span> by transforming chaotic environments into organized, efficient, and sustainable ecosystems with our intelligent stack parking systems.
            <br /><br />
            We aim to simplify parking with <span className="font-semibold">automation, safety, and convenience</span>, while contributing to greener, smarter cities of the future. Through innovation and reliability, we aspire to set new benchmarks for parking solutions worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
