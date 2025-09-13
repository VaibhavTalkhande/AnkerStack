import React from 'react';
import {
  FaThLarge, FaCogs, FaShieldAlt, FaProjectDiagram,
  FaHandPointer, FaTools, FaLeaf, FaBolt,
  FaBuilding, FaHeadset
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    name: "Maximum Space Utilization",
    icon: <FaThLarge className="text-3xl text-[#00a6cf]" />,
    description: "Park more vehicles in less space with our advanced stack parking designs."
  },
  {
    name: "Innovative Engineering",
    icon: <FaCogs className="text-3xl text-[#f15a29]" />,
    description: "Built with precision, using high-quality, durable materials for long-term performance."
  },
  {
    name: "Safety Assurance",
    icon: <FaShieldAlt className="text-3xl text-[#00a6cf]" />,
    description: "Multiple safety locks, sensors, and anti-fall systems for complete peace of mind."
  },
  {
    name: "Customizable Solutions",
    icon: <FaProjectDiagram className="text-3xl text-[#f15a29]" />,
    description: "Designs tailored to your location, vehicle types, and capacity needs."
  },
  {
    name: "User-Friendly Operation",
    icon: <FaHandPointer className="text-3xl text-[#00a6cf]" />,
    description: "Easy-to-use controls and smooth, quiet performance."
  },
  {
    name: "Fast Installation",
    icon: <FaTools className="text-3xl text-[#f15a29]" />,
    description: "Quick setup with minimal disruption to your property or operations."
  },
  {
    name: "Low Maintenance",
    icon: <FaLeaf className="text-3xl text-[#00a6cf]" />,
    description: "Robust design that requires minimal upkeep."
  },
  {
    name: "Energy Efficiency",
    icon: <FaBolt className="text-3xl text-[#f15a29]" />,
    description: "Smart systems that consume less power without compromising performance."
  },
  {
    name: "Aesthetic Design",
    icon: <FaBuilding className="text-3xl text-[#00a6cf]" />,
    description: "Modern, sleek structures that enhance the look of your premises."
  },
  {
    name: "Reliable Service Support",
    icon: <FaHeadset className="text-3xl text-[#f15a29]" />,
    description: "Comprehensive after-sales service to keep your system running flawlessly."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.15 + i * 0.15,
      duration: 0.6,
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 32px 0 rgba(0,166,207,0.25)",
    transition: { type: "spring", stiffness: 200, damping: 12 }
  }
};

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring", stiffness: 80 } }
};

const WhyAnkerStack = () => (
  <section className="py-16 bg-white relative">
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-tight font-sans"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={headingVariants}
      >
        <span className="text-[#001f3f]">Why </span>
        <span className="text-[#f15a29]">Anker Stack?</span>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.name}
            className="relative flex items-start gap-4 bg-[#001f3f] rounded-2xl shadow-xl p-6 md:p-8"
            custom={idx}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <motion.div
              className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-white border-2 border-[#00a6cf] shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { delay: 0.3 + idx * 0.1, duration: 0.4, type: "spring" }
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {feature.icon}
            </motion.div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">{feature.name}</h3>
              <p className="text-gray-200 text-base md:text-lg">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyAnkerStack;
