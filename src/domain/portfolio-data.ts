import type {
  CardClassificationPreset,
  ClipSearchPreset,
  DeveloperProfile,
  FeaturedProject,
  McpToolPreset,
  SkillRadarCategory,
} from './types';

export const DEVELOPER_PROFILE: DeveloperProfile = {
  fullName: 'Marc Navarro Gaya',
  displayName: 'Marc Gaya',
  headline: 'Software & Applied AI Engineer',
  subheadline:
    'Architecting decoupled Enterprise Backends (DDD, Hexagonal Architecture, TypeScript / Java) and production-grade AI Systems (PyTorch, FastAPI, Model Context Protocol & Multimodal Vector Search).',
  availabilityStatus: 'AVAILABLE // APPLIED AI, BACKEND ENTERPRISE & FULL STACK',
  location: 'VALENCIA / CASTELLÓN, ES (REMOTE READY)',
  email: 'marcgaya@gmail.com',
  phoneRaw: '+34638562934',
  phoneFormatted: '+34 638 562 934',
  githubUrl: 'https://github.com/marcgaya98',
  linkedinUrl: 'https://www.linkedin.com/in/marc-navarro-gaya/',
  whatsappUrl: 'https://wa.me/34638562934',
  telegramUrl: 'https://t.me/+34638562934',
  cvs: [
    {
      id: 'ai',
      code: 'DOC-01 // AI-ML',
      label: 'Applied AI & Machine Learning CV',
      badge: 'PyTorch • FastAPI • MCP • ONNX CLIP',
      filePath: '/cv/Marc_Navarro_Gaya_CV_AI.pdf',
      focusSummary: 'Deep Learning Fine-Tuning, Multi-Label NLP, LLM Agent Protocols & Vector Search',
    },
    {
      id: 'backend',
      code: 'DOC-02 // BACKEND-DDD',
      label: 'Backend Enterprise & DDD CV',
      badge: 'DDD • Hexagonal • TypeScript • Java',
      filePath: '/cv/Marc_Navarro_Gaya_CV_Backend.pdf',
      focusSummary: 'Bounded Contexts, SOLID Architecture, Distributed Messaging & SQL Persistence',
    },
  ],
};

