import React, { useState } from "react";
import api from "../../utils/api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 4000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ApplicationForms = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, number, subject, text } = contact;
      // Validate required fields
      if (!name || !email || !number || !subject || !text) {
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
      const payload = { name, email, phone: number, subject, message: text };
      const response = await api.post("/create/contact", payload);
      if (response.status === 200) {
        setContact(INITIAL_STATE);
        alertContent();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="drop-item drop-img">
          <div className="drop-left">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <h4>Personal Info:</h4>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
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
                      name="number"
                      className="form-control"
                      value={contact.number}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Father Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Father's Occupation</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Monthly Household Income</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Passport Number</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Bank Account Number (IBAN)</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Swift Code</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Swift Code</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div> */}
                <div className="col-12">
                  <div className="form-group">
                    <label>Permanent Address</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      // placeholder="Your Subject"
                      value={contact.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Temporary Address</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      // placeholder="Your Subject"
                      value={contact.subject}
                      onChange={handleChange}
                    />
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
                      name="patientType"
                      // value={formData.patientType}
                      onChange={handleChange}
                    >
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
                      name="patientType"
                      // value={formData.patientType}
                      onChange={handleChange}
                    >
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label>If "Yes", Please Provide details</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Describe briefly why you should be considered</label>
                    <textarea
                      name="text"
                      cols="30"
                      rows="5"
                      className="form-control"
                      value={contact.text}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <h4>Educational Info:</h4>
                <div className="col-12">
                  <div className="form-group">
                    <label>Medical College Name</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      // placeholder="Your Subject"
                      value={contact.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Graduation Year</label>
                    <input
                      type="number"
                      name="subject"
                      className="form-control"
                      // placeholder="Your Subject"
                      value={contact.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>1st Professional MBBS Grade</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>2nd Professional MBBS Grade</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>3rd Professional MBBS Grade</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Final Professional MBBS Grade</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Other Qualifications (if any):</label>
                    <textarea
                      name="text"
                      cols="30"
                      rows="5"
                      className="form-control"
                      value={contact.text}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Awards & Honors (if any):</label>
                    <textarea
                      name="text"
                      cols="30"
                      rows="5"
                      className="form-control"
                      value={contact.text}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <h4>USMLE Scores:</h4>
                <h5>Step 1</h5>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Score</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Attempt</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
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
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Attempt</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
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
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Attempt</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
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
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Attempt</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Electronic Signature (Type Full Name):</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="drop-btn">
                    Send Message
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
