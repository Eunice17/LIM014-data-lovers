import {
  orderByMxCP,
  orderRegion,
  orderAlpha,
  filterEvolution
} from '../src/data.js';

const data = [{
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.69",
    "stats": {
      "max-cp": "1115"
    }
  },
  {
    "num": "002",
    "name": "ivysaur",
    "generation": {
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.042",
    "stats": {
      "max-cp": "1699"
    }
  },
  {
    "num": "004",
    "name": "charmander",
    "generation": {
      "name": "kanto"
    },
    "type": [
      "fire"
    ],
    "spawn-chance": "0.253",
    "stats": {
      "max-cp": "980"
    }
  },
  {
    "num": "152",
    "name": "chikorita",
    "generation": {
      "name": "johto"
    },
    "type": [
      "grass"
    ],
    "spawn-chance": "3.6",
    "stats": {
      "max-cp": "935"
    }
  },
  {
    "num": "153",
    "name": "bayleef",
    "generation": {
      "name": "johto"
    },
    "type": [
      "grass"
    ],
    "spawn-chance": "1.31",
    "stats": {
      "max-cp": "1454"
    }
  },
  {
    "num": "154",
    "name": "meganium",
    "generation": {
      "name": "johto"
    },
    "type": [
      "fire"
    ],
    "spawn-chance": "2.5",
    "stats": {
      "max-cp": "2410"
    }
  },
];
const resultMay = [{
    "num": "154",
    "name": "meganium",
    "generation": {
      "name": "johto"
    },
    "type": [
      "fire"
    ],
    "spawn-chance": "2.5",
    "stats": {
      "max-cp": "2410"
    }
  },

  {
    "num": "002",
    "name": "ivysaur",
    "generation": {
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.042",
    "stats": {
      "max-cp": "1699"
    }
  },
  {
    "num": "153",
    "name": "bayleef",
    "generation": {
      "name": "johto"
    },
    "type": [
      "grass"
    ],
    "spawn-chance": "1.31",
    "stats": {
      "max-cp": "1454"
    }
  },
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.69",
    "stats": {
      "max-cp": "1115"
    }
  },

  {
    "num": "004",
    "name": "charmander",
    "generation": {
      "name": "kanto"
    },
    "type": [
      "fire"
    ],
    "spawn-chance": "0.253",
    "stats": {
      "max-cp": "980"
    }
  },
  {
    "num": "152",
    "name": "chikorita",
    "generation": {
      "name": "johto"
    },
    "type": [
      "grass"
    ],
    "spawn-chance": "3.6",
    "stats": {
      "max-cp": "935"
    }
  },

];

const resultMen = [{
    "num": "152",
    "name": "chikorita",
    "generation": {
      "name": "johto"
    },
    "type": [
      "grass"
    ],
    "spawn-chance": "3.6",
    "stats": {
      "max-cp": "935"
    }
  },
  {
    "num": "004",
    "name": "charmander",
    "generation": {
      "name": "kanto"
    },
    "type": [
      "fire"
    ],
    "spawn-chance": "0.253",
    "stats": {
      "max-cp": "980"
    }
  },
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.69",
    "stats": {
      "max-cp": "1115"
    }
  },
  {
    "num": "153",
    "name": "bayleef",
    "generation": {
      "name": "johto"
    },
    "type": [
      "grass"
    ],
    "spawn-chance": "1.31",
    "stats": {
      "max-cp": "1454"
    }
  },
  {
    "num": "002",
    "name": "ivysaur",
    "generation": {
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.042",
    "stats": {
      "max-cp": "1699"
    }
  },
  {
    "num": "154",
    "name": "meganium",
    "generation": {
      "name": "johto"
    },
    "type": [
      "fire"
    ],
    "spawn-chance": "2.5",
    "stats": {
      "max-cp": "2410"
    }
  },
]

describe('orderByMxCP', () => {
  it('It should be a function', () => {
    expect(typeof orderByMxCP).toBe('function');
  });
  it('Should order the largest CP', () => {
    expect(orderByMxCP('1', data)).toEqual(resultMay);
  });
  it('I should order the lowest CP', () => {
    expect(orderByMxCP('2', data)).toEqual(resultMen);
  });
});

const resultReg = [{
    "num": "004",
    "name": "charmander",
    "generation": {
      "name": "kanto"
    },
    "type": [
      "fire"
    ],
    "spawn-chance": "0.253",
    "stats": {
      "max-cp": "980"
    }
  },
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.69",
    "stats": {
      "max-cp": "1115"
    }
  },
  {
    "num": "002",
    "name": "ivysaur",
    "generation": {
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.042",
    "stats": {
      "max-cp": "1699"
    }
  },
]

describe('orderRegion', () => {
  it('It should be a function', () => {
    expect(typeof orderRegion).toBe('function');
  });
  it('Should show Pokemons from the Kanto region', () => {
    expect(orderRegion('2', data)).toEqual(resultReg);
  });

});

const ResultOrdAlph = [{
    "num": "153",
    "name": "bayleef",
    "generation": {
      "name": "johto"
    },
    "type": [
      "grass"
    ],
    "spawn-chance": "1.31",
    "stats": {
      "max-cp": "1454"
    }
  },
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.69",
    "stats": {
      "max-cp": "1115"
    }
  },
  {
    "num": "004",
    "name": "charmander",
    "generation": {
      "name": "kanto"
    },
    "type": [
      "fire"
    ],
    "spawn-chance": "0.253",
    "stats": {
      "max-cp": "980"
    }
  },
  {
    "num": "152",
    "name": "chikorita",
    "generation": {
      "name": "johto"
    },
    "type": [
      "grass"
    ],
    "spawn-chance": "3.6",
    "stats": {
      "max-cp": "935"
    }
  },
  {
    "num": "002",
    "name": "ivysaur",
    "generation": {
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.042",
    "stats": {
      "max-cp": "1699"
    }
  },
  {
    "num": "154",
    "name": "meganium",
    "generation": {
      "name": "johto"
    },
    "type": [
      "fire"
    ],
    "spawn-chance": "2.5",
    "stats": {
      "max-cp": "2410"
    }
  },
]
describe('orderAlpha', () => {
  it('It should be a function', () => {
    expect(typeof orderAlpha).toBe('function');
  });
  it('I should order the A-Z', () => {
    expect(orderAlpha('1', data)).toEqual(ResultOrdAlph);
  });
});

const ResultEvolution = [{
  "num": "001",
  "name": "bulbasaur",
  "generation": {
    "name": "kanto"
  },
  "type": [
    "grass",
    "poison"
  ],
  "spawn-chance": "0.69",
  "stats": {
    "max-cp": "1115"
  }
},
]

describe('filterEvolution', () => {
  it('It should be a function', () => {
    expect(typeof filterEvolution).toBe('function');
  });
  it('I should look for "Bulbasaur"', () => {
    expect(filterEvolution(data,'BULBASAUR')).toEqual(ResultEvolution);
  });
});
