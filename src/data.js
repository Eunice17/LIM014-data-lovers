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
export const orderRegion = (option,array) => {
  let arrayShow=show();
  let arrayRegion=[];
  let flat=false;
  switch(option){
    case '1':
        arrayRegion=array;
      break;
    case '2':
      if(flat===true){
        arrayRegion=array.filter(item=>
          item.generation['name']=='kanto');
      }else{
        arrayRegion=arrayShow.filter(item=>
          item.generation['name']=='kanto');
          flat=true;
      }
        break;
        case '3':
          if(flat===true){
            arrayRegion=array.filter(item=>
              item.generation['name']=='johto');
          }else{
            arrayRegion=arrayShow.filter(item=>
              item.generation['name']=='johto');
              flat=true;
          }
        break;
  }
  return arrayRegion;
};
