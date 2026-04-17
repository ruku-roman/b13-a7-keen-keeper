"use client";

import { cn } from '@/Lib/utils.mjs';
import React from 'react';

/**
 * @param {Object} props - label, icon, onClick, color, className
 */
const ActionButton = ({ 
  label, 
  icon: Icon, 
  onClick, 
  color = "text-slate-400", 
  className 
}) => (
  <button 
    onClick={onClick}
    className={cn(
      "flex flex-col items-center justify-center p-5 rounded-2xl transition-all duration-300",
      "bg-slate-50 border border-transparent group",
      "hover:bg-white hover:border-[#1C4D42]/20 hover:shadow-xl hover:-translate-y-1.5",
      "active:scale-95",
      className
    )}
    aria-label={`Log ${label}`}
  >
    <div className={cn("mb-2 opacity-50 group-hover:opacity-100 transition-all transform group-hover:scale-110", color)}>
      <Icon size={24} strokeWidth={2.5} />
    </div>
    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-[#1C4D42]">
      {label}
    </span>
  </button>
);

export default ActionButton;