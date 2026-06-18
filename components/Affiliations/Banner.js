// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="hero-section position-relative overflow-hidden">
//       {/* animated background */}
//       <div className="bg-orbs">
//         <span className="orb orb-1" />
//         <span className="orb orb-2" />
//         <span className="orb orb-3" />
//       </div>
//       <div className="bg-grid" />

//       {/* watermark year */}
//       <div className="watermark d-none d-md-block">2026</div>

//       <div className="container position-relative" style={{ zIndex: 3 }}>
//         <div className="row align-items-center g-5 g-lg-4">
//           {/* ===== LEFT — content ===== */}
//           <div className="col-lg-7">
//             {/* headline */}
//             <h1 className="hero-title">
//               A Landmark
//               <br />
//               <span className="title-accent">
//                 Affiliation
//                 <svg
//                   className="title-underline"
//                   viewBox="0 0 300 12"
//                   preserveAspectRatio="none"
//                 >
//                   <path
//                     d="M2 8 Q 75 2, 150 6 T 298 4"
//                     fill="none"
//                     stroke="url(#underGrad)"
//                     strokeWidth="4"
//                     strokeLinecap="round"
//                   />
//                   <defs>
//                     <linearGradient id="underGrad" x1="0" x2="1">
//                       <stop offset="0%" stopColor="#e63946" />
//                       <stop offset="100%" stopColor="#f36f21" />
//                     </linearGradient>
//                   </defs>
//                 </svg>
//               </span>
//               <br />
//               <span className="title-soft">in Clinical Education</span>
//             </h1>

//             {/* partners */}
//             <div className="partners-row d-flex align-items-center flex-wrap gap-3 my-4">
//               <span className="brand-usshape">
//                 <span className="us">US </span>{" "}
//                 <span className="shape">SHAPE INC</span>
//               </span>
//               <span className="cross-mark">×</span>
//               <span className="brand-shsu">
//                 Sam Houston <br className="d-none d-md-inline" /> State
//                 University
//               </span>
//             </div>

//             <p className="hero-desc">
//               Effective immediately,{" "}
//               <strong>
//                 <a
//                   style={{ color: "#e63946" }}
//                   href="https://www.mypremierpain.com/"
//                 >
//                   Premier Pain Centers
//                 </a>
//               </strong>{" "}
//               serves as the official clinical rotation site for SHSU&apos;s
//               College of Osteopathic Medicine — pairing students with
//               credentialed preceptors in a live patient-care environment.
//             </p>

//             {/* CTAs */}
//             <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
//               <Link
//                 href="/externship-application-form"
//                 className="btn-glow d-inline-flex align-items-center gap-2"
//               >
//                 Apply for Externship
//                 <span className="arrow-wrap">
//                   <svg
//                     width="14"
//                     height="14"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                     strokeLinecap="round"
//                   >
//                     <path d="M5 12h14M13 5l7 7-7 7" />
//                   </svg>
//                 </span>
//               </Link>

//               <div className="announce-pill d-inline-flex align-items-center gap-2 mb-4">
//                 <span className="pill-icon">
//                   <span className="pill-dot" />
//                 </span>
//                 <span className="pill-text">Our Alumni</span>
//                 <span className="pill-arrow">→</span>
//               </div>
//             </div>
//           </div>

//           {/* ===== RIGHT — image stack ===== */}
//           <div className="col-lg-5">
//             <div className="visual-stack position-relative">
//               {/* glow ring behind */}
//               <div className="glow-ring d-none d-md-block" />

//               {/* main image card */}
//               <div className="card-main">
//                 <div className="card-img" />
//                 <div className="card-shade" />

//                 <div className="card-caption">
//                   <div className="cap-meta">CAMPUS · SHSU</div>
//                   <div className="cap-title">
//                     College of <br /> Osteopathic Medicine
//                   </div>
//                 </div>
//               </div>

//               {/* floating stat */}
//               <div className="floating-stat d-none d-lg-flex">
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                   strokeLinecap="round"
//                 >
//                   <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
//                   <polyline points="22 4 12 14.01 9 11.01" />
//                 </svg>
//                 <span>Officially Approved</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .hero-section {
//           background: radial-gradient(
//             ellipse at top left,
//             #102f63 0%,
//             #0a2756 35%,
//             #061a3d 100%
//           );
//           color: #fff;
//           padding: 80px 0 0;
//           min-height: 100vh;
//         }

