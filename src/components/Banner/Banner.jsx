import React from "react";
import BannerImg from "../../assets/marketing/market/3.svg";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";

const Banner = () => {
  return (
    <>
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
          {/* Text content section */}
          <div className="space-y-8 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-10 md:py-0 md:px-0 md:items-start">
            <motion.h1
              variants={slideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl xl:text-5xl font-semibold text-dark-blue/80"
            >
              Unlocking the potential within, one step at a time.{" "}
              <span className="text-gray-400 underline">
                Empower every child
              </span>
            </motion.h1>
            <div className="flex gap-3">
              <motion.div
                variants={slideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="space-y-2"
              >
                <p className="font-semibold text-lg text-dark-blue">
                  AI-Powered Support
                </p>
                <p>
                  Transforming how we understand and nurture children with
                  autism.
                </p>
              </motion.div>
              <motion.div
                variants={slideUp(0.8)}
                initial="initial"
                whileInView="animate"
                className="space-y-2"
              >
                <p className="font-semibold text-lg">Personalized Growth</p>
                <p>
                  Empowering families with insights for meaningful progress.
                </p>
              </motion.div>
            </div>
          </div>
          {/* Banner Image section */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{
                opacity: 0,
                x: 100,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={BannerImg}
              alt="MindMend"
              className="w-[90%] md:w-[650px] xl:w-[700px] md:!scale-125"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
