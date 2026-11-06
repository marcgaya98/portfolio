import React, { useState } from 'react';
import { Layers, ArrowUpRight, CheckSquare } from 'lucide-react';
import { TECH_STACK_RADAR } from '../domain/portfolio-data';

export default function TechStackRadar() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(TECH_STACK_RADAR[0].id);

  const activeCategory =
    TECH_STACK_RADAR.find((cat) => cat.id === selectedCategoryId) ?? TECH_STACK_RADAR[0];

  return (
    <section id="tech-radar" className="border-b border-neutral-800">
      <div className="max-w-6xl mx-auto border-x border-neutral-800">
        {/* Section Header */}
        <div className="p-6 sm:p-10 border-b border-neutral-800 bg-[#0B0B0B] flex flex-col md:flex-row md:items-end justify-between gap-6 relative">
          <span className="hidden sm:block absolute top-3 right-3 font-mono text-xs text-neutral-700 select-none">
            +
          </span>
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#FF4F00]">
              [03 // ARCHITECTURAL CAPABILITY MATRIX &amp; PRODUCTION EVIDENCE]
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#EDEDED] mt-2">
              System Stack &amp; Verified Implementations
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-md leading-relaxed">
            Every engineering capability below is backed by concrete production patterns, automated tests, and open-source repositories—no arbitrary percentage bars.
          </p>
        </div>

        {/* Main 12-Column Blueprint Layout */}
        <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
          {/* Left 5 Columns: Interactive System Layer Schematic + Domain Selector */}
          <div className="lg:col-span-5 bg-[#090909] flex flex-col justify-between divide-y divide-neutral-800">
            <div className="p-6 sm:p-8 blueprint-bg">
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-4">
                <span>SCHEMATIC // LAYER TOPOLOGY</span>
                <span className="text-[#FF4F00]">{activeCategory.domainCode}</span>
              </div>

              {/* Clean Technical Blueprint SVG */}
              <svg viewBox="0 0 360 240" className="w-full h-auto border border-neutral-800 bg-[#070707] p-3">
                {/* Structural Grid Lines */}
                <line x1="180" y1="15" x2="180" y2="225" stroke="#1F1F1F" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="15" y1="120" x2="345" y2="120" stroke="#1F1F1F" strokeWidth="1" strokeDasharray="3 3" />

                {/* Concentric Octagonal / Rectangular Blueprint Frame */}
                <rect x="35" y="25" width="290" height="190" fill="none" stroke="#262626" strokeWidth="1" />
                <rect x="75" y="55" width="210" height="130" fill="none" stroke="#262626" strokeWidth="1" />

                {/* Active Architectural Polygon */}
                <polygon
                  points="180,32 315,120 180,208 45,120"
                  fill="rgba(255, 79, 0, 0.08)"
                  stroke="#FF4F00"
                  strokeWidth="1.5"
                />

                {/* 4 Domain Nodes */}
                <rect
                  x="175"
                  y="27"
                  width="10"
                  height="10"
                  fill={selectedCategoryId === 'backend-enterprise' ? '#FF4F00' : '#EDEDED'}
                />
                <rect
                  x="310"
                  y="115"
                  width="10"
                  height="10"
                  fill={selectedCategoryId === 'applied-ai' ? '#FF4F00' : '#EDEDED'}
                />
                <rect
                  x="175"
                  y="203"
                  width="10"
                  height="10"
                  fill={selectedCategoryId === 'devops-data' ? '#FF4F00' : '#EDEDED'}
                />
                <rect
                  x="40"
                  y="115"
                  width="10"
                  height="10"
                  fill={selectedCategoryId === 'frontend-ui' ? '#FF4F00' : '#EDEDED'}
                />

                {/* Node Labels */}
                <text x="180" y="18" textAnchor="middle" fill="#EDEDED" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                  DOM-01: BACKEND DDD
                </text>
                <text x="350" y="110" textAnchor="end" fill="#EDEDED" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                  DOM-02: APPLIED AI
                </text>
                <text x="180" y="232" textAnchor="middle" fill="#EDEDED" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                  DOM-03: DATA &amp; DOCKER
                </text>
                <text x="10" y="110" textAnchor="start" fill="#EDEDED" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                  DOM-04: SSR UI
                </text>
              </svg>
            </div>

            {/* 4 Domain Selector Rows */}
            <div className="divide-y divide-neutral-800">
              {TECH_STACK_RADAR.map((cat) => {
                const isSelected = selectedCategoryId === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategoryId(cat.id)}
                    className={`w-full p-5 text-left transition-colors cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#121212] border-l-2 border-l-[#FF4F00]'
                        : 'bg-[#090909] hover:bg-[#0D0D0D]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 font-mono text-[11px]">
                        <span className={isSelected ? 'text-[#FF4F00] font-bold' : 'text-neutral-500'}>
                          {cat.domainCode}
                        </span>
                        <span className="text-neutral-600">//</span>
                        <span className="text-neutral-400">{cat.layerRole}</span>
                      </div>
                      <div className="text-sm font-bold text-[#EDEDED] mt-1">{cat.title}</div>
                      <div className="text-xs font-mono text-neutral-400 mt-1 tabular-nums">
                        {cat.metricsSummary}
                      </div>
                    </div>
                    <span className={`font-mono text-xs ${isSelected ? 'text-[#FF4F00]' : 'text-neutral-600'}`}>
                      -&gt;
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right 7 Columns: Production Evidence Specification Matrix */}
          <div className="lg:col-span-7 bg-[#090909] divide-y divide-neutral-800 flex flex-col justify-between">
            <div className="p-6 sm:p-8 bg-[#0C0C0C] flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF4F00]">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{activeCategory.domainCode} SPECIFICATION</span>
                </div>
                <h3 className="text-xl font-bold text-[#EDEDED] mt-1">{activeCategory.title}</h3>
                <p className="text-xs text-neutral-400 mt-1">{activeCategory.subtitle}</p>
              </div>
              <span className="px-2.5 py-1 bg-[#141414] border border-neutral-800 text-[11px] font-mono text-neutral-300 tabular-nums">
                {activeCategory.metricsSummary}
              </span>
            </div>

            {/* Active Domain Evidence Rows */}
            <div className="divide-y divide-neutral-800 flex-1">
              {activeCategory.skills.map((skill) => (
                <div key={skill.name} className="p-6 sm:p-7 hover:bg-[#0C0C0C] transition-colors space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <CheckSquare className="w-3.5 h-3.5 text-[#FF4F00] shrink-0" />
                      <h4 className="text-sm font-bold text-[#EDEDED] font-mono">{skill.name}</h4>
                    </div>

                    {skill.repositoryUrl && skill.repositoryName && (
                      <a
                        href={skill.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#121212] hover:border-[#FF4F00] border border-neutral-800 text-[11px] font-mono text-neutral-300 hover:text-[#FF4F00] transition-colors"
                      >
                        <span>REPO: {skill.repositoryName}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 pt-1 text-xs">
                    <div className="p-3 bg-[#0D0D0D] border border-neutral-800/80">
                      <span className="font-mono text-[10px] uppercase text-neutral-500 block mb-1">
                        // ARCHITECTURAL PATTERN &amp; STACK
                      </span>
                      <span className="text-neutral-300 font-mono text-[11px] leading-relaxed">
                        {skill.specification}
                      </span>
                    </div>

                    <div className="p-3 bg-[#0D0D0D] border border-neutral-800/80">
                      <span className="font-mono text-[10px] uppercase text-[#FF4F00] block mb-1">
                        // PRODUCTION EVIDENCE
                      </span>
                      <span className="text-[#EDEDED] font-mono text-[11px] leading-relaxed">
                        {skill.productionEvidence}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Summary Bar */}
            <div className="px-6 py-3.5 bg-[#0C0C0C] text-[11px] font-mono text-neutral-400 flex flex-wrap items-center justify-between gap-2">
              <span>ALL CAPABILITIES VERIFIED VIA GITHUB ACTIONS CI/CD</span>
              <span className="text-neutral-300 tabular-nums">4 DOMAINS // 16 PRODUCTION SPECIFICATIONS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
