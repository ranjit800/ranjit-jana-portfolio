import React from 'react'

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <div className="relative container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Email: rjranjit099@gmail.com</p>
            <p>Phone: +91 8001801496</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <i className="ri-linkedin-fill text-2xl"></i>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <i className="ri-github-fill text-2xl"></i>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <i className="ri-twitter-fill text-2xl"></i>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <i className="ri-instagram-fill text-2xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Ranjit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
