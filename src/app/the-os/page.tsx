'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NetworkMap from '../components/NetworkMap'; 
import Modules from '../components/Modules'; 
import Missions from '../components/Missions'; 
import { Activity, Server, Cpu, Radio } from 'lucide-react';

export default function LancsOS() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white font-sans relative">
      
      <div className="fixed inset-0 bg-grid-paper pointer-events-none z-0" />
      <Navbar />

      {/* =========================================================================
          SECTION 1: DASHBOARD HERO (The Map)
          Goal: Visualize the living network. Always visible.
      ========================================================================== */}
      <section className="relative pt-24 border-b border-border bg-slate-900/20">
        
        {/* Header Overlay */}
        <div className="absolute top-28 left-0 right-0 z-20 pointer-events-none">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="bg-background/90 backdrop-blur-md p-6 border border-border rounded-sm shadow-xl pointer-events-auto">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest mb-2">
                 <Activity size={14} /> System Status: Online
              </div>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-slate-100 mb-2">
                The Operating System.
              </h1>
              <p className="text-slate-400 font-mono text-xs md:text-sm max-w-md">
                Live visualization of federated nodes, active missions, and resource flows across Lancashire.
              </p>
            </div>
            
            {/* Stats Block */}
            <div className="hidden md:flex gap-6 bg-background/90 backdrop-blur-md p-4 border border-border rounded-sm pointer-events-auto">
               <div className="text-right">
                  <span className="block text-[10px] text-slate-500 font-mono uppercase tracking-widest">Active Nodes</span>
                  <span className="text-xl font-mono font-bold text-slate-200">142</span>
               </div>
               <div className="w-px bg-border h-full mx-2"></div>
               <div className="text-right">
                  <span className="block text-[10px] text-slate-500 font-mono uppercase tracking-widest">Network Load</span>
                  <span className="text-xl font-mono font-bold text-emerald-500">OPTIMAL</span>
               </div>
            </div>
          </div>
        </div>

        {/* The Map - Fully Visible */}
        <div className="w-full h-[65vh] relative z-10">
           <NetworkMap /> 
           
           {/* Technical label in corner */}
           <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 text-slate-500 font-mono text-[10px] uppercase tracking-widest">
             <Radio size={14} className="text-emerald-500 animate-pulse" />
             Topology: Federated Mesh (v1.0)
           </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: THE EXPLAINER
          Goal: Explain what this dashboard is FOR.
      ========================================================================== */}
      <section className="py-20 border-b border-border bg-background relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">// SYSTEM_OVERVIEW</span>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-100 mb-8">
            The Engine Room of the County.
          </h2>
          <div className="prose prose-invert prose-lg mx-auto font-serif text-slate-400 leading-relaxed">
            <p>
              This is not a passive website. This is the <strong>Lancs.OS Command Centre</strong>. 
              Here, we coordinate the real-world work of rebuilding our local economy.
            </p>
            <p>
              The "Invisible Hand" of the market has failed us. We are replacing it with the 
              <strong> Visible Handshake</strong> of the network. Use the tools below to audit supply chains, 
              deploy cooperative software, and join active missions.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE WORK (Missions & Modules)
      ========================================================================== */}
      <div className="relative z-10 bg-background">
        <Missions />
        <Modules />
      </div>

      <Footer />
    </main>
  );
}