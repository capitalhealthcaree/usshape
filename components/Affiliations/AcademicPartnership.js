// AcademicPartnership.jsx
const checkItems = [
  "Credentialed Preceptors On-Site",
  "Ongoing Academic Affiliation",
  "Supports SHSU-COM Mission",
  "Clinical Rotation Supervision",
];

export default function AcademicPartnership() {
  const BRAND = "#0046c0";

  const s = {
    section: {
      position: "relative",
      overflow: "hidden",
    },
    header: {
      textAlign: "center",
      marginBottom: "1rem",
    },
    secLabel: {
      fontSize: ".72rem",
      fontWeight: 700,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: BRAND,
      marginBottom: ".5rem",
    },
    secTitle: {
      fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
      fontWeight: 900,
      lineHeight: 1.15,
      color: "#111",
    },
    secSpan: { color: BRAND },
    subText: {
      fontSize: "1rem",
      color: "black",
      maxWidth: 760,
      margin: "1rem auto 0",
      lineHeight: 1.7,
    },
    row: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1.5rem",
      alignItems: "stretch",
    },
    // Memo card
    memoCard: {
      flex: "2 1 420px",
      background: "#fff",
      borderRadius: 24,
      boxShadow: "0 0 60px rgba(0,70,192,.1)",
      overflow: "hidden",
    },
    memoHeader: {
      background: BRAND,
      padding: "2rem 2.5rem",
      display: "flex",
      alignItems: "center",
      gap: "1.2rem",
    },
    memoHeaderIcon: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "rgba(255,255,255,.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.6rem",
      flexShrink: 0,
    },
    memoHeaderTitle: {
      fontSize: "1.4rem",
      fontWeight: 900,
      color: "#fff",
      margin: 0,
    },
    memoHeaderSub: {
      color: "rgba(255,255,255,.8)",
      fontSize: ".85rem",
      margin: 0,
    },
    memoBody: { padding: "2.5rem" },
    memoPill: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: "#f0f7ff",
      border: "1px solid #c7d9f8",
      color: "black",
      fontSize: ".75rem",
      fontWeight: 600,
      padding: ".35rem .9rem",
      borderRadius: 50,
      marginBottom: "1.5rem",
    },
    memoText: {
      fontSize: ".95rem",
      color: "#333",
      lineHeight: 1.8,
      borderLeft: `3px solid ${BRAND}`,
      paddingLeft: "1.2rem",
      marginBottom: "1.5rem",
      fontStyle: "italic",
    },
    memoSigStrong: {
      fontWeight: 700,
      color: "#111",
      display: "block",
      marginBottom: 2,
    },
    memoSigSub: { fontSize: ".875rem", color: "black" },
    univBadge: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: "linear-gradient(135deg, #fff8f0 0%, #fff3e0 100%)",
      border: "1.5px solid #f5a623",
      borderRadius: 14,
      padding: "1rem 1.4rem",
      marginTop: "1.5rem",
    },
    univBadgeName: { fontWeight: 500, fontSize: ".95rem", color: "#7a4100" },
    univBadgeSub: { fontSize: ".75rem", color: "#a0622a" },
    // Verified card
    verifiedCard: {
      flex: "1 1 240px",
      background: BRAND,
      borderRadius: 20,
      padding: "1rem 2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      color: "#fff",
    },
    verifiedTitle: {
      fontSize: "1.8rem",
      fontWeight: 900,
      color: "black",
    },
    verifiedDesc: { fontSize: ".9rem" },
    checkRow: {
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    checkText: { fontSize: ".85rem", opacity: 0.9 },
    verifiedTag: {
      display: "inline-block",
      background: "rgba(255,255,255,.15)",
      borderRadius: 50,
      fontSize: ".75rem",
      fontWeight: 600,
      padding: ".3rem .8rem",
      marginTop: "1.5rem",
      alignSelf: "flex-start",
    },
  };

  return (
    <section className="py-3" style={s.section}>
      <div className="container">
        {/* Header */}
        <div style={s.header}>
          <div style={s.secLabel}>Academic Partnership</div>
          <h2 style={s.secTitle}>
            Official University <span style={s.secSpan}>Affiliation</span>
          </h2>
          <p style={s.subText}>
            U.S. Shape, Inc. is proud to serve as an approved clinical training
            site, bridging healthcare education with real-world community
            service.
          </p>
        </div>

        <div style={s.row}>
          {/* Memo Card */}
          <div style={s.memoCard}>
            <div style={s.memoHeader}>
              <div style={s.memoHeaderIcon}>🏫</div>
              <div>
                <h3 style={s.memoHeaderTitle}>Sam Houston State University</h3>
                <p style={s.memoHeaderSub}>
                  College of Osteopathic Medicine · Official Memorandum
                </p>
              </div>
            </div>
            <div style={s.memoBody}>
              <div style={s.memoPill}>📋 Memorandum · April 27, 2026</div>
              <blockquote style={s.memoText}>
                Premier Pain Center, U.S. Shape, Inc. is an approved clinical
                training site for Sam Houston State University College of
                Osteopathic Medicine. Physicians with this practice that are
                credentialed as preceptors supervise medical students during
                clinical rotations. This is an ongoing affiliation that supports
                the educational mission of the medical school.
              </blockquote>
              <div>
                <strong style={s.memoSigStrong}>Mary Hogan, PhD, MBA</strong>
                <span style={s.memoSigSub}>
                  Director of Clinical Education, College of Osteopathic
                  Medicine
                </span>
              </div>
              <div style={s.univBadge}>
                <span style={{ fontSize: "1.8rem" }}>🟠</span>
                <div>
                  <div style={s.univBadgeName}>
                    Sam Houston State University
                  </div>
                  <div style={s.univBadgeSub}>
                    Member · The Texas State University System · Conroe, TX
                    77304
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Verified Card */}
          <div style={s.verifiedCard}>
            <h4 style={s.verifiedTitle}>
              Officially Approved Clinical Training Site
            </h4>
            <p style={s.verifiedDesc}>
              Our physicians serve as credentialed preceptors, directly
              mentoring future osteopathic physicians in real clinical settings,
              providing hands-on training, practical experience, and guidance to
              support professional growth and medical excellence.
            </p>
            <div style={{ marginTop: "0.3rem" }}>
              {checkItems.map((item) => (
                <div key={item} style={s.checkRow}>
                  <span style={{ fontSize: "1rem" }}>✓</span>
                  <span style={s.checkText}>{item}</span>
                </div>
              ))}
            </div>
            <span style={s.verifiedTag}>📜 Verified April 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
