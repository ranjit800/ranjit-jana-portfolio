



// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// import LabProject1 from "@/public/Images/projects/LabprojectImgs/Labimg1.png";
// import LabProject2 from "@/public/Images/projects/LabprojectImgs/Labimg2.png";
// import LabProject3 from "@/public/Images/projects/LabprojectImgs/Labimg3.png";
// import LabProject4 from "@/public/Images/projects/LabprojectImgs/Labimg4.png";
// import LabProject5 from "@/public/Images/projects/LabprojectImgs/Labimg5.png";
// import LabProject6 from "@/public/Images/projects/LabprojectImgs/Labimg6.png";

// import hthpic1 from "@/public/Images/projects/hthimgs/hthimg1.png";
// import hthpic2 from "@/public/Images/projects/hthimgs/hthimg2.png";
// import hthpic3 from "@/public/Images/projects/hthimgs/hthimg3.png";
// import hthpic4 from "@/public/Images/projects/hthimgs/hthimg4.png";
// import hthpic5 from "@/public/Images/projects/hthimgs/hthimg5.png";
// import hthpic6 from "@/public/Images/projects/hthimgs/hthimg6.png";

// import refokuspic1 from "@/public/Images/projects/refokus-clone-imgs/refokusclone1.png";
// import refokuspic2 from "@/public/Images/projects/refokus-clone-imgs/refokusclone2.png";
// import refokuspic3 from "@/public/Images/projects/refokus-clone-imgs/refokusclone3.png";
// import refokuspic4 from "@/public/Images/projects/refokus-clone-imgs/refokusclone4.png";
// import refokuspic5 from "@/public/Images/projects/refokus-clone-imgs/refokusclone5.png";

// import northstarpic1 from "@/public/Images/projects/nts-imgs/img1.png";
// import northstarpic2 from "@/public/Images/projects/nts-imgs/img2.png";
// import northstarpic3 from "@/public/Images/projects/nts-imgs/img3.png";
// import northstarpic4 from "@/public/Images/projects/nts-imgs/img4.png";
// import northstarpic5 from "@/public/Images/projects/nts-imgs/img5.png";

// import luxora1 from "@/public/Images/projects/luxora-realty/img1.png";
// import luxora2 from "@/public/Images/projects/luxora-realty/img2.png";
// import luxora3 from "@/public/Images/projects/luxora-realty/img3.png";
// import luxora4 from "@/public/Images/projects/luxora-realty/img4.png";
// import luxora5 from "@/public/Images/projects/luxora-realty/img5.png";

// import movieapp1 from "@/public/Images/projects/movie-app/img1.png";
// import movieapp2 from "@/public/Images/projects/movie-app/img2.png";
// import movieapp3 from "@/public/Images/projects/movie-app/img3.png";
// import movieapp4 from "@/public/Images/projects/movie-app/img4.png";
// import movieapp5 from "@/public/Images/projects/movie-app/img5.png";

