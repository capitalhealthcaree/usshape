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

      <div className="container position-relative h-100" style={{ zIndex: 3 }}>
        <div className="row align-items-center min-vh-hero">
          <div className="col-lg-8 col-xl-7">
            <div className="hero-content py-5">
              {/* eyebrow */}
              <div className="eyebrow d-inline-flex align-items-center gap-3 mb-4">
                <span className="eyebrow-line" />
                <span className="eyebrow-text">
                  Clinical Affiliation Announcement
                </span>
              </div>

              {/* headline */}
              <h1 className="hero-headline">
                A Landmark Affiliation in
                <br />
                <span className="headline-accent">Clinical Education</span>
              </h1>

              {/* partner line */}
              <div className="partner-line d-flex align-items-center flex-wrap gap-3 mb-4">
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
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="#about" className="btn-secondary">
                  Learn About the Affiliation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom info bar */}
      <div className="info-bar position-relative" style={{ zIndex: 3 }}>
        <div className="container">
          <div className="row g-0 align-items-center">
            <div className="col-md-4 info-cell">
              <div className="info-num">01</div>
              <div>
                <div className="info-label">Accredited By</div>
                <div className="info-value">
                  SHSU College of Osteopathic Medicine
                </div>
              </div>
            </div>
            <div className="col-md-4 info-cell">
              <div className="info-num">02</div>
              <div>
                <div className="info-label">Clinical Rotation Site</div>
                <div className="info-value">
                  Premier Pain Centers, Richardson TX
                </div>
              </div>
            </div>
            <div className="col-md-4 info-cell">
              <div className="info-num">03</div>
              <div>
                <div className="info-label">Now Open</div>
                <div className="info-value">Cohort 2026 Applications</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-banner {
          min-height: 100vh;
          color: #fff;
          background: #061a3d;
        }

        /* ===== Background layers ===== */
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
            transform: scale(1.08);
          }
        }
        .bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            100deg,
            rgba(6, 26, 61, 0.95) 0%,
            rgba(10, 39, 86, 0.88) 35%,
            rgba(10, 39, 86, 0.55) 70%,
            rgba(10, 39, 86, 0.4) 100%
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
          background-size: 70px 70px;
          mask-image: linear-gradient(100deg, black 30%, transparent 80%);
          -webkit-mask-image: linear-gradient(
            100deg,
            black 30%,
            transparent 80%
          );
          z-index: 2;
        }

        /* ===== Accent stripe top ===== */
        .accent-stripe {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
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

        /* ===== Hero height ===== */
        .min-vh-hero {
          min-height: calc(100vh - 110px);
        }

        /* ===== Eyebrow ===== */
        .eyebrow {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 8px 18px;
          border-radius: 0;
        }
        .eyebrow-line {
          width: 28px;
          height: 2px;
          background: #f36f21;
        }
        .eyebrow-text {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #fff;
        }

        /* ===== Headline ===== */
        .hero-headline {
          font-family: "Merriweather", Georgia, serif;
          font-size: 64px;
          font-weight: 900;
          line-height: 1.08;
          color: #fff;
          letter-spacing: -1.5px;
          margin: 0 0 28px;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }
        .headline-accent {
          color: #f36f21;
          position: relative;
          display: inline-block;
        }
        .headline-accent::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 3px;
          background: #f36f21;
          opacity: 0.4;
        }

        /* ===== Partner line ===== */
        .partner-line {
          margin-bottom: 28px !important;
        }
        .brand-usshape {
          font-size: 26px;
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
          width: 30px;
          height: 1px;
          background: rgba(255, 255, 255, 0.4);
          display: inline-block;
        }
        .partner-with {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.75);
        }
        .brand-shsu {
          font-family: "Merriweather", Georgia, serif;
          font-size: 22px;
          font-weight: 800;
          color: #f36f21;
          line-height: 1.15;
        }

        /* ===== Body ===== */
        .hero-body {
          font-size: 18px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.88);
          max-width: 620px;
          margin-bottom: 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
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
          padding: 15px 30px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-decoration: none;
          border-radius: 2px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(230, 57, 70, 0.35);
        }
        :global(.btn-cta:hover) {
          background: #c92e3a;
          color: #fff !important;
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(230, 57, 70, 0.5);
        }
        :global(.btn-cta svg) {
          transition: transform 0.25s ease;
        }
        :global(.btn-cta:hover svg) {
          transform: translateX(5px);
        }

        :global(.btn-secondary) {
          color: #fff !important;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-decoration: none;
          padding: 13px 4px;
          border-bottom: 2px solid rgba(255, 255, 255, 0.5);
          transition: all 0.25s ease;
        }
        :global(.btn-secondary:hover) {
          color: #f36f21 !important;
          border-bottom-color: #f36f21;
        }

        /* ===== Info bar ===== */
        .info-bar {
          background: rgba(6, 26, 61, 0.85);
          backdrop-filter: blur(16px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .info-cell {
          padding: 24px 28px;
          display: flex;
          align-items: center;
          gap: 16px;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }
        .info-cell:last-child {
          border-right: none;
        }
        .info-num {
          font-family: "Merriweather", Georgia, serif;
          font-size: 28px;
          font-weight: 900;
          color: #f36f21;
          line-height: 1;
          opacity: 0.85;
        }
        .info-label {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 4px;
        }
        .info-value {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          line-height: 1.3;
        }

        /* ========== RESPONSIVE ========== */

        /* Tablet ≤ 991 */
        @media (max-width: 991px) {
          .hero-banner {
            min-height: auto;
          }
          .bg-overlay {
            background: linear-gradient(
              180deg,
              rgba(6, 26, 61, 0.85) 0%,
              rgba(10, 39, 86, 0.82) 100%
            );
          }
          .min-vh-hero {
            min-height: 70vh;
          }
          .hero-headline {
            font-size: 46px;
          }
          .info-cell {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }
          .info-cell:last-child {
            border-bottom: none;
          }
        }

        /* Mobile ≤ 576 */
        @media (max-width: 576px) {
          .accent-stripe {
            height: 3px;
          }
          .min-vh-hero {
            min-height: 80vh;
          }
          .bg-overlay {
            background: linear-gradient(
              180deg,
              rgba(6, 26, 61, 0.9) 0%,
              rgba(10, 39, 86, 0.88) 100%
            );
          }
          .hero-content {
            padding: 30px 0 40px !important;
          }

          .eyebrow {
            padding: 6px 14px;
          }
          .eyebrow-text {
            font-size: 9.5px;
            letter-spacing: 2px;
          }
          .eyebrow-line {
            width: 20px;
          }

          .hero-headline {
            font-size: 30px;
            letter-spacing: -0.5px;
            line-height: 1.18;
            margin-bottom: 20px;
          }

          .partner-line {
            gap: 8px !important;
            margin-bottom: 20px !important;
          }
          .brand-usshape {
            font-size: 20px;
          }
          .brand-shsu {
            font-size: 17px;
            width: 100%;
          }
          .partner-with {
            font-size: 10px;
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
            font-size: 14.5px;
            line-height: 1.65;
          }

          :global(.btn-cta) {
            padding: 12px 22px;
            font-size: 13px;
            width: 100%;
            justify-content: center;
          }
          :global(.btn-secondary) {
            font-size: 13px;
            padding: 10px 0;
          }

          .info-cell {
            padding: 18px 16px;
            gap: 12px;
          }
          .info-num {
            font-size: 22px;
          }
          .info-label {
            font-size: 9.5px;
            letter-spacing: 2px;
          }
          .info-value {
            font-size: 13px;
          }
        }

        @media (max-width: 360px) {
          .hero-headline {
            font-size: 26px;
          }
        }
      `}</style>
    </section>
  );
}
