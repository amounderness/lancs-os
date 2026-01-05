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
                <p>It is a question of topology, not local administrative boundaries. Greater Manchester is booming because of <strong className="text-slate-900">Physical Density</strong>; stacking investment, talent, and infrastructure in a tight urban core is a competitive advantage.</p>
                <p>Lancashire operates as a distributed network of towns (nodes) functioning in isolation. This fragmentation causes <strong className="text-red-600">Wealth Leakage</strong>. Capital flows in with business and investment, but without a cohesive system to retain and distribute it, Lancashire's wealth flows back out and locals suffer as a result.</p>
                <div className="bg-red-50 border-l-4 border-red-600 p-4 mt-6">
                  <p className="font-bold text-red-900 text-sm">THE PROPOSAL:</p>
                  <p className="text-red-800 text-sm mt-1">We cannot rebuild our geography, but we can reprogram our topology. By connecting our anchor institutions, worker cooperatives, and public services digitally, we create <strong className="uppercase">Virtual Density</strong>; a cybernetic network that rivals the big cities and empowers local communities.</p>
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
              Modeled on Stafford Beer's <span className="font-semibold text-slate-900">Viable System Model</span>. Lancs.OS is a recursive governance structure, providing tools and protocols to support all 5 layers of a functioning society.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* System 1: Operations */}
            <div className="group bg-white rounded-xl shadow-sm border-t-4 border-red-600 p-6 hover:shadow-md transition-all duration-500 relative overflow-hidden h-64">
              {/* Theory Layer */}
              <div className="absolute inset-0 p-6 transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-3xl text-slate-700">factory</span>
                  <span className="text-[10px] font-mono bg-green-50 text-green-700 px-2 py-1 rounded font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> SUPPORTING
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Sys 1: Operations</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The "Here and Now". Supporting the creation of base-level economic units.
                </p>
                <div className="mt-auto text-xs font-mono text-red-500 flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">visibility</span> HOVER FOR REALITY
                </div>
              </div>
              {/* Reality Layer */}
              <div className="absolute inset-0 p-6 bg-slate-900 text-white transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 flex flex-col justify-center">
                <div className="text-xs font-mono text-green-400 mb-2"> EXAMPLE.EXE</div>
                <h4 className="text-lg font-bold mb-2">The Worker Co-op</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                   A local bakery in Burnley. Instead of distant shareholders taking the profit, the bakers own the business. Lancs.OS provides legal templates to help them start up.
                </p>
              </div>
            </div>

            {/* System 2: Coordination */}
            <div className="group bg-white rounded-xl shadow-sm border-t-4 border-red-600 p-6 hover:shadow-md transition-all duration-500 relative overflow-hidden h-64">
              {/* Theory Layer */}
              <div className="absolute inset-0 p-6 transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-3xl text-slate-700">hub</span>
                  <span className="text-[10px] font-mono bg-blue-50 text-blue-700 px-2 py-1 rounded font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> STABILIZING
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Sys 2: Coordination</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                   Tools to support cooperation and prevent conflict between units.
                </p>
                <div className="mt-auto text-xs font-mono text-red-500 flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">visibility</span> HOVER FOR REALITY
                </div>
              </div>
              {/* Reality Layer */}
              <div className="absolute inset-0 p-6 bg-slate-900 text-white transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 flex flex-col justify-center">
                <div className="text-xs font-mono text-blue-400 mb-2"> EXAMPLE.EXE</div>
                <h4 className="text-lg font-bold mb-2">The Shared Logistics</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                   The Baker needs a van. A local Brewer needs a van. The 'LancsLoop' app creates a schedule so they can share one vehicle, cutting costs, emissions and traffic.
                </p>
              </div>
            </div>

            {/* System 3: Optimization */}
            <div className="group bg-white rounded-xl shadow-sm border-t-4 border-red-600 p-6 hover:shadow-md transition-all duration-500 relative overflow-hidden h-64">
              {/* Theory Layer */}
              <div className="absolute inset-0 p-6 transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-3xl text-slate-700">tune</span>
                  <span className="text-[10px] font-mono bg-purple-50 text-purple-700 px-2 py-1 rounded font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> OPTIMIZING
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Sys 3: Optimization</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Auditing the "Now" to allocate resources to benefit the whole.
                </p>
                <div className="mt-auto text-xs font-mono text-red-500 flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">visibility</span> HOVER FOR REALITY
                </div>
              </div>
              {/* Reality Layer */}
              <div className="absolute inset-0 p-6 bg-slate-900 text-white transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 flex flex-col justify-center">
                <div className="text-xs font-mono text-purple-400 mb-2"> EXAMPLE.EXE</div>
                <h4 className="text-lg font-bold mb-2">The Contract</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                   The Council needs bread for schools. The 'Procurement Radar' (AI) flags the Burnley Co-op Baker as the best option, ensuring tax money stays in Lancashire.
                </p>
              </div>
            </div>

            {/* System 4: Intelligence */}
            <div className="group bg-white rounded-xl shadow-sm border-t-4 border-red-600 p-6 hover:shadow-md transition-all duration-500 relative overflow-hidden h-64 md:col-start-1 lg:col-start-1">
              {/* Theory Layer */}
              <div className="absolute inset-0 p-6 transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-3xl text-slate-700">network_intelligence</span>
                  <span className="text-[10px] font-mono bg-yellow-50 text-yellow-700 px-2 py-1 rounded font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> SCANNING
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Sys 4: Intelligence</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The "There and Then". Creating feedback loops for environmental scanning and future planning.
                </p>
                <div className="mt-auto text-xs font-mono text-red-500 flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">visibility</span> HOVER FOR REALITY
                </div>
              </div>
              {/* Reality Layer */}
              <div className="absolute inset-0 p-6 bg-slate-900 text-white transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 flex flex-col justify-center">
                <div className="text-xs font-mono text-yellow-400 mb-2"> EXAMPLE.EXE</div>
                <h4 className="text-lg font-bold mb-2">The Civic Sensor</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                   University students use open data to map a "Food Desert" in Accrington, predicting a rise in hunger over the next 3 years if no action is taken.
                </p>
              </div>
            </div>

            {/* System 5: Policy */}
            <div className="group bg-white rounded-xl shadow-sm border-t-4 border-red-600 p-6 hover:shadow-md transition-all duration-500 relative overflow-hidden h-64">
              {/* Theory Layer */}
              <div className="absolute inset-0 p-6 transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-3xl text-slate-700">how_to_vote</span>
                  <span className="text-[10px] font-mono bg-red-50 text-red-700 px-2 py-1 rounded font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> GOVERNING
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Sys 5: Identity</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                   Balancing the system. Tools for defining collective identity and long-term goals.
                </p>
                <div className="mt-auto text-xs font-mono text-red-500 flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">visibility</span> HOVER FOR REALITY
                </div>
              </div>
              {/* Reality Layer */}
              <div className="absolute inset-0 p-6 bg-slate-900 text-white transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 flex flex-col justify-center">
                <div className="text-xs font-mono text-red-400 mb-2"> EXAMPLE.EXE</div>
                <h4 className="text-lg font-bold mb-2">The Assembly</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                   A Citizens' Assembly reviews the data. They vote to fund a new Community Supermarket in Accrington, declaring Lancashire as a "Zero Hunger" county.
                </p>
              </div>
            </div>

            {/* Recursion Concept */}
            <div className="bg-slate-900 rounded-xl shadow-sm p-6 flex flex-col justify-center items-center text-center border-t-4 border-green-500">
              <span className="material-symbols-outlined text-4xl text-green-400 mb-2">all_inclusive</span>
              <h4 className="text-lg font-bold text-white mb-2">Recursion</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                The VSM is fractal. These 5 layers exist and cooperate at every level: the County, the Town, and the individual Co-operative.
              </p>
            </div>

          </div>
        </div>
      </section>

