import React, { useState } from 'react';
import { TECH_STACK_RADAR } from '../domain/portfolio-data';

export default function TechStackRadar() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(TECH_STACK_RADAR[0].id);

  return (
    <section id="tech-radar" className="py-20 border-b border-slate-800/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
              Engineering Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
              Tech Stack Radar
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Segmented across Backend Enterprise Architecture, Applied AI &amp; Deep Learning, DevOps Infrastructure, and Reactive Frontend Systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Interactive SVG Radar Visual */}
          <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col items-center">
            <svg viewBox="0 0 300 300" className="w-full max-w-[290px] h-auto">
              {/* Concentric Radar Rings */}
              <polygon
                points="150,30 270,150 150,270 30,150"
                fill="none"
                stroke="#1e293b"
                strokeWidth="1.5"
              />
              <polygon
                points="150,65 235,150 150,235 65,150"
                fill="none"
                stroke="#1e293b"
                strokeWidth="1"
              />
              <polygon
                points="150,100 200,150 150,200 100,150"
                fill="none"
                stroke="#1e293b"
                strokeWidth="1"
              />
              <line x1="150" y1="20" x2="150" y2="280" stroke="#1e293b" strokeWidth="1" />
              <line x1="20" y1="150" x2="280" y2="150" stroke="#1e293b" strokeWidth="1" />

              {/* Skill Polygon (94%, 95%, 90%, 91%) */}
              <polygon
                points="150,37 264,150 150,258 41,150"
                fill="rgba(56, 189, 248, 0.18)"
                stroke="#38bdf8"
                strokeWidth="2.5"
              />

              {/* Nodes */}
              <circle cx="150" cy="37" r="5" fill="#38bdf8" />
              <circle cx="264" cy="150" r="5" fill="#a855f7" />
              <circle cx="150" cy="258" r="5" fill="#34d399" />
              <circle cx="41" cy="150" r="5" fill="#f59e0b" />

              {/* Axis Labels */}
              <text x="150" y="16" textAnchor="middle" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">
                Backend DDD (94%)
              </text>
              <text x="292" y="144" textAnchor="end" fill="#a855f7" fontSize="11" fontFamily="monospace" fontWeight="bold">
                AI &amp; MCP (95%)
              </text>
              <text x="150" y="293" textAnchor="middle" fill="#34d399" fontSize="11" fontFamily="monospace" fontWeight="bold">
                DevOps &amp; DB (90%)
              </text>
              <text x="8" y="144" textAnchor="start" fill="#f59e0b" fontSize="11" fontFamily="monospace" fontWeight="bold">
                Frontend (91%)
              </text>
            </svg>

            <div className="grid grid-cols-2 gap-2 w-full mt-4 pt-4 border-t border-slate-800">
              {TECH_STACK_RADAR.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`px-3 py-2 rounded-xl text-left font-mono text-xs border transition-all ${
                    selectedCategoryId === cat.id
                      ? 'bg-slate-800 border-sky-400 text-white'
                      : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="font-bold truncate">{cat.title.split('&')[0]}</div>
                  <div className="text-[11px] text-sky-400">{cat.radarScore}% Index</div>
                </button>
              ))}
            </div>
          </div>

          {/* 4 Segmented Area Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {TECH_STACK_RADAR.map((category) => {
              const isSelected = selectedCategoryId === category.id;
              return (
                <div
                  key={category.id}
                  onClick={() => setSelectedCategoryId(category.id)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all ${
                    isSelected
                      ? 'bg-slate-900 border-sky-500/60 shadow-xl shadow-sky-500/5'
                      : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-bold text-white">{category.title}</h3>
                    <span className="text-xs font-mono font-bold text-sky-400">
                      {category.radarScore}%
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-4">{category.subtitle}</p>

                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between text-xs font-mono mb-1">
                          <span className="text-slate-200 font-medium">{skill.name}</span>
                          <span className="text-slate-400">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-slate-950 overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${skill.proficiency}%`,
                              backgroundColor: category.accentColor,
                            }}
                          />
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{skill.highlight}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
