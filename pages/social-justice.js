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
              The concept of social injustice refers to the situation when
              equals are treated unequally and unequals are treated equally by
              the system. Social justice is based on the principles of human
              rights, equity, participation, and accessibility. The process of
              achieving social justice is not easy since there are a number of
              issues that need to be addressed.
            </p>
            <p>
              An individual who is a member of a nation is entitled to certain
              basic and equal rights. In our nation, we are unfortunate that our
              fundamental rights are not recognized as equal for everyone. A
              person's rights are determined by his or her power, self-esteem,
              and status, and many people do not know how to go about obtaining
              them. Pakistan has numerous social injustice issues, including
              gender inequality socioeconomic disparities, religious
              discrimination, and lack of access to education and healthcare.
              Governments, civil society organizations, and individuals must
              collaborate to address social injustice.
            </p>
            <h2>Pakistan has numerous Social Injustice issues like :</h2>
            <h4>Gender Inequality:</h4>
            <p>
              Pakistan faces significant gender disparities, with women and
              girls often experiencing discrimination and violence. They have
              limited access to education, healthcare, employment opportunities,
              and political participation. Harmful practices such as child
              marriage, honor killings, and domestic violence are prevalent.
            </p>
            <h4>Religious discrimination:</h4>
            <p>
              Pakistan is an Islamic Republic, and religious minorities,
              including Christians, Hindus, Sikhs, and Ahmadis, face
              discrimination and persecution. They often experience restrictions
              on religious freedom, targeted violence, and blasphemy laws that
              can oppress minority communities.
            </p>
            <h4>Socioeconomic Disparities:</h4>
            <p>
              Pakistan has a large wealth gap, with a significant portion of the
              population living in poverty. Rural areas, particularly in
              provinces like Balochistan and Sindh, face higher levels of
              poverty and lack basic amenities such as clean water, sanitation,
              and healthcare facilities. Urban-rural divide exacerbates social
              injustice, as urban areas enjoy better infrastructure and
              resources.
            </p>
            <h4>Quality Education:</h4>
            <p>
              Although Pakistan has made significant efforts to improve
              education, quality education remains a challenge for its citizens.
              Due to poverty, cultural norms, and inadequate infrastructure,
              many children, particularly girls and those from marginalized
              communities, cannot attend school. A lack of access to education
              and illiteracy perpetuate social inequalities.
            </p>
            <h4>Human Rights:</h4>
            <p>
              A number of human rights violations persist in Pakistan, including
              extrajudicial killings, forced disappearances, torture, and
              restrictions on freedom of expression. Dissenting voices,
              journalists, and activists often face threats, harassment, and
              intimidation.
            </p>
            <h4>Injustice based on caste:</h4>
            <p>
              Caste discrimination is prevalent in Pakistan, although not as
              prevalent as in some other South Asian countries. A great deal of
              marginalization and social mobility restrictions are experienced
              by people of lower castes and their access to resources is
              limited.
            </p>
            <p>
              The objective of <b>US SHAPE</b> is to promote equal rights,
              improving access to educational and healthcare opportunities,
              empowering women, protecting religious minorities and creating a
              democratic society where all citizens can participate in and
              benefit from their rights. Our society and state should maintain
              vigilance when administering justice. Governments, civil society
              organizations, and individuals must collaborate to address social
              injustice.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SocialJustice;
