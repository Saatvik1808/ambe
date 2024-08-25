import React from "react";
import Destinations from "./components/Destinations";
import DownloadApp from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Tours from "./components/Tours";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <Services />
      <Destinations />
      <Offer />
      <Tours />
      <Testimonial />
      <Contact/>
      <Footer />
    </div>
  );
}
