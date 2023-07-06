import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Link from "next/link";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="home-slider"
      >
        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(/images/home-one/home-slider-bg.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape"></div>

                    <h1>Cultivating Connections for a Better Tomorrow</h1>
                    <p>
                      Our organization is dedicated to serving the less
                      fortunate and facilitating meaningful connections with
                      them.
                    </p>

                    <div className="common-btn">
                      <Link href="/donation">DONATE</Link>
                      <Link href="/contact" className="cmn-btn-right">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(/images/home-one/home-slider-bg1.png)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape-two"></div>
                    <h1>US First Donor Advised Fund</h1>
                    <p>
                      Our organization ensures that all charitable donations
                      made by individuals, corporations, and broad-based
                      initiatives reach people in need in a timely manner.
                    </p>

                    <div className="common-btn">
                      <Link href="/appointment">DONATE</Link>
                      <Link href="/contact" className="cmn-btn-right">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}

        {/* <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(/images/home-one/home-slider-bg2.png)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape-three"></div>
                    <h1>A Safe and Hassle-free Payment Platform</h1>
                    <p>
                      If you are searching to a safe and hassle free platform,
                      then you have come to the right place.
                    </p>

                    <div className="common-btn">
                      <Link href="/appointment">DONATE</Link>

                      <Link href="/contact" className="cmn-btn-right">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default HeroSlider;
