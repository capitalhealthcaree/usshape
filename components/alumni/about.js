import Link from "next/link";

const AboutOurHospital = () => {
  return (
    <>
      <div className="hospital-area pt-5 pb-4">
        <div className="container-fluid p-0">
          <div className="row m-0 align-items-center">
            <div className="col-lg-6 p-0">
              <div className="hospital-item">
                <div className="row m-0">
                  <div className="col-lg-6 p-0">
                    <div className="hospital-left-one">
                      <img src="/images/alumni/about-1.png" alt="About" />
                    </div>
                  </div>
                  <div className="col-lg-6 p-0">
                    <div className="hospital-left-two">
                      <img src="/images/alumni/about-2.png" alt="About" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hospital-item hospital-right">
                <h2>What is the US SHAPE Alumni Network?</h2>
                <p>
                  The <b>USSHAPE</b> Alumni Network is a community designed for
                  all physicians and medical professionals who have participated
                  in any of our programs. Whether you’ve received support for
                  clinical rotations, professional consultations, or other
                  educational opportunities, you are part of this growing
                  network. As an alumnus, you’ll have access to career
                  development resources, peer networking, and exclusive events.
                </p>

                <p>
                  Participation in the alumni network is a mark of professional
                  achievement and lifelong learning. It is a space where you can
                  stay connected, share knowledge, and continue your journey of
                  personal and professional growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOurHospital;
