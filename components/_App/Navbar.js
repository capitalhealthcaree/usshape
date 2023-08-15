import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area sticky-top">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img src="/images/logo.png" alt="logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <div
                      className="nav-link dropdown-toggle"
                      style={{
                        fontWeight: "500",
                        fontSize: "20px",
                        color: "#344c5d",
                        textTransform: "capitalize",
                        margin: "0 10px",
                        padding: "0",
                        position: "relative",
                      }}
                    >
                      What We Do
                    </div>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/social-justice"
                          className={`nav-link ${
                            currentPath == "/social-justice" && "active"
                          }`}
                        >
                          <span
                            style={{ color: "#0046c0", fontWeight: "bold" }}
                          >
                            S
                          </span>
                          ocial Justice
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/health-care"
                          className={`nav-link ${
                            currentPath == "/health-care" && "active"
                          }`}
                        >
                          <span
                            style={{ color: "#0046c0", fontWeight: "bold" }}
                          >
                            H
                          </span>
                          ealthcare
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/advocacy"
                          className={`nav-link ${
                            currentPath == "/advocacy" && "active"
                          }`}
                        >
                          <span
                            style={{ color: "#0046c0", fontWeight: "bold" }}
                          >
                            A
                          </span>
                          dvocacy
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/poverty-alleviation"
                          className={`nav-link ${
                            currentPath == "/poverty-alleviation" && "active"
                          }`}
                        >
                          <span
                            style={{ color: "#0046c0", fontWeight: "bold" }}
                          >
                            P
                          </span>
                          overty Alleviation
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/education"
                          className={`nav-link ${
                            currentPath == "/education" && "active"
                          }`}
                        >
                          <span
                            style={{ color: "#0046c0", fontWeight: "bold" }}
                          >
                            E
                          </span>
                          ducation
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <div
                      className="nav-link dropdown-toggle"
                      style={{
                        fontWeight: "500",
                        fontSize: "20px",
                        color: "#344c5d",
                        textTransform: "capitalize",
                        margin: "0 10px",
                        padding: "0",
                        position: "relative",
                      }}
                    >
                      Media
                    </div>
                    <ul className="dropdown-menu">
                      {/* <li className="nav-item">
                        <Link
                          href="/application-form/"
                          className={`nav-link ${
                            currentPath == "/application-form/" && "active"
                          }`}
                        >
                          Application Form
                        </Link>
                      </li> */}
                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          // href="/success-stories/"

                          // className={`nav-link ${
                          //   currentPath == "/success-stories/" && "active"
                          // }`}
                        >
                          Success Stories
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          // href="/news-letter/"
                          // className={`nav-link ${
                          //   currentPath == "/news-letter/" && "active"
                          // }`}
                        >
                          NewsLetter
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="#" onClick={(e) => e.preventDefault()}>
                          News
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="#" onClick={(e) => e.preventDefault()}>
                          Blogs
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/nagy-loan"
                      className={`nav-link ${
                        currentPath == "/nagy-loan" && "active"
                      }`}
                    >
                      Nagy Loan Program for Young Physicians
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact"
                      className={`nav-link ${
                        currentPath == "/contact" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/faqs"
                      className={`nav-link ${
                        currentPath == "/faqs" && "active"
                      }`}
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="common-btn">
                <Link
                  href="/donation"
                  style={{ backgroundColor: "#0046c0", color: "white" }}
                >
                  DONATE
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
