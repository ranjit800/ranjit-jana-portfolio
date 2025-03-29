import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title ="Get Started"}) => {
  return (
    <a 
      href="https://docs.google.com/forms/d/e/1FAIpQLSezb1RHKR1zvRlbaopBnpj7a6zybabDVUTgXtXESOMdLZsC8w/viewform?usp=header"
      target="_blank"
      rel="noopener noreferrer"
      className="w-fit px-8 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between gap-2 hover:scale-105 transition-transform duration-300" 
      style={{ boxShadow: "0 0 0.80em #773BAF" }}
    >
      <span className="text-sm font-medium flex items-center justify-between group">
        <span className="inline-block group-hover:rotate-[360deg] transition-transform duration-200">
          {title}
        </span>
      </span>
      <IoIosReturnRight />
    </a>
  );
};

export default Button;