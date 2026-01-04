'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

// Define the Node type
type NodeData = {
  id: string;
  label: string;
  // Geographic positions (Networked State)
  geoX: number;
  geoY: number;
  // Random "Glitch" starting positions (Fragmented State)
  randX: number;
  randY: number;
};

export default function GlitchMap() {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const nodes: NodeData[] = [
    // Lancaster: Top Center
    { id: 'LAN', label: 'LANCASTER', geoX: 50, geoY: 15, randX: 80, randY: 20 },
    // Preston: Top Left (Central-ish)
    { id: 'PRE', label: 'PRESTON', geoX: 35, geoY: 40, randX: 20, randY: 25 },
    // Blackpool: Bottom Left
    { id: 'BLK', label: 'BLACKPOOL', geoX: 20, geoY: 70, randX: 10, randY: 60 },
    // Burnley: Top Right
    { id: 'BUR', label: 'BURNLEY', geoX: 80, geoY: 35, randX: 80, randY: 60 },
    // Blackburn: Bottom Right
    { id: 'BLC', label: 'BLACKBURN', geoX: 70, geoY: 65, randX: 50, randY: 70 },
  ];

  if (!mounted) return <div className="h-80 w-full bg-slate-900 rounded-lg" />;

  return (
    <div 
      className="relative w-full h-80 bg-slate-900 rounded-lg overflow-hidden border border-slate-700 shadow-xl group cursor-crosshair"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', 
             backgroundSize: '20px 20px' 
           }}>
      </div>

      {/* Status Indicator */}
      <div className="absolute top-4 left-4 z-10">
        <div className={cn(
          "text-xs font-mono font-bold px-2 py-1 rounded transition-colors duration-500",
          isHovered ? "bg-green-500 text-slate-900" : "bg-red-500 text-white animate-pulse"
        )}>
          STATUS: {isHovered ? "GEOGRAPHY_SYNCED" : "NODES_FRAGMENTED"}
        </div>
      </div>

      {/* Connection Lines (Only visible when networked) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {nodes.map((node) => (
           <motion.line
             key={`line-${node.id}`}
             // Determine start/end points based on hover state
             initial={{ pathLength: 0, opacity: 0 }}
             animate={isHovered ? {
               x1: `${node.geoX}%`, y1: `${node.geoY}%`,
               x2: "50%", y2: "50%", // All connect to a central virtual hub
               pathLength: 1, 
               opacity: 0.4
             } : {
               opacity: 0 // Hide lines when fragmented
             }}
             stroke="#4ade80" 
             strokeWidth="1"
             transition={{ duration: 1.5, ease: "easeInOut" }}
           />
        ))}
        {/* Central Virtual Hub */}
        <motion.circle 
          cx="50%" cy="50%" r="3" fill="#fff" 
          animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }} 
          transition={{ duration: 0.5 }}
        />
      </svg>

      {/* The Nodes */}
      {nodes.map((node, i) => {
        return (
          <motion.div
            key={node.id}
            className={cn(
              "absolute w-12 h-12 rounded-full flex items-center justify-center border-2 shadow-lg z-20 backdrop-blur-sm", 
              isHovered ? "border-green-400 bg-green-500/20" : "border-red-500 bg-red-500/10"
            )}
            // Initial position (prevents hydration mismatch)
            initial={{ left: `${node.randX}%`, top: `${node.randY}%` }}
            
            animate={isHovered ? {
              // 1. NETWORKED STATE (Fixed Geography)
              left: `${node.geoX}%`,
              top: `${node.geoY}%`,
              x: "-50%", y: "-50%", // Center on coordinate
              scale: 1.1,
            } : {
              // 2. FRAGMENTED STATE (Floating/Orbiting)
              left: `${node.randX}%`,
              top: `${node.randY}%`,
              x: ["-50%", "-40%", "-60%", "-50%"], // Drifting movement
              y: ["-50%", "-60%", "-40%", "-50%"],
              scale: 1,
            }}
            
            // The Transition Configuration
            transition={{ 
              // Movement (Left/Top) is slow and heavy
              left: { duration: 1.5, ease: "easeInOut" },
              top: { duration: 1.5, ease: "easeInOut" },
              // The floating drift (x/y) loops infinitely
              x: { duration: 3 + i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
              y: { duration: 4 + i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
            }}
          >
            <span className={cn("text-[10px] font-mono font-bold", isHovered ? "text-green-300" : "text-red-400")}>
              {node.id}
            </span>
          </motion.div>
        );
      })}

      <div className="absolute bottom-4 w-full text-center text-slate-500 text-xs font-mono">
        {isHovered ? ">> REGIONAL OPTIMIZATION: 100%" : ">> HOVER TO SYNC TOPOLOGY"}
      </div>
    </div>
  );
}