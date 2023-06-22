import React from "react";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <>
      <div className="blog-details-item">
        <div className="blog-details-recent">
          <h3>Recent Blogs</h3>
          <ul>
            <li>
              <img src="/images/blog/blog1.jpg" alt="Recent" />
              <Link href="/blog-details">
                World AIDS Day, designated on 1 December.
              </Link>
              <ul>
                <li>
                  <Link href="/blog">
                    <i className="icofont-businessman"></i> Admin
                  </Link>
                </li>
                <li>
                  <i className="icofont-calendar"></i> Jan 03, 2022
                </li>
              </ul>
            </li>
            <li>
              <img src="/images/blog/blog2.jpg" alt="Recent" />
              <Link href="/blog-details">
                World AIDS Day, designated on 1 December.
              </Link>
              <ul>
                <li>
                  <Link href="/blog">
                    <i className="icofont-businessman"></i> Admin
                  </Link>
                </li>
                <li>
                  <i className="icofont-calendar"></i> Jan 03, 2022
                </li>
              </ul>
            </li>
            <li>
              <img src="/images/blog/blog3.jpg" alt="Recent" />
              <Link href="/blog-details">
                World AIDS Day, designated on 1 December.
              </Link>
              <ul>
                <li>
                  <Link href="/blog">
                    <i className="icofont-businessman"></i> Admin
                  </Link>
                </li>
                <li>
                  <i className="icofont-calendar"></i> Jan 03, 2022
                </li>
              </ul>
            </li>
            <li>
              <img src="/images/blog/blog1.jpg" alt="Recent" />
              <Link href="/blog-details">
                World AIDS Day, designated on 1 December.
              </Link>
              <ul>
                <li>
                  <Link href="/blog">
                    <i className="icofont-businessman"></i> Admin
                  </Link>
                </li>
                <li>
                  <i className="icofont-calendar"></i> Jan 03, 2022
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="blog-details-tags">
          <div className="">
            <div className="">
              <div className="row">
                <div className="col-sm-6 col-lg-12">
                  <div className="doctor-item container">
                    <div className="doctor-bottom">
                      <h3>
                        <Link href="/doctor-details">
                          Choose a Cause to Support
                        </Link>
                      </h3>
                      <span>
                        Help our organization by donating today! All donations
                        go directly to making a difference. Choose a cause in
                        the dropdown menu, or donate to the general fund and we
                        will put your money to work.
                      </span>
                    </div>
                    <div>
                      <img
                        src="/images/about.jpg"
                        alt="Doctor"
                        style={{ marginBottom: "10px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