//         /* ===== Background ===== */
//         .bg-orbs {
//           position: absolute;
//           inset: 0;
//           z-index: 1;
//           pointer-events: none;
//         }
//         .orb {
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(110px);
//           opacity: 0.6;
//         }
//         .orb-1 {
//           width: 500px;
//           height: 500px;
//           top: -100px;
//           right: -100px;
//           background: radial-gradient(circle, #e63946, transparent 70%);
//           animation: orbFloat 12s ease-in-out infinite;
//         }
//         .orb-2 {
//           width: 400px;
//           height: 400px;
//           bottom: -50px;
//           left: -100px;
//           background: radial-gradient(circle, #f36f21, transparent 70%);
//           animation: orbFloat 14s ease-in-out infinite reverse;
//         }
//         .orb-3 {
//           width: 350px;
//           height: 350px;
//           top: 40%;
//           left: 40%;
//           background: radial-gradient(circle, #2a5cb0, transparent 70%);
//           animation: orbFloat 16s ease-in-out infinite;
//         }
//         @keyframes orbFloat {
//           0%,
//           100% {
//             transform: translate(0, 0);
//           }
//           50% {
//             transform: translate(40px, -30px);
//           }
//         }
//         .bg-grid {
//           position: absolute;
//           inset: 0;
//           background-image:
//             linear-gradient(rgba(168, 197, 236, 0.05) 1px, transparent 1px),
//             linear-gradient(
//               90deg,
//               rgba(168, 197, 236, 0.05) 1px,
//               transparent 1px
//             );
//           background-size: 60px 60px;
//           mask-image: radial-gradient(
//             ellipse at center,
//             black 20%,
//             transparent 65%
//           );
//           -webkit-mask-image: radial-gradient(
//             ellipse at center,
//             black 20%,
//             transparent 65%
//           );
//           z-index: 1;
//           pointer-events: none;
//         }

//         .watermark {
//           position: absolute;
//           right: -30px;
//           top: 12%;
//           font-family: "Merriweather", Georgia, serif;
//           font-size: 280px;
//           font-weight: 900;
//           line-height: 1;
//           color: transparent;
//           -webkit-text-stroke: 1.5px rgba(243, 111, 33, 0.12);
//           z-index: 1;
//           letter-spacing: -8px;
//           pointer-events: none;
//         }

//         /* ===== Announcement pill ===== */
//         .announce-pill {
//           background: rgba(255, 255, 255, 0.07);
//           backdrop-filter: blur(14px);
//           border: 1px solid rgba(255, 255, 255, 0.15);
//           padding: 6px 6px 6px 8px;
//           border-radius: 50px;
//           transition: all 0.3s ease;
//         }
//         .announce-pill:hover {
//           background: rgba(255, 255, 255, 0.1);
//           border-color: rgba(230, 57, 70, 0.4);
//         }
//         .pill-icon {
//           width: 22px;
//           height: 22px;
//           border-radius: 50%;
//           background: linear-gradient(135deg, #e63946, #f36f21);
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .pill-dot {
//           width: 6px;
//           height: 6px;
//           border-radius: 50%;
//           background: #fff;
//           animation: pillPulse 1.5s infinite;
//         }
//         @keyframes pillPulse {
//           0%,
//           100% {
//             transform: scale(1);
//             opacity: 1;
//           }
//           50% {
//             transform: scale(1.4);
//             opacity: 0.5;
//           }
//         }
//         .pill-text {
//           font-size: 12px;
//           font-weight: 700;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           color: #fff;
//         }
//         .pill-arrow {
//           width: 24px;
//           height: 24px;
//           border-radius: 50%;
//           background: rgba(255, 255, 255, 0.1);
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 12px;
//           margin-left: 4px;
//         }

//         /* ===== Headline ===== */
//         .hero-title {
//           font-family: "Merriweather", Georgia, serif;
//           font-size: 72px;
//           font-weight: 900;
//           line-height: 1;
//           letter-spacing: -2.5px;
//           margin: 0 0 20px;
//           color: #fff;
//         }
//         .title-accent {
//           position: relative;
//           display: inline-block;
//           font-style: italic;
//           font-weight: 400;
//           background: linear-gradient(135deg, #f36f21 30%, #ffa46b);
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }
//         .title-underline {
//           position: absolute;
//           left: 0;
//           bottom: -8px;
//           width: 100%;
//           height: 12px;
//         }
//         .title-soft {
//           color: rgba(255, 255, 255, 0.55);
//           font-weight: 400;
//           font-size: 0.55em;
//           letter-spacing: -0.5px;
//         }

