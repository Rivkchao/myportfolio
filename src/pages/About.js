import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import TechIcons from "../components/TechIcons";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-container fade-in">
      <div className="about-card fade-in">
        <button
          className="btn-back-icon"
          onClick={() => navigate(-1)}
          aria-label="Back"
        >
          <FaChevronLeft size={22} />
        </button>
        <h2>About Me</h2>
        <p>
          Halo! <span style={{ fontWeight: "bold" }}>Saya Rivky Putra Setiawan</span>, seorang <span style={{ fontStyle: "italic", fontWeight: "bold" }}>Junior Fullstack Web Developer</span> dengan fokus pada pembuatan aplikasi web modern menggunakan <span style={{ fontStyle: "italic", fontWeight: "bold" }}>React</span> di sisi frontend dan <span style={{ fontStyle: "italic", fontWeight: "bold" }}>Laravel</span> di sisi backend. Saya senang membangun antarmuka yang menarik, fungsional, dan terintegrasi dengan sistem backend yang handal. Saya juga berpengalaman mengelola <span style={{ fontStyle: "italic", fontWeight: "bold" }}>database</span> dan <span style={{ fontStyle: "italic", fontWeight: "bold" }}>API</span> untuk mendukung pengembangan aplikasi dinamis.
        </p>
        <p>
          Jika Anda tertarik bekerja sama atau ingin mendiskusikan proyek, silakan hubungi saya melalui <a href="https://linkedin.com/in/rivky-putra-setiawan" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>LinkedIn</a> atau <a href="mailto:email@rivky69ps@gmail.com" style={{ textDecoration: "none" }}>email</a>. Saya selalu terbuka untuk kolaborasi baru! 🚀
        </p>
      </div>
      <TechIcons />

    </div>
  );
};

export default About;
