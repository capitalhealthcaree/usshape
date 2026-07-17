// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const alumniData = [
//   {
//     id: 1,
//     name: "Asrar Ahmad",
//     details:
//       "Asrar Ahmad, a wonderful Extern, staying with us and learning diligently during the externship.",
//     image: "/images/alumni/stories/asrar-ahmad.png",
//     date: "2015",
//   },
//   {
//     id: 2,
//     name: "Dr. Ali Ahmad",
//     details:
//       "Dr. Ali Ahmad, a graduate of DOW Medical College, was currently pursuing an internship at our office-based surgery center. With a keen interest in Interventional Pain Medicine, Dr. Ahmad is diving into both radiology and surgical aspects, which align perfectly with his desired specialty. Beyond the clinical experience, he gained unique exposure to the entrepreneurial side of medical practice—an essential but often overlooked skillset that's rarely covered in traditional medical school training. Dr. Ahmad stands out for his diligence, dedication, and commitment to learning.",
//     image: "/images/alumni/stories/dr-ali-ahmad.png",
//     date: "August 27, 2016",
//   },
//   {
//     id: 3,
//     name: "Dr. Adeel Choudhry",
//     details:
//       "Dr. Adeel Choudhry, also a DOW Medical College graduate, joined us for his externship at our office-based surgery center, where he focused on Interventional Pain Medicine. His areas of interest include radiology and surgery, both central to his career ambitions. In addition to clinical skills, Dr. Choudhry is learning valuable entrepreneurial insights not commonly taught in medical school. His dedication and diligence make him an exceptional member of our team.",
//     image: "/images/alumni/stories/dr-adeel-choudhry.png",
//     date: "August 27, 2016",
//   },
//   {
//     id: 4,
//     name: "Muhammad Mubashir",
//     details:
//       "We had two great weeks with Mubashir, an SMC graduate who was preparing for a career in anesthesiology. He approached every learning opportunity with incredible enthusiasm! In our office, it's common for observers we meet for the first time to become family friends by the time they leave—and Mubashir was no exception. Wishing him all the best in his future journey!",
//     image: "/images/alumni/stories/muhammad-mubashir.png",
//     date: "November 3, 2016",
//   },
//   {
//     id: 5,
//     name: "Anas Farooqi",
//     details:
//       "I'm delighted to share that Anas Farooqi, one of my externs, matched this year in Psychiatry at Westchester Medical Center! His hard work and dedication during his externship paid off, and I couldn't be prouder of his success. It's wonderful to see him pursue his passion in a specialty that's so vital to healthcare. Congratulations again, Anas!",
//     image: "/images/alumni/stories/anas-farooqi.png",
//     date: "March 17, 2018",
//   },
//   {
//     id: 6,
//     name: "Maaz Muhammad",
//     details:
//       "Inspired by his brother, Muhammad Mubashir—who also completed an externship with me and went on to change his focus from Medicine to Anesthesiology—Maaz dedicated himself fully to his externship. Mubashir, now in an Anesthesia residency, is set to return for a pain elective as a Pain Fellow, InshAllah, showing the incredible impact of mentorship and family support.",
//     image: "/images/alumni/stories/maaz-muhammad.png",
//     date: "March 17, 2018",
//   },
//   {
//     id: 7,
//     name: "Hamna Hasan",
//     details:
//       "Hamna Hasan, DOW graduate, completed her externship at Premier Pain Centers TX. I must say she is one of the most responsible, hardworking and disciplined externs I ever had.",
//     image: "/images/alumni/stories/hamna-hasan.png",
//     date: "October 5, 2022",
//   },
//   {
//     id: 8,
//     name: "May & June Batches",
//     details:
//       "Five externs from May and June batches rotating at premier pain centers! Each from different background but common thing was; willingness to learn and hardwork. Our externship is as tough as residency (if not more) but these externs stay on their feet in Operating Room with me, sometimes 9-10 hrs with heavy lead on and drove all the way from Richardson to Hillsboro; at all eight locations without a single complaint.",
//     image: "/images/alumni/stories/may-june-batches.png",
//     date: "June 29, 2022",
//   },
//   {
//     id: 9,
//     name: "September Batch",
//     details:
//       "Another batch of externs rotating at premier pain centers Dallas Fort Worth completed yesterday! This is 6th batch of current year. Dr Maha Awaiz and Dr Zobia; both DOW grads did an amazing job and worked more like 'residents'. One month rotation at all locations and learnt all aspects of interventional pain management within scope of externship.",
//     image: "/images/alumni/stories/september-batch.png",
//     date: "September 11, 2021",
//   },
//   {
//     id: 10,
//     name: "March Batch 2023",
//     details:
//       "Great residency match result of 2023! Young physicians work really hard to achieve this goal and all the credit goes to them, their hard work, perseverance; their family contributions. Congratulations to Ali Khaliq who assisted first allograft disc transplant (viadisc) ever in Dallas with us during his rotation and matched in anesthesia.",
//     image: "/images/alumni/stories/march-bach-2023.png",
//     date: "March 13, 2023",
//   },
//   {
//     id: 11,
//     name: "March Batch 2024",
//     details:
//       "Congratulations to Premier Pain Centers' externs Mahnoor Ali, Zobia Aijaz, Maha Awaiz Hassan, and all others who successfully matched this year.",
//     image: "/images/alumni/stories/march-batch-2024.png",
//     date: "March 13, 2024",
//   },
//   {
//     id: 12,
//     name: "Muhammad Khaliq",
//     details: "Alumni success story from our externship program.",
//     image: "/images/alumni/stories/muhammad-khaliq.jpg",
//     date: "December 13, 2024",
//   },
//   {
//     id: 13,
//     name: "Sameer Ul Haq",
//     details: "Alumni success story from our externship program.",
//     image: "/images/alumni/stories/sameer-ul-haq.png",
//     date: "July 9, 2025",
//   },
//   {
//     id: 14,
//     name: "Ariba Faheem",
//     details: "Alumni success story from our externship program.",
//     image: "/images/alumni/stories/ariba-faheem.jpg",
//     date: "October, 2024",
//   },
//   {
//     id: 15,
//     name: "Sarah Tariq",
//     details: "IT and Healthcare Management",
//     image: "/images/female-placeholder.png",
//     date: "March, 2026",
//   },
//   {
//     id: 16,
//     name: "Masuma Firoze",
//     details: "IT and Healthcare Management",
//     image: "/images/alumni/stories/masuma-firoze.png",
//     date: "July 17, 2026",
//   },
// ];

