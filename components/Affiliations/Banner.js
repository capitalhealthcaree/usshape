import { useEffect } from "react";

const KF = `
  @keyframes fadeUp   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeRight{ from{opacity:0;transform:translateX(44px)} to{opacity:1;transform:translateX(0)} }
  @keyframes floatY   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes floatY2  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
  @keyframes shimmer  { 0%{background-position:-200% center} 100%{background-position:200% center} }
  @keyframes pulse    { 0%,100%{box-shadow:0 0 0 0 rgba(74,222,128,.55)} 50%{box-shadow:0 0 0 7px rgba(74,222,128,0)} }
  @keyframes orbA     { 0%,100%{transform:translate(0,0)} 50%{transform:translate(24px,-16px)} }
  @keyframes orbB     { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-20px,14px)} }
  @keyframes scanLine { 0%{top:0} 100%{top:100%} }

  .a1{animation:fadeUp   .6s 0s   ease both}
  .a2{animation:fadeUp   .6s .12s ease both}
  .a3{animation:fadeUp   .6s .22s ease both}
  .a4{animation:fadeUp   .6s .32s ease both}
  .a5{animation:fadeUp   .6s .42s ease both}
  .ar{animation:fadeRight .8s .15s ease both}
  .fl1{animation:floatY  4s ease-in-out infinite}
  .fl2{animation:floatY2 5.5s ease-in-out infinite .6s}

  .dbtn:hover{transform:translateY(-3px) scale(1.03)!important;box-shadow:0 16px 40px rgba(58,142,255,.5)!important}
  .obtn:hover{background:rgba(255,255,255,.13)!important;transform:translateY(-2px)!important}
`;

