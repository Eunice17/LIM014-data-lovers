import {show} from './main.js';

export const anotherExample = () => {
  return 'OMG';
};

export const searchPokemon = (obj,dato) => {
  const resultSearch=obj.filter(item=>
    item.name.startsWith(dato.toLowerCase()));
  return resultSearch;
};

export const orderAlpha=(option)=>{ 
  let arrayShow=show();
  let arrayOrder=[];
  switch(option){
    case '1':
       arrayOrder=arrayShow.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case '2':
      arrayOrder=arrayShow.sort((a, b) => a.name.localeCompare(b.name));
      arrayOrder.reverse();
      break;  
  }
  return arrayOrder;
};

export const orderRegion = (option,array) => {
  //let arrayShow=show();
  let arrayRegion=[];
  switch(option){
    case '1':
        arrayRegion=array;
      break;
    case '2':
        arrayRegion=array.filter(item=>
          item.generation['name']=='kanto');
        break;
        case '3':
            arrayRegion=array.filter(item=>
              item.generation['name']=='johto');
        break;
  }
  return arrayRegion;

};

// Filtrar por CP
export const orderByMxCP=(option)=>{ 
  let arrayShow=show();
  let resultOrderByMaxCP=[];
   switch(option){
    case '1':
      resultOrderByMaxCP=arrayShow.sort((a, b) => b.stats['max-cp'] - a.stats['max-cp']);
      break;
    case '2':
      resultOrderByMaxCP=arrayShow.sort((a, b) => b.stats['max-cp'] - a.stats['max-cp']);
      resultOrderByMaxCP.reverse();
      break;  
  }
  return resultOrderByMaxCP;
};

// Filtrar pokemon por Tipo
export const filterByType = (obj, property, condition) => {
  const resultFilterByType = obj.filter(element => (element[property][0] === condition
  || element[property][1] === condition));
  return resultFilterByType;
};


/*
// caramelos
export function computeStats(obj, condition, count) {
  const nameFilter = obj.filter(compare => (compare.name === condition));
  const newCandy = nameFilter[0].evolution['candy-cost'] - count;
  return newCandy;
}

*//*

// Función de calcular los caramelos para la siguiente evolución
export const calculateCandies = (array, nombre, candy) => {
  const compareName = array.filter((obj) => obj.name.toLowerCase() === nombre.toLowerCase());
  const newCandies = compareName[0].evolution['candy-cost']- candy;
  return newCandies;
  
};
console.log(calculateCandies);
*/
/*
  export const computeStats = (data) => {
  data.filter((pokemon) => pokemon.spawn_chance > 2.5);
}
*/