{/* ... previous sections ... */}

{/* Modules Section */}
      <section id="modules" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center justify-center gap-3">
              <span className="material-symbols-outlined text-slate-400">extension</span> System Modules
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Lancs.OS is modular. We install applications to solve specific regional problems. Some are already running (Real); others are in development (Proposed).
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* MODULE 1: THE PRESTON MODEL (Core Kernel) */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold font-mono">PM</div>
                  <span className="font-bold text-slate-700">The Preston Model</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-100 px-2 py-1 rounded border border-blue-200">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  <span className="text-[10px] font-mono font-bold text-blue-700 uppercase">Status: Core Kernel</span>
                </div>
              </div>

              {/* Visual: The Containment Shield */}
              <div className="h-64 bg-slate-900 relative overflow-hidden border-b border-slate-200">
                 <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 400 200">
                       {/* The Local Boundary (Shield) */}
                       <circle cx="200" cy="100" r="80" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="4 4" className="opacity-60" />
                       <text x="200" y="190" textAnchor="middle" className="text-[8px] font-mono fill-red-400">LOCAL_ECONOMY_BOUNDARY</text>

                       {/* Anchor Institutions (The Core) */}
                       <circle cx="200" cy="100" r="20" className="fill-red-900 stroke-red-500" strokeWidth="2" />
                       <text x="200" y="104" textAnchor="middle" className="text-[8px] font-mono fill-white font-bold">ANCHORS</text>

                       {/* Wealth Particles (Bouncing off the walls) */}
                       <circle r="4" fill="#4ade80">
                          {/* Path moves out to edge, then bounces back in */}
                          <animateMotion dur="4s" repeatCount="indefinite" path="M200 100 L 270 100 L 200 100" />
                       </circle>
                       <circle r="4" fill="#4ade80">
                          <animateMotion dur="3.5s" repeatCount="indefinite" path="M200 100 L 140 160 L 200 100" />
                       </circle>
                       <circle r="4" fill="#4ade80">
                          <animateMotion dur="5s" repeatCount="indefinite" path="M200 100 L 130 100 L 200 100" />
                       </circle>
                       
                       {/* "Blocked" Exit Arrows */}
                       <path d="M 285 100 L 320 100" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" className="opacity-30" />
                       <line x1="300" y1="90" x2="310" y2="110" stroke="#ef4444" strokeWidth="2" />
                       <line x1="310" y1="90" x2="300" y2="110" stroke="#ef4444" strokeWidth="2" />
                    </svg>
                 </div>
                 <div className="absolute bottom-4 left-4">
                  <div className="text-xs font-mono text-slate-400 bg-slate-800/80 backdrop-blur px-2 py-1 rounded border border-slate-700">
                    <div>Wealth_Leakage: <span className="text-red-400 font-bold">BLOCKED</span></div>
                    <div>Local_Spend: <span className="text-green-400 font-bold">RECIRCULATING</span></div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  <strong className="text-slate-900">Community Wealth Building Protocol.</strong> The underlying economic logic. By redirecting anchor institution spending back into the local economy, we stop wealth leakage. This protocol is ready to be flashed to other Lancashire councils.
                </p>
                <div className="flex gap-3 text-xs font-mono text-slate-500">
                  <span className="bg-slate-100 px-2 py-1 rounded">#CircularEconomy</span>
                  <span className="bg-slate-100 px-2 py-1 rounded">#AnchorInstitutions</span>
                </div>
              </div>
            </div>

            {/* MODULE 2: PCDN (The Enabler) */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center text-white font-bold font-mono">CDN</div>
                  <span className="font-bold text-slate-700 text-sm">Preston Cooperative Development Network</span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-2 py-1 rounded border border-green-200">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[10px] font-mono font-bold text-green-700 uppercase">Status: Active</span>
                </div>
              </div>

              {/* Visual: Circuit Board (Kept as requested) */}
              <div className="h-64 bg-slate-900 relative overflow-hidden border-b border-slate-200">
                 <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #1e293b 25%, #1e293b 26%, transparent 27%, transparent 74%, #1e293b 75%, #1e293b 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #1e293b 25%, #1e293b 26%, transparent 27%, transparent 74%, #1e293b 75%, #1e293b 76%, transparent 77%, transparent)', backgroundSize: '30px 30px' }}></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 400 200">
                       {/* Central Processor */}
                       <rect x="160" y="80" width="80" height="40" rx="4" className="fill-blue-900 stroke-blue-500" strokeWidth="2" />
                       <text x="200" y="104" textAnchor="middle" className="text-[12px] font-mono fill-white font-bold">PCDN</text>
                       
                       {/* Circuit Lines */}
                       <path d="M 200 80 L 200 40 L 100 40 L 100 60" fill="none" stroke="#60a5fa" strokeWidth="2" />
                       <path d="M 200 120 L 200 160 L 300 160 L 300 140" fill="none" stroke="#60a5fa" strokeWidth="2" />
                       <path d="M 160 100 L 120 100" fill="none" stroke="#60a5fa" strokeWidth="2" />
                       <path d="M 240 100 L 280 100" fill="none" stroke="#60a5fa" strokeWidth="2" />

                       {/* Component Nodes */}
                       <rect x="80" y="60" width="40" height="20" rx="2" className="fill-slate-800 stroke-green-500" strokeWidth="2" />
                       <text x="100" y="73" textAnchor="middle" className="text-[8px] font-mono fill-green-400">STARTUP</text>

                       <rect x="280" y="120" width="40" height="20" rx="2" className="fill-slate-800 stroke-green-500" strokeWidth="2" />
                       <text x="300" y="133" textAnchor="middle" className="text-[8px] font-mono fill-green-400">FUNDS</text>
                       
                       <rect x="80" y="90" width="40" height="20" rx="2" className="fill-slate-800 stroke-green-500" strokeWidth="2" />
                       <text x="100" y="103" textAnchor="middle" className="text-[8px] font-mono fill-green-400">LEGAL</text>
                       
                       <rect x="280" y="90" width="40" height="20" rx="2" className="fill-slate-800 stroke-green-500" strokeWidth="2" />
                       <text x="300" y="103" textAnchor="middle" className="text-[8px] font-mono fill-green-400">GOV</text>

                       <circle r="2" fill="white">
                          <animateMotion dur="2s" repeatCount="indefinite" path="M 200 80 L 200 40 L 100 40 L 100 60" />
                       </circle>
                    </svg>
                 </div>
                 <div className="absolute bottom-4 left-4">
                  <div className="text-xs font-mono text-slate-400 bg-slate-800/80 backdrop-blur px-2 py-1 rounded border border-slate-700">
                    <div>Structure: <span className="text-blue-400 font-bold">STABLE</span></div>
                    <div>Support: <span className="text-blue-400 font-bold">ACTIVE</span></div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  <strong className="text-slate-900">The Installation Wizard.</strong> The Preston Cooperative Development Network provides the technical support, governance workshops, and funding to help new groups (like the PDF) incorporate and survive.
                </p>
                <div className="flex gap-3 text-xs font-mono text-slate-500">
                  <span className="bg-slate-100 px-2 py-1 rounded">#Incubator</span>
                  <span className="bg-slate-100 px-2 py-1 rounded">#OpenSociety</span>
                </div>
              </div>
            </div>

            {/* MODULE 3: LANCSLOOP (Transport) */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center text-white font-bold font-mono">LL</div>
                  <span className="font-bold text-slate-700">LancsLoop</span>
                </div>
                <div className="flex items-center gap-2 bg-yellow-50 px-2 py-1 rounded border border-yellow-200">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                  <span className="text-[10px] font-mono font-bold text-yellow-700 uppercase">Status: Proposed</span>
                </div>
              </div>

              {/* Visual: The Tube Map (Complex Mesh) */}
              <div className="h-64 bg-slate-900 relative overflow-hidden border-b border-slate-200">
                 <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 400 200">
                       {/* Red Line */}
                       <path d="M 50 120 L 100 120 L 140 80 L 260 80 L 300 40 L 350 40" fill="none" stroke="#ef4444" strokeWidth="3" />
                       {/* Blue Line */}
                       <path d="M 80 180 L 120 140 L 140 80 L 140 40" fill="none" stroke="#3b82f6" strokeWidth="3" />
                       {/* Yellow Line */}
                       <path d="M 300 180 L 260 140 L 260 80 L 220 40" fill="none" stroke="#eab308" strokeWidth="3" />
                       
                       {/* Interchanges (Stations) */}
                       <circle cx="140" cy="80" r="6" fill="white" stroke="#slate-900" strokeWidth="2" />
                       <circle cx="260" cy="80" r="6" fill="white" stroke="#slate-900" strokeWidth="2" />
                       <circle cx="100" cy="120" r="4" fill="#slate-900" stroke="#ef4444" strokeWidth="2" />
                       <circle cx="300" cy="40" r="4" fill="#slate-900" stroke="#ef4444" strokeWidth="2" />

                       {/* Moving Packets (Buses/Data) */}
                       <circle r="3" fill="white">
                          <animateMotion dur="6s" repeatCount="indefinite" path="M 50 120 L 100 120 L 140 80 L 260 80 L 300 40 L 350 40" />
                       </circle>
                       <circle r="3" fill="white">
                          <animateMotion dur="5s" repeatCount="indefinite" path="M 80 180 L 120 140 L 140 80 L 140 40" />
                       </circle>
                    </svg>
                 </div>
                 <div className="absolute bottom-4 left-4">
                  <div className="text-xs font-mono text-slate-400 bg-slate-800/80 backdrop-blur px-2 py-1 rounded border border-slate-700">
                    <div>Route_Opt: <span className="text-yellow-400 font-bold">AI_ACTIVE</span></div>
                    <div>Ownership: <span className="text-yellow-400 font-bold">PUBLIC</span></div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  <strong className="text-slate-900">Integrated Transport Mesh.</strong> A proposal for a publicly owned transit network enhanced with AI. Dynamically routing buses to bridge the gap between rural villages and urban rail hubs.
                </p>
                <div className="flex gap-3 text-xs font-mono text-slate-500">
                  <span className="bg-slate-100 px-2 py-1 rounded">#PublicOwnership</span>
                  <span className="bg-slate-100 px-2 py-1 rounded">#AI_Routing</span>
                </div>
              </div>
            </div>

            {/* MODULE 4: PRESTON DIGITAL FOUNDATION (The Outcome) */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center text-white font-bold font-mono">PDF</div>
                  <span className="font-bold text-slate-700">Preston Digital Foundation</span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-2 py-1 rounded border border-green-200">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[10px] font-mono font-bold text-green-700 uppercase">Status: Deployed</span>
                </div>
              </div>

              {/* Visual: Talent Pipeline (People -> Co-op -> Institutions) */}
              <div className="h-64 bg-slate-900 relative overflow-hidden border-b border-slate-200">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <svg className="w-full h-full" viewBox="0 0 400 200">
                      {/* Connection Lines (Flowing Left to Right) */}
                      <g className="stroke-slate-600" strokeWidth="1">
                         <line x1="80" y1="60" x2="200" y2="100" />
                         <line x1="80" y1="140" x2="200" y2="100" />
                         <line x1="80" y1="100" x2="200" y2="100" />
                         <line x1="200" y1="100" x2="320" y2="70" />
                         <line x1="200" y1="100" x2="320" y2="130" />
                      </g>

                      {/* Group 1: Local People (Left) */}
                      <circle cx="80" cy="60" r="15" className="fill-slate-800 stroke-green-500" strokeWidth="2" />
                      <text x="80" y="64" textAnchor="middle" className="text-[8px] font-mono fill-green-400">GRAD</text>
                      <circle cx="80" cy="140" r="15" className="fill-slate-800 stroke-green-500" strokeWidth="2" />
                      <text x="80" y="144" textAnchor="middle" className="text-[8px] font-mono fill-green-400">DEV</text>
                      <circle cx="80" cy="100" r="15" className="fill-slate-800 stroke-green-500" strokeWidth="2" />
                      <text x="80" y="104" textAnchor="middle" className="text-[8px] font-mono fill-green-400">DES</text>

                      {/* Group 2: The Co-op (Center) */}
                      <circle cx="200" cy="100" r="30" className="fill-green-900 stroke-green-400" strokeWidth="3" />
                      <text x="200" y="104" textAnchor="middle" className="text-[12px] font-mono fill-white font-bold">PDF</text>

                      {/* Group 3: Institutions (Right) */}
                      <rect x="300" y="55" width="40" height="30" rx="4" className="fill-slate-700 stroke-blue-400" strokeWidth="2" />
                      <text x="320" y="73" textAnchor="middle" className="text-[8px] font-mono fill-blue-300 font-bold">NHS</text>
                      <rect x="300" y="115" width="40" height="30" rx="4" className="fill-slate-700 stroke-blue-400" strokeWidth="2" />
                      <text x="320" y="133" textAnchor="middle" className="text-[8px] font-mono fill-blue-300 font-bold">GOV</text>

                      {/* Value flowing */}
                      <circle r="3" fill="white">
                         <animateMotion dur="3s" repeatCount="indefinite" path="M 80 60 L 200 100 L 320 70" />
                      </circle>
                      <circle r="3" fill="white">
                         <animateMotion dur="3.5s" repeatCount="indefinite" path="M 80 140 L 200 100 L 320 130" />
                      </circle>
                   </svg>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="text-xs font-mono text-slate-400 bg-slate-800/80 backdrop-blur px-2 py-1 rounded border border-slate-700">
                    <div>Pipeline: <span className="text-green-400 font-bold">LOCAL_TO_LOCAL</span></div>
                    <div>Value: <span className="text-green-400 font-bold">RETAINED</span></div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  <strong className="text-slate-900">Worker-Owned Digital Agency.</strong> Instead of graduates leaving for London, the PDF allows local talent to form cooperatives. They build software for the NHS and Council, keeping code and capital within the county.
                </p>
                <div className="flex gap-3 text-xs font-mono text-slate-500">
                  <span className="bg-slate-100 px-2 py-1 rounded">#RetainTalent</span>
                  <span className="bg-slate-100 px-2 py-1 rounded">#WorkerOwned</span>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-xs text-slate-400">Established 2018</span>
                  <a href="https://prestoncoopdevelopment.org/the-preston-digital-foundation-thepdf/" target="_blank" className="text-sm font-bold text-red-600 hover:text-red-700 flex items-center gap-1">
                    VISIT NODE <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </div>
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
                <span className="material-symbols-outlined text-red-500">terminal</span>
                <span className="font-mono font-bold text-xl">Lancs.OS</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-sm">
                Lancs.OS is an Open Cooperative Initiative. <br/>
                Reprogramming the county for the many, not the few.
              </p>
              <div className="flex gap-4">
                 <a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
                 <a href="#" className="text-slate-400 hover:text-white transition-colors">Discord</a>
                 <a href="#" className="text-slate-400 hover:text-white transition-colors">Manifesto</a>
              </div>
            </div>
            <div className="font-mono text-sm text-slate-400 flex flex-col justify-end md:items-end">
              <p>© 2026 Lancs.OS Initiative.</p>
              <p className="mt-2">System Status: <span className="text-green-500 animate-pulse">OPERATIONAL</span></p>
              <p className="mt-2 text-xs opacity-50">Built with Next.js + Tailwind + VSM</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}