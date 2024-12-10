import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const alumniSuccessStoriesData = [
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
      " Dr. Ali Ahmad, a graduate of DOW Medical College, was currently pursuing an internship at our office-based surgery center. With a keen interest in Interventional Pain Medicine, Dr. Ahmad is diving into both radiology and surgical aspects, which align perfectly with his desired specialty. Beyond the clinical experience, he gained unique exposure to the entrepreneurial side of medical practice—an essential but often overlooked skillset that’s rarely covered in traditional medical school training. Dr. Ahmad stands out for his diligence, dedication, and commitment to learning.",
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
      "We had two great weeks with Mubashir, an SMC graduate who was preparing for a career in anesthesiology. He approached every learning opportunity with incredible enthusiasm! In our office, it’s common for observers we meet for the first time to become family friends by the time they leave—and Mubashir was no exception. Wishing him all the best in his future journey!",
    image: "/images/alumni/stories/muhammad-mubashir.png",
    date: "November 3, 2016",
  },
  {
    id: 5,
    name: "Anas Farooqi",
    details:
      "I’m delighted to share that Anas Farooqi, one of my externs, matched this year in Psychiatry at Westchester Medical Center! His hard work and dedication during his externship paid off, and I couldn’t be prouder of his success. It’s wonderful to see him pursue his passion in a specialty that’s so vital to healthcare. Congratulations again, Anas!",
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
    details: (
      <div>
        <p>
          Five externs from May and June batches rotating at premier pain
          centers!
        </p>
        <ul>
          <li>Faiqa Amin QMC</li>
          <li>Sidra Mubashar Faisalabad Medical College</li>
          <li>Aliza Rafaqat AIMC</li>
          <li>Kanza Mirza, Nawabshah Medical College</li>
          <li>Harshini Muppidi, Naryana, India</li>
        </ul>
        <p>
          Each from different background but common thing was; willingness to
          learn and hardwork. Our externship is as tough as residency (if not
          more) but these externs stay on their feet in Operating Room with me,
          sometimes 9-10 hrs with heavy lead on and drove all the way from
          Richardson to Hillsboro; at all eight locations without a single
          complaint.
        </p>
        <p>
          They learnt all aspects of interventional pain management within scope
          of externship. What are ACGME core competencies. We support their
          residency candidacy by all means including but not limited to writing
          excellent LORs highlighting ACGME core competencies!
        </p>
      </div>
    ),
    image: "/images/alumni/stories/may-june-batches.png",
    date: "June 29, 2022",
  },
  {
    id: 9,
    name: "September Batch",
    details: (
      <div>
        <p>
          Another batch of externs rotating at premier pain centers Dallas Fort
          Worth completed yesterday! This is 6th batch of current year.
        </p>
        <p>
          Dr Maha Awaiz and Dr Zobia; both DOW grads did an amazing job and
          worked more like “residents”. One month rotation at all locations and
          learnt all aspects of interventional pain management within scope of
          externship.
        </p>
      </div>
    ),

    image: "/images/alumni/stories/september-batch.png",
    date: "September 11, 2021",
  },
  {
    id: 9,
    name: "September Batch",
    details: (
      <div>
        <p>Great residency match result of 2023!</p>
        <p>
          Young physicians work really hard to achieve this goal and all the
          credit goes to them, their hard work, perseverance; their family
          contributions. it’s great to know that physicians rotating with us at
          Premier Pain Centers matched in their desired programs.
        </p>
        <p>
          Congratulations to Ali Khaliq who assisted first allograft disc
          transplant (viadisc) ever in Dallas with us during his rotation and
          matched in anesthesia. He wants to do pain management as well.
        </p>
        <p>
          Congratulations to Faiqa Amin, Omer Usman, Syed Hasan Ilyas Muhammad
          Jibran Aliza Rafaqat, Areesha Qadir and many others for such a great
          success.
        </p>
      </div>
    ),
    image: "/images/alumni/stories/march-bach-2023.png",
    date: "March 13, 2023",
  },
  {
    id: 10,
    name: "September Batch",
    details: (
      <div>
        <p>
          Congratulations to Premier Pain Centers' externs Mahnoor Ali, Zobia
          Aijaz, Maha Awaiz Hassan, and all others who successfully matched this
          year.
        </p>
      </div>
    ),
    image: "/images/alumni/stories/march-batch-2024.png",
    date: "March 13, 2024",
  },
];

const AlumniSlider = () => {
  return (
    <>
      <style jsx global>{`
        .mySwiper {
          padding-bottom: 50px !important; /* Ensures space below slider for dots */
        }
        .mySwiper .swiper-pagination {
          margin-top: 20px !important; /* Ensures space above the dots */
        }
      `}</style>
      <div className="container-fluid">
        <div className="section-title">
          <h2>Alumni Success Stories</h2>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {alumniSuccessStoriesData.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.image} alt={item.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default AlumniSlider;
