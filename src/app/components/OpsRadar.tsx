'use client';

export default function OpsRadar() {
  return (
    <div className="relative w-64 h-64 mx-auto my-8">
      {/* Outer Rim */}
      <div className="absolute inset-0 rounded-full border border-slate-700/50 bg-slate-900/50 backdrop-blur-md" />
      
      {/* Grid Lines */}
      <div className="absolute inset-0 rounded-full border border-emerald-900/30 bg-[radial-gradient(circle,transparent_60%,rgba(16,185,129,0.1)_70%)]" />
      <div className="absolute inset-[25%] border border-slate-700/50 rounded-full" />
      <div className="absolute inset-[50%] border border-slate-700/50 rounded-full" />
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-slate-800" />
      <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-slate-800" />

      {/* The Sweep (Scanner) */}
      <div className="absolute inset-0 rounded-full animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(16,185,129,0.2)_360deg)]" />

      {/* Blips (Data Points) */}
      <div className="absolute top-[30%] left-[60%] w-2 h-2 bg-rose-500 rounded-full animate-pulse shadow-[0_0_10px_#f43f5e]" />
      <div className="absolute top-[70%] left-[40%] w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse delay-75 shadow-[0_0_10px_#10b981]" />
      <div className="absolute top-[20%] left-[30%] w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-150" />

      {/* Center Console */}
      <div className="absolute inset-[42%] bg-slate-950 border border-emerald-500/50 rounded-full flex items-center justify-center z-10">
        <span className="font-mono text-[10px] text-emerald-500 animate-pulse">LIVE</span>
      </div>
    </div>
  );
}