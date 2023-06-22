import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import StoryOne from "../components/SuccessStories/StoryOne";
import StoryTwo from "../components/SuccessStories/StoryTwo";
import Footer from "../components/_App/Footer";

const SuccessStories = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Success Stories"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Success Stories"
        bgImage="/images/about.jpg"
      />

      <StoryOne />

      <StoryTwo />

      <Footer />
    </>
  );
};

export default SuccessStories;
