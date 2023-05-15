import React from "react";

import {Outlet} from 'react-router-dom'

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";


const Accueil = () => {
  return (
    <>
      {/* ======= Header ======= */}
      <Navbar />
      {/* .navbar */}
      {/* End Header */}
      {/* ======= Hero Section ======= */}
      <Banner />
      {/* End Hero */}
      <Outlet/>
      {/* <LandingPage/> */}
      {/* End #main */}
      {/* ======= Footer ======= */}
      <Footer />
      {/* End Footer */}
      <a
        href="/#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  );
};

export default Accueil;
