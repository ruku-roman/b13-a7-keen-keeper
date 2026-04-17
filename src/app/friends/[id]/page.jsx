import React from 'react';
import friendsData from '@/data/friends.json';
import { notFound } from 'next/navigation';
import { FaBell,FaArchive  } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { RiEdit2Fill } from "react-icons/ri";
import { cn } from '@/Lib/utils';
import Image from 'next/image';
import QuickCheckIn from '@/components/firend/QuickCheckIn';


export default async function FriendDetailPage({ params }) {
  const resolvedParams = await params;
  const friend = friendsData.find(f => f.id === parseInt(resolvedParams.id));

  if (!friend) return notFound();

  const statusStyles = {
    "overdue": "bg-red-500 text-white",
    "almost due": "bg-amber-400 text-white",
    "on-track": "bg-[#1C4D42] text-white"
  };

  return (
    <main className="min-h-screen bg-[#F8FAFB] py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/3 space-y-4">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden ring-4 ring-slate-50">
            <Image
                src={friend.picture}
                alt={friend.name}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            </div>
            <h1 className="text-xl font-bold text-slate-800">{friend.name}</h1>
            <div className={cn("mt-2 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase", statusStyles[friend.status])}>
              {friend.status}
            </div>
            <div className="flex flex-wrap gap-1 justify-center mt-2">
              {friend.tags.map(tag => (
                <span key={tag} className="px-3 py-0.5 bg-emerald-50 text-[#1C4D42] text-[10px] font-bold uppercase rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-4 text-slate-500 italic text-sm">{friend.bio}</p>
            <p className="mt-1 text-slate-400 text-[10px]">Preferred: {friend.email}</p>
          </div>

          <div className="space-y-2">
            <ActionButton icon={FaBell} label="Snooze 2 Weeks" />
            <ActionButton icon={FaArchive} label="Archive" />
            <ActionButton icon={FiTrash2} label="Delete" variant="danger" />
          </div>
        </div>
        <div className="w-full lg:w-2/3 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <StatCard value={friend.days_since_contact} label="Days Since Contact" />
            <StatCard value={friend.goal} label="Goal (Days)" />
            <StatCard value={friend.next_due_date} label="Next Due" />
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center">
            <div>
              <h3 className="text-sm font-bold text-[#1C4D42]">Relationship Goal</h3>
              <p className="text-sm text-slate-600">Connect every <span className="font-bold">{friend.goal} days</span></p>
            </div>
            <button className="px-3 py-1 border border-slate-200 rounded-md text-xs font-medium text-slate-500 hover:bg-slate-50 flex items-center gap-1">
              <RiEdit2Fill className="w-3 h-3" /> Edit
            </button>
          </div>
          <QuickCheckIn  friendName={friend.name} className="shadow-md" />
          
        </div>
      </div>
    </main>
  );
}

const ActionButton = ({ icon: Icon, label, variant }) => (
  <button className={cn(
    "flex items-center justify-center gap-2 w-full py-3 bg-white border border-slate-200 rounded-lg text-sm font-medium transition-colors",
    variant === "danger" ? "text-red-500 hover:bg-red-50" : "text-slate-600 hover:bg-slate-50"
  )}>
    <Icon className="w-4 h-4" /> {label}
  </button>
);

const StatCard = ({ value, label }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
    <div className="text-2xl font-bold text-slate-800">{value}</div>
    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{label}</div>
  </div>
);