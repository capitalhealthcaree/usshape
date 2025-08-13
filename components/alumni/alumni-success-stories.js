// import React, { useState } from "react";

// const AlumniSlider = () => {
//   const alumniData = [
//     {
//       id: 1,
//       name: "Asrar Ahmad",
//       details:
//         "Asrar Ahmad, a wonderful Extern, staying with us and learning diligently during the externship.",
//       image: "/images/alumni/stories/asrar-ahmad.png",
//       date: "2015",
//     },
//     {
//       id: 2,
//       name: "Dr. Ali Ahmad",
//       details:
//         " Dr. Ali Ahmad, a graduate of DOW Medical College, was currently pursuing an internship at our office-based surgery center. With a keen interest in Interventional Pain Medicine, Dr. Ahmad is diving into both radiology and surgical aspects, which align perfectly with his desired specialty. Beyond the clinical experience, he gained unique exposure to the entrepreneurial side of medical practice—an essential but often overlooked skillset that's rarely covered in traditional medical school training. Dr. Ahmad stands out for his diligence, dedication, and commitment to learning.",
//       image: "/images/alumni/stories/dr-ali-ahmad.png",
//       date: "August 27, 2016",
//     },
//     {
//       id: 3,
//       name: "Dr. Adeel Choudhry",
//       details:
//         " Dr. Adeel Choudhry, also a DOW Medical College graduate, joined us for his externship at our office-based surgery center, where he focused on Interventional Pain Medicine. His areas of interest include radiology and surgery, both central to his career ambitions. In addition to clinical skills, Dr. Choudhry is learning valuable entrepreneurial insights not commonly taught in medical school. His dedication and diligence make him an exceptional member of our team.",
//       image: "/images/alumni/stories/dr-adeel-choudhry.png",
//       date: "August 27, 2016",
//     },
//     {
//       id: 4,
//       name: "Muhammad Mubashir",
//       details:
//         "We had two great weeks with Mubashir, an SMC graduate who was preparing for a career in anesthesiology. He approached every learning opportunity with incredible enthusiasm! In our office, it's common for observers we meet for the first time to become family friends by the time they leave—and Mubashir was no exception. Wishing him all the best in his future journey!",
//       image: "/images/alumni/stories/muhammad-mubashir.png",
//       date: "November 3, 2016",
//     },
//     {
//       id: 5,
//       name: "Anas Farooqi",
//       details:
//         "I'm delighted to share that Anas Farooqi, one of my externs, matched this year in Psychiatry at Westchester Medical Center! His hard work and dedication during his externship paid off, and I couldn't be prouder of his success. It's wonderful to see him pursue his passion in a specialty that's so vital to healthcare. Congratulations again, Anas!",
//       image: "/images/alumni/stories/anas-farooqi.png",
//       date: "March 17, 2018",
//     },
//     {
//       id: 6,
//       name: "Maaz Muhammad",
//       details:
//         "Inspired by his brother, Muhammad Mubashir—who also completed an externship with me and went on to change his focus from Medicine to Anesthesiology—Maaz dedicated himself fully to his externship. Mubashir, now in an Anesthesia residency, is set to return for a pain elective as a Pain Fellow, InshAllah, showing the incredible impact of mentorship and family support.",
//       image: "/images/alumni/stories/maaz-muhammad.png",
//       date: "March 17, 2018",
//     },
//     {
//       id: 7,
//       name: "Hamna Hasan",
//       details:
//         "Hamna Hasan, DOW graduate, completed her externship at Premier Pain Centers TX. I must say she is one of the most responsible, hardworking and disciplined externs I ever had.",
//       image: "/images/alumni/stories/hamna-hasan.png",
//       date: "October 5, 2022",
//     },
//     {
//       id: 8,
//       name: "May & June Batches",
//       details:
//         "Five externs from May and June batches rotating at premier pain centers! Each from different background but common thing was; willingness to learn and hardwork. Our externship is as tough as residency (if not more) but these externs stay on their feet in Operating Room with me, sometimes 9-10 hrs with heavy lead on and drove all the way from Richardson to Hillsboro; at all eight locations without a single complaint.",
//       image: "/images/alumni/stories/may-june-batches.png",
//       date: "June 29, 2022",
//     },
//     {
//       id: 9,
//       name: "September Batch",
//       details:
//         "Another batch of externs rotating at premier pain centers Dallas Fort Worth completed yesterday! This is 6th batch of current year. Dr Maha Awaiz and Dr Zobia; both DOW grads did an amazing job and worked more like 'residents'. One month rotation at all locations and learnt all aspects of interventional pain management within scope of externship.",
//       image: "/images/alumni/stories/september-batch.png",
//       date: "September 11, 2021",
//     },
//     {
//       id: 10,
//       name: "September Batch",
//       details:
//         "Great residency match result of 2023! Young physicians work really hard to achieve this goal and all the credit goes to them, their hard work, perseverance; their family contributions. Congratulations to Ali Khaliq who assisted first allograft disc transplant (viadisc) ever in Dallas with us during his rotation and matched in anesthesia.",
//       image: "/images/alumni/stories/march-bach-2023.png",
//       date: "March 13, 2023",
//     },
//     {
//       id: 11,
//       name: "September Batch",
//       details:
//         "Congratulations to Premier Pain Centers' externs Mahnoor Ali, Zobia Aijaz, Maha Awaiz Hassan, and all others who successfully matched this year.",
//       image: "/images/alumni/stories/march-batch-2024.png",
//       date: "March 13, 2024",
//     },
//     {
//       id: 12,
//       name: "Muhammad Khaliq",
//       details: "Alumni success story from our externship program.",
//       image: "/images/alumni/stories/muhammad-khaliq.jpg",
//       date: "December 13, 2024",
//     },
//     {
//       id: 13,
//       name: "Sameer Ul Haq",
//       details: "Alumni success story from our externship program.",
//       image: "/images/alumni/stories/sameer-ul-haq.png",
//       date: "July 9, 2025",
//     },
//   ];

