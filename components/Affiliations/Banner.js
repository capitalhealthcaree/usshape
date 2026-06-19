// // // // // // // // // // import Link from "next/link";

// // // // // // // // // // export default function Hero() {
// // // // // // // // // //   return (
// // // // // // // // // //     <section className="hero-section position-relative overflow-hidden">
// // // // // // // // // //       {/* animated background */}
// // // // // // // // // //       <div className="bg-orbs">
// // // // // // // // // //         <span className="orb orb-1" />
// // // // // // // // // //         <span className="orb orb-2" />
// // // // // // // // // //         <span className="orb orb-3" />
// // // // // // // // // //       </div>
// // // // // // // // // //       <div className="bg-grid" />

// // // // // // // // // //       {/* watermark year */}
// // // // // // // // // //       <div className="watermark d-none d-md-block">2026</div>

// // // // // // // // // //       <div className="container position-relative" style={{ zIndex: 3 }}>
// // // // // // // // // //         <div className="row align-items-center g-5 g-lg-4">
// // // // // // // // // //           {/* ===== LEFT — content ===== */}
// // // // // // // // // //           <div className="col-lg-7">
// // // // // // // // // //             {/* headline */}
// // // // // // // // // //             <h1 className="hero-title">
// // // // // // // // // //               A Landmark
// // // // // // // // // //               <br />
// // // // // // // // // //               <span className="title-accent">
// // // // // // // // // //                 Affiliation
// // // // // // // // // //                 <svg
// // // // // // // // // //                   className="title-underline"
// // // // // // // // // //                   viewBox="0 0 300 12"
// // // // // // // // // //                   preserveAspectRatio="none"
// // // // // // // // // //                 >
// // // // // // // // // //                   <path
// // // // // // // // // //                     d="M2 8 Q 75 2, 150 6 T 298 4"
// // // // // // // // // //                     fill="none"
// // // // // // // // // //                     stroke="url(#underGrad)"
// // // // // // // // // //                     strokeWidth="4"
// // // // // // // // // //                     strokeLinecap="round"
// // // // // // // // // //                   />
// // // // // // // // // //                   <defs>
// // // // // // // // // //                     <linearGradient id="underGrad" x1="0" x2="1">
// // // // // // // // // //                       <stop offset="0%" stopColor="#e63946" />
// // // // // // // // // //                       <stop offset="100%" stopColor="#f36f21" />
// // // // // // // // // //                     </linearGradient>
// // // // // // // // // //                   </defs>
// // // // // // // // // //                 </svg>
// // // // // // // // // //               </span>
// // // // // // // // // //               <br />
// // // // // // // // // //               <span className="title-soft">in Clinical Education</span>
// // // // // // // // // //             </h1>

// // // // // // // // // //             {/* partners */}
// // // // // // // // // //             <div className="partners-row d-flex align-items-center flex-wrap gap-3 my-4">
// // // // // // // // // //               <span className="brand-usshape">
// // // // // // // // // //                 <span className="us">US </span>{" "}
// // // // // // // // // //                 <span className="shape">SHAPE INC</span>
// // // // // // // // // //               </span>
// // // // // // // // // //               <span className="cross-mark">×</span>
// // // // // // // // // //               <span className="brand-shsu">
// // // // // // // // // //                 Sam Houston <br className="d-none d-md-inline" /> State
// // // // // // // // // //                 University
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>

// // // // // // // // // //             <p className="hero-desc">
// // // // // // // // // //               Effective immediately,{" "}
// // // // // // // // // //               <a
// // // // // // // // // //                 href="https://www.mypremierpain.com/"
// // // // // // // // // //                 target="_blank"
// // // // // // // // // //                 rel="noopener noreferrer"
// // // // // // // // // //                 className="ppc-link"
// // // // // // // // // //               >
// // // // // // // // // //                 <span className="ppc-icon">
// // // // // // // // // //                   <svg
// // // // // // // // // //                     width="12"
// // // // // // // // // //                     height="12"
// // // // // // // // // //                     viewBox="0 0 24 24"
// // // // // // // // // //                     fill="none"
// // // // // // // // // //                     stroke="currentColor"
// // // // // // // // // //                     strokeWidth="3"
// // // // // // // // // //                     strokeLinecap="round"
// // // // // // // // // //                   >
// // // // // // // // // //                     <path d="M7 17L17 7M17 7H8M17 7v9" />
// // // // // // // // // //                   </svg>
// // // // // // // // // //                 </span>
// // // // // // // // // //                 Premier Pain Centers
// // // // // // // // // //               </a>{" "}
// // // // // // // // // //               serves as the official clinical rotation site for SHSU&apos;s
// // // // // // // // // //               College of Osteopathic Medicine — pairing students with
// // // // // // // // // //               credentialed preceptors in a live patient-care environment.
// // // // // // // // // //             </p>

// // // // // // // // // //             {/* CTAs */}
// // // // // // // // // //             <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
// // // // // // // // // //               <Link
// // // // // // // // // //                 href="/externship-application-form"
// // // // // // // // // //                 className="btn-glow d-inline-flex align-items-center gap-2"
// // // // // // // // // //               >
// // // // // // // // // //                 Apply for Externship
// // // // // // // // // //                 <span className="arrow-wrap">
// // // // // // // // // //                   <svg
// // // // // // // // // //                     width="14"
// // // // // // // // // //                     height="14"
// // // // // // // // // //                     viewBox="0 0 24 24"
// // // // // // // // // //                     fill="none"
// // // // // // // // // //                     stroke="currentColor"
// // // // // // // // // //                     strokeWidth="3"
// // // // // // // // // //                     strokeLinecap="round"
// // // // // // // // // //                   >
// // // // // // // // // //                     <path d="M5 12h14M13 5l7 7-7 7" />
// // // // // // // // // //                   </svg>
// // // // // // // // // //                 </span>
// // // // // // // // // //               </Link>

// // // // // // // // // //               <Link
// // // // // // // // // //                 href="/alumni"
// // // // // // // // // //                 className="btn-outline d-inline-flex align-items-center gap-2"
// // // // // // // // // //               >
// // // // // // // // // //                 <span className="alumni-icon">
// // // // // // // // // //                   <svg
// // // // // // // // // //                     width="14"
// // // // // // // // // //                     height="14"
// // // // // // // // // //                     viewBox="0 0 24 24"
// // // // // // // // // //                     fill="none"
// // // // // // // // // //                     stroke="currentColor"
// // // // // // // // // //                     strokeWidth="2.5"
// // // // // // // // // //                     strokeLinecap="round"
// // // // // // // // // //                     strokeLinejoin="round"
// // // // // // // // // //                   >
// // // // // // // // // //                     <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
// // // // // // // // // //                     <path d="M6 12v5c3 3 9 3 12 0v-5" />
// // // // // // // // // //                   </svg>
// // // // // // // // // //                 </span>
// // // // // // // // // //                 Our Alumni
// // // // // // // // // //                 <span className="alumni-arrow">→</span>
// // // // // // // // // //               </Link>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* ===== RIGHT — image stack ===== */}
// // // // // // // // // //           <div className="col-lg-5">
// // // // // // // // // //             <div className="visual-stack position-relative">
// // // // // // // // // //               <div className="glow-ring d-none d-md-block" />

// // // // // // // // // //               <div className="card-main">
// // // // // // // // // //                 <div className="card-img" />
// // // // // // // // // //                 <div className="card-shade" />

// // // // // // // // // //                 <div className="card-caption">
// // // // // // // // // //                   <div className="cap-meta">CAMPUS · SHSU</div>
// // // // // // // // // //                   <div className="cap-title">
// // // // // // // // // //                     College of <br /> Osteopathic Medicine
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>

// // // // // // // // // //               <div className="floating-stat d-none d-lg-flex">
// // // // // // // // // //                 <svg
// // // // // // // // // //                   width="20"
// // // // // // // // // //                   height="20"
// // // // // // // // // //                   viewBox="0 0 24 24"
// // // // // // // // // //                   fill="none"
// // // // // // // // // //                   stroke="currentColor"
// // // // // // // // // //                   strokeWidth="2.5"
// // // // // // // // // //                   strokeLinecap="round"
// // // // // // // // // //                 >
// // // // // // // // // //                   <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
// // // // // // // // // //                   <polyline points="22 4 12 14.01 9 11.01" />
// // // // // // // // // //                 </svg>
// // // // // // // // // //                 <span>Officially Approved</span>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       <style jsx>{`
// // // // // // // // // //         .hero-section {
// // // // // // // // // //           background: radial-gradient(
// // // // // // // // // //             ellipse at top left,
// // // // // // // // // //             #102f63 0%,
// // // // // // // // // //             #0a2756 35%,
// // // // // // // // // //             #061a3d 100%
// // // // // // // // // //           );
// // // // // // // // // //           color: #fff;
// // // // // // // // // //           padding: 80px 0 0;
// // // // // // // // // //           min-height: 100vh;
// // // // // // // // // //         }

// // // // // // // // // //         /* ===== Background ===== */
// // // // // // // // // //         .bg-orbs {
// // // // // // // // // //           position: absolute;
// // // // // // // // // //           inset: 0;
// // // // // // // // // //           z-index: 1;
// // // // // // // // // //           pointer-events: none;
// // // // // // // // // //         }
// // // // // // // // // //         .orb {
// // // // // // // // // //           position: absolute;
// // // // // // // // // //           border-radius: 50%;
// // // // // // // // // //           filter: blur(110px);
// // // // // // // // // //           opacity: 0.6;
// // // // // // // // // //         }
// // // // // // // // // //         .orb-1 {
// // // // // // // // // //           width: 500px;
// // // // // // // // // //           height: 500px;
// // // // // // // // // //           top: -100px;
// // // // // // // // // //           right: -100px;
// // // // // // // // // //           background: radial-gradient(circle, #e63946, transparent 70%);
// // // // // // // // // //           animation: orbFloat 12s ease-in-out infinite;
// // // // // // // // // //         }
// // // // // // // // // //         .orb-2 {
// // // // // // // // // //           width: 400px;
// // // // // // // // // //           height: 400px;
// // // // // // // // // //           bottom: -50px;
// // // // // // // // // //           left: -100px;
// // // // // // // // // //           background: radial-gradient(circle, #f36f21, transparent 70%);
// // // // // // // // // //           animation: orbFloat 14s ease-in-out infinite reverse;
// // // // // // // // // //         }
// // // // // // // // // //         .orb-3 {
// // // // // // // // // //           width: 350px;
// // // // // // // // // //           height: 350px;
// // // // // // // // // //           top: 40%;
// // // // // // // // // //           left: 40%;
// // // // // // // // // //           background: radial-gradient(circle, #2a5cb0, transparent 70%);
// // // // // // // // // //           animation: orbFloat 16s ease-in-out infinite;
// // // // // // // // // //         }
// // // // // // // // // //         @keyframes orbFloat {
// // // // // // // // // //           0%,
// // // // // // // // // //           100% {
// // // // // // // // // //             transform: translate(0, 0);
// // // // // // // // // //           }
// // // // // // // // // //           50% {
// // // // // // // // // //             transform: translate(40px, -30px);
// // // // // // // // // //           }
// // // // // // // // // //         }
// // // // // // // // // //         .bg-grid {
// // // // // // // // // //           position: absolute;
// // // // // // // // // //           inset: 0;
// // // // // // // // // //           background-image:
// // // // // // // // // //             linear-gradient(rgba(168, 197, 236, 0.05) 1px, transparent 1px),
// // // // // // // // // //             linear-gradient(
// // // // // // // // // //               90deg,
// // // // // // // // // //               rgba(168, 197, 236, 0.05) 1px,
// // // // // // // // // //               transparent 1px
// // // // // // // // // //             );
// // // // // // // // // //           background-size: 60px 60px;
// // // // // // // // // //           mask-image: radial-gradient(
// // // // // // // // // //             ellipse at center,
// // // // // // // // // //             black 20%,
// // // // // // // // // //             transparent 65%
// // // // // // // // // //           );
// // // // // // // // // //           -webkit-mask-image: radial-gradient(
// // // // // // // // // //             ellipse at center,
// // // // // // // // // //             black 20%,
// // // // // // // // // //             transparent 65%
// // // // // // // // // //           );
// // // // // // // // // //           z-index: 1;
// // // // // // // // // //           pointer-events: none;
// // // // // // // // // //         }
// // // // // // // // // //         .watermark {
// // // // // // // // // //           position: absolute;
// // // // // // // // // //           right: -30px;
// // // // // // // // // //           top: 12%;
// // // // // // // // // //           font-family: "Merriweather", Georgia, serif;
// // // // // // // // // //           font-size: 280px;
// // // // // // // // // //           font-weight: 900;
// // // // // // // // // //           line-height: 1;
// // // // // // // // // //           color: transparent;
// // // // // // // // // //           -webkit-text-stroke: 1.5px rgba(243, 111, 33, 0.12);
// // // // // // // // // //           z-index: 1;
// // // // // // // // // //           letter-spacing: -8px;
// // // // // // // // // //           pointer-events: none;
// // // // // // // // // //         }

// // // // // // // // // //         /* ===== Headline ===== */
// // // // // // // // // //         .hero-title {
// // // // // // // // // //           font-family: "Merriweather", Georgia, serif;
// // // // // // // // // //           font-size: 72px;
// // // // // // // // // //           font-weight: 900;
// // // // // // // // // //           line-height: 1;
// // // // // // // // // //           letter-spacing: -2.5px;
// // // // // // // // // //           margin: 0 0 20px;
// // // // // // // // // //           color: #fff;
// // // // // // // // // //         }
// // // // // // // // // //         .title-accent {
// // // // // // // // // //           position: relative;
// // // // // // // // // //           display: inline-block;
// // // // // // // // // //           font-style: italic;
// // // // // // // // // //           font-weight: 400;
// // // // // // // // // //           background: linear-gradient(135deg, #f36f21 30%, #ffa46b);
// // // // // // // // // //           -webkit-background-clip: text;
// // // // // // // // // //           background-clip: text;
// // // // // // // // // //           -webkit-text-fill-color: transparent;
// // // // // // // // // //         }
// // // // // // // // // //         .title-underline {
// // // // // // // // // //           position: absolute;
// // // // // // // // // //           left: 0;
// // // // // // // // // //           bottom: -8px;
// // // // // // // // // //           width: 100%;
// // // // // // // // // //           height: 12px;
// // // // // // // // // //         }
// // // // // // // // // //         .title-soft {
// // // // // // // // // //           color: rgba(255, 255, 255, 0.55);
// // // // // // // // // //           font-weight: 400;
// // // // // // // // // //           font-size: 0.55em;
// // // // // // // // // //           letter-spacing: -0.5px;
// // // // // // // // // //         }

// // // // // // // // // //         /* ===== Partners ===== */
// // // // // // // // // //         .partners-row {
// // // // // // // // // //           margin: 28px 0 24px !important;
// // // // // // // // // //         }
// // // // // // // // // //         .brand-usshape {
// // // // // // // // // //           font-family: -apple-system, "Segoe UI", sans-serif;
// // // // // // // // // //           font-size: 30px;
// // // // // // // // // //           font-weight: 800;
// // // // // // // // // //           letter-spacing: 1px;
// // // // // // // // // //           line-height: 1;
// // // // // // // // // //         }
// // // // // // // // // //         .brand-usshape .us {
// // // // // // // // // //           color: #fff;
// // // // // // // // // //         }
// // // // // // // // // //         .brand-usshape .shape {
// // // // // // // // // //           color: #e63946;
// // // // // // // // // //         }
// // // // // // // // // //         .cross-mark {
// // // // // // // // // //           font-family: Georgia, serif;
// // // // // // // // // //           font-size: 28px;
// // // // // // // // // //           color: #f36f21;
// // // // // // // // // //           opacity: 0.6;
// // // // // // // // // //           font-weight: 200;
// // // // // // // // // //         }
// // // // // // // // // //         .brand-shsu {
// // // // // // // // // //           font-family: "Merriweather", Georgia, serif;
// // // // // // // // // //           font-size: 24px;
// // // // // // // // // //           font-weight: 900;
// // // // // // // // // //           color: #f36f21;
// // // // // // // // // //           line-height: 1.15;
// // // // // // // // // //         }

// // // // // // // // // //         .hero-desc {
// // // // // // // // // //           font-size: 17px;
// // // // // // // // // //           line-height: 1.7;
// // // // // // // // // //           color: rgba(255, 255, 255, 0.72);
// // // // // // // // // //           max-width: 560px;
// // // // // // // // // //           margin-bottom: 0;
// // // // // // // // // //         }

// // // // // // // // // //         /* ===== PREMIER PAIN CENTERS — prominent inline link ===== */
// // // // // // // // // //         :global(.ppc-link) {
// // // // // // // // // //           display: inline-flex;
// // // // // // // // // //           align-items: center;
// // // // // // // // // //           gap: 6px;
// // // // // // // // // //           background: linear-gradient(
// // // // // // // // // //             135deg,
// // // // // // // // // //             rgba(230, 57, 70, 0.18),
// // // // // // // // // //             rgba(243, 111, 33, 0.12)
// // // // // // // // // //           );
// // // // // // // // // //           color: #fff !important;
// // // // // // // // // //           font-weight: 800;
// // // // // // // // // //           padding: 2px 12px 2px 8px;
// // // // // // // // // //           border-radius: 6px;
// // // // // // // // // //           text-decoration: none;
// // // // // // // // // //           border-bottom: 2px solid #e63946;
// // // // // // // // // //           transition: all 0.3s ease;
// // // // // // // // // //           white-space: nowrap;
// // // // // // // // // //           letter-spacing: 0.2px;
// // // // // // // // // //         }
// // // // // // // // // //         :global(.ppc-link:hover) {
// // // // // // // // // //           background: linear-gradient(135deg, #e63946, #f36f21);
// // // // // // // // // //           color: #fff !important;
// // // // // // // // // //           border-bottom-color: #fff;
// // // // // // // // // //           transform: translateY(-1px);
// // // // // // // // // //           box-shadow: 0 6px 16px rgba(230, 57, 70, 0.4);
// // // // // // // // // //         }
// // // // // // // // // //         :global(.ppc-link:hover .ppc-icon) {
// // // // // // // // // //           background: #fff;
// // // // // // // // // //           color: #e63946;
// // // // // // // // // //           transform: rotate(45deg);
// // // // // // // // // //         }
// // // // // // // // // //         .ppc-icon {
// // // // // // // // // //           width: 18px;
// // // // // // // // // //           height: 18px;
// // // // // // // // // //           border-radius: 50%;
// // // // // // // // // //           background: rgba(255, 255, 255, 0.2);
// // // // // // // // // //           color: #fff;
// // // // // // // // // //           display: inline-flex;
// // // // // // // // // //           align-items: center;
// // // // // // // // // //           justify-content: center;
// // // // // // // // // //           transition: all 0.3s ease;
// // // // // // // // // //         }

// // // // // // // // // //         /* ===== Buttons ===== */
// // // // // // // // // //         :global(.btn-glow) {
// // // // // // // // // //           background: linear-gradient(135deg, #e63946, #c92e3a);
// // // // // // // // // //           color: #fff !important;
// // // // // // // // // //           font-size: 15px;
// // // // // // // // // //           font-weight: 700;
// // // // // // // // // //           padding: 14px 28px;
// // // // // // // // // //           border-radius: 60px;
// // // // // // // // // //           text-decoration: none;
// // // // // // // // // //           box-shadow:
// // // // // // // // // //             0 12px 32px rgba(230, 57, 70, 0.45),
// // // // // // // // // //             inset 0 1px 0 rgba(255, 255, 255, 0.2);
// // // // // // // // // //           transition: all 0.3s ease;
// // // // // // // // // //         }
// // // // // // // // // //         :global(.btn-glow:hover) {
// // // // // // // // // //           transform: translateY(-2px);
// // // // // // // // // //           box-shadow: 0 16px 40px rgba(230, 57, 70, 0.6);
// // // // // // // // // //         }
// // // // // // // // // //         :global(.btn-glow:hover .arrow-wrap) {
// // // // // // // // // //           background: #fff;
// // // // // // // // // //           color: #e63946;
// // // // // // // // // //         }
// // // // // // // // // //         .arrow-wrap {
// // // // // // // // // //           width: 26px;
// // // // // // // // // //           height: 26px;
// // // // // // // // // //           border-radius: 50%;
// // // // // // // // // //           background: rgba(255, 255, 255, 0.2);
// // // // // // // // // //           display: inline-flex;
// // // // // // // // // //           align-items: center;
// // // // // // // // // //           justify-content: center;
// // // // // // // // // //           transition: all 0.3s ease;
// // // // // // // // // //         }

// // // // // // // // // //         /* ===== OUR ALUMNI — outline glass button ===== */
// // // // // // // // // //         :global(.btn-outline) {
// // // // // // // // // //           background: rgba(255, 255, 255, 0.05);
// // // // // // // // // //           backdrop-filter: blur(14px);
// // // // // // // // // //           -webkit-backdrop-filter: blur(14px);
// // // // // // // // // //           color: #fff !important;
// // // // // // // // // //           font-size: 15px;
// // // // // // // // // //           font-weight: 700;
// // // // // // // // // //           padding: 14px 24px;
// // // // // // // // // //           border-radius: 60px;
// // // // // // // // // //           border: 1.5px solid rgba(255, 255, 255, 0.25);
// // // // // // // // // //           text-decoration: none;
// // // // // // // // // //           transition: all 0.3s ease;
// // // // // // // // // //           position: relative;
// // // // // // // // // //           overflow: hidden;
// // // // // // // // // //         }
// // // // // // // // // //         :global(.btn-outline::before) {
// // // // // // // // // //           content: "";
// // // // // // // // // //           position: absolute;
// // // // // // // // // //           inset: 0;
// // // // // // // // // //           background: linear-gradient(
// // // // // // // // // //             135deg,
// // // // // // // // // //             rgba(243, 111, 33, 0.2),
// // // // // // // // // //             rgba(230, 57, 70, 0.2)
// // // // // // // // // //           );
// // // // // // // // // //           opacity: 0;
// // // // // // // // // //           transition: opacity 0.3s ease;
// // // // // // // // // //         }
// // // // // // // // // //         :global(.btn-outline:hover) {
// // // // // // // // // //           border-color: #f36f21;
// // // // // // // // // //           transform: translateY(-2px);
// // // // // // // // // //           color: #fff !important;
// // // // // // // // // //           box-shadow: 0 12px 28px rgba(243, 111, 33, 0.25);
// // // // // // // // // //         }
// // // // // // // // // //         :global(.btn-outline:hover::before) {
// // // // // // // // // //           opacity: 1;
// // // // // // // // // //         }
// // // // // // // // // //         :global(.btn-outline > *) {
// // // // // // // // // //           position: relative;
// // // // // // // // // //           z-index: 1;
// // // // // // // // // //         }
// // // // // // // // // //         :global(.btn-outline:hover .alumni-icon) {
// // // // // // // // // //           background: #f36f21;
// // // // // // // // // //           color: #fff;
// // // // // // // // // //           border-color: #f36f21;
// // // // // // // // // //         }
// // // // // // // // // //         :global(.btn-outline:hover .alumni-arrow) {
// // // // // // // // // //           transform: translateX(4px);
// // // // // // // // // //           color: #f36f21;
// // // // // // // // // //         }
// // // // // // // // // //         .alumni-icon {
// // // // // // // // // //           width: 26px;
// // // // // // // // // //           height: 26px;
// // // // // // // // // //           border-radius: 50%;
// // // // // // // // // //           background: rgba(243, 111, 33, 0.15);
// // // // // // // // // //           border: 1px solid rgba(243, 111, 33, 0.35);
// // // // // // // // // //           color: #f36f21;
// // // // // // // // // //           display: inline-flex;
// // // // // // // // // //           align-items: center;
// // // // // // // // // //           justify-content: center;
// // // // // // // // // //           transition: all 0.3s ease;
// // // // // // // // // //         }
// // // // // // // // // //         .alumni-arrow {
// // // // // // // // // //           font-size: 16px;
// // // // // // // // // //           color: rgba(255, 255, 255, 0.7);
// // // // // // // // // //           transition: all 0.3s ease;
// // // // // // // // // //           margin-left: 2px;
// // // // // // // // // //         }

// // // // // // // // // //         /* ===== Visual stack ===== */
// // // // // // // // // //         .visual-stack {
// // // // // // // // // //           height: 540px;
// // // // // // // // // //         }
// // // // // // // // // //         .glow-ring {
// // // // // // // // // //           position: absolute;
// // // // // // // // // //           width: 100%;
// // // // // // // // // //           height: 100%;
// // // // // // // // // //           inset: 0;
// // // // // // // // // //           background: radial-gradient(
// // // // // // // // // //             circle at 60% 50%,
// // // // // // // // // //             rgba(243, 111, 33, 0.3),
// // // // // // // // // //             transparent 50%
// // // // // // // // // //           );
// // // // // // // // // //           filter: blur(40px);
// // // // // // // // // //           z-index: 0;
// // // // // // // // // //         }
// // // // // // // // // //         .card-main {
// // // // // // // // // //           position: absolute;
// // // // // // // // // //           inset: 0;
// // // // // // // // // //           border-radius: 28px;
// // // // // // // // // //           overflow: hidden;
// // // // // // // // // //           box-shadow:
// // // // // // // // // //             0 30px 60px rgba(0, 0, 0, 0.4),
// // // // // // // // // //             0 0 0 1px rgba(255, 255, 255, 0.06);
// // // // // // // // // //           z-index: 2;
// // // // // // // // // //           transform: rotate(2deg);
// // // // // // // // // //           transition: transform 0.5s ease;
// // // // // // // // // //         }
// // // // // // // // // //         .card-main:hover {
// // // // // // // // // //           transform: rotate(0deg) scale(1.02);
// // // // // // // // // //         }
// // // // // // // // // //         .card-img {
// // // // // // // // // //           position: absolute;
// // // // // // // // // //           inset: 0;
// // // // // // // // // //           background-image: url("/images/sam-uni.webp");
// // // // // // // // // //           background-size: cover;
// // // // // // // // // //           background-position: center;
// // // // // // // // // //           animation: kenBurns 18s ease-in-out infinite alternate;
// // // // // // // // // //         }
// // // // // // // // // //         @keyframes kenBurns {
// // // // // // // // // //           from {
// // // // // // // // // //             transform: scale(1) translate(0, 0);
// // // // // // // // // //           }
// // // // // // // // // //           to {
// // // // // // // // // //             transform: scale(1.1) translate(-15px, -10px);
// // // // // // // // // //           }
// // // // // // // // // //         }
// // // // // // // // // //         .card-shade {
// // // // // // // // // //           position: absolute;
// // // // // // // // // //           inset: 0;
// // // // // // // // // //           background: linear-gradient(
// // // // // // // // // //             180deg,
// // // // // // // // // //             rgba(10, 39, 86, 0.2) 0%,
// // // // // // // // // //             transparent 30%,
// // // // // // // // // //             rgba(6, 26, 61, 0.85)
// // // // // // // // // //           );
// // // // // // // // // //         }
// // // // // // // // // //         .card-caption {
// // // // // // // // // //           position: absolute;
// // // // // // // // // //           bottom: 24px;
// // // // // // // // // //           left: 24px;
// // // // // // // // // //           right: 24px;
// // // // // // // // // //           color: #fff;
// // // // // // // // // //           z-index: 4;
// // // // // // // // // //         }
// // // // // // // // // //         .cap-meta {
// // // // // // // // // //           font-size: 10px;
// // // // // // // // // //           letter-spacing: 3px;
// // // // // // // // // //           color: #f36f21;
// // // // // // // // // //           font-weight: 800;
// // // // // // // // // //           margin-bottom: 6px;
// // // // // // // // // //         }
// // // // // // // // // //         .cap-title {
// // // // // // // // // //           font-family: "Merriweather", Georgia, serif;
// // // // // // // // // //           font-size: 22px;
// // // // // // // // // //           font-weight: 900;
// // // // // // // // // //           line-height: 1.2;
// // // // // // // // // //         }
// // // // // // // // // //         .floating-stat {
// // // // // // // // // //           position: absolute;
// // // // // // // // // //           top: 30px;
// // // // // // // // // //           right: -30px;
// // // // // // // // // //           background: rgba(10, 39, 86, 0.85);
// // // // // // // // // //           backdrop-filter: blur(14px);
// // // // // // // // // //           border: 1px solid rgba(243, 111, 33, 0.3);
// // // // // // // // // //           color: #fff;
// // // // // // // // // //           font-size: 12px;
// // // // // // // // // //           font-weight: 700;
// // // // // // // // // //           letter-spacing: 1.2px;
// // // // // // // // // //           padding: 10px 16px 10px 12px;
// // // // // // // // // //           border-radius: 50px;
// // // // // // // // // //           z-index: 5;
// // // // // // // // // //           display: flex;
// // // // // // // // // //           align-items: center;
// // // // // // // // // //           gap: 8px;
// // // // // // // // // //           text-transform: uppercase;
// // // // // // // // // //           box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
// // // // // // // // // //         }
// // // // // // // // // //         .floating-stat :global(svg) {
// // // // // // // // // //           color: #4ade80;
// // // // // // // // // //         }

// // // // // // // // // //         /* ========== RESPONSIVE ========== */
// // // // // // // // // //         @media (max-width: 991px) {
// // // // // // // // // //           .hero-section {
// // // // // // // // // //             padding: 60px 0 0;
// // // // // // // // // //             min-height: auto;
// // // // // // // // // //           }
// // // // // // // // // //           .watermark {
// // // // // // // // // //             font-size: 180px;
// // // // // // // // // //             top: 8%;
// // // // // // // // // //           }
// // // // // // // // // //           .hero-title {
// // // // // // // // // //             font-size: 52px;
// // // // // // // // // //             letter-spacing: -1.5px;
// // // // // // // // // //           }
// // // // // // // // // //           .visual-stack {
// // // // // // // // // //             height: auto;
// // // // // // // // // //             aspect-ratio: 4 / 3;
// // // // // // // // // //             margin-top: 60px;
// // // // // // // // // //           }
// // // // // // // // // //           .card-main {
// // // // // // // // // //             transform: rotate(0deg);
// // // // // // // // // //           }
// // // // // // // // // //           .floating-stat {
// // // // // // // // // //             right: -10px;
// // // // // // // // // //           }
// // // // // // // // // //         }

// // // // // // // // // //         @media (max-width: 576px) {
// // // // // // // // // //           .hero-section {
// // // // // // // // // //             padding: 40px 0 0;
// // // // // // // // // //           }
// // // // // // // // // //           .watermark {
// // // // // // // // // //             display: none;
// // // // // // // // // //           }
// // // // // // // // // //           .orb {
// // // // // // // // // //             filter: blur(70px);
// // // // // // // // // //           }
// // // // // // // // // //           .orb-1 {
// // // // // // // // // //             width: 300px;
// // // // // // // // // //             height: 300px;
// // // // // // // // // //           }
// // // // // // // // // //           .orb-2 {
// // // // // // // // // //             width: 280px;
// // // // // // // // // //             height: 280px;
// // // // // // // // // //           }

// // // // // // // // // //           .hero-title {
// // // // // // // // // //             font-size: 34px;
// // // // // // // // // //             letter-spacing: -1px;
// // // // // // // // // //             margin-bottom: 16px;
// // // // // // // // // //           }
// // // // // // // // // //           .title-underline {
// // // // // // // // // //             height: 8px;
// // // // // // // // // //             bottom: -4px;
// // // // // // // // // //           }

// // // // // // // // // //           .partners-row {
// // // // // // // // // //             margin: 20px 0 18px !important;
// // // // // // // // // //             gap: 10px !important;
// // // // // // // // // //           }
// // // // // // // // // //           .brand-usshape {
// // // // // // // // // //             font-size: 22px;
// // // // // // // // // //           }
// // // // // // // // // //           .brand-shsu {
// // // // // // // // // //             font-size: 18px;
// // // // // // // // // //           }
// // // // // // // // // //           .cross-mark {
// // // // // // // // // //             font-size: 22px;
// // // // // // // // // //           }

// // // // // // // // // //           .hero-desc {
// // // // // // // // // //             font-size: 14.5px;
// // // // // // // // // //             line-height: 1.65;
// // // // // // // // // //           }

// // // // // // // // // //           :global(.ppc-link) {
// // // // // // // // // //             padding: 1px 10px 1px 6px;
// // // // // // // // // //             font-size: 14px;
// // // // // // // // // //           }
// // // // // // // // // //           .ppc-icon {
// // // // // // // // // //             width: 16px;
// // // // // // // // // //             height: 16px;
// // // // // // // // // //           }

// // // // // // // // // //           :global(.btn-glow),
// // // // // // // // // //           :global(.btn-outline) {
// // // // // // // // // //             font-size: 13px;
// // // // // // // // // //             padding: 12px 20px;
// // // // // // // // // //             width: 100%;
// // // // // // // // // //             justify-content: center;
// // // // // // // // // //           }
// // // // // // // // // //           .arrow-wrap,
// // // // // // // // // //           .alumni-icon {
// // // // // // // // // //             width: 22px;
// // // // // // // // // //             height: 22px;
// // // // // // // // // //           }