// // truncate helper
// const truncate = (text, max = 110) =>
//   text && text.length > max ? text.slice(0, max).trim() + "…" : text;

// export default function AlumniSuccessStories() {
//   return (
//     <section className="alumni-section position-relative overflow-hidden">
//       {/* decorative background */}
//       <span className="bg-blob blob-1" />
//       <span className="bg-blob blob-2" />
//       <div className="bg-grid" />

//       <div className="container  position-relative" style={{ zIndex: 2 }}>
//         <h2 className="section-title">
//           The Faces of <span className="title-grad">Our Alumni.</span>
//         </h2>

//         {/* carousel */}
//         <div className="alumni-carousel position-relative">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={20}
//             slidesPerView={1}
//             breakpoints={{
//               576: { slidesPerView: 2 },
//               768: { slidesPerView: 3 },
//               1200: { slidesPerView: 4 },
//             }}
//             navigation={{
//               nextEl: ".alumni-next",
//               prevEl: ".alumni-prev",
//             }}
//             pagination={{
//               el: ".alumni-pagination",
//               clickable: true,
//               bulletClass: "alumni-bullet",
//               bulletActiveClass: "alumni-bullet-active",
//             }}
//             autoplay={{ delay: 4500, disableOnInteraction: false }}
//             loop={true}
//           >
//             {alumniData.map((a) => (
//               <SwiperSlide key={a.id}>
//                 <article className="alumni-card h-100 d-flex flex-column">
//                   <div className="card-img-wrap">
//                     <div
//                       className="card-img"
//                       style={{ backgroundImage: `url(${a.image})` }}
//                     />
//                     <div className="card-shade" />
//                     <span className="card-badge">
//                       <span className="badge-dot" />
//                       Alumni
//                     </span>
//                   </div>
//                   <div className="card-body d-flex flex-column flex-grow-1">
//                     <h3 className="card-name">{a.name}</h3>
//                     <div className="card-meta d-flex align-items-center gap-2 mb-2">
//                       <svg
//                         width="12"
//                         height="12"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                       >
//                         <rect x="3" y="5" width="18" height="16" rx="2" />
//                         <path d="M3 10h18M8 3v4M16 3v4" />
//                       </svg>
//                       <span>{a.date}</span>
//                     </div>
//                   </div>
//                   <span className="card-accent" />
//                 </article>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* custom navigation */}
//           <button className="alumni-nav alumni-prev" aria-label="Previous">
//             <svg
//               width="18"
//               height="18"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2.5"
//               strokeLinecap="round"
//             >
//               <path d="M15 18l-6-6 6-6" />
//             </svg>
//           </button>
//           <button className="alumni-nav alumni-next" aria-label="Next">
//             <svg
//               width="18"
//               height="18"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2.5"
//               strokeLinecap="round"
//             >
//               <path d="M9 18l6-6-6-6" />
//             </svg>
//           </button>
//         </div>

