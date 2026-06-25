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

              <p>
                US SHAPE INC is proud to announce its affiliation with Sam
                Houston State University, with{" "}
                <a
                  href="https://www.mypremierpain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Premier Pain Centers
                </a>{" "}
                serving as the official clinical rotation site.
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
              src="/images/11.jpeg"
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
              US SHAPE INC is proud to announce its affiliation with Sam Houston
              State University, with{" "}
              <a
                href="https://www.mypremierpain.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Premier Pain Centers
              </a>{" "}
              serving as the official clinical rotation site.
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
              href="/usshape-alumni"
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
