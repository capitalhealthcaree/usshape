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
        pageTitle="Healthcare"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Healthcare"
        bgImage="/images/health-care/health-care-bg.jpg"
      />

      <div className="service-details-area pt-100">
        <div className="container">
          <div className="services-details-img">
            <img
              src="/images/health-care/health-care.jpg"
              alt="Healthcare"
            />
            <p>
              Healthcare in the United States is a complex and multifaceted
              system that involves private and public providers and insurance
              options. Here are some key points about healthcare in the USA:
            </p>
            <h2>Healthcare Providers</h2>
            <p>
              As a benefit to their employees, employers provide health
              insurance. Various health insurance plans are available from
              private insurance carriers, each with a varying level of coverage
              and cost.Government coverage is available to certain groups,
              including the elderly (Medicare) and the low-income (Medicaid).
            </p>
            <h2>Health Insurance</h2>
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
            <h2>Affordable Care Act (ACA):</h2>
            <p>
              Aiming to increase access to affordable healthcare, the Affordable
              Care Act, also known as Obamacare, was enacted in 2010 by the
              United States government. In addition to establishing health
              insurance marketplaces and expanding Medicaid eligibility, it also
              provided consumer protections.
            </p>
            <h2>Coverage Gaps</h2>
            <p>
              Although the Affordable Care Act is designed to expand coverage,
              some individuals still do not have health insurance due to
              unemployment, high costs, or eligibility restrictions. As a
              result, they may have difficulty affording medical care.
            </p>
            <h2>Costs</h2>
            <p>
              Healthcare costs in the United States are among the highest in the
              world. Medical services, prescription drugs, and health insurance
              premiums may burden individuals, families, and the healthcare
              system.
            </p>
            <h2>Preexisting Conditions</h2>
            <p>
              The Affordable Care Act protects individuals with pre-existing
              health conditions.According to this law, insurance companies
              cannot deny coverage to individuals with certain medical
              conditions or raise their premiums for them because of these
              conditions.This provision provides affordable health insurance for
              pre-existing conditions..
            </p>
            <h2>Electronic Health Records (EHRs)</h2>
            <p>
              A revolution is taking place in the healthcare industry in the
              United States as electronic health records are revolutionizing
              efficiency, coordination of care, and patient safety.EHRs provide
              electronic access to and sharing of medical information.
            </p>
            <h2>Ongoing debates</h2>
            <p>
              Affordable healthcare and healthcare reform remain significant
              topics of discussion in the U.S. These discussions center on
              expanding coverage, improving healthcare outcomes, and addressing
              access and quality disparities.
            </p>
            <p>
              Health care is a dynamic and evolving subject, and policies and
              regulations change over time.As far as I am aware, September 2021
              is the cutoff date for the submission of information
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SocialJustice;
