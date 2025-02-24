import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Logo from "./assets/1.png";
import Home from "./components/Home/Home";
import Banner from "./components/Banner/Banner";
import Features from "./components/feature/Features";
import Banner2 from "./components/Banner/Banner2";
import ContactUs from "./components/Email/ContactUs";
import ComingSoon from "./components/Banner/comingSoon";
import Footer from "./components/Footer/footer";
import Team from "./components/Team/Team";

const SplashScreen = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light-blue text-dark-gray">
      {loadingPercentage < 100 ? (
        <div className="text-4xl font-bold">Loading {loadingPercentage}%</div>
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

  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const newsRef = useRef(null);
  const contactRef = useRef(null);
  const teamRef = useRef(null);
  const comingSoonRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-light-blue text-dark-gray">
      {showSplashScreen ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar
            scrollToSection={scrollToSection}
            refs={{
              homeRef,
              featuresRef,
              newsRef,
              contactRef,
              teamRef,
              comingSoonRef,
            }}
          />
          <div ref={homeRef} id="home">
            <Home />
          </div>
          <div ref={featuresRef} id="features">
            <Banner2 />
            <Features />
          </div>
          <div ref={newsRef} id="news">
            <Banner />
          </div>
          <div ref={teamRef} id="team">
            <Team />
          </div>
          <div ref={comingSoonRef} id="coming-soon">
            <ComingSoon />
          </div>
          <div ref={contactRef} id="contact">
            <ContactUs />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
