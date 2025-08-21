

// "use client"; // Required for GSAP in Next.js

// import "remixicon/fonts/remixicon.css";


// const TechStack = () => {
  

//   const stacks = [
//     {
//       category: "Frontend",
//       color: "from-blue-500 to-cyan-500",
//       techs: [
//         { name: "Next.js", icon: "ri-nextjs-fill", color: "text-white" },
//         { name: "React", icon: "ri-reactjs-fill", color: "text-blue-400" },
//         { name: "HTML", icon: "ri-html5-fill", color: "text-orange-500" },
//         { name: "CSS", icon: "ri-css3-fill", color: "text-blue-500" },
//         { name: "Tailwind CSS", icon: "ri-css3-fill", color: "text-cyan-400" },
//         { name: "JavaScript", icon: "ri-javascript-fill", color: "text-yellow-400" },
//       ],
//     },
//     {
//       category: "Backend",
//       color: "from-green-500 to-lime-500",
//       techs: [
//         { name: "Node.js", icon: "ri-nodejs-fill", color: "text-green-500" },
//         { name: "Express.js", icon: "ri-server-fill", color: "text-gray-400" },
//         { name: "MongoDB", icon: "ri-database-2-line", color: "text-green-400" },
//         { name: "Firebase", icon: "ri-fire-fill", color: "text-orange-500" },
//       ],
//     },
//     {
//       category: "DevOps & Tools",
//       color: "from-purple-500 to-pink-500",
//       techs: [
//         { name: "Git", icon: "ri-git-branch-fill", color: "text-red-500" },
//         { name: "GitHub", icon: "ri-github-fill", color: "text-gray-300" },
//         { name: "VS Code", icon: "ri-terminal-box-fill", color: "text-blue-400" },
//         { name: "Figma", icon: "ri-pen-nib-fill", color: "text-purple-400" },
//       ],
//     },
//   ];

//   return (
//     <section  className="bg-black text-white py-16 min-h-screen">
//       <div className="container mx-auto text-center px-6">
//         <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-pink-400 inline-block text-transparent bg-clip-text">
//           ⚡ My Tech Stack
//         </h2>

//         <div className="flex flex-col gap-12">
//           {stacks.map((stack, idx) => (
//             <div key={idx}>
//               <h3 className={`text-4xl font-semibold mb-6 text-[#FFFFE4]`}>
//                 {stack.category}
//               </h3>
//               <div className="flex flex-wrap justify-center gap-6">
//                 {stack.techs.map((tech, index) => (
//                   <div
//                     key={index}
//                     className="flex flex-col items-center p-6 w-40 h-40 rounded-2xl bg-opacity-10 backdrop-blur-md bg-gray-900 shadow-lg transform transition-all hover:scale-110 hover:shadow-xl border border-gray-700"
//                   >
//                     <i className={`${tech.icon} text-6xl ${tech.color}`} />
//                     <p className="mt-3 text-sm font-semibold">{tech.name}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechStack;


"use client";

import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import "remixicon/fonts/remixicon.css";

// A simple hook to check for screen size
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check on initial mount
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);

  return isMobile;
};


const TechStack = () => {
  const isMobile = useIsMobile();

  const stacks = [
    {
      category: "Frontend",
      techs: [
        { name: "Next.js", icon: "ri-nextjs-fill", color: "text-white" },
        { name: "React", icon: "ri-reactjs-fill", color: "text-blue-400" },
        { name: "TypeScript", icon: "ri-braces-fill", color: "text-blue-500" },
        { name: "JavaScript", icon: "ri-javascript-fill", color: "text-yellow-400" },
        { name: "HTML5", icon: "ri-html5-fill", color: "text-orange-500" },
        { name: "CSS3", icon: "ri-css3-fill", color: "text-blue-500" },
        { name: "Tailwind CSS", icon: "ri-tailwind-css-fill", color: "text-cyan-400" },
      ],
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js", icon: "ri-nodejs-fill", color: "text-green-500" },
        { name: "Express.js", icon: "ri-server-fill", color: "text-gray-400" },
        { name: "MongoDB", icon: "ri-database-2-line", color: "text-green-400" },
        { name: "Firebase", icon: "ri-fire-fill", color: "text-orange-500" },
        { name: "Postman", icon: "ri-send-plane-2-fill", color: "text-orange-600"},
      ],
    },
    {
      category: "DevOps & Tools",
      techs: [
        { name: "Git", icon: "ri-git-branch-fill", color: "text-red-500" },
        { name: "GitHub", icon: "ri-github-fill", color: "text-gray-300" },
        { name: "VS Code", icon: "ri-terminal-box-fill", color: "text-blue-400" },
        { name: "Figma", icon: "ri-pen-nib-fill", color: "text-purple-400" },
        { name: "Vercel", icon: "ri-triangle-fill", color: "text-gray-200" },
      ],
    },
  ];

  const TechCard = ({ icon, name, color }) => (
    <div className="flex flex-col items-center justify-center p-6 m-4 w-40 h-40 rounded-2xl bg-gray-900/60 backdrop-blur-sm shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl border border-gray-700">
      <i className={`${icon} text-6xl ${color}`} />
      <p className="mt-3 text-sm font-semibold text-gray-200">{name}</p>
    </div>
  );

  return (
    <section className="bg-black text-white py-20 overflow-hidden">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          ⚡ My Tech Arsenal
        </h2>

        <div className="flex flex-col gap-12">
          {stacks.map((stack, idx) => (
            <div key={idx}>
              <h3 className="text-3xl font-semibold mb-6 text-gray-300">
                {stack.category}
              </h3>
              <Marquee
                direction={idx % 2 === 0 ? "left" : "right"}
                speed={50}
                pauseOnHover={true}
                gradient={!isMobile} // Your requested prop
                gradientColor="black" // Your requested prop
                gradientWidth={100}
              >
                {stack.techs.map((tech) => (
                  <TechCard
                    key={tech.name}
                    icon={tech.icon}
                    name={tech.name}
                    color={tech.color}
                  />
                ))}
              </Marquee>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;