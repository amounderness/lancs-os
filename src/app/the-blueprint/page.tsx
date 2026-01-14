'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, Shield, BookOpen, Scale, Network } from 'lucide-react';
import Link from 'next/link';

export default function Blueprint() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white font-sans relative">
      
      <div className="fixed inset-0 bg-grid-paper pointer-events-none z-0" />
      <Navbar />

      {/* HEADER */}
      <div className="pt-32 pb-16 border-b border-border relative z-10 bg-background/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-mono text-xs uppercase tracking-widest mb-8 transition-colors">
            <ArrowLeft size={14} /> Return to Home
          </Link>
          
          <h1 className="text-4xl md:text-7xl font-heading font-bold text-slate-100 mb-6 leading-tight">
            The Blueprint.
          </h1>
          <p className="text-xl text-slate-400 font-heading italic max-w-2xl leading-relaxed">
            "A technical and political framework for the re-localization of the Lancashire economy."
          </p>
        </div>
      </div>

      {/* CONTENT BODY */}
      <div className="max-w-4xl mx-auto px-6 py-24 relative z-10 grid md:grid-cols-[1fr_3fr] gap-12">
        
        {/* SIDEBAR NAVIGATION (Sticky) */}
        <div className="hidden md:block">
          <div className="sticky top-32 space-y-4 border-l border-border pl-6">
            <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-4">// INDEX</span>
            <a href="#intro" className="block font-mono text-xs text-slate-400 hover:text-white transition-colors">01. THE SILICON & SOIL</a>
            <a href="#diagnosis" className="block font-mono text-xs text-slate-400 hover:text-white transition-colors">02. DIGITAL INDUSTRIALISM</a>
            <a href="#nexus" className="block font-mono text-xs text-slate-400 hover:text-white transition-colors">03. THE CYBER-NEXUS</a>
            <a href="#stack" className="block font-mono text-xs text-slate-400 hover:text-white transition-colors">04. THE VSM STACK</a>
          </div>
        </div>

        {/* MAIN TEXT */}
        <div className="prose prose-invert prose-lg prose-slate font-serif leading-relaxed">
          
          {/* 01 INTRO */}
          <div id="intro" className="mb-24">
            <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-4 font-bold">// 01. INTRODUCTION</span>
            <h2 className="text-3xl font-heading font-bold text-slate-100 mt-0">The Silicon and the Soil.</h2>
            <p>
              We stand at a crossroads. To one side is <strong>Global Digital Capital</strong>—efficient, extractive, and rootless. 
              To the other is <strong>Local Stagnation</strong>—rooted, culturally rich, but economically fragile.
            </p>
            <br></br>
            <p>
              Lancs.OS exists to bridge this divide. We refuse the choice between "Smart City" surveillance and luddite retreat. 
              We propose a third way: <strong>Cyber Distributism</strong>. A model where high-tech coordination tools are owned 
              by the communities they serve.
            </p>
          </div>

          {/* 02 THE ENEMY (Chesterton Reference) */}
          <div id="diagnosis" className="mb-24">
             <div className="p-8 border border-border bg-card/50 rounded-sm mb-8">
                <div className="flex items-center gap-3 mb-4 text-primary">
                   <Shield size={24} />
                   <h3 className="text-xl font-heading font-bold text-slate-100 m-0">The Diagnosis: The Department Store</h3>
                </div>
                <p className="text-slate-300 text-base leading-relaxed not-prose">
                  In <em>The Outline of Sanity</em>, G.K. Chesterton warned against the "Department Store"—the monopoly that swallows the small shopkeeper.
                  Today, that Department Store is Amazon, it is Uber, it is Google. 
                </p>
                <p className="text-slate-300 text-base leading-relaxed not-prose mt-4">
                  When a local shop relies on a global platform to survive, they are no longer an owner; they are a tenant.
                  This is <strong>Digital Feudalism</strong>.
                </p>
             </div>
          </div>

          {/* 03 THE SOLUTION */}
          <div id="nexus" className="mb-24">
            <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-4 font-bold">// 03. THE THEORY</span>
            <h2 className="text-3xl font-heading font-bold text-slate-100 mt-0">The Cyber-Distributist Nexus.</h2>
            <p>
              Distributism (the widespread ownership of property) fails without coordination. 
              Cybernetics (the science of control) becomes tyrannical without distributed ownership.
            </p>
            <br></br>
            <p>
              By merging them, we create a system that is <strong>Viable</strong> (efficient) and <strong>Just</strong> (human-scale).
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12 not-prose">
              <div className="border-l-2 border-primary pl-6">
                <Scale className="text-primary mb-4" size={24} />
                <h4 className="font-heading font-bold text-slate-200 text-lg mb-2">Subsidiarity</h4>
                <p className="text-sm font-mono text-slate-500">
                  Decisions are made locally. The "Small Shop" or "Node" is the primary unit of reality, not the State.
                </p>
              </div>
              <div className="border-l-2 border-emerald-500 pl-6">
                <Network className="text-emerald-500 mb-4" size={24} />
                <h4 className="font-heading font-bold text-slate-200 text-lg mb-2">Federation</h4>
                <p className="text-sm font-mono text-slate-500">
                  Nodes connect via protocols to share data and resources, gaining the strength of a giant without losing their soul.
                </p>
              </div>
            </div>
          </div>

          {/* 04 THE VSM */}
          <div id="stack" className="mb-24">
             <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-4 font-bold">// 04. THE STACK</span>
             <h2 className="text-3xl font-heading font-bold text-slate-100 mt-0">The Viable System Model.</h2>
             <p>
               How do we coordinate 264+ parishes without a central dictator? We use Stafford Beer's <strong>Viable System Model (VSM)</strong>.
             </p>
             
             <div className="border border-border bg-card p-6 my-8 not-prose rounded-sm">
                <div className="grid grid-cols-[1fr_4fr] gap-4 items-center mb-6 border-b border-slate-800 pb-4">
                   <span className="font-mono text-red-400 font-bold text-sm">SYS 5</span>
                   <div>
                      <strong className="text-slate-100 block text-sm uppercase tracking-wider">Identity</strong>
                      <span className="text-xs text-slate-500 font-mono">The Manifesto / The Constitution</span>
                   </div>
                </div>
                <div className="grid grid-cols-[1fr_4fr] gap-4 items-center mb-6 border-b border-slate-800 pb-4">
                   <span className="font-mono text-blue-400 font-bold text-sm">SYS 4</span>
                   <div>
                      <strong className="text-slate-100 block text-sm uppercase tracking-wider">Intelligence</strong>
                      <span className="text-xs text-slate-500 font-mono">The Procurement Radar / Market Analysis</span>
                   </div>
                </div>
                <div className="grid grid-cols-[1fr_4fr] gap-4 items-center mb-6 border-b border-slate-800 pb-4">
                   <span className="font-mono text-emerald-400 font-bold text-sm">SYS 3</span>
                   <div>
                      <strong className="text-slate-100 block text-sm uppercase tracking-wider">Control (Audit)</strong>
                      <span className="text-xs text-slate-500 font-mono">Resource Allocation / Contract Distribution</span>
                   </div>
                </div>
                <div className="grid grid-cols-[1fr_4fr] gap-4 items-center mb-6 border-b border-slate-800 pb-4">
                   <span className="font-mono text-purple-400 font-bold text-sm">SYS 2</span>
                   <div>
                      <strong className="text-slate-100 block text-sm uppercase tracking-wider">Coordination</strong>
                      <span className="text-xs text-slate-500 font-mono">Data Mesh / Shared Protocols</span>
                   </div>
                </div>
                <div className="grid grid-cols-[1fr_4fr] gap-4 items-center">
                   <span className="font-mono text-primary font-bold text-sm">SYS 1</span>
                   <div>
                      <strong className="text-slate-100 block text-sm uppercase tracking-wider">Operations</strong>
                      <span className="text-xs text-slate-500 font-mono">The Small Shops / The Co-ops / The Towns</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}