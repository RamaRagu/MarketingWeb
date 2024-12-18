import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import FooterImg from "../../assets/5.png";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const ContactUs = () => {
  return (
    <div style={bgStyle}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="container text-center space-y-10 py-10"
      >
        <div className="space-y-4">
          <p className="text-3xl md:text-4xl font-bold">Join our email</p>
        </div>
        <div className=" space-y-5">
          <button className="primary-btn bg-gray-900 hover:bg-primary duration-300">
            Subscribe
          </button>
          <div className="flex flex-row justify-center gap-3">
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
