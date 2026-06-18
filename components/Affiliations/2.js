import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section position-relative overflow-hidden">
      {/* top ribbon */}
      <div className="top-ribbon d-flex align-items-center justify-content-center gap-3">
        <span className="ribbon-pulse" />
        <span className="ribbon-text">
          Press Release · Clinical Affiliation Now Active
        </span>
        <span className="ribbon-divider d-none d-sm-inline-block" />
        <span className="ribbon-date d-none d-sm-inline-block">
          November 2026
        </span>
      </div>

      <div className="container-fluid px-0">
        <div className="row g-0">
          {/* ===== LEFT — navy editorial panel ===== */}
          <div className="col-lg-7 position-relative left-panel">
            {/* decorative pattern */}
            <div className="diagonal-lines" />
            <div className="corner-mark">
              <span className="mark-number">N°01</span>
              <span className="mark-text">Clinical Education Series</span>
            </div>

            <div className="left-content">
              {/* edition tag */}
              <div className="edition-tag d-inline-flex align-items-center gap-2 mb-4">
                <span className="edition-icon">★</span>
                <span>Landmark Affiliation</span>
              </div>

              <h1 className="hero-title">
                A New Era for
                <br />
                <span className="title-italic">Osteopathic</span>
                <br />
                <span className="title-stroke">Clinical Training.</span>
              </h1>

              {/* signature row */}
              <div className="signature-block">
                <div className="sig-line" />
                <div className="signed-by">
                  <div className="sig-label">An affiliation between</div>
                  <div className="sig-names">
                    <span className="brand-usshape">
                      <span className="us">US</span>{" "}
                      <span className="shape">SHAPE</span>
                    </span>
                    <span className="amp-sym">×</span>
                    <span className="brand-shsu">
                      Sam Houston <br className="d-none d-md-inline" />
                      State University
                    </span>
                  </div>
                </div>
              </div>

              <p className="hero-desc">
                Effective immediately, <strong>Premier Pain Centers</strong>{" "}
                serves as the official clinical rotation site for SHSU&apos;s
                College of Osteopathic Medicine — pairing medical students with
                credentialed preceptors in a live patient-care environment.
              </p>

              <div className="d-flex flex-wrap align-items-center gap-4 mt-4">
                <Link
                  href="/externship-application-form"
                  className="btn-press d-inline-flex align-items-center gap-3"
                >
                  <span className="btn-circle">
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
                  <span className="btn-label">
                    Apply for Externship
                    <span className="btn-sub">Cohort 2026 — limited seats</span>
                  </span>
                </Link>
              </div>
            </div>

            {/* footer attribution */}
            <div className="left-footer d-none d-lg-flex align-items-center justify-content-between">
              <span className="footer-meta">USSHAPE.ORG / AFFILIATIONS</span>
              <span className="footer-meta">SHSU COM × PREMIER PAIN</span>
            </div>
          </div>

          {/* ===== RIGHT — image collage ===== */}
          <div className="col-lg-5 right-panel position-relative">
            <div className="image-main">
              <div className="img-bg" />
              <div className="img-overlay" />

              {/* press caption */}
              <div className="press-caption">
                <div className="cap-meta">FIG. 01 · HUNTSVILLE, TX</div>
                <div className="cap-title">Sam Houston State University</div>
                <div className="cap-sub">
                  Home of the College of Osteopathic Medicine
                </div>
              </div>

              {/* stat card */}
              <div className="stat-card d-none d-md-block">
                <div className="stat-number">100%</div>
                <div className="stat-line" />
                <div className="stat-text">
                  Faculty-credentialed clinical rotation site
                </div>
              </div>
            </div>

            {/* mini quote — outside image-main so it can overflow */}
            <div className="mini-quote d-none d-lg-block">
              <span className="q-mark">&ldquo;</span>
              <p>
                An ongoing affiliation supporting the educational mission of the
                medical school.
              </p>
              <div className="q-author">— Dr. Mary Hogan, SHSU COM</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          background: #fff;
          padding-top: 0;
        }

        /* ===== Top ribbon ===== */
        .top-ribbon {
          background: linear-gradient(90deg, #c92e3a, #e63946, #c92e3a);
          color: #fff;
          padding: 10px 16px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          position: relative;
          z-index: 5;
        }
        .ribbon-pulse {
          width: 6px;
          height: 6px;
          background: #fff;
          border-radius: 50%;
          animation: ribbonPulse 1.4s infinite;
        }
        @keyframes ribbonPulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.6);
          }
        }
        .ribbon-divider {
          width: 1px;
          height: 12px;
          background: rgba(255, 255, 255, 0.4);
        }
        .ribbon-date {
          opacity: 0.85;
        }

        /* ===== LEFT panel ===== */
        .left-panel {
          background: linear-gradient(135deg, #0a2756 0%, #061a3d 100%);
          color: #fff;
          min-height: 720px;
          padding: 80px 60px 60px;
          display: flex;
          flex-direction: column;
        }
        .diagonal-lines {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.025) 0,
            rgba(255, 255, 255, 0.025) 1px,
            transparent 1px,
            transparent 14px
          );
          pointer-events: none;
        }
        .corner-mark {
          position: absolute;
          top: 30px;
          right: 40px;
          display: flex;
          align-items: center;
          gap: 10px;
          opacity: 0.6;
        }
        .mark-number {
          font-family: Georgia, serif;
          font-style: italic;
          font-size: 14px;
          color: #f36f21;
        }
        .mark-text {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #a8c5ec;
        }

        .left-content {
          position: relative;
          z-index: 2;
          flex: 1;
        }

        .edition-tag {
          background: rgba(243, 111, 33, 0.15);
          border: 1px solid rgba(243, 111, 33, 0.3);
          color: #f36f21;
          padding: 6px 16px;
          border-radius: 0;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .edition-icon {
          font-size: 13px;
        }

        .hero-title {
          font-family: "Merriweather", "Playfair Display", Georgia, serif;
          font-size: 64px;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -2px;
          margin: 0 0 40px;
          color: #fff;
        }
        .title-italic {
          font-style: italic;
          font-weight: 400;
          color: #f36f21;
        }
        .title-stroke {
          background: linear-gradient(90deg, #fff, #a8c5ec);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* signature */
        .signature-block {
          display: flex;
          gap: 18px;
          align-items: flex-start;
          margin-bottom: 28px;
        }
        .sig-line {
          width: 50px;
          height: 2px;
          background: #e63946;
          margin-top: 8px;
          flex-shrink: 0;
        }
        .sig-label {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #a8c5ec;
          margin-bottom: 6px;
        }
        .sig-names {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .brand-usshape {
          font-size: 26px;
          font-weight: 800;
          letter-spacing: 1px;
          line-height: 1;
        }
        .brand-usshape .us {
          color: #fff;
        }
        .brand-usshape .shape {
          color: #e63946;
        }
        .amp-sym {
          font-family: Georgia, serif;
          font-size: 24px;
          color: #f36f21;
          font-weight: 300;
        }
        .brand-shsu {
          font-family: "Merriweather", Georgia, serif;
          font-size: 22px;
          font-weight: 900;
          color: #f36f21;
          line-height: 1.15;
        }

        .hero-desc {
          font-size: 16px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.78);
          max-width: 520px;
          margin-bottom: 0;
          padding-left: 68px;
        }
        .hero-desc strong {
          color: #fff;
        }

        /* press CTA */
        :global(.btn-press) {
          background: #fff;
          color: #0a2756 !important;
          padding: 8px 8px 8px 8px;
          border-radius: 60px;
          text-decoration: none;
          transition: all 0.3s ease;
          margin-left: 68px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }
        :global(.btn-press:hover) {
          background: #f36f21;
          color: #fff !important;
          transform: translateY(-2px);
        }
        :global(.btn-press:hover .btn-circle) {
          background: #fff;
          color: #f36f21;
        }
        .btn-circle {
          width: 44px;
          height: 44px;
          background: #e63946;
          color: #fff;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .btn-label {
          padding-right: 22px;
          font-size: 14px;
          font-weight: 800;
          line-height: 1.2;
        }
        .btn-sub {
          display: block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          opacity: 0.6;
          margin-top: 2px;
        }

        .left-footer {
          margin-top: auto;
          padding-top: 50px;
          border-top: 1px dashed rgba(255, 255, 255, 0.15);
          position: relative;
          z-index: 2;
        }
        .footer-meta {
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(168, 197, 236, 0.5);
        }

        /* ===== RIGHT panel ===== */
        .right-panel {
          min-height: 720px;
        }
        .image-main {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .img-bg {
          position: absolute;
          inset: 0;
          background-image: url("/images/sam-uni.webp");
          background-size: cover;
          background-position: center;
          transition: transform 8s ease;
          animation: slowZoom 20s infinite alternate ease-in-out;
        }
        @keyframes slowZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.08);
          }
        }
        .img-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(10, 39, 86, 0.4) 0%, transparent 30%),
            linear-gradient(180deg, transparent 50%, rgba(10, 39, 86, 0.6));
        }

        .press-caption {
          position: absolute;
          bottom: 40px;
          left: 40px;
          right: 40px;
          color: #fff;
          z-index: 3;
        }
        .cap-meta {
          font-size: 10px;
          letter-spacing: 3px;
          color: #f36f21;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .cap-title {
          font-family: "Merriweather", Georgia, serif;
          font-size: 24px;
          font-weight: 900;
          line-height: 1.15;
        }
        .cap-sub {
          font-size: 13px;
          opacity: 0.85;
          margin-top: 4px;
        }

        .stat-card {
          position: absolute;
          top: 60px;
          right: 30px;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(10px);
          color: #0a2756;
          padding: 20px 22px;
          border-radius: 0;
          border-left: 4px solid #e63946;
          z-index: 4;
          max-width: 180px;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.2);
        }
        .stat-number {
          font-family: "Merriweather", Georgia, serif;
          font-size: 42px;
          font-weight: 900;
          line-height: 1;
          color: #0a2756;
        }
        .stat-line {
          width: 30px;
          height: 2px;
          background: #f36f21;
          margin: 10px 0;
        }
        .stat-text {
          font-size: 12px;
          line-height: 1.45;
          font-weight: 600;
        }

        .mini-quote {
          position: absolute;
          top: 50%;
          left: -50px;
          transform: translateY(-50%);
          background: #fff;
          color: #0a2756;
          padding: 22px 24px 18px;
          width: 260px;
          z-index: 5;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.18);
          border-top: 3px solid #f36f21;
        }
        .q-mark {
          font-family: Georgia, serif;
          font-size: 50px;
          line-height: 0.6;
          color: #e63946;
          display: block;
          margin-bottom: 8px;
        }
        .mini-quote p {
          font-size: 14px;
          line-height: 1.55;
          font-style: italic;
          margin: 0 0 10px;
        }
        .q-author {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #6c757d;
          text-transform: uppercase;
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 991px) {
          .left-panel {
            min-height: auto;
            padding: 60px 40px 50px;
          }
          .corner-mark {
            top: 20px;
            right: 24px;
          }
          .hero-title {
            font-size: 46px;
            margin-bottom: 32px;
          }
          .hero-desc {
            padding-left: 0;
          }
          :global(.btn-press) {
            margin-left: 0;
          }
          .right-panel {
            min-height: 480px;
          }
          .signature-block {
            margin-bottom: 24px;
          }
        }

        @media (max-width: 576px) {
          .top-ribbon {
            font-size: 9px;
            padding: 8px 12px;
            letter-spacing: 1.5px;
          }
          .left-panel {
            padding: 40px 22px 40px;
          }
          .corner-mark {
            display: none;
          }
          .edition-tag {
            font-size: 9px;
            padding: 5px 12px;
            letter-spacing: 1.5px;
          }
          .hero-title {
            font-size: 32px;
            letter-spacing: -0.8px;
            margin-bottom: 24px;
          }
          .signature-block {
            gap: 12px;
          }
          .sig-line {
            width: 30px;
            margin-top: 6px;
          }
          .brand-usshape {
            font-size: 22px;
          }
          .brand-shsu {
            font-size: 18px;
          }
          .amp-sym {
            font-size: 20px;
          }
          .hero-desc {
            font-size: 14px;
            line-height: 1.65;
          }
          :global(.btn-press) {
            margin-left: 0;
            width: 100%;
          }
          .btn-circle {
            width: 38px;
            height: 38px;
          }
          .btn-label {
            font-size: 13px;
            padding-right: 12px;
          }
          .btn-sub {
            font-size: 9px;
          }
          .right-panel {
            min-height: 360px;
          }
          .press-caption {
            bottom: 24px;
            left: 24px;
            right: 24px;
          }
          .cap-title {
            font-size: 18px;
          }
          .cap-sub {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}
