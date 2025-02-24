import React from "react";
import TeamImg1 from "../../assets/team/1.jpg";
import TeamImg2 from "../../assets/team/2.jpg";
import TeamImg3 from "../../assets/team/3.jpg";
import TeamImg4 from "../../assets/team/4.jpg";
import TeamImg5 from "../../assets/team/1.jpg";
import TeamImg6 from "../../assets/team/5.jpg";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";

const Team = () => {
  return (
    <div className="container py-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        Meet the Minds Behind MindMend – A Passionate Team Dedicated to Autism
        Support and Innovation! 🚀💙
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <motion.div
          variants={slideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="bg-white shadow-xl rounded-xl px-5 py-10 text-center text-dark-blue flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
        >
          <img
            src={TeamImg1}
            alt="Team Leader"
            className="w-32 h-32 rounded-full"
          />
          <p className="text-xl font-semibold text-dark-blue">Akaash Sasiraj</p>
          <p className="text-sm text-dark-blue/80 leading-relaxed">
            Frontend Lead & UIUX Designer
          </p>
        </motion.div>
        <motion.div
          variants={slideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="bg-white shadow-xl rounded-xl px-5 py-10 text-center text-dark-blue flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
        >
          <img
            src={TeamImg2}
            alt="Team Member 2"
            className="w-32 h-32 rounded-full"
          />
          <p className="text-xl font-semibold text-dark-blue">Rama Raguram</p>
          <p className="text-sm text-dark-blue/80 leading-relaxed">
            Backend Developer & Machine Learning Engineer
          </p>
        </motion.div>
        <motion.div
          variants={slideUp(0.6)}
          initial="initial"
          whileInView="animate"
          className="bg-white shadow-xl rounded-xl px-5 py-10 text-center text-dark-blue flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
        >
          <img
            src={TeamImg3}
            alt="Team Member 3"
            className="w-32 h-32 rounded-full"
          />
          <p className="text-xl font-semibold text-dark-blue">
            Saranujan Gunanesan
          </p>
          <p className="text-sm text-dark-blue/80 leading-relaxed">
            Game Developer
          </p>
        </motion.div>
        <motion.div
          variants={slideUp(0.8)}
          initial="initial"
          whileInView="animate"
          className="bg-white shadow-xl rounded-xl px-5 py-10 text-center text-dark-blue flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
        >
          <img
            src={TeamImg4}
            alt="Team Member 4"
            className="w-32 h-32 rounded-full"
          />
          <p className="text-xl font-semibold text-dark-blue">
            Shakthi Rajendran
          </p>
          <p className="text-sm text-dark-blue/80 leading-relaxed">
            Game Developer
          </p>
        </motion.div>
        <motion.div
          variants={slideUp(1.0)}
          initial="initial"
          whileInView="animate"
          className="bg-white shadow-xl rounded-xl px-5 py-10 text-center text-dark-blue flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
        >
          <img
            src={TeamImg5}
            alt="Team Member 5"
            className="w-32 h-32 rounded-full"
          />
          <p className="text-xl font-semibold text-dark-blue">Shahana</p>
          <p className="text-sm text-dark-blue/80 leading-relaxed">
            Frontend Developer
          </p>
        </motion.div>
        <motion.div
          variants={slideUp(1.2)}
          initial="initial"
          whileInView="animate"
          className="bg-white shadow-xl rounded-xl px-5 py-10 text-center text-dark-blue flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
        >
          <img
            src={TeamImg6}
            alt="Team Member 6"
            className="w-32 h-32 rounded-full"
          />
          <p className="text-xl font-semibold text-dark-blue">Kerusan </p>
          <p className="text-sm text-dark-blue/80 leading-relaxed">
            UIUX Designer
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