export default function Header() {
  useEffect(() => {
    if (!document.getElementById("hkf3")) {
      const s = document.createElement("style");
      s.id = "hkf3";
      s.innerHTML = KF;
      document.head.appendChild(s);
    }
  }, []);

  const B = "#0046c0";
  const BD = "#06112a";
  const A = "#3a8eff";
  const A2 = "#7ab8ff";
  const G = "#4ade80";
  const GO = "#f5a623";

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        background: `radial-gradient(ellipse 85% 65% at 65% 5%, #0d2654 0%, ${BD} 62%)`,
        position: "relative",
        overflow: "hidden",
        padding: "2rem 0",
      }}
    >
      {/* ── BG DECOR ── */}
      <div
        style={{
          position: "absolute",
          width: 560,
          height: 560,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(58,142,255,.15) 0%,transparent 68%)",
          top: -130,
          right: -50,
          animation: "orbA 14s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(74,222,128,.08) 0%,transparent 68%)",
          bottom: -100,
          left: "6%",
          animation: "orbB 17s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(58,142,255,.032) 1px,transparent 1px),linear-gradient(90deg,rgba(58,142,255,.032) 1px,transparent 1px)",
          backgroundSize: "58px 58px",
          pointerEvents: "none",
        }}
      />

      {/* ── CONTAINER ── */}
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
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "3rem",
          }}
        >
          {/* ════ LEFT ════ */}
          <div style={{ flex: "1 1 400px" }}>
            {/* H1 */}
            <h1
              className="a2"
              style={{
                fontSize: "clamp(2.8rem,5.2vw,4.7rem)",
                fontWeight: 900,
                lineHeight: 1.07,
                color: "#fff",
                marginBottom: "1.4rem",
                letterSpacing: "-.015em",
              }}
            >
              Cultivating
              <br />
              <span
                style={{
                  background: `linear-gradient(100deg,${A} 0%,#aad4ff 45%,${A} 90%)`,
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 4s linear infinite",
                  fontStyle: "italic",
                }}
              >
                Connections
              </span>
              <br />
              for a Better
              <br />
              Tomorrow
            </h1>

            {/* Sub */}
            <p
              className="a3"
              style={{
                fontSize: "1.05rem",
                color: "white",
                lineHeight: 1.82,
                maxWidth: 500,
                marginBottom: "1.8rem",
              }}
            >
              U.S. Shape, Inc. serves the less fortunate through Social Justice,
              Healthcare, Advocacy, Poverty Alleviation, and Education —
              building communities where everyone can thrive.
            </p>

            {/* CTA */}
            <div
              className="a4"
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "2.8rem",
              }}
            >
              <a
                href="/donation"
                className="dbtn"
                style={{
                  background: `linear-gradient(130deg,${A} 0%,#1768e8 100%)`,
                  color: "#fff",
                  border: "none",
                  borderRadius: 50,
                  padding: ".9rem 2.3rem",
                  fontWeight: 700,
                  fontSize: ".94rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                  boxShadow: `0 8px 28px rgba(58,142,255,.38)`,
                  transition: "all .22s",
                  fontFamily: "'DM Sans',sans-serif",
                }}
              >
                Donate Now
              </a>
              <a
                href="/externship-application-form"
                className="obtn"
                style={{
                  background: "rgba(255,255,255,.07)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,.2)",
                  borderRadius: 50,
                  padding: ".88rem 2rem",
                  fontWeight: 600,
                  fontSize: ".94rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                  backdropFilter: "blur(8px)",
                  transition: "all .2s",
                  fontFamily: "'DM Sans',sans-serif",
                }}
              >
                Apply for Externship →
              </a>
            </div>
          </div>

          {/* ════ RIGHT — Dashboard Panel ════ */}
          <div className="ar" style={{ flex: "1 1 400px" }}>
            <div
              className="fl1"
              style={{
                background: "rgba(255,255,255,.055)",
                border: "1px solid rgba(255,255,255,.12)",
                borderRadius: 28,
                backdropFilter: "blur(24px)",
                boxShadow:
                  "0 40px 100px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.09)",
                overflow: "hidden",
              }}
            >
              {/* ── Window chrome bar ── */}
              <div
                style={{
                  background: "rgba(255,255,255,.045)",
                  borderBottom: "1px solid rgba(255,255,255,.08)",
                  padding: "1rem 1.4rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                {/* traffic lights */}
                <div style={{ display: "flex", gap: 6 }}>
                  {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                    <div
                      key={c}
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: c,
                        opacity: 0.85,
                      }}
                    />
                  ))}
                </div>

                {/* ── Nonprofit badge below chrome bar ── */}
                <div style={{ padding: "1rem 1.4rem 0" }}>
                  <div
                    className="a1"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 9,
                      background: "rgba(58,142,255,.1)",
                      border: "1px solid rgba(58,142,255,.3)",
                      color: A2,
                      fontSize: ".7rem",
                      fontWeight: 700,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      padding: ".42rem 1.1rem",
                      borderRadius: 50,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: G,
                        flexShrink: 0,
                        animation: "pulse 2s ease-in-out infinite",
                      }}
                    />
                    USShape.org | Est. USA Nonprofit Driving Impact
                  </div>
                </div>
              </div>

              {/* ── Panel body ── */}
              <div
                style={{
                  padding: "1.8rem 1.6rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.1rem",
                }}
              >
                {/* Top hero row */}
                <div
                  style={{
                    background: `linear-gradient(135deg,rgba(58,142,255,.18) 0%,rgba(58,142,255,.06) 100%)`,
                    border: "1px solid rgba(58,142,255,.25)",
                    borderRadius: 20,
                    padding: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.2rem",
                  }}
                >
                  <div
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      flexShrink: 0,
                      background: `linear-gradient(135deg,${A} 0%,#092e70 100%)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                      boxShadow: `0 12px 36px rgba(58,142,255,.45)`,
                    }}
                  >
                    🌍
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Playfair Display',serif",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: 4,
                      }}
                    >
                      Serving Communities
                    </div>
                    <div
                      style={{
                        fontSize: ".78rem",
                        color: "rgba(255,255,255,.5)",
                        lineHeight: 1.6,
                      }}
                    >
                      Bridging healthcare, education
                      <br />& social equity every day
                    </div>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        marginTop: 10,
                        background: "rgba(58,142,255,.18)",
                        border: "1px solid rgba(58,142,255,.3)",
                        color: A2,
                        fontSize: ".65rem",
                        fontWeight: 700,
                        padding: ".25rem .7rem",
                        borderRadius: 50,
                      }}
                    >
                      ✦ Building Brighter Futures
                    </div>
                  </div>
                </div>

                {/* 2-col stats row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  {[
                    {
                      icon: "⚖️",
                      label: "Focus Areas",
                      val: "5 Pillars",
                      color: "rgba(58,142,255,.15)",
                      bc: "rgba(58,142,255,.25)",
                    },
                    {
                      icon: "📋",
                      label: "Active Programs",
                      val: "Extern · Loans · Edu",
                      color: "rgba(245,166,35,.12)",
                      bc: "rgba(245,166,35,.28)",
                      vc: GO,
                    },
                  ].map((c) => (
                    <div
                      key={c.label}
                      style={{
                        background: c.color,
                        border: `1px solid ${c.bc}`,
                        borderRadius: 16,
                        padding: "1.1rem",
                      }}
                    >
                      <div style={{ fontSize: "1.5rem", marginBottom: 6 }}>
                        {c.icon}
                      </div>
                      <div
                        style={{
                          fontSize: ".62rem",
                          color: "rgba(255,255,255,.45)",
                          fontWeight: 600,
                          letterSpacing: ".05em",
                          textTransform: "uppercase",
                          marginBottom: 3,
                        }}
                      >
                        {c.label}
                      </div>
                      <div
                        style={{
                          fontSize: ".85rem",
                          fontWeight: 700,
                          color: c.vc || "#fff",
                          lineHeight: 1.3,
                        }}
                      >
                        {c.val}
                      </div>
                    </div>
                  ))}
                </div>

                {/* SHSU affiliation card */}
                <div
                  style={{
                    background: "rgba(255,255,255,.05)",
                    border: "1px solid rgba(255,255,255,.1)",
                    borderRadius: 16,
                    padding: "1.1rem 1.2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 12,
                      flexShrink: 0,
                      background: "rgba(58,142,255,.18)",
                      border: "1px solid rgba(58,142,255,.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                    }}
                  >
                    🎓
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: ".62rem",
                        color: "rgba(255,255,255,.4)",
                        fontWeight: 600,
                        letterSpacing: ".05em",
                        textTransform: "uppercase",
                        marginBottom: 2,
                      }}
                    >
                      University Partner
                    </div>
                    <div
                      style={{
                        fontSize: ".9rem",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      Sam Houston State University
                    </div>
                    <div
                      style={{
                        fontSize: ".7rem",
                        color: "rgba(255,255,255,.45)",
                        marginTop: 2,
                      }}
                    >
                      College of Osteopathic Medicine
                    </div>
                  </div>
                  <div
                    style={{
                      background: "rgba(74,222,128,.12)",
                      border: "1px solid rgba(74,222,128,.25)",
                      color: G,
                      fontSize: ".62rem",
                      fontWeight: 700,
                      padding: ".22rem .65rem",
                      borderRadius: 50,
                      whiteSpace: "nowrap",
                    }}
                  >
                    ● Verified
                  </div>
                </div>

                {/* Bottom approved banner */}
                <div
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(74,222,128,.12) 0%,rgba(74,222,128,.05) 100%)",
                    border: "1px solid rgba(74,222,128,.22)",
                    borderRadius: 16,
                    padding: "1rem 1.2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      flexShrink: 0,
                      background: "rgba(74,222,128,.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✅
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: ".62rem",
                        color: "rgba(74,222,128,.65)",
                        fontWeight: 700,
                        letterSpacing: ".05em",
                        textTransform: "uppercase",
                        marginBottom: 2,
                      }}
                    >
                      SHSU-COM Approved Clinical Site
                    </div>
                    <div
                      style={{ fontSize: ".82rem", fontWeight: 600, color: G }}
                    >
                      Credentialed Preceptors On-Site · April 2026
                    </div>
                  </div>
                </div>
              </div>
              {/* end panel body */}
            </div>
          </div>
          {/* ════ END RIGHT ════ */}
        </div>
      </div>
    </section>
  );
}
