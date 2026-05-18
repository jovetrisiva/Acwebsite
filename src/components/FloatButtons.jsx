export default function FloatButtons() {
  return (
    <div className="float-btns">
      <a
        href="https://wa.me/919876543210"
        className="float-btn float-wa"
        target="_blank"
        rel="noreferrer"
        title="WhatsApp Us"
      >
        💬
      </a>
      <a
        href="tel:+919876543210"
        className="float-btn float-call"
        title="Call Us"
      >
        📞
      </a>
    </div>
  );
}
