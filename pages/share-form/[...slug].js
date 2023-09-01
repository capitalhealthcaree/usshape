import React from "react";
import api from "../../utils/api";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";

const FormData = ({ item }) => {
  // Parse the date string
  const parsedDate = new Date(item.createdAt);

  // Format the date
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  const formattedDate = parsedDate.toLocaleDateString("en-US", options);
  return (
    <>
      <Navbar />

      <div className="blog-area-two">
        <div className="container">
          <div className="row">
            <div
              style={{
                border: "2px solid #0046c0",
                borderRadius: "10px",
                color: "black",
              }}
            >
              <p className="m-1">
                <b> Application Date :</b> {formattedDate}
              </p>
              <h4>
                <u>Personal Info:</u>
              </h4>
              <div className="m-2">
                <b> First Name :</b> {item.firstName}
              </div>
              <div className="m-2">
                <b> Last Name :</b> {item.lastName}
              </div>
              <div className="m-2">
                <b> Email :</b> {item.email}
              </div>
              <div className="m-2">
                <b> Phone :</b> {item.phoneNumber}
              </div>
              <div className="m-2">
                <b> Date of Birth </b>: {item.dob}
              </div>
              <div className="m-2">
                <b> Permanent Address :</b> {item.permanentAddress}
              </div>
              <div className="m-2">
                <b> Temporary Address :</b> {item.temporaryAddress}
              </div>
              <div className="m-2">
                <b> Father Name :</b> {item.fatherName}
              </div>
              <div className="m-2">
                <b>Father's Occupation:</b> {item.fatherOccupation}
              </div>
              <div className="m-2">
                <b> Monthly Household Income :</b> {item.fatherIncome}
              </div>
              <div className="m-2">
                <b> Passport Number :</b> {item.passportNumber}
              </div>
              <div className="m-2">
                <b> Bank Acc. Number :</b> {item.bankAccountNumber}
              </div>
              <div className="m-2">
                <b> Swift Code :</b> {item.swiftCode}
              </div>
              <div
                className="m-1 p-1"
                style={{
                  border: "1px solid #0046c0",
                  borderRadius: "10px",
                  color: "black",
                }}
              >
                Have you applied for a loan from any other organization such as
                your medical college, alumni, or any physician working in the
                USA or Pakistan? <b>: {item.appliedToOtherOrganization}</b>
              </div>
              <div
                className="m-1 p-1"
                style={{
                  border: "1px solid #0046c0",
                  borderRadius: "10px",
                  color: "black",
                }}
              >
                Nationality/Permanent Residency/Work Permit of any country other
                than Pakistan <b>: {item.nationalityOtherThanPakistan}</b>
              </div>
              <div
                className="m-1 p-1"
                style={{
                  border: "1px solid #0046c0",
                  borderRadius: "10px",
                  color: "black",
                }}
              >
                Have you travelled internationally for personal or professional
                reasons to attend conferences or to do electives?{" "}
                <b>: {item.travelledInternationally}</b>
              </div>

              {item.travelledInternationally == "Yes" && (
                <div
                  className="m-1 p-1"
                  style={{
                    border: "1px solid #0046c0",
                    borderRadius: "10px",
                    color: "black",
                  }}
                >
                  <p>
                    <b>If "Yes", Please Provide details :</b>{" "}
                    {item.travelledInternationallyDetails}
                  </p>
                </div>
              )}

              <div
                className="m-1 p-1"
                style={{
                  border: "1px solid #0046c0",
                  borderRadius: "10px",
                  color: "black",
                }}
              >
                <b> Why you should be considered :</b>
                <br /> {item.whyWeConsidered}
              </div>
            </div>
            <div
              className="mt-2"
              style={{
                border: "2px solid #0046c0",
                borderRadius: "10px",
                color: "black",
              }}
            >
              <h4>
                <u>Educational Info:</u>
              </h4>
              <div className="m-2">
                <b>Graduation Year :</b> {item.graduationYear}
              </div>
              <div className="m-2">
                <b> College Name : </b>
                {item.collegeName}
              </div>
              <div className="m-2">
                <b> 1st Professional MBBS Grade :</b> {item.firstYearGrade}
              </div>
              <div className="m-2">
                <b> 2nd Professional MBBS Grade</b>: {item.secondYearGrade}
              </div>
              <div className="m-2">
                <b> 3rd Professional MBBS Grade :</b> {item.thirdYearGrade}
              </div>
              <div className="m-2">
                <b> Final Professional MBBS Grade :</b> {item.finalYearGrade}
              </div>
              <div
                className="m-1 p-1"
                style={{
                  border: "1px solid #0046c0",
                  borderRadius: "10px",
                  color: "black",
                }}
              >
                <b> Other Qualifications (if any)</b>:<br />
                {item.otherQualifications}
              </div>
              <div
                className="m-1 p-1"
                style={{
                  border: "1px solid #0046c0",
                  borderRadius: "10px",
                  color: "black",
                }}
              >
                <b> Awards & Honors (if any) :</b>
                <br /> {item.awardsHonors}
              </div>
            </div>
            <div
              className="mt-2"
              style={{
                border: "2px solid #0046c0",
                borderRadius: "10px",
                color: "black",
              }}
            >
              <h4>
                <u>USMLE Scores:</u>
              </h4>
              <div className="d-flex align-content-start flex-wrap p-1">
                <div>
                  <b>Step 1 : </b> Score <b>: {item.step1Score}</b>
                </div>
                <div className="ms-1">|</div>
                <div className="ms-1">
                  Attempt <b>: {item.step1Attempt}</b>
                </div>
              </div>

              <div className="d-flex align-content-start flex-wrap p-1">
                <div>
                  <b>Step 2 CK : </b> Score <b>: {item.step2CKScore}</b>
                </div>
                <div className="ms-1">|</div>
                <div className="ms-1">
                  Attempt <b>: {item.step2CKAttempt}</b>
                </div>
              </div>
              <div className="d-flex align-content-start flex-wrap p-1">
                <div>
                  <b>Step 2 CS : </b> Score <b>: {item.step2CSScore}</b>
                </div>
                <div className="ms-1">|</div>
                <div className="ms-1">
                  Attempt <b>: {item.step2CSAttempt}</b>
                </div>
              </div>
              <div className="d-flex align-content-start flex-wrap p-1">
                <div>
                  <b>Step 3 : </b> Score <b>: {item.step3Score}</b>
                </div>
                <div className="ms-1">|</div>
                <div className="ms-1">
                  Attempt <b>: {item.step3Attempt}</b>
                </div>
              </div>
            </div>
            <div
              className="mt-2 p-2"
              style={{
                backgroundColor: "rgb(135, 206, 250)",
                border: "2px solid #0046c0",
                borderRadius: "10px",
                color: "black",
              }}
            >
              <b>Electronic Signature :</b> {item.signature}
            </div>
            <h4>Character Certificate</h4>
            <div className="col-12">
              <iframe
                src={item.certificateFileUrl}
                height="500"
                width="100%"
              ></iframe>
            </div>
            <h4>Last Three Electric Bill</h4>
            <div className="col-12">
              <iframe
                src={item.billImageUrls[0]}
                height="600"
                width="100%"
              ></iframe>
            </div>
            <div className="col-12">
              <iframe
                src={item.billImageUrls[0]}
                height="600"
                width="100%"
              ></iframe>
            </div>
            <div className="col-12">
              <iframe
                src={item.billImageUrls[0]}
                height="600"
                width="100%"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FormData;

export const getServerSideProps = async ({ query: { slug } }) => {
  const formData = await api.get(`/getApplicationFormByUrl?url=${slug}`);
  const data = await formData.data.data;
  return {
    props: {
      item: data,
    },
  };
};
