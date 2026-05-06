// OurPrograms.jsx
const programs = [
  {
    icon: "🏥",
    color: "#dbeafe",
    title: "Externship Program",
    link: "/externship-application-form",
    desc: "Hands-on clinical training experience for medical students at our approved partner sites.",
  },
  {
    icon: "🤝",
    color: "#dcfce7",
    title: "Nagy Loan Program",
    link: "/nagy-loan-application-form",
    desc: "Financial support for young physicians to launch their medical careers debt-free.",
  },
  {
    icon: "📚",
    color: "#fef9c3",
    link: "/tahira-khatoon",
    title: "Tahira Khatoon Educational Program",
    desc: "Scholarships and educational resources for underprivileged students.",
  },
];

export default function OurPrograms() {
  const BRAND = "#0046c0";

  const s = {
    section: {},
    container: {
      width: "100%",
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 1.5rem",
    },
    header: {
      textAlign: "center",
      marginBottom: "1.5rem", // ✅ reduced from 3rem
    },
    secLabel: {
      fontSize: ".72rem",
      fontWeight: 700,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: BRAND,
      marginBottom: ".3rem", // ✅ reduced from .5rem
    },
    secTitle: {
      fontSize: "clamp(1.6rem, 3vw, 2.4rem)", // ✅ slightly smaller
      fontWeight: 900,
      lineHeight: 1.15,
      color: "#111",
      margin: 0,
    },
    secSpan: { color: BRAND },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1.5rem",
    },
    card: {
      flex: "1 1 260px",
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,.06)",
      transition: "transform .25s, box-shadow .25s",
      background: "#fff",
      cursor: "default",
    },
    cardTop: {
      height: 130,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "3rem",
    },
    cardBody: {
      padding: "1.5rem",
    },
    cardTitle: {
      fontWeight: 700,
      fontSize: "1rem",
      marginBottom: ".4rem",
      color: "#111",
    },
    cardDesc: {
      fontSize: ".85rem",
      color: "black",
      lineHeight: 1.6,
      margin: 0,
    },
  };

  return (
    <div className="container my-4">
      {/* Header */}
      <div style={s.header}>
        <div style={s.secLabel}>Get Involved</div>
        <h2 style={s.secTitle}>
          Our <span style={s.secSpan}>Programs</span>
        </h2>
      </div>

      {/* Program Cards */}
      <div style={s.grid}>
        {programs.map((p) => (
          <div
            key={p.title}
            style={s.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 16px 48px rgba(0,70,192,.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,.06)";
            }}
          >
            <div style={{ ...s.cardTop, background: p.color }}>{p.icon}</div>
            <div style={s.cardBody}>
              <div style={s.cardTitle}>
                <a href={p.link}>{p.title}</a>
              </div>
              <p style={s.cardDesc}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
