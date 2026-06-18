import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-banner position-relative overflow-hidden">
      {/* background layers */}
      <div className="bg-image" />
      <div className="bg-overlay" />
      <div className="bg-grid" />

      {/* top accent stripe */}
      <div className="accent-stripe">
        <span className="stripe-red" />
        <span className="stripe-navy" />
        <span className="stripe-orange" />
      </div>

      {/* corner decorations */}
      <span className="corner-tl" />
      <span className="corner-br" />

      {/* watermark */}
      <div className="watermark d-none d-xl-block">2026</div>

      <div className="container position-relative" style={{ zIndex: 3 }}>
        <div className="row align-items-center min-vh-hero">
          {/* LEFT — main content */}
          <div className="col-lg-7 col-xl-7">
            <div className="hero-content py-5">
              {/* eyebrow */}
              <div className="eyebrow d-inline-flex align-items-center gap-2 mb-4">
                <span className="eb-dot" />
                <span className="eyebrow-text">
                  Clinical Affiliation · Now Active
                </span>
              </div>

              {/* headline */}
              <h1 className="hero-headline">
                A Landmark Affiliation in{" "}
                <span className="headline-accent">Clinical Education</span>
              </h1>

              {/* partner line */}
              <div className="partner-line d-flex align-items-center flex-wrap gap-2 gap-md-3 mb-4">
                <span className="brand-usshape">
                  <span className="us">US</span>{" "}
                  <span className="shape">SHAPE</span>
                </span>
                <span className="line-mark" />
                <span className="partner-with">in partnership with</span>
                <span className="line-mark" />
                <span className="brand-shsu">Sam Houston State University</span>
              </div>

              {/* body */}
              <p className="hero-body">
                Effective immediately, <strong>Premier Pain Centers</strong>{" "}
                serves as the official clinical rotation site for SHSU&apos;s
                College of Osteopathic Medicine — pairing medical students with
                credentialed preceptors in a live patient-care environment.
              </p>

              {/* CTAs */}
              <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
                <Link href="/externship-application-form" className="btn-cta">
                  Apply for Externship
                  <span className="cta-arrow">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="#about"
                  className="btn-secondary d-inline-flex align-items-center gap-2"
                >
                  <span className="play-circle">
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  Watch the Story
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT — floating stat card */}
          <div className="col-lg-5 col-xl-5 d-none d-lg-block">
            <div className="floating-card">
              <div className="fc-label">
                <span className="fc-dot" />
                Affiliation Highlights
              </div>

              <div className="fc-row">
                <div className="fc-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2L4 7v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-5z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="fc-title">SHSU COM Approved</div>
                  <div className="fc-sub">
                    Faculty-credentialed rotation site
                  </div>
                </div>
              </div>

              <div className="fc-row">
                <div className="fc-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21l8.84-8.84a5.5 5.5 0 000-7.55z" />
                  </svg>
                </div>
                <div>
                  <div className="fc-title">Premier Pain Centers</div>
                  <div className="fc-sub">Live patient-care environment</div>
                </div>
              </div>

              <div className="fc-row">
                <div className="fc-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M3 10h18M8 3v4M16 3v4" />
                  </svg>
                </div>
                <div>
                  <div className="fc-title">Cohort 2026 Open</div>
                  <div className="fc-sub">Limited seats — apply early</div>
                </div>
              </div>

              <div className="fc-footer">
                <div>
                  <div className="ff-num">100%</div>
                  <div className="ff-lbl">Credentialed</div>
                </div>
                <div className="ff-divider" />
                <div>
                  <div className="ff-num">TX</div>
                  <div className="ff-lbl">Richardson</div>
                </div>
                <div className="ff-divider" />
                <div>
                  <div className="ff-num">DO</div>
                  <div className="ff-lbl">Track</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-banner {
          min-height: 92vh;
          color: #fff;
          background: #061a3d;
        }

        /* ===== Background ===== */
        .bg-image {
          position: absolute;
          inset: 0;
          background-image: url("/images/sam-uni.webp");
          background-size: cover;
          background-position: center;
          z-index: 0;
          animation: slowZoom 30s ease-in-out infinite alternate;
        }
        @keyframes slowZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.06);
          }
        }
        .bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            95deg,
            rgba(6, 26, 61, 0.96) 0%,
            rgba(10, 39, 86, 0.9) 40%,
            rgba(10, 39, 86, 0.6) 75%,
            rgba(10, 39, 86, 0.45) 100%
          );
          z-index: 1;
        }
        .bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            );
          background-size: 60px 60px;
          mask-image: linear-gradient(95deg, black 25%, transparent 75%);
          -webkit-mask-image: linear-gradient(
            95deg,
            black 25%,
            transparent 75%
          );
          z-index: 2;
        }

        /* ===== Accent stripe ===== */
        .accent-stripe {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          display: flex;
          z-index: 4;
        }
        .stripe-red {
          flex: 2;
          background: #b91c1c;
        }
        .stripe-navy {
          flex: 5;
          background: #0a2756;
        }
        .stripe-orange {
          flex: 3;
          background: #f36f21;
        }

        /* ===== Corner decoration ===== */
        .corner-tl,
        .corner-br {
          position: absolute;
          width: 50px;
          height: 50px;
          border: 1.5px solid rgba(243, 111, 33, 0.5);
          z-index: 4;
          pointer-events: none;
        }
        .corner-tl {
          top: 30px;
          left: 30px;
          border-right: none;
          border-bottom: none;
        }
        .corner-br {
          bottom: 30px;
          right: 30px;
          border-left: none;
          border-top: none;
        }

        /* ===== Watermark ===== */
        .watermark {
          position: absolute;
          right: -20px;
          top: 8%;
          font-family: "Merriweather", Georgia, serif;
          font-size: 200px;
          font-weight: 900;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px rgba(243, 111, 33, 0.1);
          z-index: 1;
          letter-spacing: -6px;
          pointer-events: none;
        }

        /* ===== Min height ===== */
        .min-vh-hero {
          min-height: calc(92vh - 60px);
        }

        /* ===== Eyebrow ===== */
        .eyebrow {
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 6px 14px 6px 10px;
          border-radius: 50px;
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
        .eyebrow-text {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #fff;
        }

        /* ===== Headline ===== */
        .hero-headline {
          font-family: "Merriweather", Georgia, serif;
          font-size: 44px;
          font-weight: 900;
          line-height: 1.15;
          color: #fff;
          letter-spacing: -1px;
          margin: 0 0 22px;
          max-width: 640px;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.2);
        }
        .headline-accent {
          color: #f36f21;
          position: relative;
          white-space: nowrap;
        }
        .headline-accent::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 2px;
          background: #f36f21;
          opacity: 0.4;
        }

        /* ===== Partner line ===== */
        .partner-line {
          margin-bottom: 22px !important;
        }
        .brand-usshape {
          font-size: 20px;
          font-weight: 800;
          letter-spacing: 0.5px;
          line-height: 1;
        }
        .brand-usshape .us {
          color: #fff;
        }
        .brand-usshape .shape {
          color: #e63946;
        }
        .line-mark {
          width: 24px;
          height: 1px;
          background: rgba(255, 255, 255, 0.35);
          display: inline-block;
        }
        .partner-with {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
        }
        .brand-shsu {
          font-family: "Merriweather", Georgia, serif;
          font-size: 17px;
          font-weight: 800;
          color: #f36f21;
          line-height: 1.2;
        }

        /* ===== Body ===== */
        .hero-body {
          font-size: 15.5px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.85);
          max-width: 560px;
          margin-bottom: 0;
        }
        .hero-body strong {
          color: #fff;
          font-weight: 700;
        }

        /* ===== CTAs ===== */
        :global(.btn-cta) {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #e63946;
          color: #fff !important;
          padding: 12px 12px 12px 22px;
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-decoration: none;
          border-radius: 50px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 26px rgba(230, 57, 70, 0.35);
        }
        :global(.btn-cta:hover) {
          background: #c92e3a;
          color: #fff !important;
          transform: translateY(-1px);
          box-shadow: 0 14px 32px rgba(230, 57, 70, 0.5);
        }
        .cta-arrow {
          width: 28px;
          height: 28px;
          background: rgba(255, 255, 255, 0.18);
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        :global(.btn-cta:hover .cta-arrow) {
          background: #fff;
          color: #e63946;
          transform: translateX(3px);
        }

        :global(.btn-secondary) {
          color: #fff !important;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          padding: 12px 4px;
          transition: color 0.25s ease;
        }
        :global(.btn-secondary:hover) {
          color: #f36f21 !important;
        }
        .play-circle {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        /* ===== Floating card (right side) ===== */
        .floating-card {
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          padding: 24px;
          box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          margin-left: auto;
          max-width: 380px;
        }
        .fc-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #a8c5ec;
          margin-bottom: 18px;
        }
        .fc-dot {
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
          animation: ebPulse 2s infinite;
        }
        .fc-row {
          display: flex;
          gap: 14px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          align-items: center;
        }
        .fc-row:last-of-type {
          border-bottom: none;
        }
        .fc-icon {
          width: 38px;
          height: 38px;
          background: rgba(243, 111, 33, 0.15);
          border: 1px solid rgba(243, 111, 33, 0.25);
          color: #f36f21;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .fc-title {
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
        }
        .fc-sub {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 2px;
        }
        .fc-footer {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 18px;
          padding-top: 18px;
          border-top: 1px dashed rgba(255, 255, 255, 0.15);
        }
        .ff-num {
          font-family: "Merriweather", Georgia, serif;
          font-size: 22px;
          font-weight: 900;
          color: #fff;
          line-height: 1;
        }
        .ff-lbl {
          font-size: 9.5px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(168, 197, 236, 0.7);
          font-weight: 700;
          margin-top: 4px;
        }
        .ff-divider {
          width: 1px;
          height: 28px;
          background: rgba(255, 255, 255, 0.12);
        }

        /* ========== RESPONSIVE ========== */

        @media (max-width: 991px) {
          .hero-banner {
            min-height: auto;
          }
          .min-vh-hero {
            min-height: 70vh;
          }
          .bg-overlay {
            background: linear-gradient(
              180deg,
              rgba(6, 26, 61, 0.85) 0%,
              rgba(10, 39, 86, 0.85) 100%
            );
          }
          .corner-tl,
          .corner-br {
            width: 36px;
            height: 36px;
          }
          .corner-tl {
            top: 20px;
            left: 20px;
          }
          .corner-br {
            bottom: 20px;
            right: 20px;
          }
          .hero-headline {
            font-size: 38px;
          }
        }

        @media (max-width: 576px) {
          .accent-stripe {
            height: 3px;
          }
          .corner-tl,
          .corner-br {
            display: none;
          }
          .min-vh-hero {
            min-height: 75vh;
          }
          .bg-overlay {
            background: linear-gradient(
              180deg,
              rgba(6, 26, 61, 0.9) 0%,
              rgba(10, 39, 86, 0.9) 100%
            );
          }
          .hero-content {
            padding: 24px 0 32px !important;
          }

          .eyebrow {
            padding: 5px 12px 5px 8px;
          }
          .eyebrow-text {
            font-size: 10px;
            letter-spacing: 1.5px;
          }

          .hero-headline {
            font-size: 28px;
            letter-spacing: -0.5px;
            line-height: 1.2;
            margin-bottom: 18px;
          }
          .headline-accent {
            white-space: normal;
          }

          .partner-line {
            gap: 6px 10px !important;
            margin-bottom: 18px !important;
          }
          .brand-usshape {
            font-size: 17px;
          }
          .brand-shsu {
            font-size: 15px;
            width: 100%;
          }
          .partner-with {
            font-size: 9.5px;
            letter-spacing: 1.5px;
            display: block;
            width: 100%;
            order: 1;
          }
          .line-mark {
            display: none;
          }
          .brand-usshape {
            order: 0;
          }
          .brand-shsu {
            order: 2;
          }

          .hero-body {
            font-size: 14px;
            line-height: 1.65;
          }

          :global(.btn-cta) {
            padding: 10px 10px 10px 18px;
            font-size: 12.5px;
            flex: 1;
            justify-content: space-between;
          }
          .cta-arrow {
            width: 24px;
            height: 24px;
          }
          :global(.btn-secondary) {
            font-size: 12.5px;
          }
        }

        @media (max-width: 360px) {
          .hero-headline {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
}
