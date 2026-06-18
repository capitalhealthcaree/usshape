import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import WhatWeDo from "../components/Affiliations/WhatWeDo";
import AcademicPartnership from "../components/Affiliations/AcademicPartnership";
import OurPrograms from "../components/Affiliations/OurPrograms";
import Footer from "../components/_App/Footer";

const Education = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
      <PageBanner
        pageTitle="Approved Clinical Training Affiliation"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Affiliations"
        bgImage="/images/about-bg.jpg"
      />
      <WhatWeDo />
      <AcademicPartnership />
      <OurPrograms />
      <Footer />
    </>
  );
};
export default Education;
