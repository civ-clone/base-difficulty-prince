import Difficulty from '@civ-clone/core-difficulty/Difficulty';

// Level 2: a ruleset registers the levels it offers in the game's `availableDifficulties`, and its rules read `level()`.
export class Prince extends Difficulty {
  static level(): number {
    return 2;
  }
}

export default Prince;
