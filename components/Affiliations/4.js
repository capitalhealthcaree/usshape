import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-bento position-relative">
      <div className="container py-5">
        {/* top status bar */}
        <div className="status-bar d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
          <div className="d-flex align-items-center gap-2">
            <span className="status-dot" />
            <span className="status-text">
              Affiliation Status · <strong>Active</strong>
            </span>
          </div>
          <div className="d-none d-md-flex align-items-center gap-3">
            <span className="status-meta">Cohort 2026 Open</span>
            <span className="status-divider" />
            <span className="status-meta">USSHAPE.ORG</span>
          </div>
        </div>

        {/* BENTO GRID */}
        <div className="bento-grid">
          {/* tile 1 — headline (big) */}
          <div className="tile tile-headline">
            <div className="tile-tag">
              <span className="tag-num">01</span>
              <span>The Announcement</span>
            </div>
            <h1 className="bento-title">
              A Landmark
              <br />
              Affiliation in
              <br />
              <span className="title-grad">Clinical Education.</span>
            </h1>
            <div className="headline-foot d-flex align-items-center gap-3 mt-auto pt-4">
              <div className="foot-avatars">
                <span className="avatar a1">US</span>
                <span className="avatar a2">SH</span>
                <span className="avatar a3">PP</span>
              </div>
              <div>
                <div className="foot-label">A partnership between</div>
                <div className="foot-orgs">US SHAPE · SHSU · Premier Pain</div>
              </div>
            </div>
          </div>

          {/* tile 2 — image (tall right) */}
          <div className="tile tile-image">
            <div className="img-bg" />
            <div className="img-shade" />
            <div className="img-corner">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-7.5 8-13a8 8 0 10-16 0c0 5.5 8 13 8 13z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <div className="img-caption">
              <div className="cap-line">Huntsville, TX</div>
              <div className="cap-name">
                Sam Houston <br /> State University
              </div>
              <div className="cap-tag">College of Osteopathic Medicine</div>
            </div>
          </div>

          {/* tile 3 — description + CTA */}
          <div className="tile tile-cta">
            <div className="tile-tag dark">
              <span className="tag-num">02</span>
              <span>What Happens Now</span>
            </div>
            <p className="cta-text">
              <strong>Premier Pain Centers</strong> is now the official clinical
              rotation site for SHSU&apos;s College of Osteopathic Medicine —
              students train under credentialed preceptors in live patient care.
            </p>
            <Link
              href="/externship-application-form"
              className="bento-btn d-inline-flex align-items-center justify-content-between mt-auto"
            >
              <span>Apply for Externship</span>
              <span className="btn-arrow">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          {/* tile 4 — big stat */}
          <div className="tile tile-stat">
            <div className="stat-label">Faculty Credentialed</div>
            <div className="stat-value">100%</div>
            <div className="stat-bar">
              <div className="stat-bar-fill" />
            </div>
            <div className="stat-sub">SHSU COM Approved Rotation Site</div>
          </div>

          {/* tile 5 — partners list */}
          <div className="tile tile-partners">
            <div className="partners-head">
              <span className="dot-live" />
              <span>Three Partners</span>
            </div>
            <ul className="partners-list">
              <li>
                <span className="li-num">01</span>
                <span className="li-name">
                  <span className="us-blue">US</span>{" "}
                  <span className="us-red">SHAPE</span>
                </span>
                <span className="li-tag">Nonprofit</span>
              </li>
              <li>
                <span className="li-num">02</span>
                <span className="li-name shsu-orange">SHSU</span>
                <span className="li-tag">Academic</span>
              </li>
              <li>
                <span className="li-num">03</span>
                <span className="li-name">
                  <span className="us-red">P</span>remier Pain
                </span>
                <span className="li-tag">Clinical</span>
              </li>
            </ul>
          </div>

          {/* tile 6 — quote */}
          <div className="tile tile-quote d-none d-lg-flex">
            <div className="quote-mark">&ldquo;</div>
            <p>
              An ongoing affiliation supporting the educational mission of the
              medical school.
            </p>
            <div className="quote-by">
              <div className="by-avatar">MH</div>
              <div>
                <div className="by-name">Dr. Mary Hogan</div>
                <div className="by-role">Clinical Education, SHSU COM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-bento {
          background: linear-gradient(180deg, #f8faff 0%, #ffffff 100%);
          min-height: 100vh;
        }

        /* ===== Status bar ===== */
        .status-bar {
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(10, 39, 86, 0.08);
        }
        .status-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.2);
          animation: livePulse 2s infinite;
        }
        @keyframes livePulse {
          0%,
          100% {
            box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.2);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(34, 197, 94, 0.05);
          }
        }
        .status-text {
          font-size: 13px;
          color: #4a5568;
          letter-spacing: 0.3px;
        }
        .status-text strong {
          color: #22c55e;
          font-weight: 700;
        }
        .status-meta {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #6c757d;
        }
        .status-divider {
          width: 1px;
          height: 12px;
          background: #cbd2dd;
        }

        /* ===== BENTO GRID ===== */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: minmax(140px, auto);
          gap: 16px;
        }
        .tile {
          border-radius: 24px;
          padding: 28px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }
        .tile:hover {
          transform: translateY(-4px);
        }

        /* tile placements */
        .tile-headline {
          grid-column: span 8;
          grid-row: span 2;
          background: #0a2756;
          color: #fff;
          background-image:
            radial-gradient(
              circle at 80% 20%,
              rgba(243, 111, 33, 0.15),
              transparent 50%
            ),
            radial-gradient(
              circle at 20% 80%,
              rgba(230, 57, 70, 0.12),
              transparent 50%
            );
        }
        .tile-image {
          grid-column: span 4;
          grid-row: span 3;
          color: #fff;
          padding: 0;
          min-height: 460px;
        }
        .tile-cta {
          grid-column: span 4;
          grid-row: span 2;
          background: #fff;
          border: 1px solid rgba(10, 39, 86, 0.1);
          color: #0a2756;
        }
        .tile-stat {
          grid-column: span 4;
          grid-row: span 2;
          background: linear-gradient(135deg, #f36f21 0%, #e63946 100%);
          color: #fff;
        }
        .tile-partners {
          grid-column: span 4;
          grid-row: span 2;
          background: #fff;
          border: 1px solid rgba(10, 39, 86, 0.1);
          color: #0a2756;
        }
        .tile-quote {
          grid-column: span 8;
          grid-row: span 1;
          background: #061a3d;
          color: #fff;
          flex-direction: row !important;
          align-items: center;
          gap: 20px;
        }

        /* ===== Tile content styles ===== */
        .tile-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #a8c5ec;
          margin-bottom: 18px;
        }
        .tile-tag.dark {
          color: #6c757d;
        }
        .tag-num {
          font-family: "Merriweather", Georgia, serif;
          font-size: 11px;
          background: rgba(255, 255, 255, 0.1);
          padding: 3px 8px;
          border-radius: 6px;
          letter-spacing: 1px;
        }
        .tile-tag.dark .tag-num {
          background: rgba(10, 39, 86, 0.08);
          color: #0a2756;
        }

        .bento-title {
          font-family: "Merriweather", Georgia, serif;
          font-size: 56px;
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -2px;
          color: #fff;
          margin: 0;
        }
        .title-grad {
          background: linear-gradient(
            135deg,
            #f36f21 0%,
            #ffa46b 50%,
            #fff 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-style: italic;
        }

        .headline-foot {
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }
        .foot-avatars {
          display: flex;
        }
        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.5px;
          border: 2px solid #0a2756;
          margin-left: -10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        .avatar:first-child {
          margin-left: 0;
        }
        .avatar.a1 {
          background: #fff;
          color: #0a2756;
        }
        .avatar.a2 {
          background: #f36f21;
          color: #fff;
        }
        .avatar.a3 {
          background: #e63946;
          color: #fff;
        }
        .foot-label {
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 2px;
        }
        .foot-orgs {
          font-size: 13px;
          font-weight: 600;
          color: #fff;
        }

        /* image tile */
        .img-bg {
          position: absolute;
          inset: 0;
          background-image: url("/images/sam-uni.webp");
          background-size: cover;
          background-position: center;
          transition: transform 8s ease;
          animation: slowZoom 22s infinite alternate;
        }
        @keyframes slowZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.12);
          }
        }
        .img-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(10, 39, 86, 0.3) 0%,
            transparent 35%,
            rgba(6, 26, 61, 0.92) 100%
          );
        }
        .img-corner {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.95);
          color: #0a2756;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
        }
        .img-caption {
          position: absolute;
          bottom: 24px;
          left: 24px;
          right: 24px;
          z-index: 3;
        }
        .cap-line {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #f36f21;
          margin-bottom: 8px;
        }
        .cap-name {
          font-family: "Merriweather", Georgia, serif;
          font-size: 22px;
          font-weight: 900;
          line-height: 1.15;
          margin-bottom: 6px;
        }
        .cap-tag {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
        }

        /* CTA tile */
        .cta-text {
          font-size: 15px;
          line-height: 1.65;
          color: #4a5568;
          margin: 0 0 20px;
        }
        .cta-text strong {
          color: #0a2756;
          font-weight: 700;
        }
        :global(.bento-btn) {
          background: #0a2756;
          color: #fff !important;
          text-decoration: none;
          padding: 14px 18px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 700;
          transition: all 0.3s ease;
          width: 100%;
        }
        :global(.bento-btn:hover) {
          background: #e63946;
        }
        :global(.bento-btn:hover .btn-arrow) {
          transform: translateX(6px);
        }
        .btn-arrow {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.15);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s;
        }

        /* stat tile */
        .stat-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          opacity: 0.85;
        }
        .stat-value {
          font-family: "Merriweather", Georgia, serif;
          font-size: 80px;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -3px;
          margin: 8px 0 16px;
        }
        .stat-bar {
          height: 6px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 12px;
        }
        .stat-bar-fill {
          height: 100%;
          width: 100%;
          background: #fff;
          border-radius: 10px;
          animation: fillIn 1.5s ease-out;
        }
        @keyframes fillIn {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .stat-sub {
          font-size: 12px;
          opacity: 0.85;
          font-weight: 500;
        }

        /* partners tile */
        .partners-head {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #6c757d;
          margin-bottom: 16px;
        }
        .dot-live {
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
          animation: livePulse 2s infinite;
        }
        .partners-list {
          list-style: none;
          padding: 0;
          margin: 0;
          flex: 1;
        }
        .partners-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(10, 39, 86, 0.08);
          font-size: 15px;
        }
        .partners-list li:last-child {
          border-bottom: none;
        }
        .li-num {
          font-family: "Merriweather", Georgia, serif;
          font-size: 12px;
          color: #6c757d;
          width: 22px;
        }
        .li-name {
          flex: 1;
          font-weight: 800;
          color: #0a2756;
        }
        .us-blue {
          color: #0a2756;
        }
        .us-red {
          color: #e63946;
        }
        .shsu-orange {
          color: #f36f21;
        }
        .li-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 4px 10px;
          background: rgba(10, 39, 86, 0.06);
          color: #6c757d;
          border-radius: 6px;
        }

        /* quote tile */
        .tile-quote {
          padding: 20px 28px;
        }
        .quote-mark {
          font-family: Georgia, serif;
          font-size: 70px;
          line-height: 0.5;
          color: #f36f21;
          flex-shrink: 0;
          margin-top: 20px;
        }
        .tile-quote p {
          flex: 1;
          font-size: 16px;
          font-style: italic;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.55;
          margin: 0;
        }
        .quote-by {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .by-avatar {
          width: 38px;
          height: 38px;
          background: linear-gradient(135deg, #f36f21, #e63946);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 800;
        }
        .by-name {
          font-size: 13px;
          font-weight: 700;
        }
        .by-role {
          font-size: 10px;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: rgba(168, 197, 236, 0.7);
        }

        /* ========== RESPONSIVE ========== */

        /* Tablet ≤ 991 */
        @media (max-width: 991px) {
          .bento-grid {
            grid-template-columns: repeat(6, 1fr);
          }
          .tile-headline {
            grid-column: span 6;
            grid-row: auto;
          }
          .tile-image {
            grid-column: span 6;
            grid-row: auto;
            min-height: 360px;
          }
          .tile-cta {
            grid-column: span 6;
            grid-row: auto;
          }
          .tile-stat {
            grid-column: span 3;
            grid-row: auto;
          }
          .tile-partners {
            grid-column: span 3;
            grid-row: auto;
          }
          .tile-quote {
            grid-column: span 6;
            grid-row: auto;
          }

          .bento-title {
            font-size: 44px;
          }
          .stat-value {
            font-size: 64px;
          }
        }

        /* Mobile ≤ 576 */
        @media (max-width: 576px) {
          .bento-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .tile,
          .tile-image {
            grid-column: span 1 !important;
            border-radius: 18px;
            padding: 20px;
          }
          .tile-image {
            min-height: 280px;
            padding: 0;
          }

          .status-bar {
            font-size: 12px;
          }
          .status-text {
            font-size: 12px;
          }

          .bento-title {
            font-size: 30px;
            letter-spacing: -1px;
          }
          .tile-tag {
            font-size: 10px;
            letter-spacing: 1.5px;
            margin-bottom: 14px;
          }

          .avatar {
            width: 30px;
            height: 30px;
            font-size: 10px;
          }
          .foot-orgs {
            font-size: 12px;
          }

          .cap-name {
            font-size: 18px;
          }
          .img-caption {
            bottom: 18px;
            left: 18px;
            right: 18px;
          }
          .img-corner {
            width: 34px;
            height: 34px;
            top: 14px;
            right: 14px;
          }

          .cta-text {
            font-size: 14px;
          }
          :global(.bento-btn) {
            padding: 12px 16px;
            font-size: 13px;
          }

          .stat-value {
            font-size: 52px;
          }
          .stat-label,
          .stat-sub {
            font-size: 10.5px;
          }

          .partners-list li {
            font-size: 13px;
            padding: 10px 0;
          }
          .li-tag {
            font-size: 9px;
            padding: 3px 8px;
          }
        }

        @media (max-width: 360px) {
          .bento-title {
            font-size: 26px;
          }
          .stat-value {
            font-size: 44px;
          }
        }
      `}</style>
    </section>
  );
}
