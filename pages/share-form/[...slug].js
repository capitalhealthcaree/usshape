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
          <div className="row bg-info">
            <p>
              Application Date <b>: {formattedDate}</b>
            </p>
            <h4>Personal Info:</h4>
            <div class="col-md-4">
              First Name <b>: {item.firstName}</b>
            </div>
            <div class="col-md-4">
              Last Name <b>: {item.lastName}</b>
            </div>
            <div class="col-md-4">
              Email <b> : {item.email}</b>
            </div>
            <div class="col-md-4">
              Phone <b> : {item.phoneNumber}</b>
            </div>
            <div class="col-md-4">
              Date of Birth <b>: {item.dob}</b>
            </div>
            <div class="col-md-4">
              Permanent Address <b>: {item.permanentAddress}</b>
            </div>{" "}
            <div class="col-md-4">
              Temporary Address <b>: {item.temporaryAddress}</b>
            </div>
            <div class="col-md-4">
              Father Name <b>: {item.fatherName}</b>
            </div>
            <div class="col-md-4">
              Father's Occupation <b>: {item.fatherOccupation}</b>
            </div>
            <div class="col-md-4">
              Monthly Household Income <b>: {item.fatherIncome}</b>
            </div>
            <div class="col-md-4">
              Passport Number <b>: {item.passportNumber}</b>
            </div>
            <div class="col-md-4">
              Bank Account Number <b>: {item.bankAccountNumber}</b>
            </div>
            <div class="col-md-4">
              Swift Code <b>: {item.swiftCode}</b>
            </div>
            <div class="col-12">
              Have you applied for a loan from any other organization such as
              your medical college, alumni, or any physician working in the USA
              or Pakistan? <b>: {item.appliedToOtherOrganization}</b>
            </div>
            <div class="col-12">
              Nationality/Permanent Residency/Work Permit of any country other
              than Pakistan <b>: {item.nationalityOtherThanPakistan}</b>
            </div>
            <div class="col-12">
              Have you travelled internationally for personal or professional
              reasons to attend conferences or to do electives?{" "}
              <b>: {item.travelledInternationally}</b>
            </div>
            <div class="col-12">
              {item.travelledInternationally == "Yes" && (
                <p>
                  If "Yes", Please Provide details{" "}
                  <b>: {item.travelledInternationallyDetails}</b>
                </p>
              )}
            </div>
            <div class="col-12">
              Why you should be considered <b>: {item.whyWeConsidered}</b>
            </div>
            <h4>Educational Info:</h4>
            <div class="col-md-2">
              Graduation Year <b>: {item.graduationYear}</b>
            </div>
            <div class="col-md-10">
              College Name <b>: {item.collegeName}</b>
            </div>
            <div class="col-md-3">
              1st Professional MBBS Grade
              <b>: {item.firstYearGrade}</b>
            </div>
            <div class="col-md-3">
              2nd Professional MBBS Grade
              <b>: {item.secondYearGrade}</b>
            </div>
            <div class="col-md-3">
              3rd Professional MBBS Grade
              <b>: {item.thirdYearGrade}</b>
            </div>
            <div class="col-md-3">
              Final Professional MBBS Grade
              <b>: {item.finalYearGrade}</b>
            </div>
            <div class="col-12">
              Other Qualifications (if any)
              <b>: {item.otherQualifications}</b>
            </div>
            <div class="col-12">
              Awards & Honors (if any)
              <b>: {item.awardsHonors}</b>
            </div>
            <h4>USMLE Scores:</h4>
            <b>Step 1</b>
            <div className="col-6">
              Score <b>: {item.step1Score}</b>
            </div>
            <div className="col-6">
              Attempt <b>: {item.step1Attempt}</b>
            </div>
            <b>Step 2 - CK</b>
            <div className="col-6">
              Score <b>: {item.step2CKScore}</b>
            </div>
            <div className="col-6">
              Attempt <b>: {item.step2CKAttempt}</b>
            </div>
            <b>Step 2 - CS</b>
            <div className="col-6">
              Score <b> : {item.step2CSScore}</b>
            </div>
            <div className="col-6">
              Attempt <b>: {item.step2CSAttempt}</b>
            </div>
            <b>Step 3</b>
            <div className="col-6">
              Score <b>: {item.step3Score}</b>
            </div>
            <div className="col-6">
              Attempt <b>: {item.step3Attempt}</b>
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
