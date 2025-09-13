import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 min-h-[50vh] relative"
    >
      <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center">
        {/* Section Heading */}
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-16 text-[#001f3f]"
        >
          Get In Touch
        </motion.h3>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 py-5 gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-8 shadow-lg rounded-2xl flex flex-col items-center border-t-4 border-[#f05a28] hover:shadow-xl transition"
          >
            <FaPhoneAlt className="text-[#f05a28] text-4xl mb-4" />
            <p className="font-semibold text-lg text-gray-800">
              +91 92843 99735
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 shadow-lg rounded-2xl flex flex-col items-center border-t-4 border-[#3bb7d2] hover:shadow-xl transition"
          >
            <FaEnvelope className="text-[#3bb7d2] text-4xl mb-4" />
            <p className="font-semibold text-lg text-gray-800">
              hello@ankerstack.com
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 shadow-lg rounded-2xl flex flex-col items-center border-t-4 border-[#001f3f] hover:shadow-xl transition"
          >
            <FaMapMarkerAlt className="text-[#001f3f] text-4xl mb-4" />
            <p className="font-semibold text-lg text-gray-800">
              123 Anywhere St., Any City
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
