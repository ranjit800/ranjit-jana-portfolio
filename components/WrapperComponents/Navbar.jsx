"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="max-w-screen-xl py-3 px-2 bg-transparent backdrop-blur-lg mx-auto flex items-center justify-between  rounded-xl  sticky top-4 z-50 transition-colors duration-300"
      style={{ boxShadow: "0 0 0.35em #773BAF" }}
    >
      {/* Logo */}
      <div className="flex flex-row gap-1 text-[#FFFFFF]">
        <div className="w-6 h-6 rounded-full bg-[#773BAF] flex items-center justify-center" style={{ boxShadow: "0 0 0.45em #773BAF" }}>
          <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center" style={{ boxShadow: "0 0 0.45em #773BAF" }}>
            <div className="w-3 h-3 rounded-full bg-[#773BAF]" style={{ boxShadow: "0 0 0.45em #773BAF" }}></div>
          </div>
        </div>
        <h2 className="text-white">&lt;Ranjit jana /&gt;</h2>
      </div>

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
  );
};

export default Navbar;
