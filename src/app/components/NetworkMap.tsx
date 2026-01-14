'use client';

import React, { useMemo, useEffect, useState } from 'react';

// Configuration for the map generation
const NODE_COUNT = 219; // Total number of nodes or Parishes
const CONNECTION_DISTANCE = 15; // Percentage distance to connect

interface Node {
  id: number;
  x: number; // Percentage 0-100
  y: number; // Percentage 0-100
  size: number;
  isHub: boolean;
  pulseDelay: number;
}

interface Link {
  id: string;
  source: Node;
  target: Node;
  opacity: number;
}

export default function NetworkMap() {
  // Use state to ensure hydration matches (Next.js server/client match)
  const [nodes, setNodes] = useState<Node[]>([]);
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    // 1. Generate Random Nodes
    const newNodes: Node[] = Array.from({ length: NODE_COUNT }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() > 0.98 ? 3 : 1.5, // (Hubs 3px, Standard 1.5px)
      isHub: Math.random() > 0.9,
      pulseDelay: Math.random() * 5,
    }));

    // 2. Generate Links based on distance
    const newLinks: Link[] = [];
    
    newNodes.forEach((nodeA, i) => {
      newNodes.slice(i + 1).forEach((nodeB) => {
        // Calculate distance (pythagoras)
        const dx = nodeA.x - nodeB.x;
        const dy = nodeA.y - nodeB.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < CONNECTION_DISTANCE) {
          newLinks.push({
            id: `${nodeA.id}-${nodeB.id}`,
            source: nodeA,
            target: nodeB,
            // Closer nodes = simpler opacity
            opacity: 1 - distance / CONNECTION_DISTANCE,
          });
        }
      });
    });

    setNodes(newNodes);
    setLinks(newLinks);
  }, []);

  return (
    <div className="w-full h-full overflow-hidden relative">
      <svg 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* DEFINITIONS FOR GLOW EFFECTS */}
        <defs>
          <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. LINKS (Lines) */}
        {links.map((link) => (
          <line
            key={link.id}
            x1={`${link.source.x}%`}
            y1={`${link.source.y}%`}
            x2={`${link.target.x}%`}
            y2={`${link.target.y}%`}
            stroke="var(--color-primary)" // Use the rust/orange color
            strokeWidth="1"
            strokeOpacity={link.opacity * 0.15} // Very faint lines
          />
        ))}

        {/* 2. NODES (Circles) */}
        {nodes.map((node) => (
          <g key={node.id}>
            {/* Hub Pulse Effect (Only for big nodes) */}
            {node.isHub && (
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={node.size * 4}
                fill="url(#node-glow)"
                className="animate-pulse origin-center"
                style={{ animationDelay: `${node.pulseDelay}s`, animationDuration: '3s' }}
              />
            )}
            
            {/* The Actual Node */}
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size}
              fill="var(--color-primary)" // Solid Orange
              fillOpacity={node.isHub ? 1 : 0.6}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}