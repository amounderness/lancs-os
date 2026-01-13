'use client';
import React from 'react';
import { ScrollText, Scale, Cpu, Network } from 'lucide-react';

export default function Manifesto() {
  return (
    <section id="manifesto" className="py-32 border-t border-border relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="flex items-center gap-3 mb-8 text-primary">
          <ScrollText size={24} />
          <span className="font-mono font-bold tracking-widest uppercase text-sm">The Theory</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight text-slate-100">
          The Cyber-Distributist <br/>
          <span className="text-accent">Nexus.</span>
        </h2>

        <div className="prose prose-invert prose-lg text-slate-300 mb-16 max-w-none font-serif leading-relaxed">
          <p>
            We face a divergence between our accelerating digital capabilities and our stagnating social structures. 
            We call this <strong className="text-white">Digital Industrialism</strong>: a system where Big Tech acts as the new feudal lord, 
            extracting data and wealth from our communities.
          </p>
          <p>
            The solution is not to retreat from technology, but to restructure it. We propose 
            <strong className="text-primary"> Digital Distributism</strong>.
          </p>
          <p>
            By merging the economic philosophy of widespread ownership with the management science of <strong>Stafford Beer’s Viable System Model (VSM)</strong>, 
            we can build a federated network of cooperatives where workers maintain direct control over their tools, data, and future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Changed: bg-card instead of transparent/slate-900/40 */}
          <div className="p-6 border border-border bg-card rounded-sm shadow-sm">
            <div className="w-10 h-10 bg-background text-primary flex items-center justify-center rounded-sm mb-4 border border-border">
              <Scale size={20} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-2 text-slate-200">Subsidiarity</h3>
            <p className="font-mono text-xs text-slate-500 leading-relaxed">
              Decisions must be made at the most local level possible. In VSM terms, this is <strong>System 1 Autonomy</strong>.
            </p>
          </div>

          <div className="p-6 border border-border bg-card rounded-sm shadow-sm">
            <div className="w-10 h-10 bg-background text-accent flex items-center justify-center rounded-sm mb-4 border border-border">
              <Network size={20} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-2 text-slate-200">Federation</h3>
            <p className="font-mono text-xs text-slate-500 leading-relaxed">
              Small units are fragile alone. By connecting via a <strong>Cybernetic Hub</strong> (System 2 & 3), we gain strength without centralization.
            </p>
          </div>

          <div className="p-6 border border-border bg-card rounded-sm shadow-sm">
            <div className="w-10 h-10 bg-background text-blue-500 flex items-center justify-center rounded-sm mb-4 border border-border">
              <Cpu size={20} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-2 text-slate-200">Agentic AI</h3>
            <p className="font-mono text-xs text-slate-500 leading-relaxed">
              Using AI to reduce the cost of coordination. <strong>Algorithmic Management</strong> owned by the workers, not the boss.
            </p>
          </div>

        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-slate-400 border-b-2 border-primary/50 font-mono font-bold hover:text-white hover:border-primary transition-colors pb-1 uppercase tracking-widest text-sm">
             Read the Academic Framework (PDF)
          </a>
        </div>

      </div>
    </section>
  );
}