import React from "react";
import indexHeroBg from "../assets/Parking System Photos/Parking System Photos/Home Page/1.webp";
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
import logo from "../assets/logo.jpeg"; // place logo inside src/assets/
import SolutionsList from "../components/SolutionsList";
import Vision from "../components/Vision";
import Policies from "../components/Policies";
import Contact from "../components/Contact";
import About from "../components/About";
import Hero from "../components/Hero";
import WhyAnkerStack from "../components/WhyAnkerStack";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* Navbar */}

      {/* Hero */}
      <Hero />
        {/* why anker stack */}
      <WhyAnkerStack />
      {/* About */}
      <About />

      {/* Vision */}
      <Vision />
      {/* Solutions / Products */}
      <SolutionsList />

      {/* Policies */}
      <Policies />
      {/* Contact */}
      <Contact />

    </div>
  );
};

export default Home;