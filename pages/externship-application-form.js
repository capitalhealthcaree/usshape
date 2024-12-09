import React, { useState, useEffect } from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import api from "../utils/api";
import { storage } from "../firebase";

const ExternshipForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [termsConditions, setTermsConditions] = useState(false);
  const [reservation, setReservation] = useState("");
  const [bookedMonths, setBookedMonths] = useState([]);

  const [fileUploading, setFileUploading] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const [externshipPDFForm, setExternshipPDFForm] = useState();

  const handleExternshipForm = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile.type !== "application/pdf") {
      MySwal.fire({
        title: "Error",
        text: "Please upload only PDF file.",
        icon: "error",
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      setExternshipPDFForm(null);
      e.target.value = null;
    } else {
      setExternshipPDFForm(selectedFile);
    }
  };

  const fetchData = async () => {
    try {
      const res = await api.get("/getReservedRotation");
      debugger
      setBookedMonths(res.data.reservationList);
    } catch (error) {
      // Handle error
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const isMonthDisabled = (month) => {
    return bookedMonths.includes(month);
  };

  // const handleButtonClick = async (e) => {
  //   e.preventDefault();

  //   // Validate required fields
  //   if (
  //     !name ||
  //     !email ||
  //     !termsConditions ||
  //     !reservation ||
  //     !externshipPDFForm
  //   ) {
  //     MySwal.fire({
  //       title: "Error",
  //       text: "Please fill all required(*) fields.",
  //       icon: "error",
  //       timer: 5000,
  //       timerProgressBar: true,
  //       showConfirmButton: false,
  //     });
  //     return;
  //   }
  //   setLoading(true);
  //   try {
  //     // Upload the file to Firebase Storage
  //     const fileRef = storage.ref(
  //       `usshapeExternshipForm/${externshipPDFForm.name}`
  //     );
  //     const uploadTask = await fileRef.put(externshipPDFForm);

  //     // Get the file's download URL
  //     const fileURL = await uploadTask.ref.getDownloadURL();

  //     const payload = {
  //       name,
  //       email,
  //       termsConditions,
  //       reservation,
  //       externshipPDFForm: fileURL,
  //     };
  //     debugger;
  //     const resp = await api.post("/create/rotationFormWithPaypal", payload);
  //     if (resp.status == 200) {
  //       MySwal.fire({
  //         title: "Congratulations!",
  //         text: resp?.data?.message,
  //         icon: "success",
  //         timer: 4000,
  //         timerProgressBar: true,
  //         showConfirmButton: false,
  //       });
  //     }
  //     setName("");
  //     setEmail("");
  //     setReservation("");
  //     setExternshipPDFForm(null);
  //     setTermsConditions(false);
  //   } catch (error) {
  //     MySwal.fire({
  //       title: "Error",
  //       text: error.response.data.message,
  //       icon: "error",
  //       timer: 5000,
  //       timerProgressBar: true,
  //       showConfirmButton: false,
  //     });
  //     return;
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleButtonClick = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !name ||
      !email ||
      !termsConditions ||
      !reservation ||
      !externshipPDFForm
    ) {
      MySwal.fire({
        title: "Error",
        text: "Please fill all required(*) fields.",
        icon: "error",
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return;
    }

    setFileUploading(true); // Start file uploading loader
    try {
      // Upload the file to Firebase Storage
      const fileRef = storage.ref(
        `usshapeExternshipForm/${externshipPDFForm.name}`
      );
      const uploadTask = await fileRef.put(externshipPDFForm);

      // Get the file's download URL
      const fileURL = await uploadTask.ref.getDownloadURL();

      setFileUploading(false); // Stop file uploading loader
      setFormSubmitting(true); // Start form submission loader

      const payload = {
        name,
        email,
        termsConditions,
        reservation,
        externshipPDFForm: fileURL,
      };
      debugger;
      const resp = await api.post("createRotationForm", payload);
      debugger;
      if (resp.status == 200) {
        MySwal.fire({
          title: "Congratulations!",
          text: resp?.data?.message,
          icon: "success",
          timer: 4000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }

      // Reset form fields
      setName("");
      setEmail("");
      setReservation("");
      setExternshipPDFForm(null);
      setTermsConditions(false);
    } catch (error) {
      debugger;
      MySwal.fire({
        title: "Error",
        text: error.response?.data?.message || "An error occurred.",
        icon: "error",
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } finally {
      setFileUploading(false);
      setFormSubmitting(false); // Stop form submission loader
    }
  };
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Externship/Observership/Rotation at Premier Pain Centers"
        homePageUrl="/"
        homePageText="Home"
        activePageText="externship-application-form"
        bgImage="/images/education/education-bg.jpg"
      />

      <div className="service-details-area mt-5 pb-3">
        <div className="container">
          <div className="services-details-img">
            <ol type="i">
              <b>
                Below are the detailed terms and conditions to help you
                understand the process and expectations:
              </b>
              <li>
                Program Focus: Applicants must demonstrate a genuine interest in
                interventional pain medicine rotations.
              </li>
              <li>
                Letter of Recommendation (LOR): Upon successful completion of
                the rotation, participants will receive a Letter of
                Recommendation (LOR) applicable to most residency programs,
                including Internal Medicine, Family Medicine, Neurology, PM&R,
                Radiology, Surgery, Anesthesiology, and Orthopedic Surgery.
              </li>
              <li>
                Fee Structure: The program fee is{" "}
                <b style={{ color: "red" }}>$1,500</b> per rotation.
                <ul className="">
                  {/* <b> */}
                  This fee is waived for Pakistani physicians, provided they
                  fulfill the following conditions:
                  {/* </b> */}
                  <li className="">
                    Acknowledge the role of{" "}
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      USSHAPE
                    </a>{" "}
                    in their success upon residency matching.
                  </li>
                  <li>
                    Agree to have their details listed on the USSHAPE website as
                    an{" "}
                    <a
                      href="/usshape-alumni"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      alumnus
                    </a>{" "}
                    for others to contact them for guidance.
                  </li>
                  <li>
                    Submit a public review about their experience in the
                    program.
                  </li>
                </ul>
              </li>

              <li>
                Acknowledge the role of{" "}
                <a href="/" target="_blank">
                  USSHAPE
                </a>{" "}
                in their success upon residency matching.
              </li>
              <li>
                Agree to have their details listed on the USSHAPE website as an{" "}
                <a href="/usshape-alumni" target="_blank">
                  alumnus
                </a>{" "}
                for others to contact them for guidance.
              </li>
              <li>
                Submit a public review about their experience in the program.
              </li>
              <li>
                Cancellation Policy: If a rotation is canceled without at least
                one month’s notice, a <b style={{ color: "red" }}>$250 fine</b>{" "}
                will be charged to account for the wasted opportunity that could
                have been offered to another candidate.
              </li>
              <li>
                Please read all{" "}
                <a href="/faqs" target="_blank">
                  FAQs
                </a>{" "}
                thoroughly. Questions already addressed in the FAQs will not be
                entertained.
              </li>
              <li>
                Visa Support: We do not provide visa letters. However, an LOR
                will be provided upon successful completion of the program.
              </li>
              <li>
                Rotation Site: The main rotation site is{" "}
                <a
                  href="https://www.mypremierpain.com/contact-locations/richardson/"
                  target="_blank"
                >
                  2071 N Collins Blvd, Richardson, TX 75080
                </a>
                . Some commutes to 1-2 additional locations may be required.
                Check website{" "}
                <a href="http://mypremierpain.com/" target="_blank">
                  mypremierpain.com
                </a>
              </li>
              <li>
                Applicants are responsible for arranging their own
                accommodation, as we do not provide or recommend specific
                housing options.
              </li>
              <li>
                Completion Requirements: A minimum of two weeks is required to
                qualify for an LOR.
              </li>
              <li>
                Residency Assistance: While we cannot guarantee help in
                obtaining residency interviews, guidance may be provided if
                feasible.
              </li>
            </ol>

            <h4 className="fw-bold">NOTE:</h4>
            <div style={{ color: "red", marginTop: "10px" }}>
              You must obtain an LOR from a USA physician, who will email it
              directly to{" "}
              <a style={{ color: "red" }} href="mailto:contact@usshape.org">
                {" "}
                <b> contact@usshape.org</b>
              </a>
              . This physician can be a resident physician.
            </div>
            <br />
            <div>Thanks</div>
            <div>Contact</div>
            <div>
              <b className="text-dark">Rao K Ali MD</b>
            </div>
            <div>
              <b className="text-dark">Muhammad Zulqarnain MD</b>
            </div>
            <div>
              <b className="text-dark">contact@usshape.org</b>
            </div>
            <div className="mt-4">
              <span>
                Before reserving a rotation, first{" "}
                <a
                  href="/images/externship-form.pdf"
                  download
                  style={{ color: "#0046c0", cursor: "pointer" }}
                >
                  <b> download </b>
                </a>
                and fill it out, then attach it.
              </span>
            </div>

            <div className="row mt-4">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="form-group">
                  <label>
                    <b className="text-dark">
                      Please enter a Name<span className="text-danger">*</span>
                    </b>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter a Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="form-group">
                  <label>
                    <b className="text-dark">
                      Please enter an Email
                      <span className="text-danger">*</span>
                    </b>
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Enter an Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="form-group">
                  <label>
                    <b className="text-dark">
                      Please reserve a rotation
                      <span className="text-danger">*</span>
                    </b>
                  </label>
                  <select
                    className="form-control"
                    name="reservation"
                    value={reservation}
                    onChange={(e) => {
                      setReservation(e.target.value);
                    }}
                  >
                    <option value="">Select month</option>
                    {/* 1 */}
                    <option
                      value="January 1-15 2024"
                      disabled={true}
                      style={{
                        color: "red",
                      }}
                    >
                      January 1-15 2024 {"Reserved"}
                    </option>
                    {/* 2 */}
                    <option
                      value="January 16-31 2024"
                      disabled={true}
                      style={{
                        color: "red",
                      }}
                    >
                      January 16-31 2024 {"Reserved"}
                    </option>
                    {/* 3 */}
                    <option
                      value="February 1-15 2024"
                      disabled={true}
                      style={{
                        color: "red",
                      }}
                    >
                      February 1-15 2024 {"Reserved"}
                    </option>
                    {/* 4 */}
                    <option
                      value="February 16-28 2024"
                      disabled={isMonthDisabled("February 16-28 2024")}
                      style={{
                        color: isMonthDisabled("February 16-28 2024") && "red",
                      }}
                    >
                      February 16-28 2024{" "}
                      {isMonthDisabled("February 16-28 2024") && "Reserved"}
                    </option>
                    {/* 5 */}
                    <option
                      value="March 1-15 2024"
                      disabled={isMonthDisabled("March 1-15 2024")}
                      style={{
                        color: isMonthDisabled("March 1-15 2024") && "red",
                      }}
                    >
                      March 1-15 2024{" "}
                      {isMonthDisabled("March 1-15 2024") && "Reserved"}
                    </option>
                    {/* 6 */}
                    <option
                      value="March 16-31 2024"
                      disabled={isMonthDisabled("March 16-31 2024")}
                      style={{
                        color: isMonthDisabled("March 16-31 2024") && "red",
                      }}
                    >
                      March 16-31 2024{" "}
                      {isMonthDisabled("March 16-31 2024") && "Reserved"}
                    </option>
                    {/* 7 */}
                    <option
                      value="April 1-15 2024"
                      disabled={isMonthDisabled("April 1-15 2024")}
                      style={{
                        color: isMonthDisabled("April 1-15 2024") && "red",
                      }}
                    >
                      April 1-15 2024{" "}
                      {isMonthDisabled("April 1-15 2024") && "Reserved"}
                    </option>

                    {/* 8 */}
                    <option
                      value="April 1-15 2024"
                      disabled={isMonthDisabled("April 16-30 2024")}
                      style={{
                        color: isMonthDisabled("April 16-30 2024") && "red",
                      }}
                    >
                      April 16-30 2024{" "}
                      {isMonthDisabled("April 16-30 2024") && "Reserved"}
                    </option>
                    {/* 9 */}
                    <option
                      value="May 1-15 2024"
                      disabled={isMonthDisabled("May 1-15 2024")}
                      style={{
                        color: isMonthDisabled("May 1-15 2024") && "red",
                      }}
                    >
                      May 1-15 2024{" "}
                      {isMonthDisabled("May 1-15 2024") && "Reserved"}
                    </option>
                    {/* 10 */}
                    <option
                      value="May 16-31 2024"
                      disabled={isMonthDisabled("May 16-31 2024")}
                      style={{
                        color: isMonthDisabled("May 16-31 2024") && "red",
                      }}
                    >
                      May 16-31 2024{" "}
                      {isMonthDisabled("May 16-31 2024") && "Reserved"}
                    </option>
                    {/* 11 */}
                    <option
                      value="June 1-15 2024"
                      disabled={isMonthDisabled("June 1-15 2024")}
                      style={{
                        color: isMonthDisabled("June 1-15 2024") && "red",
                      }}
                    >
                      June 1-15 2024{" "}
                      {isMonthDisabled("June 1-15 2024") && "Reserved"}
                    </option>
                    {/* 12 */}
                    <option
                      value="June 16-30 2024"
                      disabled={isMonthDisabled("June 16-30 2024")}
                      style={{
                        color: isMonthDisabled("June 16-30 2024") && "red",
                      }}
                    >
                      June 16-30 2024{" "}
                      {isMonthDisabled("June 16-30 2024") && "Reserved"}
                    </option>
                    {/* 13 */}
                    <option
                      value="July 1-15 2024"
                      disabled={isMonthDisabled("July 1-15 2024")}
                      style={{
                        color: isMonthDisabled("July 1-15 2024") && "red",
                      }}
                    >
                      July 1-15 2024{" "}
                      {isMonthDisabled("July 1-15 2024") && "Reserved"}
                    </option>
                    {/* 14 */}
                    <option
                      value="July 16-31 2024"
                      disabled={isMonthDisabled("July 16-31 2024")}
                      style={{
                        color: isMonthDisabled("July 16-31 2024") && "red",
                      }}
                    >
                      July 16-31 2024{" "}
                      {isMonthDisabled("July 16-31 2024") && "Reserved"}
                    </option>
                    {/* 15 */}
                    <option
                      value="August 1-15 2024"
                      disabled={isMonthDisabled("August 1-15 2024")}
                      style={{
                        color: isMonthDisabled("August 1-15 2024") && "red",
                      }}
                    >
                      August 1-15 2024{" "}
                      {isMonthDisabled("August 1-15 2024") && "Reserved"}
                    </option>
                    {/* 16 */}
                    <option
                      value="August 16-31 2024"
                      disabled={isMonthDisabled("August 16-31 2024")}
                      style={{
                        color: isMonthDisabled("August 16-31 2024") && "red",
                      }}
                    >
                      August 16-31 2024{" "}
                      {isMonthDisabled("August 16-31 2024") && "Reserved"}
                    </option>
                    {/* 17 */}
                    <option
                      value="September 1-15 2024"
                      disabled={isMonthDisabled("September 1-15 2024")}
                      style={{
                        color: isMonthDisabled("September 1-15 2024") && "red",
                      }}
                    >
                      September 1-15 2024{" "}
                      {isMonthDisabled("September 1-15 2024") && "Reserved"}
                    </option>
                    {/* 18 */}
                    <option
                      value="September 16-30 2024"
                      disabled={isMonthDisabled("September 16-30 2024")}
                      style={{
                        color: isMonthDisabled("September 16-30 2024") && "red",
                      }}
                    >
                      September 16-30 2024{" "}
                      {isMonthDisabled("September 16-30 2024") && "Reserved"}
                    </option>
                    {/* 19 */}
                    <option
                      value="October 1-15 2024"
                      disabled={isMonthDisabled("October 1-15 2024")}
                      style={{
                        color: isMonthDisabled("October 1-15 2024") && "red",
                      }}
                    >
                      October 1-15 2024{" "}
                      {isMonthDisabled("October 1-15 2024") && "Reserved"}
                    </option>
                    {/* 20 */}
                    <option
                      value="October 16-31 2024"
                      disabled={isMonthDisabled("October 16-31 2024")}
                      style={{
                        color: isMonthDisabled("October 16-31 2024") && "red",
                      }}
                    >
                      October 16-31 2024{" "}
                      {isMonthDisabled("October 16-31 2024") && "Reserved"}
                    </option>
                    {/* 21 */}
                    <option
                      value="November 1-15 2024"
                      disabled={isMonthDisabled("November 1-15 2024")}
                      style={{
                        color: isMonthDisabled("November 1-15 2024") && "red",
                      }}
                    >
                      November 1-15 2024{" "}
                      {isMonthDisabled("November 1-15 2024") && "Reserved"}
                    </option>
                    {/* 22 */}
                    <option
                      value="November 16-30 2024"
                      disabled={isMonthDisabled("November 16-30 2024")}
                      style={{
                        color: isMonthDisabled("November 16-30 2024") && "red",
                      }}
                    >
                      November 16-30 2024{" "}
                      {isMonthDisabled("November 16-30 2024") && "Reserved"}
                    </option>
                    {/* 22 */}
                    <option
                      value="December 1-15 2024"
                      disabled={isMonthDisabled("December 1-15 2024")}
                      style={{
                        color: isMonthDisabled("December 1-15 2024") && "red",
                      }}
                    >
                      December 1-15 2024{" "}
                      {isMonthDisabled("December 1-15 2024") && "Reserved"}
                    </option>
                    {/* 22 */}
                    <option
                      value="December 16-31 2024"
                      disabled={isMonthDisabled("December 16-31 2024")}
                      style={{
                        color: isMonthDisabled("December 16-31 2024") && "red",
                      }}
                    >
                      December 16-31 2024{" "}
                      {isMonthDisabled("December 16-31 2024") && "Reserved"}
                    </option>
                  </select>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="form-group">
                  <label>
                    <b className="text-dark">
                      Upload Form:
                      <span className="text-danger">*</span>
                    </b>
                  </label>
                  <input
                    type="file"
                    name="certificateFile"
                    className="form-control"
                    onChange={handleExternshipForm}
                  />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="form-group">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={termsConditions}
                      onChange={() =>
                        setTermsConditions((prevValue) => !prevValue)
                      }
                    />
                  </div>
                  <div className="col">
                    <label
                      className="form-check-label text-danger"
                      htmlFor="flexCheckDefault"
                    >
                      I agree to all terms and conditions.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <button
                onClick={handleButtonClick}
                disabled={fileUploading || formSubmitting}
                style={{
                  display: "inline-block",
                  fontSize: "15px",
                  fontWeight: "500",
                  padding: "12px 18px",
                  borderRadius: "5px",
                  border: "2px solid transparent",
                  backgroundColor: fileUploading ? "#ccc" : "#0046c0",
                  color: "white",
                  cursor:
                    fileUploading || formSubmitting ? "not-allowed" : "pointer",
                }}
              >
                {fileUploading
                  ? "Uploading PDF"
                  : formSubmitting
                  ? "Submitting Form"
                  : "Submit"}
                {(fileUploading || formSubmitting) && (
                  <div
                    className="spinner-border spinner-grow-sm ms-3"
                    role="status"
                  ></div>
                )}
              </button>

              {/* <button
                onClick={handleButtonClick}
                disabled={loading ? true : false}
                style={{
                  display: "inline-block",
                  fontSize: "15px",
                  fontWeight: "500",
                  padding: "12px 18px",
                  borderRadius: "5px",
                  border: "2px solid transparent",
                  backgroundColor: "#0046c0",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                {"Submit"}
                {loading && (
                  <div
                    className="spinner-border spinner-grow-sm ms-3"
                    role="status"
                  ></div>
                )}
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ExternshipForm;
