import {
  searchPokemon,
  orderByMxCP,
  orderRegion,
  filterByType,
  orderAlpha,
  filterTopshow,
  filterEvolution,
} from "../src/data.js";

const data = [
  {
    num: "001",
    name: "bulbasaur",
    generation: {
      name: "kanto",
    },
    type: ["grass", "poison"],
    "spawn-chance": "0.69",
    stats: {
      "max-cp": "1115",
    },
  },
  {
    num: "002",
    name: "ivysaur",
    generation: {
      name: "kanto",
    },
    type: ["grass", "poison"],
    "spawn-chance": "0.042",
    stats: {
      "max-cp": "1699",
    },
  },
  {
    num: "004",
    name: "charmander",
    generation: {
      name: "kanto",
    },
    type: ["fire"],
    "spawn-chance": "0.253",
    stats: {
      "max-cp": "980",
    },
  },
  {
    num: "152",
    name: "chikorita",
    generation: {
      name: "johto",
    },
    type: ["grass"],
    "spawn-chance": "3.6",
    stats: {
      "max-cp": "935",
    },
  },
  {
    num: "153",
    name: "bayleef",
    generation: {
      name: "johto",
    },
    type: ["grass"],
    "spawn-chance": "1.31",
    stats: {
      "max-cp": "1454",
    },
  },
  {
    num: "154",
    name: "meganium",
    generation: {
      name: "johto",
    },
    type: ["fire"],
    "spawn-chance": "2.5",
    stats: {
      "max-cp": "2410",
    },
  },
];
const search = [
  {
    num: "004",
    name: "charmander",
    generation: {
      name: "kanto",
    },
    type: ["fire"],
    "spawn-chance": "0.253",
    stats: {
      "max-cp": "980",
    },
  },
  {
    num: "152",
    name: "chikorita",
    generation: {
      name: "johto",
    },
    type: ["grass"],
    "spawn-chance": "3.6",
    stats: {
      "max-cp": "935",
    },
  },
];

const topResult = [
  {
    num: "152",
    name: "chikorita",
    generation: {
      name: "johto",
    },
    type: ["grass"],
    "spawn-chance": "3.6",
    stats: {
      "max-cp": "935",
    },
  },
  {
    num: "154",
    name: "meganium",
    generation: {
      name: "johto",
    },
    type: ["fire"],
    "spawn-chance": "2.5",
    stats: {
      "max-cp": "2410",
    },
  },
  {
    num: "153",
    name: "bayleef",
    generation: {
      name: "johto",
    },
    type: ["grass"],
    "spawn-chance": "1.31",
    stats: {
      "max-cp": "1454",
    },
  },
  {
    num: "001",
    name: "bulbasaur",
    generation: {
      name: "kanto",
    },
    type: ["grass", "poison"],
    "spawn-chance": "0.69",
    stats: {
      "max-cp": "1115",
    },
  },
  {
    num: "004",
    name: "charmander",
    generation: {
      name: "kanto",
    },
    type: ["fire"],
    "spawn-chance": "0.253",
    stats: {
      "max-cp": "980",
    },
  },
  {
    num: "002",
    name: "ivysaur",
    generation: {
      name: "kanto",
    },
    type: ["grass", "poison"],
    "spawn-chance": "0.042",
    stats: {
      "max-cp": "1699",
    },
  },
];
const type = [
  {
    num: "004",
    name: "charmander",
    generation: {
      name: "kanto",
    },
    type: ["fire"],
    "spawn-chance": "0.253",
    stats: {
      "max-cp": "980",
    },
  },
  {
    num: "154",
    name: "meganium",
    generation: {
      name: "johto",
    },
    type: ["fire"],
    "spawn-chance": "2.5",
    stats: {
      "max-cp": "2410",
    },
  },
];

describe("Search Pokemon", () => {
  it("is a function", () => {
    expect(typeof searchPokemon).toBe("function");
  });

  it("Pokemon returns with initials ch `searchPokemon`", () => {
    expect(searchPokemon(data, "ch")).toEqual(search);
  });
});

describe("Filter by type Pokemon", () => {
  it("is a function", () => {
    expect(typeof filterByType).toBe("function");
  });

  it("Filter by type Fire `filterByType`", () => {
    expect(filterByType(data, "type", "fire")).toEqual(type);
  });
});

