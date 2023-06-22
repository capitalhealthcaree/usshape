import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="location-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center location-wrap">
            <div className="col-sm-6 col-lg-4">
              <div className="location-item">
                <i className="icofont-location-pin"></i>
                <h3>Location</h3>
                <p>2071 N Collins Blvd Richardson TX 75080</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="location-item">
                <i className="icofont-ui-message"></i>
                <h3>Email</h3>
                <p>contact@usshape.org</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="location-item">
                <i className="icofont-ui-call"></i>
                <h3>Phone</h3>
                <p>+1 (469) 866-5222</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
