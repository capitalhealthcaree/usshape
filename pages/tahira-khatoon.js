import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import TahiraKhatoon from "../components/TahiraKhatoon";
import Footer from "../components/_App/Footer";

const TahiraKkhatoons = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Tahira Khatoon Educational Program"
        homePageUrl="/"
        homePageText="Home"
        activePageText="tahira-khatoon"
        bgImage="/images/about-bg.jpg"
      />

      <TahiraKhatoon />

      <Footer />
    </>
  );
};

export default TahiraKkhatoons;
