import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Footer from "./Footer";
import Team from "./Team";
import About from "./About";
import ContactUs from "./ContactUs";
import Galllery from "../Gallery/Galllery";
import Order from "../Order/Order";

const Homepage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Galllery />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Homepage;
