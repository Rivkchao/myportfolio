import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import project1 from "../assets/Project1.png";
import project2 from "../assets/Project2.png";
import project3 from "../assets/Project3.png";
import project4 from "../assets/Project4.png";
import TechIcons from "../components/TechIcons";

const projects = [
  {
    title: "MySkill Residence Property",
    url: "https://myskillresidence.rivkyps.my.id",
    github: "https://github.com/Rivkchao/MySkillResidence",
    image: project1,
    description: "A modern property management web application built for MySkill Residence. Features include property listings, search functionality, and responsive design.",
    technologies: ["HTML5","CSS3", "JavaScript", "Responsive Design"],
    features: ["Property Search by Date", "Responsive Layout", "Modern UI/UX", "Interactive Components"]
  },
  {
    title: "Simple Calculator",
    url: "https://hacktiv8ibm.calculator.rivkyps.my.id",
    github: "https://github.com/Rivkchao/simple-calculator",
    image: project2,
    description: "A clean and functional calculator application with basic arithmetic operations. Built as part of Hacktiv8 IBM collaboration program.",
    technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
    features: ["Basic Arithmetic", "Clean Interface", "Keyboard Support", "Error Handling"]
  },
  {
    title: "To Do List",
    url: "https://todolist.rivkyps.my.id",
    github: "https://github.com/Rivkchao/ToDoList",
    image: project3,
    description: "A productivity-focused todo list application with task management features. Helps users organize and track their daily tasks efficiently.",
    technologies: ["HTML5", "Local Storage", "CSS3", "JavaScript"],
    features: ["Add/Delete Tasks", "Mark Complete", "Local Storage", "Filter Options"]
  },
  {
    title: "Ti-Pomodoro",
    url: "https://tipomodoro.rivkyps.my.id",
    github: "https://github.com/Rivkchao/Ti-PomodoroRc",
    image: project4,
    description: "A Pomodoro Technique timer application to boost productivity. Features customizable work and break intervals with audio notifications.",
    technologies: ["React", "JavaScript", "CSS3"],
    features: ["Customizable Timer", "Session Tracking", "Minimalist Design"]
  },
];

const Portfolio = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  return (
    <div className="portfolio-container fade-in">
      <div className="back-row" onClick={() => navigate(-1)} style={{cursor: 'pointer'}}>
        <FaChevronLeft size={22} className="back-icon" />
        <span className="back-text">Back</span>
      </div>
      <h2 style={{ marginLeft: '2.5rem', color: '#FFB300' }}>My Portfolio</h2>
      <div className="portfolio-list">
        {projects.map((project, idx) => (
          <div className="portfolio-card fade-in" key={idx} style={{ animationDelay: `${idx * 0.2}s` }}>
            <div className="portfolio-image-container" onClick={() => openModal(project)}>
              <img src={project.image} alt={project.title} className="portfolio-preview" />
              <div className="portfolio-overlay">
                <span className="view-details">View Details</span>
              </div>
            </div>
            <div className="portfolio-title">{project.title}</div>
          </div>
        ))}
      </div>
      <TechIcons />
      
      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              
              <div className="modal-info">
                <div className="modal-section">
                  <h3>Description</h3>
                  <p>{selectedProject.description}</p>
                </div>
                
                <div className="modal-section">
                  <h3>Technologies Used</h3>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-section">
                  <h3>Key Features</h3>
                  <ul className="features-list">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-actions">
                  <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="modal-btn primary">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="modal-btn secondary">
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
