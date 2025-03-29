import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">📩 Get in Touch</h2>

        {/* Contact Info */}
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg shadow-lg hover:bg-gray-800 transition">
            <FaEnvelope className="text-blue-400 text-2xl" />
            <a href="mailto:rjranjit099@gmail.com" className="text-lg text-gray-300 hover:text-blue-400">
              rjranjit099@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg shadow-lg hover:bg-gray-800 transition">
            <FaLinkedin className="text-blue-400 text-2xl" />
            <a href="https://www.linkedin.com/in/ranjit-jana-242480231/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-blue-400">
            https://www.linkedin.com/in/ranjit-jana-242480231/
            </a>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg shadow-lg hover:bg-gray-800 transition">
            <FaGithub className="text-blue-400 text-2xl" />
            <a href="https://github.com/ranjit800" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-blue-400">
            https://github.com/ranjit800
            </a>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg shadow-lg hover:bg-gray-800 transition">
            <FaPhone className="text-blue-400 text-2xl" />
            <a href="tel:+918001801496" className="text-lg text-gray-300 hover:text-blue-400">
              +918001801496
            </a>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center text-blue-400 mb-4">📍 My Location</h3>
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg relative">
            <div className="absolute inset-0 bg-black/50 pointer-events-none z-10"></div>
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7373.2161229523745!2d88.37428989525414!3d22.48135823844989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1743252474627!5m2!1sen!2sin"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
