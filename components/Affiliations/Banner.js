// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="hero-section position-relative overflow-hidden">
//       <div className="container position-relative" style={{ zIndex: 2 }}>
//         <div className="row align-items-center g-5">
//           {/* LEFT */}
//           <div className="col-lg-7">
//             <h1 className="hero-title">
//               A Landmark Affiliation in Clinical Education
//             </h1>

//             <div className="partners-row d-flex align-items-center flex-wrap gap-2 gap-md-3">
//               <span className="brand-usshape">
//                 <span className="us">US</span>{" "}
//                 <span className="shape">SHAPE</span>
//               </span>
//               <span className="divider-line d-none d-md-inline-block" />
//               <span className="joins-text">joins forces with</span>
//               <span className="divider-line d-none d-md-inline-block" />
//               <span className="brand-shsu w-100 w-md-auto">
//                 Sam Houston <br className="d-none d-md-block" /> State
//                 University
//               </span>
//             </div>

//             <p className="hero-desc">
//               Effective immediately,{" "}
//               <strong className="text-navy">Premier Pain Centers</strong> serves
//               as the official clinical rotation site for SHSU&apos;s College of
//               Osteopathic Medicine — pairing medical students with credentialed
//               preceptors in a live patient-care environment.
//             </p>

//             <div className="d-flex flex-wrap gap-3 mt-4">
//               <Link
//                 href="/externship-application-form"
//                 className="btn btn-cta-outline px-4 py-2 rounded-pill fw-semibold"
//               >
//                 Apply for Externship
//               </Link>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="col-lg-5">
//             <div className="hero-visual position-relative">
//               <div className="hero-frame">
//                 <div className="hero-image" />
//                 <div className="hero-overlay" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* scoped CSS */}
//       <style jsx>{`
//         .hero-section {
//           background: linear-gradient(
//             135deg,
//             #f4f7fc 0%,
//             #ffffff 60%,
//             #eaf1fb 70%
//           );
//         }

//         .hero-title {
//           font-size: 40px;
//           font-weight: 900;
//           color: #0a2756;
//           line-height: 1.15;
//           margin-bottom: 0;
//         }

//         .partners-row {
//           margin: 36px 0 28px;
//         }
//         .brand-usshape {
//           font-size: 34px;
//           font-weight: 800;
//           letter-spacing: 1px;
//           line-height: 1;
//         }
//         .brand-usshape .us {
//           color: #0a2756;
//         }
//         .brand-usshape .shape {
//           color: #e63946;
//         }
//         .divider-line {
//           width: 40px;
//           height: 1px;
//           background: #cbd2dd;
//         }
//         .joins-text {
//           color: #0a2756;
//           font-size: 13px;
//           font-weight: 500;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//         }
//         .brand-shsu {
//           font-size: 28px;
//           font-weight: 900;
//           color: #f36f21;
//           line-height: 1.15;
//         }

//         .hero-desc {
//           font-size: 17px;
//           color: #1a1a1a;
//           line-height: 1.7;
//           max-width: 560px;
//           margin-top: 8px;
//         }
//         .text-navy {
//           color: #0a2756;
//         }

//         :global(.btn-cta-outline) {
//           background: transparent;
//           color: #0a2756;
//           border: 2px solid #0a2756;
//           transition: all 0.25s ease;
//         }
//         :global(.btn-cta-outline:hover) {
//           background: #0a2756;
//           color: #fff;
//         }

//         /* RIGHT visual */
//         .hero-visual {
//           height: 540px;
//         }
//         .hero-frame {
//           position: absolute;
//           inset: 0;
//           border-radius: 20px;
//           overflow: hidden;
//           box-shadow: 0 20px 50px rgba(10, 39, 86, 0.18);
//         }
//         .hero-image {
//           position: absolute;
//           inset: 0;
//           background-image: url("/images/sam-uni.webp");
//           background-size: cover;
//           background-position: center;
//         }

//         /* ========== RESPONSIVE ========== */

//         /* tablet */
//         @media (max-width: 991px) {
//           .hero-title {
//             font-size: 36px;
//           }
//           .hero-visual {
//             height: auto;
//             aspect-ratio: 4 / 3;
//             margin-top: 30px;
//           }
//           .brand-usshape {
//             font-size: 30px;
//           }
//           .brand-shsu {
//             font-size: 24px;
//           }
//         }

//         /* mobile */
//         @media (max-width: 576px) {
//           .hero-section {
//             padding: 40px 0 50px;
//           }

//           .hero-title {
//             font-size: 28px;
//             line-height: 1.2;
//             letter-spacing: -0.5px;
//           }

