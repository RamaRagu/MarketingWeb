import React from "react";
import Logo from "../../assets/1.png";
import { motion } from "framer-motion";
import { slideBottom } from "../../utility/animation";

const NavbarLinks = [
  {
    id: 1,
    title: "Home",
    link: "./components/Home/Home",
  },
  {
    id: 2,
    title: "Features",
    link: "./components/features/Features",
  },
  {
    id: 3,
    title: "News",
    link: "./components/Banner/Banner",
  },
  {
    id: 4,
    title: "Contact",
    link: "./components/Email/ContactUs",
  },
];
const Navbar = () => {
  return (
    <motion.nav
      variants={slideBottom(0.2)}
      initial="initial"
      animate="animate"
      className="bg-dark-blue text-0D1556 py-4 shadow-md"
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="MindMend Logo" className="w-12 h-12" />
          <h1 className="text-2xl font-bold">MindMend</h1>
        </div>
        <ul className="flex gap-6">
          {NavbarLinks.map((link) => (
            <li key={link.id}>
              <a href={link.link} className="hover:text-light-blue">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
