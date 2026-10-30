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
    'Architecting decoupled Enterprise Backends (DDD, Hexagonal Architecture, TypeScript/Java) and production-grade AI Systems (PyTorch, FastAPI, Model Context Protocol & Multimodal Vector Search).',
  availabilityStatus: 'Available for Applied AI, Backend Enterprise & Full Stack Roles (Remote / Valencia)',
  location: 'Valencia / Castellón, Spain (Remote Ready)',
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
      label: 'Download AI & ML CV',
      badge: 'Applied AI / Python / PyTorch / MCP',
      filePath: '/cv/Marc_Navarro_Gaya_CV_AI.pdf',
      focusSummary: 'FastAPI, PyTorch, Hugging Face Fine-Tuning, LLM Agents & MCP Servers',
    },
    {
      id: 'backend',
      label: 'Download Backend CV',
      badge: 'DDD / Hexagonal / Java & TypeScript',
      filePath: '/cv/Marc_Navarro_Gaya_CV_Backend.pdf',
      focusSummary: 'Domain-Driven Design, Clean Architecture, SOLID, TypeScript, Java & SQL',
    },
  ],
};

export const FEATURED_PROJECTS: readonly FeaturedProject[] = [
  {
    id: 'yugioh-ts-ddd',
    title: 'yugioh-ts-ddd',
    subtitle: 'Hexagonal DDD Backend & Multimodal CLIP (512-D) Vector Search Engine',
    categoryBadge: 'Enterprise DDD + Vector Search',
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
      { label: 'Bounded Contexts', value: '7 Isolated' },
      { label: 'CLIP Inference', value: '< 12 ms' },
      { label: 'Embedded Catalog', value: '2,449 Cards' },
      { label: 'Automated Tests', value: '57 Passing' },
    ],
    problemSolved:
      'Unifies complex relational game mechanics (booster pack exclusivity, banlists, duelist decks) with natural-language text-to-image and image-to-image visual search.',
    architecturalDecision:
      'Replaced legacy 21-D color heuristics with in-process quantized ONNX CLIP (512-dim L2-normalized vectors), achieving sub-12ms cosine similarity scans with zero external Vector DB network hops.',
    quickstartCommand: 'docker compose up --build',
  },
  {
    id: 'yugi-mcp',
    title: 'yugi-mcp (v2.0)',
    subtitle: 'Model Context Protocol (MCP) Gateway — 22 AI Agent Tools over stdio',
    categoryBadge: 'LLM Agents & MCP Server',
    repositoryUrl: 'https://github.com/marcgaya98/yugi-mcp',
    playgroundMode: 'yugi-mcp',
    techTags: [
      'TypeScript 5.8',
      'MCP SDK (stdio)',
      'JSON-RPC 2.0',
      'Zod Validation',
      'SOLID (OCP / ISP)',
      'Docker',
    ],
    metrics: [
      { label: 'Registered Tools', value: '22 Tools' },
      { label: 'Segregated Ports', value: '5 ISP Ports' },
      { label: 'Dispatcher Lookup', value: 'O(1) Map' },
      { label: 'Stdout Noise', value: '0 Bytes' },
    ],
    problemSolved:
      'Enables LLM hosts (Claude Desktop, Cursor, IDEs) to autonomously inspect card mechanics, calculate pack exclusivity, and run multimodal CLIP visual queries.',
    architecturalDecision:
      'Engineered an O(1) dynamic McpToolRegistry (Open/Closed Principle) and strict stderr telemetry isolation (McpLogger) to guarantee zero JSON-RPC 2.0 frame corruption on stdout.',
    quickstartCommand: 'docker compose up --build',
  },
  {
    id: 'card-analysis',
    title: 'card-analysis',
    subtitle: 'Multi-Label RoBERTa Deep Learning Classifier with Weighted BCE Loss',
    categoryBadge: 'Deep Learning NLP + FastAPI',
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
      { label: 'Target Mechanics', value: '11 Genres' },
      { label: 'Batch Latency', value: '18.2 ms' },
      { label: 'Curated Dataset', value: '854 Cards' },
      { label: 'Test Suite', value: '13 Passing' },
    ],
    problemSolved:
      'Automatically classifies dense Problem-Solving Card Text (PSCT) into 11 non-exclusive gameplay mechanics (Special Summon, Banish, Search Deck, ATK/DEF, etc.).',
    architecturalDecision:
      'Fine-tuned a 125M-parameter RoBERTa encoder with custom inverse-frequency WeightedBCEWithLogitsLoss to prevent minority-class collapse, running locally at zero token cost.',
    quickstartCommand: 'docker compose up --build',
  },
  {
    id: 'linkedin-job-optimizer',
    title: 'linkedin-job-optimizer',
    subtitle: 'Strategic Boolean Job Discovery & ATS Golden Rule Intelligence Engine',
    categoryBadge: 'AI Automation & Data Pipeline',
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
      { label: 'Boolean Tracks', value: '3 Streams' },
      { label: 'Time Window', value: '< 24h (r86400)' },
      { label: 'Golden Rule', value: '< 30 Applicants' },
      { label: 'Unit Tests', value: '6 Passing' },
    ],
    problemSolved:
      'Eliminates generic single-keyword job noise by executing strict Boolean queries across Backend Java, Applied AI, and Full Stack tracks while prioritizing early-applicant windows.',
    architecturalDecision:
      'Combines URL-encoded boolean operators with LinkedIn native 24h filters (f_TPR=r86400), applicant-count regex parsing, and Claude tool-use structured evaluation with deterministic fallback.',
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
    queryLabel: '🗡️ Warrior with Sword & Armor',
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
    queryLabel: '🐉 Fiery Dragon with Wings',
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
    queryLabel: '🔮 Dark Spellcaster & Magic Circle',
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
    title: 'Backend Enterprise & Architecture',
    subtitle: 'DDD, Hexagonal Architecture, Clean Code & Distributed Messaging',
    radarScore: 94,
    accentColor: '#38bdf8',
    skills: [
      { name: 'Domain-Driven Design (DDD) & Hexagonal', proficiency: 95, highlight: '7 Bounded Contexts in yugioh-ts-ddd' },
      { name: 'TypeScript 5.8 & Node.js (Express 5)', proficiency: 94, highlight: 'Strict typing, DI Containers & REST APIs' },
      { name: 'Java 21 & Spring Boot', proficiency: 88, highlight: 'Enterprise ERP & transactional microservices' },
      { name: 'SOLID Principles & Clean Code', proficiency: 96, highlight: 'OCP registries, ISP ports & SLAP use cases' },
      { name: 'RabbitMQ & Event-Driven Systems', proficiency: 85, highlight: 'Decoupled asynchronous domain messaging' },
    ],
  },
  {
    id: 'applied-ai',
    title: 'Applied AI, LLMs & Deep Learning',
    subtitle: 'PyTorch, Transformers Fine-Tuning, MCP Servers & Vector Search',
    radarScore: 95,
    accentColor: '#a855f7',
    skills: [
      { name: 'Python 3.11/3.12 & FastAPI', proficiency: 96, highlight: 'Async ML inference microservices & Pydantic v2' },
      { name: 'PyTorch & Hugging Face (RoBERTa)', proficiency: 92, highlight: 'Multi-label fine-tuning + Weighted BCE Loss' },
      { name: 'Model Context Protocol (MCP SDK)', proficiency: 96, highlight: '22 AI Agent tools over JSON-RPC 2.0 stdio' },
      { name: 'Multimodal Vector Search (ONNX CLIP)', proficiency: 93, highlight: '512-dim L2 cosine similarity (<12ms)' },
      { name: 'Claude Tool-Use & Playwright ETL', proficiency: 91, highlight: 'Structured LLM evaluation & stealth scraping' },
    ],
  },
  {
    id: 'devops-data',
    title: 'Databases, DevOps & Quality',
    subtitle: 'Relational Persistence, Containerization & Automated CI/CD',
    radarScore: 90,
    accentColor: '#34d399',
    skills: [
      { name: 'MySQL 8, PostgreSQL & SQLite', proficiency: 92, highlight: 'Sequelize & SQLAlchemy ORM + schema migrations' },
      { name: 'Docker & Multi-Stage Compose', proficiency: 93, highlight: 'CPU & NVIDIA GPU runtime profiles' },
      { name: 'GitHub Actions CI/CD & Conventional Git', proficiency: 94, highlight: 'Automated build/test pipelines across all repos' },
      { name: 'Automated Testing (Jest, Pytest, Node)', proficiency: 92, highlight: '80+ unit, schema & E2E integration tests' },
    ],
  },
  {
    id: 'frontend-ui',
    title: 'Modern Frontend & Interactive UI',
    subtitle: 'SSR Islands, Reactive Dashboards & Design Systems',
    radarScore: 91,
    accentColor: '#f59e0b',
    skills: [
      { name: 'Astro 5 (SSR & Islands Architecture)', proficiency: 92, highlight: 'Zero-JS default with selective hydration' },
      { name: 'React 19 & TypeScript', proficiency: 93, highlight: 'Interactive API playgrounds & custom hooks' },
      { name: 'Tailwind CSS & Responsive UI', proficiency: 94, highlight: 'Dark-mode executive engineering interfaces' },
      { name: 'Streamlit & Plotly Analytics', proficiency: 90, highlight: 'Real-time data visualization dashboards' },
    ],
  },
];
