import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="welcome-area ptb-100">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-6 p-0">
              <div className="welcome-item welcome-left">
                <img src="/images/about3.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 p-0">
              <div className="welcome-item welcome-right">
                <div className="section-title-two">
                  {/* <span>About Us</span> */}
                  <h2>Strategic Objectives</h2>
                </div>

                <ul>
                  <li>
                    <i className="icofont-doctor-alt"></i>
                    <div className="welcome-inner">
                      <h3>Children's Rights</h3>
                      <p>
                        Advocating for the rights and improvement of the welfare
                        of children, and curb down the conditions affecting
                        children in Uganda.
                      </p>
                    </div>
                  </li>
                  <li>
                    <i className="icofont-stretcher"></i>
                    <div className="welcome-inner">
                      <h3>Skills Development</h3>
                      <p>
                        Enhancing skills and capacity of the communities to
                        identify and manage their own resources towards caring
                        for their children sustainably.
                      </p>
                    </div>
                  </li>
                  <li>
                    <i className="icofont-network"></i>
                    <div className="welcome-inner">
                      <h3>Collaboration</h3>
                      <p>
                        Working with other CSOs, Coalitions, Networks, and
                        institutions with interest in the welfare and promotion
                        of the rights of children.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