//           .partners-row {
//             margin: 24px 0 20px;
//             gap: 6px 12px !important;
//           }
//           .brand-usshape {
//             font-size: 24px;
//             letter-spacing: 0.5px;
//           }
//           .joins-text {
//             font-size: 11px;
//             letter-spacing: 1.5px;
//             color: #6c757d;
//             display: block;
//             width: 100%;
//             order: 1;
//           }
//           .brand-shsu {
//             font-size: 22px;
//             line-height: 1.2;
//             order: 2;
//             width: 100%;
//           }
//           .brand-usshape {
//             order: 0;
//           }

//           .hero-desc {
//             font-size: 15px;
//             line-height: 1.65;
//             margin-top: 4px;
//           }

//           .hero-visual {
//             height: auto;
//             aspect-ratio: 4 / 3;
//             margin-top: 24px;
//             border-radius: 16px;
//             overflow: hidden;
//           }
//           .hero-frame {
//             border-radius: 16px;
//           }
//           .hero-image {
//             background-size: cover;
//             background-position: center center;
//           }

//           :global(.btn-cta-outline) {
//             font-size: 14px;
//             padding: 10px 20px !important;
//           }
//         }

//         /* tiny screens */
//         @media (max-width: 360px) {
//           .hero-title {
//             font-size: 24px;
//           }
//           .brand-usshape {
//             font-size: 22px;
//           }
//           .brand-shsu {
//             font-size: 20px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section position-relative overflow-hidden">
      {/* decorative background */}
      <span className="blob blob-1" />
      <span className="blob blob-2" />
      <span className="blob blob-3" />
      <div className="grid-pattern" />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* announcement chip */}
        <div className="announce-chip d-inline-flex align-items-center gap-2 mb-4">
          <span className="pulse-dot" />
          <span className="chip-text">Official Announcement · 2026</span>
        </div>

        <div className="row align-items-center g-5">
          {/* LEFT */}
          <div className="col-lg-7">
            <h1 className="hero-title">
              A Landmark Affiliation in{" "}
              <span className="title-highlight">
                <span className="title-highlight-text">Clinical Education</span>
              </span>
            </h1>

            <div className="partners-row d-flex align-items-center flex-wrap gap-2 gap-md-3">
              <span className="brand-usshape">
                <span className="us">US</span>{" "}
                <span className="shape">SHAPE</span>
              </span>
              <span className="divider-line d-none d-md-inline-block" />
              <span className="joins-text">joins forces with</span>
              <span className="divider-line d-none d-md-inline-block" />
              <span className="brand-shsu w-100 w-md-auto">
                Sam Houston <br className="d-none d-md-block" /> State
                University
              </span>
            </div>

            <p className="hero-desc">
              Effective immediately,{" "}
              <strong className="text-navy">Premier Pain Centers</strong> serves
              as the official clinical rotation site for SHSU&apos;s College of
              Osteopathic Medicine — pairing medical students with credentialed
              preceptors in a live patient-care environment.
            </p>

            <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
              <Link
                href="/externship-application-form"
                className="btn btn-cta-primary px-4 py-3 rounded-pill fw-semibold d-inline-flex align-items-center gap-2"
              >
                Apply for Externship
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="cta-arrow"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#partnership"
                className="btn btn-cta-text fw-semibold d-inline-flex align-items-center gap-2"
              >
                <span className="play-icon">▸</span>
                Read the Story
              </Link>
            </div>

            {/* trust mini-row */}
            <div className="trust-row d-flex align-items-center flex-wrap gap-3 mt-4 pt-3">
              <div className="trust-item d-flex align-items-center gap-2">
                <span className="check-dot">✓</span>
                <span>SHSU-Credentialed</span>
              </div>
              <span className="trust-divider d-none d-sm-inline-block" />
              <div className="trust-item d-flex align-items-center gap-2">
                <span className="check-dot">✓</span>
                <span>DO Track</span>
              </div>
              <span className="trust-divider d-none d-sm-inline-block" />
              <div className="trust-item d-flex align-items-center gap-2">
                <span className="check-dot">✓</span>
                <span>Richardson, TX</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-5">
            <div className="hero-visual position-relative">
              {/* decorative dots behind image */}
              <div className="dot-grid d-none d-lg-block" />

              <div className="hero-frame">
                <div className="hero-image" />
                <div className="hero-shade" />
                <span className="location-tag">📍 Huntsville, TX</span>
              </div>

              {/* floating badge */}
              <div className="float-badge d-none d-md-flex">
                <div className="badge-icon">🎓</div>
                <div>
                  <div className="badge-title">SHSU College of</div>
                  <div className="badge-sub">Osteopathic Medicine</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scoped CSS */}
      <style jsx>{`
        .hero-section {
          background: linear-gradient(
            135deg,
            #f4f7fc 0%,
            #ffffff 55%,
            #eaf1fb 100%
          );
          padding: 90px 0 100px;
        }

        /* ===== Background decoration ===== */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          z-index: 0;
          pointer-events: none;
        }
        .blob-1 {
          width: 500px;
          height: 500px;
          top: -180px;
          right: -150px;
          background: radial-gradient(
            circle,
            rgba(10, 39, 86, 0.12),
            transparent 70%
          );
        }
        .blob-2 {
          width: 450px;
          height: 450px;
          bottom: -180px;
          left: -120px;
          background: radial-gradient(
            circle,
            rgba(230, 57, 70, 0.1),
            transparent 70%
          );
        }
        .blob-3 {
          width: 300px;
          height: 300px;
          top: 45%;
          left: 45%;
          background: radial-gradient(
            circle,
            rgba(243, 111, 33, 0.1),
            transparent 70%
          );
        }
        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(10, 39, 86, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10, 39, 86, 0.04) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(
            ellipse at center,
            black 30%,
            transparent 70%
          );
          -webkit-mask-image: radial-gradient(
            ellipse at center,
            black 30%,
            transparent 70%
          );
          z-index: 0;
          pointer-events: none;
        }

        /* ===== Announce chip ===== */
        .announce-chip {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(10, 39, 86, 0.15);
          padding: 8px 18px;
          border-radius: 50px;
          box-shadow: 0 4px 14px rgba(10, 39, 86, 0.06);
        }
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #e63946;
          border-radius: 50%;
          display: inline-block;
          animation: pulseDot 1.8s infinite;
        }
        @keyframes pulseDot {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(230, 57, 70, 0.5);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.3);
            box-shadow: 0 0 0 8px rgba(230, 57, 70, 0);
          }
        }
        .chip-text {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #0a2756;
        }

        /* ===== Title ===== */
        .hero-title {
          font-size: 48px;
          font-weight: 900;
          color: #0a2756;
          line-height: 1.1;
          letter-spacing: -1px;
          margin-bottom: 0;
        }
        .title-highlight {
          position: relative;
          display: inline-block;
        }
        .title-highlight-text {
          position: relative;
          z-index: 2;
        }
        .title-highlight::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 4px;
          width: 100%;
          height: 14px;
          background: linear-gradient(
            90deg,
            rgba(230, 57, 70, 0.25),
            rgba(243, 111, 33, 0.25)
          );
          border-radius: 4px;
          z-index: 1;
        }

        /* ===== Partners row ===== */
        .partners-row {
          margin: 32px 0 24px;
        }
        .brand-usshape {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: 1px;
          line-height: 1;
        }
        .brand-usshape .us {
          color: #0a2756;
        }
        .brand-usshape .shape {
          color: #e63946;
        }
        .divider-line {
          width: 36px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #cbd2dd, transparent);
        }
        .joins-text {
          color: #6c757d;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }
        .brand-shsu {
          font-size: 26px;
          font-weight: 900;
          color: #f36f21;
          line-height: 1.15;
        }

        /* ===== Description ===== */
        .hero-desc {
          font-size: 17px;
          color: #1a1a1a;
          line-height: 1.7;
          max-width: 560px;
          margin-top: 4px;
        }
        .text-navy {
          color: #0a2756;
        }

        /* ===== Buttons ===== */
        :global(.btn-cta-primary) {
          background: linear-gradient(135deg, #e63946, #c92e3a);
          color: #fff !important;
          border: none;
          box-shadow: 0 10px 24px rgba(230, 57, 70, 0.35);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        :global(.btn-cta-primary:hover) {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(230, 57, 70, 0.45);
        }
        :global(.btn-cta-primary:hover .cta-arrow) {
          transform: translateX(4px);
        }
        :global(.cta-arrow) {
          transition: transform 0.25s ease;
        }
        :global(.btn-cta-text) {
          color: #0a2756 !important;
          background: transparent;
          border: none;
          padding: 12px 4px;
        }
        :global(.btn-cta-text:hover) {
          color: #e63946 !important;
        }
        .play-icon {
          display: inline-flex;
          width: 26px;
          height: 26px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(10, 39, 86, 0.08);
          font-size: 12px;
        }

        /* ===== Trust row ===== */
        .trust-row {
          border-top: 1px dashed rgba(10, 39, 86, 0.15);
          font-size: 13px;
          color: #4a5568;
        }
        .trust-item {
          font-weight: 600;
        }
        .check-dot {
          display: inline-flex;
          width: 20px;
          height: 20px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(40, 167, 69, 0.12);
          color: #28a745;
          font-size: 11px;
          font-weight: 900;
        }
        .trust-divider {
          width: 1px;
          height: 14px;
          background: rgba(10, 39, 86, 0.2);
        }

        /* ===== Visual ===== */
        .hero-visual {
          height: 540px;
        }
        .dot-grid {
          position: absolute;
          width: 120px;
          height: 120px;
          right: -25px;
          bottom: -25px;
          background-image: radial-gradient(
            circle,
            rgba(243, 111, 33, 0.5) 1.5px,
            transparent 1.5px
          );
          background-size: 14px 14px;
          z-index: 1;
        }
        .hero-frame {
          position: absolute;
          inset: 0;
          border-radius: 24px 80px 24px 24px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(10, 39, 86, 0.22);
          z-index: 2;
        }
        .hero-image {
          position: absolute;
          inset: 0;
          background-image: url("/images/sam-uni.webp");
          background-size: cover;
          background-position: center;
          transition: transform 0.6s ease;
        }
        .hero-frame:hover .hero-image {
          transform: scale(1.05);
        }
        .hero-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 50%,
            rgba(10, 39, 86, 0.4)
          );
        }
        .location-tag {
          position: absolute;
          top: 18px;
          right: 18px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          color: #0a2756;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 7px 14px;
          border-radius: 50px;
          z-index: 3;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
        }

        .float-badge {
          position: absolute;
          bottom: -28px;
          left: -28px;
          background: #fff;
          border-radius: 16px;
          padding: 14px 18px;
          box-shadow: 0 18px 40px rgba(10, 39, 86, 0.18);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 4;
          border: 1px solid rgba(10, 39, 86, 0.06);
        }
        .badge-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: linear-gradient(135deg, #f36f21, #ffa46b);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          box-shadow: 0 6px 14px rgba(243, 111, 33, 0.3);
        }
        .badge-title {
          font-size: 11px;
          font-weight: 600;
          color: #6c757d;
          letter-spacing: 0.5px;
        }
        .badge-sub {
          font-size: 14px;
          font-weight: 800;
          color: #0a2756;
          line-height: 1.2;
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 991px) {
          .hero-section {
            padding: 70px 0 80px;
          }
          .hero-title {
            font-size: 38px;
          }
          .hero-visual {
            height: auto;
            aspect-ratio: 4 / 3;
            margin-top: 40px;
          }
          .brand-usshape {
            font-size: 28px;
          }
          .brand-shsu {
            font-size: 22px;
          }
          .hero-frame {
            border-radius: 20px 60px 20px 20px;
          }
        }

        @media (max-width: 576px) {
          .hero-section {
            padding: 40px 0 50px;
          }
          .announce-chip {
            padding: 6px 14px;
          }
          .chip-text {
            font-size: 10px;
            letter-spacing: 1.8px;
          }

          .hero-title {
            font-size: 26px;
            line-height: 1.25;
            letter-spacing: -0.3px;
          }
          .title-highlight::after {
            height: 10px;
            bottom: 2px;
          }

          .partners-row {
            margin: 20px 0 18px;
            gap: 4px 10px !important;
          }
          .brand-usshape {
            font-size: 22px;
            letter-spacing: 0.5px;
          }
          .joins-text {
            font-size: 10px;
            letter-spacing: 1.5px;
            display: block;
            width: 100%;
            order: 1;
          }
          .brand-shsu {
            font-size: 20px;
            line-height: 1.2;
            order: 2;
            width: 100%;
          }
          .brand-usshape {
            order: 0;
          }

          .hero-desc {
            font-size: 14.5px;
            line-height: 1.65;
            margin-top: 2px;
          }

          .trust-row {
            font-size: 12px;
            margin-top: 16px !important;
            padding-top: 14px !important;
          }
          .check-dot {
            width: 16px;
            height: 16px;
            font-size: 9px;
          }

          .hero-visual {
            margin-top: 24px;
          }
          .hero-frame {
            border-radius: 16px;
          }
          .location-tag {
            font-size: 9px;
            padding: 5px 10px;
          }

          :global(.btn-cta-primary) {
            font-size: 14px;
            padding: 10px 20px !important;
          }
          :global(.btn-cta-text) {
            font-size: 14px;
          }
        }

        @media (max-width: 360px) {
          .hero-title {
            font-size: 23px;
          }
          .brand-usshape {
            font-size: 20px;
          }
          .brand-shsu {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
}
