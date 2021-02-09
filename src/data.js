import {show} from './main.js';

export const searchPokemon = (obj,dato) => {
  const resultSearch=obj.filter(item=>
    item.name.startsWith(dato.toLowerCase()));
  return resultSearch;
};
export const orderAlpha = (option)=>{ 
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

// Top 10
export const filterTopshow=(pokemonList)=>{
    let top=[];  
    top=pokemonList.filter(item=> item['spawn-chance']>2.5);
    top.sort((a,b)=>a['spawn-chance']-b['spawn-chance']);
    top.reverse();
  return top;
}

// Funcion para evolucion
export function computeStats(obj, condition) { 
  const nameFilter = obj.filter(compare => (compare.name === condition));
    return nameFilter;
}
