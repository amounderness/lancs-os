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

export default function DensityMap() {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Full Lancashire Council Roster (Your Custom Coordinates)
  const lancsNodes: NodeData[] = [
    // --- TOP ROW ---
    { id: 'WYR', label: 'WYRE', geoX: 25, geoY: 25, randX: 12, randY: 23 },
    { id: 'LAN', label: 'LANCASTER', geoX: 45, geoY: 20, randX: 30, randY: 17 },
    { id: 'RIB', label: 'RIBBLE V.', geoX: 65, geoY: 20, randX: 60, randY: 10 },
    { id: 'PEN', label: 'PENDLE', geoX: 85, geoY: 25, randX: 85, randY: 20 },

    // --- SECOND ROW ---
    { id: 'BPL', label: 'BLACKPOOL', geoX: 15, geoY: 35, randX: 10, randY: 40 },
    { id: 'PRE', label: 'PRESTON', geoX: 40, geoY: 40, randX: 35, randY: 35 }, 
    { id: 'HYN', label: 'HYNDBURN', geoX: 70, geoY: 40, randX: 65, randY: 40 },
    { id: 'BUR', label: 'BURNLEY', geoX: 88, geoY: 45, randX: 90, randY: 49 },

    // --- THIRD ROW ---
    { id: 'FYL', label: 'FYLDE', geoX: 18, geoY: 55, randX: 15, randY: 60 },
    { id: 'SRB', label: 'S. RIBBLE', geoX: 40, geoY: 55, randX: 40, randY: 50 },
    { id: 'BWD', label: 'B. WITH D.', geoX: 65, geoY: 55, randX: 65, randY: 60 },

    // --- BOTTOM ROW ---
    { id: 'WLC', label: 'W. LANCS', geoX: 25, geoY: 70, randX: 15, randY: 75 },
    { id: 'CHO', label: 'CHORLEY', geoX: 50, geoY: 65, randX: 50, randY: 70 },
    { id: 'ROS', label: 'ROSSENDALE', geoX: 75, geoY: 70, randX: 80, randY: 75 },
  ];

  if (!mounted) return <div className="h-[400px] w-full bg-slate-900 rounded-lg" />;

  return (
    <div 
      className="relative w-full h-[400px] bg-slate-900 rounded-lg overflow-hidden border border-slate-700 shadow-xl group cursor-crosshair flex"
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

      {/* --- LEFT SIDE: LANCASHIRE --- */}
      <div className="flex-1 relative z-10 border-r border-slate-800">
          <div className="absolute top-4 left-4 text-[10px] font-mono font-bold text-slate-500">
             SUBJECT: LANCASHIRE COUNTY<br/>
             <span className={cn("transition-colors duration-300", isHovered ? "text-green-500" : "text-red-500")}>
                {isHovered ? "STATUS: CONNECTED" : "STATUS: FRAGMENTED"}
             </span>
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {lancsNodes.map((node) => (
               <motion.line
                 key={`line-${node.id}`}
                 initial={{ pathLength: 0, opacity: 0 }}
                 animate={isHovered ? {
                   x1: `${node.geoX}%`, y1: `${node.geoY}%`,
                   x2: "50%", y2: "45%", 
                   pathLength: 1, 
                   opacity: 0.3
                 } : { opacity: 0 }}
                 stroke="#4ade80" 
                 strokeWidth="1"
                 transition={{ duration: 1.5, ease: "easeInOut" }}
               />
            ))}
            {/* Virtual Hub Glow */}
            <motion.circle 
              cx="50%" cy="45%" r="100" 
              className="fill-green-500/5 stroke-green-500/10 stroke-1"
              initial={{ scale: 0, opacity: 0 }}
              animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </svg>

          {/* Lancashire Nodes */}
          {lancsNodes.map((node, i) => (
            <motion.div
              key={node.id}
              className={cn(
                "absolute w-8 h-8 rounded-full flex items-center justify-center border shadow-lg z-20 backdrop-blur-sm transition-colors duration-500", 
                isHovered ? "border-green-400 bg-green-500/20 shadow-[0_0_10px_rgba(74,222,128,0.3)]" : "border-red-500 bg-red-500/10"
              )}
              initial={{ left: `${node.randX}%`, top: `${node.randY}%` }}
              
              animate={isHovered ? {
                left: `${node.geoX}%`, top: `${node.geoY}%`,
                x: "-50%", y: "-50%", scale: 1,
              } : {
                left: `${node.randX}%`, top: `${node.randY}%`,
                x: ["-50%", "-40%", "-60%", "-50%"],
                y: ["-50%", "-60%", "-40%", "-50%"],
                scale: 1,
              }}
              
              transition={{ 
                left: { duration: 1.5, ease: "easeInOut" },
                top: { duration: 1.5, ease: "easeInOut" },
                x: { duration: 3 + (i % 5), repeat: Infinity, repeatType: "mirror" },
                y: { duration: 4 + (i % 5), repeat: Infinity, repeatType: "mirror" }
              }}
            >
              <span className={cn("text-[8px] font-mono font-bold", isHovered ? "text-green-300" : "text-red-400")}>
                {node.id}
              </span>
            </motion.div>
          ))}

          {/* Metric Output */}
          <div className="absolute bottom-6 left-0 w-full flex justify-center">
             <div className="inline-flex items-center gap-4 bg-slate-900/90 px-4 py-2 rounded border border-slate-700 backdrop-blur shadow-xl">
                <div className="text-right">
                    <div className="text-[10px] text-slate-400">VIRTUAL DENSITY</div>
                    <div className={cn("text-xs font-mono font-bold", isHovered ? "text-green-400" : "text-red-500")}>
                        {isHovered ? "98.4%" : "12.2%"}
                    </div>
                </div>
                <div className="h-6 w-px bg-slate-700"></div>
                <div className="text-left">
                    <div className="text-[10px] text-slate-400">LATENCY</div>
                    <div className={cn("text-xs font-mono font-bold", isHovered ? "text-green-400" : "text-red-500")}>
                        {isHovered ? "4ms" : "840ms"}
                    </div>
                </div>
             </div>
          </div>
      </div>

      {/* --- RIGHT SIDE: MANCHESTER (The Control Group) --- */}
      <div className="w-1/3 h-full relative z-10 flex flex-col items-center justify-center bg-slate-900/50">
          <div className="absolute top-4 right-4 text-[10px] font-mono font-bold text-slate-500 text-right">
             REF: GREATER MANCHESTER<br/>
          <span className={cn("text-green-500")}>
                {"STATUS: CONNECTED"}
             </span>
          </div>
          
          {/* The "Alive" Stacked Density Visual */}
          <div className="relative w-32 h-32 flex items-center justify-center">
             
             {/* Glowing Core */}
             <motion.div 
               className="absolute w-20 h-20 bg-blue-600 rounded-full blur-xl"
               animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             />
             
             {/* Static Center Label */}
             <div className="w-16 h-16 bg-blue-500 rounded-full z-20 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.6)] border-2 border-blue-400 relative">
                <span className="text-xs font-bold text-white z-20">GMC</span>
             </div>

             {/* Orbiting Satellites Container */}
             <motion.div 
                className="absolute w-full h-full z-10"
             >
                 {/* Satellites */}
                 {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg, i) => {
                    // FIXED: We calculate X/Y manually to avoid Transform conflicts
                    const rad = (deg * Math.PI) / 180;
                    const x = Math.cos(rad) * 40; // 60px Orbit Radius
                    const y = Math.sin(rad) * 40;

                    return (
                      <motion.div 
                          key={i} 
                          className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.9)]"
                          style={{ 
                              left: '50%', top: '50%', // Center in container
                              marginLeft: -6, marginTop: -6, // Offset by half size
                          }}
                          initial={{ x, y }} // Set position here
                          animate={{ scale: [0.75, 1, 0.75] }} // Pulse
                          transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }}
                      />
                    );
                 })}
             </motion.div>
          </div>

          <div className="mt-8 text-center opacity-60">
             <div className="text-xs font-mono text-blue-400 font-bold">DENSITY: CRITICAL</div>
             <div className="text-[10px] text-slate-500">Physical Stacking</div>
          </div>
      </div>
    </div>
  );
}