//         {/* custom pagination */}
//         <div className="alumni-pagination d-flex justify-content-center align-items-center gap-2 mt-4 pt-3" />
//       </div>

//       <style jsx>{`
//         .alumni-section {
//           background: linear-gradient(
//             180deg,
//             #061a3d 0%,
//             #0a2756 50%,
//             #102f63 100%
//           );
//           color: #fff;
//           padding: 40px 0;
//         }

//         /* decorative bg */
//         .bg-blob {
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(120px);
//           z-index: 0;
//           pointer-events: none;
//         }
//         .blob-1 {
//           width: 500px;
//           height: 500px;
//           top: -200px;
//           right: -150px;
//           background: radial-gradient(
//             circle,
//             rgba(243, 111, 33, 0.18),
//             transparent 70%
//           );
//         }
//         .blob-2 {
//           width: 450px;
//           height: 450px;
//           bottom: -200px;
//           left: -100px;
//           background: radial-gradient(
//             circle,
//             rgba(230, 57, 70, 0.12),
//             transparent 70%
//           );
//         }
//         .bg-grid {
//           position: absolute;
//           inset: 0;
//           background-image:
//             linear-gradient(rgba(168, 197, 236, 0.04) 1px, transparent 1px),
//             linear-gradient(
//               90deg,
//               rgba(168, 197, 236, 0.04) 1px,
//               transparent 1px
//             );
//           background-size: 60px 60px;
//           mask-image: radial-gradient(
//             ellipse at center,
//             black 20%,
//             transparent 75%
//           );
//           -webkit-mask-image: radial-gradient(
//             ellipse at center,
//             black 20%,
//             transparent 75%
//           );
//           z-index: 0;
//           pointer-events: none;
//         }

//         /* header */
//         .eyebrow {
//           background: rgba(255, 255, 255, 0.07);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.15);
//           padding: 6px 14px 6px 10px;
//           border-radius: 50px;
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 2.5px;
//           text-transform: uppercase;
//           color: #fff;
//         }
//         .eb-dot {
//           width: 7px;
//           height: 7px;
//           background: #f36f21;
//           border-radius: 50%;
//           box-shadow: 0 0 0 4px rgba(243, 111, 33, 0.2);
//           animation: ebPulse 2s infinite;
//         }
//         @keyframes ebPulse {
//           0%,
//           100% {
//             box-shadow: 0 0 0 4px rgba(243, 111, 33, 0.2);
//           }
//           50% {
//             box-shadow: 0 0 0 8px rgba(243, 111, 33, 0.05);
//           }
//         }

//         .section-title {
//           font-family: "Georgia";
//           font-size: 46px;
//           font-weight: 900;
//           color: #fff;
//           line-height: 1.1;
//           letter-spacing: -1.5px;
//           margin: 0;
//         }
//         .title-grad {
//           background: linear-gradient(135deg, #f36f21 30%, #ffa46b);
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//           font-style: italic;
//         }
//         .section-sub {
//           color: rgba(255, 255, 255, 0.7);
//           font-size: 15px;
//           line-height: 1.65;
//         }

//         .alumni-stats {
//           background: rgba(255, 255, 255, 0.05);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 16px;
//           padding: 12px 18px;
//         }
//         .stat-num {
//           font-family: "Merriweather", Georgia, serif;
//           font-size: 22px;
//           font-weight: 900;
//           background: linear-gradient(135deg, #fff, #a8c5ec);
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//           line-height: 1;
//         }
//         .stat-lbl {
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           color: #a8c5ec;
//           margin-top: 4px;
//         }
//         .stat-divider {
//           width: 1px;
//           height: 28px;
//           background: rgba(255, 255, 255, 0.15);
//         }

//         .alumni-carousel {
//           padding: 10px 0;
//         }

