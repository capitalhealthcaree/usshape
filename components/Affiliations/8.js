const steps = [
  {
    n: "Step 01",
    title: "Submit Your Application",
    desc: "Fill the externship form on usshape.org — credentials, clerkship goals, and preferred dates. Reviewed by the Director of Clinical Education at SHSU COM.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M9 11l3 3 6-6" />
        <path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9c1.5 0 3 .4 4.3 1" />
      </svg>
    ),
  },
  {
    n: "Step 02",
    title: "Get Paired With a Preceptor",
    desc: "Matched with a credentialed physician at Premier Pain Centers whose subspecialty aligns with your interests — interventional, palliative, or musculoskeletal.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="9" cy="8" r="3.5" />
        <circle cx="17" cy="10" r="2.5" />
        <path d="M2 20v-1.5a4 4 0 014-4h6a4 4 0 014 4V20" />
        <path d="M17 20v-1a3 3 0 013-3" />
      </svg>
    ),
  },
  {
    n: "Step 03",
    title: "Rotate On-Site in Richardson",
    desc: "Four-week immersive rotation at our Collins Boulevard clinic. Morning patient consults, afternoon procedures, weekly case-review with your preceptor.",
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
    n: "Step 04",
    title: "Earn Verified Hours & Join Alumni",
    desc: "SHSU COM logs your competencies. Top performers are profiled in our alumni network — opening doors to Nagy Loan recipients and residency referrals.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
      </svg>
    ),
  },
];

export default function RotationJourney() {
  return (
    <section className="journey-section position-relative">
      <div className="container py-5">
        {/* header */}
        <div className="mb-5 pb-2" style={{ maxWidth: 640 }}>
          <p className="eyebrow mb-2">Inside the Rotation</p>
          <h2 className="section-title">
            From Application <br className="d-none d-md-block" />
            <span className="title-red">to Stethoscope.</span>
          </h2>
          <p className="section-sub mt-3 mb-0">
            A clear, four-stage path from the day you click &ldquo;apply&rdquo;
            to the day you sign your final evaluation.
          </p>
        </div>

        {/* timeline */}
        <div className="position-relative">
          {/* connector line (desktop only) */}
          <div className="connector-line d-none d-lg-block" />

          <div className="row g-4">
            {steps.map((s, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="step-card h-100 position-relative">
                  <div className="step-icon">
                    <div className="icon-wrap">{s.icon}</div>
                  </div>
                  <div className="step-body">
                    <p className="step-num mb-1">{s.n}</p>
                    <h3 className="step-title mb-2">{s.title}</h3>
                    <p className="step-desc mb-0">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .journey-section {
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
        }

        /* header */
        .eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #f36f21;
        }
        .section-title {
          font-family: "Merriweather", Georgia, serif;
          font-size: 44px;
          font-weight: 900;
          color: #0a2756;
          line-height: 1.15;
          letter-spacing: -1px;
          margin: 0;
        }
        .title-red {
          color: #e63946;
        }
        .section-sub {
          color: #4a5568;
          font-size: 16px;
          line-height: 1.7;
        }

        /* connector line */
        .connector-line {
          position: absolute;
          top: 48px;
          left: 12%;
          right: 12%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            #cbd2dd 20%,
            #cbd2dd 80%,
            transparent
          );
          z-index: 0;
        }

        /* card */
        .step-card {
          background: #fff;
          border: 1px solid #e5e8ee;
          border-radius: 18px;
          padding: 24px 22px 22px;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
          z-index: 1;
        }
        .step-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(10, 39, 86, 0.1);
          border-color: #d8dde5;
        }

        /* icon */
        .step-icon {
          position: absolute;
          top: -22px;
          left: 22px;
        }
        .icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, #0a2756, #1a4a8f);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 22px rgba(10, 39, 86, 0.3);
          transition: transform 0.3s ease;
        }
        .step-card:hover .icon-wrap {
          transform: scale(1.06) rotate(-4deg);
          background: linear-gradient(135deg, #e63946, #f36f21);
          box-shadow: 0 12px 26px rgba(230, 57, 70, 0.35);
        }
        .icon-wrap :global(svg) {
          width: 22px;
          height: 22px;
        }

        /* card content */
        .step-body {
          margin-top: 30px;
        }
        .step-num {
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #e63946;
        }
        .step-title {
          font-family: "Merriweather", Georgia, serif;
          font-size: 17px;
          font-weight: 900;
          color: #0a2756;
          line-height: 1.3;
        }
        .step-desc {
          font-size: 13.5px;
          color: #5b6478;
          line-height: 1.65;
        }

        /* responsive */
        @media (max-width: 991px) {
          .section-title {
            font-size: 34px;
          }
        }
        @media (max-width: 576px) {
          .section-title {
            font-size: 26px;
            letter-spacing: -0.5px;
          }
          .eyebrow {
            font-size: 10.5px;
            letter-spacing: 3px;
          }
          .section-sub {
            font-size: 14.5px;
          }
          .step-card {
            padding: 22px 18px 20px;
          }
          .step-title {
            font-size: 16px;
          }
          .step-desc {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}
