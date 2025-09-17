import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi"; // use react-icons instead of inline SVG
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg"; // place logo inside src/assets/

// Navigation links
const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "vision", label: "Vision" },
  { to: "solutions", label: "Solutions" },
  { to: "policies", label: "Policies" },
  { to: "contact", label: "Contact" },
];

// Reusable NavLink
const CustomNavLink = ({ to, label, isContact = false, isMobile = false, onClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    // Navigate to homepage first if not already there
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate(`/#${to}`);
    }
    if (onClick) onClick();
  };

  const desktopLinkClasses =
    "text-[#001f3f] hover:text-[#f05a28] font-bold text-lg px-2 py-1 rounded transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-1 after:bg-[#f05a28] after:transition-all after:duration-300 hover:after:w-full cursor-pointer";

  const desktopContactClasses =
    "bg-[#f05a28] text-white px-6 py-2 font-bold rounded shadow hover:bg-[#001f3f] hover:text-white border-2 border-[#001f3f] transition-all duration-300 cursor-pointer";

  const mobileLinkClasses =
    "text-black font-semibold text-7xl px-6 py-5 border-b border-gray-200 text-center hover:bg-gray-50 cursor-pointer";

  return (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      activeClass="text-[#f05a28]"
      onClick={handleClick}
      className={
        isMobile
          ? mobileLinkClasses
          : isContact
          ? desktopContactClasses
          : desktopLinkClasses
      }
    >
      {label}
    </ScrollLink>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to section if URL has hash on load
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      scroller.scrollTo(targetId, {
        smooth: true,
        offset: -100,
        duration: 500,
      });
    }
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <nav
      role="navigation"
      className="fixed top-0 left-0 w-full bg-white backdrop-blur shadow z-50 h-16 sm:h-24"
    >
      <div className="container mx-auto flex justify-between items-center h-16 sm:h-24 px-4">
        {/* Logo */}
        <RouterLink
          to="/"
          className="ml-0 sm:ml-10 flex items-center justify-center gap-2 group cursor-pointer"
        >
          <img
            src={logo}
            alt="Company Logo"
            className="h-10 w-10 sm:h-20 sm:w-20 rounded"
          />
        </RouterLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks
            .filter(({ to }) => to !== "contact")
            .map(({ to, label }) => (
              <li key={to}>
                <CustomNavLink to={to} label={label} />
              </li>
            ))}
          <li>
            <CustomNavLink to="contact" label="Contact" isContact />
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-[#001f3f] focus:outline-none p-2 border-2 border-[#f05a28] rounded shadow-lg hover:bg-[#001f3f] hover:text-[#f05a28] transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <IoMdClose className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
        </button>
      </div>

        {/* Overlay for mobile menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isMenuOpen ? 'bg-black/40 opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        
        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 w-full h-screen bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out flex flex-col
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-3xl text-[#a10000] hover:text-black focus:outline-none z-50"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <IoMdClose />
          </button>
          <div className="flex flex-col w-full h-full space-y-8  justify-center items-center">
            {navLinks.map(({ to, label }) => (
              <CustomNavLink 
                key={to}
                to={to}
                label={label}
                onClick={() => setIsMenuOpen(false)}
                className="text-black font-semibold text-7xl px-6 py-5 border-b border-gray-200 text-center hover:bg-gray-50 cursor-pointer"
              />
            ))}
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
