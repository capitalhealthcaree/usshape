import React from "react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <>
      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-left">
                  <img src="/images/about.jpg" alt="About" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-item about-right">
                <h2>Rise Your Hand to Help The Poor Children</h2>
                <p>
                  Clothing, food, education, and health care are among the needs
                  of the poor. Poverty is defined as a state of economic,
                  political, and social deprivation. Poverty is almost
                  impossible to overcome. Due to inadequate nutrition, increased
                  disease risk, and lack of access to healthcare and basic
                  necessities for living, they are less likely to achieve
                  academically. Providing assistance to poor and needy people
                  strengthens their dependency on you. Providing the individual
                  with the opportunity or the chance will significantly and
                  permanently improve their quality of life. A donation of money
                  or other form of assistance will benefit poor and needy
                  individuals.
                </p>

                <ul>
                  <div className="row">
                    <div className="col-sm-12 col-lg-6">
                      <li>
                        <i className="icofont-check-circled"></i>
                        Charity For Social Justice
                      </li>
                      <li>
                        <i className="icofont-check-circled"></i>
                        Charity For Advocacy
                      </li>
                      <li>
                        <i className="icofont-check-circled"></i>
                        Charity For Education
                      </li>
                    </div>

                    <div className="col-sm-12 col-lg-6 mt-2">
                      <li>
                        <i className="icofont-check-circled"></i>
                        Charity For Healthcare
                      </li>{" "}
                      <li>
                        <i className="icofont-check-circled"></i>
                        Charity For Poverty
                      </li>{" "}
                      <li>
                        <i className="icofont-check-circled"></i>
                        24/7 Online Support
                      </li>{" "}
                    </div>
                  </div>
                </ul>

                <Link href="/donation">DONATE</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
