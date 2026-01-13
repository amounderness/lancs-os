'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ScrollText, ArrowLeft, BookOpen, Network, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Blueprint() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white font-sans">
      
      <div className="fixed inset-0 bg-grid-paper pointer-events-none z-0" />
      <Navbar />

      {/* HEADER */}
      <div className="pt-32 pb-16 border-b border-border relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-mono text-xs uppercase tracking-widest mb-8 transition-colors">
            <ArrowLeft size={14} /> Return to OS
          </Link>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-slate-100 mb-6">
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
            <a href="#intro" className="block font-mono text-sm text-slate-400 hover:text-white transition-colors">01. Introduction</a>
            <a href="#industrialism" className="block font-mono text-sm text-slate-400 hover:text-white transition-colors">02. Digital Industrialism</a>
            <a href="#nexus" className="block font-mono text-sm text-slate-400 hover:text-white transition-colors">03. The Cyber-Nexus</a>
            <a href="#vsm" className="block font-mono text-sm text-slate-400 hover:text-white transition-colors">04. The VSM Stack</a>
          </div>
        </div>

        {/* MAIN TEXT */}
        <div className="prose prose-invert prose-lg prose-slate font-serif">
          
          {/* 01 INTRO */}
          <div id="intro" className="mb-20">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-widest block mb-2">01. Introduction</span>
            <h2 className="text-3xl font-heading font-bold text-slate-100 mt-0">The Silicon and the Soil.</h2>
            <p>
              We stand at a crossroads. To one side is <strong>Global Digital Capital</strong>—efficient, extractive, and rootless. 
              To the other is <strong>Local Stagnation</strong>—rooted, culturally rich, but economically fragile.
            </p>
            <p>
              Lancs.OS exists to bridge this divide. We refuse the choice between "Smart City" surveillance and luddite retreat. 
              We propose a third way: <strong>Recursive Societal Security</strong>. A model where high-tech coordination tools are owned 
              by the communities they serve.
            </p>
          </div>

          {/* 02 THE ENEMY */}
          <div id="industrialism" className="mb-20 p-8 border border-border bg-card/50 rounded-sm">
            <div className="flex items-center gap-3 mb-4 text-destructive">
               <Shield size={24} />
               <h3 className="text-xl font-heading font-bold text-slate-100 m-0">02. The Diagnosis: Digital Industrialism</h3>
            </div>
            <p className="text-slate-300 text-base leading-relaxed">
              Just as the Industrial Revolution enclosed the commons, the Digital Revolution is enclosing our data and attention. 
              When a Lancashire council uses software owned by a US giant, they are not just buying a tool; they are paying a 
              perpetual rent to a foreign landlord. This is <strong>Feudalism v2.0</strong>.
            </p>
          </div>

          {/* 03 THE SOLUTION */}
          <div id="nexus" className="mb-20">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-widest block mb-2">03. The Theory</span>
            <h2 className="text-3xl font-heading font-bold text-slate-100 mt-0">The Cyber-Distributist Nexus.</h2>
            <p>
              Distributism (the widespread ownership of property) fails without coordination. 
              Cybernetics (the science of control) becomes tyrannical without distributed ownership.
            </p>
            <p>
              By merging them, we get:
            </p>
            <ul className="list-none pl-0 space-y-6 my-8">
              <li className="flex gap-4">
                <div className="min-w-[40px] h-[40px] border border-border bg-background flex items-center justify-center text-primary font-mono font-bold">A</div>
                <div>
                  <strong className="text-slate-100 block font-heading">Subsidiarity (System 1)</strong>
                  <span className="text-base">Decisions are made locally. The "Node" (Co-op/Town) is the primary unit of reality, not the "State."</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="min-w-[40px] h-[40px] border border-border bg-background flex items-center justify-center text-emerald-500 font-mono font-bold">B</div>
                <div>
                  <strong className="text-slate-100 block font-heading">Federation (System 2)</strong>
                  <span className="text-base">Nodes connect via protocols, not management hierarchies. They share data to prevent oscillation (waste), but retain autonomy.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* 04 THE VSM */}
          <div id="vsm" className="mb-20">
             <span className="font-mono text-xs text-slate-500 uppercase tracking-widest block mb-2">04. The Stack</span>
             <h2 className="text-3xl font-heading font-bold text-slate-100 mt-0">The Viable System Model (Applied).</h2>
             
             <div className="border border-border bg-card p-6 my-8 not-prose">
                <div className="grid grid-cols-[1fr_4fr] gap-4 items-center mb-6 border-b border-slate-800 pb-4">
                   <span className="font-mono text-red-400 font-bold">SYS 5</span>
                   <div>
                      <strong className="text-slate-100 block text-sm uppercase tracking-wider">Identity (Policy)</strong>
                      <span className="text-xs text-slate-500 font-mono">The Manifesto / The Constitution</span>
                   </div>
                </div>
                <div className="grid grid-cols-[1fr_4fr] gap-4 items-center mb-6 border-b border-slate-800 pb-4">
                   <span className="font-mono text-blue-400 font-bold">SYS 4</span>
                   <div>
                      <strong className="text-slate-100 block text-sm uppercase tracking-wider">Intelligence (Future)</strong>
                      <span className="text-xs text-slate-500 font-mono">The Procurement Radar / Market Analysis</span>
                   </div>
                </div>
                <div className="grid grid-cols-[1fr_4fr] gap-4 items-center mb-6 border-b border-slate-800 pb-4">
                   <span className="font-mono text-emerald-400 font-bold">SYS 3</span>
                   <div>
                      <strong className="text-slate-100 block text-sm uppercase tracking-wider">Control (Now)</strong>
                      <span className="text-xs text-slate-500 font-mono">Resource Allocation / Contract Distribution</span>
                   </div>
                </div>
                <div className="grid grid-cols-[1fr_4fr] gap-4 items-center mb-6 border-b border-slate-800 pb-4">
                   <span className="font-mono text-purple-400 font-bold">SYS 2</span>
                   <div>
                      <strong className="text-slate-100 block text-sm uppercase tracking-wider">Coordination</strong>
                      <span className="text-xs text-slate-500 font-mono">Data Mesh / Shared Protocols</span>
                   </div>
                </div>
                <div className="grid grid-cols-[1fr_4fr] gap-4 items-center">
                   <span className="font-mono text-primary font-bold">SYS 1</span>
                   <div>
                      <strong className="text-slate-100 block text-sm uppercase tracking-wider">Operations</strong>
                      <span className="text-xs text-slate-500 font-mono">The Co-ops / The Towns / The Workers</span>
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