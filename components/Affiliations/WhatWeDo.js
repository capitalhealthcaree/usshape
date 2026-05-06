// WhatWeDo.jsx — White bg, attractive cards with links
import { useEffect, useState } from "react";

const KF = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

  @keyframes fadeUpCard {
    from { opacity:0; transform:translateY(32px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes shimmerWwd {
    0%   { background-position:-200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes arrowSlide {
    0%  { transform:translateX(0); }
    50% { transform:translateX(5px); }
    100%{ transform:translateX(0); }
  }

  .wwd-c1{animation:fadeUpCard .6s .05s ease both}
  .wwd-c2{animation:fadeUpCard .6s .15s ease both}
  .wwd-c3{animation:fadeUpCard .6s .25s ease both}
  .wwd-c4{animation:fadeUpCard .6s .35s ease both}
  .wwd-c5{animation:fadeUpCard .6s .45s ease both}
  .wwd-arrow { animation: arrowSlide 1.6s ease-in-out infinite; display:inline-block; }
  .wwd-card-link:focus, .wwd-card-link:focus-visible { outline: none !important; box-shadow: none !important; }
`;

const pillars = [
  {
    icon: "⚖️",
    title: "Social Justice",
    desc: "Advocating for equity and human rights as the foundation of a just society for all communities.",
    link: "/social-justice",
    color: "#3a8eff",
    glow: "rgba(58,142,255,0.1)",
    border: "rgba(58,142,255,0.25)",
    tag: "Equity & Rights",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    desc: "Improving access to quality medical care and health education for underserved populations.",
    link: "/health-care",
    color: "#3a8eff",
    glow: "rgba(58,142,255,0.1)",
    border: "rgba(58,142,255,0.25)",
    tag: "Medical Access",
  },
  {
    icon: "📢",
    title: "Advocacy",
    desc: "Amplifying the voices of the marginalized and driving systemic change at every level.",
    link: "/advocacy",
    color: "#3a8eff",
    glow: "rgba(58,142,255,0.1)",
    border: "rgba(58,142,255,0.25)",
    tag: "Systemic Change",
  },
  {
    icon: "🌱",
    title: "Poverty Alleviation",
    desc: "Empowering individuals with resources and opportunities to break the cycle of poverty.",
    link: "/poverty-alleviation",
    color: "#3a8eff",
    glow: "rgba(58,142,255,0.1)",
    border: "rgba(58,142,255,0.25)",
    tag: "Empowerment",
  },
  {
    icon: "📚",
    title: "Education",
    desc: "Ensuring every child has access to quality education regardless of their background.",
    link: "/education",
    color: "#3a8eff",
    glow: "rgba(58,142,255,0.1)",
    border: "rgba(58,142,255,0.25)",
    tag: "Equal Access",
  },
];

const anims = ["wwd-c1", "wwd-c2", "wwd-c3", "wwd-c4", "wwd-c5"];

export default function WhatWeDo() {
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    if (!document.getElementById("wwd-kf")) {
      const el = document.createElement("style");
      el.id = "wwd-kf";
      el.innerHTML = KF;
      document.head.appendChild(el);
    }
  }, []);

  return (
    <section
      className="my-3"
      style={{ overflow: "hidden", position: "relative" }}
    >
      {/* ── Soft BG blobs ── */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(58,142,255,.05) 0%,transparent 70%)",
          top: -140,
          left: -100,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(124,58,237,.04) 0%,transparent 70%)",
          bottom: -100,
          right: "-5%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 1220,
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(58,142,255,.08)",
              border: "1px solid rgba(58,142,255,.22)",
              color: "#3a8eff",
              fontSize: ".7rem",
              fontWeight: 700,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              padding: ".4rem 1rem",
              borderRadius: 50,
              marginBottom: "1.2rem",
            }}
          >
            ✦ Our Mission
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem,4vw,3.2rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              color: "#111",
            }}
          >
            What We{" "}
            <span
              style={{
                background:
                  "linear-gradient(100deg,#3a8eff 0%,#60a5fa 45%,#3a8eff 90%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmerWwd 4s linear infinite",
                fontStyle: "italic",
              }}
            >
              Do
            </span>
          </h2>

          <p
            style={{
              fontSize: "1rem",
              color: "black",
              maxWidth: 520,
              margin: "0 auto 0",
              lineHeight: 1.8,
            }}
          >
            Our name reflects our values — each letter a pillar of change for
            underserved communities across the globe.
          </p>
        </div>

        {/* ── Cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "1.2rem",
          }}
        >
          {pillars.map((p, i) => {
            const h = hovered === i;
            return (
              <div
                key={p.title}
                className={anims[i]}
                style={{ height: "100%" }}
              >
                <div
                  href={p.link}
                  className="wwd-card-link"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: p.glow,
                    border: `1.5px solid ${p.color}`,
                    borderRadius: 22,
                    padding: "1.8rem 1.5rem",
                    textDecoration: "none",
                    outline: "none",
                    transition: "all .28s ease",
                    boxShadow:
                      "0 20px 48px ${p.glow}, 0 4px 12px rgba(0,0,0,.06)",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  {/* top accent line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "15%",
                      right: "15%",
                      height: 3,
                      background: `linear-gradient(90deg,transparent,${p.color},transparent)`,
                      transition: "all .28s",
                      borderRadius: 2,
                    }}
                  />

                  {/* Icon */}
                  <div
                    style={{
                      width: 54,
                      height: 54,
                      borderRadius: 15,
                      background: "white",
                      border: `1px solid ${h ? p.border : "#dde8ff"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      marginBottom: "1.2rem",
                      transition: "all .28s",
                      boxShadow: h ? `0 6px 20px ${p.glow}` : "none",
                    }}
                  >
                    {p.icon}
                  </div>

                  {/* Tag */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      background: h ? `${p.color}12` : "#f0f5ff",
                      border: `1px solid ${h ? p.border : "#dde8ff"}`,
                      color: "#2a5cab",
                      fontSize: ".6rem",
                      fontWeight: 700,
                      letterSpacing: ".07em",
                      textTransform: "uppercase",
                      padding: ".22rem .7rem",
                      borderRadius: 50,
                      marginBottom: ".8rem",
                      transition: "all .28s",
                      alignSelf: "flex-start",
                    }}
                  >
                    {p.tag}
                  </div>

                  {/* Title */}
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "black",
                      marginBottom: ".55rem",
                      transition: "color .22s",
                    }}
                  >
                    {p.title}
                  </div>

                  {/* Desc */}
                  <p
                    style={{
                      fontSize: ".84rem",
                      color: "black",
                      lineHeight: 1.72,
                      margin: "0 0 1.4rem",
                      flex: 1,
                    }}
                  >
                    {p.desc}
                  </p>

                  {/* Learn more */}
                  <a
                    href={p.link}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      color: p.color,
                      fontSize: ".78rem",
                      fontWeight: 700,
                      transition: "color .22s",
                      marginTop: "auto",
                    }}
                  >
                    Learn More <span className="wwd-arrow">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
