'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, LayoutGrid, Users, BookOpen, ChevronDown } from 'lucide-react';

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
              The Civic Operating System Project
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider font-bold text-slate-400">
          
          <Link href="/the-os" className="hover:text-white transition-colors flex items-center gap-2 group">
            <LayoutGrid size={14} className="group-hover:text-primary"/>
            THE WORKBENCH
          </Link>
          
          <Link href="/the-blueprint" className="hover:text-white transition-colors flex items-center gap-2 group">
            <BookOpen size={14} className="group-hover:text-primary"/>
            THE LIBRARY
          </Link>

          {/* Simple "Connect" Link for now - leading to footer/external */}
          <a href="#footer" className="hover:text-white transition-colors flex items-center gap-2 group">
            <Users size={14} className="group-hover:text-primary"/>
            COMMUNITY
          </a>
          
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}