// // // // // // // // // //           .visual-stack {
// // // // // // // // // //             margin-top: 36px;
// // // // // // // // // //             aspect-ratio: 4 / 3.2;
// // // // // // // // // //           }
// // // // // // // // // //           .card-main {
// // // // // // // // // //             border-radius: 20px;
// // // // // // // // // //           }
// // // // // // // // // //           .cap-title {
// // // // // // // // // //             font-size: 16px;
// // // // // // // // // //           }
// // // // // // // // // //           .cap-meta {
// // // // // // // // // //             font-size: 9px;
// // // // // // // // // //             letter-spacing: 2px;
// // // // // // // // // //           }
// // // // // // // // // //         }

// // // // // // // // // //         @media (max-width: 360px) {
// // // // // // // // // //           .hero-title {
// // // // // // // // // //             font-size: 28px;
// // // // // // // // // //           }
// // // // // // // // // //           .brand-usshape {
// // // // // // // // // //             font-size: 19px;
// // // // // // // // // //           }
// // // // // // // // // //           .brand-shsu {
// // // // // // // // // //             font-size: 16px;
// // // // // // // // // //           }
// // // // // // // // // //         }
// // // // // // // // // //       `}</style>
// // // // // // // // // //     </section>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // import Link from "next/link";

// // // // // // // // // export default function Hero() {
// // // // // // // // //   return (
// // // // // // // // //     <section className="hero-section position-relative overflow-hidden">
// // // // // // // // //       {/* subtle ambient glows */}
// // // // // // // // //       <span className="amb-glow amb-blue" />
// // // // // // // // //       <span className="amb-glow amb-orange" />

// // // // // // // // //       <div className="container position-relative" style={{ zIndex: 3 }}>
// // // // // // // // //         {/* ===== TOP TEXT ===== */}
// // // // // // // // //         <div className="text-center pt-5">
// // // // // // // // //           <div className="eyebrow d-inline-flex align-items-center gap-2 mb-4">
// // // // // // // // //             <span className="eb-dot" />
// // // // // // // // //             <span>Clinical Affiliation · Now Active</span>
// // // // // // // // //           </div>

// // // // // // // // //           <h1 className="hero-title">
// // // // // // // // //             A Landmark Affiliation in{" "}
// // // // // // // // //             <span className="title-accent">Clinical Education</span>
// // // // // // // // //           </h1>

// // // // // // // // //           <p className="hero-desc mx-auto">
// // // // // // // // //             <a
// // // // // // // // //               href="https://www.mypremierpain.com/"
// // // // // // // // //               target="_blank"
// // // // // // // // //               rel="noopener noreferrer"
// // // // // // // // //               className="ppc-link"
// // // // // // // // //             >
// // // // // // // // //               Premier Pain Centers
// // // // // // // // //             </a>{" "}
// // // // // // // // //             is now the official clinical rotation site for SHSU&apos;s College
// // // // // // // // //             of Osteopathic Medicine — pairing students with credentialed
// // // // // // // // //             preceptors in a live patient-care environment.
// // // // // // // // //           </p>
// // // // // // // // //         </div>

// // // // // // // // //         {/* ===== PARTNERSHIP BANNER ===== */}
// // // // // // // // //         <div className="banner-wrap position-relative mt-5">
// // // // // // // // //           {/* corner accents */}
// // // // // // // // //           <span className="corner c-tl" />
// // // // // // // // //           <span className="corner c-tr" />
// // // // // // // // //           <span className="corner c-bl" />
// // // // // // // // //           <span className="corner c-br" />

// // // // // // // // //           {/* floating tags */}
// // // // // // // // //           <div className="float-tag tag-left d-none d-md-flex">
// // // // // // // // //             <span className="tag-dot tag-dot-blue" />
// // // // // // // // //             <span>Clinical Site</span>
// // // // // // // // //           </div>
// // // // // // // // //           <div className="float-tag tag-right d-none d-md-flex">
// // // // // // // // //             <span>Academic Partner</span>
// // // // // // // // //             <span className="tag-dot tag-dot-orange" />
// // // // // // // // //           </div>

// // // // // // // // //           {/* the image */}
// // // // // // // // //           <div className="banner-image">
// // // // // // // // //             <img
// // // // // // // // //               src="/images/1.png"
// // // // // // // // //               alt="US SHAPE — Premier Pain Centers × Sam Houston State University Partnership"
// // // // // // // // //               className="banner-img"
// // // // // // // // //             />
// // // // // // // // //           </div>

// // // // // // // // //           {/* caption ribbon under image */}
// // // // // // // // //           <div className="caption-ribbon d-flex justify-content-center">
// // // // // // // // //             <div className="ribbon-inner d-inline-flex align-items-center gap-3">
// // // // // // // // //               <span className="conn-dot conn-blue" />
// // // // // // // // //               <span className="conn-text">
// // // // // // // // //                 A Partnership Built for the Next Generation of Physicians
// // // // // // // // //               </span>
// // // // // // // // //               <span className="conn-dot conn-orange" />
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* ===== CTAs ===== */}
// // // // // // // // //         <div className="d-flex justify-content-center flex-wrap align-items-center gap-3 mt-5 pb-5">
// // // // // // // // //           <Link
// // // // // // // // //             href="/externship-application-form"
// // // // // // // // //             className="btn-glow d-inline-flex align-items-center gap-2"
// // // // // // // // //           >
// // // // // // // // //             Apply for Externship
// // // // // // // // //             <span className="arrow-wrap">
// // // // // // // // //               <svg
// // // // // // // // //                 width="14"
// // // // // // // // //                 height="14"
// // // // // // // // //                 viewBox="0 0 24 24"
// // // // // // // // //                 fill="none"
// // // // // // // // //                 stroke="currentColor"
// // // // // // // // //                 strokeWidth="3"
// // // // // // // // //                 strokeLinecap="round"
// // // // // // // // //               >
// // // // // // // // //                 <path d="M5 12h14M13 5l7 7-7 7" />
// // // // // // // // //               </svg>
// // // // // // // // //             </span>
// // // // // // // // //           </Link>

// // // // // // // // //           <Link
// // // // // // // // //             href="/alumni"
// // // // // // // // //             className="btn-outline d-inline-flex align-items-center gap-2"
// // // // // // // // //           >
// // // // // // // // //             <span className="alumni-icon">
// // // // // // // // //               <svg
// // // // // // // // //                 width="14"
// // // // // // // // //                 height="14"
// // // // // // // // //                 viewBox="0 0 24 24"
// // // // // // // // //                 fill="none"
// // // // // // // // //                 stroke="currentColor"
// // // // // // // // //                 strokeWidth="2.5"
// // // // // // // // //                 strokeLinecap="round"
// // // // // // // // //                 strokeLinejoin="round"
// // // // // // // // //               >
// // // // // // // // //                 <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
// // // // // // // // //                 <path d="M6 12v5c3 3 9 3 12 0v-5" />
// // // // // // // // //               </svg>
// // // // // // // // //             </span>
// // // // // // // // //             Our Alumni
// // // // // // // // //             <span className="alumni-arrow">→</span>
// // // // // // // // //           </Link>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       <style jsx>{`
// // // // // // // // //         .hero-section {
// // // // // // // // //           background: radial-gradient(ellipse at top, #fff 0%, #f6f9ff 100%);
// // // // // // // // //           min-height: 100vh;
// // // // // // // // //           color: #0a2756;
// // // // // // // // //         }

// // // // // // // // //         /* ambient bg glows */
// // // // // // // // //         .amb-glow {
// // // // // // // // //           position: absolute;
// // // // // // // // //           width: 600px;
// // // // // // // // //           height: 600px;
// // // // // // // // //           border-radius: 50%;
// // // // // // // // //           filter: blur(100px);
// // // // // // // // //           pointer-events: none;
// // // // // // // // //           z-index: 1;
// // // // // // // // //         }
// // // // // // // // //         .amb-blue {
// // // // // // // // //           top: 30%;
// // // // // // // // //           left: -200px;
// // // // // // // // //           background: radial-gradient(
// // // // // // // // //             circle,
// // // // // // // // //             rgba(59, 130, 246, 0.18),
// // // // // // // // //             transparent 65%
// // // // // // // // //           );
// // // // // // // // //           animation: ambFloat 8s ease-in-out infinite;
// // // // // // // // //         }
// // // // // // // // //         .amb-orange {
// // // // // // // // //           top: 30%;
// // // // // // // // //           right: -200px;
// // // // // // // // //           background: radial-gradient(
// // // // // // // // //             circle,
// // // // // // // // //             rgba(243, 111, 33, 0.18),
// // // // // // // // //             transparent 65%
// // // // // // // // //           );
// // // // // // // // //           animation: ambFloat 8s ease-in-out infinite reverse;
// // // // // // // // //         }
// // // // // // // // //         @keyframes ambFloat {
// // // // // // // // //           0%,
// // // // // // // // //           100% {
// // // // // // // // //             transform: translateY(0) scale(1);
// // // // // // // // //           }
// // // // // // // // //           50% {
// // // // // // // // //             transform: translateY(-30px) scale(1.05);
// // // // // // // // //           }
// // // // // // // // //         }

// // // // // // // // //         /* ===== Top text ===== */
// // // // // // // // //         .eyebrow {
// // // // // // // // //           background: #fff;
// // // // // // // // //           border: 1px solid rgba(10, 39, 86, 0.12);
// // // // // // // // //           padding: 7px 16px 7px 10px;
// // // // // // // // //           border-radius: 50px;
// // // // // // // // //           box-shadow: 0 4px 14px rgba(10, 39, 86, 0.06);
// // // // // // // // //           font-size: 11.5px;
// // // // // // // // //           font-weight: 700;
// // // // // // // // //           letter-spacing: 2.5px;
// // // // // // // // //           text-transform: uppercase;
// // // // // // // // //           color: #0a2756;
// // // // // // // // //         }
// // // // // // // // //         .eb-dot {
// // // // // // // // //           width: 8px;
// // // // // // // // //           height: 8px;
// // // // // // // // //           background: #f36f21;
// // // // // // // // //           border-radius: 50%;
// // // // // // // // //           box-shadow: 0 0 0 4px rgba(243, 111, 33, 0.2);
// // // // // // // // //           animation: ebPulse 1.6s infinite;
// // // // // // // // //         }
// // // // // // // // //         @keyframes ebPulse {
// // // // // // // // //           0%,
// // // // // // // // //           100% {
// // // // // // // // //             box-shadow: 0 0 0 4px rgba(243, 111, 33, 0.2);
// // // // // // // // //           }
// // // // // // // // //           50% {
// // // // // // // // //             box-shadow: 0 0 0 9px rgba(243, 111, 33, 0.05);
// // // // // // // // //           }
// // // // // // // // //         }

// // // // // // // // //         .hero-title {
// // // // // // // // //           font-family: "Merriweather", Georgia, serif;
// // // // // // // // //           font-size: 52px;
// // // // // // // // //           font-weight: 900;
// // // // // // // // //           line-height: 1.1;
// // // // // // // // //           letter-spacing: -1.5px;
// // // // // // // // //           color: #0a2756;
// // // // // // // // //           margin: 0 auto 20px;
// // // // // // // // //           max-width: 820px;
// // // // // // // // //         }
// // // // // // // // //         .title-accent {
// // // // // // // // //           background: linear-gradient(135deg, #e63946 0%, #f36f21 100%);
// // // // // // // // //           -webkit-background-clip: text;
// // // // // // // // //           background-clip: text;
// // // // // // // // //           -webkit-text-fill-color: transparent;
// // // // // // // // //           font-style: italic;
// // // // // // // // //         }

// // // // // // // // //         .hero-desc {
// // // // // // // // //           font-size: 17px;
// // // // // // // // //           line-height: 1.7;
// // // // // // // // //           color: #4a5568;
// // // // // // // // //           max-width: 660px;
// // // // // // // // //           margin: 0 auto;
// // // // // // // // //         }

// // // // // // // // //         :global(.ppc-link) {
// // // // // // // // //           display: inline;
// // // // // // // // //           color: #0a2756 !important;
// // // // // // // // //           font-weight: 800;
// // // // // // // // //           padding: 1px 8px;
// // // // // // // // //           border-radius: 4px;
// // // // // // // // //           background: linear-gradient(
// // // // // // // // //             120deg,
// // // // // // // // //             rgba(230, 57, 70, 0.12),
// // // // // // // // //             rgba(243, 111, 33, 0.12)
// // // // // // // // //           );
// // // // // // // // //           text-decoration: none;
// // // // // // // // //           border-bottom: 2px solid #e63946;
// // // // // // // // //           transition: all 0.3s ease;
// // // // // // // // //         }
// // // // // // // // //         :global(.ppc-link:hover) {
// // // // // // // // //           background: linear-gradient(120deg, #e63946, #f36f21);
// // // // // // // // //           color: #fff !important;
// // // // // // // // //           border-bottom-color: #fff;
// // // // // // // // //         }

// // // // // // // // //         /* ===== BANNER ===== */
// // // // // // // // //         .banner-wrap {
// // // // // // // // //           max-width: 1100px;
// // // // // // // // //           margin: 0 auto;
// // // // // // // // //         }

// // // // // // // // //         /* corner accents */
// // // // // // // // //         .corner {
// // // // // // // // //           position: absolute;
// // // // // // // // //           width: 36px;
// // // // // // // // //           height: 36px;
// // // // // // // // //           border: 2px solid;
// // // // // // // // //           z-index: 4;
// // // // // // // // //           pointer-events: none;
// // // // // // // // //         }
// // // // // // // // //         .c-tl {
// // // // // // // // //           top: -8px;
// // // // // // // // //           left: -8px;
// // // // // // // // //           border-color: #3b82f6;
// // // // // // // // //           border-right: none;
// // // // // // // // //           border-bottom: none;
// // // // // // // // //         }
// // // // // // // // //         .c-tr {
// // // // // // // // //           top: -8px;
// // // // // // // // //           right: -8px;
// // // // // // // // //           border-color: #f36f21;
// // // // // // // // //           border-left: none;
// // // // // // // // //           border-bottom: none;
// // // // // // // // //         }
// // // // // // // // //         .c-bl {
// // // // // // // // //           bottom: -8px;
// // // // // // // // //           left: -8px;
// // // // // // // // //           border-color: #3b82f6;
// // // // // // // // //           border-right: none;
// // // // // // // // //           border-top: none;
// // // // // // // // //         }
// // // // // // // // //         .c-br {
// // // // // // // // //           bottom: -8px;
// // // // // // // // //           right: -8px;
// // // // // // // // //           border-color: #f36f21;
// // // // // // // // //           border-left: none;
// // // // // // // // //           border-top: none;
// // // // // // // // //         }

// // // // // // // // //         /* floating tags */
// // // // // // // // //         .float-tag {
// // // // // // // // //           position: absolute;
// // // // // // // // //           top: -16px;
// // // // // // // // //           background: #fff;
// // // // // // // // //           padding: 8px 16px;
// // // // // // // // //           border-radius: 50px;
// // // // // // // // //           font-size: 11px;
// // // // // // // // //           font-weight: 800;
// // // // // // // // //           letter-spacing: 2px;
// // // // // // // // //           text-transform: uppercase;
// // // // // // // // //           color: #0a2756;
// // // // // // // // //           box-shadow: 0 8px 20px rgba(10, 39, 86, 0.12);
// // // // // // // // //           z-index: 5;
// // // // // // // // //           align-items: center;
// // // // // // // // //           gap: 8px;
// // // // // // // // //         }
// // // // // // // // //         .tag-left {
// // // // // // // // //           left: 30px;
// // // // // // // // //         }
// // // // // // // // //         .tag-right {
// // // // // // // // //           right: 30px;
// // // // // // // // //         }
// // // // // // // // //         .tag-dot {
// // // // // // // // //           width: 7px;
// // // // // // // // //           height: 7px;
// // // // // // // // //           border-radius: 50%;
// // // // // // // // //         }
// // // // // // // // //         .tag-dot-blue {
// // // // // // // // //           background: #3b82f6;
// // // // // // // // //           box-shadow: 0 0 8px #3b82f6;
// // // // // // // // //         }
// // // // // // // // //         .tag-dot-orange {
// // // // // // // // //           background: #f36f21;
// // // // // // // // //           box-shadow: 0 0 8px #f36f21;
// // // // // // // // //         }

// // // // // // // // //         /* banner image container */
// // // // // // // // //         .banner-image {
// // // // // // // // //           position: relative;
// // // // // // // // //           border-radius: 20px;
// // // // // // // // //           overflow: hidden;
// // // // // // // // //           background: #fff;
// // // // // // // // //           box-shadow:
// // // // // // // // //             0 30px 70px rgba(10, 39, 86, 0.12),
// // // // // // // // //             0 0 0 1px rgba(10, 39, 86, 0.04);
// // // // // // // // //         }
// // // // // // // // //         .banner-img {
// // // // // // // // //           width: 100%;
// // // // // // // // //           height: auto;
// // // // // // // // //           display: block;
// // // // // // // // //         }

// // // // // // // // //         /* caption ribbon under image */
// // // // // // // // //         .caption-ribbon {
// // // // // // // // //           position: relative;
// // // // // // // // //           margin-top: -22px;
// // // // // // // // //           z-index: 6;
// // // // // // // // //         }
// // // // // // // // //         .ribbon-inner {
// // // // // // // // //           background: #fff;
// // // // // // // // //           padding: 11px 24px;
// // // // // // // // //           border-radius: 50px;
// // // // // // // // //           box-shadow: 0 12px 30px rgba(10, 39, 86, 0.15);
// // // // // // // // //           border: 1px solid rgba(10, 39, 86, 0.08);
// // // // // // // // //         }
// // // // // // // // //         .conn-dot {
// // // // // // // // //           width: 7px;
// // // // // // // // //           height: 7px;
// // // // // // // // //           border-radius: 50%;
// // // // // // // // //         }
// // // // // // // // //         .conn-blue {
// // // // // // // // //           background: #3b82f6;
// // // // // // // // //           box-shadow: 0 0 10px #3b82f6;
// // // // // // // // //         }
// // // // // // // // //         .conn-orange {
// // // // // // // // //           background: #f36f21;
// // // // // // // // //           box-shadow: 0 0 10px #f36f21;
// // // // // // // // //         }
// // // // // // // // //         .conn-text {
// // // // // // // // //           font-size: 12px;
// // // // // // // // //           font-weight: 700;
// // // // // // // // //           letter-spacing: 1.5px;
// // // // // // // // //           text-transform: uppercase;
// // // // // // // // //           color: #0a2756;
// // // // // // // // //         }

// // // // // // // // //         /* ===== Buttons ===== */
// // // // // // // // //         :global(.btn-glow) {
// // // // // // // // //           background: linear-gradient(135deg, #e63946, #c92e3a);
// // // // // // // // //           color: #fff !important;
// // // // // // // // //           font-size: 15px;
// // // // // // // // //           font-weight: 700;
// // // // // // // // //           padding: 14px 28px;
// // // // // // // // //           border-radius: 60px;
// // // // // // // // //           text-decoration: none;
// // // // // // // // //           box-shadow: 0 12px 32px rgba(230, 57, 70, 0.4);
// // // // // // // // //           transition: all 0.3s ease;
// // // // // // // // //         }
// // // // // // // // //         :global(.btn-glow:hover) {
// // // // // // // // //           transform: translateY(-2px);
// // // // // // // // //           box-shadow: 0 16px 40px rgba(230, 57, 70, 0.55);
// // // // // // // // //         }
// // // // // // // // //         :global(.btn-glow:hover .arrow-wrap) {
// // // // // // // // //           background: #fff;
// // // // // // // // //           color: #e63946;
// // // // // // // // //         }
// // // // // // // // //         .arrow-wrap {
// // // // // // // // //           width: 26px;
// // // // // // // // //           height: 26px;
// // // // // // // // //           border-radius: 50%;
// // // // // // // // //           background: rgba(255, 255, 255, 0.25);
// // // // // // // // //           display: inline-flex;
// // // // // // // // //           align-items: center;
// // // // // // // // //           justify-content: center;
// // // // // // // // //           transition: all 0.3s ease;
// // // // // // // // //         }

// // // // // // // // //         :global(.btn-outline) {
// // // // // // // // //           background: #fff;
// // // // // // // // //           color: #0a2756 !important;
// // // // // // // // //           font-size: 15px;
// // // // // // // // //           font-weight: 700;
// // // // // // // // //           padding: 13px 24px;
// // // // // // // // //           border-radius: 60px;
// // // // // // // // //           border: 1.5px solid rgba(10, 39, 86, 0.18);
// // // // // // // // //           text-decoration: none;
// // // // // // // // //           transition: all 0.3s ease;
// // // // // // // // //           box-shadow: 0 6px 18px rgba(10, 39, 86, 0.06);
// // // // // // // // //         }
// // // // // // // // //         :global(.btn-outline:hover) {
// // // // // // // // //           border-color: #f36f21;
// // // // // // // // //           color: #f36f21 !important;
// // // // // // // // //           transform: translateY(-2px);
// // // // // // // // //           box-shadow: 0 12px 28px rgba(243, 111, 33, 0.2);
// // // // // // // // //         }
// // // // // // // // //         :global(.btn-outline:hover .alumni-icon) {
// // // // // // // // //           background: #f36f21;
// // // // // // // // //           color: #fff;
// // // // // // // // //           border-color: #f36f21;
// // // // // // // // //         }
// // // // // // // // //         :global(.btn-outline:hover .alumni-arrow) {
// // // // // // // // //           transform: translateX(4px);
// // // // // // // // //         }
// // // // // // // // //         .alumni-icon {
// // // // // // // // //           width: 26px;
// // // // // // // // //           height: 26px;
// // // // // // // // //           border-radius: 50%;
// // // // // // // // //           background: rgba(243, 111, 33, 0.12);
// // // // // // // // //           border: 1px solid rgba(243, 111, 33, 0.3);
// // // // // // // // //           color: #f36f21;
// // // // // // // // //           display: inline-flex;
// // // // // // // // //           align-items: center;
// // // // // // // // //           justify-content: center;
// // // // // // // // //           transition: all 0.3s ease;
// // // // // // // // //         }
// // // // // // // // //         .alumni-arrow {
// // // // // // // // //           transition: transform 0.3s ease;
// // // // // // // // //         }

// // // // // // // // //         /* ===== RESPONSIVE ===== */
// // // // // // // // //         @media (max-width: 991px) {
// // // // // // // // //           .hero-title {
// // // // // // // // //             font-size: 38px;
// // // // // // // // //           }
// // // // // // // // //           .float-tag {
// // // // // // // // //             top: -12px;
// // // // // // // // //             padding: 6px 12px;
// // // // // // // // //             font-size: 10px;
// // // // // // // // //             letter-spacing: 1.5px;
// // // // // // // // //           }
// // // // // // // // //           .tag-left {
// // // // // // // // //             left: 15px;
// // // // // // // // //           }
// // // // // // // // //           .tag-right {
// // // // // // // // //             right: 15px;
// // // // // // // // //           }
// // // // // // // // //         }

// // // // // // // // //         @media (max-width: 576px) {
// // // // // // // // //           .amb-glow {
// // // // // // // // //             width: 400px;
// // // // // // // // //             height: 400px;
// // // // // // // // //             filter: blur(70px);
// // // // // // // // //           }
// // // // // // // // //           .amb-blue {
// // // // // // // // //             left: -150px;
// // // // // // // // //           }
// // // // // // // // //           .amb-orange {
// // // // // // // // //             right: -150px;
// // // // // // // // //           }

// // // // // // // // //           .eyebrow {
// // // // // // // // //             font-size: 9.5px;
// // // // // // // // //             letter-spacing: 1.5px;
// // // // // // // // //             padding: 5px 12px 5px 8px;
// // // // // // // // //           }

// // // // // // // // //           .hero-title {
// // // // // // // // //             font-size: 26px;
// // // // // // // // //             letter-spacing: -0.5px;
// // // // // // // // //           }
// // // // // // // // //           .hero-desc {
// // // // // // // // //             font-size: 13.5px;
// // // // // // // // //             line-height: 1.6;
// // // // // // // // //           }

// // // // // // // // //           :global(.ppc-link) {
// // // // // // // // //             padding: 1px 6px;
// // // // // // // // //           }

// // // // // // // // //           .corner {
// // // // // // // // //             width: 24px;
// // // // // // // // //             height: 24px;
// // // // // // // // //           }
// // // // // // // // //           .banner-image {
// // // // // // // // //             border-radius: 14px;
// // // // // // // // //           }

// // // // // // // // //           .ribbon-inner {
// // // // // // // // //             padding: 9px 16px;
// // // // // // // // //             gap: 8px !important;
// // // // // // // // //           }
// // // // // // // // //           .conn-text {
// // // // // // // // //             font-size: 9.5px;
// // // // // // // // //             letter-spacing: 1px;
// // // // // // // // //             max-width: 200px;
// // // // // // // // //             line-height: 1.4;
// // // // // // // // //           }

// // // // // // // // //           :global(.btn-glow),
// // // // // // // // //           :global(.btn-outline) {
// // // // // // // // //             font-size: 13px;
// // // // // // // // //             padding: 11px 20px;
// // // // // // // // //             width: 100%;
// // // // // // // // //             justify-content: center;
// // // // // // // // //           }
// // // // // // // // //           .arrow-wrap,
// // // // // // // // //           .alumni-icon {
// // // // // // // // //             width: 22px;
// // // // // // // // //             height: 22px;
// // // // // // // // //           }
// // // // // // // // //         }
// // // // // // // // //       `}</style>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // import Link from "next/link";

// // // // // // // // export default function Hero() {
// // // // // // // //   return (
// // // // // // // //     <section className="hero-section position-relative overflow-hidden">
// // // // // // // //       {/* full background image */}
// // // // // // // //       <div className="bg-image" />

// // // // // // // //       {/* gradient overlays for readability */}
// // // // // // // //       <div className="overlay-top" />
// // // // // // // //       <div className="overlay-bottom" />

// // // // // // // //       {/* decorative ambient glows */}
// // // // // // // //       <span className="amb-glow amb-blue" />
// // // // // // // //       <span className="amb-glow amb-orange" />

// // // // // // // //       {/* sparkles */}
// // // // // // // //       <span className="sparkle s1" />
// // // // // // // //       <span className="sparkle s2" />
// // // // // // // //       <span className="sparkle s3" />
// // // // // // // //       <span className="sparkle s4" />

// // // // // // // //       {/* corner accents */}
// // // // // // // //       <span className="corner c-tl" />
// // // // // // // //       <span className="corner c-tr" />
// // // // // // // //       <span className="corner c-bl" />
// // // // // // // //       <span className="corner c-br" />

// // // // // // // //       <div className="container position-relative h-100" style={{ zIndex: 5 }}>
// // // // // // // //         <div className="hero-grid d-flex flex-column">
// // // // // // // //           {/* ===== TOP — text content ===== */}
// // // // // // // //           <div className="top-zone text-center pt-5">
// // // // // // // //             <div className="eyebrow d-inline-flex align-items-center gap-2 mb-4">
// // // // // // // //               <span className="eb-dot" />
// // // // // // // //               <span>Clinical Affiliation · Now Active</span>
// // // // // // // //             </div>

// // // // // // // //             <h1 className="hero-title">
// // // // // // // //               A Landmark Affiliation in{" "}
// // // // // // // //               <span className="title-accent">Clinical Education</span>
// // // // // // // //             </h1>

// // // // // // // //             <p className="hero-desc mx-auto">
// // // // // // // //               <a
// // // // // // // //                 href="https://www.mypremierpain.com/"
// // // // // // // //                 target="_blank"
// // // // // // // //                 rel="noopener noreferrer"
// // // // // // // //                 className="ppc-link"
// // // // // // // //               >
// // // // // // // //                 Premier Pain Centers
// // // // // // // //               </a>{" "}
// // // // // // // //               is now the official clinical rotation site for SHSU&apos;s College
// // // // // // // //               of Osteopathic Medicine — pairing students with credentialed
// // // // // // // //               preceptors in a live patient-care environment.
// // // // // // // //             </p>
// // // // // // // //           </div>

// // // // // // // //           {/* ===== MIDDLE spacer (where image visual shows through) ===== */}
// // // // // // // //           <div className="mid-zone flex-grow-1" />

// // // // // // // //           {/* ===== BOTTOM — partner badges + CTAs ===== */}
// // // // // // // //           <div className="bottom-zone pb-5">
// // // // // // // //             {/* partner badges */}
// // // // // // // //             <div className="d-flex justify-content-center mb-4 d-none d-md-flex">
// // // // // // // //               <div className="partner-bar d-inline-flex align-items-center gap-3">
// // // // // // // //                 <span className="pb-tag pb-blue">
// // // // // // // //                   <span className="pb-dot pb-dot-blue" />
// // // // // // // //                   Clinical Site
// // // // // // // //                 </span>
// // // // // // // //                 <span className="pb-divider" />
// // // // // // // //                 <span className="pb-text">
// // // // // // // //                   A Partnership Built for the Next Generation
// // // // // // // //                 </span>
// // // // // // // //                 <span className="pb-divider" />
// // // // // // // //                 <span className="pb-tag pb-orange">
// // // // // // // //                   Academic Partner
// // // // // // // //                   <span className="pb-dot pb-dot-orange" />
// // // // // // // //                 </span>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             {/* CTAs */}
// // // // // // // //             <div className="d-flex justify-content-center flex-wrap align-items-center gap-3">
// // // // // // // //               <Link
// // // // // // // //                 href="/externship-application-form"
// // // // // // // //                 className="btn-glow d-inline-flex align-items-center gap-2"
// // // // // // // //               >
// // // // // // // //                 Apply for Externship
// // // // // // // //                 <span className="arrow-wrap">
// // // // // // // //                   <svg
// // // // // // // //                     width="14"
// // // // // // // //                     height="14"
// // // // // // // //                     viewBox="0 0 24 24"
// // // // // // // //                     fill="none"
// // // // // // // //                     stroke="currentColor"
// // // // // // // //                     strokeWidth="3"
// // // // // // // //                     strokeLinecap="round"
// // // // // // // //                   >
// // // // // // // //                     <path d="M5 12h14M13 5l7 7-7 7" />
// // // // // // // //                   </svg>
// // // // // // // //                 </span>
// // // // // // // //               </Link>

// // // // // // // //               <Link
// // // // // // // //                 href="/alumni"
// // // // // // // //                 className="btn-outline d-inline-flex align-items-center gap-2"
// // // // // // // //               >
// // // // // // // //                 <span className="alumni-icon">
// // // // // // // //                   <svg
// // // // // // // //                     width="14"
// // // // // // // //                     height="14"
// // // // // // // //                     viewBox="0 0 24 24"
// // // // // // // //                     fill="none"
// // // // // // // //                     stroke="currentColor"
// // // // // // // //                     strokeWidth="2.5"
// // // // // // // //                     strokeLinecap="round"
// // // // // // // //                     strokeLinejoin="round"
// // // // // // // //                   >
// // // // // // // //                     <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
// // // // // // // //                     <path d="M6 12v5c3 3 9 3 12 0v-5" />
// // // // // // // //                   </svg>
// // // // // // // //                 </span>
// // // // // // // //                 Our Alumni
// // // // // // // //                 <span className="alumni-arrow">→</span>
// // // // // // // //               </Link>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       <style jsx>{`
// // // // // // // //         .hero-section {
// // // // // // // //           min-height: 100vh;
// // // // // // // //           color: #0a2756;
// // // // // // // //           background: #fff;
// // // // // // // //         }
// // // // // // // //         .hero-grid {
// // // // // // // //           min-height: 100vh;
// // // // // // // //         }

// // // // // // // //         /* ===== FULL BG IMAGE ===== */
// // // // // // // //         .bg-image {
// // // // // // // //           position: absolute;
// // // // // // // //           inset: 0;
// // // // // // // //           background-image: url("/images/1.png");
// // // // // // // //           background-size: cover;
// // // // // // // //           background-position: center;
// // // // // // // //           background-repeat: no-repeat;
// // // // // // // //           z-index: 1;
// // // // // // // //           animation: bgPulse 8s ease-in-out infinite;
// // // // // // // //         }
// // // // // // // //         @keyframes bgPulse {
// // // // // // // //           0%,
// // // // // // // //           100% {
// // // // // // // //             transform: scale(1);
// // // // // // // //           }
// // // // // // // //           50% {
// // // // // // // //             transform: scale(1.02);
// // // // // // // //           }
// // // // // // // //         }

