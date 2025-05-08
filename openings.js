// openings.js
const openings = [
  { moves: ['d4', 'd5', 'c4'], name: 'Queen\'s Gambit' },
  { moves: ['e4', 'c5'], name: 'Sicilian Defence' },
  { moves: ['e4', 'e5', 'Nf3', 'f5'], name: 'Latvian Gambit' },
  { moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4'], name: 'Italian Game' },
  { moves: ['e4', 'e5', 'f4'], name: 'King\'s Gambit' },
  // ... more
];

function detectOpening(history) {
  for (const opening of openings) {
    if (history.length < opening.moves.length) continue;
    const match = opening.moves.every((move, i) => move === history[i]);
    if (match) return opening.name;
  }
  return '';
}
