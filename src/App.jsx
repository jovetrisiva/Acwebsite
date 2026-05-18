import { useState, useEffect } from "react";
import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import StatsBar     from "./components/StatsBar";
import About        from "./components/About";
import Services     from "./components/Services";
import Process      from "./components/Process";
import Pricing      from "./components/Pricing";
import Team         from "./components/Team";
import BookingForm  from "./components/BookingForm";
import Testimonials from "./components/Testimonials";
import WhyUs        from "./components/WhyUs";
import Coverage     from "./components/Coverage";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";
import FloatButtons from "./components/FloatButtons";
import "./index.css";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  // Apply dark/light class to body
  useEffect(() => {
    document.body.className = isDark ? "" : "light";
  }, [isDark]);

  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Process />
      <Pricing />
      <Team />
      <BookingForm />
      <Testimonials />
      <WhyUs />
      <Coverage />
      <Contact />
      <Footer />
      <FloatButtons />
    </>
  );
}
