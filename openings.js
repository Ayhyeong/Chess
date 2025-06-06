// openings.js
const openings = [
  { moves: ['d4'], name: 'Queen\'s Pawn Opening' },
  { moves: ['d4', 'b6'], name: 'English Defence' },
  { moves: ['d4', 'c6', 'e4', 'd5'], name: 'Caro-Kann Defence' },
  { moves: ['d4', 'd5'], name: 'Closed Game' },
  { moves: ['d4', 'e5'], name: 'Englund Gambit' },
  { moves: ['d4', 'e6', 'c4', 'b6'], name: 'English Defence' },
  { moves: ['d4', 'd5', 'c4'], name: 'Queen\'s Gambit' },
  { moves: ['d4', 'd5', 'c4', 'e5'], name: 'Queen\'s Gambit Declined: Albin Counter-Gambit' },
  { moves: ['d4', 'd5', 'c4', 'e5', 'dxe5', 'd4', 'e3', 'Bb4+', 'Bd2', 'dxe3'], name: 'QGD: Albin Counter-Gambit, Lasker Variation' },
  { moves: ['d4', 'd5', 'c4', 'e5', 'dxe5', 'd4', 'e3', 'Bb4+', 'Bd2', 'dxe3', 'Bxb4'], name: 'QGD: Albin Counter-Gambit, Lasker Trap' },
  { moves: ['e4'], name: 'King\'s Pawn Opening' },
  { moves: ['e4', 'c5'], name: 'Sicilian Defence' },
  { moves: ['e4', 'c6'], name: 'Caro-Kann Defence' },
  { moves: ['e4', 'e5'], name: 'Double King\'s Pawn Opening' },
  { moves: ['e4', 'e5', 'Nf3'], name: 'King\'s Knight Opening' },
  { moves: ['e4', 'e5', 'Nf3', 'f5'], name: 'Latvian Gambit' },
  { moves: ['e4', 'e5', 'Nf3', 'f5', 'exf5'], name: 'Latvian Gambit Accepted' },
  { moves: ['e4', 'e5', 'Nf3', 'f5', 'Bc4'], name: 'Latvian Gambit, Mayet Attack' },
  { moves: ['e4', 'e5', 'Nf3', 'f5', 'Bc4', 'fxe4', 'Nxe5', 'd5'], name: 'Latvian, Mayet, Polerio-Svedenborg Variation' },
  { moves: ['e4', 'e5', 'Nf3', 'f5', 'Bc4', 'fxe4', 'Nxe5', 'Qg5', 'd4', 'Qxg2'], name: 'Latvian , Mayet, Poisoned Pawn Variation' },
  { moves: ['e4', 'e5', 'Nf3', 'f5', 'Bc4', 'fxe4', 'Nxe5', 'Qg5', 'd4', 'Qxg2', 'Qh5+', 'g6', 'Bf7+', 'Kd8', 'Bxg6'], name: 'Latvian , Mayet, Poisoned Pawn, Duke of Courland Variation' },
  { moves: ['e4', 'e5', 'Nf3', 'f5', 'Bc4', 'fxe4', 'Nxe5', 'Qg5', 'Nf7', 'Qxg2', 'Rf1', 'd5', 'Nxh8', 'Nf6'], name: 'Latvian, Mayet, Bētiņš Variation' },
  { moves: ['e4', 'e5', 'Nf3', 'f5', 'Nc3'], name: 'Latvian Gambit, Młotkowski Variation' },
  { moves: ['e4', 'e5', 'Nf3', 'f5', 'Nxe5'], name: 'Latvian Gambit, 3.Nxe5' },
  { moves: ['e4', 'e5', 'Nf3', 'f5', 'Nxe5', 'Qf6', 'd4'], name: 'Latvian Gambit, Main Line' },
  { moves: ['e4', 'e5', 'Nf3', 'f5', 'Nxe5', 'Qf6', 'd4', 'd6', 'Nc4'], name: 'Latvian Gambit, Main Line, Bilguer Variation' },
  { moves: ['e4', 'e5', 'Nf3', 'f5', 'Nxe5', 'Qf6', 'Nc4'], name: 'Latvian Gambit, Foltys-Leonhardt Variation' },
  { moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5'], name: 'Ruy Lopez Opening' },
  { moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'Nf6'], name: 'Ruy Lopez Opening: Berlin Defence' },
  { moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'Nf6', 'O-O', 'Nxe4'], name: 'Ruy Lopez Opening: Berlin, Rio Gambit Accepted' },
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
  { moves: ['e4', 'e5', 'f4', 'exf4', 'Nf3', 'd5'], name: 'KGA: Modern Defence' },
  { moves: ['e4', 'e5', 'f4', 'exf4', 'Nf3', 'g5', 'Bc4', 'g4', 'O-O'], name: 'KGA: Muzio Gambit' },
  { moves: ['e4', 'e5', 'f4', 'exf4', 'Nf3', 'g5', 'Bc4', 'g4', 'O-O', 'gxf3', 'Qxf3', 'Qe7'], name: 'KGA: Muzio Gambit, From\'s Defence' },
  { moves: ['e4', 'e5', 'f4', 'exf4', 'Nf3', 'g5', 'Bc4', 'g4', 'O-O', 'gxf3', 'Qxf3', 'Qf6'], name: 'KGA: Muzio Gambit, Sarratt Defence' },
  { moves: ['e4', 'e5', 'f4', 'exf4', 'Nf3', 'g5', 'Bc4', 'g4', 'O-O', 'gxf3', 'Qxf3', 'Qf6', 'e5', 'Qxe5', 'Bxf7+'], name: 'KGA: Double Muzio Gambit' },
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
  let matched = '';
  let maxLength = 0;
  for (const opening of openings) {
    if (history.length < opening.moves.length) continue;
    const match = opening.moves.every((move, i) => move === history[i]);
    if (match && opening.moves.length > maxLength) {
      matched = opening.name;
      maxLength = opening.moves.length;
    }
  }
  return matched;
}
