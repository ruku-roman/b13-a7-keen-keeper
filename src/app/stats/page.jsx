"use client";

import React from 'react';
import InteractionPieChart from '@/components/charts/InteractionPieChart';
import { useTimeline } from '@/Lib/TimelineProvider.mjs';


export default function StatsPage() {
  const { entries } = useTimeline();

  return (
    <main className="min-h-screen bg-[#FBFBFA] pb-20">
      <section className="max-w-7xl mx-auto px-4 pt-16 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
          Friendship Analytics
        </h1>
      </section>

      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-12">
          <h3 className="text-sm font-bold text-slate-400  tracking-widest mb-10">
            By Interaction Type
          </h3>
          
          <div className="flex flex-col items-center justify-center">
            {entries.length > 0 ? (
              <InteractionPieChart />
            ) : (
              <div className="py-20 text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                   <span className="loading loading-ring loading-md text-slate-300"></span>
                </div>
                <p className="text-slate-400 font-medium">No interactions logged yet to show analytics.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}