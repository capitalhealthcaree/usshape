import React from "react";
import api from "../../utils/api";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";

const FormData = ({ item }) => {
  return (
    <>
      <Navbar />

      <div className="blog-area-two">
        <div className="container">
          <div className="row justify-content-center">
            {item.map((item, i) => {
              // Parse the date string
              const parsedDate = new Date(item.createdAt);
              // Format the date
              const options = {
                year: "numeric",
                month: "long",
                day: "2-digit",
              };
              const formattedDate = parsedDate.toLocaleDateString(
                "en-US",
                options
              );

              return (
                <div className="col-md-6 col-lg-4" key={i}>
                  <div
                    className="blog-item"
                    style={{ backgroundColor: "#87CEFA" }}
                  >
                    <div className="blog-bottom">
                      <a
                        style={{
                          fontSize: "15px",
                          fontWeight: "500",
                          padding: "4px 6px",
                          borderRadius: "5px",
                          border: "2px solid transparent",
                          backgroundColor: "#0046c0",
                          color: "white",
                          cursor: "pointer",
                        }}
                        href={`/share-form/${item.url}`}
                        target="_blank"
                      >
                        Shareable Link
                      </a>
                      <p className="pt-2">
                        Application Date <b>: {formattedDate}</b>
                      </p>
                      <u>
                        <h2>Personal Info:</h2>
                      </u>
                      <p>
                        First Name <b>: {item.firstName}</b>
                      </p>
                      <p>
                        Last Name <b>: {item.lastName}</b>
                      </p>
                      <p>
                        Email <b> : {item.email}</b>
                      </p>
                      <p>
                        Phone <b> : {item.phoneNumber}</b>
                      </p>
                      <p>
                        Date of Birth <b>: {item.dob}</b>
                      </p>
                      <p>
                        Permanent Address <b>: {item.permanentAddress}</b>
                      </p>
                      <p>
                        Temporary Address <b>: {item.temporaryAddress}</b>
                      </p>
                      <p>
                        Father Name <b> :{item.fatherName}</b>
                      </p>
                      <p>
                        Father's Occupation <b>: {item.fatherOccupation}</b>
                      </p>
                      <p>
                        Father Income <b>:{item.fatherIncome}</b>
                      </p>
                      <p>
                        Passport Number <b>: {item.passportNumber}</b>
                      </p>
                      <p>
                        Bank Account Number <b>: {item.bankAccountNumber}</b>
                      </p>
                      <p>
                        Have you applied for a loan from any other organization
                        such as your medical college, alumni, or any physician
                        working in the USA or Pakistan?{" "}
                        <b>: {item.appliedToOtherOrganization}</b>
                      </p>
                      <p>
                        Nationality/Permanent Residency/Work Permit of any
                        country other than Pakistan{" "}
                        <b>: {item.nationalityOtherThanPakistan}</b>
                      </p>
                      <p>
                        Have you travelled internationally for personal or
                        professional reasons to attend conferences or to do
                        electives? <b>: {item.travelledInternationally}</b>
                      </p>
                      {item.travelledInternationally == "Yes" && (
                        <p>
                          If "Yes", Please Provide details{" "}
                          <b>: {item.travelledInternationallyDetails}</b>
                        </p>
                      )}
                      <p>
                        Why you should be considered{" "}
                        <b>: {item.whyWeConsidered}</b>
                      </p>
                      <u>
                        <h2>Educational Info:</h2>
                      </u>
                      <p>
                        College Name <b>: {item.collegeName}</b>
                      </p>
                      <p>
                        Graduation Year <b>: {item.graduationYear}</b>
                      </p>
                      <p>
                        1st Professional MBBS Grade
                        <b>: {item.firstYearGrade}</b>
                      </p>
                      <p>
                        2nd Professional MBBS Grade
                        <b>: {item.secondYearGrade}</b>
                      </p>
                      <p>
                        3rd Professional MBBS Grade
                        <b>: {item.thirdYearGrade}</b>
                      </p>
                      <p>
                        Final Professional MBBS Grade
                        <b>: {item.finalYearGrade}</b>
                      </p>
                      <p>
                        Other Qualifications (if any)
                        <b>: {item.otherQualifications}</b>
                      </p>
                      <p>
                        Awards & Honors (if any)
                        <b>: {item.awardsHonors}</b>
                      </p>
                      <p>
                        2nd Professional MBBS Grade{" "}
                        <b>: {item.secondYearGrade}</b>
                      </p>
                      <p>
                        2nd Professional MBBS Grade{" "}
                        <b>: {item.secondYearGrade}</b>
                      </p>
                      <p>
                        2nd Professional MBBS Grade{" "}
                        <b>: {item.secondYearGrade}</b>
                      </p>
                      <p>
                        2nd Professional MBBS Grade{" "}
                        <b>: {item.secondYearGrade}</b>
                      </p>
                      <p>
                        2nd Professional MBBS Grade{" "}
                        <b>: {item.secondYearGrade}</b>
                      </p>
                      <p>
                        2nd Professional MBBS Grade{" "}
                        <b>: {item.secondYearGrade}</b>
                      </p>
                      <u>
                        <h2>USMLE Scores:</h2>
                      </u>
                      <div className="row">
                        <h5>Step 1</h5>
                        <div className="col-6">
                          Score <b>: {item.step1Score}</b>
                        </div>
                        <div className="col-6">
                          Attempt <b>: {item.step1Attempt}</b>
                        </div>
                        <h5>Step 2 - CK</h5>
                        <div className="col-6">
                          Score <b>: {item.step2CKScore}</b>
                        </div>
                        <div className="col-6">
                          Attempt <b>: {item.step2CKAttempt}</b>
                        </div>
                        <h5>Step 2 - CS</h5>
                        <div className="col-6">
                          Score <b> : {item.step2CSScore}</b>
                        </div>
                        <div className="col-6">
                          Attempt <b>: {item.step2CSAttempt}</b>
                        </div>
                        <h5>Step 3</h5>
                        <div className="col-6">
                          Score <b>: {item.step3Score}</b>
                        </div>
                        <div className="col-6">
                          Attempt <b>: {item.step3Attempt}</b>
                        </div>
                      </div>
                      <u>
                        <b>Character Certificate</b>
                      </u>
                      <iframe
                        src={item.certificateFileUrl}
                        height="600"
                        width="100%"
                      ></iframe>
                      <u>
                        <b>Last Three Electric Bill</b>
                      </u>
                      <iframe
                        src={item.billImageUrls[0]}
                        height="600"
                        width="100%"
                      ></iframe>
                      <iframe
                        src={item.billImageUrls[1]}
                        height="600"
                        width="100%"
                      ></iframe>
                      <iframe
                        src={item.billImageUrls[2]}
                        height="600"
                        width="100%"
                      ></iframe>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FormData;

export const getServerSideProps = async () => {
  const blogs = await api.get("/getApplicationForm");
  const data = await blogs.data.data;
  return {
    props: {
      item: data,
    },
  };
};
