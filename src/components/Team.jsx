import "../styles/Team.css";
const team = [
  {
    emoji: "👨‍🔧",
    name: "Rajesh Kumar",
    role: "Senior AC Technician",
    exp: "10+ years experience · Certified in R32 & R410A refrigerants",
    badges: ["Split AC", "VRF", "Inverter"],
  },
  {
    emoji: "👨‍🔧",
    name: "Murugan S",
    role: "Installation Specialist",
    exp: "8+ years experience · Expert in commercial HVAC systems",
    badges: ["Commercial", "Cassette", "Duct AC"],
  },

];

export default function Team() {
  return (
    <section className="section reveal" id="team">
      <div className="section-header">
        <span className="section-tag">Our Team</span>
        <h2 className="section-title">Meet Our Technicians</h2>
        <p className="section-subtitle">
          Certified professionals committed to quality workmanship.
        </p>
      </div>
      <div className="tech-grid">
        {team.map((t, i) => (
          <div className="tech-card" key={i}>
            <div className="tech-img" style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "5rem", height: "220px",
              background: "linear-gradient(135deg, #0a1628, #1a3a5c)"
            }}>
              {t.emoji}
            </div>
            <div className="tech-info">
              <h4>{t.name}</h4>
              <span className="tech-role">{t.role}</span>
              <p className="tech-exp">{t.exp}</p>
              <div className="tech-badges">
                {t.badges.map((b, j) => (
                  <span className="tag" key={j}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