// const projects = [
//   {
//     title: "Luxora Realty - MERN Real Estate Platform",
//     images: [luxora1, luxora2, luxora3, luxora4, luxora5],
//     description:
//       "A full-featured real estate listing platform built with the MERN stack. Users can create, edit, and browse listings with authentication powered by Firebase and MongoDB.",
//     features: ["JWT Auth & Firebase Google Login", "Create, Edit, and Search Listings", "Fully Responsive Design", "Role-Based Access for Private Routes"],
//     tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Firebase Auth", "Cloudinary"],
//     liveDemo: "https://luxora-realty-real-estate-services.onrender.com",
//     github: "https://github.com/ranjit800/mern-real-estate",
//   },
//   {
//     title: "Rj Movie App",
//     images: [movieapp1, movieapp2, movieapp3, movieapp4, movieapp5],
//     description:
//       "A React-based movie browsing platform that fetches and displays trending movies, TV shows, and web series using a third-party API. Users can explore detailed information, ratings, and watch trailers.",
//     features: ["Search and Filter Movies & Series", "API-based Real-Time Data", "View Ratings and Descriptions", "Watch Official Trailers"],
//     tech: ["React", "TMDB API", "Axios", "React Router", "Tailwind CSS"],
//     liveDemo: "https://rj-movie-find-app.onrender.com/",
//     github: "https://github.com/ranjit800/Rj-movie-app",
//   },
//   {
//     title: "Nakya - Chemistry Lab Management System (In Development)",
//     images: [LabProject1, LabProject2, LabProject3, LabProject4, LabProject5, LabProject6],
//     description:
//       "A comprehensive chemistry lab management system currently under active development. Building a modern solution for experiment tracking, inventory management and data analysis.",
//     features: ["Experiment Tracking", "Chemical Inventory", "Data Visualization", "API Integration"],
//     tech: ["React", "Redux", "REST APIs", "Chart.js"],
//     liveDemo: "Coming Soon",
//     github: "https://github.com/ranjit800/nakya-lab",
//   },
//   {
//     title: "HTH True and Hotel",
//     images: [hthpic1, hthpic2, hthpic3, hthpic4, hthpic5, hthpic6],
//     description: "A modern hotel booking website with an elegant UI and seamless user experience.",
//     features: ["Responsive Design", "Room Booking UI", "Interactive Gallery", "Contact Forms"],
//     tech: ["Next.js", "Tailwind CSS", "React Icons", "Framer Motion"],
//     liveDemo: "https://hth-ture-and-hotel.vercel.app/",
//     github: "https://github.com/ranjit800/hthTureAndHotel",
//   },
//   {
//     title: "Refokus Clone",
//     images: [refokuspic1, refokuspic2, refokuspic3, refokuspic4, refokuspic5],
//     description: "A pixel-perfect clone of Refokus.com featuring smooth animations and transitions using Framer Motion and Locomotive Scroll.",
//     features: ["Smooth Scroll", "Page Transitions", "Interactive Animations", "Responsive Design"],
//     tech: ["React", "Framer Motion", "Locomotive Scroll", "Tailwind CSS"],
//     liveDemo: "https://refokus-clone-rj.vercel.app/",
//     github: "https://github.com/ranjit800/refokus-clone",
//   },
//   {
//     title: "North Star Metricx - Crypto Platform Website",
//     images: [northstarpic1, northstarpic2, northstarpic3, northstarpic4, northstarpic5],
//     description: "A fully responsive cryptocurrency platform offering real-time market data, seamless trading experience, and secure API integration.",
//     features: ["GSAP Animations for Smooth UI", "Full API Integration with Crypto Data", "Super Responsive UI for All Devices", "Multi-Currency & Payment Options"],
//     tech: ["React", "Next.js", "Tailwind CSS", "GSAP", "Node.js", "WebSockets"],
//     liveDemo: "https://your-live-demo.com",
//     github: "https://github.com/your-repo",
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="bg-black text-white py-8 sm:py-16">
//       <div className="container mx-auto px-4 sm:px-6 text-center">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8 bg-gradient-to-r from-blue-400 to-pink-400 inline-block text-transparent bg-clip-text">
//           🚀 My Projects
//         </h2>
//         <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base px-2">Here are some of my best projects showcasing my frontend expertise.</p>

//         {/* Project Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
//           {projects.map((project, index) => (
//             <div key={index} className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all hover:shadow-2xl">
//               <div className="swiper-container">
//                 <style jsx global>{`
//                   .swiper-pagination-bullet {
//                     background-color: white !important;
//                     opacity: 0.5;
//                   }
//                   .swiper-pagination-bullet-active {
//                     opacity: 1;
//                     background-color: #3b82f6 !important;
//                   }
//                 `}</style>
//                 <Swiper
//                   modules={[Autoplay, Pagination]}
//                   spaceBetween={30}
//                   centeredSlides={true}
//                   autoplay={{
//                     delay: 2500,
//                     disableOnInteraction: false,
//                   }}
//                   pagination={{
//                     clickable: true,
//                   }}
//                   className="mb-4"
//                 >
//                   {project.images.map((img, i) => (
//                     <SwiperSlide key={i}>
//                       <Image
//                         src={img}
//                         alt={`${project.title} screenshot ${i + 1}`}
//                         className="rounded-lg object-cover w-full h-48 sm:h-64 md:h-72"
//                         width={500}
//                         height={300}
//                         priority={i === 0}
//                       />
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//               <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-400 mb-2">{project.title}</h3>
//               <p className="text-gray-300 mt-2 text-sm sm:text-base leading-relaxed">{project.description}</p>
//               <ul className="text-gray-400 text-xs sm:text-sm mt-3 space-y-1">
//                 {project.features.map((feature, i) => (
//                   <li key={i} className="flex items-start">
//                     <span className="mr-2 mt-0.5">✅</span>
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
//                 <a
//                   href={project.liveDemo}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-3 sm:px-4 py-2 bg-blue-500 rounded-lg font-semibold text-white shadow-md hover:bg-blue-600 transition text-sm sm:text-base"
//                 >
//                   🔥 Live Demo
//                 </a>
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-3 sm:px-4 py-2 bg-gray-700 rounded-lg font-semibold text-white shadow-md hover:bg-gray-800 transition text-sm sm:text-base"
//                 >
//                   💻 GitHub
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import LabProject1 from "@/public/Images/projects/LabprojectImgs/Labimg1.png";
import LabProject2 from "@/public/Images/projects/LabprojectImgs/Labimg2.png";
import LabProject3 from "@/public/Images/projects/LabprojectImgs/Labimg3.png";
import LabProject4 from "@/public/Images/projects/LabprojectImgs/Labimg4.png";
import LabProject5 from "@/public/Images/projects/LabprojectImgs/Labimg5.png";
import LabProject6 from "@/public/Images/projects/LabprojectImgs/Labimg6.png";

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

