import React from "react";
import "../App.css";
import profilePic from "../assets/PP-MAGANG-3.jpg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TechIcons from "../components/TechIcons";


const Home = () => {
  const navigate = useNavigate();

  return (
    <>

      <div className="main-container fade-in">
        <div className="profile-card fade-in">
          <img src={profilePic} alt="Profile" className="profile-img" />
          <h2>Rivky Putra Setiawan</h2>
          <div className="sosmed-icons">
            <a href="https://linkedin.com/in/rivky-putra-setiawan" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/rivkchao" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="mailto:email@rivky69ps@gmail.com"><FaEnvelope /></a>
          </div>
          <div className="button-group">
            <a href="/CV-RivkyPutraSetiawan.pdf" download className="btn-main">Download CV</a>
            <button className="btn-main" onClick={() => navigate("/about")}>About Me</button>
            <button className="btn-main" onClick={() => navigate("/portfolio")}>My Portfolio</button>
          </div>
        </div>
        <TechIcons />
      </div>
    </>
  );
};

export default Home;
