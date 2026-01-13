'use client';
import { Scale, ArrowRight, AlertTriangle } from 'lucide-react';

export default function OwnershipAudit() {
  return (
    <div className="border border-border bg-card shadow-2xl relative overflow-hidden group max-w-lg mx-auto">
      
      <div className="bg-slate-900/50 p-4 border-b border-border flex justify-between items-center">
         <div className="flex items-center gap-2">
            <Scale size={16} className="text-slate-400" />
            <span className="font-mono text-xs text-slate-300 font-bold uppercase tracking-wider">Property Audit</span>
         </div>
         {/* CHANGED: Uses primary/10 for bg and text-primary for text. No more red. */}
         <div className="flex items-center gap-2 px-2 py-1 bg-primary/10 border border-primary/20 rounded-sm">
            <AlertTriangle size={12} className="text-primary" />
            <span className="font-mono text-[10px] text-primary uppercase tracking-widest">Critical</span>
         </div>
      </div>

      <div className="p-8">
        <div className="mb-2">
           <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Est. Annual Leakage</span>
        </div>
        <div className="flex items-baseline gap-2 mb-6">
           <span className="text-5xl font-mono font-bold text-slate-100 tracking-tighter">£4.2bn</span>
           <span className="text-slate-500 font-mono text-sm">/ year</span>
        </div>

        <p className="text-sm text-slate-400 mb-8 font-heading leading-relaxed">
          Capital generated in Lancashire that is extracted by non-local platforms and vendors.
        </p>

        {/* Visual Bar */}
        <div className="w-full h-10 flex mb-8 border border-slate-700 relative bg-slate-900">
           {/* Local */}
           <div className="h-full w-[25%] bg-emerald-900/40 border-r border-slate-700 flex items-center justify-center relative">
              <span className="font-mono text-[10px] text-emerald-500 font-bold tracking-tight z-10">RETAINED</span>
           </div>
           {/* Leaked - CHANGED: Gradient now uses primary (orange) instead of red */}
           <div className="h-full w-[75%] bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(234,88,12,0.05)_10px,rgba(234,88,12,0.05)_20px)] flex items-center justify-center">
              <span className="font-mono text-[10px] text-slate-600 font-bold tracking-tight">ABSENTEE OWNED (75%)</span>
           </div>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-border">
          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
            Recommended Action:
          </span>
          <button className="text-primary hover:text-white text-xs font-mono font-bold flex items-center gap-2 transition-colors uppercase tracking-widest">
            Initialize Recapture <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}