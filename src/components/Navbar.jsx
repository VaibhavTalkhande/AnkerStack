import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg"; // place logo inside src/assets/
const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "vision", label: "Vision" },
  { to: "solutions", label: "Solutions" },
  { to: "policies", label: "Policies" },
  { to: "contact", label: "Contact" },
];

// Reusable NavLink
const CustomNavLink = ({ to, label, isContact = false, onClick }) => {
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
    "text-[#001f3f] font-semibold text-lg px-6 py-4 border-b border-gray-200 text-left hover:bg-gray-50 cursor-pointer";

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
        isContact
          ? desktopContactClasses
          : onClick
          ? mobileLinkClasses
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
    <nav className="fixed overflow-hidden top-0 left-0 w-full bg-white backdrop-blur shadow z-50 h-16 sm:h-24">
      <div className="container mx-auto flex justify-between items-center h-16 sm:h-24 px-4">
        {/* Logo */}
        <RouterLink
          to="/"
          className="ml-10 flex items-center justify-center gap-2 group cursor-pointer"
        >
          <img
            src={logo}
            alt="AnkerStack Logo"
            className=" h-20 w-20 rounded"
          />

        </RouterLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks
            .filter(({ to }) => to !== "contact")
            .map(({ to, label }) => (
              <CustomNavLink key={to} to={to} label={label} />
            ))}
          <CustomNavLink to="contact" label="Contact" isContact={true} />
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-[#001f3f] focus:outline-none p-2 border-2 border-[#f05a28] rounded shadow-lg hover:bg-[#001f3f] hover:text-[#f05a28] transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? (
            <IoMdClose className="w-7 h-7" />
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-full h-screen bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out flex flex-col
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 text-3xl text-[#001f3f] hover:text-[#f05a28] focus:outline-none z-50"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <IoMdClose />
        </button>

        <div className="flex flex-col w-full pt-16">
          {navLinks.map(({ to, label }) => (
            <CustomNavLink
              key={to}
              to={to}
              label={label}
              onClick={() => setIsMenuOpen(false)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
