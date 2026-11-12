"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prince = void 0;
const Difficulty_1 = require("@civ-clone/core-difficulty/Difficulty");
// Level 2: a ruleset registers the levels it offers in the game's `availableDifficulties`, and its rules read `level()`.
class Prince extends Difficulty_1.default {
    static level() {
        return 2;
    }
}
exports.Prince = Prince;
exports.default = Prince;
//# sourceMappingURL=Prince.js.map