// // // // // // // //         /* readability overlays */
// // // // // // // //         .overlay-top {
// // // // // // // //           position: absolute;
// // // // // // // //           top: 0;
// // // // // // // //           left: 0;
// // // // // // // //           right: 0;
// // // // // // // //           height: 50%;
// // // // // // // //           background: linear-gradient(
// // // // // // // //             180deg,
// // // // // // // //             rgba(255, 255, 255, 0.92) 0%,
// // // // // // // //             rgba(255, 255, 255, 0.55) 50%,
// // // // // // // //             rgba(255, 255, 255, 0) 100%
// // // // // // // //           );
// // // // // // // //           z-index: 2;
// // // // // // // //           pointer-events: none;
// // // // // // // //         }
// // // // // // // //         .overlay-bottom {
// // // // // // // //           position: absolute;
// // // // // // // //           bottom: 0;
// // // // // // // //           left: 0;
// // // // // // // //           right: 0;
// // // // // // // //           height: 35%;
// // // // // // // //           background: linear-gradient(
// // // // // // // //             0deg,
// // // // // // // //             rgba(255, 255, 255, 0.95) 0%,
// // // // // // // //             rgba(255, 255, 255, 0.6) 60%,
// // // // // // // //             rgba(255, 255, 255, 0) 100%
// // // // // // // //           );
// // // // // // // //           z-index: 2;
// // // // // // // //           pointer-events: none;
// // // // // // // //         }

// // // // // // // //         /* ambient bg glows */
// // // // // // // //         .amb-glow {
// // // // // // // //           position: absolute;
// // // // // // // //           width: 500px;
// // // // // // // //           height: 500px;
// // // // // // // //           border-radius: 50%;
// // // // // // // //           filter: blur(100px);
// // // // // // // //           pointer-events: none;
// // // // // // // //           z-index: 3;
// // // // // // // //         }
// // // // // // // //         .amb-blue {
// // // // // // // //           top: 50%;
// // // // // // // //           left: -200px;
// // // // // // // //           background: radial-gradient(
// // // // // // // //             circle,
// // // // // // // //             rgba(59, 130, 246, 0.2),
// // // // // // // //             transparent 65%
// // // // // // // //           );
// // // // // // // //           animation: ambFloat 8s ease-in-out infinite;
// // // // // // // //         }
// // // // // // // //         .amb-orange {
// // // // // // // //           top: 50%;
// // // // // // // //           right: -200px;
// // // // // // // //           background: radial-gradient(
// // // // // // // //             circle,
// // // // // // // //             rgba(243, 111, 33, 0.2),
// // // // // // // //             transparent 65%
// // // // // // // //           );
// // // // // // // //           animation: ambFloat 8s ease-in-out infinite reverse;
// // // // // // // //         }
// // // // // // // //         @keyframes ambFloat {
// // // // // // // //           0%,
// // // // // // // //           100% {
// // // // // // // //             transform: translateY(0) scale(1);
// // // // // // // //           }
// // // // // // // //           50% {
// // // // // // // //             transform: translateY(-30px) scale(1.05);
// // // // // // // //           }
// // // // // // // //         }

// // // // // // // //         /* sparkles */
// // // // // // // //         .sparkle {
// // // // // // // //           position: absolute;
// // // // // // // //           width: 5px;
// // // // // // // //           height: 5px;
// // // // // // // //           background: #fff;
// // // // // // // //           border-radius: 50%;
// // // // // // // //           box-shadow:
// // // // // // // //             0 0 10px #fff,
// // // // // // // //             0 0 18px rgba(243, 111, 33, 0.9);
// // // // // // // //           z-index: 4;
// // // // // // // //           animation: sparkleFloat 4s ease-in-out infinite;
// // // // // // // //         }
// // // // // // // //         .s1 {
// // // // // // // //           top: 38%;
// // // // // // // //           left: 20%;
// // // // // // // //           animation-delay: 0s;
// // // // // // // //         }
// // // // // // // //         .s2 {
// // // // // // // //           top: 55%;
// // // // // // // //           left: 50%;
// // // // // // // //           animation-delay: 1s;
// // // // // // // //           box-shadow:
// // // // // // // //             0 0 10px #fff,
// // // // // // // //             0 0 18px rgba(59, 130, 246, 0.9);
// // // // // // // //         }
// // // // // // // //         .s3 {
// // // // // // // //           top: 45%;
// // // // // // // //           left: 80%;
// // // // // // // //           animation-delay: 2s;
// // // // // // // //         }
// // // // // // // //         .s4 {
// // // // // // // //           top: 60%;
// // // // // // // //           left: 30%;
// // // // // // // //           animation-delay: 3s;
// // // // // // // //           box-shadow:
// // // // // // // //             0 0 10px #fff,
// // // // // // // //             0 0 18px rgba(59, 130, 246, 0.9);
// // // // // // // //         }
// // // // // // // //         @keyframes sparkleFloat {
// // // // // // // //           0%,
// // // // // // // //           100% {
// // // // // // // //             transform: translateY(0) scale(0);
// // // // // // // //             opacity: 0;
// // // // // // // //           }
// // // // // // // //           50% {
// // // // // // // //             transform: translateY(-25px) scale(1);
// // // // // // // //             opacity: 1;
// // // // // // // //           }
// // // // // // // //         }

// // // // // // // //         /* corner accents */
// // // // // // // //         .corner {
// // // // // // // //           position: absolute;
// // // // // // // //           width: 40px;
// // // // // // // //           height: 40px;
// // // // // // // //           border: 2px solid;
// // // // // // // //           z-index: 6;
// // // // // // // //           pointer-events: none;
// // // // // // // //         }
// // // // // // // //         .c-tl {
// // // // // // // //           top: 25px;
// // // // // // // //           left: 25px;
// // // // // // // //           border-color: #3b82f6;
// // // // // // // //           border-right: none;
// // // // // // // //           border-bottom: none;
// // // // // // // //         }
// // // // // // // //         .c-tr {
// // // // // // // //           top: 25px;
// // // // // // // //           right: 25px;
// // // // // // // //           border-color: #f36f21;
// // // // // // // //           border-left: none;
// // // // // // // //           border-bottom: none;
// // // // // // // //         }
// // // // // // // //         .c-bl {
// // // // // // // //           bottom: 25px;
// // // // // // // //           left: 25px;
// // // // // // // //           border-color: #3b82f6;
// // // // // // // //           border-right: none;
// // // // // // // //           border-top: none;
// // // // // // // //         }
// // // // // // // //         .c-br {
// // // // // // // //           bottom: 25px;
// // // // // // // //           right: 25px;
// // // // // // // //           border-color: #f36f21;
// // // // // // // //           border-left: none;
// // // // // // // //           border-top: none;
// // // // // // // //         }

// // // // // // // //         /* ===== TOP content ===== */
// // // // // // // //         .eyebrow {
// // // // // // // //           background: #fff;
// // // // // // // //           border: 1px solid rgba(10, 39, 86, 0.12);
// // // // // // // //           padding: 7px 16px 7px 10px;
// // // // // // // //           border-radius: 50px;
// // // // // // // //           box-shadow: 0 4px 14px rgba(10, 39, 86, 0.06);
// // // // // // // //           font-size: 11.5px;
// // // // // // // //           font-weight: 700;
// // // // // // // //           letter-spacing: 2.5px;
// // // // // // // //           text-transform: uppercase;
// // // // // // // //           color: #0a2756;
// // // // // // // //         }
// // // // // // // //         .eb-dot {
// // // // // // // //           width: 8px;
// // // // // // // //           height: 8px;
// // // // // // // //           background: #f36f21;
// // // // // // // //           border-radius: 50%;
// // // // // // // //           box-shadow: 0 0 0 4px rgba(243, 111, 33, 0.2);
// // // // // // // //           animation: ebPulse 1.6s infinite;
// // // // // // // //         }
// // // // // // // //         @keyframes ebPulse {
// // // // // // // //           0%,
// // // // // // // //           100% {
// // // // // // // //             box-shadow: 0 0 0 4px rgba(243, 111, 33, 0.2);
// // // // // // // //           }
// // // // // // // //           50% {
// // // // // // // //             box-shadow: 0 0 0 9px rgba(243, 111, 33, 0.05);
// // // // // // // //           }
// // // // // // // //         }

// // // // // // // //         .hero-title {
// // // // // // // //           font-family: "Merriweather", Georgia, serif;
// // // // // // // //           font-size: 56px;
// // // // // // // //           font-weight: 900;
// // // // // // // //           line-height: 1.08;
// // // // // // // //           letter-spacing: -1.5px;
// // // // // // // //           color: #0a2756;
// // // // // // // //           margin: 0 auto 20px;
// // // // // // // //           max-width: 860px;
// // // // // // // //           text-shadow: 0 2px 20px rgba(255, 255, 255, 0.5);
// // // // // // // //         }
// // // // // // // //         .title-accent {
// // // // // // // //           background: linear-gradient(135deg, #e63946 0%, #f36f21 100%);
// // // // // // // //           -webkit-background-clip: text;
// // // // // // // //           background-clip: text;
// // // // // // // //           -webkit-text-fill-color: transparent;
// // // // // // // //           font-style: italic;
// // // // // // // //         }

// // // // // // // //         .hero-desc {
// // // // // // // //           font-size: 17px;
// // // // // // // //           line-height: 1.7;
// // // // // // // //           color: #4a5568;
// // // // // // // //           max-width: 660px;
// // // // // // // //           margin: 0 auto;
// // // // // // // //           text-shadow: 0 1px 8px rgba(255, 255, 255, 0.8);
// // // // // // // //         }

// // // // // // // //         :global(.ppc-link) {
// // // // // // // //           display: inline;
// // // // // // // //           color: #0a2756 !important;
// // // // // // // //           font-weight: 800;
// // // // // // // //           padding: 1px 8px;
// // // // // // // //           border-radius: 4px;
// // // // // // // //           background: linear-gradient(
// // // // // // // //             120deg,
// // // // // // // //             rgba(230, 57, 70, 0.15),
// // // // // // // //             rgba(243, 111, 33, 0.15)
// // // // // // // //           );
// // // // // // // //           text-decoration: none;
// // // // // // // //           border-bottom: 2px solid #e63946;
// // // // // // // //           transition: all 0.3s ease;
// // // // // // // //         }
// // // // // // // //         :global(.ppc-link:hover) {
// // // // // // // //           background: linear-gradient(120deg, #e63946, #f36f21);
// // // // // // // //           color: #fff !important;
// // // // // // // //           border-bottom-color: #fff;
// // // // // // // //         }

// // // // // // // //         /* ===== BOTTOM zone ===== */
// // // // // // // //         .partner-bar {
// // // // // // // //           background: rgba(255, 255, 255, 0.95);
// // // // // // // //           backdrop-filter: blur(14px);
// // // // // // // //           padding: 10px 22px;
// // // // // // // //           border-radius: 50px;
// // // // // // // //           box-shadow: 0 10px 30px rgba(10, 39, 86, 0.12);
// // // // // // // //           border: 1px solid rgba(10, 39, 86, 0.08);
// // // // // // // //         }
// // // // // // // //         .pb-tag {
// // // // // // // //           display: inline-flex;
// // // // // // // //           align-items: center;
// // // // // // // //           gap: 8px;
// // // // // // // //           font-size: 11px;
// // // // // // // //           font-weight: 800;
// // // // // // // //           letter-spacing: 1.8px;
// // // // // // // //           text-transform: uppercase;
// // // // // // // //           color: #0a2756;
// // // // // // // //         }
// // // // // // // //         .pb-dot {
// // // // // // // //           width: 7px;
// // // // // // // //           height: 7px;
// // // // // // // //           border-radius: 50%;
// // // // // // // //         }
// // // // // // // //         .pb-dot-blue {
// // // // // // // //           background: #3b82f6;
// // // // // // // //           box-shadow: 0 0 10px #3b82f6;
// // // // // // // //         }
// // // // // // // //         .pb-dot-orange {
// // // // // // // //           background: #f36f21;
// // // // // // // //           box-shadow: 0 0 10px #f36f21;
// // // // // // // //         }
// // // // // // // //         .pb-divider {
// // // // // // // //           width: 1px;
// // // // // // // //           height: 16px;
// // // // // // // //           background: rgba(10, 39, 86, 0.15);
// // // // // // // //         }
// // // // // // // //         .pb-text {
// // // // // // // //           font-size: 12px;
// // // // // // // //           font-weight: 700;
// // // // // // // //           color: #4a5568;
// // // // // // // //           letter-spacing: 1px;
// // // // // // // //           text-transform: uppercase;
// // // // // // // //         }

// // // // // // // //         /* ===== Buttons ===== */
// // // // // // // //         :global(.btn-glow) {
// // // // // // // //           background: linear-gradient(135deg, #e63946, #c92e3a);
// // // // // // // //           color: #fff !important;
// // // // // // // //           font-size: 15px;
// // // // // // // //           font-weight: 700;
// // // // // // // //           padding: 14px 28px;
// // // // // // // //           border-radius: 60px;
// // // // // // // //           text-decoration: none;
// // // // // // // //           box-shadow: 0 12px 32px rgba(230, 57, 70, 0.45);
// // // // // // // //           transition: all 0.3s ease;
// // // // // // // //         }
// // // // // // // //         :global(.btn-glow:hover) {
// // // // // // // //           transform: translateY(-2px);
// // // // // // // //           box-shadow: 0 16px 40px rgba(230, 57, 70, 0.6);
// // // // // // // //         }
// // // // // // // //         :global(.btn-glow:hover .arrow-wrap) {
// // // // // // // //           background: #fff;
// // // // // // // //           color: #e63946;
// // // // // // // //         }
// // // // // // // //         .arrow-wrap {
// // // // // // // //           width: 26px;
// // // // // // // //           height: 26px;
// // // // // // // //           border-radius: 50%;
// // // // // // // //           background: rgba(255, 255, 255, 0.25);
// // // // // // // //           display: inline-flex;
// // // // // // // //           align-items: center;
// // // // // // // //           justify-content: center;
// // // // // // // //           transition: all 0.3s ease;
// // // // // // // //         }

// // // // // // // //         :global(.btn-outline) {
// // // // // // // //           background: rgba(255, 255, 255, 0.95);
// // // // // // // //           backdrop-filter: blur(10px);
// // // // // // // //           color: #0a2756 !important;
// // // // // // // //           font-size: 15px;
// // // // // // // //           font-weight: 700;
// // // // // // // //           padding: 13px 24px;
// // // // // // // //           border-radius: 60px;
// // // // // // // //           border: 1.5px solid rgba(10, 39, 86, 0.2);
// // // // // // // //           text-decoration: none;
// // // // // // // //           transition: all 0.3s ease;
// // // // // // // //           box-shadow: 0 6px 18px rgba(10, 39, 86, 0.1);
// // // // // // // //         }
// // // // // // // //         :global(.btn-outline:hover) {
// // // // // // // //           border-color: #f36f21;
// // // // // // // //           color: #f36f21 !important;
// // // // // // // //           transform: translateY(-2px);
// // // // // // // //           box-shadow: 0 12px 28px rgba(243, 111, 33, 0.25);
// // // // // // // //         }
// // // // // // // //         :global(.btn-outline:hover .alumni-icon) {
// // // // // // // //           background: #f36f21;
// // // // // // // //           color: #fff;
// // // // // // // //           border-color: #f36f21;
// // // // // // // //         }
// // // // // // // //         :global(.btn-outline:hover .alumni-arrow) {
// // // // // // // //           transform: translateX(4px);
// // // // // // // //         }
// // // // // // // //         .alumni-icon {
// // // // // // // //           width: 26px;
// // // // // // // //           height: 26px;
// // // // // // // //           border-radius: 50%;
// // // // // // // //           background: rgba(243, 111, 33, 0.12);
// // // // // // // //           border: 1px solid rgba(243, 111, 33, 0.3);
// // // // // // // //           color: #f36f21;
// // // // // // // //           display: inline-flex;
// // // // // // // //           align-items: center;
// // // // // // // //           justify-content: center;
// // // // // // // //           transition: all 0.3s ease;
// // // // // // // //         }
// // // // // // // //         .alumni-arrow {
// // // // // // // //           transition: transform 0.3s ease;
// // // // // // // //         }

// // // // // // // //         /* ===== RESPONSIVE ===== */
// // // // // // // //         @media (max-width: 991px) {
// // // // // // // //           .hero-title {
// // // // // // // //             font-size: 42px;
// // // // // // // //           }
// // // // // // // //           .corner {
// // // // // // // //             width: 28px;
// // // // // // // //             height: 28px;
// // // // // // // //             top: 15px;
// // // // // // // //             left: 15px;
// // // // // // // //           }
// // // // // // // //           .c-tr {
// // // // // // // //             top: 15px;
// // // // // // // //             right: 15px;
// // // // // // // //             left: auto;
// // // // // // // //           }
// // // // // // // //           .c-bl {
// // // // // // // //             bottom: 15px;
// // // // // // // //             left: 15px;
// // // // // // // //             top: auto;
// // // // // // // //           }
// // // // // // // //           .c-br {
// // // // // // // //             bottom: 15px;
// // // // // // // //             right: 15px;
// // // // // // // //             top: auto;
// // // // // // // //             left: auto;
// // // // // // // //           }
// // // // // // // //           .overlay-top {
// // // // // // // //             height: 45%;
// // // // // // // //           }
// // // // // // // //           .overlay-bottom {
// // // // // // // //             height: 40%;
// // // // // // // //           }
// // // // // // // //         }

// // // // // // // //         @media (max-width: 576px) {
// // // // // // // //           .hero-section {
// // // // // // // //             min-height: 90vh;
// // // // // // // //           }
// // // // // // // //           .hero-grid {
// // // // // // // //             min-height: 90vh;
// // // // // // // //           }
// // // // // // // //           .bg-image {
// // // // // // // //             background-size: cover;
// // // // // // // //             background-position: center 60%;
// // // // // // // //           }
// // // // // // // //           .overlay-top {
// // // // // // // //             height: 55%;
// // // // // // // //             background: linear-gradient(
// // // // // // // //               180deg,
// // // // // // // //               rgba(255, 255, 255, 0.97) 0%,
// // // // // // // //               rgba(255, 255, 255, 0.75) 50%,
// // // // // // // //               rgba(255, 255, 255, 0) 100%
// // // // // // // //             );
// // // // // // // //           }
// // // // // // // //           .overlay-bottom {
// // // // // // // //             height: 45%;
// // // // // // // //             background: linear-gradient(
// // // // // // // //               0deg,
// // // // // // // //               rgba(255, 255, 255, 0.97) 0%,
// // // // // // // //               rgba(255, 255, 255, 0.75) 50%,
// // // // // // // //               rgba(255, 255, 255, 0) 100%
// // // // // // // //             );
// // // // // // // //           }

// // // // // // // //           .amb-glow {
// // // // // // // //             width: 320px;
// // // // // // // //             height: 320px;
// // // // // // // //             filter: blur(70px);
// // // // // // // //           }
// // // // // // // //           .amb-blue {
// // // // // // // //             left: -120px;
// // // // // // // //           }
// // // // // // // //           .amb-orange {
// // // // // // // //             right: -120px;
// // // // // // // //           }

// // // // // // // //           .corner {
// // // // // // // //             width: 22px;
// // // // // // // //             height: 22px;
// // // // // // // //             top: 12px;
// // // // // // // //             left: 12px;
// // // // // // // //           }
// // // // // // // //           .c-tr {
// // // // // // // //             top: 12px;
// // // // // // // //             right: 12px;
// // // // // // // //             left: auto;
// // // // // // // //           }
// // // // // // // //           .c-bl {
// // // // // // // //             bottom: 12px;
// // // // // // // //             left: 12px;
// // // // // // // //             top: auto;
// // // // // // // //           }
// // // // // // // //           .c-br {
// // // // // // // //             bottom: 12px;
// // // // // // // //             right: 12px;
// // // // // // // //             top: auto;
// // // // // // // //             left: auto;
// // // // // // // //           }

// // // // // // // //           .eyebrow {
// // // // // // // //             font-size: 9.5px;
// // // // // // // //             letter-spacing: 1.5px;
// // // // // // // //             padding: 5px 12px 5px 8px;
// // // // // // // //           }

// // // // // // // //           .hero-title {
// // // // // // // //             font-size: 26px;
// // // // // // // //             letter-spacing: -0.5px;
// // // // // // // //           }
// // // // // // // //           .hero-desc {
// // // // // // // //             font-size: 13.5px;
// // // // // // // //             line-height: 1.6;
// // // // // // // //           }

// // // // // // // //           :global(.ppc-link) {
// // // // // // // //             padding: 1px 6px;
// // // // // // // //           }

// // // // // // // //           :global(.btn-glow),
// // // // // // // //           :global(.btn-outline) {
// // // // // // // //             font-size: 13px;
// // // // // // // //             padding: 11px 20px;
// // // // // // // //             width: 100%;
// // // // // // // //             justify-content: center;
// // // // // // // //           }
// // // // // // // //           .arrow-wrap,
// // // // // // // //           .alumni-icon {
// // // // // // // //             width: 22px;
// // // // // // // //             height: 22px;
// // // // // // // //           }
// // // // // // // //         }
// // // // // // // //       `}</style>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // import Link from "next/link";

// // // // // // // export default function Hero() {
// // // // // // //   return (
// // // // // // //     <section className="hero-section position-relative overflow-hidden">
// // // // // // //       {/* ============ DESKTOP LAYOUT ============ */}
// // // // // // //       <div className="desktop-only">
// // // // // // //         {/* TOP zone — image with centered card */}
// // // // // // //         <div className="image-zone position-relative">
// // // // // // //           {/* full background image */}
// // // // // // //           <div className="bg-image" />

// // // // // // //           {/* decorative ambient glows */}
// // // // // // //           <span className="amb-glow amb-blue" />
// // // // // // //           <span className="amb-glow amb-orange" />

// // // // // // //           {/* sparkles */}
// // // // // // //           <span className="sparkle s1" />
// // // // // // //           <span className="sparkle s2" />
// // // // // // //           <span className="sparkle s3" />
// // // // // // //           <span className="sparkle s4" />

// // // // // // //           {/* corner accents */}
// // // // // // //           <span className="corner c-tl" />
// // // // // // //           <span className="corner c-tr" />

// // // // // // //           <div
// // // // // // //             className="container position-relative h-100"
// // // // // // //             style={{ zIndex: 5 }}
// // // // // // //           >
// // // // // // //             <div className="d-flex flex-column justify-content-start align-items-center h-100 card-position">
// // // // // // //               {/* TOP content card — sits above handshake, between logos */}
// // // // // // //               <div className="content-card text-center">
// // // // // // //                 {/* top decorative accent */}
// // // // // // //                 <span className="card-tab" />

// // // // // // //                 <div className="eyebrow d-inline-flex align-items-center gap-2 mb-3">
// // // // // // //                   <span className="eb-dot" />
// // // // // // //                   <span>Clinical Affiliation · Now Active</span>
// // // // // // //                 </div>

// // // // // // //                 <h1 className="hero-title">
// // // // // // //                   A Landmark Affiliation in{" "}
// // // // // // //                   <span className="title-accent">Clinical Education</span>
// // // // // // //                 </h1>

// // // // // // //                 <p className="hero-desc mx-auto">
// // // // // // //                   <a
// // // // // // //                     href="https://www.mypremierpain.com/"
// // // // // // //                     target="_blank"
// // // // // // //                     rel="noopener noreferrer"
// // // // // // //                     className="ppc-link"
// // // // // // //                   >
// // // // // // //                     Premier Pain Centers
// // // // // // //                   </a>{" "}
// // // // // // //                   is now the official clinical rotation site for SHSU&apos;s
// // // // // // //                   College of Osteopathic Medicine — pairing students with
// // // // // // //                   credentialed preceptors.
// // // // // // //                 </p>

// // // // // // //                 {/* mini partner row inside card */}
// // // // // // //                 <div className="mini-partners d-flex justify-content-center align-items-center gap-3 mt-4">
// // // // // // //                   <span className="mp-tag">
// // // // // // //                     <span className="pb-dot pb-dot-blue" />
// // // // // // //                     Clinical Site
// // // // // // //                   </span>
// // // // // // //                   <span className="mp-divider" />
// // // // // // //                   <span className="mp-tag">
// // // // // // //                     Academic Partner
// // // // // // //                     <span className="pb-dot pb-dot-orange" />
// // // // // // //                   </span>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* BOTTOM zone — CTAs below image */}
// // // // // // //         <div className="cta-zone">
// // // // // // //           <div className="container">
// // // // // // //             <div className="d-flex justify-content-center flex-wrap align-items-center gap-3">
// // // // // // //               <Link
// // // // // // //                 href="/externship-application-form"
// // // // // // //                 className="btn-glow d-inline-flex align-items-center gap-2"
// // // // // // //               >
// // // // // // //                 Apply for Externship
// // // // // // //                 <span className="arrow-wrap">
// // // // // // //                   <svg
// // // // // // //                     width="14"
// // // // // // //                     height="14"
// // // // // // //                     viewBox="0 0 24 24"
// // // // // // //                     fill="none"
// // // // // // //                     stroke="currentColor"
// // // // // // //                     strokeWidth="3"
// // // // // // //                     strokeLinecap="round"
// // // // // // //                   >
// // // // // // //                     <path d="M5 12h14M13 5l7 7-7 7" />
// // // // // // //                   </svg>
// // // // // // //                 </span>
// // // // // // //               </Link>

// // // // // // //               <Link
// // // // // // //                 href="/alumni"
// // // // // // //                 className="btn-outline d-inline-flex align-items-center gap-2"
// // // // // // //               >
// // // // // // //                 <span className="alumni-icon">
// // // // // // //                   <svg
// // // // // // //                     width="14"
// // // // // // //                     height="14"
// // // // // // //                     viewBox="0 0 24 24"
// // // // // // //                     fill="none"
// // // // // // //                     stroke="currentColor"
// // // // // // //                     strokeWidth="2.5"
// // // // // // //                     strokeLinecap="round"
// // // // // // //                     strokeLinejoin="round"
// // // // // // //                   >
// // // // // // //                     <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
// // // // // // //                     <path d="M6 12v5c3 3 9 3 12 0v-5" />
// // // // // // //                   </svg>
// // // // // // //                 </span>
// // // // // // //                 Our Alumni
// // // // // // //                 <span className="alumni-arrow">→</span>
// // // // // // //               </Link>
// // // // // // //             </div>

// // // // // // //             {/* tagline */}
// // // // // // //             <p className="cta-tagline text-center mt-4 mb-0">
// // // // // // //               <span className="pb-dot pb-dot-blue" />
// // // // // // //               <span>
// // // // // // //                 A Partnership Built for the Next Generation of Physicians
// // // // // // //               </span>
// // // // // // //               <span className="pb-dot pb-dot-orange" />
// // // // // // //             </p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* ============ MOBILE LAYOUT ============ */}
// // // // // // //       <div className="mobile-only">
// // // // // // //         <div className="container">
// // // // // // //           {/* top text */}
// // // // // // //           <div className="text-center pt-4 pb-3">
// // // // // // //             <div className="eyebrow d-inline-flex align-items-center gap-2 mb-3">
// // // // // // //               <span className="eb-dot" />
// // // // // // //               <span>Clinical Affiliation · Now Active</span>
// // // // // // //             </div>

// // // // // // //             <h1 className="m-hero-title">
// // // // // // //               A Landmark Affiliation in{" "}
// // // // // // //               <span className="title-accent">Clinical Education</span>
// // // // // // //             </h1>

// // // // // // //             <p className="m-hero-desc">
// // // // // // //               <a
// // // // // // //                 href="https://www.mypremierpain.com/"
// // // // // // //                 target="_blank"
// // // // // // //                 rel="noopener noreferrer"
// // // // // // //                 className="ppc-link"
// // // // // // //               >
// // // // // // //                 Premier Pain Centers
// // // // // // //               </a>{" "}
// // // // // // //               is now the official clinical rotation site for SHSU&apos;s College
// // // // // // //               of Osteopathic Medicine.
// // // // // // //             </p>
// // // // // // //           </div>

// // // // // // //           {/* image */}
// // // // // // //           <div className="m-image-wrap">
// // // // // // //             <img
// // // // // // //               src="/images/partnership-banner.png"
// // // // // // //               alt="US SHAPE × Sam Houston State University Partnership"
// // // // // // //               className="m-image"
// // // // // // //             />
// // // // // // //             <span className="m-badge m-badge-left">
// // // // // // //               <span className="pb-dot pb-dot-blue" />
// // // // // // //               Clinical Site
// // // // // // //             </span>
// // // // // // //             <span className="m-badge m-badge-right">
// // // // // // //               Academic Partner
// // // // // // //               <span className="pb-dot pb-dot-orange" />
// // // // // // //             </span>
// // // // // // //           </div>

// // // // // // //           {/* CTAs */}
// // // // // // //           <div className="d-flex flex-column gap-2 mt-4 pb-4 px-2">
// // // // // // //             <Link
// // // // // // //               href="/externship-application-form"
// // // // // // //               className="btn-glow d-inline-flex align-items-center justify-content-center gap-2"
// // // // // // //             >
// // // // // // //               Apply for Externship
// // // // // // //               <span className="arrow-wrap">
// // // // // // //                 <svg
// // // // // // //                   width="14"
// // // // // // //                   height="14"
// // // // // // //                   viewBox="0 0 24 24"
// // // // // // //                   fill="none"
// // // // // // //                   stroke="currentColor"
// // // // // // //                   strokeWidth="3"
// // // // // // //                   strokeLinecap="round"
// // // // // // //                 >
// // // // // // //                   <path d="M5 12h14M13 5l7 7-7 7" />
// // // // // // //                 </svg>
// // // // // // //               </span>
// // // // // // //             </Link>

// // // // // // //             <Link
// // // // // // //               href="/alumni"
// // // // // // //               className="btn-outline d-inline-flex align-items-center justify-content-center gap-2"
// // // // // // //             >
// // // // // // //               <span className="alumni-icon">
// // // // // // //                 <svg
// // // // // // //                   width="14"
// // // // // // //                   height="14"
// // // // // // //                   viewBox="0 0 24 24"
// // // // // // //                   fill="none"
// // // // // // //                   stroke="currentColor"
// // // // // // //                   strokeWidth="2.5"
// // // // // // //                   strokeLinecap="round"
// // // // // // //                   strokeLinejoin="round"
// // // // // // //                 >
// // // // // // //                   <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
// // // // // // //                   <path d="M6 12v5c3 3 9 3 12 0v-5" />
// // // // // // //                 </svg>
// // // // // // //               </span>
// // // // // // //               Our Alumni
// // // // // // //               <span className="alumni-arrow">→</span>
// // // // // // //             </Link>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <style jsx>{`
// // // // // // //         .hero-section {
// // // // // // //           color: #0a2756;
// // // // // // //           background: #fff;
// // // // // // //           position: relative;
// // // // // // //         }

// // // // // // //         .desktop-only {
// // // // // // //           display: block;
// // // // // // //         }
// // // // // // //         .mobile-only {
// // // // // // //           display: none;
// // // // // // //         }
// // // // // // //         @media (max-width: 767px) {
// // // // // // //           .desktop-only {
// // // // // // //             display: none;
// // // // // // //           }
// // // // // // //           .mobile-only {
// // // // // // //             display: block;
// // // // // // //           }
// // // // // // //         }

// // // // // // //         /* =================================================
// // // // // // //            DESKTOP — TOP image zone
// // // // // // //            ================================================= */
// // // // // // //         .image-zone {
// // // // // // //           height: 92vh;
// // // // // // //           min-height: 720px;
// // // // // // //           overflow: hidden;
// // // // // // //         }
// // // // // // //         .card-position {
// // // // // // //           padding-top: 50px;
// // // // // // //         }
// // // // // // //         .bg-image {
// // // // // // //           position: absolute;
// // // // // // //           inset: 0;
// // // // // // //           background-image: url("/images/1.png");
// // // // // // //           background-size: cover;
// // // // // // //           background-position: center;
// // // // // // //           background-repeat: no-repeat;
// // // // // // //           z-index: 1;
// // // // // // //           animation: bgPulse 10s ease-in-out infinite;
// // // // // // //         }
// // // // // // //         @keyframes bgPulse {
// // // // // // //           0%,
// // // // // // //           100% {
// // // // // // //             transform: scale(1);
// // // // // // //           }
// // // // // // //           50% {
// // // // // // //             transform: scale(1.02);
// // // // // // //           }
// // // // // // //         }

