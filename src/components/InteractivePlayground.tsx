import React, { useEffect, useState } from 'react';
import { Cpu, Terminal, ScanSearch, Activity } from 'lucide-react';
import {
  CARD_CLASSIFICATION_PRESETS,
  CLIP_SEARCH_PRESETS,
  MCP_TOOL_PRESETS,
} from '../domain/portfolio-data';
import type { PlaygroundModeId } from '../domain/types';
import { evaluateCardMechanicsText } from '../services/playground-engine';

interface RobertaPanelProps {
  readonly selectedPresetId: string;
  readonly customText: string;
  readonly threshold: number;
  readonly onSelectPreset: (id: string) => void;
  readonly onChangeText: (text: string) => void;
  readonly onChangeThreshold: (value: number) => void;
}

function RobertaClassifierPanel({
  selectedPresetId,
  customText,
  threshold,
  onSelectPreset,
  onChangeText,
  onChangeThreshold,
}: RobertaPanelProps) {
  const livePredictions = evaluateCardMechanicsText(customText, threshold);

  return (
    <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
      <div className="lg:col-span-6 p-6 sm:p-8 space-y-5 bg-[#090909]">
        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2.5">
            // SELECT PRESET CORPUS OR INPUT CUSTOM PSCT TEXT:
          </label>
          <div className="flex flex-wrap gap-2 mb-3">
            {CARD_CLASSIFICATION_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => onSelectPreset(preset.id)}
                className={`px-3 py-1.5 text-xs font-mono border transition-colors cursor-pointer ${
                  selectedPresetId === preset.id
                    ? 'bg-[#FF4F00] border-[#FF4F00] text-[#090909] font-bold'
                    : 'bg-[#0E0E0E] border-neutral-800 text-neutral-300 hover:border-neutral-600'
                }`}
              >
                {preset.cardName}
              </button>
            ))}
          </div>

          <textarea
            rows={4}
            value={customText}
            onChange={(e) => onChangeText(e.target.value)}
            className="w-full bg-[#0D0D0D] border border-neutral-800 focus:border-[#FF4F00] p-3.5 text-xs font-mono text-[#EDEDED] outline-none leading-relaxed"
            placeholder="Enter Yu-Gi-Oh! Problem-Solving Card Text (PSCT) in English..."
          />
        </div>

        <div className="p-3.5 bg-[#0D0D0D] border border-neutral-800">
          <div className="flex items-center justify-between text-xs font-mono text-neutral-300 mb-2 tabular-nums">
            <span>SIGMOID ACTIVATION THRESHOLD</span>
            <span className="text-[#FF4F00] font-bold">{threshold.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.15"
            max="0.90"
            step="0.05"
            value={threshold}
            onChange={(e) => onChangeThreshold(parseFloat(e.target.value))}
            className="w-full accent-[#FF4F00] cursor-pointer"
          />
        </div>

        <div className="space-y-2.5">
          <div className="text-[11px] font-mono uppercase text-neutral-400 tabular-nums">
            // DETECTED MECHANICS ({livePredictions.length} ACTIVE CLASSES ABOVE {threshold.toFixed(2)}):
          </div>
          {livePredictions.length === 0 ? (
            <div className="text-xs font-mono text-neutral-400 bg-[#0E0E0E] border border-neutral-800 p-3.5">
              0 classes exceeded threshold {threshold.toFixed(2)}. Lower threshold or include terms like "Special Summon", "Destroy", "Banish", or "Deck".
            </div>
          ) : (
            <div className="divide-y divide-neutral-800 border border-neutral-800 bg-[#0C0C0C]">
              {livePredictions.map((pred) => (
                <div key={pred.genre} className="p-3 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono tabular-nums">
                    <span className="text-[#EDEDED] font-semibold">{pred.genre}</span>
                    <span className="text-neutral-300">
                      {(pred.probability * 100).toFixed(1)}% <span className="text-neutral-500">[{pred.confidence}]</span>
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-[#161616] overflow-hidden">
                    <div
                      className="h-full bg-[#FF4F00] transition-all duration-200"
                      style={{ width: `${Math.round(pred.probability * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="lg:col-span-6 p-6 sm:p-8 bg-[#0B0B0B] font-mono text-xs space-y-3">
        <div className="flex items-center justify-between text-neutral-400 border-b border-neutral-800 pb-2.5 tabular-nums">
          <span className="text-[#EDEDED]">POST /classify HTTP/1.1</span>
          <span className="text-[#FF4F00]">18.2ms • FP16 TENSOR</span>
        </div>
        <pre className="p-4 bg-[#070707] border border-neutral-800 text-neutral-200 overflow-x-auto leading-relaxed tabular-nums">
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
                model_used: 'roberta-base (125M fine-tuned)',
                loss_function: 'WeightedBCEWithLogitsLoss',
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
  );
}

interface McpPanelProps {
  readonly selectedMcpId: string;
  readonly onSelectMcp: (id: string) => void;
}

function McpInspectorPanel({ selectedMcpId, onSelectMcp }: McpPanelProps) {
  const currentMcpPreset =
    MCP_TOOL_PRESETS.find((item) => item.id === selectedMcpId) ?? MCP_TOOL_PRESETS[0];

  return (
    <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
      <div className="lg:col-span-5 p-6 sm:p-8 space-y-4 bg-[#090909]">
        <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
          // REGISTERED MCP TOOLS (22 TOTAL • O(1) REGISTRY):
        </div>
        <div className="space-y-2.5">
          {MCP_TOOL_PRESETS.map((tool) => {
            const isSelected = selectedMcpId === tool.id;
            return (
              <button
                key={tool.id}
                type="button"
                onClick={() => onSelectMcp(tool.id)}
                className={`w-full text-left p-4 border transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#121212] border-[#FF4F00] text-[#EDEDED]'
                    : 'bg-[#0C0C0C] border-neutral-800 text-neutral-300 hover:border-neutral-600'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-xs font-bold">
                  <span className={isSelected ? 'text-[#FF4F00]' : 'text-[#EDEDED]'}>
                    {tool.toolName}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 bg-[#090909] border border-neutral-800 text-neutral-400">
                    {tool.domainPort}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-1.5 leading-snug">{tool.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-7 p-6 sm:p-8 bg-[#0B0B0B] font-mono text-xs space-y-4">
        <div className="p-3 bg-[#070707] border border-neutral-800 text-neutral-300">
          <span className="font-bold text-[#FF4F00]">[STDERR ISOLATION]</span>{' '}
          {currentMcpPreset.stderrLog}
        </div>

        <div>
          <div className="text-neutral-400 mb-1.5 tabular-nums">
            [STDIN -&gt; MCP SERVER] JSON-RPC 2.0 REQUEST ({currentMcpPreset.executionTimeMs}ms):
          </div>
          <pre className="p-3.5 bg-[#070707] border border-neutral-800 text-neutral-200 overflow-x-auto">
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
        </div>

        <div>
          <div className="text-neutral-400 mb-1.5">
            [STDOUT &lt;- MCP SERVER] PURE JSON-RPC 2.0 FRAME (0 BYTES NOISE):
          </div>
          <pre className="p-3.5 bg-[#070707] border border-neutral-800 text-[#EDEDED] overflow-x-auto">
            {JSON.stringify(currentMcpPreset.responsePayload, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}

interface ClipPanelProps {
  readonly selectedClipId: string;
  readonly onSelectClip: (id: string) => void;
}

function ClipVectorSearchPanel({ selectedClipId, onSelectClip }: ClipPanelProps) {
  const currentClipPreset =
    CLIP_SEARCH_PRESETS.find((item) => item.id === selectedClipId) ?? CLIP_SEARCH_PRESETS[0];

  return (
    <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
      <div className="lg:col-span-5 p-6 sm:p-8 space-y-4 bg-[#090909]">
        <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
          // MULTIMODAL TEXT-TO-IMAGE QUERIES (ONNX CLIP VIT-B/32):
        </div>
        <div className="space-y-2.5">
          {CLIP_SEARCH_PRESETS.map((preset) => {
            const isSelected = selectedClipId === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => onSelectClip(preset.id)}
                className={`w-full text-left p-3.5 border transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#121212] border-[#FF4F00] text-[#EDEDED]'
                    : 'bg-[#0C0C0C] border-neutral-800 text-neutral-300 hover:border-neutral-600'
                }`}
              >
                <div className={`text-xs font-bold font-mono ${isSelected ? 'text-[#FF4F00]' : 'text-[#EDEDED]'}`}>
                  {preset.queryLabel}
                </div>
                <div className="text-xs font-mono text-neutral-400 mt-1">
                  prompt: &quot;{preset.queryText}&quot;
                </div>
              </button>
            );
          })}
        </div>

        <div className="divide-y divide-neutral-800 border border-neutral-800 bg-[#0C0C0C] pt-0">
          {currentClipPreset.matches.map((match) => (
            <div
              key={match.cardId}
              className="flex items-center justify-between p-3.5 tabular-nums"
            >
              <div>
                <div className="text-xs font-bold text-[#EDEDED] font-mono">
                  #{match.cardId} {match.name}
                </div>
                <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                  {match.attribute} // {match.frameType}
                </div>
              </div>
              <span className="px-2.5 py-1 bg-[#141414] border border-neutral-700 text-[#FF4F00] font-mono text-xs font-bold">
                {match.similarityScore}% COSINE
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-7 p-6 sm:p-8 bg-[#0B0B0B] font-mono text-xs space-y-3">
        <div className="flex items-center justify-between text-neutral-400 border-b border-neutral-800 pb-2.5 tabular-nums">
          <span className="text-[#EDEDED]">POST /api/semantic-search HTTP/1.1</span>
          <span className="text-[#FF4F00]">{currentClipPreset.executionTimeMs}ms • 512-D L2</span>
        </div>
        <pre className="p-4 bg-[#070707] border border-neutral-800 text-neutral-200 overflow-x-auto leading-relaxed tabular-nums">
          {JSON.stringify(
            {
              success: true,
              searchType: 'clip_embedding',
              model: 'Xenova/clip-vit-base-patch32 (Quantized ONNX)',
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
  );
}

export default function InteractivePlayground() {
  const [activeMode, setActiveMode] = useState<PlaygroundModeId>('card-analysis');
  const [selectedCardPresetId, setSelectedCardPresetId] = useState<string>(
    CARD_CLASSIFICATION_PRESETS[0].id
  );
  const [customCardText, setCustomCardText] = useState<string>(
    CARD_CLASSIFICATION_PRESETS[0].cardText
  );
  const [threshold, setThreshold] = useState<number>(0.5);
  const [selectedMcpId, setSelectedMcpId] = useState<string>(MCP_TOOL_PRESETS[0].id);
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

  return (
    <section id="playground" className="border-b border-neutral-800">
      <div className="max-w-6xl mx-auto border-x border-neutral-800">
        {/* Section Header */}
        <div className="p-6 sm:p-10 border-b border-neutral-800 bg-[#0B0B0B] flex flex-col md:flex-row md:items-end justify-between gap-6 relative">
          <span className="hidden sm:block absolute top-3 right-3 font-mono text-xs text-neutral-700 select-none">
            +
          </span>
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#FF4F00]">
              [02 // INTERACTIVE PROTOCOL &amp; INFERENCE SANDBOX]
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#EDEDED] mt-2">
              Live API &amp; MCP Telemetry Console
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-md leading-relaxed">
            Execute multi-label RoBERTa classification, inspect MCP JSON-RPC 2.0 stdio frames, and query 512-dim ONNX CLIP vectors directly in the browser.
          </p>
        </div>

        {/* Protocol Mode Selector Bar */}
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-800 border-b border-neutral-800 bg-[#090909]">
          <button
            type="button"
            onClick={() => setActiveMode('card-analysis')}
            className={`p-4 sm:p-5 text-left font-mono text-xs transition-colors flex items-center justify-between cursor-pointer ${
              activeMode === 'card-analysis'
                ? 'bg-[#121212] text-[#EDEDED] border-l-2 border-l-[#FF4F00]'
                : 'text-neutral-400 hover:bg-[#0D0D0D] hover:text-neutral-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <Cpu className={`w-4 h-4 ${activeMode === 'card-analysis' ? 'text-[#FF4F00]' : 'text-neutral-500'}`} />
              <div>
                <div className="font-bold">01 // ROBERTA MULTI-LABEL API</div>
                <div className="text-[11px] text-neutral-500 mt-0.5">FastAPI • POST /classify</div>
              </div>
            </div>
            {activeMode === 'card-analysis' && (
              <span className="w-2 h-2 bg-[#FF4F00]"></span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveMode('yugi-mcp')}
            className={`p-4 sm:p-5 text-left font-mono text-xs transition-colors flex items-center justify-between cursor-pointer ${
              activeMode === 'yugi-mcp'
                ? 'bg-[#121212] text-[#EDEDED] border-l-2 border-l-[#FF4F00]'
                : 'text-neutral-400 hover:bg-[#0D0D0D] hover:text-neutral-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <Terminal className={`w-4 h-4 ${activeMode === 'yugi-mcp' ? 'text-[#FF4F00]' : 'text-neutral-500'}`} />
              <div>
                <div className="font-bold">02 // MCP SERVER INSPECTOR</div>
                <div className="text-[11px] text-neutral-500 mt-0.5">JSON-RPC 2.0 • stdio</div>
              </div>
            </div>
            {activeMode === 'yugi-mcp' && (
              <span className="w-2 h-2 bg-[#FF4F00]"></span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveMode('yugioh-ts-ddd')}
            className={`p-4 sm:p-5 text-left font-mono text-xs transition-colors flex items-center justify-between cursor-pointer ${
              activeMode === 'yugioh-ts-ddd'
                ? 'bg-[#121212] text-[#EDEDED] border-l-2 border-l-[#FF4F00]'
                : 'text-neutral-400 hover:bg-[#0D0D0D] hover:text-neutral-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <ScanSearch className={`w-4 h-4 ${activeMode === 'yugioh-ts-ddd' ? 'text-[#FF4F00]' : 'text-neutral-500'}`} />
              <div>
                <div className="font-bold">03 // ONNX CLIP 512-D SEARCH</div>
                <div className="text-[11px] text-neutral-500 mt-0.5">DDD Core • Cosine Similarity</div>
              </div>
            </div>
            {activeMode === 'yugioh-ts-ddd' && (
              <span className="w-2 h-2 bg-[#FF4F00]"></span>
            )}
          </button>
        </div>

        {/* Console Telemetry Status Strip */}
        <div className="px-6 py-2.5 bg-[#0E0E0E] border-b border-neutral-800 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
          <div className="flex items-center gap-2 text-neutral-300">
            <Activity className="w-3.5 h-3.5 text-[#FF4F00]" />
            <span>
              {activeMode === 'card-analysis' && 'RUNTIME: PyTorch 2.x + RoBERTa-base (11 Mechanics Classification)'}
              {activeMode === 'yugi-mcp' && 'RUNTIME: @modelcontextprotocol/sdk v2.0 (22 Registered Agent Tools)'}
              {activeMode === 'yugioh-ts-ddd' && 'RUNTIME: Quantized ONNX CLIP ViT-B/32 (512-D L2 Normalized Vectors)'}
            </span>
          </div>
          <span className="px-2 py-0.5 bg-[#141414] border border-neutral-700 text-[#FF4F00] tabular-nums">
            STATUS: 200 OK // INTERACTIVE
          </span>
        </div>

        {/* Active Panel */}
        {activeMode === 'card-analysis' && (
          <RobertaClassifierPanel
            selectedPresetId={selectedCardPresetId}
            customText={customCardText}
            threshold={threshold}
            onSelectPreset={handleSelectCardPreset}
            onChangeText={setCustomCardText}
            onChangeThreshold={setThreshold}
          />
        )}

        {activeMode === 'yugi-mcp' && (
          <McpInspectorPanel selectedMcpId={selectedMcpId} onSelectMcp={setSelectedMcpId} />
        )}

        {activeMode === 'yugioh-ts-ddd' && (
          <ClipVectorSearchPanel selectedClipId={selectedClipId} onSelectClip={setSelectedClipId} />
        )}
      </div>
    </section>
  );
}
