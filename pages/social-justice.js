import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const SocialJustice = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Social Justice"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Social Justice"
        bgImage="/images/social-justice/social-justice-bg.jpg"
      />

      <div className="service-details-area pt-100">
        <div className="container">
          <div className="services-details-img">
            <img
              src="/images/social-justice/social-justice.jpg"
              alt="Social Justice"
            />

            <p>
              Fairness in society is social justice.In addition to healthcare,
              employment, and housing, this includes fairness in other
              areas.Socially just societies respect human rights and prevent
              discrimination.The phrase "social justice" originated in the
              1780s.In The Federalist Papers, Paper #7, it appears to have first
              been used in the 1780s.At the end of the Industrial Revolution,
              economic scholars applied this term to the study of economics.Its
              use has expanded significantly and is now applicable to all facets
              of society.Race, class, sexuality, and gender contribute.
            </p>

            <h1> Principles of Social Justice </h1>
            <p>
              The following main principles can help you better understand
              social justice.
            </p>
            <h2>Access to resources</h2>
            <p>
              Social justice requires resource access.Achieving equality of
              opportunity means giving everyone an equal start in life.Society
              offers a variety of resources and services to its citizens, such
              as healthcare, food, shelter, education, and recreation.Uneven
              access to such services is common. Wealthy households are likely
              to have better access to schools and post-secondary education,
              leading to better chances of higher-paying jobs.People from the
              lower classes have fewer opportunities.As a result, future
              generations are limited in their ability to access education.
            </p>
            <h2>Human Rights</h2>
            <p>
              The concept of social justice is based on human rights, its
              foundational principles.Human rights and social justice are
              interdependent. Societies that respect civil, economic, cultural,
              political, and legal rights are fundamental to their
              development.All individuals, organizations, and governments are
              responsible for ensuring the protection of these rights. In
              addition, the International Criminal Court recognizes their
              influence in many societies around the world.
            </p>
            <h2>Equity</h2>
            <p>
              Equity is about giving individuals the tools to achieve similar
              outcomes.In contrast to equality, in which everyone receives the
              same tools.The need for more advanced services makes equal
              services inequitable. Social justice policies may address systemic
              barriers.
            </p>
            <h2>Diversity</h2>
            <p>
              Cultural differences require understanding diversity.Policies
              constructed by policymakers often take into account differences
              among societal groups.Identifying the barriers some groups face in
              society is essential.Policymakers must consider equity if
              marginalized groups are to be expanded. Throughout society,
              racial, gender, ethnic, sex, and age discrimination in the
              workplace is a constant concern.Diverse practices can be prevented
              by policies.
            </p>
            <h2>Participation</h2>
            <p>
              Everyone in society has a voice to voice their opinions and
              concerns.Additionally, they participate in decisions affecting
              their livelihoods.People in small groups make decisions on behalf
              of large groups, while others are unable to express their
              opinions.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SocialJustice;