// // // // // // //         /* ===== CONTENT CARD (centered over handshake) ===== */
// // // // // // //         .content-card {
// // // // // // //           background: rgba(255, 255, 255, 0.92);
// // // // // // //           backdrop-filter: blur(18px);
// // // // // // //           -webkit-backdrop-filter: blur(18px);
// // // // // // //           padding: 36px 44px 32px;
// // // // // // //           border-radius: 24px;
// // // // // // //           box-shadow:
// // // // // // //             0 30px 70px rgba(10, 39, 86, 0.18),
// // // // // // //             0 0 0 1px rgba(255, 255, 255, 0.5),
// // // // // // //             inset 0 1px 0 rgba(255, 255, 255, 1);
// // // // // // //           max-width: 660px;
// // // // // // //           width: 90%;
// // // // // // //           position: relative;
// // // // // // //           overflow: hidden;
// // // // // // //         }
// // // // // // //         /* gradient corner accent */
// // // // // // //         .content-card::before {
// // // // // // //           content: "";
// // // // // // //           position: absolute;
// // // // // // //           top: 0;
// // // // // // //           left: 0;
// // // // // // //           right: 0;
// // // // // // //           height: 4px;
// // // // // // //           background: linear-gradient(90deg, #3b82f6, #fff 50%, #f36f21);
// // // // // // //         }
// // // // // // //         /* watermark gradient overlay */
// // // // // // //         .content-card::after {
// // // // // // //           content: "";
// // // // // // //           position: absolute;
// // // // // // //           inset: 0;
// // // // // // //           background:
// // // // // // //             radial-gradient(
// // // // // // //               circle at 0% 0%,
// // // // // // //               rgba(59, 130, 246, 0.06),
// // // // // // //               transparent 40%
// // // // // // //             ),
// // // // // // //             radial-gradient(
// // // // // // //               circle at 100% 100%,
// // // // // // //               rgba(243, 111, 33, 0.06),
// // // // // // //               transparent 40%
// // // // // // //             );
// // // // // // //           pointer-events: none;
// // // // // // //         }
// // // // // // //         .card-tab {
// // // // // // //           position: absolute;
// // // // // // //           top: -1px;
// // // // // // //           left: 50%;
// // // // // // //           transform: translateX(-50%);
// // // // // // //           width: 80px;
// // // // // // //           height: 6px;
// // // // // // //           background: linear-gradient(90deg, #e63946, #f36f21);
// // // // // // //           border-radius: 0 0 4px 4px;
// // // // // // //           z-index: 2;
// // // // // // //         }

// // // // // // //         /* ambient glows */
// // // // // // //         .amb-glow {
// // // // // // //           position: absolute;
// // // // // // //           width: 500px;
// // // // // // //           height: 500px;
// // // // // // //           border-radius: 50%;
// // // // // // //           filter: blur(100px);
// // // // // // //           pointer-events: none;
// // // // // // //           z-index: 2;
// // // // // // //         }
// // // // // // //         .amb-blue {
// // // // // // //           top: 30%;
// // // // // // //           left: -200px;
// // // // // // //           background: radial-gradient(
// // // // // // //             circle,
// // // // // // //             rgba(59, 130, 246, 0.25),
// // // // // // //             transparent 65%
// // // // // // //           );
// // // // // // //           animation: ambFloat 8s ease-in-out infinite;
// // // // // // //         }
// // // // // // //         .amb-orange {
// // // // // // //           top: 30%;
// // // // // // //           right: -200px;
// // // // // // //           background: radial-gradient(
// // // // // // //             circle,
// // // // // // //             rgba(243, 111, 33, 0.25),
// // // // // // //             transparent 65%
// // // // // // //           );
// // // // // // //           animation: ambFloat 8s ease-in-out infinite reverse;
// // // // // // //         }
// // // // // // //         @keyframes ambFloat {
// // // // // // //           0%,
// // // // // // //           100% {
// // // // // // //             transform: translateY(0) scale(1);
// // // // // // //           }
// // // // // // //           50% {
// // // // // // //             transform: translateY(-30px) scale(1.05);
// // // // // // //           }
// // // // // // //         }

// // // // // // //         /* sparkles */
// // // // // // //         .sparkle {
// // // // // // //           position: absolute;
// // // // // // //           width: 5px;
// // // // // // //           height: 5px;
// // // // // // //           background: #fff;
// // // // // // //           border-radius: 50%;
// // // // // // //           box-shadow:
// // // // // // //             0 0 10px #fff,
// // // // // // //             0 0 18px rgba(243, 111, 33, 0.9);
// // // // // // //           z-index: 3;
// // // // // // //           animation: sparkleFloat 4s ease-in-out infinite;
// // // // // // //         }
// // // // // // //         .s1 {
// // // // // // //           top: 30%;
// // // // // // //           left: 12%;
// // // // // // //           animation-delay: 0s;
// // // // // // //         }
// // // // // // //         .s2 {
// // // // // // //           top: 60%;
// // // // // // //           left: 22%;
// // // // // // //           animation-delay: 1s;
// // // // // // //           box-shadow:
// // // // // // //             0 0 10px #fff,
// // // // // // //             0 0 18px rgba(59, 130, 246, 0.9);
// // // // // // //         }
// // // // // // //         .s3 {
// // // // // // //           top: 35%;
// // // // // // //           left: 85%;
// // // // // // //           animation-delay: 2s;
// // // // // // //         }
// // // // // // //         .s4 {
// // // // // // //           top: 70%;
// // // // // // //           left: 78%;
// // // // // // //           animation-delay: 3s;
// // // // // // //           box-shadow:
// // // // // // //             0 0 10px #fff,
// // // // // // //             0 0 18px rgba(59, 130, 246, 0.9);
// // // // // // //         }
// // // // // // //         @keyframes sparkleFloat {
// // // // // // //           0%,
// // // // // // //           100% {
// // // // // // //             transform: translateY(0) scale(0);
// // // // // // //             opacity: 0;
// // // // // // //           }
// // // // // // //           50% {
// // // // // // //             transform: translateY(-25px) scale(1);
// // // // // // //             opacity: 1;
// // // // // // //           }
// // // // // // //         }

// // // // // // //         /* corner accents */
// // // // // // //         .corner {
// // // // // // //           position: absolute;
// // // // // // //           width: 36px;
// // // // // // //           height: 36px;
// // // // // // //           border: 2px solid;
// // // // // // //           z-index: 4;
// // // // // // //           pointer-events: none;
// // // // // // //         }
// // // // // // //         .c-tl {
// // // // // // //           top: 25px;
// // // // // // //           left: 25px;
// // // // // // //           border-color: #3b82f6;
// // // // // // //           border-right: none;
// // // // // // //           border-bottom: none;
// // // // // // //         }
// // // // // // //         .c-tr {
// // // // // // //           top: 25px;
// // // // // // //           right: 25px;
// // // // // // //           border-color: #f36f21;
// // // // // // //           border-left: none;
// // // // // // //           border-bottom: none;
// // // // // // //         }

// // // // // // //         /* eyebrow */
// // // // // // //         .eyebrow {
// // // // // // //           background: #fff;
// // // // // // //           border: 1px solid rgba(10, 39, 86, 0.12);
// // // // // // //           padding: 7px 16px 7px 10px;
// // // // // // //           border-radius: 50px;
// // // // // // //           box-shadow: 0 4px 14px rgba(10, 39, 86, 0.06);
// // // // // // //           font-size: 11.5px;
// // // // // // //           font-weight: 700;
// // // // // // //           letter-spacing: 2.5px;
// // // // // // //           text-transform: uppercase;
// // // // // // //           color: #0a2756;
// // // // // // //           position: relative;
// // // // // // //           z-index: 1;
// // // // // // //         }
// // // // // // //         .eb-dot {
// // // // // // //           width: 8px;
// // // // // // //           height: 8px;
// // // // // // //           background: #f36f21;
// // // // // // //           border-radius: 50%;
// // // // // // //           box-shadow: 0 0 0 4px rgba(243, 111, 33, 0.2);
// // // // // // //           animation: ebPulse 1.6s infinite;
// // // // // // //         }
// // // // // // //         @keyframes ebPulse {
// // // // // // //           0%,
// // // // // // //           100% {
// // // // // // //             box-shadow: 0 0 0 4px rgba(243, 111, 33, 0.2);
// // // // // // //           }
// // // // // // //           50% {
// // // // // // //             box-shadow: 0 0 0 9px rgba(243, 111, 33, 0.05);
// // // // // // //           }
// // // // // // //         }

// // // // // // //         /* title */
// // // // // // //         .hero-title {
// // // // // // //           font-family: "Merriweather", Georgia, serif;
// // // // // // //           font-size: 42px;
// // // // // // //           font-weight: 900;
// // // // // // //           line-height: 1.12;
// // // // // // //           letter-spacing: -1px;
// // // // // // //           color: #0a2756;
// // // // // // //           margin: 0 auto 16px;
// // // // // // //           position: relative;
// // // // // // //           z-index: 1;
// // // // // // //         }
// // // // // // //         .title-accent {
// // // // // // //           background: linear-gradient(135deg, #e63946 0%, #f36f21 100%);
// // // // // // //           -webkit-background-clip: text;
// // // // // // //           background-clip: text;
// // // // // // //           -webkit-text-fill-color: transparent;
// // // // // // //           font-style: italic;
// // // // // // //         }
// // // // // // //         .hero-desc {
// // // // // // //           font-size: 15px;
// // // // // // //           line-height: 1.7;
// // // // // // //           color: #4a5568;
// // // // // // //           max-width: 520px;
// // // // // // //           margin: 0 auto;
// // // // // // //           position: relative;
// // // // // // //           z-index: 1;
// // // // // // //         }

// // // // // // //         :global(.ppc-link) {
// // // // // // //           display: inline;
// // // // // // //           color: #0a2756 !important;
// // // // // // //           font-weight: 800;
// // // // // // //           padding: 1px 8px;
// // // // // // //           border-radius: 4px;
// // // // // // //           background: linear-gradient(
// // // // // // //             120deg,
// // // // // // //             rgba(230, 57, 70, 0.15),
// // // // // // //             rgba(243, 111, 33, 0.15)
// // // // // // //           );
// // // // // // //           text-decoration: none;
// // // // // // //           border-bottom: 2px solid #e63946;
// // // // // // //           transition: all 0.3s ease;
// // // // // // //         }
// // // // // // //         :global(.ppc-link:hover) {
// // // // // // //           background: linear-gradient(120deg, #e63946, #f36f21);
// // // // // // //           color: #fff !important;
// // // // // // //           border-bottom-color: #fff;
// // // // // // //         }

// // // // // // //         /* mini partners inside card */
// // // // // // //         .mini-partners {
// // // // // // //           padding-top: 16px;
// // // // // // //           border-top: 1px dashed rgba(10, 39, 86, 0.15);
// // // // // // //           position: relative;
// // // // // // //           z-index: 1;
// // // // // // //         }
// // // // // // //         .mp-tag {
// // // // // // //           display: inline-flex;
// // // // // // //           align-items: center;
// // // // // // //           gap: 7px;
// // // // // // //           font-size: 10.5px;
// // // // // // //           font-weight: 800;
// // // // // // //           letter-spacing: 1.8px;
// // // // // // //           text-transform: uppercase;
// // // // // // //           color: #0a2756;
// // // // // // //         }
// // // // // // //         .mp-divider {
// // // // // // //           width: 1px;
// // // // // // //           height: 14px;
// // // // // // //           background: rgba(10, 39, 86, 0.2);
// // // // // // //         }
// // // // // // //         .pb-dot {
// // // // // // //           width: 7px;
// // // // // // //           height: 7px;
// // // // // // //           border-radius: 50%;
// // // // // // //         }
// // // // // // //         .pb-dot-blue {
// // // // // // //           background: #3b82f6;
// // // // // // //           box-shadow: 0 0 8px #3b82f6;
// // // // // // //         }
// // // // // // //         .pb-dot-orange {
// // // // // // //           background: #f36f21;
// // // // // // //           box-shadow: 0 0 8px #f36f21;
// // // // // // //         }

// // // // // // //         /* =================================================
// // // // // // //            DESKTOP — BOTTOM cta zone
// // // // // // //            ================================================= */
// // // // // // //         .cta-zone {
// // // // // // //           background: linear-gradient(180deg, #fff 0%, #f6f9ff 100%);
// // // // // // //           padding: 36px 0 44px;
// // // // // // //           position: relative;
// // // // // // //         }
// // // // // // //         .cta-zone::before {
// // // // // // //           content: "";
// // // // // // //           position: absolute;
// // // // // // //           top: 0;
// // // // // // //           left: 50%;
// // // // // // //           transform: translateX(-50%);
// // // // // // //           width: 80px;
// // // // // // //           height: 4px;
// // // // // // //           background: linear-gradient(90deg, #3b82f6, #f36f21);
// // // // // // //           border-radius: 0 0 4px 4px;
// // // // // // //         }
// // // // // // //         .cta-tagline {
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //           justify-content: center;
// // // // // // //           gap: 10px;
// // // // // // //           font-size: 12px;
// // // // // // //           font-weight: 700;
// // // // // // //           letter-spacing: 1.5px;
// // // // // // //           text-transform: uppercase;
// // // // // // //           color: #6c757d;
// // // // // // //         }

// // // // // // //         /* buttons (shared) */
// // // // // // //         :global(.btn-glow) {
// // // // // // //           background: linear-gradient(135deg, #e63946, #c92e3a);
// // // // // // //           color: #fff !important;
// // // // // // //           font-size: 15px;
// // // // // // //           font-weight: 700;
// // // // // // //           padding: 14px 28px;
// // // // // // //           border-radius: 60px;
// // // // // // //           text-decoration: none;
// // // // // // //           box-shadow: 0 12px 32px rgba(230, 57, 70, 0.4);
// // // // // // //           transition: all 0.3s ease;
// // // // // // //         }
// // // // // // //         :global(.btn-glow:hover) {
// // // // // // //           transform: translateY(-2px);
// // // // // // //           box-shadow: 0 16px 40px rgba(230, 57, 70, 0.55);
// // // // // // //         }
// // // // // // //         :global(.btn-glow:hover .arrow-wrap) {
// // // // // // //           background: #fff;
// // // // // // //           color: #e63946;
// // // // // // //         }
// // // // // // //         .arrow-wrap {
// // // // // // //           width: 26px;
// // // // // // //           height: 26px;
// // // // // // //           border-radius: 50%;
// // // // // // //           background: rgba(255, 255, 255, 0.25);
// // // // // // //           display: inline-flex;
// // // // // // //           align-items: center;
// // // // // // //           justify-content: center;
// // // // // // //           transition: all 0.3s ease;
// // // // // // //         }

// // // // // // //         :global(.btn-outline) {
// // // // // // //           background: #fff;
// // // // // // //           color: #0a2756 !important;
// // // // // // //           font-size: 15px;
// // // // // // //           font-weight: 700;
// // // // // // //           padding: 13px 24px;
// // // // // // //           border-radius: 60px;
// // // // // // //           border: 1.5px solid rgba(10, 39, 86, 0.18);
// // // // // // //           text-decoration: none;
// // // // // // //           transition: all 0.3s ease;
// // // // // // //           box-shadow: 0 6px 18px rgba(10, 39, 86, 0.06);
// // // // // // //         }
// // // // // // //         :global(.btn-outline:hover) {
// // // // // // //           border-color: #f36f21;
// // // // // // //           color: #f36f21 !important;
// // // // // // //           transform: translateY(-2px);
// // // // // // //           box-shadow: 0 12px 28px rgba(243, 111, 33, 0.2);
// // // // // // //         }
// // // // // // //         :global(.btn-outline:hover .alumni-icon) {
// // // // // // //           background: #f36f21;
// // // // // // //           color: #fff;
// // // // // // //           border-color: #f36f21;
// // // // // // //         }
// // // // // // //         :global(.btn-outline:hover .alumni-arrow) {
// // // // // // //           transform: translateX(4px);
// // // // // // //         }
// // // // // // //         .alumni-icon {
// // // // // // //           width: 26px;
// // // // // // //           height: 26px;
// // // // // // //           border-radius: 50%;
// // // // // // //           background: rgba(243, 111, 33, 0.12);
// // // // // // //           border: 1px solid rgba(243, 111, 33, 0.3);
// // // // // // //           color: #f36f21;
// // // // // // //           display: inline-flex;
// // // // // // //           align-items: center;
// // // // // // //           justify-content: center;
// // // // // // //           transition: all 0.3s ease;
// // // // // // //         }
// // // // // // //         .alumni-arrow {
// // // // // // //           transition: transform 0.3s ease;
// // // // // // //         }

// // // // // // //         /* tablet adjustments */
// // // // // // //         @media (max-width: 1199px) and (min-width: 768px) {
// // // // // // //           .image-zone {
// // // // // // //             height: 80vh;
// // // // // // //             min-height: 600px;
// // // // // // //           }
// // // // // // //           .card-position {
// // // // // // //             padding-top: 36px;
// // // // // // //           }
// // // // // // //           .content-card {
// // // // // // //             max-width: 580px;
// // // // // // //             padding: 30px 36px 26px;
// // // // // // //           }
// // // // // // //           .hero-title {
// // // // // // //             font-size: 34px;
// // // // // // //           }
// // // // // // //           .hero-desc {
// // // // // // //             font-size: 14px;
// // // // // // //           }
// // // // // // //           .corner {
// // // // // // //             width: 28px;
// // // // // // //             height: 28px;
// // // // // // //           }
// // // // // // //         }

// // // // // // //         /* =================================================
// // // // // // //            MOBILE LAYOUT
// // // // // // //            ================================================= */
// // // // // // //         .mobile-only {
// // // // // // //           background: linear-gradient(180deg, #fff 0%, #f6f9ff 100%);
// // // // // // //           min-height: 100vh;
// // // // // // //         }
// // // // // // //         .m-hero-title {
// // // // // // //           font-family: "Merriweather", Georgia, serif;
// // // // // // //           font-size: 28px;
// // // // // // //           font-weight: 900;
// // // // // // //           line-height: 1.15;
// // // // // // //           letter-spacing: -0.5px;
// // // // // // //           color: #0a2756;
// // // // // // //           margin: 0 auto 14px;
// // // // // // //           padding: 0 8px;
// // // // // // //         }
// // // // // // //         .m-hero-desc {
// // // // // // //           font-size: 14px;
// // // // // // //           line-height: 1.6;
// // // // // // //           color: #4a5568;
// // // // // // //           margin: 0;
// // // // // // //           padding: 0 12px;
// // // // // // //         }
// // // // // // //         .m-image-wrap {
// // // // // // //           position: relative;
// // // // // // //           margin: 18px -8px;
// // // // // // //           padding: 0;
// // // // // // //           border-radius: 18px;
// // // // // // //           overflow: hidden;
// // // // // // //           box-shadow: 0 20px 50px rgba(10, 39, 86, 0.12);
// // // // // // //           background: #fff;
// // // // // // //         }
// // // // // // //         .m-image {
// // // // // // //           width: 100%;
// // // // // // //           height: auto;
// // // // // // //           display: block;
// // // // // // //         }
// // // // // // //         .m-badge {
// // // // // // //           position: absolute;
// // // // // // //           top: 12px;
// // // // // // //           background: rgba(255, 255, 255, 0.95);
// // // // // // //           backdrop-filter: blur(10px);
// // // // // // //           padding: 5px 11px;
// // // // // // //           border-radius: 50px;
// // // // // // //           font-size: 9.5px;
// // // // // // //           font-weight: 800;
// // // // // // //           letter-spacing: 1.5px;
// // // // // // //           text-transform: uppercase;
// // // // // // //           color: #0a2756;
// // // // // // //           display: inline-flex;
// // // // // // //           align-items: center;
// // // // // // //           gap: 6px;
// // // // // // //           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
// // // // // // //         }
// // // // // // //         .m-badge-left {
// // // // // // //           left: 12px;
// // // // // // //         }
// // // // // // //         .m-badge-right {
// // // // // // //           right: 12px;
// // // // // // //         }

// // // // // // //         @media (max-width: 767px) {
// // // // // // //           :global(.btn-glow),
// // // // // // //           :global(.btn-outline) {
// // // // // // //             font-size: 13.5px;
// // // // // // //             padding: 12px 20px;
// // // // // // //             width: 100%;
// // // // // // //           }
// // // // // // //           .arrow-wrap,
// // // // // // //           .alumni-icon {
// // // // // // //             width: 22px;
// // // // // // //             height: 22px;
// // // // // // //           }
// // // // // // //           .eyebrow {
// // // // // // //             font-size: 9.5px;
// // // // // // //             letter-spacing: 1.5px;
// // // // // // //             padding: 5px 12px 5px 8px;
// // // // // // //           }
// // // // // // //         }

// // // // // // //         @media (max-width: 360px) {
// // // // // // //           .m-hero-title {
// // // // // // //             font-size: 24px;
// // // // // // //           }
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }

// // // // // // import Link from "next/link";

// // // // // // export default function Hero() {
// // // // // //   return (
// // // // // //     <section className="hero-section position-relative overflow-hidden">
// // // // // //       {/* ============ DESKTOP LAYOUT ============ */}
// // // // // //       <div className="desktop-only">
// // // // // //         {/* TOP zone — image with centered card */}
// // // // // //         <div className="image-zone position-relative">
// // // // // //           {/* full background image */}
// // // // // //           <div className="bg-image" />

// // // // // //           {/* decorative ambient glows */}
// // // // // //           <span className="amb-glow amb-blue" />
// // // // // //           <span className="amb-glow amb-orange" />

// // // // // //           {/* sparkles */}
// // // // // //           <span className="sparkle s1" />
// // // // // //           <span className="sparkle s2" />
// // // // // //           <span className="sparkle s3" />
// // // // // //           <span className="sparkle s4" />

// // // // // //           {/* corner accents */}
// // // // // //           <span className="corner c-tl" />
// // // // // //           <span className="corner c-tr" />

// // // // // //           <div
// // // // // //             className="container position-relative h-100"
// // // // // //             style={{ zIndex: 5 }}
// // // // // //           >
// // // // // //             <div className="d-flex flex-column justify-content-start align-items-center h-100 card-position">
// // // // // //               {/* TOP content card — sits above handshake, between logos */}
// // // // // //               <div className="content-card text-center">
// // // // // //                 {/* top decorative accent */}
// // // // // //                 <span className="card-tab" />

// // // // // //                 <div className="eyebrow d-inline-flex align-items-center gap-2 mb-3">
// // // // // //                   <span className="eb-dot" />
// // // // // //                   <span>Clinical Affiliation · Now Active</span>
// // // // // //                 </div>

// // // // // //                 <h1 className="hero-title">
// // // // // //                   A Landmark Affiliation in{" "}
// // // // // //                   <span className="title-accent">Clinical Education</span>
// // // // // //                 </h1>

// // // // // //                 <p className="hero-desc mx-auto">
// // // // // //                   <a
// // // // // //                     href="https://www.mypremierpain.com/"
// // // // // //                     target="_blank"
// // // // // //                     rel="noopener noreferrer"
// // // // // //                     className="ppc-link"
// // // // // //                   >
// // // // // //                     Premier Pain Centers
// // // // // //                   </a>{" "}
// // // // // //                   is now the official clinical rotation site for SHSU&apos;s
// // // // // //                   College of Osteopathic Medicine — pairing students with
// // // // // //                   credentialed preceptors.
// // // // // //                 </p>

// // // // // //                 {/* mini partner row inside card */}
// // // // // //                 <div className="mini-partners d-flex justify-content-center align-items-center gap-3 mt-4">
// // // // // //                   <span className="mp-tag">
// // // // // //                     <span className="pb-dot pb-dot-blue" />
// // // // // //                     Clinical Site
// // // // // //                   </span>
// // // // // //                   <span className="mp-divider" />
// // // // // //                   <span className="mp-tag">
// // // // // //                     Academic Partner
// // // // // //                     <span className="pb-dot pb-dot-orange" />
// // // // // //                   </span>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* BOTTOM zone — CTAs below image */}
// // // // // //         <div className="cta-zone">
// // // // // //           <div className="container">
// // // // // //             <div className="d-flex justify-content-center flex-wrap align-items-center gap-3">
// // // // // //               <Link
// // // // // //                 href="/externship-application-form"
// // // // // //                 className="btn-glow d-inline-flex align-items-center gap-2"
// // // // // //               >
// // // // // //                 Apply for Externship
// // // // // //                 <span className="arrow-wrap">
// // // // // //                   <svg
// // // // // //                     width="14"
// // // // // //                     height="14"
// // // // // //                     viewBox="0 0 24 24"
// // // // // //                     fill="none"
// // // // // //                     stroke="currentColor"
// // // // // //                     strokeWidth="3"
// // // // // //                     strokeLinecap="round"
// // // // // //                   >
// // // // // //                     <path d="M5 12h14M13 5l7 7-7 7" />
// // // // // //                   </svg>
// // // // // //                 </span>
// // // // // //               </Link>

// // // // // //               <Link
// // // // // //                 href="/alumni"
// // // // // //                 className="btn-outline d-inline-flex align-items-center gap-2"
// // // // // //               >
// // // // // //                 <span className="alumni-icon">
// // // // // //                   <svg
// // // // // //                     width="14"
// // // // // //                     height="14"
// // // // // //                     viewBox="0 0 24 24"
// // // // // //                     fill="none"
// // // // // //                     stroke="currentColor"
// // // // // //                     strokeWidth="2.5"
// // // // // //                     strokeLinecap="round"
// // // // // //                     strokeLinejoin="round"
// // // // // //                   >
// // // // // //                     <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
// // // // // //                     <path d="M6 12v5c3 3 9 3 12 0v-5" />
// // // // // //                   </svg>
// // // // // //                 </span>
// // // // // //                 Our Alumni
// // // // // //                 <span className="alumni-arrow">→</span>
// // // // // //               </Link>
// // // // // //             </div>

// // // // // //             {/* tagline */}
// // // // // //             <p className="cta-tagline text-center mt-4 mb-0">
// // // // // //               <span className="pb-dot pb-dot-blue" />
// // // // // //               <span>
// // // // // //                 A Partnership Built for the Next Generation of Physicians
// // // // // //               </span>
// // // // // //               <span className="pb-dot pb-dot-orange" />
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* ============ MOBILE LAYOUT ============ */}
// // // // // //       <div className="mobile-only">
// // // // // //         <div className="container">
// // // // // //           {/* top text */}
// // // // // //           <div className="text-center pt-4 pb-3">
// // // // // //             <div className="eyebrow d-inline-flex align-items-center gap-2 mb-3">
// // // // // //               <span className="eb-dot" />
// // // // // //               <span>Clinical Affiliation · Now Active</span>
// // // // // //             </div>

// // // // // //             <h1 className="m-hero-title">
// // // // // //               A Landmark Affiliation in{" "}
// // // // // //               <span className="title-accent">Clinical Education</span>
// // // // // //             </h1>

// // // // // //             <p className="m-hero-desc">
// // // // // //               <a
// // // // // //                 href="https://www.mypremierpain.com/"
// // // // // //                 target="_blank"
// // // // // //                 rel="noopener noreferrer"
// // // // // //                 className="ppc-link"
// // // // // //               >
// // // // // //                 Premier Pain Centers
// // // // // //               </a>{" "}
// // // // // //               is now the official clinical rotation site for SHSU&apos;s College
// // // // // //               of Osteopathic Medicine.
// // // // // //             </p>
// // // // // //           </div>

// // // // // //           {/* image */}
// // // // // //           <div className="m-image-wrap">
// // // // // //             <img
// // // // // //               src="/images/partnership-banner.png"
// // // // // //               alt="US SHAPE × Sam Houston State University Partnership"
// // // // // //               className="m-image"
// // // // // //             />
// // // // // //             <span className="m-badge m-badge-left">
// // // // // //               <span className="pb-dot pb-dot-blue" />
// // // // // //               Clinical Site
// // // // // //             </span>
// // // // // //             <span className="m-badge m-badge-right">
// // // // // //               Academic Partner
// // // // // //               <span className="pb-dot pb-dot-orange" />
// // // // // //             </span>
// // // // // //           </div>

// // // // // //           {/* CTAs */}
// // // // // //           <div className="d-flex flex-column gap-2 mt-4 pb-4 px-2">
// // // // // //             <Link
// // // // // //               href="/externship-application-form"
// // // // // //               className="btn-glow d-inline-flex align-items-center justify-content-center gap-2"
// // // // // //             >
// // // // // //               Apply for Externship
// // // // // //               <span className="arrow-wrap">
// // // // // //                 <svg
// // // // // //                   width="14"
// // // // // //                   height="14"
// // // // // //                   viewBox="0 0 24 24"
// // // // // //                   fill="none"
// // // // // //                   stroke="currentColor"
// // // // // //                   strokeWidth="3"
// // // // // //                   strokeLinecap="round"
// // // // // //                 >
// // // // // //                   <path d="M5 12h14M13 5l7 7-7 7" />
// // // // // //                 </svg>
// // // // // //               </span>
// // // // // //             </Link>

