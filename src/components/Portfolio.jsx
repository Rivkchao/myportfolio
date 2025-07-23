import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import Project4 from "../assets/Project4.png";

export default function Portfolio() {
    return (
      <section id="portfolio" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="fade-in text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-4">Portfolio</h2>
            <p className="text-xl text-gray-400">Some of my recent projects</p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: Project1,
                title: "Company Profile Website",
                desc: "Company profile website for a property agent, built with HTML, CSS (Bootstrap), and JavaScript to showcase property listings.",
                tags: ["HTML", "CSS", "BOOTSTRAP", "JavaScript"],
                color: "from-blue-600 to-purple-600",
              },
              {
                img: Project2,
                title: "Calculator",
                desc: "A responsive calculator application featuring a modern UI with dark/light theme toggle and advanced calculation functions.",
                tags: ["HTML", "CSS3", "JavaScript"],
                color: "from-green-600 to-blue-600",
              },
              {
                img: Project3,
                title: "Todo List",
                desc: "A productivity-focused todo list application with task management features. Helps users organize and track their daily tasks efficiently.",
                tags: ["HTML", "CSS3", "JavaScript"],
                color: "from-orange-600 to-red-600",
              },
              {
                img: Project4,
                title: "Pomodoro Timer",
                desc: "A Pomodoro Technique timer application to boost productivity. Features customizable work and break intervals with audio notifications.",
                tags: ["React.js", "CSS3"],
                color: "from-orange-600 to-red-600",
              },
            ].map(project => (
              <div key={project.title} className="fade-in portfolio-card glass rounded-2xl overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <img src={project.img} className="w-full h-full object-cover" alt={project.title} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-orange-600 rounded-full text-sm">{tag}</span>
                    ))}
                  </div>
                  <button className="w-full py-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg hover:scale-105 transition-transform">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  