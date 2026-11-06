import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve(import.meta.dirname, '..');

describe('Marc Gaya Portfolio — Architecture & Anti-AI-Slop Blueprint Tests', () => {
  it('defines all 4 flagship repositories and dual CV tracks in portfolio-data.ts', () => {
    const dataFile = fs.readFileSync(
      path.join(projectRoot, 'src/domain/portfolio-data.ts'),
      'utf-8'
    );

    assert.ok(dataFile.includes('https://www.linkedin.com/in/marc-navarro-gaya/'));
    assert.ok(dataFile.includes('marcgaya@gmail.com'));
    assert.ok(dataFile.includes('+34638562934'));
    assert.ok(dataFile.includes('Marc_Navarro_Gaya_CV_AI.pdf'));
    assert.ok(dataFile.includes('Marc_Navarro_Gaya_CV_Backend.pdf'));

    assert.ok(dataFile.includes('yugioh-ts-ddd'));
    assert.ok(dataFile.includes('yugi-mcp'));
    assert.ok(dataFile.includes('card-analysis'));
    assert.ok(dataFile.includes('linkedin-job-optimizer'));
  });

  it('includes all 5 required single-page sections in index.astro', () => {
    const indexAstro = fs.readFileSync(
      path.join(projectRoot, 'src/pages/index.astro'),
      'utf-8'
    );

    assert.ok(indexAstro.includes('<HeroSection />'));
    assert.ok(indexAstro.includes('<FeaturedProjectsGrid />'));
    assert.ok(indexAstro.includes('<InteractivePlayground client:load />'));
    assert.ok(indexAstro.includes('<TechStackRadar client:visible />'));
    assert.ok(indexAstro.includes('<ContactSection client:visible />'));
  });

  it('enforces Vercel Geist / Oxide Blueprint aesthetic with zero UI emojis', () => {
    const filesToCheck = [
      'src/layouts/BaseLayout.astro',
      'src/domain/portfolio-data.ts',
      'src/components/Navbar.astro',
      'src/components/HeroSection.astro',
      'src/components/FeaturedProjectsGrid.astro',
      'src/components/InteractivePlayground.tsx',
      'src/components/TechStackRadar.tsx',
      'src/components/ContactSection.tsx',
    ];

    const bannedEmojis = ['⚡', '🧠', '🤖', '📄', '💬', '✈️', '🗡️', '🐉', '🔮', '📋'];

    for (const relativePath of filesToCheck) {
      const content = fs.readFileSync(path.join(projectRoot, relativePath), 'utf-8');
      for (const emoji of bannedEmojis) {
        assert.ok(
          !content.includes(emoji),
          `Found banned AI-slop emoji "${emoji}" in ${relativePath}`
        );
      }
    }

    const baseLayout = fs.readFileSync(
      path.join(projectRoot, 'src/layouts/BaseLayout.astro'),
      'utf-8'
    );
    assert.ok(baseLayout.includes('family=Geist'));
    assert.ok(baseLayout.includes('family=JetBrains+Mono'));
    assert.ok(baseLayout.includes('#090909'));
    assert.ok(baseLayout.includes('#FF4F00'));
  });
});
