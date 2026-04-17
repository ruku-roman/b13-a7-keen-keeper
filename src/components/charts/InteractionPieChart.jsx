"use client";
import React from 'react';
import { useTimeline } from '@/Lib/TimelineProvider.mjs';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function InteractionPieChart() {
  const { entries } = useTimeline();

  const data = [
    { name: 'Text', value: entries.filter(e => e.type === 'text').length },
    { name: 'Call', value: entries.filter(e => e.type === 'call').length },
    { name: 'Video', value: entries.filter(e => e.type === 'video').length },
    { name: 'Email', value: entries.filter(e => e.type === 'email').length },
  ].filter(d => d.value > 0);

  const COLORS = ['#6366f1', '#1C4D42', '#34d399'];

  return (
    <div className="w-full h-87.5 md:h-112.5">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80} 
            outerRadius={120}
            paddingAngle={8}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
          />
          <Legend 
            verticalAlign="bottom" 
            align="center"
            iconType="circle"
            formatter={(value) => <span className="text-slate-600 font-bold ml-2">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}