import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section position-relative overflow-hidden">
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center g-5">
          {/* LEFT */}
          <div className="col-lg-7">
            <h1 className="hero-title">
              A Landmark Affiliation in Clinical Education
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

            <div className="d-flex flex-wrap gap-3 mt-4">
              <Link
                href="/externship-application-form"
                className="btn btn-cta-outline px-4 py-2 rounded-pill fw-semibold"
              >
                Apply for Externship
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-5">
            <div className="hero-visual position-relative">
              <div className="hero-frame">
                <div className="hero-image" />
                <div className="hero-overlay" />
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
            #ffffff 60%,
            #eaf1fb 70%
          );
        }

        .hero-title {
          font-size: 40px;
          font-weight: 900;
          color: #0a2756;
          line-height: 1.15;
          margin-bottom: 0;
        }

        .partners-row {
          margin: 36px 0 28px;
        }
        .brand-usshape {
          font-size: 34px;
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
          width: 40px;
          height: 1px;
          background: #cbd2dd;
        }
        .joins-text {
          color: #0a2756;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .brand-shsu {
          font-size: 28px;
          font-weight: 900;
          color: #f36f21;
          line-height: 1.15;
        }

        .hero-desc {
          font-size: 17px;
          color: #1a1a1a;
          line-height: 1.7;
          max-width: 560px;
          margin-top: 8px;
        }
        .text-navy {
          color: #0a2756;
        }

        :global(.btn-cta-outline) {
          background: transparent;
          color: #0a2756;
          border: 2px solid #0a2756;
          transition: all 0.25s ease;
        }
        :global(.btn-cta-outline:hover) {
          background: #0a2756;
          color: #fff;
        }

        /* RIGHT visual */
        .hero-visual {
          height: 540px;
        }
        .hero-frame {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(10, 39, 86, 0.18);
        }
        .hero-image {
          position: absolute;
          inset: 0;
          background-image: url("/images/sam-uni.webp");
          background-size: cover;
          background-position: center;
        }

        /* ========== RESPONSIVE ========== */

        /* tablet */
        @media (max-width: 991px) {
          .hero-title {
            font-size: 36px;
          }
          .hero-visual {
            height: auto;
            aspect-ratio: 4 / 3;
            margin-top: 30px;
          }
          .brand-usshape {
            font-size: 30px;
          }
          .brand-shsu {
            font-size: 24px;
          }
        }

        /* mobile */
        @media (max-width: 576px) {
          .hero-section {
            padding: 40px 0 50px;
          }

          .hero-title {
            font-size: 28px;
            line-height: 1.2;
            letter-spacing: -0.5px;
          }

          .partners-row {
            margin: 24px 0 20px;
            gap: 6px 12px !important;
          }
          .brand-usshape {
            font-size: 24px;
            letter-spacing: 0.5px;
          }
          .joins-text {
            font-size: 11px;
            letter-spacing: 1.5px;
            color: #6c757d;
            display: block;
            width: 100%;
            order: 1;
          }
          .brand-shsu {
            font-size: 22px;
            line-height: 1.2;
            order: 2;
            width: 100%;
          }
          .brand-usshape {
            order: 0;
          }

          .hero-desc {
            font-size: 15px;
            line-height: 1.65;
            margin-top: 4px;
          }

          .hero-visual {
            height: auto;
            aspect-ratio: 4 / 3;
            margin-top: 24px;
            border-radius: 16px;
            overflow: hidden;
          }
          .hero-frame {
            border-radius: 16px;
          }
          .hero-image {
            background-size: cover;
            background-position: center center;
          }

          :global(.btn-cta-outline) {
            font-size: 14px;
            padding: 10px 20px !important;
          }
        }

        /* tiny screens */
        @media (max-width: 360px) {
          .hero-title {
            font-size: 24px;
          }
          .brand-usshape {
            font-size: 22px;
          }
          .brand-shsu {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
}
