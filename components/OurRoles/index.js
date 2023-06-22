import React from "react";
import Link from "next/link";

const OurExpertise = () => {
  return (
    <>
      <div className="expertise-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>OUR ROLES</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="expertise-item">
                <div className="row">
                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <i className="icofont-doctor-alt"></i>
                      <h3>Poverty Alleviation</h3>
                      <p>
                        Focused on poverty alleviation, transforming lives
                        through empowerment.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <i className="icofont-ambulance-cross"></i>
                      <h3>Charity For Live</h3>
                      <p>
                        Supporting lives through charitable acts, making a
                        difference.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <i className="icofont-stretcher"></i>
                      <h3>Health & Medicine</h3>
                      <p>
                        Our focus is children's rights in health and medicine.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <i className="icofont-network"></i>
                      <h3>Child Education</h3>
                      <p>
                        We focus specifically on children's rights in the fieled
                        of education.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="expertise-item">
                <div className="expertise-right">
                  <img src="/images/about4.jpg" alt="Expertise" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertise;
