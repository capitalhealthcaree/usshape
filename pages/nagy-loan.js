import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/About/AboutContent";
import LatestBlogPost from "../components/Common/LatestBlogPost";
import Footer from "../components/_App/Footer";

const About = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Nagy Loan Program For Physicians"
        homePageUrl="/"
        homePageText="Home"
        activePageText="nagy-loan"
        bgImage="/images/about-bg.jpg"
      />

      <AboutContent />

      <LatestBlogPost />

      <Footer />
    </>
  );
};

export default About;