// // // // // //             <Link
// // // // // //               href="/alumni"
// // // // // //               className="btn-outline d-inline-flex align-items-center justify-content-center gap-2"
// // // // // //             >
// // // // // //               <span className="alumni-icon">
// // // // // //                 <svg
// // // // // //                   width="14"
// // // // // //                   height="14"
// // // // // //                   viewBox="0 0 24 24"
// // // // // //                   fill="none"
// // // // // //                   stroke="currentColor"
// // // // // //                   strokeWidth="2.5"
// // // // // //                   strokeLinecap="round"
// // // // // //                   strokeLinejoin="round"
// // // // // //                 >
// // // // // //                   <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
// // // // // //                   <path d="M6 12v5c3 3 9 3 12 0v-5" />
// // // // // //                 </svg>
// // // // // //               </span>
// // // // // //               Our Alumni
// // // // // //               <span className="alumni-arrow">→</span>
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <style jsx>{`
// // // // // //         .hero-section {
// // // // // //           color: #0a2756;
// // // // // //           background: #fff;
// // // // // //           position: relative;
// // // // // //         }

// // // // // //         .desktop-only {
// // // // // //           display: block;
// // // // // //         }
// // // // // //         .mobile-only {
// // // // // //           display: none;
// // // // // //         }
// // // // // //         @media (max-width: 767px) {
// // // // // //           .desktop-only {
// // // // // //             display: none;
// // // // // //           }
// // // // // //           .mobile-only {
// // // // // //             display: block;
// // // // // //           }
// // // // // //         }

// // // // // //         /* =================================================
// // // // // //            DESKTOP — TOP image zone
// // // // // //            ================================================= */
// // // // // //         .image-zone {
// // // // // //           height: 92vh;
// // // // // //           min-height: 720px;
// // // // // //           overflow: hidden;
// // // // // //         }
// // // // // //         .card-position {
// // // // // //           padding-top: 50px;
// // // // // //         }
// // // // // //         .bg-image {
// // // // // //           position: absolute;
// // // // // //           inset: 0;
// // // // // //           background-image: url("/images/1.png");
// // // // // //           background-size: cover;
// // // // // //           background-position: center;
// // // // // //           background-repeat: no-repeat;
// // // // // //           z-index: 1;
// // // // // //           animation: bgPulse 10s ease-in-out infinite;
// // // // // //         }
// // // // // //         @keyframes bgPulse {
// // // // // //           0%,
// // // // // //           100% {
// // // // // //             transform: scale(1);
// // // // // //           }
// // // // // //           50% {
// // // // // //             transform: scale(1.02);
// // // // // //           }
// // // // // //         }

// // // // // //         /* ===== CONTENT CARD (centered over handshake) ===== */
// // // // // //         .content-card {
// // // // // //           background: rgba(255, 255, 255, 0.92);
// // // // // //           backdrop-filter: blur(18px);
// // // // // //           -webkit-backdrop-filter: blur(18px);
// // // // // //           padding: 36px 44px 32px;
// // // // // //           border-radius: 24px;
// // // // // //           box-shadow:
// // // // // //             0 30px 70px rgba(10, 39, 86, 0.18),
// // // // // //             0 0 0 1px rgba(255, 255, 255, 0.5),
// // // // // //             inset 0 1px 0 rgba(255, 255, 255, 1);
// // // // // //           max-width: 660px;
// // // // // //           width: 90%;
// // // // // //           position: relative;
// // // // // //           overflow: hidden;
// // // // // //         }
// // // // // //         /* gradient corner accent */
// // // // // //         .content-card::before {
// // // // // //           content: "";
// // // // // //           position: absolute;
// // // // // //           top: 0;
// // // // // //           left: 0;
// // // // // //           right: 0;
// // // // // //           height: 4px;
// // // // // //           background: linear-gradient(90deg, #3b82f6, #fff 50%, #f36f21);
// // // // // //         }
// // // // // //         /* watermark gradient overlay */
// // // // // //         .content-card::after {
// // // // // //           content: "";
// // // // // //           position: absolute;
// // // // // //           inset: 0;
// // // // // //           background:
// // // // // //             radial-gradient(
// // // // // //               circle at 0% 0%,
// // // // // //               rgba(59, 130, 246, 0.06),
// // // // // //               transparent 40%
// // // // // //             ),
// // // // // //             radial-gradient(
// // // // // //               circle at 100% 100%,
// // // // // //               rgba(243, 111, 33, 0.06),
// // // // // //               transparent 40%
// // // // // //             );
// // // // // //           pointer-events: none;
// // // // // //         }
// // // // // //         .card-tab {
// // // // // //           position: absolute;
// // // // // //           top: -1px;
// // // // // //           left: 50%;
// // // // // //           transform: translateX(-50%);
// // // // // //           width: 80px;
// // // // // //           height: 6px;
// // // // // //           background: linear-gradient(90deg, #e63946, #f36f21);
// // // // // //           border-radius: 0 0 4px 4px;
// // // // // //           z-index: 2;
// // // // // //         }

// // // // // //         /* ambient glows */
// // // // // //         .amb-glow {
// // // // // //           position: absolute;
// // // // // //           width: 500px;
// // // // // //           height: 500px;
// // // // // //           border-radius: 50%;
// // // // // //           filter: blur(100px);
// // // // // //           pointer-events: none;
// // // // // //           z-index: 2;
// // // // // //         }
// // // // // //         .amb-blue {
// // // // // //           top: 30%;
// // // // // //           left: -200px;
// // // // // //           background: radial-gradient(
// // // // // //             circle,
// // // // // //             rgba(59, 130, 246, 0.25),
// // // // // //             transparent 65%
// // // // // //           );
// // // // // //           animation: ambFloat 8s ease-in-out infinite;
// // // // // //         }
// // // // // //         .amb-orange {
// // // // // //           top: 30%;
// // // // // //           right: -200px;
// // // // // //           background: radial-gradient(
// // // // // //             circle,
// // // // // //             rgba(243, 111, 33, 0.25),
// // // // // //             transparent 65%
// // // // // //           );
// // // // // //           animation: ambFloat 8s ease-in-out infinite reverse;
// // // // // //         }
// // // // // //         @keyframes ambFloat {
// // // // // //           0%,
// // // // // //           100% {
// // // // // //             transform: translateY(0) scale(1);
// // // // // //           }
// // // // // //           50% {
// // // // // //             transform: translateY(-30px) scale(1.05);
// // // // // //           }
// // // // // //         }

// // // // // //         /* sparkles */
// // // // // //         .sparkle {
// // // // // //           position: absolute;
// // // // // //           width: 5px;
// // // // // //           height: 5px;
// // // // // //           background: #fff;
// // // // // //           border-radius: 50%;
// // // // // //           box-shadow:
// // // // // //             0 0 10px #fff,
// // // // // //             0 0 18px rgba(243, 111, 33, 0.9);
// // // // // //           z-index: 3;
// // // // // //           animation: sparkleFloat 4s ease-in-out infinite;
// // // // // //         }
// // // // // //         .s1 {
// // // // // //           top: 30%;
// // // // // //           left: 12%;
// // // // // //           animation-delay: 0s;
// // // // // //         }
// // // // // //         .s2 {
// // // // // //           top: 60%;
// // // // // //           left: 22%;
// // // // // //           animation-delay: 1s;
// // // // // //           box-shadow:
// // // // // //             0 0 10px #fff,
// // // // // //             0 0 18px rgba(59, 130, 246, 0.9);
// // // // // //         }
// // // // // //         .s3 {
// // // // // //           top: 35%;
// // // // // //           left: 85%;
// // // // // //           animation-delay: 2s;
// // // // // //         }
// // // // // //         .s4 {
// // // // // //           top: 70%;
// // // // // //           left: 78%;
// // // // // //           animation-delay: 3s;
// // // // // //           box-shadow:
// // // // // //             0 0 10px #fff,
// // // // // //             0 0 18px rgba(59, 130, 246, 0.9);
// // // // // //         }
// // // // // //         @keyframes sparkleFloat {
// // // // // //           0%,
// // // // // //           100% {
// // // // // //             transform: translateY(0) scale(0);
// // // // // //             opacity: 0;
// // // // // //           }
// // // // // //           50% {
// // // // // //             transform: translateY(-25px) scale(1);
// // // // // //             opacity: 1;
// // // // // //           }
// // // // // //         }

// // // // // //         /* corner accents */
// // // // // //         .corner {
// // // // // //           position: absolute;
// // // // // //           width: 36px;
// // // // // //           height: 36px;
// // // // // //           border: 2px solid;
// // // // // //           z-index: 4;
// // // // // //           pointer-events: none;
// // // // // //         }
// // // // // //         .c-tl {
// // // // // //           top: 25px;
// // // // // //           left: 25px;
// // // // // //           border-color: #3b82f6;
// // // // // //           border-right: none;
// // // // // //           border-bottom: none;
// // // // // //         }
// // // // // //         .c-tr {
// // // // // //           top: 25px;
// // // // // //           right: 25px;
// // // // // //           border-color: #f36f21;
// // // // // //           border-left: none;
// // // // // //           border-bottom: none;
// // // // // //         }

// // // // // //         /* eyebrow */
// // // // // //         .eyebrow {
// // // // // //           background: #fff;
// // // // // //           border: 1px solid rgba(10, 39, 86, 0.12);
// // // // // //           padding: 7px 16px 7px 10px;
// // // // // //           border-radius: 50px;
// // // // // //           box-shadow: 0 4px 14px rgba(10, 39, 86, 0.06);
// // // // // //           font-size: 11.5px;
// // // // // //           font-weight: 700;
// // // // // //           letter-spacing: 2.5px;
// // // // // //           text-transform: uppercase;
// // // // // //           color: #0a2756;
// // // // // //           position: relative;
// // // // // //           z-index: 1;
// // // // // //         }
// // // // // //         .eb-dot {
// // // // // //           width: 8px;
// // // // // //           height: 8px;
// // // // // //           background: #f36f21;
// // // // // //           border-radius: 50%;
// // // // // //           box-shadow: 0 0 0 4px rgba(243, 111, 33, 0.2);
// // // // // //           animation: ebPulse 1.6s infinite;
// // // // // //         }
// // // // // //         @keyframes ebPulse {
// // // // // //           0%,
// // // // // //           100% {
// // // // // //             box-shadow: 0 0 0 4px rgba(243, 111, 33, 0.2);
// // // // // //           }
// // // // // //           50% {
// // // // // //             box-shadow: 0 0 0 9px rgba(243, 111, 33, 0.05);
// // // // // //           }
// // // // // //         }

// // // // // //         /* title */
// // // // // //         .hero-title {
// // // // // //           font-family: "Merriweather", Georgia, serif;
// // // // // //           font-size: 42px;
// // // // // //           font-weight: 900;
// // // // // //           line-height: 1.12;
// // // // // //           letter-spacing: -1px;
// // // // // //           color: #0a2756;
// // // // // //           margin: 0 auto 16px;
// // // // // //           position: relative;
// // // // // //           z-index: 1;
// // // // // //         }
// // // // // //         .title-accent {
// // // // // //           background: linear-gradient(135deg, #e63946 0%, #f36f21 100%);
// // // // // //           -webkit-background-clip: text;
// // // // // //           background-clip: text;
// // // // // //           -webkit-text-fill-color: transparent;
// // // // // //           font-style: italic;
// // // // // //         }
// // // // // //         .hero-desc {
// // // // // //           font-size: 15px;
// // // // // //           line-height: 1.7;
// // // // // //           color: #4a5568;
// // // // // //           max-width: 520px;
// // // // // //           margin: 0 auto;
// // // // // //           position: relative;
// // // // // //           z-index: 1;
// // // // // //         }

// // // // // //         :global(.ppc-link) {
// // // // // //           display: inline;
// // // // // //           color: #0a2756 !important;
// // // // // //           font-weight: 800;
// // // // // //           padding: 1px 8px;
// // // // // //           border-radius: 4px;
// // // // // //           background: linear-gradient(
// // // // // //             120deg,
// // // // // //             rgba(230, 57, 70, 0.15),
// // // // // //             rgba(243, 111, 33, 0.15)
// // // // // //           );
// // // // // //           text-decoration: none;
// // // // // //           border-bottom: 2px solid #e63946;
// // // // // //           transition: all 0.3s ease;
// // // // // //         }
// // // // // //         :global(.ppc-link:hover) {
// // // // // //           background: linear-gradient(120deg, #e63946, #f36f21);
// // // // // //           color: #fff !important;
// // // // // //           border-bottom-color: #fff;
// // // // // //         }

// // // // // //         /* mini partners inside card */
// // // // // //         .mini-partners {
// // // // // //           padding-top: 16px;
// // // // // //           border-top: 1px dashed rgba(10, 39, 86, 0.15);
// // // // // //           position: relative;
// // // // // //           z-index: 1;
// // // // // //         }
// // // // // //         .mp-tag {
// // // // // //           display: inline-flex;
// // // // // //           align-items: center;
// // // // // //           gap: 7px;
// // // // // //           font-size: 10.5px;
// // // // // //           font-weight: 800;
// // // // // //           letter-spacing: 1.8px;
// // // // // //           text-transform: uppercase;
// // // // // //           color: #0a2756;
// // // // // //         }
// // // // // //         .mp-divider {
// // // // // //           width: 1px;
// // // // // //           height: 14px;
// // // // // //           background: rgba(10, 39, 86, 0.2);
// // // // // //         }
// // // // // //         .pb-dot {
// // // // // //           width: 7px;
// // // // // //           height: 7px;
// // // // // //           border-radius: 50%;
// // // // // //         }
// // // // // //         .pb-dot-blue {
// // // // // //           background: #3b82f6;
// // // // // //           box-shadow: 0 0 8px #3b82f6;
// // // // // //         }
// // // // // //         .pb-dot-orange {
// // // // // //           background: #f36f21;
// // // // // //           box-shadow: 0 0 8px #f36f21;
// // // // // //         }

// // // // // //         /* =================================================
// // // // // //            DESKTOP — BOTTOM cta zone
// // // // // //            ================================================= */
// // // // // //         .cta-zone {
// // // // // //           background: linear-gradient(180deg, #fff 0%, #f6f9ff 100%);
// // // // // //           padding: 36px 0 44px;
// // // // // //           position: relative;
// // // // // //         }
// // // // // //         .cta-zone::before {
// // // // // //           content: "";
// // // // // //           position: absolute;
// // // // // //           top: 0;
// // // // // //           left: 50%;
// // // // // //           transform: translateX(-50%);
// // // // // //           width: 80px;
// // // // // //           height: 4px;
// // // // // //           background: linear-gradient(90deg, #3b82f6, #f36f21);
// // // // // //           border-radius: 0 0 4px 4px;
// // // // // //         }
// // // // // //         .cta-tagline {
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           justify-content: center;
// // // // // //           gap: 10px;
// // // // // //           font-size: 12px;
// // // // // //           font-weight: 700;
// // // // // //           letter-spacing: 1.5px;
// // // // // //           text-transform: uppercase;
// // // // // //           color: #6c757d;
// // // // // //         }

// // // // // //         /* buttons (shared) */
// // // // // //         :global(.btn-glow) {
// // // // // //           background: linear-gradient(135deg, #e63946, #c92e3a);
// // // // // //           color: #fff !important;
// // // // // //           font-size: 15px;
// // // // // //           font-weight: 700;
// // // // // //           padding: 14px 28px;
// // // // // //           border-radius: 60px;
// // // // // //           text-decoration: none;
// // // // // //           box-shadow: 0 12px 32px rgba(230, 57, 70, 0.4);
// // // // // //           transition: all 0.3s ease;
// // // // // //         }
// // // // // //         :global(.btn-glow:hover) {
// // // // // //           transform: translateY(-2px);
// // // // // //           box-shadow: 0 16px 40px rgba(230, 57, 70, 0.55);
// // // // // //         }
// // // // // //         :global(.btn-glow:hover .arrow-wrap) {
// // // // // //           background: #fff;
// // // // // //           color: #e63946;
// // // // // //         }
// // // // // //         .arrow-wrap {
// // // // // //           width: 26px;
// // // // // //           height: 26px;
// // // // // //           border-radius: 50%;
// // // // // //           background: rgba(255, 255, 255, 0.25);
// // // // // //           display: inline-flex;
// // // // // //           align-items: center;
// // // // // //           justify-content: center;
// // // // // //           transition: all 0.3s ease;
// // // // // //         }

// // // // // //         :global(.btn-outline) {
// // // // // //           background: #fff;
// // // // // //           color: #0a2756 !important;
// // // // // //           font-size: 15px;
// // // // // //           font-weight: 700;
// // // // // //           padding: 13px 24px;
// // // // // //           border-radius: 60px;
// // // // // //           border: 1.5px solid rgba(10, 39, 86, 0.18);
// // // // // //           text-decoration: none;
// // // // // //           transition: all 0.3s ease;
// // // // // //           box-shadow: 0 6px 18px rgba(10, 39, 86, 0.06);
// // // // // //         }
// // // // // //         :global(.btn-outline:hover) {
// // // // // //           border-color: #f36f21;
// // // // // //           color: #f36f21 !important;
// // // // // //           transform: translateY(-2px);
// // // // // //           box-shadow: 0 12px 28px rgba(243, 111, 33, 0.2);
// // // // // //         }
// // // // // //         :global(.btn-outline:hover .alumni-icon) {
// // // // // //           background: #f36f21;
// // // // // //           color: #fff;
// // // // // //           border-color: #f36f21;
// // // // // //         }
// // // // // //         :global(.btn-outline:hover .alumni-arrow) {
// // // // // //           transform: translateX(4px);
// // // // // //         }
// // // // // //         .alumni-icon {
// // // // // //           width: 26px;
// // // // // //           height: 26px;
// // // // // //           border-radius: 50%;
// // // // // //           background: rgba(243, 111, 33, 0.12);
// // // // // //           border: 1px solid rgba(243, 111, 33, 0.3);
// // // // // //           color: #f36f21;
// // // // // //           display: inline-flex;
// // // // // //           align-items: center;
// // // // // //           justify-content: center;
// // // // // //           transition: all 0.3s ease;
// // // // // //         }
// // // // // //         .alumni-arrow {
// // // // // //           transition: transform 0.3s ease;
// // // // // //         }

// // // // // //         /* tablet adjustments */
// // // // // //         @media (max-width: 1199px) and (min-width: 768px) {
// // // // // //           .image-zone {
// // // // // //             height: 80vh;
// // // // // //             min-height: 600px;
// // // // // //           }
// // // // // //           .card-position {
// // // // // //             padding-top: 36px;
// // // // // //           }
// // // // // //           .content-card {
// // // // // //             max-width: 580px;
// // // // // //             padding: 30px 36px 26px;
// // // // // //           }
// // // // // //           .hero-title {
// // // // // //             font-size: 34px;
// // // // // //           }
// // // // // //           .hero-desc {
// // // // // //             font-size: 14px;
// // // // // //           }
// // // // // //           .corner {
// // // // // //             width: 28px;
// // // // // //             height: 28px;
// // // // // //           }
// // // // // //         }

// // // // // //         /* =================================================
// // // // // //            MOBILE LAYOUT
// // // // // //            ================================================= */
// // // // // //         .mobile-only {
// // // // // //           background: linear-gradient(180deg, #fff 0%, #f6f9ff 100%);
// // // // // //           min-height: 100vh;
// // // // // //         }
// // // // // //         .m-hero-title {
// // // // // //           font-family: "Merriweather", Georgia, serif;
// // // // // //           font-size: 28px;
// // // // // //           font-weight: 900;
// // // // // //           line-height: 1.15;
// // // // // //           letter-spacing: -0.5px;
// // // // // //           color: #0a2756;
// // // // // //           margin: 0 auto 14px;
// // // // // //           padding: 0 8px;
// // // // // //         }
// // // // // //         .m-hero-desc {
// // // // // //           font-size: 14px;
// // // // // //           line-height: 1.6;
// // // // // //           color: #4a5568;
// // // // // //           margin: 0;
// // // // // //           padding: 0 12px;
// // // // // //         }
// // // // // //         .m-image-wrap {
// // // // // //           position: relative;
// // // // // //           margin: 18px -8px;
// // // // // //           padding: 0;
// // // // // //           border-radius: 18px;
// // // // // //           overflow: hidden;
// // // // // //           box-shadow: 0 20px 50px rgba(10, 39, 86, 0.12);
// // // // // //           background: #fff;
// // // // // //         }
// // // // // //         .m-image {
// // // // // //           width: 100%;
// // // // // //           height: auto;
// // // // // //           display: block;
// // // // // //         }
// // // // // //         .m-badge {
// // // // // //           position: absolute;
// // // // // //           top: 12px;
// // // // // //           background: rgba(255, 255, 255, 0.95);
// // // // // //           backdrop-filter: blur(10px);
// // // // // //           padding: 5px 11px;
// // // // // //           border-radius: 50px;
// // // // // //           font-size: 9.5px;
// // // // // //           font-weight: 800;
// // // // // //           letter-spacing: 1.5px;
// // // // // //           text-transform: uppercase;
// // // // // //           color: #0a2756;
// // // // // //           display: inline-flex;
// // // // // //           align-items: center;
// // // // // //           gap: 6px;
// // // // // //           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
// // // // // //         }
// // // // // //         .m-badge-left {
// // // // // //           left: 12px;
// // // // // //         }
// // // // // //         .m-badge-right {
// // // // // //           right: 12px;
// // // // // //         }

// // // // // //         @media (max-width: 767px) {
// // // // // //           :global(.btn-glow),
// // // // // //           :global(.btn-outline) {
// // // // // //             font-size: 13.5px;
// // // // // //             padding: 12px 20px;
// // // // // //             width: 100%;
// // // // // //           }
// // // // // //           .arrow-wrap,
// // // // // //           .alumni-icon {
// // // // // //             width: 22px;
// // // // // //             height: 22px;
// // // // // //           }
// // // // // //           .eyebrow {
// // // // // //             font-size: 9.5px;
// // // // // //             letter-spacing: 1.5px;
// // // // // //             padding: 5px 12px 5px 8px;
// // // // // //           }
// // // // // //         }

// // // // // //         @media (max-width: 360px) {
// // // // // //           .m-hero-title {
// // // // // //             font-size: 24px;
// // // // // //           }
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // import Link from "next/link";

// // // // // export default function Hero() {
// // // // //   return (
// // // // //     <section className="hero-section position-relative overflow-hidden">
// // // // //       {/* ============ DESKTOP LAYOUT ============ */}
// // // // //       <div className="desktop-only">
// // // // //         {/* TOP zone — image with centered card */}
// // // // //         <div className="image-zone position-relative">
// // // // //           {/* full background image */}
// // // // //           <div className="bg-image" />

// // // // //           {/* decorative ambient glows */}
// // // // //           <span className="amb-glow amb-blue" />
// // // // //           <span className="amb-glow amb-orange" />

// // // // //           {/* sparkles */}
// // // // //           <span className="sparkle s1" />
// // // // //           <span className="sparkle s2" />
// // // // //           <span className="sparkle s3" />
// // // // //           <span className="sparkle s4" />

// // // // //           {/* corner accents */}
// // // // //           <span className="corner c-tl" />
// // // // //           <span className="corner c-tr" />

// // // // //           <div
// // // // //             className="container position-relative h-100"
// // // // //             style={{ zIndex: 5 }}
// // // // //           >
// // // // //             <div className="card-position">
// // // // //               {/* TOP content card — sits above handshake, between logos */}
// // // // //               <div className="content-card text-center">
// // // // //                 {/* top decorative accent */}
// // // // //                 <span className="card-tab" />

// // // // //                 <div className="eyebrow d-inline-flex align-items-center gap-2 mb-3">
// // // // //                   <span className="eb-dot" />
// // // // //                   <span>Clinical Affiliation · Now Active</span>
// // // // //                 </div>

// // // // //                 <h1 className="hero-title">
// // // // //                   A Landmark Affiliation in{" "}
// // // // //                   <span className="title-accent">Clinical Education</span>
// // // // //                 </h1>

// // // // //                 <p className="hero-desc mx-auto">
// // // // //                   <a
// // // // //                     href="https://www.mypremierpain.com/"
// // // // //                     target="_blank"
// // // // //                     rel="noopener noreferrer"
// // // // //                     className="ppc-link"
// // // // //                   >
// // // // //                     Premier Pain Centers
// // // // //                   </a>{" "}
// // // // //                   is now the official clinical rotation site for SHSU&apos;s
// // // // //                   College of Osteopathic Medicine — pairing students with
// // // // //                   credentialed preceptors.
// // // // //                 </p>

// // // // //                 {/* mini partner row inside card */}
// // // // //                 <div className="mini-partners d-flex justify-content-center align-items-center gap-3 mt-4">
// // // // //                   <span className="mp-tag">
// // // // //                     <span className="pb-dot pb-dot-blue" />
// // // // //                     Clinical Site
// // // // //                   </span>
// // // // //                   <span className="mp-divider" />
// // // // //                   <span className="mp-tag">
// // // // //                     Academic Partner
// // // // //                     <span className="pb-dot pb-dot-orange" />
// // // // //                   </span>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* BOTTOM zone — CTAs below image */}
// // // // //         <div className="cta-zone">
// // // // //           <div className="container">
// // // // //             <div className="d-flex justify-content-center flex-wrap align-items-center gap-3">
// // // // //               <Link
// // // // //                 href="/externship-application-form"
// // // // //                 className="btn-glow d-inline-flex align-items-center gap-2"
// // // // //               >
// // // // //                 Apply for Externship
// // // // //                 <span className="arrow-wrap">
// // // // //                   <svg
// // // // //                     width="14"
// // // // //                     height="14"
// // // // //                     viewBox="0 0 24 24"
// // // // //                     fill="none"
// // // // //                     stroke="currentColor"
// // // // //                     strokeWidth="3"
// // // // //                     strokeLinecap="round"
// // // // //                   >
// // // // //                     <path d="M5 12h14M13 5l7 7-7 7" />
// // // // //                   </svg>
// // // // //                 </span>
// // // // //               </Link>

// // // // //               <Link
// // // // //                 href="/alumni"
// // // // //                 className="btn-outline d-inline-flex align-items-center gap-2"
// // // // //               >
// // // // //                 <span className="alumni-icon">
// // // // //                   <svg
// // // // //                     width="14"
// // // // //                     height="14"
// // // // //                     viewBox="0 0 24 24"
// // // // //                     fill="none"
// // // // //                     stroke="currentColor"
// // // // //                     strokeWidth="2.5"
// // // // //                     strokeLinecap="round"
// // // // //                     strokeLinejoin="round"
// // // // //                   >
// // // // //                     <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
// // // // //                     <path d="M6 12v5c3 3 9 3 12 0v-5" />
// // // // //                   </svg>
// // // // //                 </span>
// // // // //                 Our Alumni
// // // // //                 <span className="alumni-arrow">→</span>
// // // // //               </Link>
// // // // //             </div>

// // // // //             {/* tagline */}
// // // // //             <p className="cta-tagline text-center mt-4 mb-0">
// // // // //               <span className="pb-dot pb-dot-blue" />
// // // // //               <span>
// // // // //                 A Partnership Built for the Next Generation of Physicians
// // // // //               </span>
// // // // //               <span className="pb-dot pb-dot-orange" />
// // // // //             </p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* ============ MOBILE LAYOUT ============ */}
// // // // //       <div className="mobile-only">
// // // // //         <div className="container">
// // // // //           {/* top text */}
// // // // //           <div className="text-center pt-4 pb-3">
// // // // //             <div className="eyebrow d-inline-flex align-items-center gap-2 mb-3">
// // // // //               <span className="eb-dot" />
// // // // //               <span>Clinical Affiliation · Now Active</span>
// // // // //             </div>

// // // // //             <h1 className="m-hero-title">
// // // // //               A Landmark Affiliation in{" "}
// // // // //               <span className="title-accent">Clinical Education</span>
// // // // //             </h1>

// // // // //             <p className="m-hero-desc">
// // // // //               <a
// // // // //                 href="https://www.mypremierpain.com/"
// // // // //                 target="_blank"
// // // // //                 rel="noopener noreferrer"
// // // // //                 className="ppc-link"
// // // // //               >
// // // // //                 Premier Pain Centers
// // // // //               </a>{" "}
// // // // //               is now the official clinical rotation site for SHSU&apos;s College
// // // // //               of Osteopathic Medicine.
// // // // //             </p>
// // // // //           </div>

// // // // //           {/* image */}
// // // // //           <div className="m-image-wrap">
// // // // //             <img
// // // // //               src="/images/2.png"
// // // // //               alt="Premier Pain Centers x Sam Houston State University Partnership"
// // // // //               className="m-image"
// // // // //             />
// // // // //             <span className="m-badge m-badge-left">
// // // // //               <span className="pb-dot pb-dot-blue" />
// // // // //               Clinical Site
// // // // //             </span>
// // // // //             <span className="m-badge m-badge-right">
// // // // //               Academic Partner
// // // // //               <span className="pb-dot pb-dot-orange" />
// // // // //             </span>
// // // // //           </div>

// // // // //           {/* CTAs */}
// // // // //           <div className="d-flex flex-column gap-2 mt-4 pb-4 px-2">
// // // // //             <Link
// // // // //               href="/externship-application-form"
// // // // //               className="btn-glow d-inline-flex align-items-center justify-content-center gap-2"
// // // // //             >
// // // // //               Apply for Externship
// // // // //               <span className="arrow-wrap">
// // // // //                 <svg
// // // // //                   width="14"
// // // // //                   height="14"
// // // // //                   viewBox="0 0 24 24"
// // // // //                   fill="none"
// // // // //                   stroke="currentColor"
// // // // //                   strokeWidth="3"
// // // // //                   strokeLinecap="round"
// // // // //                 >
// // // // //                   <path d="M5 12h14M13 5l7 7-7 7" />
// // // // //                 </svg>
// // // // //               </span>
// // // // //             </Link>

// // // // //             <Link
// // // // //               href="/alumni"
// // // // //               className="btn-outline d-inline-flex align-items-center justify-content-center gap-2"
// // // // //             >
// // // // //               <span className="alumni-icon">
// // // // //                 <svg
// // // // //                   width="14"
// // // // //                   height="14"
// // // // //                   viewBox="0 0 24 24"
// // // // //                   fill="none"
// // // // //                   stroke="currentColor"
// // // // //                   strokeWidth="2.5"
// // // // //                   strokeLinecap="round"
// // // // //                   strokeLinejoin="round"
// // // // //                 >
// // // // //                   <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
// // // // //                   <path d="M6 12v5c3 3 9 3 12 0v-5" />
// // // // //                 </svg>
// // // // //               </span>
// // // // //               Our Alumni
// // // // //               <span className="alumni-arrow">→</span>
// // // // //             </Link>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <style jsx>{`
// // // // //         .hero-section {
// // // // //           color: #0a2756;
// // // // //           background: #fff;
// // // // //           position: relative;
// // // // //         }

// // // // //         .desktop-only {
// // // // //           display: block;
// // // // //         }
// // // // //         .mobile-only {
// // // // //           display: none;
// // // // //         }
// // // // //         @media (max-width: 767px) {
// // // // //           .desktop-only {
// // // // //             display: none;
// // // // //           }
// // // // //           .mobile-only {
// // // // //             display: block;
// // // // //           }
// // // // //         }

// // // // //         /* =================================================
// // // // //            DESKTOP — TOP image zone
// // // // //            ================================================= */
// // // // //         .image-zone {
// // // // //           height: 92vh;
// // // // //           min-height: 720px;
// // // // //           overflow: hidden;
// // // // //         }
// // // // //         .bg-image {
// // // // //           position: absolute;
// // // // //           inset: 0;
// // // // //           background-image: url("/images/2.png");
// // // // //           background-size: cover;
// // // // //           background-position: center;
// // // // //           background-repeat: no-repeat;
// // // // //           z-index: 1;
// // // // //           animation: bgPulse 10s ease-in-out infinite;
// // // // //         }
// // // // //         @keyframes bgPulse {
// // // // //           0%,
// // // // //           100% {
// // // // //             transform: scale(1);
// // // // //           }
// // // // //           50% {
// // // // //             transform: scale(1.02);
// // // // //           }
// // // // //         }

// // // // //         /* ===== card position — pinned near the top, between the two logos ===== */
// // // // //         .card-position {
// // // // //           position: absolute;
// // // // //           top: clamp(18px, 6vh, 64px);
// // // // //           left: 50%;
// // // // //           transform: translateX(-50%);
// // // // //           width: 100%;
// // // // //           display: flex;
// // // // //           justify-content: center;
// // // // //           padding: 0 16px;
// // // // //         }

// // // // //         /* ===== CONTENT CARD (centered between the two logos) ===== */
// // // // //         .content-card {
// // // // //           background: rgba(255, 255, 255, 0.92);
// // // // //           backdrop-filter: blur(18px);
// // // // //           -webkit-backdrop-filter: blur(18px);
// // // // //           padding: 28px 40px 26px;
// // // // //           border-radius: 24px;
// // // // //           box-shadow:
// // // // //             0 30px 70px rgba(10, 39, 86, 0.18),
// // // // //             0 0 0 1px rgba(255, 255, 255, 0.5),
// // // // //             inset 0 1px 0 rgba(255, 255, 255, 1);
// // // // //           max-width: 620px;
// // // // //           width: 90%;
// // // // //           position: relative;
// // // // //           overflow: hidden;
// // // // //         }
// // // // //         /* gradient corner accent */
// // // // //         .content-card::before {
// // // // //           content: "";
// // // // //           position: absolute;
// // // // //           top: 0;
// // // // //           left: 0;
// // // // //           right: 0;
// // // // //           height: 4px;
// // // // //           background: linear-gradient(90deg, #3b82f6, #fff 50%, #f36f21);
// // // // //         }
// // // // //         /* watermark gradient overlay */
// // // // //         .content-card::after {
// // // // //           content: "";
// // // // //           position: absolute;
// // // // //           inset: 0;
// // // // //           background:
// // // // //             radial-gradient(
// // // // //               circle at 0% 0%,
// // // // //               rgba(59, 130, 246, 0.06),
// // // // //               transparent 40%
// // // // //             ),
// // // // //             radial-gradient(
// // // // //               circle at 100% 100%,
// // // // //               rgba(243, 111, 33, 0.06),
// // // // //               transparent 40%
// // // // //             );
// // // // //           pointer-events: none;
// // // // //         }
// // // // //         .card-tab {
// // // // //           position: absolute;
// // // // //           top: -1px;
// // // // //           left: 50%;
// // // // //           transform: translateX(-50%);
// // // // //           width: 80px;
// // // // //           height: 6px;
// // // // //           background: linear-gradient(90deg, #e63946, #f36f21);
// // // // //           border-radius: 0 0 4px 4px;
// // // // //           z-index: 2;
// // // // //         }

// // // // //         /* ambient glows */
// // // // //         .amb-glow {
// // // // //           position: absolute;
// // // // //           width: 500px;
// // // // //           height: 500px;
// // // // //           border-radius: 50%;
// // // // //           filter: blur(100px);
// // // // //           pointer-events: none;
// // // // //           z-index: 2;
// // // // //         }
// // // // //         .amb-blue {
// // // // //           top: 30%;
// // // // //           left: -200px;
// // // // //           background: radial-gradient(
// // // // //             circle,
// // // // //             rgba(59, 130, 246, 0.25),
// // // // //             transparent 65%
// // // // //           );
// // // // //           animation: ambFloat 8s ease-in-out infinite;
// // // // //         }
// // // // //         .amb-orange {
// // // // //           top: 30%;
// // // // //           right: -200px;
// // // // //           background: radial-gradient(
// // // // //             circle,
// // // // //             rgba(243, 111, 33, 0.25),
// // // // //             transparent 65%
// // // // //           );
// // // // //           animation: ambFloat 8s ease-in-out infinite reverse;
// // // // //         }
// // // // //         @keyframes ambFloat {
// // // // //           0%,
// // // // //           100% {
// // // // //             transform: translateY(0) scale(1);
// // // // //           }
// // // // //           50% {
// // // // //             transform: translateY(-30px) scale(1.05);
// // // // //           }
// // // // //         }

// // // // //         /* sparkles */
// // // // //         .sparkle {
// // // // //           position: absolute;
// // // // //           width: 5px;
// // // // //           height: 5px;
// // // // //           background: #fff;
// // // // //           border-radius: 50%;
// // // // //           box-shadow:
// // // // //             0 0 10px #fff,
// // // // //             0 0 18px rgba(243, 111, 33, 0.9);
// // // // //           z-index: 3;
// // // // //           animation: sparkleFloat 4s ease-in-out infinite;
// // // // //         }
// // // // //         .s1 {
// // // // //           top: 30%;
// // // // //           left: 12%;
// // // // //           animation-delay: 0s;
// // // // //         }
// // // // //         .s2 {
// // // // //           top: 60%;
// // // // //           left: 22%;
// // // // //           animation-delay: 1s;
// // // // //           box-shadow:
// // // // //             0 0 10px #fff,
// // // // //             0 0 18px rgba(59, 130, 246, 0.9);
// // // // //         }
// // // // //         .s3 {
// // // // //           top: 35%;
// // // // //           left: 85%;
// // // // //           animation-delay: 2s;
// // // // //         }
// // // // //         .s4 {
// // // // //           top: 70%;
// // // // //           left: 78%;
// // // // //           animation-delay: 3s;
// // // // //           box-shadow:
// // // // //             0 0 10px #fff,
// // // // //             0 0 18px rgba(59, 130, 246, 0.9);
// // // // //         }
// // // // //         @keyframes sparkleFloat {
// // // // //           0%,
// // // // //           100% {
// // // // //             transform: translateY(0) scale(0);
// // // // //             opacity: 0;
// // // // //           }
// // // // //           50% {
// // // // //             transform: translateY(-25px) scale(1);
// // // // //             opacity: 1;
// // // // //           }
// // // // //         }

// // // // //         /* corner accents */
// // // // //         .corner {
// // // // //           position: absolute;
// // // // //           width: 36px;
// // // // //           height: 36px;
// // // // //           border: 2px solid;
// // // // //           z-index: 4;
// // // // //           pointer-events: none;
// // // // //         }
// // // // //         .c-tl {
// // // // //           top: 25px;
// // // // //           left: 25px;
// // // // //           border-color: #3b82f6;
// // // // //           border-right: none;
// // // // //           border-bottom: none;
// // // // //         }
// // // // //         .c-tr {
// // // // //           top: 25px;
// // // // //           right: 25px;
// // // // //           border-color: #f36f21;
// // // // //           border-left: none;
// // // // //           border-bottom: none;
// // // // //         }

// // // // //         /* eyebrow */
// // // // //         .eyebrow {
// // // // //           background: #fff;
// // // // //           border: 1px solid rgba(10, 39, 86, 0.12);
// // // // //           padding: 7px 16px 7px 10px;
// // // // //           border-radius: 50px;
// // // // //           box-shadow: 0 4px 14px rgba(10, 39, 86, 0.06);
// // // // //           font-size: 11.5px;
// // // // //           font-weight: 700;
// // // // //           letter-spacing: 2.5px;
// // // // //           text-transform: uppercase;
// // // // //           color: #0a2756;
// // // // //           position: relative;
// // // // //           z-index: 1;
// // // // //         }
// // // // //         .eb-dot {
// // // // //           width: 8px;
// // // // //           height: 8px;
// // // // //           background: #f36f21;
// // // // //           border-radius: 50%;
// // // // //           box-shadow: 0 0 0 4px rgba(243, 111, 33, 0.2);
// // // // //           animation: ebPulse 1.6s infinite;
// // // // //         }
// // // // //         @keyframes ebPulse {
// // // // //           0%,
// // // // //           100% {
// // // // //             box-shadow: 0 0 0 4px rgba(243, 111, 33, 0.2);
// // // // //           }
// // // // //           50% {
// // // // //             box-shadow: 0 0 0 9px rgba(243, 111, 33, 0.05);
// // // // //           }
// // // // //         }

// // // // //         /* title */
// // // // //         .hero-title {
// // // // //           font-family: "Merriweather", Georgia, serif;
// // // // //           font-size: 38px;
// // // // //           font-weight: 900;
// // // // //           line-height: 1.12;
// // // // //           letter-spacing: -1px;
// // // // //           color: #0a2756;
// // // // //           margin: 0 auto 14px;
// // // // //           position: relative;
// // // // //           z-index: 1;
// // // // //         }
// // // // //         .title-accent {
// // // // //           background: linear-gradient(135deg, #e63946 0%, #f36f21 100%);
// // // // //           -webkit-background-clip: text;
// // // // //           background-clip: text;
// // // // //           -webkit-text-fill-color: transparent;
// // // // //           font-style: italic;
// // // // //         }
// // // // //         .hero-desc {
// // // // //           font-size: 14.5px;
// // // // //           line-height: 1.65;
// // // // //           color: #4a5568;
// // // // //           max-width: 520px;
// // // // //           margin: 0 auto;
// // // // //           position: relative;
// // // // //           z-index: 1;
// // // // //         }

// // // // //         :global(.ppc-link) {
// // // // //           display: inline;
// // // // //           color: #0a2756 !important;
// // // // //           font-weight: 800;
// // // // //           padding: 1px 8px;
// // // // //           border-radius: 4px;
// // // // //           background: linear-gradient(
// // // // //             120deg,
// // // // //             rgba(230, 57, 70, 0.15),
// // // // //             rgba(243, 111, 33, 0.15)
// // // // //           );
// // // // //           text-decoration: none;
// // // // //           border-bottom: 2px solid #e63946;
// // // // //           transition: all 0.3s ease;
// // // // //         }
// // // // //         :global(.ppc-link:hover) {
// // // // //           background: linear-gradient(120deg, #e63946, #f36f21);
// // // // //           color: #fff !important;
// // // // //           border-bottom-color: #fff;
// // // // //         }

// // // // //         /* mini partners inside card */
// // // // //         .mini-partners {
// // // // //           padding-top: 14px;
// // // // //           border-top: 1px dashed rgba(10, 39, 86, 0.15);
// // // // //           position: relative;
// // // // //           z-index: 1;
// // // // //         }
// // // // //         .mp-tag {
// // // // //           display: inline-flex;
// // // // //           align-items: center;
// // // // //           gap: 7px;
// // // // //           font-size: 10.5px;
// // // // //           font-weight: 800;
// // // // //           letter-spacing: 1.8px;
// // // // //           text-transform: uppercase;
// // // // //           color: #0a2756;
// // // // //         }
// // // // //         .mp-divider {
// // // // //           width: 1px;
// // // // //           height: 14px;
// // // // //           background: rgba(10, 39, 86, 0.2);
// // // // //         }
// // // // //         .pb-dot {
// // // // //           width: 7px;
// // // // //           height: 7px;
// // // // //           border-radius: 50%;
// // // // //         }
// // // // //         .pb-dot-blue {
// // // // //           background: #3b82f6;
// // // // //           box-shadow: 0 0 8px #3b82f6;
// // // // //         }
// // // // //         .pb-dot-orange {
// // // // //           background: #f36f21;
// // // // //           box-shadow: 0 0 8px #f36f21;
// // // // //         }

// // // // //         /* =================================================
// // // // //            DESKTOP — BOTTOM cta zone
// // // // //            ================================================= */
// // // // //         .cta-zone {
// // // // //           background: linear-gradient(180deg, #fff 0%, #f6f9ff 100%);
// // // // //           padding: 36px 0 44px;
// // // // //           position: relative;
// // // // //         }
// // // // //         .cta-zone::before {
// // // // //           content: "";
// // // // //           position: absolute;
// // // // //           top: 0;
// // // // //           left: 50%;
// // // // //           transform: translateX(-50%);
// // // // //           width: 80px;
// // // // //           height: 4px;
// // // // //           background: linear-gradient(90deg, #3b82f6, #f36f21);
// // // // //           border-radius: 0 0 4px 4px;
// // // // //         }
// // // // //         .cta-tagline {
// // // // //           display: flex;
// // // // //           align-items: center;
// // // // //           justify-content: center;
// // // // //           gap: 10px;
// // // // //           font-size: 12px;
// // // // //           font-weight: 700;
// // // // //           letter-spacing: 1.5px;
// // // // //           text-transform: uppercase;
// // // // //           color: #6c757d;
// // // // //         }

// // // // //         /* buttons (shared) */
// // // // //         :global(.btn-glow) {
// // // // //           background: linear-gradient(135deg, #e63946, #c92e3a);
// // // // //           color: #fff !important;
// // // // //           font-size: 15px;
// // // // //           font-weight: 700;
// // // // //           padding: 14px 28px;
// // // // //           border-radius: 60px;
// // // // //           text-decoration: none;
// // // // //           box-shadow: 0 12px 32px rgba(230, 57, 70, 0.4);
// // // // //           transition: all 0.3s ease;
// // // // //         }
// // // // //         :global(.btn-glow:hover) {
// // // // //           transform: translateY(-2px);
// // // // //           box-shadow: 0 16px 40px rgba(230, 57, 70, 0.55);
// // // // //         }
// // // // //         :global(.btn-glow:hover .arrow-wrap) {
// // // // //           background: #fff;
// // // // //           color: #e63946;
// // // // //         }
// // // // //         .arrow-wrap {
// // // // //           width: 26px;
// // // // //           height: 26px;
// // // // //           border-radius: 50%;
// // // // //           background: rgba(255, 255, 255, 0.25);
// // // // //           display: inline-flex;
// // // // //           align-items: center;
// // // // //           justify-content: center;
// // // // //           transition: all 0.3s ease;
// // // // //         }

// // // // //         :global(.btn-outline) {
// // // // //           background: #fff;
// // // // //           color: #0a2756 !important;
// // // // //           font-size: 15px;
// // // // //           font-weight: 700;
// // // // //           padding: 13px 24px;
// // // // //           border-radius: 60px;
// // // // //           border: 1.5px solid rgba(10, 39, 86, 0.18);
// // // // //           text-decoration: none;
// // // // //           transition: all 0.3s ease;
// // // // //           box-shadow: 0 6px 18px rgba(10, 39, 86, 0.06);
// // // // //         }
// // // // //         :global(.btn-outline:hover) {
// // // // //           border-color: #f36f21;
// // // // //           color: #f36f21 !important;
// // // // //           transform: translateY(-2px);
// // // // //           box-shadow: 0 12px 28px rgba(243, 111, 33, 0.2);
// // // // //         }
// // // // //         :global(.btn-outline:hover .alumni-icon) {
// // // // //           background: #f36f21;
// // // // //           color: #fff;
// // // // //           border-color: #f36f21;
// // // // //         }
// // // // //         :global(.btn-outline:hover .alumni-arrow) {
// // // // //           transform: translateX(4px);
// // // // //         }
// // // // //         .alumni-icon {
// // // // //           width: 26px;
// // // // //           height: 26px;
// // // // //           border-radius: 50%;
// // // // //           background: rgba(243, 111, 33, 0.12);
// // // // //           border: 1px solid rgba(243, 111, 33, 0.3);
// // // // //           color: #f36f21;
// // // // //           display: inline-flex;
// // // // //           align-items: center;
// // // // //           justify-content: center;
// // // // //           transition: all 0.3s ease;
// // // // //         }
// // // // //         .alumni-arrow {
// // // // //           transition: transform 0.3s ease;
// // // // //         }

// // // // //         /* tablet adjustments */
// // // // //         @media (max-width: 1199px) and (min-width: 768px) {
// // // // //           .image-zone {
// // // // //             height: 80vh;
// // // // //             min-height: 600px;
// // // // //           }
// // // // //           .card-position {
// // // // //             top: clamp(14px, 4vh, 44px);
// // // // //           }
// // // // //           .content-card {
// // // // //             max-width: 560px;
// // // // //             padding: 26px 32px 24px;
// // // // //           }
// // // // //           .hero-title {
// // // // //             font-size: 32px;
// // // // //           }
// // // // //           .hero-desc {
// // // // //             font-size: 14px;
// // // // //           }
// // // // //           .corner {
// // // // //             width: 28px;
// // // // //             height: 28px;
// // // // //           }
// // // // //         }

// // // // //         /* =================================================
// // // // //            MOBILE LAYOUT
// // // // //            ================================================= */
// // // // //         .mobile-only {
// // // // //           background: linear-gradient(180deg, #fff 0%, #f6f9ff 100%);
// // // // //         }
// // // // //         .m-hero-title {
// // // // //           font-family: "Merriweather", Georgia, serif;
// // // // //           font-size: 28px;
// // // // //           font-weight: 900;
// // // // //           line-height: 1.15;
// // // // //           letter-spacing: -0.5px;
// // // // //           color: #0a2756;
// // // // //           margin: 0 auto 14px;
// // // // //           padding: 0 8px;
// // // // //         }
// // // // //         .m-hero-desc {
// // // // //           font-size: 14px;
// // // // //           line-height: 1.6;
// // // // //           color: #4a5568;
// // // // //           margin: 0;
// // // // //           padding: 0 12px;
// // // // //         }
// // // // //         .m-image-wrap {
// // // // //           position: relative;
// // // // //           margin: 18px -8px;
// // // // //           padding: 0;
// // // // //           border-radius: 18px;
// // // // //           overflow: hidden;
// // // // //           box-shadow: 0 20px 50px rgba(10, 39, 86, 0.12);
// // // // //           background: #eef3fb;
// // // // //           aspect-ratio: 16 / 10;
// // // // //         }
// // // // //         .m-image {
// // // // //           width: 100%;
// // // // //           height: 100%;
// // // // //           object-fit: cover;
// // // // //           object-position: center;
// // // // //           display: block;
// // // // //         }
// // // // //         .m-badge {
// // // // //           position: absolute;
// // // // //           top: 12px;
// // // // //           background: rgba(255, 255, 255, 0.95);
// // // // //           backdrop-filter: blur(10px);
// // // // //           padding: 5px 11px;
// // // // //           border-radius: 50px;
// // // // //           font-size: 9.5px;
// // // // //           font-weight: 800;
// // // // //           letter-spacing: 1.5px;
// // // // //           text-transform: uppercase;
// // // // //           color: #0a2756;
// // // // //           display: inline-flex;
// // // // //           align-items: center;
// // // // //           gap: 6px;
// // // // //           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
// // // // //           z-index: 2;
// // // // //         }
// // // // //         .m-badge-left {
// // // // //           left: 12px;
// // // // //         }
// // // // //         .m-badge-right {
// // // // //           right: 12px;
// // // // //         }

// // // // //         @media (max-width: 767px) {
// // // // //           :global(.btn-glow),
// // // // //           :global(.btn-outline) {
// // // // //             font-size: 13.5px;
// // // // //             padding: 12px 20px;
// // // // //             width: 100%;
// // // // //           }
// // // // //           .arrow-wrap,
// // // // //           .alumni-icon {
// // // // //             width: 22px;
// // // // //             height: 22px;
// // // // //           }
// // // // //           .eyebrow {
// // // // //             font-size: 9.5px;
// // // // //             letter-spacing: 1.5px;
// // // // //             padding: 5px 12px 5px 8px;
// // // // //           }
// // // // //         }

// // // // //         @media (max-width: 360px) {
// // // // //           .m-hero-title {
// // // // //             font-size: 24px;
// // // // //           }
// // // // //         }
// // // // //       `}</style>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // import Link from "next/link";

// // // // export default function Hero() {
// // // //   return (
// // // //     <section className="hero-section position-relative overflow-hidden">
// // // //       {/* ============ DESKTOP LAYOUT ============ */}
// // // //       <div className="desktop-only">
// // // //         {/* TOP zone — image with centered card */}
// // // //         <div className="image-zone position-relative">
// // // //           {/* full background image */}
// // // //           <div className="bg-image" />

// // // //           {/* decorative ambient glows */}
// // // //           <span className="amb-glow amb-blue" />
// // // //           <span className="amb-glow amb-orange" />

// // // //           {/* sparkles */}
// // // //           <span className="sparkle s1" />
// // // //           <span className="sparkle s2" />
// // // //           <span className="sparkle s3" />
// // // //           <span className="sparkle s4" />

// // // //           {/* corner accents */}
// // // //           <span className="corner c-tl" />
// // // //           <span className="corner c-tr" />

// // // //           <div
// // // //             className="container position-relative h-100"
// // // //             style={{ zIndex: 5 }}
// // // //           >
// // // //             <div className="card-position">
// // // //               {/* TOP content — sits above handshake, between logos, blended (no box) */}
// // // //               <div className="content-card text-center">
// // // //                 <div className="eyebrow d-inline-flex align-items-center gap-2 mb-3">
// // // //                   <span className="eb-dot" />
// // // //                   <span>Clinical Affiliation · Now Active</span>
// // // //                 </div>

// // // //                 <h1 className="hero-title">
// // // //                   A Landmark Affiliation in{" "}
// // // //                   <span className="title-accent">Clinical Education</span>
// // // //                 </h1>

// // // //                 <p className="hero-desc mx-auto">
// // // //                   <a
// // // //                     href="https://www.mypremierpain.com/"
// // // //                     target="_blank"
// // // //                     rel="noopener noreferrer"
// // // //                     className="ppc-link"
// // // //                   >
// // // //                     Premier Pain Centers
// // // //                   </a>{" "}
// // // //                   is now the official clinical rotation site for SHSU&apos;s
// // // //                   College of Osteopathic Medicine — pairing students with
// // // //                   credentialed preceptors.
// // // //                 </p>

// // // //                 {/* mini partner row */}
// // // //                 <div className="mini-partners d-flex justify-content-center align-items-center gap-3 mt-4">
// // // //                   <span className="mp-tag">
// // // //                     <span className="pb-dot pb-dot-blue" />
// // // //                     Clinical Site
// // // //                   </span>
// // // //                   <span className="mp-divider" />
// // // //                   <span className="mp-tag">
// // // //                     Academic Partner
// // // //                     <span className="pb-dot pb-dot-orange" />
// // // //                   </span>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* BOTTOM zone — CTAs below image */}
// // // //         <div className="cta-zone">
// // // //           <div className="container">
// // // //             <div className="d-flex justify-content-center flex-wrap align-items-center gap-3">
// // // //               <Link
// // // //                 href="/externship-application-form"
// // // //                 className="btn-glow d-inline-flex align-items-center gap-2"
// // // //               >
// // // //                 Apply for Externship
// // // //                 <span className="arrow-wrap">
// // // //                   <svg
// // // //                     width="14"
// // // //                     height="14"
// // // //                     viewBox="0 0 24 24"
// // // //                     fill="none"
// // // //                     stroke="currentColor"
// // // //                     strokeWidth="3"
// // // //                     strokeLinecap="round"
// // // //                   >
// // // //                     <path d="M5 12h14M13 5l7 7-7 7" />
// // // //                   </svg>
// // // //                 </span>
// // // //               </Link>

// // // //               <Link
// // // //                 href="/alumni"
// // // //                 className="btn-outline d-inline-flex align-items-center gap-2"
// // // //               >
// // // //                 <span className="alumni-icon">
// // // //                   <svg
// // // //                     width="14"
// // // //                     height="14"
// // // //                     viewBox="0 0 24 24"
// // // //                     fill="none"
// // // //                     stroke="currentColor"
// // // //                     strokeWidth="2.5"
// // // //                     strokeLinecap="round"
// // // //                     strokeLinejoin="round"
// // // //                   >
// // // //                     <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
// // // //                     <path d="M6 12v5c3 3 9 3 12 0v-5" />
// // // //                   </svg>
// // // //                 </span>
// // // //                 Our Alumni
// // // //                 <span className="alumni-arrow">→</span>
// // // //               </Link>
// // // //             </div>

// // // //             {/* tagline */}
// // // //             <p className="cta-tagline text-center mt-4 mb-0">
// // // //               <span className="pb-dot pb-dot-blue" />
// // // //               <span>
// // // //                 A Partnership Built for the Next Generation of Physicians
// // // //               </span>
// // // //               <span className="pb-dot pb-dot-orange" />
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* ============ MOBILE LAYOUT ============ */}
// // // //       <div className="mobile-only">
// // // //         <div className="container">
// // // //           {/* image FIRST */}
// // // //           <div className="m-image-wrap">
// // // //             <img
// // // //               src="/images/2.png"
// // // //               alt="Premier Pain Centers x Sam Houston State University Partnership"
// // // //               className="m-image"
// // // //             />
// // // //             <span className="m-badge m-badge-left">
// // // //               <span className="pb-dot pb-dot-blue" />
// // // //               Clinical Site
// // // //             </span>
// // // //             <span className="m-badge m-badge-right">
// // // //               Academic Partner
// // // //               <span className="pb-dot pb-dot-orange" />
// // // //             </span>
// // // //           </div>

