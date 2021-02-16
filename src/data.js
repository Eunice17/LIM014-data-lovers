export const searchPokemon = (obj, dato) => {
  const resultSearch = obj.filter((item) => item.name.startsWith(dato.toLowerCase()));
  return resultSearch;
};
export const orderAlpha = (option, arrayShow) => {
  switch (option) {
    case "1":
      arrayShow.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "2":
      arrayShow.sort((a, b) => a.name.localeCompare(b.name));
      arrayShow.reverse();
      break;
    default:
  }
  return arrayShow;
};
export const orderRegion = (option, array) => {
  let arrayRegion = [];
  switch (option) {
    case "1":
      arrayRegion = array.sort((a, b) => b.num - a.num);
      arrayRegion.reverse();
      break;
    case "2":
      arrayRegion = array.filter((item) => item.generation.name === "kanto");
      break;
    case "3":
      arrayRegion = array.filter((item) => item.generation.name === "johto");
      break;
    default:
  }
  return arrayRegion;
};

// Filtrar por CP
export const orderByMxCP = (option, arrayShow) => {
  switch (option) {
    case "1":
      arrayShow.sort((a, b) => b.stats["max-cp"] - a.stats["max-cp"]);
      break;
    case "2":
      arrayShow.sort((a, b) => b.stats["max-cp"] - a.stats["max-cp"]);
      arrayShow.reverse();
      break;
    default:
  }
  return arrayShow;
};

// Filtrar pokemon por Tipo
export const filterByType = (obj, property, condition) => {
  const arrayType = obj.filter(
    (element) => element[property][0] === condition || element[property][1] === condition,
  );
  return arrayType;
};

// Top 10
export const filterTopshow = (pokemonList) => {
  pokemonList.sort((a, b) => a["spawn-chance"] - b["spawn-chance"]);
  pokemonList.reverse();
  return pokemonList;
};

// Funcion para evolucion
export function filterEvolution(obj, condition) {
  const nameFilter = obj.filter((compare) => compare.name === condition.toLowerCase());
  return nameFilter;
}
