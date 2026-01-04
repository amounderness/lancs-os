'use client';

import { useEffect, useState } from 'react';
import GlitchMap from './components/GlitchMap';

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const fullText = "sudo apt-get install future";

  useEffect(() => {
    let index = 0;
    // Reset state on mount
    setTypedText("");
    setShowOutput(false);

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowOutput(true), 500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-red-600">terminal</span>
              <span className="font-mono font-bold text-lg tracking-tight text-slate-900">Lancs.OS<span className="text-slate-400">_v1.0</span></span>
            </div>
            <div className="hidden md:flex space-x-8 font-mono text-sm">
              <a href="#problem" className="text-slate-600 hover:text-red-600 transition-colors">./problem</a>
              <a href="#architecture" className="text-slate-600 hover:text-red-600 transition-colors">./vsm_stack</a>
              <a href="#modules" className="text-slate-600 hover:text-red-600 transition-colors">./modules</a>
              <a href="#join" className="text-red-600 font-bold border border-red-100 bg-red-50 px-3 py-1 rounded hover:bg-red-600 hover:text-white transition-all">sudo join</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Typography */}
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-3 py-1 font-mono text-xs rounded-full shadow-lg shadow-red-900/20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              SYSTEM_READY
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 leading-[0.95]">
              Running the <br />
              <span className="text-red-600">update</span> for<br />
              Lancashire.
            </h1>
            
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-light">
              A student-led initiative to reprogram the county’s economic operating system. We are combining <span className="font-medium text-slate-900">Cybernetics</span>, <span className="font-medium text-slate-900">Community Wealth Building</span>, and <span className="font-medium text-slate-900">AI</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-6 py-3 bg-red-600 text-white font-mono rounded-md hover:bg-red-700 transition-all shadow-lg shadow-red-200 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">deployed_code_update</span>
                <span>[Initialize Protocol]</span>
              </button>
              <button className="px-6 py-3 border border-slate-300 text-slate-700 font-mono rounded-md hover:bg-white hover:border-slate-400 transition-all flex items-center justify-center gap-2 bg-white/50">
                <span className="material-symbols-outlined text-sm">description</span>
                <span>[Read Whitepaper]</span>
              </button>
            </div>
          </div>

          {/* Right: The Terminal Interface */}
          <div className="w-full max-w-lg mx-auto relative z-10">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-slate-600 rounded-lg blur opacity-25"></div>
            
            <div className="relative bg-slate-800 rounded-lg shadow-2xl overflow-hidden border border-slate-700 font-mono text-sm leading-6">
              {/* Terminal Header */}
              <div className="bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-slate-400 text-xs flex-1 text-center pr-12">root@lancs-os:~</div>
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 text-slate-300 min-h-[350px] flex flex-col font-medium">
                <div className="mb-4">
                  <span className="text-green-400">root@lancs:~$</span> <span>{typedText}</span><span className="cursor-blink w-2 h-4 bg-slate-400 inline-block align-middle ml-1"></span>
                </div>
                
                {showOutput && (
                  <div className="space-y-2 text-xs sm:text-sm text-slate-400 animate-fade-in">
                    <div>{'>'} Reading package lists... Done</div>
                    <div>{'>'} Building dependency tree... Done</div>
                    <div>{'>'} Calculating economic upgrade... <span className="text-blue-400">Processing</span></div>
                    <br />
                    <div>{'>'} <span className="text-yellow-400">[WARN]</span> Wealth leakage detected in Sector 4.</div>
                    <div>{'>'} <span className="text-green-400">[SUCCESS]</span> Preston Model protocols loaded.</div>
                    <div>{'>'} <span className="text-green-400">[SUCCESS]</span> Stafford Beer VSM modules active.</div>
                    <br />
                    <div className="text-white">{'>'} ready to deploy civic_v2.0? [Y/n] <span className="cursor-blink w-2 h-4 bg-slate-400 inline-block align-middle ml-1"></span></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem (The Glitch) */}
      <section id="problem" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-red-600 font-mono text-sm font-bold mb-2">System Diagnostic: Fragmented</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Why Manchester booms, and we don't.</h3>
              <div className="prose text-slate-600 leading-relaxed space-y-4">
                <p>It is a question of topology. Greater Manchester is booming because of <strong className="text-slate-900">Physical Density</strong>; stacking investment, talent, and infrastructure in a tight central core.</p>
                <p>Lancashire operates as a distributed network of towns (nodes) functioning in isolation. This fragmentation causes <strong className="text-red-600">Wealth Leakage</strong>. Capital flows in but without a cohesive system to retain it, Lancashire's capital flows out to multinational shareholders.</p>
                <div className="bg-red-50 border-l-4 border-red-600 p-4 mt-6">
                  <p className="font-bold text-red-900 text-sm">THE PROPOSAL:</p>
                  <p className="text-red-800 text-sm mt-1">We cannot rebuild our geography, but we can reprogram our topology. By connecting our anchor institutions, worker cooperatives, and public services digitally, we create <strong className="uppercase">Virtual Density</strong>—a cybernetic network that rivals the big cities.</p>
                </div>
              </div>
            </div>
            
            {/* Density Map Component */}
            <div className="h-[400px] w-full">
              <GlitchMap />
            </div>
          </div>
        </div>
      </section>

      {/* The Architecture (VSM) */}
      <section id="architecture" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-red-600 font-mono text-sm font-bold mb-2">System Architecture</h2>
            <h3 className="text-3xl font-bold text-slate-900">The VSM Stack</h3>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Modeled on Stafford Beer's <span className="font-semibold text-slate-900">Viable System Model</span>. Lancs.OS is not just an web app; it is a vision for a recursive governance structure covering all 5 layers of a functioning society.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* System 1: Operations */}
            <div className="bg-white rounded-xl shadow-sm border-t-4 border-slate-400 p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-3xl text-slate-700">factory</span>
                <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500 font-bold">SYSTEM 1</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Operations</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                The <strong className="text-slate-900">"Here and Now"</strong>. Resident producers and organisations creating real value for locals.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 font-mono">
                <span className="font-bold text-slate-700">IMPLEMENTATION EXAMPLES:</span><br/>
                Networked Worker Co-ops & Guilds, Local SMEs, Councils and Community Land Trusts.
              </div>
            </div>

            {/* System 2: Coordination */}
            <div className="bg-white rounded-xl shadow-sm border-t-4 border-slate-400 p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-3xl text-slate-700">hub</span>
                <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500 font-bold">SYSTEM 2</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Coordination</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Optimising resource use and cooperation between System 1 units (E.g. Co-ops, Councils).
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 font-mono">
                <span className="font-bold text-slate-700">IMPLEMENTATION EXAMPLES:</span><br/>
                Shared Data Protocols, The 'LancsLoop' Integrated Transport Mesh & Services.
              </div>
            </div>

            {/* System 3: Control/Optimization */}
            <div className="bg-white rounded-xl shadow-sm border-t-4 border-slate-400 p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-3xl text-slate-700">tune</span>
                <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500 font-bold">SYSTEM 3</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Optimization</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Resource allocation and synergy. Ensuring the whole is greater than the sum of parts.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 font-mono">
                <span className="font-bold text-slate-700">IMPLEMENTATION EXAMPLES:</span><br/>
                The Procurement Radar (AI-assisted procurement portal to local supply chains).
              </div>
            </div>

            {/* System 4: Intelligence */}
            <div className="bg-white rounded-xl shadow-sm border-t-4 border-red-500 p-6 hover:shadow-md transition-shadow md:col-start-1 lg:col-start-1 md:col-span-1">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-3xl text-red-600">network_intelligence</span>
                <span className="text-xs font-mono bg-red-50 text-red-600 px-2 py-1 rounded font-bold">SYSTEM 4</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Intelligence</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Feeding insights back into the system, through audits, data-gathering and research.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 font-mono">
                <span className="font-bold text-slate-700">IMPLEMENTATION EXAMPLES:</span><br/>
                The Civic Sensor (Real-time volunter-citizen data collection for future need's analysis).
              </div>
            </div>

            {/* System 5: Policy */}
            <div className="bg-white rounded-xl shadow-sm border-t-4 border-red-500 p-6 hover:shadow-md transition-shadow md:col-span-1">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-3xl text-red-600">how_to_vote</span>
                <span className="text-xs font-mono bg-red-50 text-red-600 px-2 py-1 rounded font-bold">SYSTEM 5</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Identity & Policy</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Balancing the values and policy of the system (local citizens) with long-term goals.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 font-mono">
                <span className="font-bold text-slate-700">IMPLEMENTATION EXAMPLES:</span><br/>
                People's Assemblies, Participatory Budgeting & Digital Democracy.
              </div>
            </div>

            {/* Recursion Concept */}
            <div className="bg-slate-900 rounded-xl shadow-sm p-6 flex flex-col justify-center items-center text-center">
              <span className="material-symbols-outlined text-4xl text-green-400 mb-2">all_inclusive</span>
              <h4 className="text-lg font-bold text-white mb-2">Recursion</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                These 5 layers exist and cooperate at every level of society: the whole County, every individual Town, Institution and Co-operative within it.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
            <span className="material-symbols-outlined text-slate-400">dns</span> Active Modules
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Module A */}
            <div className="border border-slate-200 rounded-lg p-6 hover:border-red-500 transition-colors relative">
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="animate-pulse w-2 h-2 rounded-full bg-green-500"></span>
                <span className="font-mono text-xs text-green-600 font-bold">RUNNING</span>
              </div>
              <div className="h-40 w-full bg-slate-100 rounded mb-6 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-slate-300">group_work</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-mono">Preston Digital Foundation</h3>
              <p className="text-slate-600 mb-4">An incubator for worker-owned tech cooperatives. Building the tools for the Preston Model.</p>
            </div>
            {/* Module B */}
            <div className="border border-slate-200 rounded-lg p-6 hover:border-yellow-500 transition-colors relative">
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="animate-pulse w-2 h-2 rounded-full bg-yellow-500"></span>
                <span className="font-mono text-xs text-yellow-600 font-bold">COMPILING...</span>
              </div>
              <div className="h-40 w-full bg-slate-100 rounded mb-6 flex items-center justify-center">
                 <span className="material-symbols-outlined text-4xl text-slate-300">directions_bus</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-mono">LancsLoop</h3>
              <p className="text-slate-600 mb-4">An integrated transport mesh proposal. AI-optimized bus routes based on real-time citizen demand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="join" className="bg-slate-900 text-white py-16 border-t-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-red-500">security</span>
                <span className="font-mono font-bold text-xl">Lancs.OS</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-sm">Lancs.OS is an Open Cooperative. Owned by members, not shareholders.</p>
            </div>
            <div className="font-mono text-sm text-slate-400">
              <p>© 2026 Lancs.OS Initiative.</p>
              <p className="mt-2">System Status: <span className="text-green-500">OPERATIONAL</span></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}