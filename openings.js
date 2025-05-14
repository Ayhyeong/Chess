// openings.js
const openings = [
  { moves: ['d4', 'd5', 'c4'], name: 'Queen\'s Gambit' },
  { moves: ['e4'], name: 'King\'s Pawn Opening' },
  { moves: ['e4', 'c5'], name: 'Sicilian Defence' },
  { moves: ['e4', 'e5'], name: 'Double King\'s Pawn Opening' },
  { moves: ['e4', 'e5', 'Nf3', 'f5'], name: 'Latvian Gambit' },
  { moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4'], name: 'Italian Game' },
  { moves: ['e4', 'e5', 'f4'], name: 'King\'s Gambit' },
  { moves: ['e4', 'e5', 'f4', 'exf4'], name: 'King\'s Gambit Accepted' },
  { moves: ['e4', 'e5', 'f4', 'exf4', 'd4'], name: 'KGA: Villemson Gambit' },
  { moves: ['e4', 'e5', 'f4', 'exf4', 'h4'], name: 'KGA: Stamma Gambit' },
  { moves: ['e4', 'e5', 'f4', 'exf4', 'Nc3'], name: 'KGA: Mason-Keres Gambit' },
  { moves: ['e4', 'e5', 'f4', 'exf4', 'Qf3'], name: 'KGA: Breyer Gambit' },
  { moves: ['e4', 'e5', 'f4', 'exf4', 'Kf2'], name: 'KGA: Tumbleweed' },
  { moves: ['e4', 'e5', 'f4', 'exf4', 'Bc4'], name: 'KGA: Bishop\'s Gambit' },
  { moves: ['e4', 'e5', 'f4', 'exf4', 'Nf3'], name: 'KGA: King\'s Knight Gambit' },
  { moves: ['e4', 'e5', 'f4', 'c5'], name: 'King\'s Gambit Declined: Mafia Defence' },
  { moves: ['e4', 'e5', 'f4', 'd5'], name: 'King\'s Gambit Declined: Falkbeer Counter-Gambit' },
  { moves: ['e4', 'e5', 'f4', 'f5'], name: 'King\'s Gambit Declined: Panteldakis Counter-Gambit' },
  { moves: ['e4', 'e5', 'f4', 'Nc6'], name: 'King\'s Gambit Declined: Queen\'s Knight Defence' },
  { moves: ['e4', 'e5', 'f4', 'Qh4+'], name: 'King\'s Gambit Declined: Keene\'s Defence' },
  { moves: ['e4', 'e5', 'f4', 'Bc5'], name: 'King\'s Gambit Declined: Classical Defence' },
  { moves: ['e4', 'e5', 'f4', 'Nf6'], name: 'King\'s Gambit Declined: Petrov\'s Defence' },
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
