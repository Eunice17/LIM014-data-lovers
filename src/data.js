import {show} from './main.js';

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
export const orderRegion = (option) => {
  let arrayShow=show();
  console.log(arrayShow);
  let arrayRegion=[];
  switch(option){
    case '2':
      arrayRegion=arrayShow.filter(item=>
        item.generation['name']=='kanto');
        break;
    case '3':
        arrayRegion=arrayShow.filter(item=>
          item.generation['name']=='johto');
        break;
  }
  return arrayRegion;
};