//   // Sort alumni by date (latest first)
//   const sortedAlumniData = [...alumniData].sort((a, b) => {
//     const dateA = new Date(a.date);
//     const dateB = new Date(b.date);

//     // Handle cases where date might just be a year
//     if (isNaN(dateA.getTime())) {
//       const yearA = parseInt(a.date);
//       if (!isNaN(yearA)) {
//         dateA.setFullYear(yearA, 0, 1); // Set to January 1st of that year
//       }
//     }

//     if (isNaN(dateB.getTime())) {
//       const yearB = parseInt(b.date);
//       if (!isNaN(yearB)) {
//         dateB.setFullYear(yearB, 0, 1); // Set to January 1st of that year
//       }
//     }

//     return dateB - dateA; // Sort in descending order (latest first)
//   });

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Calculate items per slide based on screen size
//   const getItemsPerSlide = () => {
//     if (typeof window !== "undefined") {
//       if (window.innerWidth < 576) return 1; // xs screens
//       if (window.innerWidth < 768) return 2; // sm screens
//       if (window.innerWidth < 992) return 3; // md screens
//       return 4; // lg and xl screens
//     }
//     return 4; // default
//   };

//   const [itemsPerSlide, setItemsPerSlide] = useState(4);

//   // Handle window resize
//   React.useEffect(() => {
//     const handleResize = () => {
//       setItemsPerSlide(getItemsPerSlide());
//     };

