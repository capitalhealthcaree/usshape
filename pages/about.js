import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/About/AboutContent";
import AboutStats from "../components/About/AboutStats";
import LatestBlogPost from "../components/Common/LatestBlogPost";
import Footer from "../components/_App/Footer";

const About = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
        bgImage="/images/about-bg.jpg"
      />

      <AboutContent />

      <AboutStats />

      <LatestBlogPost />

      <Footer />
    </>
  );
};

export default About;
