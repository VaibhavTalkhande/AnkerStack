import React from 'react'
import { motion } from 'framer-motion';
import { ShieldCheck, Cog } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Policies = () => {
  return (
    <section id="policies" className="py-20 w-full px-6">
      <div className="container max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-[#001f3f]">
          Our Policies
        </h3>
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Quality Policy */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 shadow-lg rounded-2xl border-t-4 border-[#001f3f]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#001f3f] rounded-full text-white">
                <ShieldCheck size={28} />
              </div>
              <h4 className="font-semibold text-2xl text-[#001f3f]">Quality Policy</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              At <span className="font-semibold text-[#ff6600]">Ankerstack</span>, 
              quality is at the core of everything we do. We are committed to 
              delivering parking solutions that meet the highest standards of safety, 
              reliability, and performance. Our systems are designed using premium-grade 
              materials, advanced engineering practices, and strict quality control 
              processes to ensure long-lasting durability and user satisfaction.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              We follow a <span className="italic">zero-compromise</span> approach — 
              from concept and design to manufacturing, installation, and after-sales 
              service. Every product undergoes rigorous testing to meet international 
              safety norms and operational efficiency benchmarks.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Our goal is simple: to provide innovative, space-saving parking systems 
              that customers can trust for years. Through continuous improvement, 
              technology upgrades, and a customer-first mindset, 
              <span className="font-semibold text-[#ff6600]"> Ankerstack</span> strives 
              to set new benchmarks in the parking solutions industry.
            </p>
          </motion.div>

          {/* Design Policy */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white p-8 shadow-lg rounded-2xl border-t-4 border-[#ff6600]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#ff6600] rounded-full text-white">
                <Cog size={28} />
              </div>
              <h4 className="font-semibold text-2xl text-[#001f3f]">Design Policy</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              At <span className="font-semibold text-[#ff6600]">Ankerstack</span>, 
              our design team is the backbone of every successful project. 
              Comprising highly skilled engineers, architects, and CAD specialists, 
              our team transforms complex parking challenges into efficient, practical, 
              and aesthetically pleasing solutions.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              From the initial site survey to the final blueprint, every detail is 
              planned with precision. We analyze space constraints, vehicle types, 
              traffic flow, and safety requirements to create custom designs that 
              maximize capacity without compromising usability.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Our designers work hand-in-hand with manufacturing and installation 
              teams to ensure every concept is translated into a robust, real-world 
              solution. By integrating advanced software, modern engineering 
              practices, and innovative thinking, our design team ensures that each 
              <span className="font-semibold text-[#ff6600]"> Ankerstack</span> system 
              is functional, safe, and future-ready.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Policies
