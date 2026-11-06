export type PlaygroundModeId = 'card-analysis' | 'yugi-mcp' | 'yugioh-ts-ddd';

export interface CvDocument {
  readonly id: 'ai' | 'backend';
  readonly code: string;
  readonly label: string;
  readonly badge: string;
  readonly filePath: string;
  readonly focusSummary: string;
}

export interface DeveloperProfile {
  readonly fullName: string;
  readonly displayName: string;
  readonly headline: string;
  readonly subheadline: string;
  readonly availabilityStatus: string;
  readonly location: string;
  readonly email: string;
  readonly phoneRaw: string;
  readonly phoneFormatted: string;
  readonly githubUrl: string;
  readonly linkedinUrl: string;
  readonly whatsappUrl: string;
  readonly telegramUrl: string;
  readonly cvs: readonly CvDocument[];
}

export interface ProjectMetric {
  readonly label: string;
  readonly value: string;
}

export interface FeaturedProject {
  readonly id: string;
  readonly systemCode: string;
  readonly title: string;
  readonly subtitle: string;
  readonly categoryBadge: string;
  readonly architectureTopology: string;
  readonly repositoryUrl: string;
  readonly playgroundMode?: PlaygroundModeId;
  readonly techTags: readonly string[];
  readonly metrics: readonly ProjectMetric[];
  readonly problemSolved: string;
  readonly architecturalDecision: string;
  readonly quickstartCommand: string;
}

export interface ClassificationPrediction {
  readonly genre: string;
  readonly probability: number;
  readonly confidence: 'High' | 'Medium' | 'Low';
}

export interface CardClassificationPreset {
  readonly id: string;
  readonly cardName: string;
  readonly cardText: string;
  readonly defaultThreshold: number;
  readonly predictions: readonly ClassificationPrediction[];
  readonly processingTimeMs: number;
}

export interface McpToolPreset {
  readonly id: string;
  readonly toolName: string;
  readonly domainPort: string;
  readonly description: string;
  readonly argumentsJson: Record<string, unknown>;
  readonly stderrLog: string;
  readonly responsePayload: Record<string, unknown>;
  readonly executionTimeMs: number;
}

export interface ClipVisualMatch {
  readonly cardId: number;
  readonly name: string;
  readonly attribute: string;
  readonly similarityScore: number;
  readonly frameType: string;
}

export interface ClipSearchPreset {
  readonly id: string;
  readonly queryLabel: string;
  readonly queryText: string;
  readonly matches: readonly ClipVisualMatch[];
  readonly executionTimeMs: number;
}

export interface SkillItem {
  readonly name: string;
  readonly specification: string;
  readonly productionEvidence: string;
  readonly repositoryName?: string;
  readonly repositoryUrl?: string;
}

export interface SkillRadarCategory {
  readonly id: string;
  readonly domainCode: string;
  readonly title: string;
  readonly subtitle: string;
  readonly metricsSummary: string;
  readonly layerRole: string;
  readonly skills: readonly SkillItem[];
}