//         /* alumni card */
//         .alumni-card {
//           background: rgba(255, 255, 255, 0.04);
//           border: 1px solid rgba(255, 255, 255, 0.08);
//           border-radius: 20px;
//           overflow: hidden;
//           position: relative;
//           transition: all 0.4s ease;
//         }
//         .alumni-card:hover {
//           transform: translateY(-8px);
//           border-color: rgba(243, 111, 33, 0.4);
//           box-shadow:
//             0 25px 50px rgba(0, 0, 0, 0.3),
//             0 0 0 1px rgba(243, 111, 33, 0.2);
//         }

//         .card-img-wrap {
//           position: relative;
//           aspect-ratio: 1 / 1;
//           overflow: hidden;
//           flex-shrink: 0;
//         }
//         .card-img {
//           position: absolute;
//           inset: 0;
//           background-size: cover;
//           background-position: center top;
//           background-color: #1a4a8f;
//           transition: transform 0.7s ease;
//         }
//         .alumni-card:hover .card-img {
//           transform: scale(1.08);
//         }
//         .card-shade {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             180deg,
//             transparent 50%,
//             rgba(6, 26, 61, 0.55) 90%,
//             rgba(6, 26, 61, 0.85)
//           );
//         }

//         .card-badge {
//           position: absolute;
//           top: 14px;
//           left: 14px;
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           background: rgba(255, 255, 255, 0.95);
//           backdrop-filter: blur(8px);
//           color: #0a2756;
//           font-size: 10px;
//           font-weight: 800;
//           letter-spacing: 1.2px;
//           text-transform: uppercase;
//           padding: 5px 11px;
//           border-radius: 50px;
//           z-index: 2;
//         }
//         .badge-dot {
//           width: 5px;
//           height: 5px;
//           background: #f36f21;
//           border-radius: 50%;
//         }

//         .card-body {
//           padding: 18px 18px 18px;
//           background: rgba(6, 26, 61, 0.6);
//           backdrop-filter: blur(10px);
//           position: relative;
//           z-index: 1;
//         }
//         .card-name {
//           font-family: "Merriweather", Georgia, serif;
//           font-size: 17px;
//           font-weight: 900;
//           color: #fff;
//           line-height: 1.25;
//           margin: 0 0 6px;
//         }
//         .card-meta {
//           font-size: 11.5px;
//           color: rgba(255, 255, 255, 0.55);
//           font-weight: 500;
//         }
//         .card-meta :global(svg) {
//           color: #f36f21;
//         }
//         .card-details {
//           font-size: 12.5px;
//           line-height: 1.55;
//           color: rgba(255, 255, 255, 0.68);
//           margin: 0 0 6px;
//         }
//         .card-link {
//           color: #f36f21 !important;
//           font-size: 12px;
//           font-weight: 700;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           text-decoration: none;
//           transition: color 0.3s ease;
//           align-self: flex-start;
//         }
//         .card-link:hover {
//           color: #ffa46b !important;
//         }
//         .link-arrow {
//           transition: transform 0.3s ease;
//         }
//         .card-link:hover .link-arrow {
//           transform: translateX(4px);
//         }

//         .card-accent {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           height: 3px;
//           background: linear-gradient(90deg, #e63946, #f36f21);
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.4s ease;
//         }
//         .alumni-card:hover .card-accent {
//           transform: scaleX(1);
//         }

//         /* navigation arrows */
//         :global(.alumni-nav) {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           width: 48px;
//           height: 48px;
//           background: rgba(255, 255, 255, 0.08);
//           backdrop-filter: blur(14px);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           color: #fff;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           z-index: 10;
//           transition: all 0.3s ease;
//         }
//         :global(.alumni-nav:hover) {
//           background: linear-gradient(135deg, #e63946, #f36f21);
//           border-color: transparent;
//           transform: translateY(-50%) scale(1.05);
//           box-shadow: 0 10px 24px rgba(230, 57, 70, 0.4);
//         }
//         :global(.alumni-prev) {
//           left: -24px;
//         }
//         :global(.alumni-next) {
//           right: -24px;
//         }
//         :global(.swiper-button-disabled) {
//           opacity: 0.4;
//           cursor: not-allowed;
//         }

//         /* pagination */
//         :global(.alumni-bullet) {
//           width: 8px;
//           height: 8px;
//           background: rgba(255, 255, 255, 0.25);
//           border-radius: 50%;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           display: inline-block;
//         }
//         :global(.alumni-bullet-active) {
//           width: 28px;
//           border-radius: 10px;
//           background: linear-gradient(90deg, #e63946, #f36f21);
//         }

