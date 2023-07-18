import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Faqs from "../components/Common/Faq";
import Footer from "../components/_App/Footer";

const Faq = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="FAQs"
        homePageUrl="/"
        homePageText="Home"
        activePageText="faqs"
        bgImage="/images/about-bg.jpg"
      />

      <Faqs />

      <Footer />
    </>
  );
};

export default Faq;
