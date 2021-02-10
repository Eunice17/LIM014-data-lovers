import { searchPokemon, filterByType, filterTopshow } from "../src/data.js";

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

describe("search", () => {
  it("is a function", () => {
    expect(typeof searchPokemon).toBe("function");
  });

  it("Retorna los resultados de la busqueda `searchPokemon`", () => {
    expect(searchPokemon(data, "ch")).toEqual(search);
  });
});

describe("anotherExample", () => {
  it("is a function", () => {
    expect(typeof filterByType).toBe("function");
  });

  // it(" `filterByType`", () => {
  //   expect(filterByType()).toBe("OMG");
  // });
});

describe("Filtrar por top de frecuencia de aparición", () => {
  it("is a function", () => {
    expect(typeof filterTopshow).toBe("function");
  });

  it(" `filterTopshow`", () => {
    expect(filterTopshow(data)).toEqual(topResult);
  });
});
