import { Swiper, SwiperSlide } from "swiper/react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import About from "../components/alumni/about";
import AlumniSuccessStories from "../components/alumni/alumni-success-stories";
import AlumniBenefits from "../components/alumni/alumni-benefits";

import Footer from "../components/_App/Footer";

const HealthCare = () => {
  return (
    <>
      <TopHeader />
      <Navbar />

      <Swiper
        slidesPerView={1}
        navigation={false}
        className="home-slider home-slider-five"
      >
        <SwiperSlide>
          <div
            className="slider-item slider-item-three"
            style={{
              backgroundImage: `url(/images/alumni/banner.png)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <h1 className="">Welcome to the USSHAPE Alumni Network</h1>
                    <p>
                      A community of dedicated physicians who have benefited
                      from the support of USSHAPE, empowering you to grow,
                      connect, and make an impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <About />

      <div className="container">
        <div className="section-title">
          <h2>Your Privacy Matters</h2>
          <p>
            At <b>USSHAPE</b>, we respect your privacy. Your participation in
            our alumni network will not disclose sensitive details like loan
            amounts, consultation types, or program participation specifics. We
            aim to celebrate the community as a whole, focusing on professional
            growth and networking.
          </p>
          <p>
            When you join the alumni network, your data is handled securely, and
            you have full control over what information is shared with others.
            Our goal is to create an inclusive, supportive community where you
            can engage at your own comfort level.
          </p>
        </div>
      </div>
      <AlumniBenefits />
      <AlumniSuccessStories />
      <Footer />
    </>
  );
};
export default HealthCare;
