"use client";

import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { LuMessageSquareText } from "react-icons/lu";
import { FaVideo } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";
import { cn } from '@/Lib/utils';

const THEMES = {
  call:  { icon: FaPhone,         css: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  text:  { icon: LuMessageSquareText, css: "bg-blue-50 text-blue-600 border-blue-100" },
  video: { icon: FaVideo,         css: "bg-purple-50 text-purple-600 border-purple-100" },
  default: { icon: IoMdClock,       css: "bg-slate-50 text-slate-600 border-slate-100" }
};

const TimelineItem = ({ entry: { title, date, type } }) => {
  const { icon: Icon, css } = THEMES[type] || THEMES.default;

  return (
    <article className={cn("flex items-center p-4 rounded-2xl border transition-all hover:shadow-md bg-white", css)}>
      <div className={cn("p-3 rounded-xl mr-4", css)}>
        <Icon size={18} strokeWidth={2.5} />
      </div>
      <div className="grow">
        <h4 className="font-bold text-slate-800 text-sm leading-tight">{title}</h4>
        <time className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1 block">
          {date}
        </time>
      </div>
    </article>
  );
};

export default React.memo(TimelineItem); // Memoized for performance