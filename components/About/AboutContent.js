import React from "react";

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
                <h2>USSHAPE</h2>
                <p>
                  Our organization is dedicated to serving the less fortunate
                  and facilitating meaningful connections with them. Our name
                  reflects our core values: S for Social Justice, H for
                  Healthcare, A for Advocacy, P for Poverty Alleviation, and E
                  for Education. When we integrate these principles, we realize
                  that they collectively work for the poor's betterment. We can
                  serve impoverished communities by providing food, clean water,
                  shelter, and clothing.
                </p>
                <p>
                  Creating a comprehensive and sustainable approach to poverty
                  alleviation can be achieved by pooling resources, sharing
                  expertise, and coordinating efforts. Taking care of the
                  immediate needs of poor people can make a significant
                  difference in their lives. Moreover, they may be able to
                  advocate for systemic changes in order to combat poverty.By
                  working together as a community, we can provide the
                  underprivileged with the necessary support and comfort that
                  they cannot obtain on their own.
                </p>
                <ul>
                  <div className="row">
                    <div className="col-6">
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

                    <div className="col-6">
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
                      </li>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
