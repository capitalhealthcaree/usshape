import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const Education = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Education"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Education"
        bgImage="/images/education/education-bg.jpg"
      />

      <div className="service-details-area ptb-100">
        <div className="container">
          <div className="services-details-img">
            <img src="/images/education/education.jpg" alt="Education" />

            <p>
              In the United States, public schools, private schools, and
              homeschooling are the most common forms of education. Moreover,
              each state sets its own standards and regulations for the
              education system in the United States. In spite of that, all over
              the country, there are some features and levels of education that
              are common.The U.S. education system is like this:
            </p>
            <h2>Early Childhood Education</h2>
            <p>
              The learning process in early childhood typically begins with
              preschool or prekindergarten programs, which are optional and are
              generally attended by children between the ages of 3 and 5.A major
              objective of these programs is to prepare children for elementary
              school through the development of their social, emotional, and
              cognitive abilities.
            </p>
            <h2>Elementary school</h2>
            <p>
              Elementary schools teach students reading, writing, mathematics,
              science, and social studies. Although public schools provide
              compulsory education, private schools are also available
            </p>
            <h2>Middle School/Junior High School</h2>
            <p>
              The junior high school, or middle school, is generally comprised
              of grades 6-8 or grades 7-8, depending on the school district.A
              transition occurs between the general instruction of elementary
              school and a more specialized curriculum in these grades.Public
              middle schools are typically part of the educational system.
            </p>
            <h2>HighSchool</h2>
            <p>
              As the final stage of compulsory education, high school includes
              grades 9-12.Course choices in high school tend to be more
              flexible, and may include core subjects, electives, and advanced
              placement (AP) courses.Depending on state requirements, high
              school graduates receive diplomas or certificates.
            </p>
            <h2>Higher Education</h2>
            <p>
              In the U.S., higher education refers to post-secondary education
              following high school. There are three types of colleges:
              colleges, universities, and community colleges.An associate's
              degree typically requires two years of study, while a bachelor's
              degree typically requires four years.Higher education institutions
              in the United States offer a wide range of academic programs,
              including those in liberal arts, sciences, engineering, business,
              and so forth.
            </p>
            <h2>Graduate and Professional Education</h2>
            <p>
              The completion of a bachelor's degree may lead to the pursuit of
              graduate degrees, including master's degrees and doctoral
              degrees.Medical, law, engineering, and academic professions often
              require these degrees. It is the federal government, the state
              governments, and the local governments that fund education in the
              United States.Schools typically rely on tuition fees and private
              sources to fund their budgets, while school districts rely on
              local property taxes.
            </p>
            <p>
              Students in the U.S. education system receive a broad
              education.Additionally, specialization is possible.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Education;
