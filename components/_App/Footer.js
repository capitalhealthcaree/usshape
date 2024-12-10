import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="pt-5 pb-70">
        <div className="container">
          <div className="row">
            {" "}
            <div className="col-sm-6 col-lg-5">
              <div className="footer-item">
                <div className="footer-feedback">
                  <Link href="/">
                    <h1 style={{ color: "white" }}>US SHAPE</h1>
                  </Link>
                  <span style={{ color: "white" }}>
                    Our organization is dedicated to serving the less fortunate
                    and facilitating meaningful connections with them. Our name
                    reflects our core values: S for Social Justice, H for
                    Healthcare, A for Advocacy, P for Poverty Alleviation, and E
                    for Education. When we integrate these principles, we
                    realize that they collectively work for the betterment of
                    the poor. By working together as a community, we can provide
                    the underprivileged with the necessary support and comforts
                    that they are unable to obtain on their own.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>What We Do</h3>
                  <ul>
                    <li>
                      <Link href="/social-justice">Social Justice</Link>
                    </li>
                    <li>
                      <Link href="/health-care">Healthcare</Link>
                    </li>
                    <li>
                      <Link href="/advocacy">Advocacy</Link>
                    </li>
                    <li>
                      <Link href="/poverty-alleviation">
                        Poverty Alleviation
                      </Link>
                    </li>
                    <li>
                      <Link href="/education">Education</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link href="#" onClick={(e) => e.preventDefault()}>
                        News
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={(e) => e.preventDefault()}>
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link href="/faqs">FAQs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="footer-item">
                <div className="footer-contact pe-2">
                  <h3>Contact Us</h3>
                  <ul>
                    <li style={{ paddingLeft: "35px" }}>
                      <i
                        className="icofont-ui-message"
                        style={{ fontSize: "24px" }}
                      ></i>
                      <a href="mailto:contact@usshape.org">
                        contact@usshape.org
                      </a>
                    </li>
                    <li style={{ paddingLeft: "35px" }}>
                      <i
                        className="icofont-stock-mobile"
                        style={{ fontSize: "30px" }}
                      ></i>

                      <a href="tel:+14698665222"> +1 (469) 866-5222</a>
                    </li>
                    <li style={{ paddingLeft: "35px" }}>
                      <i
                        className="icofont-location-pin"
                        style={{ fontSize: "30px" }}
                      ></i>
                      2071 N Collins Blvd Richardson TX 75080
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-item">
            <p>
              Copyright &copy; {currentYear} All Rights Reserved |{" "}
              <a href="https://usshape.org" target="_blank">
                USSHAPE
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