//         /* ===== Partners ===== */
//         .partners-row {
//           margin: 28px 0 24px !important;
//         }
//         .brand-usshape {
//           font-family: -apple-system, "Segoe UI", sans-serif;
//           font-size: 30px;
//           font-weight: 800;
//           letter-spacing: 1px;
//           line-height: 1;
//         }
//         .brand-usshape .us {
//           color: #fff;
//         }
//         .brand-usshape .shape {
//           color: #e63946;
//         }
//         .cross-mark {
//           font-family: Georgia, serif;
//           font-size: 28px;
//           color: #f36f21;
//           opacity: 0.6;
//           font-weight: 200;
//         }
//         .brand-shsu {
//           font-family: "Merriweather", Georgia, serif;
//           font-size: 24px;
//           font-weight: 900;
//           color: #f36f21;
//           line-height: 1.15;
//         }

//         .hero-desc {
//           font-size: 17px;
//           line-height: 1.7;
//           color: rgba(255, 255, 255, 0.72);
//           max-width: 560px;
//           margin-bottom: 0;
//         }
//         .hero-desc strong {
//           color: #fff;
//           font-weight: 600;
//         }

//         /* ===== Buttons ===== */
//         :global(.btn-glow) {
//           background: linear-gradient(135deg, #e63946, #c92e3a);
//           color: #fff !important;
//           font-size: 15px;
//           font-weight: 700;
//           padding: 14px 28px;
//           border-radius: 60px;
//           text-decoration: none;
//           box-shadow:
//             0 12px 32px rgba(230, 57, 70, 0.45),
//             inset 0 1px 0 rgba(255, 255, 255, 0.2);
//           transition: all 0.3s ease;
//           position: relative;
//         }
//         :global(.btn-glow:hover) {
//           transform: translateY(-2px);
//           box-shadow: 0 16px 40px rgba(230, 57, 70, 0.6);
//         }
//         :global(.btn-glow:hover .arrow-wrap) {
//           background: #fff;
//           color: #e63946;
//         }
//         .arrow-wrap {
//           width: 26px;
//           height: 26px;
//           border-radius: 50%;
//           background: rgba(255, 255, 255, 0.2);
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.3s ease;
//         }
//         :global(.btn-ghost) {
//           background: transparent;
//           color: #fff !important;
//           font-size: 14px;
//           font-weight: 600;
//           padding: 12px 4px;
//           text-decoration: none;
//           transition: color 0.25s;
//         }
//         :global(.btn-ghost:hover) {
//           color: #f36f21 !important;
//         }
//         .play-circle {
//           width: 32px;
//           height: 32px;
//           border-radius: 50%;
//           background: rgba(255, 255, 255, 0.08);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 13px;
//         }

//         /* ===== Trust strip ===== */
//         .trust-strip {
//           border-top: 1px solid rgba(255, 255, 255, 0.1);
//         }
//         .trust-num {
//           font-family: "Merriweather", Georgia, serif;
//           font-size: 28px;
//           font-weight: 900;
//           background: linear-gradient(135deg, #fff, #a8c5ec);
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//           line-height: 1;
//         }
//         .trust-lbl {
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           color: #a8c5ec;
//           margin-top: 6px;
//         }
//         .trust-sep {
//           width: 1px;
//           height: 36px;
//           background: rgba(255, 255, 255, 0.15);
//         }

