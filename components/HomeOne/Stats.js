import React from "react";

const Stats = () => {
  return (
    <>
      <div className="counter-area">
        <div className="container">
          <div className="row counter-bg">
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <i className="icofont-patient-bed"></i>
                <h3 className="counter">US 3.5B</h3>
                <p>Disbursed</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <i className="icofont-people"></i>
                <h3>
                  <span className="counter">4,000</span>+
                </h3>
                <p>Donors</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <i className="icofont-doctor-alt"></i>
                <h3 className="counter">100+</h3>
                <p>Project Partners</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <i className="icofont-badge"></i>
                <h3 className="counter">6M</h3>
                <p>Beneficiaries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