// // // //           {/* text SECOND */}
// // // //           <div className="text-center pt-3 pb-2">
// // // //             <div className="eyebrow d-inline-flex align-items-center gap-2 mb-3">
// // // //               <span className="eb-dot" />
// // // //               <span>Clinical Affiliation · Now Active</span>
// // // //             </div>

// // // //             <h1 className="m-hero-title">
// // // //               A Landmark Affiliation in{" "}
// // // //               <span className="title-accent">Clinical Education</span>
// // // //             </h1>

// // // //             <p className="m-hero-desc">
// // // //               <a
// // // //                 href="https://www.mypremierpain.com/"
// // // //                 target="_blank"
// // // //                 rel="noopener noreferrer"
// // // //                 className="ppc-link"
// // // //               >
// // // //                 Premier Pain Centers
// // // //               </a>{" "}
// // // //               is now the official clinical rotation site for SHSU&apos;s College
// // // //               of Osteopathic Medicine.
// // // //             </p>
// // // //           </div>

// // // //           {/* buttons THIRD */}
// // // //           <div className="d-flex flex-column gap-2 mt-3 pb-4 px-2">
// // // //             <Link
// // // //               href="/externship-application-form"
// // // //               className="btn-glow d-inline-flex align-items-center justify-content-center gap-2"
// // // //             >
// // // //               Apply for Externship
// // // //               <span className="arrow-wrap">
// // // //                 <svg
// // // //                   width="14"
// // // //                   height="14"
// // // //                   viewBox="0 0 24 24"
// // // //                   fill="none"
// // // //                   stroke="currentColor"
// // // //                   strokeWidth="3"
// // // //                   strokeLinecap="round"
// // // //                 >
// // // //                   <path d="M5 12h14M13 5l7 7-7 7" />
// // // //                 </svg>
// // // //               </span>
// // // //             </Link>

// // // //             <Link
// // // //               href="/alumni"
// // // //               className="btn-outline d-inline-flex align-items-center justify-content-center gap-2"
// // // //             >
// // // //               <span className="alumni-icon">
// // // //                 <svg
// // // //                   width="14"
// // // //                   height="14"
// // // //                   viewBox="0 0 24 24"
// // // //                   fill="none"
// // // //                   stroke="currentColor"
// // // //                   strokeWidth="2.5"
// // // //                   strokeLinecap="round"
// // // //                   strokeLinejoin="round"
// // // //                 >
// // // //                   <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
// // // //                   <path d="M6 12v5c3 3 9 3 12 0v-5" />
// // // //                 </svg>
// // // //               </span>
// // // //               Our Alumni
// // // //               <span className="alumni-arrow">→</span>
// // // //             </Link>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <style jsx>{`
// // // //         .hero-section {
// // // //           color: #0a2756;
// // // //           background: #fff;
// // // //           position: relative;
// // // //         }

// // // //         .desktop-only {
// // // //           display: block;
// // // //         }
// // // //         .mobile-only {
// // // //           display: none;
// // // //         }
// // // //         @media (max-width: 767px) {
// // // //           .desktop-only {
// // // //             display: none;
// // // //           }
// // // //           .mobile-only {
// // // //             display: block;
// // // //           }
// // // //         }

// // // //         /* =================================================
// // // //            DESKTOP — TOP image zone
// // // //            ================================================= */
// // // //         .image-zone {
// // // //           height: 92vh;
// // // //           min-height: 720px;
// // // //           overflow: hidden;
// // // //         }
// // // //         .bg-image {
// // // //           position: absolute;
// // // //           inset: 0;
// // // //           background-image: url("/images/2.png");
// // // //           background-size: cover;
// // // //           background-position: top center;
// // // //           background-repeat: no-repeat;
// // // //           z-index: 1;
// // // //           opacity: 0.55;
// // // //           animation: bgPulse 10s ease-in-out infinite;
// // // //         }
// // // //         @keyframes bgPulse {
// // // //           0%,
// // // //           100% {
// // // //             transform: scale(1);
// // // //           }
// // // //           50% {
// // // //             transform: scale(1.02);
// // // //           }
// // // //         }

// // // //         /* ===== card position — pinned near the top, between the two logos ===== */
// // // //         .card-position {
// // // //           position: absolute;
// // // //           top: clamp(18px, 6vh, 64px);
// // // //           left: 50%;
// // // //           transform: translateX(-50%);
// // // //           width: 100%;
// // // //           display: flex;
// // // //           justify-content: center;
// // // //           padding: 0 16px;
// // // //         }

// // // //         /* ===== CONTENT — blended directly onto the image, no card box ===== */
// // // //         .content-card {
// // // //           background: transparent;
// // // //           padding: 8px 24px 0;
// // // //           max-width: 640px;
// // // //           width: 92%;
// // // //           position: relative;
// // // //         }

// // // //         /* ambient glows */
// // // //         .amb-glow {
// // // //           position: absolute;
// // // //           width: 500px;
// // // //           height: 500px;
// // // //           border-radius: 50%;
// // // //           filter: blur(100px);
// // // //           pointer-events: none;
// // // //           z-index: 2;
// // // //         }
// // // //         .amb-blue {
// // // //           top: 30%;
// // // //           left: -200px;
// // // //           background: radial-gradient(
// // // //             circle,
// // // //             rgba(59, 130, 246, 0.25),
// // // //             transparent 65%
// // // //           );
// // // //           animation: ambFloat 8s ease-in-out infinite;
// // // //         }
// // // //         .amb-orange {
// // // //           top: 30%;
// // // //           right: -200px;
// // // //           background: radial-gradient(
// // // //             circle,
// // // //             rgba(243, 111, 33, 0.25),
// // // //             transparent 65%
// // // //           );
// // // //           animation: ambFloat 8s ease-in-out infinite reverse;
// // // //         }
// // // //         @keyframes ambFloat {
// // // //           0%,
// // // //           100% {
// // // //             transform: translateY(0) scale(1);
// // // //           }
// // // //           50% {
// // // //             transform: translateY(-30px) scale(1.05);
// // // //           }
// // // //         }

// // // //         /* sparkles */
// // // //         .sparkle {
// // // //           position: absolute;
// // // //           width: 5px;
// // // //           height: 5px;
// // // //           background: #fff;
// // // //           border-radius: 50%;
// // // //           box-shadow:
// // // //             0 0 10px #fff,
// // // //             0 0 18px rgba(243, 111, 33, 0.9);
// // // //           z-index: 3;
// // // //           animation: sparkleFloat 4s ease-in-out infinite;
// // // //         }
// // // //         .s1 {
// // // //           top: 30%;
// // // //           left: 12%;
// // // //           animation-delay: 0s;
// // // //         }
// // // //         .s2 {
// // // //           top: 60%;
// // // //           left: 22%;
// // // //           animation-delay: 1s;
// // // //           box-shadow:
// // // //             0 0 10px #fff,
// // // //             0 0 18px rgba(59, 130, 246, 0.9);
// // // //         }
// // // //         .s3 {
// // // //           top: 35%;
// // // //           left: 85%;
// // // //           animation-delay: 2s;
// // // //         }
// // // //         .s4 {
// // // //           top: 70%;
// // // //           left: 78%;
// // // //           animation-delay: 3s;
// // // //           box-shadow:
// // // //             0 0 10px #fff,
// // // //             0 0 18px rgba(59, 130, 246, 0.9);
// // // //         }
// // // //         @keyframes sparkleFloat {
// // // //           0%,
// // // //           100% {
// // // //             transform: translateY(0) scale(0);
// // // //             opacity: 0;
// // // //           }
// // // //           50% {
// // // //             transform: translateY(-25px) scale(1);
// // // //             opacity: 1;
// // // //           }
// // // //         }

// // // //         /* corner accents */
// // // //         .corner {
// // // //           position: absolute;
// // // //           width: 36px;
// // // //           height: 36px;
// // // //           border: 2px solid;
// // // //           z-index: 4;
// // // //           pointer-events: none;
// // // //         }
// // // //         .c-tl {
// // // //           top: 25px;
// // // //           left: 25px;
// // // //           border-color: #3b82f6;
// // // //           border-right: none;
// // // //           border-bottom: none;
// // // //         }
// // // //         .c-tr {
// // // //           top: 25px;
// // // //           right: 25px;
// // // //           border-color: #f36f21;
// // // //           border-left: none;
// // // //           border-bottom: none;
// // // //         }

// // // //         /* eyebrow */
// // // //         .eyebrow {
// // // //           background: #fff;
// // // //           border: 1px solid rgba(10, 39, 86, 0.12);
// // // //           padding: 7px 16px 7px 10px;
// // // //           border-radius: 50px;
// // // //           box-shadow: 0 4px 14px rgba(10, 39, 86, 0.1);
// // // //           font-size: 11.5px;
// // // //           font-weight: 700;
// // // //           letter-spacing: 2.5px;
// // // //           text-transform: uppercase;
// // // //           color: #0a2756;
// // // //           position: relative;
// // // //           z-index: 1;
// // // //         }
// // // //         .eb-dot {
// // // //           width: 8px;
// // // //           height: 8px;
// // // //           background: #f36f21;
// // // //           border-radius: 50%;
// // // //           box-shadow: 0 0 0 4px rgba(243, 111, 33, 0.2);
// // // //           animation: ebPulse 1.6s infinite;
// // // //         }
// // // //         @keyframes ebPulse {
// // // //           0%,
// // // //           100% {
// // // //             box-shadow: 0 0 0 4px rgba(243, 111, 33, 0.2);
// // // //           }
// // // //           50% {
// // // //             box-shadow: 0 0 0 9px rgba(243, 111, 33, 0.05);
// // // //           }
// // // //         }

// // // //         /* title */
// // // //         .hero-title {
// // // //           font-family: "Merriweather", Georgia, serif;
// // // //           font-size: 38px;
// // // //           font-weight: 900;
// // // //           line-height: 1.12;
// // // //           letter-spacing: -1px;
// // // //           color: #0a2756;
// // // //           margin: 0 auto 14px;
// // // //           position: relative;
// // // //           z-index: 1;
// // // //           text-shadow:
// // // //             0 1px 0 #fff,
// // // //             0 2px 18px rgba(255, 255, 255, 0.9),
// // // //             0 0 40px rgba(255, 255, 255, 0.8);
// // // //         }
// // // //         .title-accent {
// // // //           background: linear-gradient(135deg, #e63946 0%, #f36f21 100%);
// // // //           -webkit-background-clip: text;
// // // //           background-clip: text;
// // // //           -webkit-text-fill-color: transparent;
// // // //           font-style: italic;
// // // //         }
// // // //         .hero-desc {
// // // //           font-size: 14.5px;
// // // //           line-height: 1.65;
// // // //           color: #1a2f52;
// // // //           max-width: 520px;
// // // //           margin: 0 auto;
// // // //           position: relative;
// // // //           z-index: 1;
// // // //           text-shadow:
// // // //             0 1px 0 #fff,
// // // //             0 2px 14px rgba(255, 255, 255, 0.95);
// // // //         }

// // // //         :global(.ppc-link) {
// // // //           display: inline;
// // // //           color: #0a2756 !important;
// // // //           font-weight: 800;
// // // //           padding: 1px 8px;
// // // //           border-radius: 4px;
// // // //           background: linear-gradient(
// // // //             120deg,
// // // //             rgba(230, 57, 70, 0.18),
// // // //             rgba(243, 111, 33, 0.18)
// // // //           );
// // // //           text-decoration: none;
// // // //           border-bottom: 2px solid #e63946;
// // // //           transition: all 0.3s ease;
// // // //         }
// // // //         :global(.ppc-link:hover) {
// // // //           background: linear-gradient(120deg, #e63946, #f36f21);
// // // //           color: #fff !important;
// // // //           border-bottom-color: #fff;
// // // //         }

// // // //         /* mini partners */
// // // //         .mini-partners {
// // // //           padding-top: 14px;
// // // //           position: relative;
// // // //           z-index: 1;
// // // //         }
// // // //         .mp-tag {
// // // //           display: inline-flex;
// // // //           align-items: center;
// // // //           gap: 7px;
// // // //           font-size: 10.5px;
// // // //           font-weight: 800;
// // // //           letter-spacing: 1.8px;
// // // //           text-transform: uppercase;
// // // //           color: #0a2756;
// // // //           background: rgba(255, 255, 255, 0.75);
// // // //           padding: 4px 10px;
// // // //           border-radius: 50px;
// // // //         }
// // // //         .mp-divider {
// // // //           width: 1px;
// // // //           height: 14px;
// // // //           background: rgba(10, 39, 86, 0.2);
// // // //         }
// // // //         .pb-dot {
// // // //           width: 7px;
// // // //           height: 7px;
// // // //           border-radius: 50%;
// // // //         }
// // // //         .pb-dot-blue {
// // // //           background: #3b82f6;
// // // //           box-shadow: 0 0 8px #3b82f6;
// // // //         }
// // // //         .pb-dot-orange {
// // // //           background: #f36f21;
// // // //           box-shadow: 0 0 8px #f36f21;
// // // //         }

// // // //         /* =================================================
// // // //            DESKTOP — BOTTOM cta zone
// // // //            ================================================= */
// // // //         .cta-zone {
// // // //           background: linear-gradient(180deg, #fff 0%, #f6f9ff 100%);
// // // //           padding: 36px 0 44px;
// // // //           position: relative;
// // // //         }
// // // //         .cta-zone::before {
// // // //           content: "";
// // // //           position: absolute;
// // // //           top: 0;
// // // //           left: 50%;
// // // //           transform: translateX(-50%);
// // // //           width: 80px;
// // // //           height: 4px;
// // // //           background: linear-gradient(90deg, #3b82f6, #f36f21);
// // // //           border-radius: 0 0 4px 4px;
// // // //         }
// // // //         .cta-tagline {
// // // //           display: flex;
// // // //           align-items: center;
// // // //           justify-content: center;
// // // //           gap: 10px;
// // // //           font-size: 12px;
// // // //           font-weight: 700;
// // // //           letter-spacing: 1.5px;
// // // //           text-transform: uppercase;
// // // //           color: #6c757d;
// // // //         }

