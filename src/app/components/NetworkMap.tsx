'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Coordinates for major Lancashire hubs (Abstracted to 0-100 grid)
const nodes = [
  { id: 'LAN', x: 50, y: 20, label: 'Lancaster' },
  { id: 'BPL', x: 20, y: 50, label: 'Blackpool' },
  { id: 'PRE', x: 50, y: 55, label: 'Preston' }, // The Hub
  { id: 'BBN', x: 70, y: 55, label: 'Blackburn' },
  { id: 'BUR', x: 80, y: 45, label: 'Burnley' },
  { id: 'WLC', x: 30, y: 70, label: 'West Lancs' },
];

export default function NetworkMap() {
  return (
    <div className="relative w-full h-full opacity-40 hover:opacity-100 transition-opacity duration-1000">
      <svg className="w-full h-full text-emerald-500/20">
        {/* Draw lines from Preston (Hub) to others */}
        {nodes.map((node, i) => {
          if (node.id === 'PRE') return null;
          return (
            <motion.line
              key={i}
              x1="50%" y1="55%" // Preston coords
              x2={`${node.x}%`} y2={`${node.y}%`}
              stroke="currentColor"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: i * 0.2 }}
            />
          );
        })}
      </svg>

      {/* Render Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {/* The Dot */}
          <div className={`w-3 h-3 rounded-full border border-slate-900 ${
            node.id === 'PRE' ? 'bg-rose-500 shadow-[0_0_15px_rgba(225,29,72,0.5)]' : 'bg-slate-700'
          }`} />
          
          {/* The Label */}
          <span className="mt-2 text-[10px] font-mono text-slate-500 tracking-widest uppercase">
            {node.id}
          </span>
        </motion.div>
      ))}
    </div>
  );
}