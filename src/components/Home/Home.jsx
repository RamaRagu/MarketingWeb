import React from "react";
import HeroImg from "../../assets/marketing/market/1.png";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";

const Home = () => {
  return (
    <>
      <div className="container">
        {/* Video Section */}
        <div className="grid grid-cols-1 min-h-[500px] flex justify-center items-center mb-10">
          <div className="w-full md:w-[100%] lg:w-[100%] aspect-w-16 aspect-h-9 flex justify-center">
            <motion.video
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto rounded-xl shadow-xl"
            >
              <source
                src="https://res.cloudinary.com/dyfboroga/video/upload/v1734548902/jk8fh0onnuudycley9tf.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </motion.video>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
          {/* Text content section */}
          <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-start">
            <motion.h1
              variants={slideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl xl:text-5xl font-bold text-dark-blue"
            >
              Therapy is not just treatment, <br />
              it's a journey of growth.{" "}
              <span className="text-gray-400 underline">
                Empower the future
              </span>
            </motion.h1>
            <motion.p
              variants={slideUp(0.5)}
              initial="initial"
              animate="animate"
              className="text-xl text-dark-blue"
            >
              MindMend is here to support children with autism and empower their
              families through personalized care, advanced AI therapy, and
              seamless tracking.
            </motion.p>
            <motion.button
              variants={slideUp(0.8)}
              initial="initial"
              animate="animate"
              className="primary-btn bg-gray-900 hover:bg-primary duration-300"
            >
              Discover More
            </motion.button>
          </div>
          {/* Hero Image section */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={HeroImg}
              alt="MindMend"
              className="w-[90%] md:w-[550px] xl:w-[600px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
