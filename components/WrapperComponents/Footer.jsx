import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

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
            <p>
              <a href="mailto:rjranjit099@gmail.com" className="hover:text-blue-400 transition-colors">
                Email: rjranjit099@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+918001801496" className="hover:text-blue-400 transition-colors">
                Phone: +91 8001801496
              </a>
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/ranjit-jana-242480231/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://github.com/ranjit800" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaGithub className="text-2xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="https://www.instagram.com/rj_venture_09/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="/work" className="hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
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