import luxora1 from "@/public/Images/projects/luxora-realty/img1.png";
import luxora2 from "@/public/Images/projects/luxora-realty/img2.png";
import luxora3 from "@/public/Images/projects/luxora-realty/img3.png";
import luxora4 from "@/public/Images/projects/luxora-realty/img4.png";
import luxora5 from "@/public/Images/projects/luxora-realty/img5.png";

import movieapp1 from "@/public/Images/projects/movie-app/img1.png";
import movieapp2 from "@/public/Images/projects/movie-app/img2.png";
import movieapp3 from "@/public/Images/projects/movie-app/img3.png";
import movieapp4 from "@/public/Images/projects/movie-app/img4.png";
import movieapp5 from "@/public/Images/projects/movie-app/img5.png";

// Placeholder image for AI Interview Prep Assistant
import aiInterviewPrepImg from "@/public/Images/projects/ai-interview-prep/cover.png";

const projects = [
  {
    title: "Luxora Realty - MERN Real Estate Platform",
    images: [luxora1, luxora2, luxora3, luxora4, luxora5],
    description:
      "A full-featured real estate listing platform built with the MERN stack. Users can create, edit, and browse listings with authentication powered by Firebase and MongoDB.",
    features: [
      "JWT Auth & Firebase Google Login",
      "Create, Edit, and Search Listings",
      "Fully Responsive Design",
      "Role-Based Access for Private Routes",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Firebase Auth",
      "Cloudinary",
    ],
    liveDemo: "https://luxora-realty-real-estate-services.onrender.com",
    github: "https://github.com/ranjit800/mern-real-estate",
  },
  {
    title: "Rj Movie App",
    images: [movieapp1, movieapp2, movieapp3, movieapp4, movieapp5],
    description:
      "A React-based movie browsing platform that fetches and displays trending movies, TV shows, and web series using a third-party API. Users can explore detailed information, ratings, and watch trailers.",
    features: [
      "Search and Filter Movies & Series",
      "API-based Real-Time Data",
      "View Ratings and Descriptions",
      "Watch Official Trailers",
    ],
    tech: ["React", "TMDB API", "Axios", "React Router", "Tailwind CSS"],
    liveDemo: "https://rj-movie-find-app.onrender.com/",
    github: "https://github.com/ranjit800/Rj-movie-app",
  },
  {
    title: "Nakya - Chemistry Lab Management System (In Development)",
    images: [
      LabProject1,
      LabProject2,
      LabProject3,
      LabProject4,
      LabProject5,
      LabProject6,
    ],
    description:
      "A comprehensive chemistry lab management system currently under active development. Building a modern solution for experiment tracking, inventory management and data analysis.",
    features: [
      "Experiment Tracking",
      "Chemical Inventory",
      "Data Visualization",
      "API Integration",
    ],
    tech: ["React", "Redux", "REST APIs", "Chart.js"],
    liveDemo: "Coming Soon",
    github: "https://github.com/ranjit800/nakya-lab",
  },
  {
    title: "HTH True and Hotel",
    images: [hthpic1, hthpic2, hthpic3, hthpic4, hthpic5, hthpic6],
    description:
      "A modern hotel booking website with an elegant UI and seamless user experience.",
    features: [
      "Responsive Design",
      "Room Booking UI",
      "Interactive Gallery",
      "Contact Forms",
    ],
    tech: ["Next.js", "Tailwind CSS", "React Icons", "Framer Motion"],
    liveDemo: "https://hth-ture-and-hotel.vercel.app/",
    github: "https://github.com/ranjit800/hthTureAndHotel",
  },
  {
    title: "Refokus Clone",
    images: [
      refokuspic1,
      refokuspic2,
      refokuspic3,
      refokuspic4,
      refokuspic5,
    ],
    description:
      "A pixel-perfect clone of Refokus.com featuring smooth animations and transitions using Framer Motion and Locomotive Scroll.",
    features: [
      "Smooth Scroll",
      "Page Transitions",
      "Interactive Animations",
      "Responsive Design",
    ],
    tech: ["React", "Framer Motion", "Locomotive Scroll", "Tailwind CSS"],
    liveDemo: "https://refokus-clone-rj.vercel.app/",
    github: "https://github.com/ranjit800/refokus-clone",
  },
  {
    title: "North Star Metricx - Crypto Platform Website",
    images: [
      northstarpic1,
      northstarpic2,
      northstarpic3,
      northstarpic4,
      northstarpic5,
    ],
    description:
      "A fully responsive cryptocurrency platform offering real-time market data, seamless trading experience, and secure API integration.",
    features: [
      "GSAP Animations for Smooth UI",
      "Full API Integration with Crypto Data",
      "Super Responsive UI for All Devices",
      "Multi-Currency & Payment Options",
    ],
    tech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Node.js",
      "WebSockets",
    ],
    liveDemo: "https://your-live-demo.com",
    github: "https://github.com/your-repo",
  },
  {
    title: "AI Interview Prep Assistant",
    images: [aiInterviewPrepImg],
    description:
      "An intelligent, AI-powered learning platform designed to help users master any topic for technical interviews. A modern, full-stack solution for interactive learning, dynamic quiz generation, and interview practice, built with the MERN stack and Next.js.",
    features: [
      "AI-Powered Conversational Learning: Engage in dynamic conversations on any topic and choose to learn deeply, get a quick summary, or test your knowledge.",
      "Dynamic Quiz & Test Generation: Instantly generate interactive in-chat quizzes or comprehensive 25-question formal tests using the Google Gemini API.",
      "Gamified Points System: Earn points for completing quizzes and tests, making the learning process more engaging and rewarding.",
      "Full User Authentication: Secure and robust user management system with JWT-based authentication for registration, login, and protected routes.",
      "Advanced Chat Management: Features a responsive, ChatGPT-like interface with options to rename, pin, and delete chat conversations.",
    ],
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Google Gemini API",
      "JWT Auth",
      "Tailwind CSS",
    ],
    liveDemo: "https://ai-interview-prep-rk35.vercel.app/login",
    github: "https://github.com/ranjit800/ai-interview-prep",
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white py-8 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8 bg-gradient-to-r from-blue-400 to-pink-400 inline-block text-transparent bg-clip-text">
          🚀 My Projects
        </h2>
        <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base px-2">
          Here are some of my best projects showcasing my frontend expertise.
        </p>

        {/* Mobile: Swipe through project cards (shows ~1.1 cards) */}
        <div className="sm:hidden">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1.1}
            spaceBetween={16}
            centeredSlides={false}
            pagination={{ clickable: true }}
            className="mb-4"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all hover:shadow-2xl">
                  <div className="swiper-container">
                    <style jsx global>{`
                      .swiper-pagination-bullet {
                        background-color: white !important;
                        opacity: 0.5;
                      }
                      .swiper-pagination-bullet-active {
                        opacity: 1;
                        background-color: #3b82f6 !important;
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
                            className="rounded-lg object-cover w-full h-48 sm:h-64 md:h-72"
                            width={500}
                            height={300}
                            priority={i === 0}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mt-2 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="text-gray-400 text-xs sm:text-sm mt-3 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 mt-0.5">✅</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 sm:px-4 py-2 bg-blue-500 rounded-lg font-semibold text-white shadow-md hover:bg-blue-600 transition text-sm sm:text-base"
                    >
                      🔥 Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 sm:px-4 py-2 bg-gray-700 rounded-lg font-semibold text-white shadow-md hover:bg-gray-800 transition text-sm sm:text-base"
                    >
                      💻 GitHub
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop/Tablet Grid Cards */}
        <div className="hidden sm:grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all hover:shadow-2xl"
            >
              <div className="swiper-container">
                <style jsx global>{`
                  .swiper-pagination-bullet {
                    background-color: white !important;
                    opacity: 0.5;
                  }
                  .swiper-pagination-bullet-active {
                    opacity: 1;
                    background-color: #3b82f6 !important;
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
                        className="rounded-lg object-cover w-full h-48 sm:h-64 md:h-72"
                        width={500}
                        height={300}
                        priority={i === 0}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
              <ul className="text-gray-400 text-xs sm:text-sm mt-3 space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-0.5">✅</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-2 bg-blue-500 rounded-lg font-semibold text-white shadow-md hover:bg-blue-600 transition text-sm sm:text-base"
                >
                  🔥 Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-2 bg-gray-700 rounded-lg font-semibold text-white shadow-md hover:bg-gray-800 transition text-sm sm:text-base"
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