export const FEATURED_PROJECTS: readonly FeaturedProject[] = [
  {
    id: 'yugioh-ts-ddd',
    systemCode: 'SYS-01 // CORE-DDD',
    title: 'yugioh-ts-ddd',
    subtitle: 'Hexagonal DDD Backend & Multimodal CLIP (512-D) Vector Search Engine',
    categoryBadge: 'ENTERPRISE DDD + VECTOR ENGINE',
    architectureTopology:
      'Express 5 Controller -> Application UseCase -> Domain Repository Port -> In-Process ONNX CLIP ViT-B/32 (512-D L2) + MySQL 8',
    repositoryUrl: 'https://github.com/marcgaya98/yugioh-ts-ddd',
    playgroundMode: 'yugioh-ts-ddd',
    techTags: [
      'TypeScript 5',
      'DDD & Hexagonal',
      'ONNX CLIP ViT-B/32',
      'Express 5',
      'Sequelize / MySQL 8',
      'Docker Compose',
    ],
    metrics: [
      { label: 'Bounded Contexts', value: '07' },
      { label: 'CLIP p95 Latency', value: '<12ms' },
      { label: 'Vector Catalog', value: '2,449' },
      { label: 'Test Suite', value: '57 PASS' },
    ],
    problemSolved:
      'Unifies relational tournament mechanics (booster pack exclusivity, banlists, duelist decks) with zero-hop text-to-image and image-to-image artwork search.',
    architecturalDecision:
      'Replaced legacy 21-D color histograms with in-process quantized ONNX CLIP (512-dim L2-normalized vectors), achieving sub-12ms cosine similarity scans without external vector DB network overhead.',
    quickstartCommand: 'docker compose up --build',
  },
  {
    id: 'yugi-mcp',
    systemCode: 'SYS-02 // MCP-STDIO',
    title: 'yugi-mcp',
    subtitle: 'Model Context Protocol (MCP) v2.0 Gateway — 22 Agent Tools over stdio',
    categoryBadge: 'LLM PROTOCOL GATEWAY',
    architectureTopology:
      'LLM Host (Claude / IDE) --[stdio JSON-RPC 2.0]--> McpToolRegistry (O(1) Map) -> 5 Segregated ISP Ports -> Core DDD REST API',
    repositoryUrl: 'https://github.com/marcgaya98/yugi-mcp',
    playgroundMode: 'yugi-mcp',
    techTags: [
      'TypeScript 5.8',
      'MCP SDK (stdio)',
      'JSON-RPC 2.0',
      'Zod Schemas',
      'SOLID (OCP / ISP)',
      'Docker',
    ],
    metrics: [
      { label: 'Registered Tools', value: '22' },
      { label: 'Segregated Ports', value: '05 ISP' },
      { label: 'Dispatch Lookup', value: 'O(1)' },
      { label: 'Stdout Noise', value: '0 B' },
    ],
    problemSolved:
      'Exposes deterministic domain operations, pack exclusivity resolution, and multimodal CLIP search to autonomous LLM hosts over strict JSON-RPC 2.0 streams.',
    architecturalDecision:
      'Engineered an Open/Closed McpToolRegistry with O(1) dispatch and strict stderr telemetry isolation (McpLogger) to guarantee zero JSON-RPC frame corruption on stdout.',
    quickstartCommand: 'docker compose up --build',
  },
  {
    id: 'card-analysis',
    systemCode: 'SYS-03 // NLP-ROBERTA',
    title: 'card-analysis',
    subtitle: 'Multi-Label RoBERTa Deep Learning Classifier with Weighted BCE Loss',
    categoryBadge: 'PYTORCH NLP + FASTAPI',
    architectureTopology:
      'FastAPI Async Endpoint -> Pydantic v2 Validator -> RoBERTa-base (125M) Encoder -> Inverse-Frequency Weighted Sigmoid Head (11 Classes)',
    repositoryUrl: 'https://github.com/marcgaya98/card-analysis',
    playgroundMode: 'card-analysis',
    techTags: [
      'Python 3.11',
      'PyTorch',
      'RoBERTa-base',
      'FastAPI',
      'Pydantic v2',
      'CUDA FP16 / CPU',
    ],
    metrics: [
      { label: 'Target Classes', value: '11' },
      { label: 'Batch Inference', value: '18.2ms' },
      { label: 'Training Corpus', value: '854' },
      { label: 'Pytest Suite', value: '13 PASS' },
    ],
    problemSolved:
      'Parses dense Problem-Solving Card Text (PSCT) into 11 non-exclusive gameplay mechanics (Special Summon, Banish, Search Deck, ATK/DEF modification) in a single pass.',
    architecturalDecision:
      'Fine-tuned a 125M-parameter RoBERTa encoder using custom inverse-frequency WeightedBCEWithLogitsLoss to prevent minority-class collapse, eliminating external LLM token costs.',
    quickstartCommand: 'docker compose up --build',
  },
  {
    id: 'linkedin-job-optimizer',
    systemCode: 'SYS-04 // ETL-AGENT',
    title: 'linkedin-job-optimizer',
    subtitle: 'Strategic Boolean Job Discovery & ATS Golden Rule Intelligence Pipeline',
    categoryBadge: 'AUTOMATION + CLAUDE TOOL-USE',
    architectureTopology:
      'Boolean Query Builder (r86400) -> Playwright Stealth Scraper -> Applicant Parser (<30 Rule) -> Claude 3.5 Sonnet Evaluator -> SQLite + Streamlit',
    repositoryUrl: 'https://github.com/marcgaya98/linkedin-job-optimizer',
    techTags: [
      'Python 3.12',
      'Playwright Stealth',
      'Claude 3.5 Sonnet',
      'Streamlit + Plotly',
      'SQLAlchemy',
      'SQLite',
    ],
    metrics: [
      { label: 'Boolean Streams', value: '03' },
      { label: 'Time Filter', value: '24H' },
      { label: 'Golden Rule', value: '<30 APP' },
      { label: 'Unit Tests', value: '06 PASS' },
    ],
    problemSolved:
      'Eliminates single-keyword job noise by executing strict URL-encoded Boolean queries across Backend Java, Applied AI, and Full Stack tracks within 24-hour windows.',
    architecturalDecision:
      'Combines LinkedIn native 24h epoch filters (f_TPR=r86400), regex applicant-volume extraction (<30 Golden Rule), and structured Claude tool-use scoring with deterministic fallback.',
    quickstartCommand: './run.sh dashboard',
  },
];

