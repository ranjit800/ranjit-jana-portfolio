"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <div className="w-full bg-black sticky top-0 z-50 pt-5">
      <div
        className="md:max-w-screen-xl py-3 px-4 bg-black backdrop-blur-lg mx-auto flex items-center justify-between md:rounded-xl sticky top-0 z-50 transition-colors duration-300"
        style={{ boxShadow: "0 0 0.35em #773BAF" }}
      >
        {/* Logo */}
        <div className="flex flex-row gap-1 text-[#FFFFFF]">
          <div className="w-6 h-6 rounded-full bg-[#773BAF] flex items-center justify-center" style={{ boxShadow: "0 0 0.45em #773BAF" }}>
            <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center" style={{ boxShadow: "0 0 0.45em #773BAF" }}>
              <div className="w-3 h-3 rounded-full bg-[#773BAF]" style={{ boxShadow: "0 0 0.45em #773BAF" }}></div>
            </div>
          </div>
          <Link href="/" className="text-white">
            &lt;Ranjit jana /&gt;
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2 focus:outline-none z-50" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-14">
          {[
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: "About", path: "/about" },
            { name: "", path: "" },
            { name: "News", path: "/news" },
          ].map((element, index) =>
            element.name.length === 0 ? (
              <span key={index} className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <Link key={index} href={element.path} className="font-sans text-sm flex items-center justify-center gap-1 text-white">
                {index === 1 && <span style={{ boxShadow: "0 0 0.45em #773BAF" }} className="inline-block w-1.5 h-1.5 rounded-full bg-[#773BAF]"></span>}
                {element.name}
              </Link>
            )
          )}
          <Button title="Contact Me" />
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleMenu} />}

      {/* Mobile Navigation Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ boxShadow: isMenuOpen ? "0 0 0.35em #773BAF" : "none" }}
      >
        <div className="px-4 py-16">
          <nav className="flex flex-col space-y-6">
            {[
              { name: "Home", path: "/" },
              { name: "Work", path: "/work" },
              { name: "About", path: "/about" },
              { name: "News", path: "/news" },
            ].map((element, index) => (
              <Link
                key={index}
                href={element.path}
                className="font-sans text-sm flex items-center gap-1 text-white py-2 border-b border-zinc-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {index === 1 && <span style={{ boxShadow: "0 0 0.45em #773BAF" }} className="inline-block w-1.5 h-1.5 rounded-full bg-[#773BAF]"></span>}
                {element.name}
              </Link>
            ))}
            <div className="py-2">
              <Button title="Contact Me" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
