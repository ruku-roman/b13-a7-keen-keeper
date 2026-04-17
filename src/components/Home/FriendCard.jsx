"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/Lib/utils';
import { LuCalendarDays } from "react-icons/lu";

const STATUS_CONFIG = {
  overdue: { bg: "bg-rose-500", shadow: "shadow-rose-500/50" },
  "almost due": { bg: "bg-amber-400", shadow: "shadow-amber-400/50" },
  "on-track": { bg: "bg-emerald-500", shadow: "shadow-emerald-500/50" }
};

const FriendCard = ({ friend }) => {
  const config = STATUS_CONFIG[friend.status?.toLowerCase()] || { bg: "bg-slate-400", shadow: "" };

  return (
    <Link href={`/friends/${friend.id}`}  className="group block w-full perspective-[1000px]">
      <div className="relative h-full w-full rounded-[2.5rem] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform-3d group-hover:transform-[rotateX(10deg)_rotateY(-10deg)]">
        <div className="absolute inset-6 rounded-[2.5rem] bg-black/10 blur-2xl transition-all duration-500 group-hover:translate-y-10 group-hover:opacity-40" />
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 text-center shadow-sm transform-[translateZ(0px)] group-hover:transform-[translateZ(20px)] transition-transform duration-500">
          <div className="relative mx-auto mb-6 h-32 w-32 transform-[translateZ(30px)]">
            <div className="absolute inset-0 rounded-full bg-linear-to-tr from-emerald-400 to-cyan-400 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-2xl transition-transform duration-500 group-hover:scale-110">
              <Image
                src={friend.picture}
                alt={friend.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 transform-[translateZ(40px)]">
            <div>
              <h3 className="text-[1rem] font-black tracking-tight text-slate-800 transition-colors group-hover:text-emerald-600">
                {friend.name}
              </h3>
              <div className="mt-1 flex items-center justify-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <LuCalendarDays size={16} />
                <span>{friend.days_since_contact}d ago</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {friend.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="rounded-full bg-slate-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-tight text-slate-500 transition-all duration-300 group-hover:bg-emerald-50 group-hover:text-emerald-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-2 transform-[translateZ(50px)]">
              <span className={cn(
                "inline-block rounded-full px-8 py-2.5 text-[11px] font-black uppercase tracking-widest text-white shadow-2xl transition-all duration-500 group-hover:scale-110",
                config.bg,
                config.shadow
              )}>
                {friend.status}
              </span>
            </div>
          </div>

          <div className="absolute -left-full top-0 h-full w-1/2 skew-x-[-25deg] bg-linear-to-r from-transparent via-white/30 to-transparent transition-all duration-1000 group-hover:left-[150%]" />
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;