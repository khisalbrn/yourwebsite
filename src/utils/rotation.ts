import type { CategoryKey } from '../data/content';
import { CONTENT } from '../data/content';

const SHOWN_KEY = (cat: CategoryKey) => `shown_${cat}`;

export function getNextEntry(category: CategoryKey): number {
  const entries = CONTENT[category];
  const total = entries.length;

  if (total === 1) return 0;

  const raw = localStorage.getItem(SHOWN_KEY(category));
  let shown: number[] = raw ? JSON.parse(raw) : [];

  const available = Array.from({ length: total }, (_, i) => i).filter(
    (i) => !shown.includes(i)
  );

  if (available.length === 0) {
    shown = [];
    localStorage.setItem(SHOWN_KEY(category), JSON.stringify(shown));
    const all = Array.from({ length: total }, (_, i) => i);
    const pick = all[Math.floor(Math.random() * all.length)];
    localStorage.setItem(SHOWN_KEY(category), JSON.stringify([pick]));
    return pick;
  }

  const pick = available[Math.floor(Math.random() * available.length)];
  shown.push(pick);
  localStorage.setItem(SHOWN_KEY(category), JSON.stringify(shown));
  return pick;
}
