"use client"
import React from 'react';
import friendsData from '@/data/friends.json';

export default function SummaryCards() {
  const stats = {
    total: friendsData.length,
    onTrack: friendsData.filter(f => f.status === 'on-track').length,
    needAttention: friendsData.filter(f => f.status === 'overdue' || f.status === 'almost due').length,
    interactions: 12, 
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
      <StatCard label="Total Friends" value={stats.total} color="text-slate-800" />
      <StatCard label="On Track" value={stats.onTrack} color="text-[#1e3a34]" />
      <StatCard label="Need Attention" value={stats.needAttention} color="text-[#1e3a34]" />
      <StatCard label="Interactions This Month" value={stats.interactions} color="text-slate-800" />
    </div>
  );
}

const StatCard = ({ label, value, color }) => (
  <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm text-center flex flex-col justify-center gap-1 hover:shadow-md transition-shadow">
    <p className={`text-4xl font-bold ${color}`}>{value}</p>
    <p className="text-slate-600 text-sm font-medium">{label}</p>
  </div>
);