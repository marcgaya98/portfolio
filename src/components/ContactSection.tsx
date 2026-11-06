import React, { useState } from 'react';
import { Copy, Check, MessageSquare, Send, ArrowUpRight, Mail } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../domain/portfolio-data';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DEVELOPER_PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${DEVELOPER_PROFILE.email}`;
    }
  };

  return (
    <section id="contact" className="border-b border-neutral-800">
      <div className="max-w-6xl mx-auto border-x border-neutral-800">
        <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
          {/* Left 7 Columns: Direct Engineering Transmission */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 blueprint-bg flex flex-col justify-between space-y-8 relative">
            <span className="hidden sm:block absolute top-3 right-3 font-mono text-xs text-neutral-700 select-none">
              +
            </span>

            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#FF4F00]">
                [04 // DIRECT ENGINEERING TRANSMISSION]
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#EDEDED]">
                Ready to Architect High-Impact Systems?
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
                Available for Applied AI Engineering, Backend Enterprise Architecture (DDD / Java / TypeScript), and Full Stack product teams. Copy my email with one click or open a direct channel.
              </p>
            </div>

            {/* One-Click Email Copy Action Bar */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase text-neutral-400">
                // PRIMARY ELECTRONIC MAIL (CLICK TO COPY TO CLIPBOARD):
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-3 px-5 py-3.5 bg-[#FF4F00] hover:bg-[#FF6622] text-[#090909] font-mono font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>{DEVELOPER_PROFILE.email}</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#090909] text-[#EDEDED] text-[11px]">
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-[#FF4F00]" />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>COPY</span>
                      </>
                    )}
                  </span>
                </button>

                <a
                  href={`mailto:${DEVELOPER_PROFILE.email}`}
                  className="inline-flex items-center gap-2 px-4 py-3.5 bg-[#0E0E0E] hover:bg-neutral-800 text-neutral-200 border border-neutral-800 font-mono text-xs transition-colors"
                >
                  <span>OPEN MAIL CLIENT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Direct Messaging & Network Channels */}
          <div className="lg:col-span-5 bg-[#0B0B0B] divide-y divide-neutral-800 flex flex-col justify-between">
            <div className="p-6 bg-[#0E0E0E]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF4F00]">
                CHANNELS // SYNCHRONOUS &amp; ASYNC
              </span>
              <h3 className="text-base font-bold text-[#EDEDED] mt-1">
                Direct Communication Endpoints
              </h3>
            </div>

            <a
              href={DEVELOPER_PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-[#090909] hover:bg-[#111111] transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 bg-[#141414] border border-neutral-800 group-hover:border-[#FF4F00] flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-[#FF4F00]" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#EDEDED] group-hover:text-[#FF4F00] transition-colors">
                    WHATSAPP DIRECT
                  </div>
                  <div className="text-xs font-mono text-neutral-400 tabular-nums mt-0.5">
                    {DEVELOPER_PROFILE.phoneFormatted}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#FF4F00] transition-colors" />
            </a>

            <a
              href={DEVELOPER_PROFILE.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-[#090909] hover:bg-[#111111] transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 bg-[#141414] border border-neutral-800 group-hover:border-[#FF4F00] flex items-center justify-center">
                  <Send className="w-4 h-4 text-[#EDEDED]" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#EDEDED] group-hover:text-[#FF4F00] transition-colors">
                    TELEGRAM CHANNEL
                  </div>
                  <div className="text-xs font-mono text-neutral-400 tabular-nums mt-0.5">
                    {DEVELOPER_PROFILE.phoneFormatted}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#FF4F00] transition-colors" />
            </a>

            <a
              href={DEVELOPER_PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-[#090909] hover:bg-[#111111] transition-colors flex items-center justify-between group"
            >
              <div>
                <div className="text-xs font-mono font-bold text-[#EDEDED] group-hover:text-[#FF4F00] transition-colors">
                  LINKEDIN // IN/MARC-NAVARRO-GAYA
                </div>
                <div className="text-xs font-mono text-neutral-400 mt-0.5">
                  Professional Network &amp; Recommendations
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#FF4F00] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
