import React from "react";
import BannerImg from "../../assets/4.jpg";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";

const ComingSoon = () => {
  return (
    <div className="container mx-auto py-10 md:py-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        <div className="space-y-8 flex flex-col justify-center items-center text-center md:text-left py-10 md:py-0 px-4 md:px-10 lg:px-20">
          <motion.h1
            variants={slideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-3xl md:text-4xl xl:text-5xl font-semibold text-dark-blue/80"
          >
            Playstore Launching Soon!{" "}
            <span className="text-gray-400 underline">Stay tuned</span>
          </motion.h1>
          <div className="flex flex-col md:flex-row gap-6 md:gap-3">
            <motion.div
              variants={slideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="space-y-2"
            >
              <p className="font-semibold text-lg text-dark-blue">
                Innovative Solutions
              </p>
              <p>
                We are working on something amazing to transform your
                experience.
              </p>
            </motion.div>
            <motion.div
              variants={slideUp(0.8)}
              initial="initial"
              whileInView="animate"
              className="space-y-2"
            >
              <p className="font-semibold text-lg">Stay Updated</p>
              <p>
                Sign up to be the first to know when we launch on Playstore.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center items-center py-10 md:py-0">
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            src={BannerImg}
            alt="Coming Soon"
            className="w-[60%] md:w-[60%] lg:w-[650px] xl:w-[700px] md:!scale-125"
          />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
