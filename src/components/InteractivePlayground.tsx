import React, { useEffect, useState } from 'react';
import {
  CARD_CLASSIFICATION_PRESETS,
  CLIP_SEARCH_PRESETS,
  MCP_TOOL_PRESETS,
} from '../domain/portfolio-data';
import type { PlaygroundModeId } from '../domain/types';
import { evaluateCardMechanicsText } from '../services/playground-engine';

export default function InteractivePlayground() {
  const [activeMode, setActiveMode] = useState<PlaygroundModeId>('card-analysis');

  // Mode 1: card-analysis state
  const [selectedCardPresetId, setSelectedCardPresetId] = useState<string>(
    CARD_CLASSIFICATION_PRESETS[0].id
  );
  const [customCardText, setCustomCardText] = useState<string>(
    CARD_CLASSIFICATION_PRESETS[0].cardText
  );
  const [threshold, setThreshold] = useState<number>(0.5);

  // Mode 2: yugi-mcp state
  const [selectedMcpId, setSelectedMcpId] = useState<string>(MCP_TOOL_PRESETS[0].id);

  // Mode 3: yugioh-ts-ddd CLIP state
  const [selectedClipId, setSelectedClipId] = useState<string>(CLIP_SEARCH_PRESETS[0].id);

  useEffect(() => {
    const handleCardLinkClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement)?.closest('[data-playground-mode]');
      if (!target) return;
      const mode = target.getAttribute('data-playground-mode') as PlaygroundModeId | null;
      if (mode) {
        setActiveMode(mode);
      }
    };
    document.addEventListener('click', handleCardLinkClick);
    return () => document.removeEventListener('click', handleCardLinkClick);
  }, []);

  const handleSelectCardPreset = (presetId: string) => {
    setSelectedCardPresetId(presetId);
    const preset = CARD_CLASSIFICATION_PRESETS.find((item) => item.id === presetId);
    if (preset) {
      setCustomCardText(preset.cardText);
      setThreshold(preset.defaultThreshold);
    }
  };

  const livePredictions = evaluateCardMechanicsText(customCardText, threshold);
  const currentMcpPreset =
    MCP_TOOL_PRESETS.find((item) => item.id === selectedMcpId) ?? MCP_TOOL_PRESETS[0];
  const currentClipPreset =
    CLIP_SEARCH_PRESETS.find((item) => item.id === selectedClipId) ?? CLIP_SEARCH_PRESETS[0];

  return (
    <section id="playground" className="py-20 border-b border-slate-800/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Interactive Architecture Sandbox
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
              Live API &amp; MCP Playground
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Test multi-label RoBERTa card classification, inspect MCP JSON-RPC 2.0 tool frames, and query 512-dim CLIP vector similarity directly in your browser.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            type="button"
            onClick={() => setActiveMode('card-analysis')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold border transition-all ${
              activeMode === 'card-analysis'
                ? 'bg-purple-500/20 border-purple-400 text-purple-200 shadow-lg shadow-purple-500/10'
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            🧠 1. RoBERTa Multi-Label API (POST /classify)
          </button>

          <button
            type="button"
            onClick={() => setActiveMode('yugi-mcp')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold border transition-all ${
              activeMode === 'yugi-mcp'
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 shadow-lg shadow-emerald-500/10'
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            🤖 2. MCP Server Inspector (JSON-RPC 2.0 stdio)
          </button>

          <button
            type="button"
            onClick={() => setActiveMode('yugioh-ts-ddd')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold border transition-all ${
              activeMode === 'yugioh-ts-ddd'
                ? 'bg-sky-500/20 border-sky-400 text-sky-200 shadow-lg shadow-sky-500/10'
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            🔍 3. ONNX CLIP 512-D Vector Search (DDD API)
          </button>
        </div>

        {/* Playground Terminal Window */}
        <div className="rounded-2xl bg-[#0b101b] border border-slate-800 shadow-2xl overflow-hidden">
          {/* Window Bar */}
          <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="ml-2 text-xs font-mono text-slate-400">
                {activeMode === 'card-analysis' && 'card-analysis • FastAPI + PyTorch RoBERTa (11 Genres)'}
                {activeMode === 'yugi-mcp' && 'yugi-mcp v2.0 • Model Context Protocol (22 Tools)'}
                {activeMode === 'yugioh-ts-ddd' && 'yugioh-ts-ddd • ONNX CLIP ViT-B/32 (512-D Cosine Similarity)'}
              </span>
            </div>
            <span className="px-2.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono">
              200 OK • Interactive
            </span>
          </div>

          {/* TAB 1: CARD-ANALYSIS */}
          {activeMode === 'card-analysis' && (
            <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
              <div className="lg:col-span-6 p-6 space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Select Sample Card Effect or Type Your Own PSCT:
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {CARD_CLASSIFICATION_PRESETS.map((preset) => (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => handleSelectCardPreset(preset.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-colors ${
                          selectedCardPresetId === preset.id
                            ? 'bg-purple-500/20 border-purple-400 text-purple-200'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {preset.cardName}
                      </button>
                    ))}
                  </div>

                  <textarea
                    rows={4}
                    value={customCardText}
                    onChange={(e) => setCustomCardText(e.target.value)}
                    className="w-full rounded-xl bg-slate-950 border border-slate-800 focus:border-purple-400 p-3.5 text-xs sm:text-sm font-mono text-slate-100 outline-none"
                    placeholder="Enter any Yu-Gi-Oh! card effect description in English..."
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-1.5">
                    <span>Sigmoid Probability Threshold:</span>
                    <span className="text-purple-300 font-bold">{threshold.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.15"
                    max="0.90"
                    step="0.05"
                    value={threshold}
                    onChange={(e) => setThreshold(parseFloat(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                </div>

                {/* Visual Confidence Bars */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono text-slate-400">
                    Detected Mechanics ({livePredictions.length} above threshold):
                  </div>
                  {livePredictions.length === 0 ? (
                    <div className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
                      No genres exceeded threshold {threshold.toFixed(2)}. Lower the threshold or enter keywords like "Special Summon", "Destroy", "Banish", or "Deck".
                    </div>
                  ) : (
                    livePredictions.map((pred) => (
                      <div key={pred.genre} className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-slate-200 font-medium">{pred.genre}</span>
                          <span className="text-purple-300">
                            {(pred.probability * 100).toFixed(1)}% ({pred.confidence})
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-sky-400 transition-all duration-300"
                            style={{ width: `${Math.round(pred.probability * 100)}%` }}
                          />
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="lg:col-span-6 p-6 bg-slate-950/60 font-mono text-xs space-y-3">
                <div className="text-slate-400 flex items-center justify-between">
                  <span>POST http://localhost:8000/classify</span>
                  <span className="text-emerald-400">18.2 ms • CUDA FP16</span>
                </div>
                <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 text-sky-300 overflow-x-auto leading-relaxed">
                  {JSON.stringify(
                    {
                      results: [
                        {
                          primary_genres: livePredictions.map((item) => item.genre),
                          detected_genres: livePredictions,
                          processing_time: 0.0182,
                        },
                      ],
                      metadata: {
                        model_used: 'roberta-base (fine-tuned)',
                        threshold,
                        available_genres_count: 11,
                      },
                    },
                    null,
                    2
                  )}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 2: YUGI-MCP */}
          {activeMode === 'yugi-mcp' && (
            <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
              <div className="lg:col-span-5 p-6 space-y-4">
                <div className="text-xs font-mono uppercase text-slate-400">
                  Select Registered MCP Tool (22 Available):
                </div>
                <div className="space-y-2.5">
                  {MCP_TOOL_PRESETS.map((tool) => (
                    <button
                      key={tool.id}
                      type="button"
                      onClick={() => setSelectedMcpId(tool.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                        selectedMcpId === tool.id
                          ? 'bg-emerald-500/15 border-emerald-400 text-white'
                          : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between font-mono text-xs font-bold text-emerald-300">
                        <span>{tool.toolName}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400">
                          {tool.domainPort}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">{tool.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 p-6 bg-slate-950/60 font-mono text-xs space-y-3">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-amber-300">
                  <span className="font-bold text-emerald-400">[STDERR TELEMETRY]</span>{' '}
                  {currentMcpPreset.stderrLog}
                </div>

                <div className="text-slate-400">
                  [STDIN → MCP Server] JSON-RPC 2.0 Call ({currentMcpPreset.executionTimeMs} ms):
                </div>
                <pre className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-purple-300 overflow-x-auto">
                  {JSON.stringify(
                    {
                      jsonrpc: '2.0',
                      id: 1,
                      method: 'tools/call',
                      params: {
                        name: currentMcpPreset.toolName,
                        arguments: currentMcpPreset.argumentsJson,
                      },
                    },
                    null,
                    2
                  )}
                </pre>

                <div className="text-slate-400">[STDOUT ← MCP Server] Pure JSON-RPC 2.0 Frame:</div>
                <pre className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-emerald-300 overflow-x-auto">
                  {JSON.stringify(currentMcpPreset.responsePayload, null, 2)}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 3: YUGIOH-TS-DDD CLIP SEARCH */}
          {activeMode === 'yugioh-ts-ddd' && (
            <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
              <div className="lg:col-span-5 p-6 space-y-4">
                <div className="text-xs font-mono uppercase text-slate-400">
                  Select Natural Language Artwork Query (CLIP ViT-B/32):
                </div>
                <div className="space-y-2.5">
                  {CLIP_SEARCH_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => setSelectedClipId(preset.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                        selectedClipId === preset.id
                          ? 'bg-sky-500/15 border-sky-400 text-white'
                          : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold font-mono text-sky-300">
                        {preset.queryLabel}
                      </div>
                      <div className="text-xs font-mono text-slate-400 mt-1">
                        query: "{preset.queryText}"
                      </div>
                    </button>
                  ))}
                </div>

                {/* Top Visual Matches Cards */}
                <div className="space-y-2 pt-2">
                  {currentClipPreset.matches.map((match) => (
                    <div
                      key={match.cardId}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800"
                    >
                      <div>
                        <div className="text-xs font-bold text-white font-mono">
                          #{match.cardId} {match.name}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono">
                          {match.attribute} • {match.frameType}
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-sky-500/20 border border-sky-500/40 text-sky-300 font-mono text-xs font-bold">
                        {match.similarityScore}% Cosine
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 p-6 bg-slate-950/60 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between text-slate-400">
                  <span>POST http://localhost:3001/api/semantic-search</span>
                  <span className="text-sky-400">{currentClipPreset.executionTimeMs} ms • 512-D L2</span>
                </div>
                <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sky-300 overflow-x-auto leading-relaxed">
                  {JSON.stringify(
                    {
                      success: true,
                      searchType: 'clip_embedding',
                      vectorDimension: 512,
                      query: currentClipPreset.queryText,
                      results: currentClipPreset.matches,
                    },
                    null,
                    2
                  )}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
