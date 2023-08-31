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
                      <a
                        style={{
                          fontSize: "15px",
                          fontWeight: "500",
                          padding: "4px 20px",
                          borderRadius: "5px",
                          border: "2px solid transparent",
                          backgroundColor: "#0046c0",
                          color: "white",
                          cursor: "pointer",
                        }}
                        href={`/share-form/${item.url}`}
                        target="_blank"
                      >
                        More Details...
                      </a>
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
