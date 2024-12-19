import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/2.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-10 text-white">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img
              src={Logo}
              alt="MindMend Logo"
              className="w-24 h-24 mx-auto md:mx-0"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 text-sm">
            <a
              href="../../components/Home/Home"
              className="text-white hover:text-blue-500 transition duration-200"
            >
              Home
            </a>
            <a
              href="../../components/features/Features"
              className="text-white hover:text-blue-500 transition duration-200"
            >
              Features
            </a>
            <a
              href="../../components/Email/ContactUs"
              className="text-white hover:text-blue-500 transition duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition duration-200"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition duration-200"
            >
              <FaLinkedin size={28} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white text-center md:text-right">
            &copy; {new Date().getFullYear()} MindMend. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