//         :global(.alumni-carousel .swiper) {
//           overflow: visible;
//         }
//         :global(.alumni-carousel .swiper-wrapper) {
//           padding: 5px 0;
//           align-items: stretch;
//         }
//         :global(.alumni-carousel .swiper-slide) {
//           height: auto;
//         }

//         /* responsive */
//         @media (max-width: 991px) {
//           .alumni-section {
//             padding: 70px 0;
//           }
//           .section-title {
//             font-size: 36px;
//           }
//           .section-sub {
//             margin-bottom: 16px;
//           }
//           .alumni-stats {
//             padding: 10px 14px;
//           }
//           .stat-num {
//             font-size: 18px;
//           }
//           .stat-lbl {
//             font-size: 9px;
//           }
//           :global(.alumni-prev) {
//             left: -16px;
//           }
//           :global(.alumni-next) {
//             right: -16px;
//           }
//         }
//         @media (max-width: 576px) {
//           .alumni-section {
//             padding: 50px 0;
//           }
//           .section-title {
//             font-size: 28px;
//             letter-spacing: -0.5px;
//           }
//           .eyebrow {
//             font-size: 10px;
//             letter-spacing: 2px;
//             padding: 5px 12px 5px 8px;
//           }
//           .alumni-stats {
//             display: flex !important;
//             justify-content: space-between;
//             width: 100%;
//             padding: 12px 14px;
//           }
//           .stat-divider {
//             height: 24px;
//           }
//           :global(.alumni-nav) {
//             width: 38px;
//             height: 38px;
//           }
//           :global(.alumni-prev) {
//             left: 4px;
//           }
//           :global(.alumni-next) {
//             right: 4px;
//           }
//           .card-name {
//             font-size: 15px;
//           }
//           .card-details {
//             font-size: 12px;
//           }
//           .card-link {
//             font-size: 11px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const alumniData = [
  {
    id: 1,
    name: "Asrar Ahmad",
    details:
      "Asrar Ahmad, a wonderful Extern, staying with us and learning diligently during the externship.",
    image: "/images/alumni/stories/asrar-ahmad.png",
    sortDate: "2015-01-01",
    displayDate: "2015",
  },
  {
    id: 2,
    name: "Dr. Ali Ahmad",
    details:
      "Dr. Ali Ahmad, a graduate of DOW Medical College, was currently pursuing an internship at our office-based surgery center. With a keen interest in Interventional Pain Medicine, Dr. Ahmad is diving into both radiology and surgical aspects, which align perfectly with his desired specialty. Beyond the clinical experience, he gained unique exposure to the entrepreneurial side of medical practice—an essential but often overlooked skillset that's rarely covered in traditional medical school training. Dr. Ahmad stands out for his diligence, dedication, and commitment to learning.",
    image: "/images/alumni/stories/dr-ali-ahmad.png",
    sortDate: "2016-08-27",
    displayDate: "August 27, 2016",
  },
  {
    id: 3,
    name: "Dr. Adeel Choudhry",
    details:
      "Dr. Adeel Choudhry, also a DOW Medical College graduate, joined us for his externship at our office-based surgery center, where he focused on Interventional Pain Medicine. His areas of interest include radiology and surgery, both central to his career ambitions. In addition to clinical skills, Dr. Choudhry is learning valuable entrepreneurial insights not commonly taught in medical school. His dedication and diligence make him an exceptional member of our team.",
    image: "/images/alumni/stories/dr-adeel-choudhry.png",
    sortDate: "2016-08-27",
    displayDate: "August 27, 2016",
  },
  {
    id: 4,
    name: "Muhammad Mubashir",
    details:
      "We had two great weeks with Mubashir, an SMC graduate who was preparing for a career in anesthesiology. He approached every learning opportunity with incredible enthusiasm! In our office, it's common for observers we meet for the first time to become family friends by the time they leave—and Mubashir was no exception. Wishing him all the best in his future journey!",
    image: "/images/alumni/stories/muhammad-mubashir.png",
    sortDate: "2016-11-03",
    displayDate: "November 3, 2016",
  },
  {
    id: 5,
    name: "Anas Farooqi",
    details:
      "I'm delighted to share that Anas Farooqi, one of my externs, matched this year in Psychiatry at Westchester Medical Center! His hard work and dedication during his externship paid off, and I couldn't be prouder of his success. It's wonderful to see him pursue his passion in a specialty that's so vital to healthcare. Congratulations again, Anas!",
    image: "/images/alumni/stories/anas-farooqi.png",
    sortDate: "2018-03-17",
    displayDate: "March 17, 2018",
  },
  {
    id: 6,
    name: "Maaz Muhammad",
    details:
      "Inspired by his brother, Muhammad Mubashir—who also completed an externship with me and went on to change his focus from Medicine to Anesthesiology—Maaz dedicated himself fully to his externship. Mubashir, now in an Anesthesia residency, is set to return for a pain elective as a Pain Fellow, InshAllah, showing the incredible impact of mentorship and family support.",
    image: "/images/alumni/stories/maaz-muhammad.png",
    sortDate: "2018-03-17",
    displayDate: "March 17, 2018",
  },
  {
    id: 7,
    name: "Hamna Hasan",
    details:
      "Hamna Hasan, DOW graduate, completed her externship at Premier Pain Centers TX. I must say she is one of the most responsible, hardworking and disciplined externs I ever had.",
    image: "/images/alumni/stories/hamna-hasan.png",
    sortDate: "2022-10-05",
    displayDate: "October 5, 2022",
  },
  {
    id: 8,
    name: "May & June Batches",
    details:
      "Five externs from May and June batches rotating at premier pain centers! Each from different background but common thing was; willingness to learn and hardwork. Our externship is as tough as residency (if not more) but these externs stay on their feet in Operating Room with me, sometimes 9-10 hrs with heavy lead on and drove all the way from Richardson to Hillsboro; at all eight locations without a single complaint.",
    image: "/images/alumni/stories/may-june-batches.png",
    sortDate: "2022-06-29",
    displayDate: "June 29, 2022",
  },
  {
    id: 9,
    name: "September Batch",
    details:
      "Another batch of externs rotating at premier pain centers Dallas Fort Worth completed yesterday! This is 6th batch of current year. Dr Maha Awaiz and Dr Zobia; both DOW grads did an amazing job and worked more like 'residents'. One month rotation at all locations and learnt all aspects of interventional pain management within scope of externship.",
    image: "/images/alumni/stories/september-batch.png",
    sortDate: "2021-09-11",
    displayDate: "September 11, 2021",
  },
  {
    id: 10,
    name: "March Batch 2023",
    details:
      "Great residency match result of 2023! Young physicians work really hard to achieve this goal and all the credit goes to them, their hard work, perseverance; their family contributions. Congratulations to Ali Khaliq who assisted first allograft disc transplant (viadisc) ever in Dallas with us during his rotation and matched in anesthesia.",
    image: "/images/alumni/stories/march-bach-2023.png",
    sortDate: "2023-03-13",
    displayDate: "March 13, 2023",
  },
  {
    id: 11,
    name: "March Batch 2024",
    details:
      "Congratulations to Premier Pain Centers' externs Mahnoor Ali, Zobia Aijaz, Maha Awaiz Hassan, and all others who successfully matched this year.",
    image: "/images/alumni/stories/march-batch-2024.png",
    sortDate: "2024-03-13",
    displayDate: "March 13, 2024",
  },
  {
    id: 12,
    name: "Muhammad Khaliq",
    details: "Alumni success story from our externship program.",
    image: "/images/alumni/stories/muhammad-khaliq.jpg",
    sortDate: "2024-12-13",
    displayDate: "December 13, 2024",
  },
  {
    id: 13,
    name: "Sameer Ul Haq",
    details: "Alumni success story from our externship program.",
    image: "/images/alumni/stories/sameer-ul-haq.png",
    sortDate: "2025-07-09",
    displayDate: "July 9, 2025",
  },
  {
    id: 14,
    name: "Ariba Faheem",
    details: "Alumni success story from our externship program.",
    image: "/images/alumni/stories/ariba-faheem.jpg",
    sortDate: "2024-10-01",
    displayDate: "October, 2024",
  },
  {
    id: 15,
    name: "Sarah Tariq",
    details: "IT and Healthcare Management",
    image: "/images/female-placeholder.png",
    sortDate: "2026-03-01",
    displayDate: "March, 2026",
  },
  {
    id: 16,
    name: "Masuma Firoze",
    details: "IT and Healthcare Management",
    image: "/images/alumni/stories/masuma-firoze.png",
    sortDate: "2026-07-17",
    displayDate: "July 17, 2026",
  },
];

