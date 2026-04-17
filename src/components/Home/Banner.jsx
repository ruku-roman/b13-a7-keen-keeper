"use client"
import React from 'react';
import { FaPlusCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="py-16 px-4 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a2b27] mb-4">
        Friends to keep close in your life
      </h1>
      <p className="max-w-2xl text-slate-500 text-sm md:text-base mb-8 leading-relaxed">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the 
        relationships that matter most.
      </p>
      <button className="flex items-center gap-2 bg-[#1C4D42] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#153a32] transition-colors shadow-sm" >
        <FaPlusCircle className="w-5 h-5" />
        <span>Add a Friend</span>
      </button>
    </section>
  );
};

export default Banner;