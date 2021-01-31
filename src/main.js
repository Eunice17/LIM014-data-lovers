import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const navEventos=()=>{
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav');
    
    burger.addEventListener('click',function(){
        burger.classList.toggle('move');
        nav.classList.toggle('move');
    });
}

navEventos();
console.log(example, data);
