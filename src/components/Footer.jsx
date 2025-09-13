import React from "react";
import logo from "../assets/logo.jpeg"; // Replace with your logo
import { FaFacebook, FaLinkedin, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const CustomNavLink = ({ to, label }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate(`/#${to}`);
    }
  };

  return (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      onClick={handleClick}
      className="text-white hover:text-[#f05a28] font-medium text-lg cursor-pointer transition-colors duration-200"
    >
      {label}
    </ScrollLink>
  );
};

const Footer = () => {
  return (
    <div className="bg-[#001f3f] text-gray-300 relative">
      <div className="max-w-7xl mx-auto  py-12 grid gap-10 md:grid-cols-3">
        {/* Logo & Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={logo}
            alt="Anker Stack Logo"
            className="w-24 h-24 object-contain mb-2 rounded-full bg-white p-2 shadow-lg"
          />
          <span className="font-bold text-xl text-white">Anker Stack</span>
          <p className="mt-2 text-sm max-w-xs">
            Innovating space-saving parking solutions for a smarter, connected future. 
            Our mission is to redefine parking with technology-driven, eco-friendly systems.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-semibold mb-2 text-[#f05a28]">Quick Links</span>
          <div className="flex flex-col gap-2">
            <CustomNavLink to="about" label="About" />
            <CustomNavLink to="solutions" label="Solutions" />
            <CustomNavLink to="policies" label="Policies" />
            <CustomNavLink to="contact" label="Contact" />
          </div>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <span className="font-semibold mb-2 text-[#f05a28]">Contact</span>
          <div className="flex items-center gap-2 text-white mb-1">
            <FaPhoneAlt className="text-[#f05a28]" /> <span>+91 1234567890</span>
          </div>
          <div className="flex items-center gap-2 text-white mb-4">
            <FaEnvelope className="text-[#f05a28]" /> <span>info@ankerstk.com</span>
          </div>
          <span className="font-semibold mb-2 text-[#f05a28]">Follow Us</span>
          <div className="flex gap-4 text-2xl">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#3bb7d2] text-white">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#3bb7d2] text-white">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#3bb7d2] text-white">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#f05a28] mt-8 pt-4 text-center text-sm text-[#f05a28] flex flex-col sm:flex-row justify-between items-center gap-2 px-6 pb-4">
        <span>&copy; {new Date().getFullYear()} Anker Stack Pvt. Ltd. All rights reserved.</span>
        <span>
          Crafted with <span className="text-red-500">❤</span> by{" "}
          <a
            href="https://quickfusioninnovations.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline"
          >
            Quickfusion Innovations
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
