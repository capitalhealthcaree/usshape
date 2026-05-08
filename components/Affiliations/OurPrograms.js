const programs = [
  {
    title: "Externship Program",
    link: "/externship-application-form",
    desc: "Hands-on clinical training experience for medical students at our approved partner sites.",
    icon: "bi-hospital",
    badge: "Clinical",
    colorClass: "card1",
    linkText: "Apply Now",
  },
  {
    title: "Nagy Loan Program",
    link: "/nagy-loan-application-form",
    desc: "Financial support for young physicians to launch their medical careers debt-free.",
    icon: "bi-cash-coin",
    badge: "Financial Aid",
    colorClass: "card2",
    linkText: "Apply Now",
  },
  {
    title: "Tahira Khatoon Educational Program",
    link: "/tahira-khatoon",
    desc: "Scholarships and educational resources for underprivileged students.",
    icon: "bi-mortarboard",
    badge: "Scholarship",
    colorClass: "card3",
    linkText: "Learn More",
  },
];

const styles = `
  .section-title { font-size: 38px; font-weight: 700; color: #111; }
  .section-title span { color: #0046c0; }

  .prog-card {
    border: none; border-radius: 18px; overflow: hidden;
    transition: transform .28s ease, box-shadow .28s ease;
    box-shadow: 0 4px 24px rgba(0,0,0,.07); height: 100%;
  }
  .prog-card:hover { transform: translateY(-8px); box-shadow: 0 20px 52px rgba(0,70,192,.14); }

  .prog-card .card-title { font-size: 1.05rem; font-weight: 800; color: #111; }
  .prog-card .card-text { font-size: .875rem; color: #444; line-height: 1.65; }

  .prog-link {
    font-size: .82rem; font-weight: 700; text-decoration: none;
    display: inline-flex; align-items: center; gap: 5px;
    transition: gap .2s;
  }
  .prog-link:hover { gap: 8px; }

  .badge-pill {
    font-size: .68rem; font-weight: 700; letter-spacing: .05em;
    text-transform: uppercase; padding: 3px 10px; border-radius: 50px;
  }

  .card1 .prog-link { color: #0046c0; }
  .card1 .badge-pill { background: #e8effe; color: #0046c0; }

  .card2 .prog-link { color: #0046c0; }
  .card2 .badge-pill { background: #e8effe; color: #0046c0; }

  .card3 .prog-link { color: #0046c0; }
  .card3 .badge-pill { background: #e8effe; color: #0046c0; }

`;

export default function OurPrograms() {
  return (
    <>
      <style>{styles}</style>

      <div className="container my-4">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="section-title mb-2">
            Our <span>Programs</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {programs.map((p) => (
            <div className="col-12 col-md-4" key={p.title}>
              <div className={`card prog-card ${p.colorClass} p-1`}>
                <div className="card-body p-4 d-flex flex-column gap-3">
                  <div className="d-flex align-items-start gap-3">
                    <div className="card-icon-wrap">
                      <i className={`bi ${p.icon}`}></i>
                    </div>
                    <span className="badge-pill badge">{p.badge}</span>
                  </div>
                  <div>
                    <h5 className="card-title mb-2">{p.title}</h5>
                    <p className="card-text mb-0">{p.desc}</p>
                  </div>
                  <div className="mt-auto">
                    <a href={p.link} className="prog-link">
                      {p.linkText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
