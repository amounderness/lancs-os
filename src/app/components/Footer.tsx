'use client';
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-24 bg-background border-t border-border text-center relative z-10">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* NEW QUOTE */}
        <h3 className="font-heading text-2xl md:text-3xl text-slate-200 mb-6 italic">
          "Deep roots. Wide networks."
        </h3>
        
        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-12 max-w-2xl mx-auto">
          Building a Civic Operating System for Lancashire.<br/>
          From the Ribble Valley to the Cloud.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-sm font-bold text-slate-500 uppercase tracking-widest">
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          <a href="#" className="hover:text-primary transition-colors">Discord</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
          <a href="#" className="hover:text-primary transition-colors">Sign-Up</a>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border">
          <span className="text-xs md:text-sm text-slate-600 font-bold uppercase tracking-widest">
            EST. 2026 <span className="text-primary mx-2">//</span> PRESTON, LANCASHIRE <span className="text-primary mx-2">//</span> CYBER DISTRIBUTISM
          </span>
        </div>
      </div>
    </footer>
  );
}