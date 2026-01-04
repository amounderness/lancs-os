'use client';

import { useEffect, useState } from 'react';

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
              <a href="#glitch" className="text-slate-600 hover:text-red-600 transition-colors">./problem</a>
              <a href="#architecture" className="text-slate-600 hover:text-red-600 transition-colors">./architecture</a>
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
                <span>[ Execute Patch ]</span>
              </button>
              <button className="px-6 py-3 border border-slate-300 text-slate-700 font-mono rounded-md hover:bg-white hover:border-slate-400 transition-all flex items-center justify-center gap-2 bg-white/50">
                <span className="material-symbols-outlined text-sm">description</span>
                <span>[ Read Whitepaper ]</span>
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
              <div className="p-6 text-slate-300 min-h-[340px] flex flex-col font-medium">
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
      <section id="glitch" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-red-600 font-mono text-sm font-bold mb-2">Error 404: Economy Fragmented</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Why Manchester wins, and we don't.</h3>
              <div className="prose text-slate-600 leading-relaxed space-y-4">
                <p>It's a concept called <strong className="text-slate-900">Stacking Bonuses</strong>. Manchester succeeds because it stacks density, investment, and talent in one central core.</p>
                <p>Lancashire is different. We are a distributed network of towns functioning in isolation. This fragmentation causes <strong className="text-red-600">Wealth Leakage</strong>. Capital flows in, but immediately flows out to multinational shareholders instead of circulating locally.</p>
                <div className="bg-red-50 border-l-4 border-red-600 p-4 mt-6">
                  <p className="font-bold text-red-900 text-sm">THE FIX:</p>
                  <p className="text-red-800 text-sm mt-1">We don't need to build skyscrapers. We need to build a <strong>Cybernetic Network</strong>. By connecting our anchor institutions digitally, we create a virtual density that rivals the big cities.</p>
                </div>
              </div>
            </div>
            {/* Visual Placeholder for Glitch Map */}
            <div className="relative h-80 bg-slate-50 border border-slate-200 rounded-lg overflow-hidden flex items-center justify-center p-8">
               <div className="text-center">
                  <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">hub</span>
                  <p className="font-mono text-xs text-slate-400 uppercase">Network Topology Visualization</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Architecture */}
      <section id="architecture" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-red-600 font-mono text-sm font-bold mb-2">System Architecture</h2>
            <h3 className="text-3xl font-bold text-slate-900">The VSM Stack</h3>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Modeled on Stafford Beer's Viable System Model. We are building three digital layers to coordinate the county's real-world economy.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Layer 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 flex gap-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 flex-shrink-0">
                <span className="material-symbols-outlined text-3xl">radar</span>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-bold text-slate-900">Layer 1: The Economic Grid</h4>
                  <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">System 1-3</span>
                </div>
                <p className="text-slate-600">A <strong className="text-slate-900">Procurement Radar</strong> that maps every pound spent by our Anchor Institutions. It detects wealth leakage and automatically matches contracts to local worker-cooperatives.</p>
              </div>
            </div>
            
            {/* Layer 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 flex gap-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 flex-shrink-0">
                <span className="material-symbols-outlined text-3xl">wallet</span>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-bold text-slate-900">Layer 2: The Social Sensor</h4>
                  <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">System 4</span>
                </div>
                <p className="text-slate-600">The <strong className="text-slate-900">Civic Wallet</strong>. Data sovereignty for citizens. A localized digital identity that allows residents to accrue "Civic Credits" for volunteering and shopping local.</p>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 flex gap-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 flex-shrink-0">
                <span className="material-symbols-outlined text-3xl">how_to_vote</span>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-bold text-slate-900">Layer 3: The Political Kernel</h4>
                  <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">System 5</span>
                </div>
                <p className="text-slate-600"><strong className="text-slate-900">Participatory Democracy</strong> tools. Not just voting every 4 years, but real-time allocation of budget surpluses. The "Brain" of the county.</p>
              </div>
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