//         /* ===== Visual Stack ===== */
//         .visual-stack {
//           height: 540px;
//         }
//         .glow-ring {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           inset: 0;
//           background: radial-gradient(
//             circle at 60% 50%,
//             rgba(243, 111, 33, 0.3),
//             transparent 50%
//           );
//           filter: blur(40px);
//           z-index: 0;
//         }
//         .card-main {
//           position: absolute;
//           inset: 0;
//           border-radius: 28px;
//           overflow: hidden;
//           box-shadow:
//             0 30px 60px rgba(0, 0, 0, 0.4),
//             0 0 0 1px rgba(255, 255, 255, 0.06);
//           z-index: 2;
//           transform: rotate(2deg);
//           transition: transform 0.5s ease;
//         }
//         .card-main:hover {
//           transform: rotate(0deg) scale(1.02);
//         }
//         .card-img {
//           position: absolute;
//           inset: 0;
//           background-image: url("/images/sam-uni.webp");
//           background-size: cover;
//           background-position: center;
//           animation: kenBurns 18s ease-in-out infinite alternate;
//         }
//         @keyframes kenBurns {
//           from {
//             transform: scale(1) translate(0, 0);
//           }
//           to {
//             transform: scale(1.1) translate(-15px, -10px);
//           }
//         }
//         .card-shade {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             180deg,
//             rgba(10, 39, 86, 0.2) 0%,
//             transparent 30%,
//             rgba(6, 26, 61, 0.85)
//           );
//         }
//         .card-tag {
//           position: absolute;
//           top: 20px;
//           left: 20px;
//           background: rgba(255, 255, 255, 0.95);
//           backdrop-filter: blur(10px);
//           color: #0a2756;
//           font-size: 11px;
//           font-weight: 800;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           padding: 7px 14px;
//           border-radius: 50px;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           z-index: 4;
//         }
//         .tag-dot {
//           width: 6px;
//           height: 6px;
//           background: #e63946;
//           border-radius: 50%;
//           animation: pillPulse 1.6s infinite;
//         }
//         .card-caption {
//           position: absolute;
//           bottom: 24px;
//           left: 24px;
//           right: 24px;
//           color: #fff;
//           z-index: 4;
//         }
//         .cap-meta {
//           font-size: 10px;
//           letter-spacing: 3px;
//           color: #f36f21;
//           font-weight: 800;
//           margin-bottom: 6px;
//         }
//         .cap-title {
//           font-family: "Merriweather", Georgia, serif;
//           font-size: 22px;
//           font-weight: 900;
//           line-height: 1.2;
//         }

//         .logo-card {
//           position: absolute;
//           bottom: -30px;
//           left: -40px;
//           background: #fff;
//           color: #0a2756;
//           padding: 14px 18px 14px 14px;
//           border-radius: 16px;
//           z-index: 5;
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
//           transform: rotate(-3deg);
//           transition: transform 0.4s ease;
//         }
//         .logo-card:hover {
//           transform: rotate(0deg) translateY(-4px);
//         }
//         .logo-mark {
//           width: 44px;
//           height: 44px;
//           background: linear-gradient(135deg, #f36f21, #ffa46b);
//           color: #fff;
//           font-family: "Merriweather", Georgia, serif;
//           font-weight: 900;
//           font-size: 18px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 10px;
//           box-shadow: 0 6px 14px rgba(243, 111, 33, 0.4);
//         }
//         .logo-name {
//           font-size: 13px;
//           font-weight: 800;
//           line-height: 1.1;
//         }
//         .logo-sub {
//           font-size: 11px;
//           color: #6c757d;
//           font-weight: 600;
//         }

//         .floating-stat {
//           position: absolute;
//           top: 30px;
//           right: -30px;
//           background: rgba(10, 39, 86, 0.85);
//           backdrop-filter: blur(14px);
//           border: 1px solid rgba(243, 111, 33, 0.3);
//           color: #fff;
//           font-size: 12px;
//           font-weight: 700;
//           letter-spacing: 1.2px;
//           padding: 10px 16px 10px 12px;
//           border-radius: 50px;
//           z-index: 5;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           text-transform: uppercase;
//           box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
//         }
//         .floating-stat :global(svg) {
//           color: #4ade80;
//         }

//         /* ===== Marquee strip ===== */
//         .marquee-strip {
//           margin-top: 80px;
//           background: linear-gradient(90deg, #e63946, #c92e3a, #e63946);
//           color: #fff;
//           padding: 14px 0;
//           overflow: hidden;
//           position: relative;
//           z-index: 4;
//           border-top: 1px solid rgba(255, 255, 255, 0.1);
//         }
//         .marquee-track {
//           display: flex;
//           width: max-content;
//           animation: marquee 30s linear infinite;
//         }
//         .marquee-group {
//           gap: 24px;
//           padding-right: 24px;
//           font-size: 12px;
//           font-weight: 800;
//           letter-spacing: 3px;
//           text-transform: uppercase;
//           white-space: nowrap;
//         }
//         .marquee-group .dot {
//           color: #ffa46b;
//         }
//         @keyframes marquee {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }

