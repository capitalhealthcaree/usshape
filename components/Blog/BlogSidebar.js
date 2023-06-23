import React, { useState, useEffect } from "react";
import Link from "next/link";
import api from "../../utils/api";

const BlogSidebar = () => {
  const [list, setList] = useState([]);

  async function fetchData() {
    const res = await api.get("/blog/getLastFive");
    if (res.status === 200) {
      if (res && res.data && res.data.data) {
        setList(res.data.data);
      }
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="blog-details-item">
        <div className="blog-details-recent">
          <h3>Recent Blogs</h3>
          <ul>
            {list.map((item, i) => {
              return (
                <li key={i}>
                  <img src={item.image} alt={item.category} />
                  <Link href={`/blog${item.slug}`}>{item.seoTitle[0]}</Link>
                  <ul>
                    <li>
                      <Link href="#" onClick={(e) => e.preventDefault()}>
                        {item.category}
                      </Link>
                    </li>
                    <li></li>
                  </ul>
                </li>
              );
            })}
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
