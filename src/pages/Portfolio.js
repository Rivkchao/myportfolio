import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import project1 from "../assets/Project1.png";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import TechIcons from "../components/TechIcons";

const projects = [
  {
    title: "MySkill Residence Property",
    url: "https://myskillresidence.rivkyps.my.id",
    image: project1,
  },
  {
    title: "Simple Calculator",
    url: "https://hacktiv8ibm.calculator.rivkyps.my.id",
    image: project2,
  },
  {
    title: "Project 3",
    url: "https://project3.example.com",
    image: project3,
  },
];

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <div className="portfolio-container fade-in">
      <div className="back-row" onClick={() => navigate(-1)} style={{cursor: 'pointer'}}>
        <FaChevronLeft size={22} className="back-icon" />
        <span className="back-text">Back</span>
      </div>
      <h2 style={{ marginLeft: '2.5rem', color: '#0099ff' }}>My Portfolio</h2>
      <div className="portfolio-list">
        {projects.map((project, idx) => (
          <div className="portfolio-card fade-in" key={idx} style={{ animationDelay: `${idx * 0.2}s` }}>
            <img src={project.image} alt={project.title} className="portfolio-preview" />
            <div className="portfolio-title">{project.title}</div>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="portfolio-link">
              {project.url}
            </a>
          </div>
        ))}
      </div>
      <TechIcons />
    </div>
  );
};

export default Portfolio;