//         /* ========== RESPONSIVE ========== */

//         /* Tablet ≤ 991 */
//         @media (max-width: 991px) {
//           .hero-section {
//             padding: 60px 0 0;
//             min-height: auto;
//           }
//           .watermark {
//             font-size: 180px;
//             top: 8%;
//           }
//           .hero-title {
//             font-size: 52px;
//             letter-spacing: -1.5px;
//           }
//           .visual-stack {
//             height: auto;
//             aspect-ratio: 4 / 3;
//             margin-top: 60px;
//           }
//           .card-main {
//             transform: rotate(0deg);
//           }
//           .logo-card {
//             left: -20px;
//             bottom: -20px;
//           }
//           .floating-stat {
//             right: -10px;
//           }
//           .marquee-strip {
//             margin-top: 70px;
//           }
//         }

//         /* Mobile ≤ 576 */
//         @media (max-width: 576px) {
//           .hero-section {
//             padding: 40px 0 0;
//           }
//           .watermark {
//             display: none;
//           }
//           .orb {
//             filter: blur(70px);
//           }
//           .orb-1 {
//             width: 300px;
//             height: 300px;
//           }
//           .orb-2 {
//             width: 280px;
//             height: 280px;
//           }

//           .announce-pill {
//             padding: 4px 4px 4px 6px;
//           }
//           .pill-text {
//             font-size: 10px;
//             letter-spacing: 1.5px;
//           }
//           .pill-icon {
//             width: 18px;
//             height: 18px;
//           }
//           .pill-arrow {
//             width: 20px;
//             height: 20px;
//             font-size: 10px;
//           }

//           .hero-title {
//             font-size: 34px;
//             letter-spacing: -1px;
//             margin-bottom: 16px;
//           }
//           .title-underline {
//             height: 8px;
//             bottom: -4px;
//           }

//           .partners-row {
//             margin: 20px 0 18px !important;
//             gap: 10px !important;
//           }
//           .brand-usshape {
//             font-size: 22px;
//           }
//           .brand-shsu {
//             font-size: 18px;
//           }
//           .cross-mark {
//             font-size: 22px;
//           }

//           .hero-desc {
//             font-size: 14.5px;
//             line-height: 1.65;
//           }

//           :global(.btn-glow) {
//             font-size: 13px;
//             padding: 12px 20px;
//             width: 100%;
//             justify-content: center;
//           }
//           :global(.btn-ghost) {
//             font-size: 13px;
//             width: 100%;
//             justify-content: center;
//             padding: 10px 4px;
//           }

//           .trust-strip {
//             gap: 20px !important;
//             margin-top: 30px !important;
//             padding-top: 24px !important;
//             justify-content: space-between;
//           }
//           .trust-num {
//             font-size: 22px;
//           }
//           .trust-lbl {
//             font-size: 9px;
//             letter-spacing: 1.2px;
//           }

//           .visual-stack {
//             margin-top: 36px;
//             aspect-ratio: 4 / 3.2;
//           }
//           .card-main {
//             border-radius: 20px;
//           }
//           .card-tag {
//             font-size: 9px;
//             padding: 5px 10px;
//             letter-spacing: 1.2px;
//           }
//           .cap-title {
//             font-size: 16px;
//           }
//           .cap-meta {
//             font-size: 9px;
//             letter-spacing: 2px;
//           }

//           .marquee-strip {
//             margin-top: 40px;
//             padding: 10px 0;
//           }
//           .marquee-group {
//             font-size: 10px;
//             letter-spacing: 2px;
//             gap: 16px;
//             padding-right: 16px;
//           }
//         }

