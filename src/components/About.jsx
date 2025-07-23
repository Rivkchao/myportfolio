export default function About() {
    return (
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="fade-in text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-4">About Me</h2>
            <p className="text-xl text-gray-400">Passionate about creating amazing web experiences</p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in glass p-8 rounded-2xl">
              <h3 className="text-3xl font-bold mb-6">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Saya adalah seorang Frontend Developer dengan passion yang tinggi untuk menciptakan
                pengalaman web yang menakjubkan. Dengan pengalaman 3+ tahun dalam industri teknologi,
                saya fokus pada pengembangan aplikasi web yang responsif, modern, dan user-friendly.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Saya percaya bahwa detail kecil membuat perbedaan besar dalam menciptakan
                produk digital yang luar biasa.
              </p>
            </div>
  
            <div className="fade-in space-y-6">
              {[
                { name: "Figma", width: 85 },
                { name: "CSS/Tailwind/Bootstrap", width: 88 },
                { name: "JavaScript", width: 90 },
                { name: "React.js", width: 84 },
                { name: "React Native", width: 80 },
              ].map(skill => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="text-lg">{skill.name}</span>
                    <span className="text-blue-400">{skill.width}%</span>
                  </div>
                  <div className="bg-gray-800 rounded-full h-2">
                    <div className="skill-bar rounded-full" data-width={skill.width}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  