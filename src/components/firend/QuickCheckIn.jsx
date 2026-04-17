"use client";

import React, { useCallback } from 'react';
import { FaPhone } from "react-icons/fa6";
import { LuMessageSquareText } from "react-icons/lu";
import { FaVideo } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { toast } from 'react-toastify';
import { cn } from '@/Lib/utils';
import ActionButton from '../ui/ActionButton';
import { useTimeline } from '@/Lib/TimelineProvider.mjs';

const CHECK_IN_OPTIONS = [
  { id: 'call', label: 'Call', icon: FaPhone, color: 'text-blue-500' },
  { id: 'text', label: 'Text', icon: LuMessageSquareText, color: 'text-emerald-500' },
  { id: 'video', label: 'Video', icon: FaVideo, color: 'text-violet-500' },
  { id: 'email', label: 'Email', icon: IoMdMailUnread, color: 'text-amber-500' },
];

export default function QuickCheckIn({ friendName = "Friend", className }) {
  const { addEntry, isHydrated } = useTimeline();

  /**
   * Action Handler
   * Note: The Date is generated INSIDE the click handler. 
   * This is safe from hydration errors because it only runs on the client after a user action.
   */
  const handleLogInteraction = useCallback(async (label, id) => {
    if (!isHydrated) return;

    const title = `${label} with ${friendName}`;
    
    try {
      const date = new Date().toLocaleDateString('en-US', { 
        month: 'short', day: 'numeric', year: 'numeric' 
      });

      await addEntry({
        title,
        type: id,
        date,
      });

      toast.success(title, {
        style: { backgroundColor: '#1C4D42', color: '#fff', borderRadius: '12px' },
      });
    } catch (error) {
      toast.error("Logging failed. Please try again.");
      console.error(`[QuickCheckIn Error]: ${error.message}`);
    }
  }, [friendName, addEntry, isHydrated]);

  if (!isHydrated) return null;

  return (
    <section className={cn("bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm", className)}>
      <header className="flex items-center gap-4 mb-8">
        <h3 className="text-[10px] font-black text-[#1C4D42] uppercase tracking-[0.25em] whitespace-nowrap">
          Quick Check-In
        </h3>
        <div className="h-px w-full bg-slate-100" />
      </header>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {CHECK_IN_OPTIONS.map(({ id, ...props }) => (
          <ActionButton 
            key={id}
            {...props}
            onClick={() => handleLogInteraction(props.label, id)}
          />
        ))}
      </div>
    </section>
  );
}