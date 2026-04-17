
"use client";

import React, { useState, useMemo } from 'react';
import { useTimeline } from '@/Lib/TimelineProvider.mjs';
import { FaFilter } from "react-icons/fa6";
import { MdForwardToInbox } from "react-icons/md";
import TimelineItem from '@/components/ui/TimelineItem';

export default function TimelinePage() {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState('all');
  const displayList = useMemo(() => (
    filter === 'all' ? entries : entries.filter(e => e.type === filter)
  ), [entries, filter]);

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      {/* Container changed to flex-col with gap-6 for vertical stacking */}
      <header className="flex flex-col items-start gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-black text-[#145547] tracking-tighter uppercase">Timeline</h1>
          <p className="text-slate-600 text-sm mt-1">Your latest interactions at a glance.</p>
        </div>

        {/* Filter now sits naturally below the text as per screenshot */}
        <div className="relative w-full sm:w-56">
          <FaFilter className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 text-sm font-medium text-slate-600 rounded-xl appearance-none outline-none focus:ring-2 focus:ring-emerald-50 shadow-sm cursor-pointer transition-all"
          >
            <option value="all">Filter timeline</option>
            <option value="call">Calls</option>
            <option value="text">Texts</option>
            <option value="video">Videos</option>
            <option value="email">Emails</option>
          </select>
          {/* Custom Chevron Arrow for the dropdown */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="Wait 19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </header>

      <section className="space-y-4">
        {displayList.length > 0 ? (
          displayList.map(entry => <TimelineItem key={entry.id} entry={entry} />)
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <MdForwardToInbox className="mx-auto text-slate-300 mb-2" size={40} />
            <p className="text-slate-400 font-bold text-sm">No activity recorded yet.</p>
          </div>
        )}
      </section>
    </main>
  );
}