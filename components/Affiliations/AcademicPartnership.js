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
    secTitle: {
      fontSize: "38px",
      fontWeight: 700,
      color: "#111",
    },
    secSpan: { color: BRAND },
    subText: {
      fontSize: "1rem",
      color: "black",
      maxWidth: 760,
      margin: "0 auto 0",
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
      padding: "1rem 2.5rem",
      display: "flex",
      alignItems: "center",
      gap: "1.2rem",
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
    memoBody: { padding: "1rem" },
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
      color: "black",
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
  };

  return (
    <section className="py-3" style={s.section}>
      <div className="container">
        {/* Header */}
        <div style={s.header}>
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
              <div>
                <h3 style={s.memoHeaderTitle}>Sam Houston State University</h3>
                <p style={s.memoHeaderSub}>College of Osteopathic Medicine</p>
              </div>
            </div>
            <div style={s.memoBody}>
              <div style={s.memoPill}>Memorandum · April 27, 2026</div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