describe("Top 10 frequency of appearance", () => {
  it("is a function", () => {
    expect(typeof filterTopshow).toBe("function");
  });

  it("Returns the object in descending order by spawn chance `filterTopshow`", () => {
    expect(filterTopshow(data)).toEqual(topResult);
  });
});
const resultMay = [
  {
    num: "154",
    name: "meganium",
    generation: {
      name: "johto",
    },
    type: ["fire"],
    "spawn-chance": "2.5",
    stats: {
      "max-cp": "2410",
    },
  },

  {
    num: "002",
    name: "ivysaur",
    generation: {
      name: "kanto",
    },
    type: ["grass", "poison"],
    "spawn-chance": "0.042",
    stats: {
      "max-cp": "1699",
    },
  },
  {
    num: "153",
    name: "bayleef",
    generation: {
      name: "johto",
    },
    type: ["grass"],
    "spawn-chance": "1.31",
    stats: {
      "max-cp": "1454",
    },
  },
  {
    num: "001",
    name: "bulbasaur",
    generation: {
      name: "kanto",
    },
    type: ["grass", "poison"],
    "spawn-chance": "0.69",
    stats: {
      "max-cp": "1115",
    },
  },

  {
    num: "004",
    name: "charmander",
    generation: {
      name: "kanto",
    },
    type: ["fire"],
    "spawn-chance": "0.253",
    stats: {
      "max-cp": "980",
    },
  },
  {
    num: "152",
    name: "chikorita",
    generation: {
      name: "johto",
    },
    type: ["grass"],
    "spawn-chance": "3.6",
    stats: {
      "max-cp": "935",
    },
  },
];

const resultMen = [
  {
    num: "152",
    name: "chikorita",
    generation: {
      name: "johto",
    },
    type: ["grass"],
    "spawn-chance": "3.6",
    stats: {
      "max-cp": "935",
    },
  },
  {
    num: "004",
    name: "charmander",
    generation: {
      name: "kanto",
    },
    type: ["fire"],
    "spawn-chance": "0.253",
    stats: {
      "max-cp": "980",
    },
  },
  {
    num: "001",
    name: "bulbasaur",
    generation: {
      name: "kanto",
    },
    type: ["grass", "poison"],
    "spawn-chance": "0.69",
    stats: {
      "max-cp": "1115",
    },
  },
  {
    num: "153",
    name: "bayleef",
    generation: {
      name: "johto",
    },
    type: ["grass"],
    "spawn-chance": "1.31",
    stats: {
      "max-cp": "1454",
    },
  },
  {
    num: "002",
    name: "ivysaur",
    generation: {
      name: "kanto",
    },
    type: ["grass", "poison"],
    "spawn-chance": "0.042",
    stats: {
      "max-cp": "1699",
    },
  },
  {
    num: "154",
    name: "meganium",
    generation: {
      name: "johto",
    },
    type: ["fire"],
    "spawn-chance": "2.5",
    stats: {
      "max-cp": "2410",
    },
  },
];

describe("Sort by maximum or minimum pokemon CP", () => {
  it("It should be a function", () => {
    expect(typeof orderByMxCP).toBe("function");
  });
  it("Should order the largest CP", () => {
    expect(orderByMxCP("1", data)).toEqual(resultMay);
  });
  it("I should order the lowest CP", () => {
    expect(orderByMxCP("2", data)).toEqual(resultMen);
  });
});

const resultKanto = [
  {
    num: "004",
    name: "charmander",
    generation: {
      name: "kanto",
    },
    type: ["fire"],
    "spawn-chance": "0.253",
    stats: {
      "max-cp": "980",
    },
  },
  {
    num: "001",
    name: "bulbasaur",
    generation: {
      name: "kanto",
    },
    type: ["grass", "poison"],
    "spawn-chance": "0.69",
    stats: {
      "max-cp": "1115",
    },
  },
  {
    num: "002",
    name: "ivysaur",
    generation: {
      name: "kanto",
    },
    type: ["grass", "poison"],
    "spawn-chance": "0.042",
    stats: {
      "max-cp": "1699",
    },
  },
];
const resultJohto = [
  {
    num: "152",
    name: "chikorita",
    generation: {
      name: "johto",
    },
    type: ["grass"],
    "spawn-chance": "3.6",
    stats: {
      "max-cp": "935",
    },
  },
  {
    num: "153",
    name: "bayleef",
    generation: {
      name: "johto",
    },
    type: ["grass"],
    "spawn-chance": "1.31",
    stats: {
      "max-cp": "1454",
    },
  },
  {
    num: "154",
    name: "meganium",
    generation: {
      name: "johto",
    },
    type: ["fire"],
    "spawn-chance": "2.5",
    stats: {
      "max-cp": "2410",
    },
  },
];

