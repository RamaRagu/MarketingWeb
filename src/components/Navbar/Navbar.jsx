import React, { useState } from "react";
import Logo from "../../assets/1.png";
import { motion } from "framer-motion";
import { slideBottom } from "../../utility/animation";
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarLinks = [
  { id: 1, title: "Home", ref: "homeRef" },
  { id: 2, title: "Features", ref: "featuresRef" },
  { id: 3, title: "News", ref: "newsRef" },
  { id: 4, title: "Contact", ref: "contactRef" },
];

const Navbar = ({ scrollToSection, refs }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <motion.nav
      variants={slideBottom(0.2)}
      initial="initial"
      animate="animate"
      className="bg-dark-blue text-navy py-4 shadow-md relative"
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="MindMend Logo" className="w-12 h-12" />
          <h1 className="text-2xl font-bold">MindMend</h1>
        </div>
        <ul className="hidden md:flex gap-6">
          {NavbarLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(refs[link.ref])}
                className="hover:text-light-blue"
              >
                {link.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <FaTimes
              onClick={toggleMobileMenu}
              size={24}
              className="cursor-pointer text-gray-900"
            />
          ) : (
            <FaBars
              onClick={toggleMobileMenu}
              size={24}
              className="cursor-pointer text-gray-900"
            />
          )}
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-blue">
          <ul className="flex flex-col items-center gap-4 py-4">
            {NavbarLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => {
                    scrollToSection(refs[link.ref]);
                    setIsMobileMenuOpen(false);
                  }}
                  className="hover:text-light-blue"
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