// Latest first — ISO format string comparison is 100% reliable
const sortedAlumni = [...alumniData].sort((a, b) =>
  b.sortDate.localeCompare(a.sortDate),
);

// truncate helper
const truncate = (text, max = 110) =>
  text && text.length > max ? text.slice(0, max).trim() + "…" : text;

export default function AlumniSuccessStories() {
  return (
    <section className="alumni-section position-relative overflow-hidden">
      {/* decorative background */}
      <span className="bg-blob blob-1" />
      <span className="bg-blob blob-2" />
      <div className="bg-grid" />

      <div className="container  position-relative" style={{ zIndex: 2 }}>
        <h2 className="section-title">
          The Faces of <span className="title-grad">Our Alumni.</span>
        </h2>

        {/* carousel */}
        <div className="alumni-carousel position-relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            navigation={{
              nextEl: ".alumni-next",
              prevEl: ".alumni-prev",
            }}
            pagination={{
              el: ".alumni-pagination",
              clickable: true,
              bulletClass: "alumni-bullet",
              bulletActiveClass: "alumni-bullet-active",
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop={true}
          >
            {sortedAlumni.map((a) => (
              <SwiperSlide key={a.id}>
                <article className="alumni-card h-100 d-flex flex-column">
                  <div className="card-img-wrap">
                    <div
                      className="card-img"
                      style={{ backgroundImage: `url(${a.image})` }}
                    />
                    <div className="card-shade" />
                    <span className="card-badge">
                      <span className="badge-dot" />
                      Alumni
                    </span>
                  </div>
                  <div className="card-body d-flex flex-column flex-grow-1">
                    <h3 className="card-name">{a.name}</h3>
                    <div className="card-meta d-flex align-items-center gap-2 mb-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="3" y="5" width="18" height="16" rx="2" />
                        <path d="M3 10h18M8 3v4M16 3v4" />
                      </svg>
                      <span>{a.displayDate}</span>
                    </div>
                  </div>
                  <span className="card-accent" />
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* custom navigation */}
          <button className="alumni-nav alumni-prev" aria-label="Previous">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="alumni-nav alumni-next" aria-label="Next">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* custom pagination */}
        <div className="alumni-pagination d-flex justify-content-center align-items-center gap-2 mt-4 pt-3" />
      </div>

      <style jsx>{`
        .alumni-section {
          background: linear-gradient(
            180deg,
            #061a3d 0%,
            #0a2756 50%,
            #102f63 100%
          );
          color: #fff;
          padding: 40px 0;
        }

        /* decorative bg */
        .bg-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          z-index: 0;
          pointer-events: none;
        }
        .blob-1 {
          width: 500px;
          height: 500px;
          top: -200px;
          right: -150px;
          background: radial-gradient(
            circle,
            rgba(243, 111, 33, 0.18),
            transparent 70%
          );
        }
        .blob-2 {
          width: 450px;
          height: 450px;
          bottom: -200px;
          left: -100px;
          background: radial-gradient(
            circle,
            rgba(230, 57, 70, 0.12),
            transparent 70%
          );
        }
        .bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(168, 197, 236, 0.04) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(168, 197, 236, 0.04) 1px,
              transparent 1px
            );
          background-size: 60px 60px;
          mask-image: radial-gradient(
            ellipse at center,
            black 20%,
            transparent 75%
          );
          -webkit-mask-image: radial-gradient(
            ellipse at center,
            black 20%,
            transparent 75%
          );
          z-index: 0;
          pointer-events: none;
        }

        /* header */
        .eyebrow {
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 6px 14px 6px 10px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #fff;
        }
        .eb-dot {
          width: 7px;
          height: 7px;
          background: #f36f21;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(243, 111, 33, 0.2);
          animation: ebPulse 2s infinite;
        }
        @keyframes ebPulse {
          0%,
          100% {
            box-shadow: 0 0 0 4px rgba(243, 111, 33, 0.2);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(243, 111, 33, 0.05);
          }
        }

        .section-title {
          font-family: "Georgia";
          font-size: 46px;
          font-weight: 900;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin: 0;
        }
        .title-grad {
          background: linear-gradient(135deg, #f36f21 30%, #ffa46b);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-style: italic;
        }
        .section-sub {
          color: rgba(255, 255, 255, 0.7);
          font-size: 15px;
          line-height: 1.65;
        }

        .alumni-stats {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 12px 18px;
        }
        .stat-num {
          font-family: "Merriweather", Georgia, serif;
          font-size: 22px;
          font-weight: 900;
          background: linear-gradient(135deg, #fff, #a8c5ec);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
        }
        .stat-lbl {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #a8c5ec;
          margin-top: 4px;
        }
        .stat-divider {
          width: 1px;
          height: 28px;
          background: rgba(255, 255, 255, 0.15);
        }

        .alumni-carousel {
          padding: 10px 0;
        }

        /* alumni card */
        .alumni-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          transition: all 0.4s ease;
        }
        .alumni-card:hover {
          transform: translateY(-8px);
          border-color: rgba(243, 111, 33, 0.4);
          box-shadow:
            0 25px 50px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(243, 111, 33, 0.2);
        }

        .card-img-wrap {
          position: relative;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          flex-shrink: 0;
        }
        .card-img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center top;
          background-color: #1a4a8f;
          transition: transform 0.7s ease;
        }
        .alumni-card:hover .card-img {
          transform: scale(1.08);
        }
        .card-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 50%,
            rgba(6, 26, 61, 0.55) 90%,
            rgba(6, 26, 61, 0.85)
          );
        }

        .card-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          color: #0a2756;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          padding: 5px 11px;
          border-radius: 50px;
          z-index: 2;
        }
        .badge-dot {
          width: 5px;
          height: 5px;
          background: #f36f21;
          border-radius: 50%;
        }

        .card-body {
          padding: 18px 18px 18px;
          background: rgba(6, 26, 61, 0.6);
          backdrop-filter: blur(10px);
          position: relative;
          z-index: 1;
        }
        .card-name {
          font-family: "Merriweather", Georgia, serif;
          font-size: 17px;
          font-weight: 900;
          color: #fff;
          line-height: 1.25;
          margin: 0 0 6px;
        }
        .card-meta {
          font-size: 11.5px;
          color: rgba(255, 255, 255, 0.55);
          font-weight: 500;
        }
        .card-meta :global(svg) {
          color: #f36f21;
        }
        .card-details {
          font-size: 12.5px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.68);
          margin: 0 0 6px;
        }
        .card-link {
          color: #f36f21 !important;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.3s ease;
          align-self: flex-start;
        }
        .card-link:hover {
          color: #ffa46b !important;
        }
        .link-arrow {
          transition: transform 0.3s ease;
        }
        .card-link:hover .link-arrow {
          transform: translateX(4px);
        }

        .card-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #e63946, #f36f21);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .alumni-card:hover .card-accent {
          transform: scaleX(1);
        }

        /* navigation arrows */
        :global(.alumni-nav) {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
        }
        :global(.alumni-nav:hover) {
          background: linear-gradient(135deg, #e63946, #f36f21);
          border-color: transparent;
          transform: translateY(-50%) scale(1.05);
          box-shadow: 0 10px 24px rgba(230, 57, 70, 0.4);
        }
        :global(.alumni-prev) {
          left: -24px;
        }
        :global(.alumni-next) {
          right: -24px;
        }
        :global(.swiper-button-disabled) {
          opacity: 0.4;
          cursor: not-allowed;
        }

        /* pagination */
        :global(.alumni-bullet) {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.25);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block;
        }
        :global(.alumni-bullet-active) {
          width: 28px;
          border-radius: 10px;
          background: linear-gradient(90deg, #e63946, #f36f21);
        }

        :global(.alumni-carousel .swiper) {
          overflow: visible;
        }
        :global(.alumni-carousel .swiper-wrapper) {
          padding: 5px 0;
          align-items: stretch;
        }
        :global(.alumni-carousel .swiper-slide) {
          height: auto;
        }

        /* responsive */
        @media (max-width: 991px) {
          .alumni-section {
            padding: 70px 0;
          }
          .section-title {
            font-size: 36px;
          }
          .section-sub {
            margin-bottom: 16px;
          }
          .alumni-stats {
            padding: 10px 14px;
          }
          .stat-num {
            font-size: 18px;
          }
          .stat-lbl {
            font-size: 9px;
          }
          :global(.alumni-prev) {
            left: -16px;
          }
          :global(.alumni-next) {
            right: -16px;
          }
        }
        @media (max-width: 576px) {
          .alumni-section {
            padding: 50px 0;
          }
          .section-title {
            font-size: 28px;
            letter-spacing: -0.5px;
          }
          .eyebrow {
            font-size: 10px;
            letter-spacing: 2px;
            padding: 5px 12px 5px 8px;
          }
          .alumni-stats {
            display: flex !important;
            justify-content: space-between;
            width: 100%;
            padding: 12px 14px;
          }
          .stat-divider {
            height: 24px;
          }
          :global(.alumni-nav) {
            width: 38px;
            height: 38px;
          }
          :global(.alumni-prev) {
            left: 4px;
          }
          :global(.alumni-next) {
            right: 4px;
          }
        }
      `}</style>
    </section>
  );
}
