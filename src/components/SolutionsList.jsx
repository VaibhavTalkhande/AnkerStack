import React from 'react'
import towerparking from '../assets/Parking System Photos/Parking System Photos/Tower Parking System/tower-parking.jpeg';
import twopolestack from '../assets/Parking System Photos/Parking System Photos/2 pole Stack Parking System/2 Pole Stack.jpg';
import fourpole from '../assets/Parking System Photos/Parking System Photos/4 Pole - 2 Level Stack Parking System/4pole.png';
import horizontal from '../assets/Parking System Photos/Parking System Photos/Horizontal Box Parking System/horizontalbox.jpg';
import hydraulicpitpuzzle from '../assets/Parking System Photos/Parking System Photos/Hydraulic (Pit Puzzle) Parking System/pit-puzzle.jpg';
import hydraulic3lstack from '../assets/Parking System Photos/Parking System Photos/Hydraulic 3L Stack Parking System/hydraulic-3l-stack.webp';
import hydraulicpitstackdependent from '../assets/Parking System Photos/Parking System Photos/Hydraulic Pit Stack Parking System – Dependent/hydraulic-pit-stack-dependent.webp';
import hydraulicpitstackindependent from '../assets/Parking System Photos/Parking System Photos/Hydraulic Pit Stack Parking System – Independent/hydraulic-pit-stack-independent.avif';
import overgroundpuzzle from '../assets/Parking System Photos/Parking System Photos/Overground Puzzle – Electromechanical (OGP)/overground-puzzle.png';
import rotaryparking from '../assets/Parking System Photos/Parking System Photos/Rotary Parking System/rotary-parking.png';
import shuttlecart from '../assets/Parking System Photos/Parking System Photos/Shuttle Cart Parking System/shuttle-cart.png';
import { FaCar, FaBuilding, FaLayerGroup, FaProjectDiagram, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SolutionCard from './SolutionCard';
const list = [
  {
    id: 1,
    "image for card": towerparking,
    "title": "Tower Parking System"
  },
  {
    id: 2,
    "image for card": twopolestack,
    "title": "2 pole Stack Parking System"
  },
  {
    id: 3,
    "image for card": fourpole,
    "title": "4 Pole - 2 Level Stack Parking System"
  },
  {
    id: 4,
    "image for card": horizontal,
    "title": "Horizontal Box Parking System"
  },
  {
    id: 5,
    "image for card": hydraulicpitpuzzle,
    "title": "Hydraulic (Pit Puzzle) Parking System"
  },
  {
    id: 6,
    "image for card": hydraulic3lstack,
    "title": "Hydraulic 3L Stack Parking System"
  },
  {
    id: 7,
    "image for card": hydraulicpitstackdependent,
    "title": "Hydraulic Pit Stack Parking System – Dependent"
  },
  {
    id: 8,
    "image for card": hydraulicpitstackindependent,
    "title": "Hydraulic Pit Stack Parking System – Independent"
  },
  {
    id: 9,
    "image for card": overgroundpuzzle,
    "title": "Overground Puzzle – Electromechanical (OGP)"
  },
  {
    id: 10,
    "image for card": rotaryparking,
    "title": "Rotary Parking System"
  },
  {
    id: 11,
    "image for card": shuttlecart,
    "title": "Shuttle Cart Parking System"
  }
]
const SolutionsList = () => {
  return (
          <section id="solutions" className="py-20 container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12 text-[#001f3f]">
          Our Solutions
        </h3>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-7xl mx-auto mb-12"
        >
          <p className="text-lg italic mb-8">
            Explore our diverse range of innovative parking solutions, each
            designed to maximize space efficiency and enhance user convenience.
            From tower systems to shuttle carts, discover how we can transform
            your parking experience.
          </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {list.map((item, index) => (

              <SolutionCard name={item.title} id={item.id} image={item["image for card"]} key={index} />
          ))}
        </div>
        </motion.div>
      </section>
  )
}

export default SolutionsList