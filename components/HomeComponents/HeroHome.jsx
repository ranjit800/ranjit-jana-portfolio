"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Herobg from "../../public/Images/HeroImg.svg";
import rightImg from "../../public/Images/Fimg.svg";
import Button from "../WrapperComponents/Button";
import { IoIosReturnRight } from "react-icons/io";

const HeroHome = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ["Full Stack Developer", "Mern Stack Developer", "Frontend Developer"];

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % phrases.length;
      const fullText = phrases[currentIndex];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <div className="w-full h-full bg-black" >
      <div
        className="bg-black flex justify-center items-center min-h-screen w-full container mx-auto"
        style={{
          backgroundImage: `url(${Herobg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div id="main" className="flex flex-col md:flex-row ">
          <div id="left" className="w-full md:w-1/2 h-full  p-5">
            <h1 className="text-[#FFFFE4] text-4xl md:text-5xl font-bold mb-4">
              <span className="text-sm"> ✌️Hello, </span> <br /> I'm{" "}
              <span className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 animate-pulse shadow-glow">Ranjit jana</span> <br />
              <span className="inline-block h-10 mt-2">
                {text}
                <span className="animate-blink">|</span>
              </span>
              <p className="text-lg mt-4 leading-relaxed font-light">
                Building fast, responsive, and user-friendly web applications with Next.js, React, Tailwind CSS & Node.js. Passionate about clean UI/UX and seamless performance.
                Let's turn ideas into reality!
                <br />
                🚀 Let's build something amazing together!
              </p>
            </h1>
            <div className="flex gap-4">
              <Button title="Get in Touch" />
              <a
                href="https://drive.google.com/file/d/11MuAU_j7qY5XUyepJErTbQTDichwuMTo/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit px-8 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between gap-2 hover:scale-105 transition-transform duration-300"
                style={{ boxShadow: "0 0 0.80em #773BAF" }}
              >
                <span className="text-sm font-medium flex items-center justify-between group">
                  <span className="inline-block group-hover:rotate-[360deg] transition-transform duration-200">Download Resume</span>
                </span>
                <IoIosReturnRight />
              </a>
            </div>
          </div>
          <div id="right" className="w-full md:w-1/2 h-full flex justify-center items-center mt-8 md:mt-0">
            <Image src={rightImg} alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