export const CARD_CLASSIFICATION_PRESETS: readonly CardClassificationPreset[] = [
  {
    id: 'sacred-phoenix',
    cardName: 'Sacred Phoenix of Nephthys',
    cardText:
      'Once per turn, during your next Standby Phase after this card was destroyed by a card effect and sent to the GY: Special Summon this card from the GY. If you do: Destroy all Spells and Traps on the field.',
    defaultThreshold: 0.5,
    processingTimeMs: 18.2,
    predictions: [
      { genre: 'Special Summon', probability: 0.9124, confidence: 'High' },
      { genre: 'Destroy Spell/Trap', probability: 0.8741, confidence: 'High' },
      { genre: 'Recover cards from Graveyard', probability: 0.8419, confidence: 'High' },
      { genre: 'Destroy monster', probability: 0.2814, confidence: 'Low' },
      { genre: 'Remove card from play', probability: 0.1402, confidence: 'Low' },
    ],
  },
  {
    id: 'chaos-sorcerer',
    cardName: 'Chaos Sorcerer / Inferno',
    cardText:
      'Cannot be Normal Summoned/Set. Must first be Special Summoned (from your hand) by banishing 1 FIRE monster from your GY. If this card destroys an opponent monster by battle: Inflict 1500 damage to your opponent.',
    defaultThreshold: 0.5,
    processingTimeMs: 16.8,
    predictions: [
      { genre: 'Cannot perform Normal Summon', probability: 0.9481, confidence: 'High' },
      { genre: 'Special Summon', probability: 0.9215, confidence: 'High' },
      { genre: 'Remove card from play', probability: 0.8892, confidence: 'High' },
      { genre: 'Reduce Life Points', probability: 0.8544, confidence: 'High' },
      { genre: 'Attribute', probability: 0.7812, confidence: 'Medium' },
    ],
  },
  {
    id: 'reinforcement-army',
    cardName: 'Reinforcement of the Army & Stat Boost',
    cardText:
      'Add 1 Level 4 or lower Warrior-Type monster from your Deck to your hand. All Warrior-Type monsters you control gain 500 ATK and 400 DEF during the Battle Phase.',
    defaultThreshold: 0.5,
    processingTimeMs: 15.4,
    predictions: [
      { genre: 'Search Deck', probability: 0.9512, confidence: 'High' },
      { genre: 'Type', probability: 0.9034, confidence: 'High' },
      { genre: 'Increase/Decrease ATK/DEF', probability: 0.8865, confidence: 'High' },
      { genre: 'Special Summon', probability: 0.194, confidence: 'Low' },
    ],
  },
];

