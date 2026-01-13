'use client';

import React from 'react';
import Navbar from './components/Navbar';
import OwnershipAudit from './components/OwnershipAudit';
import Footer from './components/Footer'; 
import Link from 'next/link';
import { Hammer, ScrollText, Building2, ArrowRight, LayoutGrid, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white relative font-sans">
      
      {/* Global Texture */}
      <div className="fixed inset-0 bg-grid-paper pointer-events-none z-0" />

      <Navbar /> 

      {/* --- SECTION 1: HERO (The Hook) --- */}
      <div className="relative w-full min-h-[85vh] flex flex-col justify-center items-center pt-24 border-b border-border">
        
        <div className="relative z-10 max-w-4xl px-6 text-center">
          
          <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 border border-border bg-slate-900/80 backdrop-blur-sm rounded-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
            <span className="text-slate-300 font-mono text-xs uppercase tracking-widest font-bold">
              Lancs.OS v1.0 :: Online
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-heading font-bold text-slate-100 leading-[0.95] mb-8 tracking-tight">
            Cyber <br />
            <span className="text-primary">Distributism.</span>
          </h1>

          <p className="text-xl md:text-3xl text-slate-200 max-w-2xl mx-auto mb-8 font-heading italic">
            "Three acres, a cow... and a server node."
          </p>

          <p className="font-mono text-sm md:text-base text-slate-300 max-w-lg mx-auto mb-12 uppercase tracking-wide leading-relaxed">
            We are building a <strong>Civic Operating System</strong> for Lancashire. 
            Merging cybernetic coordination with distributed local ownership.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link href="/lancs-os">
              <button className="h-14 px-8 bg-primary hover:bg-[#c2410c] text-white font-mono text-sm font-bold uppercase tracking-widest rounded-sm transition-all shadow-lg flex items-center gap-3 border border-primary/50">
                <LayoutGrid size={18} />
                Enter Lancs.OS
              </button>
            </Link>
            
            <Link href="/blueprint">
              <button className="h-14 px-8 bg-card/90 border border-border hover:border-slate-500 text-slate-200 hover:text-white font-heading italic text-lg rounded-sm transition-all flex items-center gap-2">
                <ScrollText size={20} />
                Read the Blueprint
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: THE DIAGNOSIS (The Problem) --- */}
      <section className="py-24 border-b border-border relative z-10 bg-background/50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-8">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">// SYSTEM_DIAGNOSTIC</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-100 leading-tight">
                The Absentee Economy.
              </h2>
            </div>
            <div className="prose prose-invert prose-lg text-slate-400 font-serif leading-relaxed">
              <p>
                Lancashire works hard. We generate billions in value every year. 
                Yet our high streets are empty, and our services are crumbling. Why?
              </p>
              <br></br>
              <p>
                <span className="text-slate-200 strong">Because we don't own the infrastructure.</span>
              </p>
              <br></br>
              <p>
                When a hospital buys food from a global giant, or a council pays for software from Silicon Valley, 
                that money leaves the county instantly.
              </p>
              <br></br>
              <p>
                <span className="text-slate-200 strong">It is extraction by design</span>.
              </p>
            </div>
          </div>

          <div className="relative">
             <OwnershipAudit />
          </div>

        </div>
      </section>

      {/* --- SECTION 3: THE PRECEDENT (Preston Model) --- */}
      <section className="py-24 border-b border-border bg-card/20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <Building2 size={48} className="mx-auto text-slate-600 mb-6" />
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-100 mb-8">
            We know how to fix this. <br/>
            <span className="text-emerald-500">We've done it before.</span>
          </h2>
          
          <div className="prose prose-invert prose-xl mx-auto font-serif text-slate-300 leading-relaxed mb-12">
            <p>
              The <strong>Preston Model</strong> proved that by forcing "Anchor Institutions" (Hospitals, Universities, Councils) to buy from local cooperatives, we can stop the wealth drain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-left font-mono text-sm border-t border-slate-800 pt-12">
            <div className="p-6 border-l-2 border-slate-700">
              <strong className="text-slate-500 block mb-2 uppercase tracking-widest">// THE LIMITATION</strong>
              <p className="text-slate-400 leading-relaxed">
                Manual coordination is slow. Matching huge contracts with small co-ops using spreadsheets is impossible at scale.
              </p>
            </div>
            <div className="p-6 border-l-2 border-emerald-500 bg-emerald-900/5">
              <strong className="text-emerald-500 block mb-2 uppercase tracking-widest">// THE UPGRADE</strong>
              <p className="text-slate-300 leading-relaxed">
                Lancs.OS digitizes this process. We use AI to coordinate thousands of small local owners to act like one giant corporation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 4: THE CHOICE (Navigation) --- */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* OPTION 1: THE OS */}
            <Link href="/the-os" className="group relative block h-full">
              <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative h-full border border-border bg-card p-10 hover:border-primary transition-colors flex flex-col justify-between">
                <div>
                   <LayoutGrid className="text-primary mb-6" size={40} />
                   <h3 className="text-3xl font-heading font-bold text-slate-100 mb-4">The Operating System</h3>
                   <p className="text-slate-400 font-mono text-sm leading-relaxed mb-8">
                     Explore the live network, view active missions, and deploy modules. This is the practical engine room of the project.
                   </p>
                </div>
                <div className="flex items-center gap-2 text-primary font-bold font-mono text-sm uppercase tracking-widest">
                  Enter The Network <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            {/* OPTION 2: THE BLUEPRINT */}
            <Link href="/the-blueprint" className="group relative block h-full">
              <div className="absolute inset-0 bg-slate-500/10 blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative h-full border border-border bg-card p-10 hover:border-slate-400 transition-colors flex flex-col justify-between">
                <div>
                   <BookOpen className="text-slate-300 mb-6" size={40} />
                   <h3 className="text-3xl font-heading font-bold text-slate-100 mb-4">The Blueprint</h3>
                   <p className="text-slate-400 font-mono text-sm leading-relaxed mb-8">
                     Read the academic and political framework. Understanding the Cyber-Distributist Nexus and the VSM Stack.
                   </p>
                </div>
                <div className="flex items-center gap-2 text-slate-300 font-bold font-mono text-sm uppercase tracking-widest group-hover:text-white">
                  Read The Theory <ArrowRight size={16} />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}