// estas funciones son de ejemplo

export const searchPokemon = (obj,dato) => {
  const resultSearch=obj.filter(item=>
    item.name.startsWith(dato.toLowerCase()));
  return resultSearch;
};

export const anotherExample = () => {
  return 'OMG';
};
