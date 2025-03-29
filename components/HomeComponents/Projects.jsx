"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import LabProject1 from "@/public/Images/projects/LabprojectImgs/Labimg1.png"
import LabProject2 from "@/public/Images/projects/LabprojectImgs/Labimg2.png"
import LabProject3 from "@/public/Images/projects/LabprojectImgs/Labimg3.png"
import LabProject4 from "@/public/Images/projects/LabprojectImgs/Labimg4.png"
import LabProject5 from "@/public/Images/projects/LabprojectImgs/Labimg5.png"
import LabProject6 from "@/public/Images/projects/LabprojectImgs/Labimg6.png"

import hthpic1 from "@/public/Images/projects/hthimgs/hthimg1.png";
import hthpic2 from "@/public/Images/projects/hthimgs/hthimg2.png";
import hthpic3 from "@/public/Images/projects/hthimgs/hthimg3.png";
import hthpic4 from "@/public/Images/projects/hthimgs/hthimg4.png";
import hthpic5 from "@/public/Images/projects/hthimgs/hthimg5.png";
import hthpic6 from "@/public/Images/projects/hthimgs/hthimg6.png";

import refokuspic1 from "@/public/Images/projects/refokus-clone-imgs/refokusclone1.png";
import refokuspic2 from "@/public/Images/projects/refokus-clone-imgs/refokusclone2.png";
import refokuspic3 from "@/public/Images/projects/refokus-clone-imgs/refokusclone3.png";
import refokuspic4 from "@/public/Images/projects/refokus-clone-imgs/refokusclone4.png";
import refokuspic5 from "@/public/Images/projects/refokus-clone-imgs/refokusclone5.png";

import northstarpic1 from "@/public/Images/projects/nts-imgs/img1.png";
import northstarpic2 from "@/public/Images/projects/nts-imgs/img2.png";
import northstarpic3 from "@/public/Images/projects/nts-imgs/img3.png";
import northstarpic4 from "@/public/Images/projects/nts-imgs/img4.png";
import northstarpic5 from "@/public/Images/projects/nts-imgs/img5.png";


gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Nakya - Chemistry Lab Management System (In Development)",
    images: [LabProject1, LabProject2, LabProject3, LabProject4, LabProject5, LabProject6],
    description: "A comprehensive chemistry lab management system currently under active development. Building a modern solution for experiment tracking, inventory management and data analysis.",
    features: ["Experiment Tracking", "Chemical Inventory", "Data Visualization", "API Integration"],
    tech: ["React", "Redux", "REST APIs", "Chart.js"],
    liveDemo: "Coming Soon",
    github: "https://github.com/ranjit800/nakya-lab",
  },
  {
    title: "HTH True and Hotel",
    images: [hthpic1, hthpic2, hthpic3, hthpic4, hthpic5, hthpic6],
    description: "A modern hotel booking website with an elegant UI and seamless user experience.",
    features: ["Responsive Design", "Room Booking UI", "Interactive Gallery", "Contact Forms"],
    tech: ["Next.js", "Tailwind CSS", "React Icons", "Framer Motion"],
    liveDemo: "https://hth-ture-and-hotel.vercel.app/",
    github: "https://github.com/ranjit800/hthTureAndHotel",
  },
  {
    title: "Refokus Clone",
    images: [refokuspic1, refokuspic2, refokuspic3, refokuspic4, refokuspic5],
    description: "A pixel-perfect clone of Refokus.com featuring smooth animations and transitions using Framer Motion and Locomotive Scroll.",
    features: ["Smooth Scroll", "Page Transitions", "Interactive Animations", "Responsive Design"],
    tech: ["React", "Framer Motion", "Locomotive Scroll", "Tailwind CSS"],
    liveDemo: "https://refokus-clone-rj.vercel.app/",
    github: "https://github.com/ranjit800/refokus-clone",
  },
  {
    title: "North Star Metricx - Crypto Platform Website",
    images: [northstarpic1, northstarpic2, northstarpic3, northstarpic4, northstarpic5],
    description: "A fully responsive cryptocurrency platform offering real-time market data, seamless trading experience, and secure API integration.",
    features: [
      "GSAP Animations for Smooth UI",
      "Full API Integration with Crypto Data",
      "Super Responsive UI for All Devices",
      "Multi-Currency & Payment Options",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "GSAP", "Node.js", "WebSockets",],
    liveDemo: "https://your-live-demo.com",
    github: "https://github.com/your-repo",
  }
  
];

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-pink-400 inline-block text-transparent bg-clip-text">
          🚀 My Projects
        </h2>
        <p className="text-gray-300 mb-8">Here are some of my best projects showcasing my frontend expertise.</p>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-gray-900 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all hover:shadow-2xl"
            >
              <div className="swiper-container">
                <style jsx global>{`
                  .swiper-pagination-bullet {
                    background-color: white !important;
                    opacity: 0.5;
                  }
                  .swiper-pagination-bullet-active {
                    opacity: 1;
                    background-color: #3B82F6 !important;
                  }
                `}</style>
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  className="mb-4"
                >
                  {project.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <Image
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="rounded-lg object-cover"
                        width={500}
                        height={300}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <h3 className="text-2xl font-semibold text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <ul className="text-gray-400 text-sm mt-2">
                {project.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
              <div className="mt-4 flex justify-center space-x-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  className="px-4 py-2 bg-blue-500 rounded-lg font-semibold text-white shadow-md hover:bg-blue-600 transition"
                >
                  🔥 Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 bg-gray-700 rounded-lg font-semibold text-white shadow-md hover:bg-gray-800 transition"
                >
                  💻 GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
