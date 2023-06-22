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
    timer: 2000,
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

const ContactForm = () => {
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
        setFormData(INITIAL_STATE);
        alertContent();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="drop-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 p-0">
              <div className="drop-item drop-img">
                <div className="drop-left">
                  <h2>How Can We Help?</h2>

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your name"
                            value={contact.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Your email address"
                            value={contact.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="number"
                            className="form-control"
                            value={contact.number}
                            onChange={handleChange}
                            placeholder="Your Phone"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            className="form-control"
                            placeholder="Your Subject"
                            value={contact.subject}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <textarea
                            name="text"
                            cols="30"
                            rows="6"
                            className="form-control"
                            placeholder="Your message..."
                            value={contact.text}
                            onChange={handleChange}
                          ></textarea>
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

            <div className="col-lg-5 p-0">
              <div className="speciality-item speciality-right speciality-right-two speciality-right-three">
                <img src="/images/contact.jpg" alt="Contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
