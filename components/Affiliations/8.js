import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* thin accent stripe */}
      <div className="accent-stripe">
        <div className="stripe-red" />
        <div className="stripe-navy" />
        <div className="stripe-orange" />
      </div>

      <div className="container">
        <div className="row align-items-center g-5 g-lg-5 py-5">
          {/* ===== LEFT — content ===== */}
          <div className="col-lg-7">
            {/* eyebrow */}
            <div className="eyebrow d-flex align-items-center gap-3 mb-4">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">
                Clinical Affiliation Announcement
              </span>
            </div>

            {/* headline */}
            <h1 className="hero-headline">
              A Landmark Affiliation in
              <br />
              Clinical Education
            </h1>

            {/* subheadline */}
            <p className="hero-sub">
              <span className="brand-usshape">
                <span className="us">US</span>{" "}
                <span className="shape">SHAPE</span>
              </span>
              <span className="sub-and">in partnership with</span>
              <span className="brand-shsu">Sam Houston State University</span>
            </p>

            {/* body */}
            <p className="hero-body">
              Effective immediately,{" "}
              <strong>Premier Pain Centers</strong> serves as the official
              clinical rotation site for SHSU&apos;s College of Osteopathic
              Medicine. Medical students will train under credentialed
              preceptors in a live patient-care environment — advancing
              osteopathic education and serving the communities US SHAPE was
              founded to support.
            </p>

            {/* CTAs */}
            <div className="d-flex flex-wrap align-items-center gap-4 mt-4 pt-2">
              <Link
                href="/externship-application-form"
                className="btn-primary-pro"
              >
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
              <Link href="#about" className="btn-secondary-pro">
                Learn About the Affiliation
              </Link>
            </div>

            {/* authority row */}
            <div className="authority-row d-flex flex-wrap align-items-center gap-4 mt-5 pt-4">
              <div className="auth-item">
                <div className="auth-label">Accredited By</div>
                <div className="auth-value">SHSU College of Osteopathic Medicine</div>
              </div>
              <div className="auth-divider d-none d-md-block" />
              <div className="auth-item">
                <div className="auth-label">Clinical Site</div>
                <div className="auth-value">Premier Pain Centers · Richardson, TX</div>
              </div>
            </div>
          </div>

          {/* ===== RIGHT — image ===== */}
          <div className="col-lg-5">
            <div className="visual-wrap">
              <div className="visual-frame">
                <div className="visual-img" />
              </div>
              <div className="visual-caption">
                <div className="cap-label">Huntsville, Texas</div>
                <div className="cap-name">Sam Houston State University</div>
                <div className="cap-sub">College of Osteopathic Medicine</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          background: #fafbfc;
          position: relative;
        }

        /* thin accent stripe at top */
        .accent-stripe {
          display: flex;
          height: 4px;
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

        /* ===== Eyebrow ===== */
        .eyebrow-line {
          width: 40px;
          height: 2px;
          background: #b91c1c;
        }
        .eyebrow-text {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #b91c1c;
        }

        /* ===== Headline ===== */
        .hero-headline {
          font-family: "Merriweather", "Georgia", "Times New Roman", serif;
          font-size: 52px;
          font-weight: 900;
          line-height: 1.1;
          color: #0a2756;
          letter-spacing: -1px;
          margin: 0 0 24px;
        }

        /* ===== Subheadline ===== */
        .hero-sub {
          font-size: 18px;
          color: #0a2756;
          margin-bottom: 24px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          line-height: 1.5;
        }
        .brand-usshape {
          font-weight: 800;
          font-size: 22px;
          letter-spacing: 0.5px;
        }
        .brand-usshape .us {
          color: #0a2756;
        }
        .brand-usshape .shape {
          color: #b91c1c;
        }
        .sub-and {
          color: #6c757d;
          font-size: 15px;
          font-weight: 500;
        }
        .brand-shsu {
          font-family: "Merriweather", Georgia, serif;
          font-weight: 700;
          color: #f36f21;
          font-size: 20px;
        }

        /* ===== Body ===== */
        .hero-body {
          font-size: 17px;
          line-height: 1.75;
          color: #3a4a5e;
          max-width: 600px;
          margin-bottom: 0;
        }
        .hero-body strong {
          color: #0a2756;
          font-weight: 700;
        }

        /* ===== Buttons ===== */
        :global(.btn-primary-pro) {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #0a2756;
          color: #fff !important;
          padding: 14px 28px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.25s ease;
          border: 2px solid #0a2756;
        }
        :global(.btn-primary-pro:hover) {
          background: #061a3d;
          border-color: #061a3d;
          color: #fff !important;
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(10, 39, 86, 0.25);
        }
        :global(.btn-primary-pro svg) {
          transition: transform 0.25s ease;
        }
        :global(.btn-primary-pro:hover svg) {
          transform: translateX(4px);
        }

        :global(.btn-secondary-pro) {
          color: #0a2756 !important;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.3px;
          text-decoration: none;
          padding: 14px 4px;
          border-bottom: 2px solid #0a2756;
          transition: all 0.25s ease;
        }
        :global(.btn-secondary-pro:hover) {
          color: #b91c1c !important;
          border-bottom-color: #b91c1c;
        }

        /* ===== Authority row ===== */
        .authority-row {
          border-top: 1px solid #d8dde5;
        }
        .auth-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #6c757d;
          margin-bottom: 4px;
        }
        .auth-value {
          font-size: 14px;
          font-weight: 600;
          color: #0a2756;
        }
        .auth-divider {
          width: 1px;
          height: 40px;
          background: #d8dde5;
        }

        /* ===== Visual ===== */
        .visual-wrap {
          position: relative;
        }
        .visual-frame {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-radius: 4px;
          box-shadow:
            0 20px 50px rgba(10, 39, 86, 0.15),
            0 0 0 1px rgba(10, 39, 86, 0.06);
        }
        .visual-img {
          position: absolute;
          inset: 0;
          background-image: url("/images/sam-uni.webp");
          background-size: cover;
          background-position: center;
          transition: transform 0.8s ease;
        }
        .visual-frame:hover .visual-img {
          transform: scale(1.04);
        }
        .visual-caption {
          margin-top: 18px;
          padding-left: 16px;
          border-left: 3px solid #f36f21;
        }
        .cap-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #f36f21;
          margin-bottom: 4px;
        }
        .cap-name {
          font-family: "Merriweather", Georgia, serif;
          font-size: 16px;
          font-weight: 800;
          color: #0a2756;
          line-height: 1.3;
        }
        .cap-sub {
          font-size: 13px;
          color: #6c757d;
          margin-top: 2px;
        }

        /* ========== RESPONSIVE ========== */

        /* Tablet ≤ 991 */
        @media (max-width: 991px) {
          .hero-headline {
            font-size: 40px;
          }
          .visual-frame {
            aspect-ratio: 16 / 10;
            margin-top: 20px;
          }
        }

        /* Mobile ≤ 576 */
        @media (max-width: 576px) {
          .accent-stripe {
            height: 3px;
          }
          .hero-section :global(.py-5) {
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
          }
          .eyebrow-line {
            width: 28px;
          }
          .eyebrow-text {
            font-size: 10.5px;
            letter-spacing: 2px;
          }

          .hero-headline {
            font-size: 28px;
            letter-spacing: -0.5px;
            line-height: 1.18;
            margin-bottom: 18px;
          }

          .hero-sub {
            font-size: 15px;
            gap: 6px 10px;
            margin-bottom: 18px;
          }
          .brand-usshape {
            font-size: 18px;
          }
          .brand-shsu {
            font-size: 16px;
          }
          .sub-and {
            font-size: 13px;
            width: 100%;
          }

          .hero-body {
            font-size: 15px;
            line-height: 1.7;
          }

          :global(.btn-primary-pro) {
            padding: 12px 22px;
            font-size: 13px;
            width: 100%;
            justify-content: center;
          }
          :global(.btn-secondary-pro) {
            font-size: 13px;
            padding: 10px 0;
          }

          .authority-row {
            gap: 16px !important;
            margin-top: 30px !important;
            padding-top: 20px !important;
          }
          .auth-value {
            font-size: 13px;
          }

          .visual-frame {
            aspect-ratio: 4 / 3;
            margin-top: 14px;
          }
          .visual-caption {
            margin-top: 14px;
          }
          .cap-name {
            font-size: 15px;
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