export const MCP_TOOL_PRESETS: readonly McpToolPreset[] = [
  {
    id: 'clip-visual-search',
    toolName: 'search_cards_by_visual_description',
    domainPort: 'SemanticSearchApiPort',
    description: 'Searches 2,449 card artworks using 512-dim ONNX CLIP text-to-image embeddings',
    argumentsJson: {
      query: 'warrior with sword and heavy armor',
      limit: 3,
    },
    stderrLog:
      '[INFO] [McpToolRegistry] Dispatched "search_cards_by_visual_description" via SemanticSearchApiPort (stdout 0 bytes noise)',
    executionTimeMs: 11.4,
    responsePayload: {
      jsonrpc: '2.0',
      id: 1,
      result: {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              [
                { id: 871, name: 'Headless Knight', attribute: 'EARTH', similarityScore: 94 },
                { id: 2525, name: 'Zombyra the Dark', attribute: 'DARK', similarityScore: 93 },
                { id: 392, name: 'Command Knight', attribute: 'FIRE', similarityScore: 92 },
              ],
              null,
              2
            ),
          },
        ],
      },
    },
  },
  {
    id: 'obtention-exclusivity',
    toolName: 'get_card_obtention_methods',
    domainPort: 'ObtentionApiPort',
    description: 'Resolves all in-game acquisition sources and exclusivity flags for a card ID',
    argumentsJson: {
      cardId: 18,
    },
    stderrLog:
      '[INFO] [McpToolRegistry] Dispatched "get_card_obtention_methods" via ObtentionApiPort -> GET /api/obtentions/card/18',
    executionTimeMs: 8.7,
    responsePayload: {
      jsonrpc: '2.0',
      id: 2,
      result: {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                cardId: 18,
                isExclusive: false,
                totalSources: 3,
                sources: {
                  boosterPacks: ['First Monster Pack', 'Step Up Spell/Trap'],
                  characterRewards: ['Jaden Yuki (Partner Lv. 4)'],
                  cardConverter: false,
                },
              },
              null,
              2
            ),
          },
        ],
      },
    },
  },
  {
    id: 'banlist-stats',
    toolName: 'get_limit_list_stats',
    domainPort: 'LimitListAndStatsApiPort',
    description: 'Retrieves Forbidden, Limited, and Semi-Limited card distribution for a tournament format',
    argumentsJson: {
      listName: 'Game Original',
    },
    stderrLog:
      '[INFO] [McpToolRegistry] Dispatched "get_limit_list_stats" via LimitListAndStatsApiPort -> GET /api/limit-lists/stats',
    executionTimeMs: 6.9,
    responsePayload: {
      jsonrpc: '2.0',
      id: 3,
      result: {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                listName: 'Game Original (GX Tag Force)',
                forbiddenCount: 18,
                limitedCount: 44,
                semiLimitedCount: 19,
                totalRestrictedCards: 81,
              },
              null,
              2
            ),
          },
        ],
      },
    },
  },
];

export const CLIP_SEARCH_PRESETS: readonly ClipSearchPreset[] = [
  {
    id: 'warrior-armor',
    queryLabel: 'Q-01 // Warrior with Sword & Heavy Armor',
    queryText: 'warrior with sword and armor',
    executionTimeMs: 11.4,
    matches: [
      { cardId: 871, name: 'Headless Knight', attribute: 'EARTH', similarityScore: 94, frameType: 'Effect Monster' },
      { cardId: 2525, name: 'Zombyra the Dark', attribute: 'DARK', similarityScore: 93, frameType: 'Effect Monster' },
      { cardId: 392, name: 'Command Knight', attribute: 'FIRE', similarityScore: 92, frameType: 'Effect Monster' },
    ],
  },
  {
    id: 'fiery-dragon',
    queryLabel: 'Q-02 // Fiery Dragon with Wings',
    queryText: 'fiery dragon with wings breathing fire',
    executionTimeMs: 10.9,
    matches: [
      { cardId: 912, name: 'Horus the Black Flame Dragon LV8', attribute: 'FIRE', similarityScore: 96, frameType: 'Effect Monster' },
      { cardId: 1844, name: 'Red-Eyes Black Dragon', attribute: 'DARK', similarityScore: 94, frameType: 'Normal Monster' },
      { cardId: 2109, name: 'Armed Dragon LV7', attribute: 'WIND', similarityScore: 91, frameType: 'Effect Monster' },
    ],
  },
  {
    id: 'dark-spellcaster',
    queryLabel: 'Q-03 // Dark Spellcaster & Magic Circle',
    queryText: 'dark wizard spellcaster with magical staff',
    executionTimeMs: 12.1,
    matches: [
      { cardId: 401, name: 'Dark Magician', attribute: 'DARK', similarityScore: 97, frameType: 'Normal Monster' },
      { cardId: 408, name: 'Dark Magician of Chaos', attribute: 'DARK', similarityScore: 95, frameType: 'Effect Monster' },
      { cardId: 1512, name: 'Skilled Dark Magician', attribute: 'DARK', similarityScore: 93, frameType: 'Effect Monster' },
    ],
  },
];

