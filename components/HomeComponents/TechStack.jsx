// "use client";
// import React, { useEffect, useRef } from "react";
// import "remixicon/fonts/remixicon.css"; // Ensure this is imported
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import nextlogo from "@/public/Images/nextJS-logo-two.svg";

// const TechStack = () => {
//   const sectionRef = useRef(null);
//   const categoriesRef = useRef([]);

//   // Register ScrollTrigger plugin
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Main section entrance animation
//     gsap.fromTo(
//       sectionRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       }
//     );

//     // Animate each category
//     categoriesRef.current.forEach((category, index) => {
//       // Stagger the tech cards within each category
//       const techCards = category.querySelectorAll(".tech-card");

//       gsap.fromTo(
//         techCards,
//         { opacity: 0, scale: 0.8, y: 30 },
//         {
//           opacity: 1,
//           scale: 1,
//           y: 0,
//           duration: 0.6,
//           stagger: 0.1,
//           ease: "back.out(1.7)",
//           scrollTrigger: {
//             trigger: category,
//             start: "top 75%",
//           },
//         }
//       );
//     });
//   }, []);

//   const techCategories = [
//     {
//       category: "Frontend",
//       technologies: [
//         { name: "React", icon: "ri-reactjs-fill", color: "text-blue-400" },
//         { name: "Next.js", icon: "ri-next-js-fill", color: "text-white" },
//         { name: "JavaScript", icon: "ri-javascript-fill", color: "text-yellow-400" },
//         { name: "TypeScript", icon: "ri-typescript-fill", color: "text-blue-500" },
//         { name: "Tailwind CSS", icon: "ri-css3-fill", color: "text-cyan-400" },
//         { name: "HTML5", icon: "ri-html5-fill", color: "text-orange-500" },
//         { name: "CSS3", icon: "ri-css3-fill", color: "text-blue-400" },
//       ],
//     },
//     {
//       category: "Backend",
//       technologies: [
//         { name: "Node.js", icon: "ri-nodejs-fill", color: "text-green-500" },
//         { name: "Express.js", icon: "ri-server-fill", color: "text-gray-400" },
//         { name: "MongoDB", icon: "ri-database-2-line", color: "text-green-400" },
//         { name: "GraphQL", icon: "ri-node-tree", color: "text-pink-500" },
//         { name: "REST API", icon: "ri-api-fill", color: "text-blue-300" },
//       ],
//     },
//     {
//       category: "DevOps & Tools",
//       technologies: [
//         { name: "Git", icon: "ri-git-branch-fill", color: "text-red-500" },
//         { name: "GitHub", icon: "ri-github-fill", color: "text-white" },
//         { name: "Docker", icon: "ri-ship-2-fill", color: "text-blue-600" },
        // { name: "Firebase", icon: "ri-fire-fill", color: "text-orange-500" },
        // { name: "VS Code", icon: "ri-terminal-box-fill", color: "text-blue-400" },
        // { name: "Figma", icon: "ri-pen-nib-fill", color: "text-purple-400" },
//       ],
//     },
//   ];

//   return (
//     <section ref={sectionRef} className="bg-gradient-to-b from-black to-gray-900 text-white py-16">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">⚡ My Tech Stack</h2>
//         <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto">The technologies, tools and platforms I work with to bring ideas to life</p>

//         {techCategories.map((category, catIndex) => (
//           <div key={catIndex} className="mb-16" ref={(el) => (categoriesRef.current[catIndex] = el)}>
//             <h3 className="text-2xl font-semibold mb-8 text-gray-100">{category.category}</h3>
//             <div className="grid-container">
//               {category.technologies.map((tech, index) => (
//                 <div key={index} className="tech-card">
//                   <div className="icon-container">
//                     <i className={`${tech.icon} ${tech.color}`} />
//                   </div>
//                   <p className="tech-name">{tech.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Add CSS for the classic grid layout */}
//       <style jsx>{`
//         .grid-container {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
//           gap: 20px;
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .tech-card {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           padding: 1.5rem 1rem;
//           background: linear-gradient(135deg, rgba(60, 60, 70, 0.4) 0%, rgba(30, 30, 40, 0.6) 100%);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 12px;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
//           backdrop-filter: blur(10px);
//         }

//         .tech-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
//           border-color: rgba(255, 255, 255, 0.2);
//         }

//         .icon-container {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 60px;
//           height: 60px;
//           background: rgba(30, 30, 40, 0.6);
//           border-radius: 50%;
//           margin-bottom: 12px;
//         }

//         .icon-container i {
//           font-size: 28px;
//         }

//         .tech-name {
//           font-weight: 600;
//           font-size: 0.95rem;
//           margin-top: 8px;
//         }

//         @media (max-width: 768px) {
//           .grid-container {
//             grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
//             gap: 15px;
//           }

//           .tech-card {
//             padding: 1.2rem 0.8rem;
//           }

//           .icon-container {
//             width: 50px;
//             height: 50px;
//           }

//           .icon-container i {
//             font-size: 24px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default TechStack;

"use client"; // Required for GSAP in Next.js

import "remixicon/fonts/remixicon.css";


const TechStack = () => {
  

  const stacks = [
    {
      category: "Frontend",
      color: "from-blue-500 to-cyan-500",
      techs: [
        { name: "Next.js", icon: "ri-nextjs-fill", color: "text-white" },
        { name: "React", icon: "ri-reactjs-fill", color: "text-blue-400" },
        { name: "HTML", icon: "ri-html5-fill", color: "text-orange-500" },
        { name: "CSS", icon: "ri-css3-fill", color: "text-blue-500" },
        { name: "Tailwind CSS", icon: "ri-css3-fill", color: "text-cyan-400" },
        { name: "JavaScript", icon: "ri-javascript-fill", color: "text-yellow-400" },
      ],
    },
    {
      category: "Backend",
      color: "from-green-500 to-lime-500",
      techs: [
        { name: "Node.js", icon: "ri-nodejs-fill", color: "text-green-500" },
        { name: "Express.js", icon: "ri-server-fill", color: "text-gray-400" },
        { name: "MongoDB", icon: "ri-database-2-line", color: "text-green-400" },
        { name: "Firebase", icon: "ri-fire-fill", color: "text-orange-500" },
      ],
    },
    {
      category: "DevOps & Tools",
      color: "from-purple-500 to-pink-500",
      techs: [
        { name: "Git", icon: "ri-git-branch-fill", color: "text-red-500" },
        { name: "GitHub", icon: "ri-github-fill", color: "text-gray-300" },
        { name: "VS Code", icon: "ri-terminal-box-fill", color: "text-blue-400" },
        { name: "Figma", icon: "ri-pen-nib-fill", color: "text-purple-400" },
      ],
    },
  ];

  return (
    <section  className="bg-black text-white py-16 min-h-screen">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-pink-400 inline-block text-transparent bg-clip-text">
          ⚡ My Tech Stack
        </h2>

        <div className="flex flex-col gap-12">
          {stacks.map((stack, idx) => (
            <div key={idx}>
              <h3 className={`text-4xl font-semibold mb-6 text-[#FFFFE4]`}>
                {stack.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {stack.techs.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-6 w-40 h-40 rounded-2xl bg-opacity-10 backdrop-blur-md bg-gray-900 shadow-lg transform transition-all hover:scale-110 hover:shadow-xl border border-gray-700"
                  >
                    <i className={`${tech.icon} text-6xl ${tech.color}`} />
                    <p className="mt-3 text-sm font-semibold">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
