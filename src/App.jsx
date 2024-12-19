import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Logo from "./assets/1.png";
import Home from "./components/Home/Home";
// import Team from "./components/team/Team";
import Banner from "./components/Banner/Banner";
import Features from "./components/feature/Features";
import Banner2 from "./components/Banner/Banner2";
import ContactUs from "./components/Email/ContactUs";

const SplashScreen = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 30); // Adjust speed of loading here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light-blue text-dark-gray">
      {loadingPercentage < 100 ? (
        <>
          <div className="text-4xl font-bold">Loading {loadingPercentage}%</div>
        </>
      ) : (
        <div className="text-center">
          <img src={Logo} alt="MindMend Logo" className="w-25 h-25" />
          <h1 className="text-4xl font-bold mt-4">MindMend</h1>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-light-blue text-dark-gray">
      {showSplashScreen ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar />
          <Home />
          <Banner2 />
          <Features />
          <Banner />
          {/* <Team /> */}
          <ContactUs />
        </>
      )}
    </div>
  );
};

export default App;
