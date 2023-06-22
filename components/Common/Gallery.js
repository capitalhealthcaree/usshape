import React from "react";
import Link from "next/link";
const data = [
  {
    image: "/images/gallery/donation-for-education.jpg",
    alt: "donation-for-education",
  },
  {
    image: "/images/gallery/donation-for-health.jpg",
    alt: "donation-for-health",
  },
  { image: "/images/gallery/donation-for-kids.jpg", alt: "donation-for-kids" },
  {
    image: "/images/gallery/donation-for-child.jpg",
    alt: "donation-for-child",
  },
  {
    image: "/images/gallery/donation-for-life-better.jpg",
    alt: "donation-for-life-better",
  },
  {
    image: "/images/gallery/donation-for-rural.jpg",
    alt: "donation-for-rural",
  },
  {
    image: "/images/gallery/donation-for-water.jpg",
    alt: "donation-for-water",
  },
  { image: "/images/gallery/little-help.jpg", alt: "little-help" },
  {
    image: "/images/gallery/donate-for-poor-child.png",
    alt: "donate-for-poor-child",
  },
  {
    image: "/images/gallery/donate-for-poor-family.png",
    alt: "donate-for-poor-family",
  },
  {
    image: "/images/gallery/donate-for-poor-kids.png",
    alt: "donate-for-poor-kids",
  },
  {
    image: "/images/gallery/donate-for-poor-patients.png",
    alt: "donate-for-poor-patients",
  },
];
const Gallery = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>GALLERY</h2>
          </div>

          <div className="row justify-content-center">
            {data.map((item, i) => {
              return (
                <div className="col-md-6 col-lg-3" key={i}>
                  <div className="blog-item">
                    <div className="blog-top">
                      <img src={item.image} alt={item.alt} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
