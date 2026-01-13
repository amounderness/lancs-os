'use client';
import React from 'react';
import { Circle, Clock } from 'lucide-react';

const missions = [
  {
    id: '01',
    name: 'Map the Supply Chain',
    location: 'Preston / Blackburn',
    status: 'In Progress',
    desc: 'We are auditing the top 10 anchor institutions to find £50m in local contract opportunities.',
    progress: 65
  },
  {
    id: '02',
    name: 'Retrofit Guild',
    location: 'Burnley',
    status: 'Open',
    desc: 'Recruiting tradespeople to form a county-wide retrofit cooperative for social housing upgrades.',
    progress: 15
  },
  {
    id: '03',
    name: 'Digital Twin Beta',
    location: 'Lancaster',
    status: 'Planned',
    desc: 'Creating a publicly owned 3D data model of the city centre to model flood risks and footfall.',
    progress: 0
  }
];

export default function Missions() {
  return (
    <section id="missions" className="py-24 border-t border-border relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Standardized Header Block */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-100 mb-4">
            Open Missions
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            <span className="text-primary font-bold block mb-2 tracking-widest uppercase text-xs">// STATUS_LOG</span>
            Real-world challenges we are currently solving. Pick a ticket, join a team, and get to work.
          </p>
        </div>

        <div className="space-y-4">
          {missions.map((mission) => (
            <div key={mission.id} className="bg-card border border-border hover:border-slate-500 p-6 md:p-8 rounded-sm flex flex-col md:flex-row items-center gap-6 transition-all shadow-sm group">
              
              <div className="text-2xl font-bold text-slate-600 group-hover:text-primary transition-colors">
                {mission.id}
              </div>

              <div className="flex-grow text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-200">{mission.name}</h3>
                  <span className="text-xs text-slate-500 bg-background px-2 py-1 rounded-sm border border-border w-fit mx-auto md:mx-0 uppercase tracking-wider">
                    {mission.location}
                  </span>
                </div>
                {/* Increased text size for readability */}
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">{mission.desc}</p>
              </div>

              <div className="min-w-[140px] flex flex-col items-center md:items-end gap-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
                  {mission.status === 'In Progress' ? (
                    <span className="text-accent flex items-center gap-2"><Clock size={14}/> ACTIVE</span>
                  ) : (
                    <span className="text-slate-500 flex items-center gap-2"><Circle size={14}/> OPEN</span>
                  )}
                </div>
                <div className="w-full h-1 bg-background rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent" 
                    style={{ width: `${mission.progress}%` }}
                  />
                </div>
                <span className="text-[10px] text-slate-500">{mission.progress}% COMPLETE</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}