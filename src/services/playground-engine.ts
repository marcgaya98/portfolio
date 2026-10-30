import type { ClassificationPrediction } from '../domain/types';

interface GenreRule {
  readonly genre: string;
  readonly patterns: readonly RegExp[];
  readonly baseProbability: number;
}

const HIGH_CONFIDENCE_THRESHOLD = 0.8;
const MEDIUM_CONFIDENCE_THRESHOLD = 0.6;

const CANONICAL_GENRE_RULES: readonly GenreRule[] = [
  {
    genre: 'Special Summon',
    patterns: [/special summon/i],
    baseProbability: 0.9214,
  },
  {
    genre: 'Cannot perform Normal Summon',
    patterns: [/cannot be normal summoned/i, /must first be special summoned/i, /must be special summoned/i],
    baseProbability: 0.9432,
  },
  {
    genre: 'Remove card from play',
    patterns: [/banish/i, /remove from play/i, /removed from play/i],
    baseProbability: 0.8945,
  },
  {
    genre: 'Destroy Spell/Trap',
    patterns: [/destroy.*spell/i, /destroy.*trap/i, /spells and traps/i],
    baseProbability: 0.8812,
  },
  {
    genre: 'Destroy monster',
    patterns: [/destroy.*monster/i, /destroy all monsters/i, /destroy 1.*monster/i, /destroy that target/i],
    baseProbability: 0.8691,
  },
  {
    genre: 'Recover cards from Graveyard',
    patterns: [/from your graveyard/i, /from your gy/i, /from the gy/i, /in your graveyard/i],
    baseProbability: 0.8476,
  },
  {
    genre: 'Search Deck',
    patterns: [/from your deck to your hand/i, /add 1 .* from your deck/i, /excavate/i],
    baseProbability: 0.9318,
  },
  {
    genre: 'Increase/Decrease ATK/DEF',
    patterns: [/gain \d+ atk/i, /lose \d+ atk/i, /atk\/def/i, /gains \d+ atk/i, /def/i],
    baseProbability: 0.8754,
  },
  {
    genre: 'Reduce Life Points',
    patterns: [/inflict \d+ damage/i, /damage to your opponent/i, /life points/i],
    baseProbability: 0.8622,
  },
  {
    genre: 'Attribute',
    patterns: [/\b(FIRE|WATER|WIND|EARTH|LIGHT|DARK)\b/],
    baseProbability: 0.8195,
  },
  {
    genre: 'Type',
    patterns: [/\b(Warrior|Spellcaster|Dragon|Zombie|Machine|Fiend|Pyro|Beast)-Type\b/i],
    baseProbability: 0.8341,
  },
];

function resolveConfidenceTier(probability: number): 'High' | 'Medium' | 'Low' {
  if (probability >= HIGH_CONFIDENCE_THRESHOLD) {
    return 'High';
  }
  if (probability >= MEDIUM_CONFIDENCE_THRESHOLD) {
    return 'Medium';
  }
  return 'Low';
}

export function evaluateCardMechanicsText(
  cardText: string,
  threshold: number
): readonly ClassificationPrediction[] {
  const normalizedText = cardText.trim();
  if (!normalizedText) {
    return [];
  }

  const predictions: ClassificationPrediction[] = [];

  for (const rule of CANONICAL_GENRE_RULES) {
    const matchedCount = rule.patterns.filter((regex) => regex.test(normalizedText)).length;
    const rawProbability =
      matchedCount > 0
        ? Math.min(0.985, rule.baseProbability + (matchedCount - 1) * 0.025)
        : 0.08 + ((rule.genre.length * 7) % 19) / 100;

    const probability = Number(rawProbability.toFixed(4));
    if (probability >= threshold) {
      predictions.push({
        genre: rule.genre,
        probability,
        confidence: resolveConfidenceTier(probability),
      });
    }
  }

  return predictions.sort((a, b) => b.probability - a.probability);
}