//     handleResize(); // Set initial value
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const totalSlides = Math.ceil(sortedAlumniData.length / itemsPerSlide);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   const getCurrentSlideItems = () => {
//     const start = currentIndex * itemsPerSlide;
//     const end = start + itemsPerSlide;
//     return sortedAlumniData.slice(start, end);
//   };

//   return (
//     <div className="container py-5">
//       <div className="row">
//         <div className="col-12">
//           <h2 className="text-center mb-4">Our Alumni</h2>

//           <div className="position-relative">
//             {/* Alumni Cards */}
//             <div className="row">
//               {getCurrentSlideItems().map((alumni) => (
//                 <div
//                   key={alumni.id}
//                   className={`col-12 col-sm-6 col-md-4 col-lg-3 mb-4`}
//                 >
//                   <div className="card h-100 shadow-sm">
//                     <img
//                       src={alumni.image}
//                       className="card-img-top"
//                       alt={alumni.name}
//                       style={{
//                         height: "250px",
//                         objectFit: "cover",
//                         aspectRatio: "364/393",
//                       }}
//                     />
//                     <div className="card-body text-center">
//                       <h5 className="card-title mb-2">{alumni.name}</h5>
//                       <p className="card-text text-muted mb-2">
//                         <small> {alumni.date}</small>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Navigation Buttons */}
//             {totalSlides > 1 && (
//               <>
//                 <button
//                   className="btn btn-primary position-absolute top-50 start-0 translate-middle-y"
//                   onClick={prevSlide}
//                   style={{ zIndex: 10, marginLeft: "-15px" }}
//                 >
//                   <i className="bi bi-chevron-left"></i>
//                   &#8249;
//                 </button>

//                 <button
//                   className="btn btn-primary position-absolute top-50 end-0 translate-middle-y"
//                   onClick={nextSlide}
//                   style={{ zIndex: 10, marginRight: "-15px" }}
//                 >
//                   <i className="bi bi-chevron-right"></i>
//                   &#8250;
//                 </button>
//               </>
//             )}
//           </div>

//           {/* Pagination Dots */}
//           {totalSlides > 1 && (
//             <div className="text-center mt-4">
//               {Array.from({ length: totalSlides }).map((_, index) => (
//                 <button
//                   key={index}
//                   className={`btn btn-sm mx-1 ${
//                     index === currentIndex
//                       ? "btn-primary"
//                       : "btn-outline-primary"
//                   }`}
//                   onClick={() => setCurrentIndex(index)}
//                   style={{
//                     width: "12px",
//                     height: "12px",
//                     borderRadius: "50%",
//                     padding: "0",
//                   }}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       <style jsx>{`
//         .card {
//           transition: transform 0.2s ease-in-out;
//         }
//         .card:hover {
//           transform: translateY(-5px);
//         }

//         @media (max-width: 575.98px) {
//           .position-absolute.start-0 {
//             left: -10px !important;
//           }
//           .position-absolute.end-0 {
//             right: -10px !important;
//           }
//         }

//         .btn:focus {
//           box-shadow: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AlumniSlider;
import { useState, useEffect } from "react";

const AlumniSlider = () => {
  const alumniData = [
    {
      id: 1,
      name: "Asrar Ahmad",
      details:
        "Asrar Ahmad, a wonderful Extern, staying with us and learning diligently during the externship.",
      image: "/images/alumni/stories/asrar-ahmad.png",
      date: "2015",
    },
    {
      id: 2,
      name: "Dr. Ali Ahmad",
      details:
        " Dr. Ali Ahmad, a graduate of DOW Medical College, was currently pursuing an internship at our office-based surgery center. With a keen interest in Interventional Pain Medicine, Dr. Ahmad is diving into both radiology and surgical aspects, which align perfectly with his desired specialty. Beyond the clinical experience, he gained unique exposure to the entrepreneurial side of medical practice—an essential but often overlooked skillset that's rarely covered in traditional medical school training. Dr. Ahmad stands out for his diligence, dedication, and commitment to learning.",
      image: "/images/alumni/stories/dr-ali-ahmad.png",
      date: "August 27, 2016",
    },
    {
      id: 3,
      name: "Dr. Adeel Choudhry",
      details:
        " Dr. Adeel Choudhry, also a DOW Medical College graduate, joined us for his externship at our office-based surgery center, where he focused on Interventional Pain Medicine. His areas of interest include radiology and surgery, both central to his career ambitions. In addition to clinical skills, Dr. Choudhry is learning valuable entrepreneurial insights not commonly taught in medical school. His dedication and diligence make him an exceptional member of our team.",
      image: "/images/alumni/stories/dr-adeel-choudhry.png",
      date: "August 27, 2016",
    },
    {
      id: 4,
      name: "Muhammad Mubashir",
      details:
        "We had two great weeks with Mubashir, an SMC graduate who was preparing for a career in anesthesiology. He approached every learning opportunity with incredible enthusiasm! In our office, it's common for observers we meet for the first time to become family friends by the time they leave—and Mubashir was no exception. Wishing him all the best in his future journey!",
      image: "/images/alumni/stories/muhammad-mubashir.png",
      date: "November 3, 2016",
    },
    {
      id: 5,
      name: "Anas Farooqi",
      details:
        "I'm delighted to share that Anas Farooqi, one of my externs, matched this year in Psychiatry at Westchester Medical Center! His hard work and dedication during his externship paid off, and I couldn't be prouder of his success. It's wonderful to see him pursue his passion in a specialty that's so vital to healthcare. Congratulations again, Anas!",
      image: "/images/alumni/stories/anas-farooqi.png",
      date: "March 17, 2018",
    },
    {
      id: 6,
      name: "Maaz Muhammad",
      details:
        "Inspired by his brother, Muhammad Mubashir—who also completed an externship with me and went on to change his focus from Medicine to Anesthesiology—Maaz dedicated himself fully to his externship. Mubashir, now in an Anesthesia residency, is set to return for a pain elective as a Pain Fellow, InshAllah, showing the incredible impact of mentorship and family support.",
      image: "/images/alumni/stories/maaz-muhammad.png",
      date: "March 17, 2018",
    },
    {
      id: 7,
      name: "Hamna Hasan",
      details:
        "Hamna Hasan, DOW graduate, completed her externship at Premier Pain Centers TX. I must say she is one of the most responsible, hardworking and disciplined externs I ever had.",
      image: "/images/alumni/stories/hamna-hasan.png",
      date: "October 5, 2022",
    },
    {
      id: 8,
      name: "May & June Batches",
      details:
        "Five externs from May and June batches rotating at premier pain centers! Each from different background but common thing was; willingness to learn and hardwork. Our externship is as tough as residency (if not more) but these externs stay on their feet in Operating Room with me, sometimes 9-10 hrs with heavy lead on and drove all the way from Richardson to Hillsboro; at all eight locations without a single complaint.",
      image: "/images/alumni/stories/may-june-batches.png",
      date: "June 29, 2022",
    },
    {
      id: 9,
      name: "September Batch",
      details:
        "Another batch of externs rotating at premier pain centers Dallas Fort Worth completed yesterday! This is 6th batch of current year. Dr Maha Awaiz and Dr Zobia; both DOW grads did an amazing job and worked more like 'residents'. One month rotation at all locations and learnt all aspects of interventional pain management within scope of externship.",
      image: "/images/alumni/stories/september-batch.png",
      date: "September 11, 2021",
    },
    {
      id: 10,
      name: "March Batch 2023",
      details:
        "Great residency match result of 2023! Young physicians work really hard to achieve this goal and all the credit goes to them, their hard work, perseverance; their family contributions. Congratulations to Ali Khaliq who assisted first allograft disc transplant (viadisc) ever in Dallas with us during his rotation and matched in anesthesia.",
      image: "/images/alumni/stories/march-bach-2023.png",
      date: "March 13, 2023",
    },
    {
      id: 11,
      name: "March Batch 2024",
      details:
        "Congratulations to Premier Pain Centers' externs Mahnoor Ali, Zobia Aijaz, Maha Awaiz Hassan, and all others who successfully matched this year.",
      image: "/images/alumni/stories/march-batch-2024.png",
      date: "March 13, 2024",
    },
    {
      id: 12,
      name: "Muhammad Khaliq",
      details: "Alumni success story from our externship program.",
      image: "/images/alumni/stories/muhammad-khaliq.jpg",
      date: "December 13, 2024",
    },
    {
      id: 13,
      name: "Sameer Ul Haq",
      details: "Alumni success story from our externship program.",
      image: "/images/alumni/stories/sameer-ul-haq.png",
      date: "July 9, 2025",
    },
  ];

  // Sort alumni by date (latest first)
  const sortedAlumniData = [...alumniData].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    // Handle cases where date might just be a year
    if (isNaN(dateA.getTime())) {
      const yearA = parseInt(a.date);
      if (!isNaN(yearA)) {
        dateA.setFullYear(yearA, 0, 1); // Set to January 1st of that year
      }
    }

    if (isNaN(dateB.getTime())) {
      const yearB = parseInt(b.date);
      if (!isNaN(yearB)) {
        dateB.setFullYear(yearB, 0, 1); // Set to January 1st of that year
      }
    }

    return dateB - dateA; // Sort in descending order (latest first)
  });

  const [startIndex, setStartIndex] = useState(0);

  // Calculate items per slide based on screen size
  const getItemsPerSlide = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 576) return 1; // xs screens
      if (window.innerWidth < 768) return 2; // sm screens
      if (window.innerWidth < 992) return 3; // md screens
      return 4; // lg and xl screens
    }
    return 4; // default
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newItemsPerSlide = getItemsPerSlide();
      setItemsPerSlide(newItemsPerSlide);
      // Adjust start index if needed to prevent showing empty spaces
      if (startIndex + newItemsPerSlide > sortedAlumniData.length) {
        setStartIndex(Math.max(0, sortedAlumniData.length - newItemsPerSlide));
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [startIndex, sortedAlumniData.length]);

  // Move to next item (one at a time)
  const nextSlide = () => {
    if (startIndex < sortedAlumniData.length - itemsPerSlide) {
      setStartIndex((prev) => prev + 1);
    } else {
      // Loop back to beginning
      setStartIndex(0);
    }
  };

  // Move to previous item (one at a time)
  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    } else {
      // Loop to end
      setStartIndex(sortedAlumniData.length - itemsPerSlide);
    }
  };

  const getCurrentSlideItems = () => {
    const end = startIndex + itemsPerSlide;
    return sortedAlumniData.slice(startIndex, end);
  };

  // Calculate total possible positions for pagination
  const maxStartIndex = Math.max(0, sortedAlumniData.length - itemsPerSlide);
  const totalPositions = maxStartIndex + 1;

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-4">Our Alumni</h2>

          <div className="position-relative">
            {/* Alumni Cards */}
            <div className="row">
              {getCurrentSlideItems().map((alumni) => (
                <div
                  key={alumni.id}
                  className={`col-12 col-sm-6 col-md-4 col-lg-3 mb-4`}
                >
                  <div className="card h-100 shadow-sm">
                    <img
                      src={alumni.image}
                      className="card-img-top"
                      alt={alumni.name}
                      style={{
                        height: "250px",
                        objectFit: "cover",
                        aspectRatio: "364/393",
                      }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title mb-2">{alumni.name}</h5>
                      <p className="card-text text-muted mb-2">
                        <small>{alumni.date}</small>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            {sortedAlumniData.length > itemsPerSlide && (
              <>
                <button
                  className="btn btn-primary position-absolute top-50 start-0 translate-middle-y"
                  onClick={prevSlide}
                  style={{ zIndex: 10, marginLeft: "-15px" }}
                >
                  &#8249;
                </button>

                <button
                  className="btn btn-primary position-absolute top-50 end-0 translate-middle-y"
                  onClick={nextSlide}
                  style={{ zIndex: 10, marginRight: "-15px" }}
                >
                  &#8250;
                </button>
              </>
            )}
          </div>

          {/* Pagination Dots */}
          {totalPositions > 1 && (
            <div className="text-center mt-4">
              {Array.from({ length: totalPositions }).map((_, index) => (
                <button
                  key={index}
                  className={`btn btn-sm mx-1 ${
                    index === startIndex ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setStartIndex(index)}
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    padding: "0",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .card {
          transition: transform 0.2s ease-in-out;
        }
        .card:hover {
          transform: translateY(-5px);
        }

        @media (max-width: 575.98px) {
          .position-absolute.start-0 {
            left: -10px !important;
          }
          .position-absolute.end-0 {
            right: -10px !important;
          }
        }

        .btn:focus {
          box-shadow: none;
        }
      `}</style>
    </div>
  );
};

export default AlumniSlider;