// // // //         /* buttons (shared) */
// // // //         :global(.btn-glow) {
// // // //           background: linear-gradient(135deg, #e63946, #c92e3a);
// // // //           color: #fff !important;
// // // //           font-size: 15px;
// // // //           font-weight: 700;
// // // //           padding: 14px 28px;
// // // //           border-radius: 60px;
// // // //           text-decoration: none;
// // // //           box-shadow: 0 12px 32px rgba(230, 57, 70, 0.4);
// // // //           transition: all 0.3s ease;
// // // //         }
// // // //         :global(.btn-glow:hover) {
// // // //           transform: translateY(-2px);
// // // //           box-shadow: 0 16px 40px rgba(230, 57, 70, 0.55);
// // // //         }
// // // //         :global(.btn-glow:hover .arrow-wrap) {
// // // //           background: #fff;
// // // //           color: #e63946;
// // // //         }
// // // //         .arrow-wrap {
// // // //           width: 26px;
// // // //           height: 26px;
// // // //           border-radius: 50%;
// // // //           background: rgba(255, 255, 255, 0.25);
// // // //           display: inline-flex;
// // // //           align-items: center;
// // // //           justify-content: center;
// // // //           transition: all 0.3s ease;
// // // //         }

// // // //         :global(.btn-outline) {
// // // //           background: #fff;
// // // //           color: #0a2756 !important;
// // // //           font-size: 15px;
// // // //           font-weight: 700;
// // // //           padding: 13px 24px;
// // // //           border-radius: 60px;
// // // //           border: 1.5px solid rgba(10, 39, 86, 0.18);
// // // //           text-decoration: none;
// // // //           transition: all 0.3s ease;
// // // //           box-shadow: 0 6px 18px rgba(10, 39, 86, 0.06);
// // // //         }
// // // //         :global(.btn-outline:hover) {
// // // //           border-color: #f36f21;
// // // //           color: #f36f21 !important;
// // // //           transform: translateY(-2px);
// // // //           box-shadow: 0 12px 28px rgba(243, 111, 33, 0.2);
// // // //         }
// // // //         :global(.btn-outline:hover .alumni-icon) {
// // // //           background: #f36f21;
// // // //           color: #fff;
// // // //           border-color: #f36f21;
// // // //         }
// // // //         :global(.btn-outline:hover .alumni-arrow) {
// // // //           transform: translateX(4px);
// // // //         }
// // // //         .alumni-icon {
// // // //           width: 26px;
// // // //           height: 26px;
// // // //           border-radius: 50%;
// // // //           background: rgba(243, 111, 33, 0.12);
// // // //           border: 1px solid rgba(243, 111, 33, 0.3);
// // // //           color: #f36f21;
// // // //           display: inline-flex;
// // // //           align-items: center;
// // // //           justify-content: center;
// // // //           transition: all 0.3s ease;
// // // //         }
// // // //         .alumni-arrow {
// // // //           transition: transform 0.3s ease;
// // // //         }

// // // //         /* tablet adjustments */
// // // //         @media (max-width: 1199px) and (min-width: 768px) {
// // // //           .image-zone {
// // // //             height: 80vh;
// // // //             min-height: 600px;
// // // //           }
// // // //           .card-position {
// // // //             top: clamp(14px, 4vh, 44px);
// // // //           }
// // // //           .content-card {
// // // //             max-width: 560px;
// // // //           }
// // // //           .hero-title {
// // // //             font-size: 32px;
// // // //           }
// // // //           .hero-desc {
// // // //             font-size: 14px;
// // // //           }
// // // //           .corner {
// // // //             width: 28px;
// // // //             height: 28px;
// // // //           }
// // // //         }

// // // //         /* =================================================
// // // //            MOBILE LAYOUT
// // // //            ================================================= */
// // // //         .mobile-only {
// // // //           background: linear-gradient(180deg, #fff 0%, #f6f9ff 100%);
// // // //         }
// // // //         .m-hero-title {
// // // //           font-family: "Merriweather", Georgia, serif;
// // // //           font-size: 28px;
// // // //           font-weight: 900;
// // // //           line-height: 1.15;
// // // //           letter-spacing: -0.5px;
// // // //           color: #0a2756;
// // // //           margin: 0 auto 14px;
// // // //           padding: 0 8px;
// // // //         }
// // // //         .m-hero-desc {
// // // //           font-size: 14px;
// // // //           line-height: 1.6;
// // // //           color: #4a5568;
// // // //           margin: 0;
// // // //           padding: 0 12px;
// // // //         }
// // // //         .m-image-wrap {
// // // //           position: relative;
// // // //           margin: 16px -8px 0;
// // // //           padding: 0;
// // // //           border-radius: 18px;
// // // //           overflow: hidden;
// // // //           box-shadow: 0 20px 50px rgba(10, 39, 86, 0.12);
// // // //           background: #eef3fb;
// // // //           aspect-ratio: 16 / 10;
// // // //         }
// // // //         .m-image {
// // // //           width: 100%;
// // // //           height: 100%;
// // // //           object-fit: cover;
// // // //           object-position: top center;
// // // //           display: block;
// // // //         }
// // // //         .m-badge {
// // // //           position: absolute;
// // // //           top: 12px;
// // // //           background: rgba(255, 255, 255, 0.95);
// // // //           backdrop-filter: blur(10px);
// // // //           padding: 5px 11px;
// // // //           border-radius: 50px;
// // // //           font-size: 9.5px;
// // // //           font-weight: 800;
// // // //           letter-spacing: 1.5px;
// // // //           text-transform: uppercase;
// // // //           color: #0a2756;
// // // //           display: inline-flex;
// // // //           align-items: center;
// // // //           gap: 6px;
// // // //           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
// // // //           z-index: 2;
// // // //         }
// // // //         .m-badge-left {
// // // //           left: 12px;
// // // //         }
// // // //         .m-badge-right {
// // // //           right: 12px;
// // // //         }

// // // //         @media (max-width: 767px) {
// // // //           :global(.btn-glow),
// // // //           :global(.btn-outline) {
// // // //             font-size: 13.5px;
// // // //             padding: 12px 20px;
// // // //             width: 100%;
// // // //           }
// // // //           .arrow-wrap,
// // // //           .alumni-icon {
// // // //             width: 22px;
// // // //             height: 22px;
// // // //           }
// // // //           .eyebrow {
// // // //             font-size: 9.5px;
// // // //             letter-spacing: 1.5px;
// // // //             padding: 5px 12px 5px 8px;
// // // //           }
// // // //         }

// // // //         @media (max-width: 360px) {
// // // //           .m-hero-title {
// // // //             font-size: 24px;
// // // //           }
// // // //         }
// // // //       `}</style>
// // // //     </section>
// // // //   );
// // // // }

// // // import Link from "next/link";

// // // export default function Hero() {
// // //   return (
// // //     <section className="hero-section position-relative overflow-hidden">
// // //       {/* ============ DESKTOP LAYOUT ============ */}
// // //       <div className="desktop-only">
// // //         {/* TOP zone — image with centered card */}
// // //         <div className="image-zone position-relative">
// // //           {/* full background image */}
// // //           <div className="bg-image" />

// // //           {/* decorative ambient glows */}
// // //           <span className="amb-glow amb-blue" />
// // //           <span className="amb-glow amb-orange" />

// // //           {/* sparkles */}
// // //           <span className="sparkle s1" />
// // //           <span className="sparkle s2" />
// // //           <span className="sparkle s3" />
// // //           <span className="sparkle s4" />

// // //           {/* corner accents */}
// // //           <span className="corner c-tl" />
// // //           <span className="corner c-tr" />

// // //           <div
// // //             className="container position-relative h-100"
// // //             style={{ zIndex: 5 }}
// // //           >
// // //             <div className="card-position">
// // //               {/* TOP content — sits above handshake, between logos, blended (no box) */}
// // //               <div className="content-card text-center">
// // //                 <div className="eyebrow d-inline-flex align-items-center gap-2 mb-3">
// // //                   <span className="eb-dot" />
// // //                   <span>Clinical Affiliation · Now Active</span>
// // //                 </div>

// // //                 <h1 className="hero-title">
// // //                   A Landmark Affiliation in{" "}
// // //                   <span className="title-accent">Clinical Education</span>
// // //                 </h1>

// // //                 <p className="hero-desc mx-auto">
// // //                   <a
// // //                     href="https://www.mypremierpain.com/"
// // //                     target="_blank"
// // //                     rel="noopener noreferrer"
// // //                     className="ppc-link"
// // //                   >
// // //                     Premier Pain Centers
// // //                   </a>{" "}
// // //                   is now the official clinical rotation site for SHSU&apos;s
// // //                   College of Osteopathic Medicine — pairing students with
// // //                   credentialed preceptors.
// // //                 </p>

// // //                 {/* mini partner row */}
// // //                 <div className="mini-partners d-flex justify-content-center align-items-center gap-3 mt-4">
// // //                   <span className="mp-tag">
// // //                     <span className="pb-dot pb-dot-blue" />
// // //                     Clinical Site
// // //                   </span>
// // //                   <span className="mp-divider" />
// // //                   <span className="mp-tag">
// // //                     Academic Partner
// // //                     <span className="pb-dot pb-dot-orange" />
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* BOTTOM zone — CTAs below image */}
// // //         <div className="cta-zone">
// // //           <div className="container">
// // //             <div className="d-flex justify-content-center flex-wrap align-items-center gap-3">
// // //               <Link
// // //                 href="/externship-application-form"
// // //                 className="btn-glow d-inline-flex align-items-center gap-2"
// // //               >
// // //                 Apply for Externship
// // //                 <span className="arrow-wrap">
// // //                   <svg
// // //                     width="14"
// // //                     height="14"
// // //                     viewBox="0 0 24 24"
// // //                     fill="none"
// // //                     stroke="currentColor"
// // //                     strokeWidth="3"
// // //                     strokeLinecap="round"
// // //                   >
// // //                     <path d="M5 12h14M13 5l7 7-7 7" />
// // //                   </svg>
// // //                 </span>
// // //               </Link>

// // //               <Link
// // //                 href="/alumni"
// // //                 className="btn-outline d-inline-flex align-items-center gap-2"
// // //               >
// // //                 <span className="alumni-icon">
// // //                   <svg
// // //                     width="14"
// // //                     height="14"
// // //                     viewBox="0 0 24 24"
// // //                     fill="none"
// // //                     stroke="currentColor"
// // //                     strokeWidth="2.5"
// // //                     strokeLinecap="round"
// // //                     strokeLinejoin="round"
// // //                   >
// // //                     <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
// // //                     <path d="M6 12v5c3 3 9 3 12 0v-5" />
// // //                   </svg>
// // //                 </span>
// // //                 Our Alumni
// // //                 <span className="alumni-arrow">→</span>
// // //               </Link>
// // //             </div>

// // //             {/* tagline */}
// // //             <p className="cta-tagline text-center mt-4 mb-0">
// // //               <span className="pb-dot pb-dot-blue" />
// // //               <span>
// // //                 A Partnership Built for the Next Generation of Physicians
// // //               </span>
// // //               <span className="pb-dot pb-dot-orange" />
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* ============ MOBILE LAYOUT ============ */}
// // //       <div className="mobile-only">
// // //         <div className="container">
// // //           {/* image FIRST */}
// // //           <div className="m-image-wrap">
// // //             <img
// // //               src="/images/3.png"
// // //               alt="Premier Pain Centers x Sam Houston State University Partnership"
// // //               className="m-image"
// // //             />
// // //             <span className="m-badge m-badge-left">
// // //               <span className="pb-dot pb-dot-blue" />
// // //               Clinical Site
// // //             </span>
// // //             <span className="m-badge m-badge-right">
// // //               Academic Partner
// // //               <span className="pb-dot pb-dot-orange" />
// // //             </span>
// // //           </div>

// // //           {/* text SECOND */}
// // //           <div className="text-center pt-3 pb-2">
// // //             <div className="eyebrow d-inline-flex align-items-center gap-2 mb-3">
// // //               <span className="eb-dot" />
// // //               <span>Clinical Affiliation · Now Active</span>
// // //             </div>

// // //             <h1 className="m-hero-title">
// // //               A Landmark Affiliation in{" "}
// // //               <span className="title-accent">Clinical Education</span>
// // //             </h1>

// // //             <p className="m-hero-desc">
// // //               <a
// // //                 href="https://www.mypremierpain.com/"
// // //                 target="_blank"
// // //                 rel="noopener noreferrer"
// // //                 className="ppc-link"
// // //               >
// // //                 Premier Pain Centers
// // //               </a>{" "}
// // //               is now the official clinical rotation site for SHSU&apos;s College
// // //               of Osteopathic Medicine.
// // //             </p>
// // //           </div>

// // //           {/* buttons THIRD */}
// // //           <div className="d-flex flex-column gap-2 mt-3 pb-4 px-2">
// // //             <Link
// // //               href="/externship-application-form"
// // //               className="btn-glow d-inline-flex align-items-center justify-content-center gap-2"
// // //             >
// // //               Apply for Externship
// // //               <span className="arrow-wrap">
// // //                 <svg
// // //                   width="14"
// // //                   height="14"
// // //                   viewBox="0 0 24 24"
// // //                   fill="none"
// // //                   stroke="currentColor"
// // //                   strokeWidth="3"
// // //                   strokeLinecap="round"
// // //                 >
// // //                   <path d="M5 12h14M13 5l7 7-7 7" />
// // //                 </svg>
// // //               </span>
// // //             </Link>

