"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import background from "@/public/Images/bgThree.svg"

gsap.registerPlugin(ScrollTrigger);

const ShortBio = () => {
  const bioRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bioRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bioRef.current,
          start: "top 80%", // Adjust when the animation starts
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section 
      className="bg-black text-white py-16 flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div ref={bioRef} className="max-w-3xl text-center space-y-4 px-6 md:px-0 opacity-0">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
          Crafting Scalable & Stunning Web Experiences 🚀
        </h2>
        <p className="text-lg md:text-xl text-gray-300">
          I specialize in building fast, responsive, and user-friendly web applications with React, Tailwind CSS & Node.js. Passionate about clean UI/UX and seamless performance.
        </p>
        <button className="mt-6">
          <a
            href="#contact"
            className="px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition-all duration-300 shadow-lg"
          >
            🚀 Let's Build Together
          </a>
        </button>
      </div>
    </section>
  );
};

export default ShortBio;
