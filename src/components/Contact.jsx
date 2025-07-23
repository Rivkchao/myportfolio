import Swal from 'sweetalert2'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    Swal.fire({
      title: "Thank you for Your Message!",
      html: "I will reply to your message as soon as possible! <br> If you haven't received a response within 24 hours, please feel free to reach out through my social media channels.",
      icon: "success"
    })
    e.target.reset()
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="fade-in text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400">Let's work together on your next project</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="fade-in glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <i className="fas fa-envelope text-blue-400 text-xl w-6"></i>
                <span>rivky69ps@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-phone text-blue-400 text-xl w-6"></i>
                <span>+62 812 1353 6091</span>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt text-blue-400 text-xl w-6"></i>
                <span>Bogor, Indonesia</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/rivkchao" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:glow transition-all">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/rivkyps" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:glow transition-all">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://instagram.com/rchaoff28" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:glow transition-all">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="fade-in">
            <form className="glass p-8 rounded-2xl space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" required className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-400 focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" required className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-400 focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows="5" required className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-400 focus:outline-none transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:scale-105 transition-transform font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
