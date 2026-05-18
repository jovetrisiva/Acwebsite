import "../styles/Process.css";

const steps = [
  { num: "1", title: "Book Online", desc: "Fill our quick booking form or call us directly to schedule a visit." },
  { num: "2", title: "Technician Visit", desc: "Our certified technician arrives on time with all necessary tools." },
  { num: "3", title: "Diagnosis & Quote", desc: "We diagnose the issue and provide a transparent price quote upfront." },
  { num: "4", title: "Done & Guaranteed", desc: "Work completed with warranty. You pay only if you're satisfied." },
];

export default function Process() {
  return (
    <section className="section reveal" id="process">
      <div className="section-header">
        <span className="section-tag">How It Works</span>
        <h2 className="section-title">Simple 4-Step Process</h2>
        <p className="section-subtitle">Getting your AC serviced has never been this easy.</p>
      </div>
      <div className="process-steps">
        {steps.map((s, i) => (
          <div className="step" key={i}>
            <div className="step-num">{s.num}</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