// // //             <Link
// // //               href="/alumni"
// // //               className="btn-outline d-inline-flex align-items-center justify-content-center gap-2"
// // //             >
// // //               <span className="alumni-icon">
// // //                 <svg
// // //                   width="14"
// // //                   height="14"
// // //                   viewBox="0 0 24 24"
// // //                   fill="none"
// // //                   stroke="currentColor"
// // //                   strokeWidth="2.5"
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                 >
// // //                   <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
// // //                   <path d="M6 12v5c3 3 9 3 12 0v-5" />
// // //                 </svg>
// // //               </span>
// // //               Our Alumni
// // //               <span className="alumni-arrow">→</span>
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <style jsx>{`
// // //         .hero-section {
// // //           color: #0a2756;
// // //           background: #fff;
// // //           position: relative;
// // //         }

// // //         .desktop-only {
// // //           display: block;
// // //         }
// // //         .mobile-only {
// // //           display: none;
// // //         }
// // //         @media (max-width: 767px) {
// // //           .desktop-only {
// // //             display: none;
// // //           }
// // //           .mobile-only {
// // //             display: block;
// // //           }
// // //         }

// // //         /* =================================================
// // //            DESKTOP — TOP image zone
// // //            ================================================= */
// // //         .image-zone {
// // //           height: 92vh;
// // //           min-height: 720px;
// // //           overflow: hidden;
// // //         }
// // //         .bg-image {
// // //           position: absolute;
// // //           inset: 0;
// // //           background-image: url("/images/3.png");
// // //           background-size: cover;
// // //           background-position: top center;
// // //           background-repeat: no-repeat;
// // //           z-index: 1;
// // //           /* opacity: 0.9; */
// // //           animation: bgPulse 10s ease-in-out infinite;
// // //         }
// // //         @keyframes bgPulse {
// // //           0%,
// // //           100% {
// // //             transform: scale(1);
// // //           }
// // //           50% {
// // //             transform: scale(1.02);
// // //           }
// // //         }

// // //         /* ===== card position — pinned near the top, between the two logos ===== */
// // //         .card-position {
// // //           position: absolute;
// // //           top: clamp(18px, 6vh, 64px);
// // //           left: 50%;
// // //           transform: translateX(-50%);
// // //           width: 100%;
// // //           display: flex;
// // //           justify-content: center;
// // //           padding: 0 16px;
// // //         }

// // //         /* ===== CONTENT — blended onto the image, soft glow instead of a hard box ===== */
// // //         .content-card {
// // //           background: transparent;
// // //           padding: 28px 40px 24px;
// // //           max-width: 660px;
// // //           width: 92%;
// // //           position: relative;
// // //           z-index: 1;
// // //         }
// // //         .content-card::before {
// // //           content: "";
// // //           position: absolute;
// // //           inset: -10px -30px;
// // //           background: radial-gradient(
// // //             ellipse 65% 75% at center,
// // //             rgba(255, 255, 255, 0.96) 0%,
// // //             rgba(255, 255, 255, 0.88) 45%,
// // //             rgba(255, 255, 255, 0.55) 70%,
// // //             rgba(255, 255, 255, 0) 100%
// // //           );
// // //           filter: blur(4px);
// // //           z-index: -1;
// // //           pointer-events: none;
// // //         }

// // //         /* ambient glows */
// // //         .amb-glow {
// // //           position: absolute;
// // //           width: 500px;
// // //           height: 500px;
// // //           border-radius: 50%;
// // //           filter: blur(100px);
// // //           pointer-events: none;
// // //           z-index: 2;
// // //         }
// // //         .amb-blue {
// // //           top: 30%;
// // //           left: -200px;
// // //           background: radial-gradient(
// // //             circle,
// // //             rgba(59, 130, 246, 0.25),
// // //             transparent 65%
// // //           );
// // //           animation: ambFloat 8s ease-in-out infinite;
// // //         }
// // //         .amb-orange {
// // //           top: 30%;
// // //           right: -200px;
// // //           background: radial-gradient(
// // //             circle,
// // //             rgba(243, 111, 33, 0.25),
// // //             transparent 65%
// // //           );
// // //           animation: ambFloat 8s ease-in-out infinite reverse;
// // //         }
// // //         @keyframes ambFloat {
// // //           0%,
// // //           100% {
// // //             transform: translateY(0) scale(1);
// // //           }
// // //           50% {
// // //             transform: translateY(-30px) scale(1.05);
// // //           }
// // //         }

// // //         /* sparkles */
// // //         .sparkle {
// // //           position: absolute;
// // //           width: 5px;
// // //           height: 5px;
// // //           background: #fff;
// // //           border-radius: 50%;
// // //           box-shadow:
// // //             0 0 10px #fff,
// // //             0 0 18px rgba(243, 111, 33, 0.9);
// // //           z-index: 3;
// // //           animation: sparkleFloat 4s ease-in-out infinite;
// // //         }
// // //         .s1 {
// // //           top: 30%;
// // //           left: 12%;
// // //           animation-delay: 0s;
// // //         }
// // //         .s2 {
// // //           top: 60%;
// // //           left: 22%;
// // //           animation-delay: 1s;
// // //           box-shadow:
// // //             0 0 10px #fff,
// // //             0 0 18px rgba(59, 130, 246, 0.9);
// // //         }
// // //         .s3 {
// // //           top: 35%;
// // //           left: 85%;
// // //           animation-delay: 2s;
// // //         }
// // //         .s4 {
// // //           top: 70%;
// // //           left: 78%;
// // //           animation-delay: 3s;
// // //           box-shadow:
// // //             0 0 10px #fff,
// // //             0 0 18px rgba(59, 130, 246, 0.9);
// // //         }
// // //         @keyframes sparkleFloat {
// // //           0%,
// // //           100% {
// // //             transform: translateY(0) scale(0);
// // //             opacity: 0;
// // //           }
// // //           50% {
// // //             transform: translateY(-25px) scale(1);
// // //             opacity: 1;
// // //           }
// // //         }

// // //         /* corner accents */
// // //         .corner {
// // //           position: absolute;
// // //           width: 36px;
// // //           height: 36px;
// // //           border: 2px solid;
// // //           z-index: 4;
// // //           pointer-events: none;
// // //         }
// // //         .c-tl {
// // //           top: 25px;
// // //           left: 25px;
// // //           border-color: #3b82f6;
// // //           border-right: none;
// // //           border-bottom: none;
// // //         }
// // //         .c-tr {
// // //           top: 25px;
// // //           right: 25px;
// // //           border-color: #f36f21;
// // //           border-left: none;
// // //           border-bottom: none;
// // //         }

// // //         /* eyebrow */
// // //         .eyebrow {
// // //           background: #fff;
// // //           border: 1px solid rgba(10, 39, 86, 0.12);
// // //           padding: 7px 16px 7px 10px;
// // //           border-radius: 50px;
// // //           box-shadow: 0 4px 14px rgba(10, 39, 86, 0.1);
// // //           font-size: 11.5px;
// // //           font-weight: 700;
// // //           letter-spacing: 2.5px;
// // //           text-transform: uppercase;
// // //           color: #0a2756;
// // //           position: relative;
// // //           z-index: 1;
// // //         }
// // //         .eb-dot {
// // //           width: 8px;
// // //           height: 8px;
// // //           background: #f36f21;
// // //           border-radius: 50%;
// // //           box-shadow: 0 0 0 4px rgba(243, 111, 33, 0.2);
// // //           animation: ebPulse 1.6s infinite;
// // //         }
// // //         @keyframes ebPulse {
// // //           0%,
// // //           100% {
// // //             box-shadow: 0 0 0 4px rgba(243, 111, 33, 0.2);
// // //           }
// // //           50% {
// // //             box-shadow: 0 0 0 9px rgba(243, 111, 33, 0.05);
// // //           }
// // //         }

// // //         /* title */
// // //         .hero-title {
// // //           font-family: "Merriweather", Georgia, serif;
// // //           font-size: 38px;
// // //           font-weight: 900;
// // //           line-height: 1.12;
// // //           letter-spacing: -1px;
// // //           color: #0a2756;
// // //           margin: 0 auto 14px;
// // //           position: relative;
// // //           z-index: 1;
// // //           text-shadow:
// // //             0 1px 0 #fff,
// // //             0 2px 18px rgba(255, 255, 255, 0.9),
// // //             0 0 40px rgba(255, 255, 255, 0.8);
// // //         }
// // //         .title-accent {
// // //           background: linear-gradient(135deg, #e63946 0%, #f36f21 100%);
// // //           -webkit-background-clip: text;
// // //           background-clip: text;
// // //           -webkit-text-fill-color: transparent;
// // //           font-style: italic;
// // //         }
// // //         .hero-desc {
// // //           font-size: 14.5px;
// // //           line-height: 1.65;
// // //           color: #1a2f52;
// // //           max-width: 520px;
// // //           margin: 0 auto;
// // //           position: relative;
// // //           z-index: 1;
// // //           text-shadow:
// // //             0 1px 0 #fff,
// // //             0 2px 14px rgba(255, 255, 255, 0.95);
// // //         }

// // //         :global(.ppc-link) {
// // //           display: inline;
// // //           color: #0a2756 !important;
// // //           font-weight: 800;
// // //           padding: 1px 8px;
// // //           border-radius: 4px;
// // //           background: linear-gradient(
// // //             120deg,
// // //             rgba(230, 57, 70, 0.18),
// // //             rgba(243, 111, 33, 0.18)
// // //           );
// // //           text-decoration: none;
// // //           border-bottom: 2px solid #e63946;
// // //           transition: all 0.3s ease;
// // //         }
// // //         :global(.ppc-link:hover) {
// // //           background: linear-gradient(120deg, #e63946, #f36f21);
// // //           color: #fff !important;
// // //           border-bottom-color: #fff;
// // //         }

// // //         /* mini partners */
// // //         .mini-partners {
// // //           padding-top: 14px;
// // //           position: relative;
// // //           z-index: 1;
// // //         }
// // //         .mp-tag {
// // //           display: inline-flex;
// // //           align-items: center;
// // //           gap: 7px;
// // //           font-size: 10.5px;
// // //           font-weight: 800;
// // //           letter-spacing: 1.8px;
// // //           text-transform: uppercase;
// // //           color: #0a2756;
// // //           background: rgba(255, 255, 255, 0.75);
// // //           padding: 4px 10px;
// // //           border-radius: 50px;
// // //         }
// // //         .mp-divider {
// // //           width: 1px;
// // //           height: 14px;
// // //           background: rgba(10, 39, 86, 0.2);
// // //         }
// // //         .pb-dot {
// // //           width: 7px;
// // //           height: 7px;
// // //           border-radius: 50%;
// // //         }
// // //         .pb-dot-blue {
// // //           background: #3b82f6;
// // //           box-shadow: 0 0 8px #3b82f6;
// // //         }
// // //         .pb-dot-orange {
// // //           background: #f36f21;
// // //           box-shadow: 0 0 8px #f36f21;
// // //         }

// // //         /* =================================================
// // //            DESKTOP — BOTTOM cta zone
// // //            ================================================= */
// // //         .cta-zone {
// // //           background: linear-gradient(180deg, #fff 0%, #f6f9ff 100%);
// // //           padding: 36px 0 44px;
// // //           position: relative;
// // //         }
// // //         .cta-zone::before {
// // //           content: "";
// // //           position: absolute;
// // //           top: 0;
// // //           left: 50%;
// // //           transform: translateX(-50%);
// // //           width: 80px;
// // //           height: 4px;
// // //           background: linear-gradient(90deg, #3b82f6, #f36f21);
// // //           border-radius: 0 0 4px 4px;
// // //         }
// // //         .cta-tagline {
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           gap: 10px;
// // //           font-size: 12px;
// // //           font-weight: 700;
// // //           letter-spacing: 1.5px;
// // //           text-transform: uppercase;
// // //           color: #6c757d;
// // //         }

// // //         /* buttons (shared) */
// // //         :global(.btn-glow) {
// // //           background: linear-gradient(135deg, #e63946, #c92e3a);
// // //           color: #fff !important;
// // //           font-size: 15px;
// // //           font-weight: 700;
// // //           padding: 14px 28px;
// // //           border-radius: 60px;
// // //           text-decoration: none;
// // //           box-shadow: 0 12px 32px rgba(230, 57, 70, 0.4);
// // //           transition: all 0.3s ease;
// // //         }
// // //         :global(.btn-glow:hover) {
// // //           transform: translateY(-2px);
// // //           box-shadow: 0 16px 40px rgba(230, 57, 70, 0.55);
// // //         }
// // //         :global(.btn-glow:hover .arrow-wrap) {
// // //           background: #fff;
// // //           color: #e63946;
// // //         }
// // //         .arrow-wrap {
// // //           width: 26px;
// // //           height: 26px;
// // //           border-radius: 50%;
// // //           background: rgba(255, 255, 255, 0.25);
// // //           display: inline-flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           transition: all 0.3s ease;
// // //         }

// // //         :global(.btn-outline) {
// // //           background: #fff;
// // //           color: #0a2756 !important;
// // //           font-size: 15px;
// // //           font-weight: 700;
// // //           padding: 13px 24px;
// // //           border-radius: 60px;
// // //           border: 1.5px solid rgba(10, 39, 86, 0.18);
// // //           text-decoration: none;
// // //           transition: all 0.3s ease;
// // //           box-shadow: 0 6px 18px rgba(10, 39, 86, 0.06);
// // //         }
// // //         :global(.btn-outline:hover) {
// // //           border-color: #f36f21;
// // //           color: #f36f21 !important;
// // //           transform: translateY(-2px);
// // //           box-shadow: 0 12px 28px rgba(243, 111, 33, 0.2);
// // //         }
// // //         :global(.btn-outline:hover .alumni-icon) {
// // //           background: #f36f21;
// // //           color: #fff;
// // //           border-color: #f36f21;
// // //         }
// // //         :global(.btn-outline:hover .alumni-arrow) {
// // //           transform: translateX(4px);
// // //         }
// // //         .alumni-icon {
// // //           width: 26px;
// // //           height: 26px;
// // //           border-radius: 50%;
// // //           background: rgba(243, 111, 33, 0.12);
// // //           border: 1px solid rgba(243, 111, 33, 0.3);
// // //           color: #f36f21;
// // //           display: inline-flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           transition: all 0.3s ease;
// // //         }
// // //         .alumni-arrow {
// // //           transition: transform 0.3s ease;
// // //         }

// // //         /* tablet adjustments */
// // //         @media (max-width: 1199px) and (min-width: 768px) {
// // //           .image-zone {
// // //             height: 80vh;
// // //             min-height: 600px;
// // //           }
// // //           .card-position {
// // //             top: clamp(14px, 4vh, 44px);
// // //           }
// // //           .content-card {
// // //             max-width: 560px;
// // //           }
// // //           .hero-title {
// // //             font-size: 32px;
// // //           }
// // //           .hero-desc {
// // //             font-size: 14px;
// // //           }
// // //           .corner {
// // //             width: 28px;
// // //             height: 28px;
// // //           }
// // //         }

// // //         /* =================================================
// // //            MOBILE LAYOUT
// // //            ================================================= */
// // //         .mobile-only {
// // //           background: linear-gradient(180deg, #fff 0%, #f6f9ff 100%);
// // //         }
// // //         .m-hero-title {
// // //           font-family: "Merriweather", Georgia, serif;
// // //           font-size: 28px;
// // //           font-weight: 900;
// // //           line-height: 1.15;
// // //           letter-spacing: -0.5px;
// // //           color: #0a2756;
// // //           margin: 0 auto 14px;
// // //           padding: 0 8px;
// // //         }
// // //         .m-hero-desc {
// // //           font-size: 14px;
// // //           line-height: 1.6;
// // //           color: #4a5568;
// // //           margin: 0;
// // //           padding: 0 12px;
// // //         }
// // //         .m-image-wrap {
// // //           position: relative;
// // //           margin: 16px -8px 0;
// // //           padding: 0;
// // //           border-radius: 18px;
// // //           overflow: hidden;
// // //           box-shadow: 0 20px 50px rgba(10, 39, 86, 0.12);
// // //           background: #eef3fb;
// // //           aspect-ratio: 16 / 10;
// // //         }
// // //         .m-image {
// // //           width: 100%;
// // //           height: 100%;
// // //           object-fit: cover;
// // //           object-position: top center;
// // //           display: block;
// // //         }
// // //         .m-badge {
// // //           position: absolute;
// // //           top: 12px;
// // //           background: rgba(255, 255, 255, 0.95);
// // //           backdrop-filter: blur(10px);
// // //           padding: 5px 11px;
// // //           border-radius: 50px;
// // //           font-size: 9.5px;
// // //           font-weight: 800;
// // //           letter-spacing: 1.5px;
// // //           text-transform: uppercase;
// // //           color: #0a2756;
// // //           display: inline-flex;
// // //           align-items: center;
// // //           gap: 6px;
// // //           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
// // //           z-index: 2;
// // //         }
// // //         .m-badge-left {
// // //           left: 12px;
// // //         }
// // //         .m-badge-right {
// // //           right: 12px;
// // //         }

// // //         @media (max-width: 767px) {
// // //           :global(.btn-glow),
// // //           :global(.btn-outline) {
// // //             font-size: 13.5px;
// // //             padding: 12px 20px;
// // //             width: 100%;
// // //           }
// // //           .arrow-wrap,
// // //           .alumni-icon {
// // //             width: 22px;
// // //             height: 22px;
// // //           }
// // //           .eyebrow {
// // //             font-size: 9.5px;
// // //             letter-spacing: 1.5px;
// // //             padding: 5px 12px 5px 8px;
// // //           }
// // //         }

// // //         @media (max-width: 360px) {
// // //           .m-hero-title {
// // //             font-size: 24px;
// // //           }
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // }

// // import Link from "next/link";

// // export default function Hero() {
// //   return (
// //     <section className="hero-section position-relative overflow-hidden">
// //       {/* ============ DESKTOP LAYOUT ============ */}
// //       <div className="desktop-only">
// //         <div className="image-zone position-relative">
// //           {/* full background image */}
// //           <div className="bg-image" />

// //           {/* soft fade overlay on top — keeps image visible but fades busy area */}
// //           <div className="fade-overlay" />

// //           <div
// //             className="container position-relative h-100"
// //             style={{ zIndex: 5 }}
// //           >
// //             <div className="card-position text-center py-4">
// //               {/* BIG headline */}
// //               <h1 className="hero-title">
// //                 A Landmark Affiliation in
// //                 <br />
// //                 <span className="title-accent">Clinical Education</span>
// //               </h1>

// //               {/* description */}
// //               <p className="hero-desc mx-auto mb-3">
// //                 <a
// //                   href="https://www.mypremierpain.com/"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="ppc-link"
// //                 >
// //                   Premier Pain Centers
// //                 </a>{" "}
// //                 is now the official clinical rotation site for SHSU&apos;s
// //                 College of Osteopathic Medicine — pairing students with
// //                 credentialed preceptors.
// //               </p>
// //               <Link
// //                 href="/externship-application-form"
// //                 className="btn-glow d-inline-flex align-items-center gap-2 me-3"
// //               >
// //                 Apply for Externship
// //                 <span className="arrow-wrap">
// //                   <svg
// //                     width="14"
// //                     height="14"
// //                     viewBox="0 0 24 24"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     strokeWidth="3"
// //                     strokeLinecap="round"
// //                   >
// //                     <path d="M5 12h14M13 5l7 7-7 7" />
// //                   </svg>
// //                 </span>
// //               </Link>

// //               <Link
// //                 href="/alumni"
// //                 className="btn-outline d-inline-flex align-items-center gap-2"
// //               >
// //                 <span className="alumni-icon">
// //                   <svg
// //                     width="14"
// //                     height="14"
// //                     viewBox="0 0 24 24"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     strokeWidth="2.5"
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   >
// //                     <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
// //                     <path d="M6 12v5c3 3 9 3 12 0v-5" />
// //                   </svg>
// //                 </span>
// //                 Our Alumni
// //                 <span className="alumni-arrow">→</span>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ============ MOBILE LAYOUT ============ */}
// //       <div className="mobile-only">
// //         <div className="container">
// //           <div className="m-image-wrap">
// //             <img
// //               src="/images/3.png"
// //               alt="Premier Pain Centers x Sam Houston State University Partnership"
// //               className="m-image"
// //             />
// //           </div>

// //           <div className="text-center pt-3 pb-2">
// //             <h1 className="m-hero-title">
// //               A Landmark Affiliation in{" "}
// //               <span className="title-accent">Clinical Education</span>
// //             </h1>

// //             <p className="m-hero-desc">
// //               <a
// //                 href="https://www.mypremierpain.com/"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="ppc-link"
// //               >
// //                 Premier Pain Centers
// //               </a>{" "}
// //               is now the official clinical rotation site for SHSU&apos;s College
// //               of Osteopathic Medicine.
// //             </p>
// //           </div>

// //           <div className="d-flex flex-column gap-2 mt-3 pb-4 px-2">
// //             <Link
// //               href="/externship-application-form"
// //               className="btn-glow d-inline-flex align-items-center justify-content-center gap-2"
// //             >
// //               Apply for Externship
// //               <span className="arrow-wrap">
// //                 <svg
// //                   width="14"
// //                   height="14"
// //                   viewBox="0 0 24 24"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth="3"
// //                   strokeLinecap="round"
// //                 >
// //                   <path d="M5 12h14M13 5l7 7-7 7" />
// //                 </svg>
// //               </span>
// //             </Link>

// //             <Link
// //               href="/alumni"
// //               className="btn-outline d-inline-flex align-items-center justify-content-center gap-2"
// //             >
// //               <span className="alumni-icon">
// //                 <svg
// //                   width="14"
// //                   height="14"
// //                   viewBox="0 0 24 24"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth="2.5"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 >
// //                   <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
// //                   <path d="M6 12v5c3 3 9 3 12 0v-5" />
// //                 </svg>
// //               </span>
// //               Our Alumni
// //               <span className="alumni-arrow">→</span>
// //             </Link>
// //           </div>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         .hero-section {
// //           color: #0a2756;
// //           background: #fff;
// //           position: relative;
// //         }

// //         .desktop-only {
// //           display: block;
// //         }
// //         .mobile-only {
// //           display: none;
// //         }
// //         @media (max-width: 767px) {
// //           .desktop-only {
// //             display: none;
// //           }
// //           .mobile-only {
// //             display: block;
// //           }
// //         }

// //         /* =================================================
// //            DESKTOP — image zone
// //            ================================================= */
// //         .image-zone {
// //           height: 92vh;
// //           min-height: 720px;
// //           overflow: hidden;
// //         }
// //         .bg-image {
// //           position: absolute;
// //           inset: 0;
// //           background-image: url("/images/3.png");
// //           background-size: cover;
// //           background-position: center;
// //           background-repeat: no-repeat;
// //           z-index: 1;
// //         }

// //         /* soft white fade — keeps image visible but improves text legibility */
// //         .fade-overlay {
// //           position: absolute;
// //           inset: 0;
// //           background: linear-gradient(
// //             180deg,
// //             rgba(0, 0, 0, 0.35) 0%,
// //             rgba(0, 0, 0, 0.25) 28%,
// //             rgba(0, 0, 0, 0.1) 52%,
// //             rgba(0, 0, 0, 0) 70%
// //           );
// //           z-index: 2;
// //           pointer-events: none;
// //         }

// //         /* card position — top centered like dream home reference */
// //         .card-position {
// //           position: absolute;
// //           /* top: clamp(60px, 30vh, 130px); */
// //           /* top: clamp(90px, 35vh, 170px); */
// //           top: clamp(120px, 40vh, 220px);

// //           left: 50%;
// //           transform: translateX(-50%);
// //           width: 100%;
// //           max-width: 880px;
// //           padding: 0 24px;
// //           z-index: 3;

// //           background: rgba(255, 255, 255, 0.3);
// //           backdrop-filter: blur(6px);
// //           -webkit-backdrop-filter: blur(6px);
// //           border-radius: 24px;
// //         }

// //         /* corner accents */
// //         .corner {
// //           position: absolute;
// //           width: 36px;
// //           height: 36px;
// //           border: 2px solid;
// //           z-index: 4;
// //           pointer-events: none;
// //         }
// //         .c-tl {
// //           top: 25px;
// //           left: 25px;
// //           border-color: #3b82f6;
// //           border-right: none;
// //           border-bottom: none;
// //         }
// //         .c-tr {
// //           top: 25px;
// //           right: 25px;
// //           border-color: #f36f21;
// //           border-left: none;
// //           border-bottom: none;
// //         }

// //         /* eyebrow */
// //         .eyebrow {
// //           background: #fff;
// //           border: 1px solid rgba(10, 39, 86, 0.15);
// //           padding: 7px 18px 7px 12px;
// //           border-radius: 50px;
// //           box-shadow: 0 6px 18px rgba(10, 39, 86, 0.12);
// //           font-size: 11.5px;
// //           font-weight: 700;
// //           letter-spacing: 3px;
// //           text-transform: uppercase;
// //           color: #0a2756;
// //         }
// //         .eb-dot {
// //           width: 8px;
// //           height: 8px;
// //           background: #f36f21;
// //           border-radius: 50%;
// //           box-shadow: 0 0 0 4px rgba(243, 111, 33, 0.2);
// //           animation: ebPulse 1.6s infinite;
// //         }
// //         @keyframes ebPulse {
// //           0%,
// //           100% {
// //             box-shadow: 0 0 0 4px rgba(243, 111, 33, 0.2);
// //           }
// //           50% {
// //             box-shadow: 0 0 0 9px rgba(243, 111, 33, 0.05);
// //           }
// //         }

// //         /* BIG headline (dream home style) */
// //         .hero-title {
// //           font-family: "Merriweather", Georgia, serif;
// //           font-size: 62px;
// //           font-weight: 900;
// //           line-height: 1.08;
// //           letter-spacing: -2px;
// //           color: #0a2756;
// //           margin: 0 auto 18px;
// //           text-shadow: 0 2px 30px rgba(255, 255, 255, 0.9);
// //         }
// //         .title-accent {
// //           background: linear-gradient(135deg, #e63946 0%, #f36f21 100%);
// //           -webkit-background-clip: text;
// //           background-clip: text;
// //           -webkit-text-fill-color: transparent;
// //           font-style: italic;
// //         }
// //         .hero-desc {
// //           font-size: 16px;
// //           line-height: 1.65;
// //           color: #1a2f52;
// //           max-width: 580px;
// //           margin: 0 auto;
// //           font-weight: 500;
// //           text-shadow: 0 1px 20px rgba(255, 255, 255, 0.9);
// //         }

// //         :global(.ppc-link) {
// //           display: inline;
// //           color: #0a2756 !important;
// //           font-weight: 800;
// //           padding: 1px 8px;
// //           border-radius: 4px;
// //           background: linear-gradient(
// //             120deg,
// //             rgba(230, 57, 70, 0.2),
// //             rgba(243, 111, 33, 0.2)
// //           );
// //           text-decoration: none;
// //           border-bottom: 2px solid #e63946;
// //           transition: all 0.3s ease;
// //         }
// //         :global(.ppc-link:hover) {
// //           background: linear-gradient(120deg, #e63946, #f36f21);
// //           color: #fff !important;
// //           border-bottom-color: #fff;
// //         }

// //         /* mini partners */
// //         .mini-partners {
// //           padding-top: 6px;
// //         }
// //         .mp-tag {
// //           display: inline-flex;
// //           align-items: center;
// //           gap: 7px;
// //           font-size: 11px;
// //           font-weight: 800;
// //           letter-spacing: 1.8px;
// //           text-transform: uppercase;
// //           color: #0a2756;
// //           background: #fff;
// //           padding: 7px 16px;
// //           border-radius: 50px;
// //           box-shadow: 0 4px 14px rgba(10, 39, 86, 0.1);
// //           border: 1px solid rgba(10, 39, 86, 0.08);
// //         }
// //         .mp-divider {
// //           width: 1px;
// //           height: 16px;
// //           background: rgba(10, 39, 86, 0.25);
// //         }
// //         .pb-dot {
// //           width: 7px;
// //           height: 7px;
// //           border-radius: 50%;
// //         }
// //         .pb-dot-blue {
// //           background: #3b82f6;
// //           box-shadow: 0 0 8px #3b82f6;
// //         }
// //         .pb-dot-orange {
// //           background: #f36f21;
// //           box-shadow: 0 0 8px #f36f21;
// //         }

// //         /* =================================================
// //            DESKTOP — bottom CTA zone
// //            ================================================= */
// //         .cta-zone {
// //           background: linear-gradient(180deg, #fff 0%, #f6f9ff 100%);
// //           padding: 36px 0 44px;
// //           position: relative;
// //         }
// //         .cta-zone::before {
// //           content: "";
// //           position: absolute;
// //           top: 0;
// //           left: 50%;
// //           transform: translateX(-50%);
// //           width: 80px;
// //           height: 4px;
// //           background: linear-gradient(90deg, #3b82f6, #f36f21);
// //           border-radius: 0 0 4px 4px;
// //         }
// //         .cta-tagline {
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           gap: 10px;
// //           font-size: 12px;
// //           font-weight: 700;
// //           letter-spacing: 1.5px;
// //           text-transform: uppercase;
// //           color: #6c757d;
// //         }

// //         /* buttons */
// //         :global(.btn-glow) {
// //           background: linear-gradient(135deg, #e63946, #c92e3a);
// //           color: #fff !important;
// //           font-size: 15px;
// //           font-weight: 700;
// //           padding: 14px 28px;
// //           border-radius: 60px;
// //           text-decoration: none;
// //           box-shadow: 0 12px 32px rgba(230, 57, 70, 0.4);
// //           transition: all 0.3s ease;
// //         }
// //         :global(.btn-glow:hover) {
// //           transform: translateY(-2px);
// //           box-shadow: 0 16px 40px rgba(230, 57, 70, 0.55);
// //         }
// //         :global(.btn-glow:hover .arrow-wrap) {
// //           background: #fff;
// //           color: #e63946;
// //         }
// //         .arrow-wrap {
// //           width: 26px;
// //           height: 26px;
// //           border-radius: 50%;
// //           background: rgba(255, 255, 255, 0.25);
// //           display: inline-flex;
// //           align-items: center;
// //           justify-content: center;
// //           transition: all 0.3s ease;
// //         }

// //         :global(.btn-outline) {
// //           background: #fff;
// //           color: #0a2756 !important;
// //           font-size: 15px;
// //           font-weight: 700;
// //           padding: 13px 24px;
// //           border-radius: 60px;
// //           border: 1.5px solid rgba(10, 39, 86, 0.18);
// //           text-decoration: none;
// //           transition: all 0.3s ease;
// //           box-shadow: 0 6px 18px rgba(10, 39, 86, 0.06);
// //         }
// //         :global(.btn-outline:hover) {
// //           border-color: #f36f21;
// //           color: #f36f21 !important;
// //           transform: translateY(-2px);
// //           box-shadow: 0 12px 28px rgba(243, 111, 33, 0.2);
// //         }
// //         :global(.btn-outline:hover .alumni-icon) {
// //           background: #f36f21;
// //           color: #fff;
// //           border-color: #f36f21;
// //         }
// //         :global(.btn-outline:hover .alumni-arrow) {
// //           transform: translateX(4px);
// //         }
// //         .alumni-icon {
// //           width: 26px;
// //           height: 26px;
// //           border-radius: 50%;
// //           background: rgba(243, 111, 33, 0.12);
// //           border: 1px solid rgba(243, 111, 33, 0.3);
// //           color: #f36f21;
// //           display: inline-flex;
// //           align-items: center;
// //           justify-content: center;
// //           transition: all 0.3s ease;
// //         }
// //         .alumni-arrow {
// //           transition: transform 0.3s ease;
// //         }

// //         /* tablet */
// //         @media (max-width: 1199px) and (min-width: 768px) {
// //           .image-zone {
// //             height: 80vh;
// //             min-height: 600px;
// //           }
// //           .card-position {
// //             top: clamp(40px, 8vh, 80px);
// //           }
// //           .hero-title {
// //             font-size: 46px;
// //             letter-spacing: -1.5px;
// //           }
// //           .hero-desc {
// //             font-size: 15px;
// //           }
// //           .corner {
// //             width: 28px;
// //             height: 28px;
// //           }
// //         }

// //         /* =================================================
// //            MOBILE LAYOUT
// //            ================================================= */
// //         .mobile-only {
// //           background: linear-gradient(180deg, #fff 0%, #f6f9ff 100%);
// //         }
// //         .m-hero-title {
// //           font-family: "Merriweather", Georgia, serif;
// //           font-size: 28px;
// //           font-weight: 900;
// //           line-height: 1.15;
// //           letter-spacing: -0.5px;
// //           color: #0a2756;
// //           margin: 0 auto 14px;
// //           padding: 0 8px;
// //         }
// //         .m-hero-desc {
// //           font-size: 14px;
// //           line-height: 1.6;
// //           color: #4a5568;
// //           margin: 0;
// //           padding: 0 12px;
// //         }
// //         .m-image-wrap {
// //           /* position: relative; */
// //           /* margin: 16px -8px 0; */
// //           /* padding: 0; */
// //           /* border-radius: 18px; */
// //           /* overflow: hidden; */
// //           /* box-shadow: 0 20px 50px rgba(10, 39, 86, 0.12); */
// //           /* background: #eef3fb; */
// //           /* aspect-ratio: 16 / 10; */
// //         }
// //         .m-image {
// //           width: 100%;
// //           height: 100%;
// //           object-fit: cover;
// //           object-position: top center;
// //           display: block;
// //         }
// //         .m-badge {
// //           position: absolute;
// //           top: 12px;
// //           background: rgba(255, 255, 255, 0.95);
// //           backdrop-filter: blur(10px);
// //           padding: 5px 11px;
// //           border-radius: 50px;
// //           font-size: 9.5px;
// //           font-weight: 800;
// //           letter-spacing: 1.5px;
// //           text-transform: uppercase;
// //           color: #0a2756;
// //           display: inline-flex;
// //           align-items: center;
// //           gap: 6px;
// //           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
// //           z-index: 2;
// //         }
// //         .m-badge-left {
// //           left: 12px;
// //         }
// //         .m-badge-right {
// //           right: 12px;
// //         }

// //         @media (max-width: 767px) {
// //           :global(.btn-glow),
// //           :global(.btn-outline) {
// //             font-size: 13.5px;
// //             padding: 12px 20px;
// //             width: 100%;
// //           }
// //           .arrow-wrap,
// //           .alumni-icon {
// //             width: 22px;
// //             height: 22px;
// //           }
// //           .eyebrow {
// //             font-size: 9.5px;
// //             letter-spacing: 1.5px;
// //             padding: 5px 12px 5px 8px;
// //           }
// //         }

// //         @media (max-width: 360px) {
// //           .m-hero-title {
// //             font-size: 24px;
// //           }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }

// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="hero-section position-relative overflow-hidden">
//       {/* ============ DESKTOP LAYOUT ============ */}
//       <div className="desktop-only">
//         <div className="image-zone position-relative">
//           {/* full background image */}
//           <div className="bg-image" />

//           {/* soft fade overlay on top — keeps image visible but fades busy area */}
//           <div className="fade-overlay" />

//           <div
//             className="container position-relative h-100"
//             style={{ zIndex: 5 }}
//           >
//             <div className="card-position text-center py-4">
//               {/* BIG headline */}
//               <h1 className="hero-title">
//                 A Landmark Affiliation in
//                 <br />
//                 <span className="title-accent">Clinical Education</span>
//               </h1>

//               {/* description */}
//               <p className="hero-desc mx-auto mb-3">
//                 <a
//                   href="https://www.mypremierpain.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="ppc-link"
//                 >
//                   Premier Pain Centers
//                 </a>{" "}
//                 is now the official clinical rotation site for SHSU&apos;s
//                 College of Osteopathic Medicine — pairing students with
//                 credentialed preceptors.
//               </p>
//               <Link
//                 href="/externship-application-form"
//                 className="btn-glow d-inline-flex align-items-center gap-2 me-3"
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

//               <Link
//                 href="/alumni"
//                 className="btn-outline d-inline-flex align-items-center gap-2"
//               >
//                 <span className="alumni-icon">
//                   <svg
//                     width="14"
//                     height="14"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
//                     <path d="M6 12v5c3 3 9 3 12 0v-5" />
//                   </svg>
//                 </span>
//                 Our Alumni
//                 <span className="alumni-arrow">→</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ============ MOBILE LAYOUT ============ */}
//       <div className="mobile-only">
//         <div className="container">
//           <div className="m-image-wrap">
//             <img
//               src="/images/3.png"
//               alt="Premier Pain Centers x Sam Houston State University Partnership"
//               className="m-image"
//             />
//           </div>

//           <div className="text-center pt-3 pb-2">
//             <h1 className="m-hero-title">
//               A Landmark Affiliation in{" "}
//               <span className="title-accent">Clinical Education</span>
//             </h1>

//             <p className="m-hero-desc">
//               <a
//                 href="https://www.mypremierpain.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="ppc-link"
//               >
//                 Premier Pain Centers
//               </a>{" "}
//               is now the official clinical rotation site for SHSU&apos;s College
//               of Osteopathic Medicine.
//             </p>
//           </div>

//           <div className="d-flex flex-column gap-2 mt-3 pb-4 px-2">
//             <Link
//               href="/externship-application-form"
//               className="btn-glow d-inline-flex align-items-center justify-content-center gap-2"
//             >
//               Apply for Externship
//               <span className="arrow-wrap">
//                 <svg
//                   width="14"
//                   height="14"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="3"
//                   strokeLinecap="round"
//                 >
//                   <path d="M5 12h14M13 5l7 7-7 7" />
//                 </svg>
//               </span>
//             </Link>

//             <Link
//               href="/alumni"
//               className="btn-outline d-inline-flex align-items-center justify-content-center gap-2"
//             >
//               <span className="alumni-icon">
//                 <svg
//                   width="14"
//                   height="14"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
//                   <path d="M6 12v5c3 3 9 3 12 0v-5" />
//                 </svg>
//               </span>
//               Our Alumni
//               <span className="alumni-arrow">→</span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .hero-section {
//           color: #0a2756;
//           background: #fff;
//           position: relative;
//         }

//         .desktop-only {
//           display: block;
//         }
//         .mobile-only {
//           display: none;
//         }
//         @media (max-width: 767px) {
//           .desktop-only {
//             display: none;
//           }
//           .mobile-only {
//             display: block;
//           }
//         }

//         /* =================================================
//            DESKTOP — image zone
//            ================================================= */
//         .image-zone {
//           height: 92vh;
//           min-height: 720px;
//           overflow: hidden;
//         }
//         .bg-image {
//           position: absolute;
//           inset: 0;
//           background-image: url("/images/3.png");
//           background-size: cover;
//           background-position: center;
//           background-repeat: no-repeat;
//           z-index: 1;
//         }

//         /* soft white fade — keeps image visible but improves text legibility */
//         .fade-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             180deg,
//             rgba(0, 0, 0, 0.35) 0%,
//             rgba(0, 0, 0, 0.25) 28%,
//             rgba(0, 0, 0, 0.1) 52%,
//             rgba(0, 0, 0, 0) 70%
//           );
//           z-index: 2;
//           pointer-events: none;
//         }

//         /* card position — top centered like dream home reference */
//         .card-position {
//           position: absolute;
//           top: clamp(120px, 40vh, 220px);
//           left: 50%;
//           transform: translateX(-50%);
//           width: 100%;
//           max-width: 880px;
//           padding: 0 24px;
//           z-index: 3;

//           background: rgba(255, 255, 255, 0.3);
//           backdrop-filter: blur(6px);
//           -webkit-backdrop-filter: blur(6px);
//           border-radius: 24px;
//         }

//         /* BIG headline (dream home style) */
//         .hero-title {
//           font-family: "Merriweather", Georgia, serif;
//           font-size: 62px;
//           font-weight: 900;
//           line-height: 1.08;
//           letter-spacing: -2px;
//           color: #0a2756;
//           margin: 0 auto 18px;
//           text-shadow: 0 2px 30px rgba(255, 255, 255, 0.9);
//         }
//         .title-accent {
//           background: linear-gradient(135deg, #e63946 0%, #f36f21 100%);
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//           font-style: italic;
//         }
//         .hero-desc {
//           font-size: 16px;
//           line-height: 1.65;
//           color: #1a2f52;
//           max-width: 580px;
//           margin: 0 auto;
//           font-weight: 500;
//           text-shadow: 0 1px 20px rgba(255, 255, 255, 0.9);
//         }

//         :global(.ppc-link) {
//           display: inline;
//           color: #0a2756 !important;
//           font-weight: 800;
//           padding: 1px 8px;
//           border-radius: 4px;
//           background: linear-gradient(
//             120deg,
//             rgba(230, 57, 70, 0.2),
//             rgba(243, 111, 33, 0.2)
//           );
//           text-decoration: none;
//           border-bottom: 2px solid #e63946;
//           transition: all 0.3s ease;
//         }
//         :global(.ppc-link:hover) {
//           background: linear-gradient(120deg, #e63946, #f36f21);
//           color: #fff !important;
//           border-bottom-color: #fff;
//         }

//         /* buttons */
//         :global(.btn-glow) {
//           background: linear-gradient(135deg, #e63946, #c92e3a);
//           color: #fff !important;
//           font-size: 15px;
//           font-weight: 700;
//           padding: 14px 28px;
//           border-radius: 60px;
//           text-decoration: none;
//           box-shadow: 0 12px 32px rgba(230, 57, 70, 0.4);
//           transition: all 0.3s ease;
//         }
//         :global(.btn-glow:hover) {
//           transform: translateY(-2px);
//           box-shadow: 0 16px 40px rgba(230, 57, 70, 0.55);
//         }
//         :global(.btn-glow:hover .arrow-wrap) {
//           background: #fff;
//           color: #e63946;
//         }
//         .arrow-wrap {
//           width: 26px;
//           height: 26px;
//           border-radius: 50%;
//           background: rgba(255, 255, 255, 0.25);
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.3s ease;
//         }

//         :global(.btn-outline) {
//           background: #fff;
//           color: #0a2756 !important;
//           font-size: 15px;
//           font-weight: 700;
//           padding: 13px 24px;
//           border-radius: 60px;
//           border: 1.5px solid rgba(10, 39, 86, 0.18);
//           text-decoration: none;
//           transition: all 0.3s ease;
//           box-shadow: 0 6px 18px rgba(10, 39, 86, 0.06);
//         }
//         :global(.btn-outline:hover) {
//           border-color: #f36f21;
//           color: #f36f21 !important;
//           transform: translateY(-2px);
//           box-shadow: 0 12px 28px rgba(243, 111, 33, 0.2);
//         }
//         :global(.btn-outline:hover .alumni-icon) {
//           background: #f36f21;
//           color: #fff;
//           border-color: #f36f21;
//         }
//         :global(.btn-outline:hover .alumni-arrow) {
//           transform: translateX(4px);
//         }
//         .alumni-icon {
//           width: 26px;
//           height: 26px;
//           border-radius: 50%;
//           background: rgba(243, 111, 33, 0.12);
//           border: 1px solid rgba(243, 111, 33, 0.3);
//           color: #f36f21;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.3s ease;
//         }
//         .alumni-arrow {
//           transition: transform 0.3s ease;
//         }

//         /* tablet */
//         @media (max-width: 1199px) and (min-width: 768px) {
//           .image-zone {
//             height: 80vh;
//             min-height: 600px;
//           }
//           .card-position {
//             top: clamp(40px, 8vh, 80px);
//           }
//           .hero-title {
//             font-size: 46px;
//             letter-spacing: -1.5px;
//           }
//           .hero-desc {
//             font-size: 15px;
//           }
//         }

//         /* =================================================
//            MOBILE LAYOUT
//            ================================================= */
//         .mobile-only {
//           background: linear-gradient(180deg, #fff 0%, #f6f9ff 100%);
//         }
//         .m-hero-title {
//           font-family: "Merriweather", Georgia, serif;
//           font-size: 28px;
//           font-weight: 900;
//           line-height: 1.15;
//           letter-spacing: -0.5px;
//           color: #0a2756;
//           margin: 0 auto 14px;
//           padding: 0 8px;
//         }
//         .m-hero-desc {
//           font-size: 14px;
//           line-height: 1.6;
//           color: #4a5568;
//           margin: 0;
//           padding: 0 12px;
//         }
//         .m-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           object-position: top center;
//           display: block;
//         }

//         @media (max-width: 767px) {
//           :global(.btn-glow),
//           :global(.btn-outline) {
//             font-size: 13.5px;
//             padding: 12px 20px;
//             width: 100%;
//           }
//           .arrow-wrap,
//           .alumni-icon {
//             width: 22px;
//             height: 22px;
//           }
//         }

//         @media (max-width: 360px) {
//           .m-hero-title {
//             font-size: 24px;
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
      {/* ============ DESKTOP LAYOUT ============ */}
      <div className="desktop-only">
        <div className="image-zone position-relative">
          {/* full background image */}
          <div className="bg-image" />

          {/* soft fade overlay on top — keeps image visible but fades busy area */}
          <div className="fade-overlay" />

          <div
            className="container position-relative h-100"
            style={{ zIndex: 5 }}
          >
            <div className="card-position text-center py-4">
              {/* BIG headline */}
              <h1 className="hero-title">
                A Landmark Affiliation in
                <br />
                <span className="title-accent">Clinical Education</span>
              </h1>

              {/* description */}
              <p className="hero-desc mx-auto mb-3">
                <a
                  href="https://www.mypremierpain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ppc-link"
                >
                  Premier Pain Centers
                </a>{" "}
                is now the official clinical rotation site for SHSU&apos;s
                College of Osteopathic Medicine — pairing students with
                credentialed preceptors.
              </p>
              <Link
                href="/externship-application-form"
                className="btn-glow d-inline-flex align-items-center gap-2 me-3"
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
                href="/usshape-alumni"
                className="btn-outline d-inline-flex align-items-center gap-2"
              >
                <span className="alumni-icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </span>
                Our Alumni
                <span className="alumni-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ============ MOBILE LAYOUT ============ */}
      <div className="mobile-only">
        <div className="containers">
          <div className="m-image-wrap">
            <img
              src="/images/3.png"
              alt="Premier Pain Centers x Sam Houston State University Partnership"
              className="m-image"
            />
          </div>

          <div className="text-center pt-3 pb-2">
            <h1 className="m-hero-title">
              A Landmark Affiliation in{" "}
              <span className="title-accent">Clinical Education</span>
            </h1>

            <p className="m-hero-desc">
              <a
                href="https://www.mypremierpain.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ppc-link"
              >
                Premier Pain Centers
              </a>{" "}
              is now the official clinical rotation site for SHSU&apos;s College
              of Osteopathic Medicine.
            </p>
          </div>

          <div className="d-flex flex-column gap-2 mt-3 pb-4 px-2">
            <Link
              href="/externship-application-form"
              className="btn-glow d-inline-flex align-items-center justify-content-center gap-2"
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
              className="btn-outline d-inline-flex align-items-center justify-content-center gap-2"
            >
              <span className="alumni-icon">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </span>
              Our Alumni
              <span className="alumni-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          color: #0a2756;
          background: #fff;
          position: relative;
        }

        .desktop-only {
          display: block;
        }
        .mobile-only {
          display: none;
        }
        @media (max-width: 767px) {
          .desktop-only {
            display: none;
          }
          .mobile-only {
            display: block;
          }
        }

        /* =================================================
           DESKTOP — image zone
           ================================================= */
        .image-zone {
          height: 92vh;
          min-height: 720px;
          overflow: hidden;
        }
        .bg-image {
          position: absolute;
          inset: 0;
          background-image: url("/images/3.png");
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          background-color: #fff;
          z-index: 1;
        }

        /* soft white fade — keeps image visible but improves text legibility */
        .fade-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.35) 0%,
            rgba(0, 0, 0, 0.25) 28%,
            rgba(0, 0, 0, 0.1) 52%,
            rgba(0, 0, 0, 0) 70%
          ),
           
          z-index: 2;
          pointer-events: none;
        }

        /* card position — top centered like dream home reference */
        .card-position {
          position: absolute;
          top: clamp(120px, 40vh, 220px);
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 880px;
          padding: 0 24px;
          z-index: 3;

          background: rgba(255, 255, 255, 0.8);
          /* backdrop-filter: blur(0px); */
          /* -webkit-backdrop-filter: blur(6px); */
          border-radius: 24px;
        }

        /* BIG headline (dream home style) */
        .hero-title {
          font-family: "Merriweather", Georgia, serif;
          font-size: 62px;
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -2px;
          color: #0a2756;
          margin: 0 auto 18px;
          text-shadow: 0 2px 30px rgba(255, 255, 255, 0.9);
        }
        .title-accent {
          background: linear-gradient(135deg, #e63946 0%, #f36f21 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-style: italic;
        }
        .hero-desc {
          font-size: 16px;
          line-height: 1.65;
          color: #1a2f52;
          max-width: 580px;
          margin: 0 auto;
          font-weight: 500;
          text-shadow: 0 1px 20px rgba(255, 255, 255, 0.9);
        }

        :global(.ppc-link) {
          display: inline;
          color: #0a2756 !important;
          font-weight: 800;
          padding: 1px 8px;
          border-radius: 4px;
          background: linear-gradient(
            120deg,
            rgba(230, 57, 70, 0.2),
            rgba(243, 111, 33, 0.2)
          );
          text-decoration: none;
          border-bottom: 2px solid #e63946;
          transition: all 0.3s ease;
        }
        :global(.ppc-link:hover) {
          background: linear-gradient(120deg, #e63946, #f36f21);
          color: #fff !important;
          border-bottom-color: #fff;
        }

        /* buttons */
        :global(.btn-glow) {
          background: linear-gradient(135deg, #e63946, #c92e3a);
          color: #fff !important;
          font-size: 15px;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 60px;
          text-decoration: none;
          box-shadow: 0 12px 32px rgba(230, 57, 70, 0.4);
          transition: all 0.3s ease;
        }
        :global(.btn-glow:hover) {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(230, 57, 70, 0.55);
        }
        :global(.btn-glow:hover .arrow-wrap) {
          background: #fff;
          color: #e63946;
        }
        .arrow-wrap {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        :global(.btn-outline) {
          background: #fff;
          color: #0a2756 !important;
          font-size: 15px;
          font-weight: 700;
          padding: 13px 24px;
          border-radius: 60px;
          border: 1.5px solid rgba(10, 39, 86, 0.18);
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 6px 18px rgba(10, 39, 86, 0.06);
        }
        :global(.btn-outline:hover) {
          border-color: #f36f21;
          color: #f36f21 !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(243, 111, 33, 0.2);
        }
        :global(.btn-outline:hover .alumni-icon) {
          background: #f36f21;
          color: #fff;
          border-color: #f36f21;
        }
        :global(.btn-outline:hover .alumni-arrow) {
          transform: translateX(4px);
        }
        .alumni-icon {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: rgba(243, 111, 33, 0.12);
          border: 1px solid rgba(243, 111, 33, 0.3);
          color: #f36f21;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .alumni-arrow {
          transition: transform 0.3s ease;
        }

        /* tablet */
        @media (max-width: 1199px) and (min-width: 768px) {
          .image-zone {
            height: 80vh;
            min-height: 600px;
          }
          .card-position {
            top: clamp(40px, 8vh, 80px);
          }
          .hero-title {
            font-size: 46px;
            letter-spacing: -1.5px;
          }
          .hero-desc {
            font-size: 15px;
          }
        }

        /* =================================================
           MOBILE LAYOUT
           ================================================= */
        .mobile-only {
          background: linear-gradient(180deg, #fff 0%, #f6f9ff 100%);
        }
        .m-hero-title {
          font-family: "Merriweather", Georgia, serif;
          font-size: 28px;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.5px;
          color: #0a2756;
          margin: 0 auto 14px;
          padding: 0 8px;
        }
        .m-hero-desc {
          font-size: 14px;
          line-height: 1.6;
          color: #4a5568;
          margin: 0;
          padding: 0 12px;
        }
        .m-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        @media (max-width: 767px) {
          :global(.btn-glow),
          :global(.btn-outline) {
            font-size: 13.5px;
            padding: 12px 20px;
            width: 100%;
          }
          .arrow-wrap,
          .alumni-icon {
            width: 22px;
            height: 22px;
          }
        }

        @media (max-width: 360px) {
          .m-hero-title {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
}
