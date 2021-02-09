import { searchPokemon } from '../src/data.js';

describe('search', () => {
  it('is a function', () => {
    expect(typeof searchPokemon).toBe('function');
  });

  // it('returns `example`', () => {
  //   expect(example()).toBe('example');
  // });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
