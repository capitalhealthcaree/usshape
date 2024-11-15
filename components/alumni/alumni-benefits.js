"use client";

import React from "react";
const alumniBenefitsData = [
  {
    id: 1,
    heading: "Enhanced Career Pathways",
    description:
      "As a USSHAPE alumnus, you have access to a curated network of externships, internships, and job opportunities designed to align with your career goals, giving you a competitive edge in the workforce.",
  },
  {
    id: 2,
    heading: "Flexible Financial Assistance",
    description:
      "Through our loan program, we provide manageable and student-centered financial support. This allows you to focus on building your future without the added worry of financial barriers.",
  },
  {
    id: 3,
    heading: "Global Professional Connections",
    description:
      "Our alumni network connects you with professionals from diverse fields across the globe. By staying part of the US SHAPE community, you gain insights, advice, and support from successful peers and mentors.",
  },
  {
    id: 4,
    heading: "Career-Building Workshops and Mentorship",
    description:
      "USSHAPE hosts exclusive workshops and mentorship sessions tailored to alumni needs. These events help you refine your skills, explore new opportunities, and navigate career advancements.",
  },
  {
    id: 5,
    heading: "Featured Recognition on USSHAPE",
    description:
      "As an alumnus, you’ll have the opportunity to be showcased on usshape.org, celebrating your achievements and enhancing your visibility within our community and beyond.",
  },
  {
    id: 6,
    heading: "Exclusive Job and Externship Listings",
    description:
      "Be among the first to know about new job openings, externships, and partnership opportunities that are exclusive to US SHAPE alumni, ensuring you remain connected to valuable prospects.",
  },
  {
    id: 7,
    heading: "Continuous Learning Support",
    description:
      "USSHAPE is committed to lifelong learning, offering access to scholarships and grants that support further education or professional certification, making it easier to grow your skills.",
  },

  {
    id: 8,
    heading: "Alumni Events and Networking Sessions",
    description:
      "Join our alumni-focused events and networking opportunities where you can connect with peers, industry leaders, and mentors, reinforcing the bonds that make US SHAPE a thriving community.",
  },
];
const OurExpertise = () => {
  return (
    <>
      <div className="container">
        <div className="section-title">
          <h2>Alumni Benefits</h2>
          <p>
            At <b>USSHAPE</b>, we are dedicated to empowering our alumni with
            ongoing opportunities and support. Our alumni network reflects the
            shared success of students who have benefited from our unique loan
            and externship programs. Here’s what you gain as a <b>USSHAPE</b>{" "}
            alumnus:
          </p>
        </div>
      </div>
      <div className="container p-0">
        <div className="row m-0">
          <div className="col-lg-12">
            <div className="speciality-item">
              <div className="row m-0">
                {alumniBenefitsData.map((itme) => (
                  <div className="col-sm-6 col-lg-6">
                    <div className="speciality-inner">
                      <i className="icofont-check-circled"></i>
                      <h3>{itme.heading}</h3>
                      <p>{itme.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertise;
