'use client';
import React from 'react';
import { Users, Database, ArrowRight, ArrowUpRight, Layers } from 'lucide-react';

const modules = [
  {
    id: 'MOD-01',
    title: 'The Procurement Radar',
    role: 'System 4 (Intelligence)',
    issue: 'Capital Flight',
    description: 'An AI-driven dashboard that tracks public spending. It identifies contracts leaving the county and signals local co-ops to bid for them.',
    icon: Layers,
    color: 'text-accent'
  },
  {
    id: 'MOD-02',
    title: 'The Care Commons',
    role: 'System 1 (Operations)',
    issue: 'Extractive Agencies',
    description: 'A platform cooperative that connects carers directly to families. Higher wages for carers, lower costs for families, zero profit extraction.',
    icon: Users,
    color: 'text-primary'
  },
  {
    id: 'MOD-03',
    title: 'Lancs Data Mesh',
    role: 'System 2 (Coordination)',
    issue: 'Data Enclosure',
    description: 'A federated data layer that allows towns to share insights (traffic, energy, footfall) without handing ownership to Big Tech vendors.',
    icon: Database,
    color: 'text-blue-400'
  }
];

export default function Modules() {
  return (
    <section id="modules" className="py-24 border-t border-border relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Standardized Header Block (Identical to Missions) */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-100 mb-4">
              System Modules
            </h2>
            <p className="text-slate-400 max-w-xl text-sm md:text-base leading-relaxed">
              <span className="text-accent font-bold block mb-2 tracking-widest uppercase text-xs">// AVAILABLE_UPGRADES</span>
              Open-source tools designed to patch economic leaks.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-accent text-xs uppercase tracking-widest hover:text-white transition-colors border-b border-transparent hover:border-accent pb-1">
            View Source Code <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <div key={mod.id} className="group bg-card border border-border hover:border-accent/50 p-8 rounded-sm transition-all shadow-sm flex flex-col h-full">
              
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 bg-background border border-border rounded-sm ${mod.color}`}>
                  <mod.icon size={24} />
                </div>
                <span className="text-[10px] text-slate-500 border border-border px-2 py-1 rounded-sm">
                  {mod.id}
                </span>
              </div>

              <h3 className="text-xl font-heading font-bold text-slate-200 mb-3">{mod.title}</h3>
              
              <div className="space-y-2 mb-6 text-xs">
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"/>
                  <span>Fixes: <span className="text-slate-300">{mod.issue}</span></span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"/>
                  <span>Role: {mod.role}</span>
                </div>
              </div>

              {/* Description Text - Bumped size */}
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                {mod.description}
              </p>

              <button className="w-full py-3 bg-background border border-border hover:border-accent text-slate-300 hover:text-accent text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 font-bold">
                Deploy Module <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}