describe("order region Kanto", () => {
  it("It should be a function", () => {
    expect(typeof orderRegion).toBe("function");
  });
  it("Should show all Pokemons", () => {
    expect(orderRegion("1", data)).toEqual(data);
  });
  it("Should show Pokemons from the Kanto region", () => {
    expect(orderRegion("2", data)).toEqual(resultKanto);
  });
  it("Should show Pokemons from the Johto region", () => {
    expect(orderRegion("3", data)).toEqual(resultJohto);
  });
});

const up = [
  {
    num: "153",
    name: "bayleef",
    generation: {
      name: "johto",
    },
    type: ["grass"],
    "spawn-chance": "1.31",
    stats: {
      "max-cp": "1454",
    },
  },
  {
    num: "001",
    name: "bulbasaur",
    generation: {
      name: "kanto",
    },
    type: ["grass", "poison"],
    "spawn-chance": "0.69",
    stats: {
      "max-cp": "1115",
    },
  },
  {
    num: "004",
    name: "charmander",
    generation: {
      name: "kanto",
    },
    type: ["fire"],
    "spawn-chance": "0.253",
    stats: {
      "max-cp": "980",
    },
  },
  {
    num: "152",
    name: "chikorita",
    generation: {
      name: "johto",
    },
    type: ["grass"],
    "spawn-chance": "3.6",
    stats: {
      "max-cp": "935",
    },
  },
  {
    num: "002",
    name: "ivysaur",
    generation: {
      name: "kanto",
    },
    type: ["grass", "poison"],
    "spawn-chance": "0.042",
    stats: {
      "max-cp": "1699",
    },
  },
  {
    num: "154",
    name: "meganium",
    generation: {
      name: "johto",
    },
    type: ["fire"],
    "spawn-chance": "2.5",
    stats: {
      "max-cp": "2410",
    },
  },
];
const falling = [
  {
    num: "154",
    name: "meganium",
    generation: {
      name: "johto",
    },
    type: ["fire"],
    "spawn-chance": "2.5",
    stats: {
      "max-cp": "2410",
    },
  },
  {
    num: "002",
    name: "ivysaur",
    generation: {
      name: "kanto",
    },
    type: ["grass", "poison"],
    "spawn-chance": "0.042",
    stats: {
      "max-cp": "1699",
    },
  },
  {
    num: "152",
    name: "chikorita",
    generation: {
      name: "johto",
    },
    type: ["grass"],
    "spawn-chance": "3.6",
    stats: {
      "max-cp": "935",
    },
  },
  {
    num: "004",
    name: "charmander",
    generation: {
      name: "kanto",
    },
    type: ["fire"],
    "spawn-chance": "0.253",
    stats: {
      "max-cp": "980",
    },
  },
  {
    num: "001",
    name: "bulbasaur",
    generation: {
      name: "kanto",
    },
    type: ["grass", "poison"],
    "spawn-chance": "0.69",
    stats: {
      "max-cp": "1115",
    },
  },
  {
    num: "153",
    name: "bayleef",
    generation: {
      name: "johto",
    },
    type: ["grass"],
    "spawn-chance": "1.31",
    stats: {
      "max-cp": "1454",
    },
  },
];
describe("Sort alphabetically", () => {
  it("It should be a function", () => {
    expect(typeof orderAlpha).toBe("function");
  });
  it("I should order the A-Z", () => {
    expect(orderAlpha("1", data)).toEqual(up);
  });
  it("I should order the Z-A", () => {
    expect(orderAlpha("2", data)).toEqual(falling);
  });
});

const ResultEvolution = [
  {
    num: "001",
    name: "bulbasaur",
    generation: {
      name: "kanto",
    },
    type: ["grass", "poison"],
    "spawn-chance": "0.69",
    stats: {
      "max-cp": "1115",
    },
  },
];

describe("filterEvolution", () => {
  it("It should be a function", () => {
    expect(typeof filterEvolution).toBe("function");
  });

  it('I should look for "BULBASAUR" "bulbasaur"', () => {
    expect(filterEvolution(data, "BULBASAUR")).toEqual(ResultEvolution);
  });
});