export const TECH_STACK_RADAR: readonly SkillRadarCategory[] = [
  {
    id: 'backend-enterprise',
    domainCode: 'DOM-01 // CORE-ARCH',
    title: 'Backend Enterprise & Domain Architecture',
    subtitle: 'Domain-Driven Design, Hexagonal Ports & Adapters, SOLID & Distributed Systems',
    metricsSummary: '7 Bounded Contexts • 5 Segregated Ports • Zero Domain Coupling',
    layerRole: 'Domain & Application Core',
    skills: [
      {
        name: 'Domain-Driven Design (DDD) & Hexagonal',
        specification: 'Aggregates, Value Objects, Domain Ports & Infrastructure Adapters',
        productionEvidence: '7 isolated Bounded Contexts with strict inward dependency rule',
        repositoryName: 'yugioh-ts-ddd',
        repositoryUrl: 'https://github.com/marcgaya98/yugioh-ts-ddd',
      },
      {
        name: 'SOLID Architecture (OCP / ISP / DIP)',
        specification: 'O(1) Registry Pattern, Segregated Client Ports & Constructor DI',
        productionEvidence: 'Dynamic McpToolRegistry & 5 segregated HTTP client interfaces',
        repositoryName: 'yugi-mcp',
        repositoryUrl: 'https://github.com/marcgaya98/yugi-mcp',
      },
      {
        name: 'TypeScript 5.8 & Node.js (Express 5)',
        specification: 'Strict type safety, Zod runtime contracts & async controllers',
        productionEvidence: 'REST API + JSON-RPC 2.0 gateway with 57 automated tests',
        repositoryName: 'yugioh-ts-ddd',
        repositoryUrl: 'https://github.com/marcgaya98/yugioh-ts-ddd',
      },
      {
        name: 'Java 21, Spring Boot & Event Messaging',
        specification: 'Transactional ERP microservices, JPA/Hibernate & RabbitMQ queues',
        productionEvidence: 'Enterprise backend architecture & boolean track optimization',
        repositoryName: 'linkedin-job-optimizer',
        repositoryUrl: 'https://github.com/marcgaya98/linkedin-job-optimizer',
      },
    ],
  },
  {
    id: 'applied-ai',
    domainCode: 'DOM-02 // APPLIED-AI',
    title: 'Applied AI, Deep Learning & Agent Protocols',
    subtitle: 'PyTorch Fine-Tuning, Multimodal Vector Embeddings, MCP & Structured LLM Tool-Use',
    metricsSummary: '125M RoBERTa • 512-D ONNX CLIP (<12ms) • 22 MCP Tools',
    layerRole: 'Intelligence & Inference Layer',
    skills: [
      {
        name: 'PyTorch & Hugging Face (RoBERTa-base)',
        specification: 'Custom WeightedBCEWithLogitsLoss & FP16 mixed-precision inference',
        productionEvidence: 'Multi-label classifier across 11 mechanics (18.2ms batch latency)',
        repositoryName: 'card-analysis',
        repositoryUrl: 'https://github.com/marcgaya98/card-analysis',
      },
      {
        name: 'Model Context Protocol (MCP SDK v2.0)',
        specification: 'JSON-RPC 2.0 over stdio with zero stdout telemetry pollution',
        productionEvidence: '22 autonomous agent tools for Claude Desktop, Cursor & IDEs',
        repositoryName: 'yugi-mcp',
        repositoryUrl: 'https://github.com/marcgaya98/yugi-mcp',
      },
      {
        name: 'Multimodal Vector Search (ONNX CLIP)',
        specification: 'Quantized ViT-B/32 512-dim L2-normalized cosine similarity',
        productionEvidence: 'In-process visual & semantic search across 2,449 card artworks',
        repositoryName: 'yugioh-ts-ddd',
        repositoryUrl: 'https://github.com/marcgaya98/yugioh-ts-ddd',
      },
      {
        name: 'FastAPI, Pydantic v2 & Claude Tool-Use',
        specification: 'Async ML inference endpoints & deterministic LLM fallback pipelines',
        productionEvidence: 'Production REST API (/classify, /stats) & CV-match scoring engine',
        repositoryName: 'card-analysis',
        repositoryUrl: 'https://github.com/marcgaya98/card-analysis',
      },
    ],
  },
  {
    id: 'devops-data',
    domainCode: 'DOM-03 // DATA-OPS',
    title: 'Persistence, Containers & CI/CD Quality',
    subtitle: 'Relational ORMs, Multi-Stage Docker Topologies & Automated Test Suites',
    metricsSummary: 'MySQL 8 / SQLite • CPU/GPU Docker • 78+ Automated Tests',
    layerRole: 'Infrastructure & Persistence Layer',
    skills: [
      {
        name: 'MySQL 8, PostgreSQL & SQLite Persistence',
        specification: 'Sequelize & SQLAlchemy ORMs with idempotent schema auto-migration',
        productionEvidence: 'Relational catalog + vector storage & applicant tracking DB',
        repositoryName: 'yugioh-ts-ddd',
        repositoryUrl: 'https://github.com/marcgaya98/yugioh-ts-ddd',
      },
      {
        name: 'Multi-Stage Docker & Compose Profiles',
        specification: 'Reproducible builds with dedicated CPU and NVIDIA CUDA GPU targets',
        productionEvidence: 'Single-command docker compose up across all backend & ML services',
        repositoryName: 'card-analysis',
        repositoryUrl: 'https://github.com/marcgaya98/card-analysis',
      },
      {
        name: 'GitHub Actions CI/CD & Conventional Git',
        specification: 'Automated lint, typecheck, build & test verification pipelines',
        productionEvidence: 'Continuous verification workflows across all 5 repositories',
        repositoryName: 'yugi-mcp',
        repositoryUrl: 'https://github.com/marcgaya98/yugi-mcp',
      },
      {
        name: 'Automated Verification (Jest, Pytest, Node)',
        specification: 'Unit, schema validation, FastAPI TestClient & E2E suites',
        productionEvidence: '57 TS tests + 13 Pytest ML tests + 6 Boolean parser unit tests',
        repositoryName: 'linkedin-job-optimizer',
        repositoryUrl: 'https://github.com/marcgaya98/linkedin-job-optimizer',
      },
    ],
  },
  {
    id: 'frontend-ui',
    domainCode: 'DOM-04 // CLIENT-UI',
    title: 'Modern Frontend & Interactive Engineering UI',
    subtitle: 'Zero-JS Default Islands Architecture, Reactive Consoles & Analytics Dashboards',
    metricsSummary: 'Astro 5 SSR • React 19 Islands • Streamlit + Plotly',
    layerRole: 'Presentation & Inspection Layer',
    skills: [
      {
        name: 'Astro 5 & Selective Hydration Islands',
        specification: 'Static/SSR blueprint layout with zero-bundle overhead by default',
        productionEvidence: 'High-contrast Geist/Oxide architectural portfolio on Vercel',
        repositoryName: 'portfolio',
        repositoryUrl: 'https://github.com/marcgaya98/portfolio',
      },
      {
        name: 'React 19 & TypeScript Interactive State',
        specification: 'Strict typed props, protocol inspectors & live threshold sliders',
        productionEvidence: 'Multi-mode RoBERTa / MCP JSON-RPC / CLIP vector sandbox',
        repositoryName: 'portfolio',
        repositoryUrl: 'https://github.com/marcgaya98/portfolio',
      },
      {
        name: 'Tailwind CSS Blueprint Design System',
        specification: '1px structural hairline grids, tabular numerals & monochrome tokens',
        productionEvidence: 'Precision engineering interface without template bloat',
        repositoryName: 'portfolio',
        repositoryUrl: 'https://github.com/marcgaya98/portfolio',
      },
      {
        name: 'Streamlit & Plotly Data Dashboards',
        specification: 'Interactive ATS filtering (<30 applicants, <24h window) & visual analytics',
        productionEvidence: 'Real-time Boolean job intelligence dashboard',
        repositoryName: 'linkedin-job-optimizer',
        repositoryUrl: 'https://github.com/marcgaya98/linkedin-job-optimizer',
      },
    ],
  },
];
