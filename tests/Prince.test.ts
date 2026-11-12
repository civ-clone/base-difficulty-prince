import Difficulty from '@civ-clone/core-difficulty/Difficulty';
import Prince from '../Prince';
import { expect } from 'chai';

describe('Prince', (): void => {
  it('is a difficulty at level 2', (): void => {
    expect(Object.prototype.isPrototypeOf.call(Difficulty, Prince)).true;
    expect(Prince.level()).equal(2);
    expect(Prince.name).equal('Prince');
  });
});
