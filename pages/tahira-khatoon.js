import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import TahiraKhatoon from "../components/TahiraKhatoon";
// import LatestBlogPost from "../components/Common/LatestBlogPost";
import Faq from "../components/Common/Faq";

import Footer from "../components/_App/Footer";

const About = () => {
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

      {/* <Faq /> */}

      {/* <LatestBlogPost /> */}

      <Footer />
    </>
  );
};

export default About;
