const stats = [
  {
    value: "Pain Med",
    label: "Clinical Specialty",
    detail:
      "Hands-on exposure to interventional and chronic pain management — a subspecialty most students don't touch until residency.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l8.84 8.84 8.84-8.84a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    value: "4 Weeks",
    label: "Immersive Rotation",
    detail:
      "A full four-week clinical block — morning consults, afternoon procedures, weekly case reviews. Not a shadowing visit.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
      </svg>
    ),
  },
  {
    value: "Approved",
    label: "SHSU COM Status",
    detail:
      "Officially credentialed by the SHSU College of Osteopathic Medicine — every hour counts toward your clinical record.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 2L4 7v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-5z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    value: "Mission",
    label: "Community Patients",
    detail:
      "Train with the underserved population US SHAPE was founded to serve. Real cases, real impact, real reflection.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
];

export default function Stats() {
  return (
    <section className="stats-section position-relative overflow-hidden">
      {/* angled top wave */}
      <svg
        className="wave-top position-absolute top-0 start-0 w-100"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path d="M0,0 L1440,0 L1440,40 Q720,0 0,40 Z" fill="#fff" />
      </svg>

      {/* glow accents */}
      <span className="glow glow-red" />
      <span className="glow glow-orange" />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* header */}
        <div className="text-center mb-5">
          <p className="eyebrow mb-2">What This Rotation Offers</p>
          <h2 className="section-title">
            Four Reasons This Isn&apos;t <br className="d-none d-md-block" />a
            Regular Clinical Slot
          </h2>
          <p className="section-sub mx-auto mt-3 mb-0">
            Built around a specialty that matters, a structure that respects
            your time, and a patient population that gives your training real
            meaning.
          </p>
          <div className="title-underline mx-auto mt-4" />
        </div>

        {/* stat cards */}
        <div className="row g-4">
          {stats.map((s, i) => (
            <div key={i} className="col-6 col-lg-3">
              <div className="stat-card h-100 position-relative">
                <span className="card-accent" />
                <div className="stat-icon">{s.icon}</div>
                <div className="d-flex align-items-baseline justify-content-between">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-index">0{i + 1}</div>
                </div>
                <div className="stat-label mt-3">{s.label}</div>
                <p className="stat-detail mb-0 mt-2">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stats-section {
          background: linear-gradient(
            135deg,
            #061a3d 0%,
            #0a2756 50%,
            #102f63 100%
          );
          color: #fff;
          padding: 110px 0 100px;
        }

        .wave-top {
          height: 60px;
          z-index: 3;
        }

        .glow {
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          filter: blur(90px);
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }

        .eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: #a8c5ec;
        }

        .section-title {
          font-size: 42px;
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.5px;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          border-radius: 4px;
          background: linear-gradient(90deg, #e63946, #f36f21);
        }

        .section-sub {
          color: rgba(207, 220, 239, 0.75);
          font-size: 16px;
          line-height: 1.7;
          max-width: 620px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 28px 24px;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .stat-card:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        }

        .card-accent {
          position: absolute;
          top: 0;
          left: 28px;
          width: 56px;
          height: 4px;
          border-radius: 0 0 6px 6px;
          background: linear-gradient(90deg, #e63946, #f36f21);
        }

        .stat-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: rgba(168, 197, 236, 0.12);
          border: 1px solid rgba(168, 197, 236, 0.2);
          color: #a8c5ec;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .stat-icon :global(svg) {
          width: 22px;
          height: 22px;
        }

        .stat-value {
          font-size: 38px;
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -1px;
          background: linear-gradient(135deg, #ffffff, #cfdcef);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-index {
          font-size: 14px;
          font-weight: 800;
          color: rgba(168, 197, 236, 0.4);
          letter-spacing: 1px;
        }

        .stat-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #a8c5ec;
        }

        .stat-detail {
          font-size: 14px;
          color: rgba(207, 220, 239, 0.75);
          line-height: 1.6;
        }

        @media (max-width: 991px) {
          .stats-section {
            padding: 80px 0 70px;
          }
          .section-title {
            font-size: 30px;
          }
          .stat-value {
            font-size: 32px;
          }
        }
        @media (max-width: 576px) {
          .stat-card {
            padding: 22px 18px;
          }
          .stat-value {
            font-size: 26px;
          }
        }
      `}</style>
    </section>
  );
}
