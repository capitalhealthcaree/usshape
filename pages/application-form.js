import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ApplicationForm from "../components/ApplicationForm";
import Footer from "../components/_App/Footer";

const ApplicationForms = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Need Based Limited Term Loan for Medical Graduates (NBLTLMG)"
        homePageUrl="/"
        homePageText="Home"
        activePageText="application-form"
        bgImage="/images/contact-bg.jpg"
      />

      <ApplicationForm />

      <Footer />
    </>
  );
};

export default ApplicationForms;
