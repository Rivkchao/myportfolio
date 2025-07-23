import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import Project4 from "../assets/Project4.png";

export default function Portfolio() {
  const tagColors = {
    "HTML": "bg-orange-600 text-white", // HTML orange
    "CSS": "bg-blue-500 text-white", // CSS3 blue
    "Bootstrap": "bg-purple-600 text-white", // Bootstrap purple
    "JavaScript": "bg-yellow-500 text-white", // JS yellow
    "React.js": "bg-cyan-500 text-white", // React cyan
    "Tailwind": "bg-teal-500 text-white", // Tailwind teal
  };

  // Function untuk get tag color
  const getTagColor = (tag) => {
    return tagColors[tag] || "bg-gray-600 text-white"; // Default fallback
  };
    const projects = [
      {
        img: Project1,
        title: "Company Profile Website",
        desc: "Company profile website for a property agent, built with HTML, CSS (Bootstrap), and JavaScript to showcase property listings.",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        color: "from-blue-600 to-purple-600",
        liveLink: "https://myskillresidence.rivkyps.my.id", 
        githubLink: "https://github.com/rivkchao/myskillresidence"
      },
      {
        img: Project2,
        title: "Calculator",
        desc: "A responsive calculator application featuring a modern UI with dark/light theme toggle and advanced calculation functions.",
        tags: ["HTML", "CSS", "JavaScript"],
        color: "from-green-600 to-blue-600",
        liveLink: "https://hacktiv8ibm.calculator.rivkyps.my.id/",
        githubLink: "https://github.com/rivkchao/simple-calculator"
      },
      {
        img: Project3,
        title: "Todo List",
        desc: "A productivity-focused todo list application with task management features. Helps users organize and track their daily tasks efficiently.",
        tags: ["HTML", "CSS", "JavaScript"],
        color: "from-orange-600 to-red-600",
        liveLink: "https://todolist.rivkyps.my.id",
        githubLink: "https://github.com/rivkchao/ToDoList"
      },
      {
        img: Project4,
        title: "Pomodoro Timer",
        desc: "A Pomodoro Technique timer application to boost productivity. Features customizable work and break intervals with audio notifications.",
        tags: ["React.js", "CSS"],
        color: "from-orange-600 to-red-600",
        liveLink: "https://tipomodoro.rivkyps.my.id",
        githubLink: "https://github.com/rivkchao/Ti-PomodoroRc"
      },
    ];

    return (
      <section id="portfolio" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="fade-in text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-4">Portfolio</h2>
            <p className="text-xl text-gray-400">Some of my recent projects</p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.title} className="fade-in portfolio-card glass rounded-2xl overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <img src={project.img} className="w-full h-full object-cover" alt={project.title} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.desc}</p>
                  {/* Tech Stack Tags dengan Brand Colors */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-transform hover:scale-105 ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Button Group */}
                  <div className="flex gap-3">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg hover:scale-105 transition-transform text-center text-white no-underline"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg hover:scale-105 transition-transform text-center text-white no-underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}