import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import NagyLoan from "../components/NagyLoan";
import Faq from "../components/Common/Faq";
import Footer from "../components/_App/Footer";

const NagyLoanContent = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Nagy Loan Program For Young Physicians"
        homePageUrl="/"
        homePageText="Home"
        activePageText="nagy-loan"
        bgImage="/images/about-bg.jpg"
      />

      <NagyLoan />

      <Faq />

      <Footer />
    </>
  );
};

export default NagyLoanContent;
