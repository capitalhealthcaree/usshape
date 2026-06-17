import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";

import Banner from "../components/Affiliations/Banner";
import Stats from "../components/Affiliations/Stats";

// import AcademicPartnership from "../components/Affiliations/AcademicPartnership";
// import OurPrograms from "../components/Affiliations/OurPrograms";

import Footer from "../components/_App/Footer";

const Education = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
      <Banner />
      <Stats />
      {/* <AcademicPartnership /> */}
      {/* <OurPrograms /> */}
      <Footer />
    </>
  );
};
export default Education;
