import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import DonationForm from "../components/Donation/DonationForm";
import FaqSection from "../components/Common/FaqSection";
import Footer from "../components/_App/Footer";

const Donation = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
      <DonationForm />
      <FaqSection />
      <Footer />
    </>
  );
};
export default Donation;
