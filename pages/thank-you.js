import React from "react";
import Link from "next/link";
import TopHeader from "../components/_App/TopHeader";
import StrategicObjectives from "../components/HomeOne/StrategicObjectives";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";

const ThankYou = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <div
        className="page-title-area"
        style={{
          backgroundImage: `url(/images/health-care/health-care-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="page-title-item">
              <h1 style={{ color: "white" }}>
                Thank You for Your Generous Donation!
              </h1>
              <ul style={{ color: "white" }}>
                We wanted to take a moment to express our deepest gratitude for
                your generous contribution to{" "}
                <b>
                  <Link href="/" style={{ color: "white" }}>
                    {" "}
                    USSHAPE
                  </Link>
                </b>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <StrategicObjectives />

      <Footer />
    </>
  );
};
export default ThankYou;
