'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NetworkMap from '../components/NetworkMap'; 
import Modules from '../components/Modules'; 
import Missions from '../components/Missions'; 
import { Activity, Server, Radio, PencilRuler } from 'lucide-react'; // Added PencilRuler

export default function LancsOS() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white font-sans relative">
      
      <div className="fixed inset-0 bg-grid-paper pointer-events-none z-0" />
      <Navbar />

      {/* HERO / MAP SECTION */}
      <section className="relative pt-24 border-b border-border bg-slate-900/20">
        
        <div className="absolute top-28 left-0 right-0 z-20 pointer-events-none">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="bg-background/90 backdrop-blur-md p-6 border border-border rounded-sm shadow-xl pointer-events-auto">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest mb-2">
                 {/* CHANGED: From "System Status" to "Prototype Environment" */}
                 <PencilRuler size={14} /> Environment: Concept Alpha
              </div>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-slate-100 mb-2">
                The Workbench.
              </h1>
              {/* CHANGED: Humble, invitational text */}
              <p className="text-slate-400 font-mono text-xs md:text-sm max-w-md leading-relaxed">
                A digital sketchbook for a sovereign Lancashire. Visualizing the networks, tools, and data structures we can build together.
              </p>
            </div>
            
            {/* STATS: Clarified these are 'Projected' or 'Mapped' */}
            <div className="hidden md:flex gap-6 bg-background/90 backdrop-blur-md p-4 border border-border rounded-sm pointer-events-auto">
               <div className="text-right">
                  <span className="block text-[10px] text-slate-500 font-mono uppercase tracking-widest">Potential Nodes</span>
                  <span className="text-xl font-mono font-bold text-slate-200">264+</span>
               </div>
               <div className="w-px bg-border h-full mx-2"></div>
               <div className="text-right">
                  <span className="block text-[10px] text-slate-500 font-mono uppercase tracking-widest">Model Status</span>
                  <span className="text-xl font-mono font-bold text-emerald-500">SIMULATION</span>
               </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[65vh] relative z-10">
           <NetworkMap /> 
           <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 text-slate-500 font-mono text-[12px] uppercase tracking-widest">
             <Radio size={20} className="text-emerald-500 animate-pulse" />
             Visualization: Parish Mesh Topology
           </div>
        </div>
      </section>

      {/* EXPLAINER SECTION: The "Why" */}
      <section className="py-20 border-b border-border bg-background relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">// PROPOSAL_FRAMEWORK</span>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-100 mb-8">
             Not a Command Centre. <br/> A Construction Site.
          </h2>
          <div className="prose prose-invert prose-lg mx-auto font-serif text-slate-400 leading-relaxed">
            <p>
              We are not managing the county; we are proposing a new way to organize it. 
              The tools below are <strong>architectural concepts</strong> for a post-extractive economy.
            </p>
            <br></br>
            <p>
              We publish these missions and modules as "Requests for Proposals." 
              They are open invitations for developers, co-ops, and councils to pick up a shovel and start building.
            </p>
          </div>
        </div>
      </section>

      {/* TOOLS SECTION */}
      <div className="relative z-10 bg-background">
        <Missions />
        <Modules />
      </div>

      <Footer />
    </main>
  );
}