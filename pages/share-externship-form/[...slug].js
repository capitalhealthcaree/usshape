import React from "react";
import axios from "axios";
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
            <div className="mb-2"
              style={{
                border: "2px solid #0046c0",
                borderRadius: "10px",
                color: "black",
              }}
            >
              <p className="m-1">
                <b> Application Date :</b> {formattedDate}
              </p>
              <div className="m-2">
                <b> Name :</b> {item.name}
              </div>
              <div className="m-2">
                <b> Email :</b> {item.email}
              </div>
              <div className="m-2">
                <b> Reserved Rotation :</b> {item.reservation}
              </div>
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
  const formData = await axios.get(
    `https://usshape-stripe.vercel.app/personsrotation/getByName?url=${slug}`
  );
  const data = await formData.data.data;
  return {
    props: {
      item: data,
    },
  };
};
