import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SplashScreen = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onLoadComplete();
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/path-to-your-logo.png"
          alt="MindMend Logo"
          className="w-24 h-24 mb-4"
        />
        <p className="text-xl font-bold text-gray-700">MindMend</p>
        <div className="mt-6 w-64 h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-4 bg-blue-500 transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-2 text-sm text-gray-500">{progress}%</p>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
