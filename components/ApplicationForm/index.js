import React, { useState } from "react";
import api from "../../utils/api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { storage } from "../../firebase";
const MySwal = withReactContent(Swal);

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your Application Form submitted successfully",
    icon: "success",
    timer: 4000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  dob: "",
  permanentAddress: "",
  temporaryAddress: "",
  fatherName: "",
  fatherOccupation: "",
  fatherIncome: "",
  passportNumber: "",
  bankAccountNumber: "",
  swiftCode: "",
  appliedToOtherOrganization: "",
  nationalityOtherThanPakistan: "",
  travelledInternationally: "",
  travelledInternationallyDetails: "",
  whyWeConsidered: "",

  collegeName: "",
  graduationYear: "",
  firstYearGrade: "",
  secondYearGrade: "",
  thirdYearGrade: "",
  finalYearGrade: "",
  otherQualifications: "",
  awardsHonors: "",

  step1Score: "",
  step1Attempt: "",
  step2CKScore: "",
  step2CKAttempt: "",
  step2CSScore: "",
  step2CSAttempt: "",
  step3Score: "",
  step3Attempt: "",

  signature: "",
};

const ApplicationForms = () => {
  const [termsConditions, setTermsConditions] = useState(false);
  const [billImages, setBillImages] = useState([]);
  const [certificateFile, setCertificateFile] = useState();
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState(INITIAL_STATE);
  const [billFiles, setBillFiles] = useState([null, null, null]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCertificateChange = (e) => {
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
      setCertificateFile(null);
      e.target.value = null;
    } else {
      setCertificateFile(selectedFile);
    }
  };
  // const handleBillFileChange = (e) => {
  //   const selectedFiles = e.target.files;

  //   if (selectedFiles.length !== 3) {
  //     MySwal.fire({
  //       title: "Error",
  //       text: "Please upload only last Three Electric Bill separately.",
  //       icon: "error",
  //       timer: 5000,
  //       timerProgressBar: true,
  //       showConfirmButton: false,
  //     });
  //     e.target.value = null;
  //     return;
  //   }

  //   const validTypes = ["application/pdf"]; // Array of valid MIME types for PDF files

  //   const validFiles = Array.from(selectedFiles).filter((file) =>
  //     validTypes.includes(file.type)
  //   );

  //   if (validFiles.length !== 3) {
  //     MySwal.fire({
  //       title: "Error",
  //       text: "Please upload only PDF files.",
  //       icon: "error",
  //       timer: 5000,
  //       timerProgressBar: true,
  //       showConfirmButton: false,
  //     });
  //     e.target.value = null;
  //     return;
  //   }

  //   setBillImages(validFiles);
  // };

  const handleBillFileChange = (e, index) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      return; // If no file is selected, just return
    }

    // Validate file type
    if (selectedFile.type !== "application/pdf") {
      MySwal.fire({
        title: "Error",
        text: "Please upload only PDF file.",
        icon: "error",
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      e.target.value = null;
      return;
    }

    // Update state to store the selected file
    const updatedFiles = [...billFiles];
    updatedFiles[index - 1] = selectedFile; // Update the correct index (1-based index)
    setBillFiles(updatedFiles);

    // Check if all 3 files are selected
    if (updatedFiles.filter((file) => file !== null).length === 3) {
      setBillImages(updatedFiles); // If all 3 files are selected, store them in billImages state
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        dob,
        permanentAddress,
        temporaryAddress,
        fatherName,
        fatherOccupation,
        fatherIncome,
        passportNumber,
        bankAccountNumber,
        swiftCode,
        appliedToOtherOrganization,
        nationalityOtherThanPakistan,
        travelledInternationally,
        travelledInternationallyDetails,
        whyWeConsidered,

        collegeName,
        graduationYear,
        firstYearGrade,
        secondYearGrade,
        thirdYearGrade,
        finalYearGrade,
        otherQualifications,
        awardsHonors,

        step1Score,
        step1Attempt,
        step2CKScore,
        step2CKAttempt,
        step2CSScore,
        step2CSAttempt,
        step3Score,
        step3Attempt,

        signature,
      } = contact;
      // Validate required fields
      if (
        !firstName ||
        !lastName ||
        !email ||
        !phoneNumber ||
        !dob ||
        !permanentAddress ||
        !temporaryAddress ||
        !fatherName ||
        !fatherOccupation ||
        !fatherIncome ||
        !passportNumber ||
        !bankAccountNumber ||
        !swiftCode ||
        !appliedToOtherOrganization ||
        !nationalityOtherThanPakistan ||
        !travelledInternationally ||
        !whyWeConsidered ||
        !collegeName ||
        !graduationYear ||
        !firstYearGrade ||
        !secondYearGrade ||
        !thirdYearGrade ||
        !finalYearGrade ||
        !otherQualifications ||
        !awardsHonors ||
        !step1Score ||
        !step1Attempt ||
        !step2CKScore ||
        !step2CKAttempt ||
        !step2CSScore ||
        !step2CSAttempt ||
        !step2CSAttempt ||
        !step3Score ||
        !signature ||
        !termsConditions ||
        !certificateFile ||
        billImages.length === 0
      ) {
        MySwal.fire({
          title: "Error",
          text: "Please fill all fields.",
          icon: "error",
          timer: 5000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        return;
      }

      // Validate email format
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        MySwal.fire({
          title: "Error",
          text: "Please enter a valid email address.",
          icon: "error",
          timer: 5000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        return;
      }
      // Check if all 3 files are selected
      if (billFiles.includes(null)) {
        MySwal.fire({
          title: "Error",
          text: "Please upload all three electric bills.",
          icon: "error",
          timer: 5000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        return;
      }

      const payload = {
        firstName,
        lastName,
        email,
        phoneNumber,
        dob,
        permanentAddress,
        temporaryAddress,
        fatherName,
        fatherOccupation,
        fatherIncome,
        passportNumber,
        bankAccountNumber,
        swiftCode,
        appliedToOtherOrganization,
        nationalityOtherThanPakistan,
        travelledInternationally,
        travelledInternationallyDetails,
        whyWeConsidered,

        collegeName,
        graduationYear,
        firstYearGrade,
        secondYearGrade,
        thirdYearGrade,
        finalYearGrade,
        otherQualifications,
        awardsHonors,

        step1Score,
        step1Attempt,
        step2CKScore,
        step2CKAttempt,
        step2CSScore,
        step2CSAttempt,
        step3Score,
        step3Attempt,

        signature,

        termsConditions,
      };
      // Reference to Firebase Storage
      const storageRef = storage.ref();

      // Function to upload a single file and return its download URL
      const uploadFile = async (file, folder) => {
        const fileRef = storageRef.child(`${folder}/${file.name}`);
        await fileRef.put(file);
        return fileRef.getDownloadURL();
      };

      try {
        // Upload bill images concurrently
        const billImageUrls =
          billImages.length > 0
            ? await Promise.all(
                billImages.map((image) => uploadFile(image, "billImages"))
              )
            : [];

        // Upload certificate file if it exists
        const certificateFileUrl = certificateFile
          ? await uploadFile(certificateFile, "certificateFiles")
          : "";

        // Add URLs to payload
        payload.billImageUrls = billImageUrls;
        payload.certificateFileUrl = certificateFileUrl;
      } catch (error) {
        console.error("Error uploading files:", error);
        // Handle error appropriately
      }

      // // Upload files to Firebase storage
      // const billImageUrls = [];
      // if (billImages.length > 0) {
      //   // Create the "billImages" folder
      //   await storage.ref().child("billImages/").child("dummy").put(new Blob());

      //   for (const image of billImages) {
      //     const imageRef = storage.ref().child(`billImages/${image.name}`);
      //     await imageRef.put(image);
      //     const imageUrl = await imageRef.getDownloadURL();
      //     billImageUrls.push(imageUrl);
      //   }
      // }

      // // Upload certificate file to Firebase storage
      // let certificateFileUrl = "";
      // if (certificateFile) {
      //   // Create the "certificateFiles" folder
      //   await storage
      //     .ref()
      //     .child("certificateFiles/")
      //     .child("dummy")
      //     .put(new Blob());

      //   const fileRef = storage
      //     .ref()
      //     .child(`certificateFiles/${certificateFile.name}`);
      //   await fileRef.put(certificateFile);
      //   certificateFileUrl = await fileRef.getDownloadURL();
      // }

      // // Add URLs to payload
      // payload.billImageUrls = billImageUrls;
      // payload.certificateFileUrl = certificateFileUrl;

      const response = await api.post("/create/applicationForm", payload);
      if (response.status === 200) {
        setContact(INITIAL_STATE);
        alertContent();
        setTermsConditions(false);
        setBillImages(null);
        setCertificateFile(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="drop-item drop-img">
          <div className="drop-left" style={{ maxWidth: "1100px" }}>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <span className="mt-1" style={{ color: "red" }}>
                  Please read FAQs before applying for the loan program at
                  <a href="https://usshape.org/faqs"> faqs</a>
                </span>
                <h4 className="fw-bold">Personal Info:</h4>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      value={contact.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      value={contact.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Email</label>

                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      value={contact.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      className="form-control"
                      value={contact.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      className="form-control"
                      value={contact.dob}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Permanent Address</label>
                    <input
                      type="text"
                      name="permanentAddress"
                      className="form-control"
                      value={contact.permanentAddress}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Temporary Address</label>
                    <input
                      type="text"
                      name="temporaryAddress"
                      className="form-control"
                      value={contact.temporaryAddress}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Father Name</label>
                    <input
                      type="text"
                      name="fatherName"
                      className="form-control"
                      value={contact.fatherName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Father's Occupation</label>
                    <input
                      type="text"
                      name="fatherOccupation"
                      className="form-control"
                      value={contact.fatherOccupation}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Monthly Household Income</label>
                    <input
                      type="text"
                      name="fatherIncome"
                      className="form-control"
                      value={contact.fatherIncome}
                      onChange={handleChange}
                    />
                    <ul style={{ color: "red", marginTop: "10px" }}>
                      <li>
                        USSHAPE uses a few variables to determine that. For
                        example a household with monthly income of Pakistani
                        Rupees 100k with one Child may not be eligible for the
                        loan but 150k income with five members may be eligible.
                        Due Diligence is done by the team.
                      </li>
                      <br />
                      <li>
                        In case of false or incorrect information or
                        non-disclosure; legal action will be taken accordingly
                        in USA as well as in country of origin.
                      </li>
                    </ul>
                  </div>
                </div>
                <label className="fw-bold">
                  Upload Last Three Electric Bills
                </label>
                <div className="col-lg-4 col-md-6">
                  <div className="form-group">
                    <label>Electric Bill 1</label>
                    <input
                      type="file"
                      name="billFiles"
                      className="form-control"
                      onChange={(e) => handleBillFileChange(e, 1)}
                      multiple
                    />
                  </div>
                </div>{" "}
                <div className="col-lg-4 col-md-6">
                  <div className="form-group">
                    <label>Electric Bill 2</label>
                    <input
                      type="file"
                      name="billFiles"
                      className="form-control"
                      onChange={(e) => handleBillFileChange(e, 2)}
                      multiple
                    />
                  </div>
                </div>{" "}
                <div className="col-lg-4 col-md-6">
                  <div className="form-group">
                    <label>Electric Bill 3</label>
                    <input
                      type="file"
                      name="billFiles"
                      className="form-control"
                      onChange={(e) => handleBillFileChange(e, 3)}
                      multiple
                    />
                  </div>
                </div>
                {/* <div className="col-12 col-sm-12 col-md-4 col-lg-4">
  <div className="form-group">
    <label>Upload Last Three Electric Bills</label>
    <div>
      <label>Bill 1:</label>
      <input
        type="file"
        name="billFile1"
        className="form-control"
        onChange={(e) => handleBillFileChange(e, 1)}
      />
    </div>
    <div>
      <label>Bill 2:</label>
      <input
        type="file"
        name="billFile2"
        className="form-control"
        onChange={(e) => handleBillFileChange(e, 2)}
      />
    </div>
    <div>
      <label>Bill 3:</label>
      <input
        type="file"
        name="billFile3"
        className="form-control"
        onChange={(e) => handleBillFileChange(e, 3)}
      />
    </div>
  </div>
</div> */}
                {/* <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Upload Last Three Electric Bill</label>
                    <input
                      type="file"
                      name="billFiles"
                      className="form-control"
                      onChange={handleBillFileChange}
                      multiple
                    />
                  </div>
                </div> */}
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Passport Number</label>
                    <input
                      type="text"
                      name="passportNumber"
                      className="form-control"
                      value={contact.passportNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Bank Account Number (IBAN)</label>
                    <input
                      type="text"
                      name="bankAccountNumber"
                      className="form-control"
                      value={contact.bankAccountNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Swift Code</label>
                    <input
                      type="text"
                      name="swiftCode"
                      className="form-control"
                      value={contact.swiftCode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>
                      Have you applied for a loan from any other organization
                      such as your medical college, alumni, or any physician
                      working in the USA or Pakistan?
                    </label>
                    <select
                      className="form-control"
                      name="appliedToOtherOrganization"
                      value={contact.appliedToOtherOrganization}
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>
                      Nationality/Permanent Residency/Work Permit of any country
                      other than Pakistan
                    </label>
                    <select
                      className="form-control"
                      name="nationalityOtherThanPakistan"
                      value={contact.nationalityOtherThanPakistan}
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>
                      Have you travelled internationally for personal or
                      professional reasons to attend conferences or to do
                      electives?
                    </label>
                    <select
                      className="form-control"
                      name="travelledInternationally"
                      value={contact.travelledInternationally}
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
                {contact.travelledInternationally == "Yes" && (
                  <div className="col-12">
                    <div className="form-group">
                      <label>If "Yes", Please Provide details</label>
                      <input
                        type="text"
                        name="travelledInternationallyDetails"
                        className="form-control"
                        value={contact.travelledInternationallyDetails}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Describe briefly why you should be considered</label>
                    <textarea
                      name="whyWeConsidered"
                      cols="30"
                      rows="5"
                      className="form-control"
                      value={contact.whyWeConsidered}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <h4 className="fw-bold">Educational Info:</h4>
                <div className="col-12">
                  <div className="form-group">
                    <label>Medical College Name</label>
                    <input
                      type="text"
                      name="collegeName"
                      className="form-control"
                      value={contact.collegeName}
                      onChange={handleChange}
                    />
                    <ul style={{ color: "red", marginTop: "10px" }}>
                      <li>
                        Only students who graduated from government medical
                        colleges are eligible
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Graduation Year</label>
                    <input
                      type="number"
                      name="graduationYear"
                      className="form-control"
                      value={contact.graduationYear}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>1st Professional MBBS Grade</label>
                    <input
                      type="text"
                      name="firstYearGrade"
                      className="form-control"
                      value={contact.firstYearGrade}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>2nd Professional MBBS Grade</label>
                    <input
                      type="text"
                      name="secondYearGrade"
                      className="form-control"
                      value={contact.secondYearGrade}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>3rd Professional MBBS Grade</label>
                    <input
                      type="text"
                      name="thirdYearGrade"
                      className="form-control"
                      value={contact.thirdYearGrade}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Final Professional MBBS Grade</label>
                    <input
                      type="text"
                      name="finalYearGrade"
                      className="form-control"
                      value={contact.finalYearGrade}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>
                      Upload Character Certificate from Medical College:
                    </label>
                    <input
                      type="file"
                      name="certificateFile"
                      className="form-control"
                      onChange={handleCertificateChange}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Other Qualifications (if any):</label>
                    <textarea
                      name="otherQualifications"
                      cols="30"
                      rows="5"
                      className="form-control"
                      value={contact.otherQualifications}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Awards & Honors (if any):</label>
                    <textarea
                      name="awardsHonors"
                      cols="30"
                      rows="5"
                      className="form-control"
                      value={contact.awardsHonors}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <h4 className="fw-bold">USMLE Scores:</h4>
                <h5>Step 1</h5>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Score</label>
                    <input
                      type="text"
                      name="step1Score"
                      className="form-control"
                      value={contact.step1Score}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Attempt</label>
                    <input
                      type="text"
                      name="step1Attempt"
                      className="form-control"
                      value={contact.step1Attempt}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <h5>Step 2 - CK</h5>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Score</label>
                    <input
                      type="text"
                      name="step2CKScore"
                      className="form-control"
                      value={contact.step2CKScore}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Attempt</label>
                    <input
                      type="text"
                      name="step2CKAttempt"
                      className="form-control"
                      value={contact.step2CKAttempt}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <h5>Step 2 - CS</h5>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Score</label>
                    <input
                      type="text"
                      name="step2CSScore"
                      className="form-control"
                      value={contact.step2CSScore}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Attempt</label>
                    <input
                      type="text"
                      name="step2CSAttempt"
                      className="form-control"
                      value={contact.step2CSAttempt}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <h5>Step 3</h5>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Score</label>
                    <input
                      type="text"
                      name="step3Score"
                      className="form-control"
                      value={contact.step3Score}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Attempt</label>
                    <input
                      type="text"
                      name="step3Attempt"
                      className="form-control"
                      value={contact.step3Attempt}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <h4 className="fw-bold">NOTE:</h4>
                <div>
                  <ul style={{ color: "red", marginTop: "10px" }}>
                    <li>
                      Physicians who graduated within last three years can apply
                      for this program.
                    </li>
                    <li>
                      A physician or medical student who has done
                      elective/observership/externship in USA is NOT eligible
                      for loan.
                    </li>
                    <li>
                      Any MPH, PhD. Research or any other healthcare higher
                      studies candidates are not eligible for this loan.
                    </li>
                    <li>
                      You will start paying back $500 a month starting first
                      month of internship.
                    </li>
                    <li>
                      No one who has working permit to work in USA is eligible
                      for loan.
                    </li>
                    <li>
                      Any overseas Pakistani who went to do MBBS in Pakistan is
                      not eligible for this loan
                    </li>
                    <li>
                      USSHAPE only offers loan once. If get unmatched; it will
                      be your own responsibility to arrange finances for next
                      match.
                    </li>
                    <li>
                      This is a loan and must be paid back whether you don’t get
                      matched or your visa is rejected. However we are here to
                      help you and make things easier for you! Installments will
                      be made easier according to circumstances.
                    </li>
                  </ul>
                </div>
                <h4 className="fw-bold">Disclaimer:</h4>
                <div>
                  <ul style={{ color: "red", marginTop: "0px" }}>
                    By submitting this form, you agree that{" "}
                    <a href="/">usshape.org</a> may display your name, photo,
                    and contact information on the <b>USSHAPE</b> alumni page as
                    part of our alumni network. This information will be used to
                    recognize your participation in our externship or loan
                    program and to help connect you within our community.
                  </ul>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Electronic Signature (Type Full Name):</label>
                    <input
                      type="text"
                      name="signature"
                      className="form-control"
                      value={contact.signature}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12">
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
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          I agree to all terms and conditions and will provide
                          accurate information.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <button
                    type="submit"
                    className="drop-btn"
                    disabled={loading ? true : false}
                  >
                    Submit
                    {loading && (
                      <div
                        className="spinner-border spinner-grow-sm ms-3"
                        role="status"
                      ></div>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationForms;
