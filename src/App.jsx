import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
// import Team from "./components/team/Team";
import Banner from "./components/Banner/Banner";
import Features from "./components/feature/Features";
import Banner2 from "./components/Banner/Banner2";
import ContactUs from "./components/Email/ContactUs";

const App = () => {
  return (
    <div className="bg-light-blue text-dark-gray">
      <Navbar />
      <Home />
      <Banner2 />
      <Features />
      <Banner />
      {/* <Team /> */}
      <ContactUs />
    </div>
  );
};

export default App;
