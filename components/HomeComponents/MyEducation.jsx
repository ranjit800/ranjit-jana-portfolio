"use client"

const MyEducation = () => {
  

  

  const educationData = [
    {
      year: "2024",
      degree: "Master of Computer Applications (MCA)",
      college: "Netaji Subhash Engineering College (NSEC)",
      university: "Maulana Abul Kalam Azad University of Technology",
    },
    {
      year: "2022",
      degree: "Bachelor of Computer Applications (BCA)",
      college: "Garhbeta College",
      university: "Vidyasagar University",
    },
  ];

  const experienceData = [ 
    {
      role: "Freelance MERN Developer",
      company: "Self-Employed",
      duration: "jan 2025 - Present",
      description:
        "Building modern web applications, integrating APIs, and delivering optimized solutions for clients.",
    },
    {
      role: "MERN Stack Developer",
      company: "North Star Metricx",
      duration: "aug 2024 - jan 2025",
      description:
        "Developed a crypto-based platform with full API integration, responsive UI, and GSAP animations.",
    }
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">🚀 My Journey</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div  className="bg-gray-900 p-8 rounded-lg shadow-lg border-l-4 border-blue-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            <h3 className="text-3xl font-semibold mb-6 text-blue-400">🎓 Education</h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  <h4 className="text-2xl font-semibold text-white">{edu.degree}</h4>
                  <p className="text-lg text-gray-300">{edu.college}</p>
                  <p className="text-gray-400">{edu.university}</p>
                  <span className="block mt-2 text-sm font-semibold text-blue-400">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div  className="bg-gray-900 p-8 rounded-lg shadow-lg border-l-4 border-green-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]">
            <h3 className="text-3xl font-semibold mb-6 text-green-400">💼 Experience</h3>
            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  <h4 className="text-2xl font-semibold text-white">{exp.role}</h4>
                  <p className="text-lg text-gray-300">{exp.company}</p>
                  <p className="text-gray-400">{exp.duration}</p>
                  <p className="text-gray-300 mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyEducation;
