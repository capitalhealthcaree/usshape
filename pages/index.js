import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import HeroSlider from "../components/HomeOne/HeroSlider";
// import Stats from "../components/HomeOne/Stats";
import AboutSection from "../components/HomeOne/AboutSection";
import OurRoles from "../components/OurRoles";
import Alumnis from "../components/HomeOne/Alumnis";
import UsShapeTab from "../components/Common/UsShapeTab";
// import LatestBlogPost from "../components/Common/LatestBlogPost";
import Gallery from "../components/Common/Gallery";
import Footer from "../components/_App/Footer";
import FaqSection from "../components/Common/FaqSection";
// import Faq from "../components/Common/Faq";

import StrategicObjectives from "../components/HomeOne/StrategicObjectives";
const Index = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <HeroSlider />

      {/* <Stats /> */}

      <AboutSection />

      <OurRoles />

      <UsShapeTab />

      <StrategicObjectives />

      {/* <Gallery /> */}

      <FaqSection />

      {/* <Faq /> */}

      {/* <LatestBlogPost /> */}
      <Alumnis />

      <Footer />
    </>
  );
};
//..................
export default Index;
