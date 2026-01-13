'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, LayoutGrid, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background border-b border-border py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-card border border-border rounded-sm flex items-center justify-center text-primary group-hover:border-primary transition-colors">
            <LayoutGrid size={18} />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-slate-100 leading-none tracking-tight">Lancs.OS</span>
            <span className="font-mono text-[10px] text-slate-500 group-hover:text-primary tracking-widest uppercase mt-1">
              Cyber Distributism - Building Freedom
            </span>
          </div>
        </Link>

        {/* Desktop Menu - UPDATED LINKS */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider">
          <Link href="/the-os" className="text-slate-400 hover:text-white transition-colors">
            // THE OS
          </Link>
          <Link href="/the-blueprint" className="text-slate-400 hover:text-white transition-colors">
            // THE BLUEPRINT
          </Link>
          
          <button className="px-4 py-2 bg-secondary border border-border hover:border-primary text-slate-300 hover:text-primary rounded-sm transition-all flex items-center gap-2">
            <Terminal size={14} />
            <span>CONNECT</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}