//         @media (max-width: 360px) {
//           .hero-title {
//             font-size: 28px;
//           }
//           .brand-usshape {
//             font-size: 19px;
//           }
//           .brand-shsu {
//             font-size: 16px;
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
      {/* animated background */}
      <div className="bg-orbs">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
      </div>
      <div className="bg-grid" />

      {/* watermark year */}
      <div className="watermark d-none d-md-block">2026</div>

      <div className="container position-relative" style={{ zIndex: 3 }}>
        <div className="row align-items-center g-5 g-lg-4">
          {/* ===== LEFT — content ===== */}
          <div className="col-lg-7">
            {/* headline */}
            <h1 className="hero-title">
              A Landmark
              <br />
              <span className="title-accent">
                Affiliation
                <svg
                  className="title-underline"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 Q 75 2, 150 6 T 298 4"
                    fill="none"
                    stroke="url(#underGrad)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="underGrad" x1="0" x2="1">
                      <stop offset="0%" stopColor="#e63946" />
                      <stop offset="100%" stopColor="#f36f21" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              <span className="title-soft">in Clinical Education</span>
            </h1>

            {/* partners */}
            <div className="partners-row d-flex align-items-center flex-wrap gap-3 my-4">
              <span className="brand-usshape">
                <span className="us">US </span>{" "}
                <span className="shape">SHAPE INC</span>
              </span>
              <span className="cross-mark">×</span>
              <span className="brand-shsu">
                Sam Houston <br className="d-none d-md-inline" /> State
                University
              </span>
            </div>

            <p className="hero-desc">
              Effective immediately,{" "}
              <a
                href="https://www.mypremierpain.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ppc-link"
              >
                <span className="ppc-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <path d="M7 17L17 7M17 7H8M17 7v9" />
                  </svg>
                </span>
                Premier Pain Centers
              </a>{" "}
              serves as the official clinical rotation site for SHSU&apos;s
              College of Osteopathic Medicine — pairing students with
              credentialed preceptors in a live patient-care environment.
            </p>

            {/* CTAs */}
            <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
              <Link
                href="/externship-application-form"
                className="btn-glow d-inline-flex align-items-center gap-2"
              >
                Apply for Externship
                <span className="arrow-wrap">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/alumni"
                className="btn-outline d-inline-flex align-items-center gap-2"
              >
                <span className="alumni-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </span>
                Our Alumni
                <span className="alumni-arrow">→</span>
              </Link>
            </div>
          </div>

          {/* ===== RIGHT — image stack ===== */}
          <div className="col-lg-5">
            <div className="visual-stack position-relative">
              <div className="glow-ring d-none d-md-block" />

              <div className="card-main">
                <div className="card-img" />
                <div className="card-shade" />

                <div className="card-caption">
                  <div className="cap-meta">CAMPUS · SHSU</div>
                  <div className="cap-title">
                    College of <br /> Osteopathic Medicine
                  </div>
                </div>
              </div>

              <div className="floating-stat d-none d-lg-flex">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Officially Approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          background: radial-gradient(
            ellipse at top left,
            #102f63 0%,
            #0a2756 35%,
            #061a3d 100%
          );
          color: #fff;
          padding: 80px 0 0;
          min-height: 100vh;
        }

        /* ===== Background ===== */
        .bg-orbs { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
        .orb { position: absolute; border-radius: 50%; filter: blur(110px); opacity: 0.6; }
        .orb-1 {
          width: 500px; height: 500px; top: -100px; right: -100px;
          background: radial-gradient(circle, #e63946, transparent 70%);
          animation: orbFloat 12s ease-in-out infinite;
        }
        .orb-2 {
          width: 400px; height: 400px; bottom: -50px; left: -100px;
          background: radial-gradient(circle, #f36f21, transparent 70%);
          animation: orbFloat 14s ease-in-out infinite reverse;
        }
        .orb-3 {
          width: 350px; height: 350px; top: 40%; left: 40%;
          background: radial-gradient(circle, #2a5cb0, transparent 70%);
          animation: orbFloat 16s ease-in-out infinite;
        }
        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, -30px); }
        }
        .bg-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(168, 197, 236, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 197, 236, 0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at center, black 20%, transparent 65%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 20%, transparent 65%);
          z-index: 1; pointer-events: none;
        }
        .watermark {
          position: absolute; right: -30px; top: 12%;
          font-family: "Merriweather", Georgia, serif;
          font-size: 280px; font-weight: 900; line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(243, 111, 33, 0.12);
          z-index: 1; letter-spacing: -8px; pointer-events: none;
        }

        /* ===== Headline ===== */
        .hero-title {
          font-family: "Merriweather", Georgia, serif;
          font-size: 72px; font-weight: 900; line-height: 1;
          letter-spacing: -2.5px; margin: 0 0 20px; color: #fff;
        }
        .title-accent {
          position: relative; display: inline-block;
          font-style: italic; font-weight: 400;
          background: linear-gradient(135deg, #f36f21 30%, #ffa46b);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .title-underline {
          position: absolute; left: 0; bottom: -8px; width: 100%; height: 12px;
        }
        .title-soft {
          color: rgba(255, 255, 255, 0.55);
          font-weight: 400; font-size: 0.55em; letter-spacing: -0.5px;
        }

        /* ===== Partners ===== */
        .partners-row { margin: 28px 0 24px !important; }
        .brand-usshape {
          font-family: -apple-system, "Segoe UI", sans-serif;
          font-size: 30px; font-weight: 800; letter-spacing: 1px; line-height: 1;
        }
        .brand-usshape .us { color: #fff; }
        .brand-usshape .shape { color: #e63946; }
        .cross-mark {
          font-family: Georgia, serif; font-size: 28px;
          color: #f36f21; opacity: 0.6; font-weight: 200;
        }
        .brand-shsu {
          font-family: "Merriweather", Georgia, serif;
          font-size: 24px; font-weight: 900; color: #f36f21; line-height: 1.15;
        }

        .hero-desc {
          font-size: 17px; line-height: 1.7;
          color: rgba(255, 255, 255, 0.72);
          max-width: 560px; margin-bottom: 0;
        }

        /* ===== PREMIER PAIN CENTERS — prominent inline link ===== */
        :global(.ppc-link) {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, rgba(230, 57, 70, 0.18), rgba(243, 111, 33, 0.12));
          color: #fff !important;
          font-weight: 800;
          padding: 2px 12px 2px 8px;
          border-radius: 6px;
          text-decoration: none;
          border-bottom: 2px solid #e63946;
          transition: all 0.3s ease;
          white-space: nowrap;
          letter-spacing: 0.2px;
        }
        :global(.ppc-link:hover) {
          background: linear-gradient(135deg, #e63946, #f36f21);
          color: #fff !important;
          border-bottom-color: #fff;
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(230, 57, 70, 0.4);
        }
        :global(.ppc-link:hover .ppc-icon) {
          background: #fff;
          color: #e63946;
          transform: rotate(45deg);
        }
        .ppc-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        /* ===== Buttons ===== */
        :global(.btn-glow) {
          background: linear-gradient(135deg, #e63946, #c92e3a);
          color: #fff !important;
          font-size: 15px; font-weight: 700;
          padding: 14px 28px; border-radius: 60px;
          text-decoration: none;
          box-shadow: 0 12px 32px rgba(230, 57, 70, 0.45),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        :global(.btn-glow:hover) {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(230, 57, 70, 0.6);
        }
        :global(.btn-glow:hover .arrow-wrap) {
          background: #fff;
          color: #e63946;
        }
        .arrow-wrap {
          width: 26px; height: 26px; border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: inline-flex; align-items: center; justify-content: center;
          transition: all 0.3s ease;
        }

        /* ===== OUR ALUMNI — outline glass button ===== */
        :global(.btn-outline) {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          color: #fff !important;
          font-size: 15px; font-weight: 700;
          padding: 14px 24px;
          border-radius: 60px;
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        :global(.btn-outline::before) {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(243, 111, 33, 0.2), rgba(230, 57, 70, 0.2));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        :global(.btn-outline:hover) {
          border-color: #f36f21;
          transform: translateY(-2px);
          color: #fff !important;
          box-shadow: 0 12px 28px rgba(243, 111, 33, 0.25);
        }
        :global(.btn-outline:hover::before) {
          opacity: 1;
        }
        :global(.btn-outline > *) {
          position: relative;
          z-index: 1;
        }
        :global(.btn-outline:hover .alumni-icon) {
          background: #f36f21;
          color: #fff;
          border-color: #f36f21;
        }
        :global(.btn-outline:hover .alumni-arrow) {
          transform: translateX(4px);
          color: #f36f21;
        }
        .alumni-icon {
          width: 26px; height: 26px;
          border-radius: 50%;
          background: rgba(243, 111, 33, 0.15);
          border: 1px solid rgba(243, 111, 33, 0.35);
          color: #f36f21;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .alumni-arrow {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
          margin-left: 2px;
        }

        /* ===== Visual stack ===== */
        .visual-stack { height: 540px; }
        .glow-ring {
          position: absolute; width: 100%; height: 100%; inset: 0;
          background: radial-gradient(circle at 60% 50%, rgba(243, 111, 33, 0.3), transparent 50%);
          filter: blur(40px); z-index: 0;
        }
        .card-main {
          position: absolute; inset: 0;
          border-radius: 28px; overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.06);
          z-index: 2;
          transform: rotate(2deg);
          transition: transform 0.5s ease;
        }
        .card-main:hover { transform: rotate(0deg) scale(1.02); }
        .card-img {
          position: absolute; inset: 0;
          background-image: url("/images/sam-uni.webp");
          background-size: cover; background-position: center;
          animation: kenBurns 18s ease-in-out infinite alternate;
        }
        @keyframes kenBurns {
          from { transform: scale(1) translate(0, 0); }
          to { transform: scale(1.1) translate(-15px, -10px); }
        }
        .card-shade {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(10, 39, 86, 0.2) 0%, transparent 30%, rgba(6, 26, 61, 0.85));
        }
        .card-caption {
          position: absolute; bottom: 24px; left: 24px; right: 24px;
          color: #fff; z-index: 4;
        }
        .cap-meta {
          font-size: 10px; letter-spacing: 3px;
          color: #f36f21; font-weight: 800; margin-bottom: 6px;
        }
        .cap-title {
          font-family: "Merriweather", Georgia, serif;
          font-size: 22px; font-weight: 900; line-height: 1.2;
        }
        .floating-stat {
          position: absolute; top: 30px; right: -30px;
          background: rgba(10, 39, 86, 0.85);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(243, 111, 33, 0.3);
          color: #fff; font-size: 12px; font-weight: 700;
          letter-spacing: 1.2px; padding: 10px 16px 10px 12px;
          border-radius: 50px; z-index: 5;
          display: flex; align-items: center; gap: 8px;
          text-transform: uppercase;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
        }
        .floating-stat :global(svg) { color: #4ade80; }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 991px) {
          .hero-section { padding: 60px 0 0; min-height: auto; }
          .watermark { font-size: 180px; top: 8%; }
          .hero-title { font-size: 52px; letter-spacing: -1.5px; }
          .visual-stack { height: auto; aspect-ratio: 4 / 3; margin-top: 60px; }
          .card-main { transform: rotate(0deg); }
          .floating-stat { right: -10px; }
        }

        @media (max-width: 576px) {
          .hero-section { padding: 40px 0 0; }
          .watermark { display: none; }
          .orb { filter: blur(70px); }
          .orb-1 { width: 300px; height: 300px; }
          .orb-2 { width: 280px; height: 280px; }

          .hero-title {
            font-size: 34px; letter-spacing: -1px; margin-bottom: 16px;
          }
          .title-underline { height: 8px; bottom: -4px; }

          .partners-row { margin: 20px 0 18px !important; gap: 10px !important; }
          .brand-usshape { font-size: 22px; }
          .brand-shsu { font-size: 18px; }
          .cross-mark { font-size: 22px; }

          .hero-desc { font-size: 14.5px; line-height: 1.65; }

          :global(.ppc-link) {
            padding: 1px 10px 1px 6px;
            font-size: 14px;
          }
          .ppc-icon { width: 16px; height: 16px; }

          :global(.btn-glow), :global(.btn-outline) {
            font-size: 13px;
            padding: 12px 20px;
            width: 100%;
            justify-content: center;
          }
          .arrow-wrap, .alumni-icon { width: 22px; height: 22px; }

          .visual-stack { margin-top: 36px; aspect-ratio: 4 / 3.2; }
          .card-main { border-radius: 20px; }
          .cap-title { font-size: 16px; }
          .cap-meta { font-size: 9px; letter-spacing: 2px; }
        }

        @media (max-width: 360px) {
          .hero-title { font-size: 28px; }
          .brand-usshape { font-size: 19px; }
          .brand-shsu { font-size: 16px; }
        }
      `}</style>
    </section>
  );
}