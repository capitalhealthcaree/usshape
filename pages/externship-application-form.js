import React, { useState, useEffect } from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import axios from "axios";

const ExternshipForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [termsConditions, setTermsConditions] = useState(false);
  const [reservation, setReservation] = useState("");
  const [loading, setLoading] = useState(false);
  const [bookedMonths, setBookedMonths] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://usshape-stripe.vercel.app/rotation/getAll"
      );
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
  const handlePayNowClick = () => {
    router.push("/donation");
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!name || !email || !termsConditions || !reservation) {
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
    setLoading(true);
    if (email) {
      try {
        const res = await axios.get(
          `https://usshape-stripe.vercel.app/getStripe/${email}`
        );
        if (res.status == 200) {
          const payload = { name, email, termsConditions, reservation };
          const resp = await axios.post(
            `https://usshape-stripe.vercel.app/reserveRotation`,
            payload
          );
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
          setName("");
          setEmail("");
          setReservation("");
          setTermsConditions(false);
        }
      } catch (error) {
        MySwal.fire({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
          timer: 5000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        return;
      } finally {
        setLoading(false);
      }
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
              <li>
                Applicant must be interested in interventional pain medicine
                rotation. Our LOR will be applicable to most of the residency
                programs particularly in Internal Medicine, Family Medicien,
                Neurology, PM&R, Radiology, Surgery, Anesthesia, Orthopedic
                surgery.
              </li>
              <li>
                If you are a non Pakistani physicians, <b>$2000</b> per month
                will be charged. For Pakistani and students their near relatives
                its free of charge. Exceptions can be made for those who can’t
                afford fees.
              </li>
              <li>
                Please arrange your own accommodation. We don’t provide and or
                recommend any place.
              </li>
              <li>
                Main campus is in Richardson where you will spend 3 to 4 days a
                week but please be Willing to rotate at 2-3 locations on website{" "}
                <a href="http://mypremierpain.com/">mypremierpain.com</a>
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
              Starting January 2024! Each applicant will pay <b>$100</b> to
              reserve a spot. If they join on time; it will be reimbursed after
              rotation ends. Many have reserved spots taking it granted and
              cancelled it a few days before which takes away right of other
              serious candidates.
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
            <div className="mt-4">
              <span>
                Before reserving a rotation, please make a payment of{" "}
                <b>$100</b> by clicking
                <span
                  onClick={handlePayNowClick}
                  style={{ color: "#0046c0", cursor: "pointer" }}
                >
                  <b> Pay Now</b>
                </span>
              </span>
            </div>

            <div className="row mt-4">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="form-group">
                  <label>
                    <b>
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
                    <b>
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
                    <b>
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
                      disabled={isMonthDisabled("January 1-15 2024")}
                      style={{
                        color: isMonthDisabled("January 1-15 2024") && "red",
                      }}
                    >
                      January 1-15 2024{" "}
                      {isMonthDisabled("January 1-15 2024") && "Reserved"}
                    </option>
                    {/* 2 */}
                    <option
                      value="January 16-31 2024"
                      disabled={isMonthDisabled("January 16-31 2024")}
                      style={{
                        color: isMonthDisabled("January 16-31 2024") && "red",
                      }}
                    >
                      January 16-31 2024{" "}
                      {isMonthDisabled("January 16-31 2024") && "Reserved"}
                    </option>
                    {/* 3 */}
                    <option
                      value="February 1-15 2024"
                      disabled={isMonthDisabled("February 1-15 2024")}
                      style={{
                        color: isMonthDisabled("February 1-15 2024") && "red",
                      }}
                    >
                      February 1-15 2024{" "}
                      {isMonthDisabled("February 1-15 2024") && "Reserved"}
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
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ExternshipForm;
