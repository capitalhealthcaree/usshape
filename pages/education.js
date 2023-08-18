import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const SocialJustice = () => {
  const isReserve = true;
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Education"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Education"
        bgImage="/images/education/education-bg.jpg"
      />

      <div className="service-details-area mt-5 pb-3">
        <div className="container">
          <div className="services-details-img">
            <h2>Externship/Observership/Rotation at Premier Pain Centers</h2>
            <ol type="i">
              <li>
                Applicant must be interested in interventional pain medicine
                rotation. Our LOR will be applicable to most of the residency
                programs particularly in Internal Medicine, Family Medicien,
                Neurology, PM&R, Radiology, Surgery, Anesthesia, Orthopedic
                surgery.
              </li>
              <li>
                If you are a non Pakistani physicians, $2000 per month will be
                charged. For Pakistani and students their near relatives its
                free of charge. Exceptions can be made for those who can’t
                afford fees.
              </li>
              <li>
                Please arrange your own accommodation. We don’t provide and or
                recommend any place.
              </li>
              <li>
                Main campus is in Richardson where you will spend 3 to 4 days a
                week but please be Willing to rotate at 2-3 locations on website{" "}
                <a href="http://mypremierpain.com/">mypremierpain.com</a>.
              </li>
              <li>
                Being a private practice, we don’t offer any kind of letter to
                support visa application for observership. No letter to even
                show on airport. Remember we are not and do not want to be the
                reason you are coming to United States.
              </li>
              <li>If you do not complete two weeks, you may not get LOR.</li>
              <li>
                Please don't insist for any help in getting residency
                interviews. Will help if feasible.
              </li>
            </ol>
            <h4 className="fw-bold">NOTE:</h4>
            <div style={{ color: "red", marginTop: "10px" }}>
              Starting January 2024! Each applicant will pay $250 to reserve a
              spot. If they join on time; it will be reimbursed after rotation
              ends. Many have reserved spots taking it granted and cancelled it
              a few days before which takes away right of other serious
              candidates.
            </div>
            <br />
            <div>Thanks</div>
            <div>Contact</div>
            <div>
              <b>Rao K Ali MD</b>
            </div>
            <div>
              <b>Muhammad Zulqarnain MD</b>
            </div>
            <div>
              <b>paindfw@gmail.com</b>
            </div>

            <div className="mt-2">
              <div className="form-group">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      // checked={termsConditions}
                      // onChange={() =>
                      //   setTermsConditions((prevValue) => !prevValue)
                      // }
                    />
                  </div>
                  <div className="col">
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      I agree to all terms and conditions.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="form-group">
                  <label>
                    <b> Please reserve a rotation</b>
                  </label>
                  <select
                    className="form-control"
                    name="appliedToOtherOrganization"
                    // value={contact.appliedToOtherOrganization}
                    // onChange={handleChange}
                  >
                    <option value="">Select month</option>
                    <option disabled style={{ color: isReserve && "red" }}>
                      January 1-15 {isReserve && "Reserved"}
                    </option>
                    <option>January 16-31</option>
                    <option>February 1-15</option>
                    <option>February 16-28</option>
                    <option>March 1-15</option>
                    <option>March 16-31</option>
                    <option>April 1-15</option>
                    <option>April 16-30</option>
                    <option>May 1-15</option>
                    <option>May 16-31</option>
                    <option>June 1-15</option>
                    <option>June 16-30</option>
                    <option>July 1-15</option>
                    <option>July 16-31</option>
                    <option>August 1-15</option>
                    <option>August 16-31</option>
                    <option>September 1-15</option>
                    <option>September 16-30</option>
                    <option>October 1-15</option>
                    <option>October 16-31</option>
                    <option>November 1-15</option>
                    <option>November 16-30</option>
                    <option>December 1-15</option>
                    <option>December 16-31</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SocialJustice;
