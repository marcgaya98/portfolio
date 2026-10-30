import React, { useState } from 'react';
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
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-[#0d1526] to-slate-900 border border-slate-800 p-8 sm:p-12 shadow-2xl">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
              Direct Engineering Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Build High-Impact Systems Together?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether you need a decoupled Backend Architecture (DDD / Java / TypeScript) or an Applied AI &amp; MCP pipeline in production, reach out directly with a single click.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* One-Click Copy Email Button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono font-bold text-sm shadow-lg shadow-sky-500/20 transition-all cursor-pointer"
            >
              <span>{copied ? '✓ Copied to Clipboard!' : `📋 ${DEVELOPER_PROFILE.email}`}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-slate-950/20">
                {copied ? 'Done' : 'Copy'}
              </span>
            </button>

            {/* Direct WhatsApp */}
            <a
              href={DEVELOPER_PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 font-mono text-sm font-semibold transition-all"
            >
              💬 WhatsApp ({DEVELOPER_PROFILE.phoneFormatted}) ↗
            </a>

            {/* Direct Telegram */}
            <a
              href={DEVELOPER_PROFILE.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 border border-sky-500/30 font-mono text-sm font-semibold transition-all"
            >
              ✈️ Telegram ↗
            </a>

            {/* LinkedIn */}
            <a
              href={DEVELOPER_PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-mono text-sm transition-all"
            >
              LinkedIn Profile ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
