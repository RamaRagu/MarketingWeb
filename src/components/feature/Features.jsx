import React from "react";
import Img1 from "../../assets/marketing/1.png";
import Img2 from "../../assets/marketing/3.png";
import Img3 from "../../assets/marketing/2.png";
import { slideUp } from "../../utility/animation";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <>
      <div className="bg-gray-50">
        <div className="container py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
              variants={slideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="bg-white shadow-xl rounded-xl px-5 py-10 text-center text-dark-blue flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
            >
              <img
                src={Img1}
                alt="AI-Based Speech Therapy"
                className="w-25 h-25 object-contain p-3 bg-grey-20 text-dark-blue"
              />
              <p className="text-xl font-semibold text-dark-blue">
                AI-Based Speech Therapy
              </p>
              <p className="text-sm text-dark-blue/80 leading-relaxed">
                Empowering children with autism through AI-driven speech
                therapy, enhancing communication and social interaction skills.
              </p>
              <a href="#">Learn More</a>
            </motion.div>
            <motion.div
              variants={slideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="bg-white shadow-md px-5 py-10 text-center flex flex-col justify-center text-dark-blue items-center gap-5 md:max-w-[280px] mx-auto"
            >
              <img
                src={Img2}
                alt="Tracker"
                className="w-15 h-15 object-contain p-3 bg-grey-20 text-dark-blue"
              />
              <p className="text-xl font-semibold text-dark-blue">Tracker</p>
              <p className="text-sm text-dark-blue/80">
                Keep track of your child's progress with personalized reminders,
                activity tracking, and autism severity assessments.
              </p>
              <a href="#">Learn More</a>
            </motion.div>
            <motion.div
              variants={slideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="bg-white shadow-md px-5 py-10 text-dark-blue text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
            >
              <img
                src={Img3}
                alt="Chatbot"
                className="w-25 h-25 object-contain p-3 bg-grey-20"
              />
              <p className="text-xl font-semibold text-dark-blue">Chatbot</p>
              <p className="text-sm text-dark-blue/80">
                An intelligent chatbot that helps assess the severity of autism
                and assists caregivers in providing better support.
              </p>
              <a href="#">Learn More</a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
