const pillars = [
  {
    title: "Social Justice",
    desc: "Advocating for equity and human rights as the foundation of a just society for all communities.",
    link: "/social-justice",
    tag: "01",
  },
  {
    title: "Healthcare",
    desc: "Improving access to quality medical care and health education for underserved populations.",
    link: "/health-care",
    tag: "02",
  },
  {
    title: "Advocacy",
    desc: "Amplifying the voices of the marginalized and driving systemic change at every level.",
    link: "/advocacy",
    tag: "03",
  },
  {
    title: "Poverty Alleviation",
    desc: "Empowering individuals with resources and opportunities to break the cycle of poverty.",
    link: "/poverty-alleviation",
    tag: "04",
  },
  {
    title: "Education",
    desc: "Ensuring every child has access to quality education regardless of their background.",
    link: "/education",
    tag: "05",
  },
];

export default function WhatWeDo() {
  return (
    <>
      <style>{`
        .wwd-title {text-align:center; font-size:38px; font-weight:700; color:#000;}
        .wwd-title span { color:#0046c0; }
        .wwd-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:1px; background:#000; border:1.5px solid #000; border-radius:20px; overflow:hidden; max-width:1200px; margin:0 auto; }
        .wwd-card { background:#fff; padding:32px 24px 28px; display:flex; flex-direction:column; gap:12px; }
        .wwd-card-num { font-size:11px; font-weight:700; letter-spacing:2px; color:#0046c0; }
        .wwd-card-line { width:28px; height:2px; background:#000; }
        .wwd-card-title { font-size:1rem; font-weight:700; color:#000; line-height:1.2; }
        .wwd-card-desc { font-size:16px; color:black; flex:1; margin:0; }
        .wwd-card-link { display:inline-flex; align-items:center; gap:5px; font-size:12px; font-weight:700; color:#0046c0; text-decoration:none; margin-top:6px; }
        @media(max-width:640px).wwd-grid{grid-template-columns:1fr;} }
      `}</style>

      <section className="container my-4">
        <h2 className="wwd-title">
          What We <span>Do</span>
        </h2>
        <div className="wwd-grid">
          {pillars.map((p) => (
            <div className="wwd-card" key={p.title}>
              <span className="wwd-card-num">{p.tag}</span>
              <div className="wwd-card-line" />
              <div className="wwd-card-title">{p.title}</div>
              <p className="wwd-card-desc">{p.desc}</p>
              <a href={p.link} className="wwd-card-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
