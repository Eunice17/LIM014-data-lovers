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
const togglePopup=()=>{
    const popUp=document.getElementById('popUp');
    const closePop=document.getElementById('close');
    const modal=document.getElementsByClassName('modal');
    console.log(modal);

    for(let i=0;i<modal.length;i++){
        modal[i].addEventListener('click',function(){
            popUp.classList.remove('hidden');
            popUp.classList.add('show');
        });
    }
    
    closePop.addEventListener('click',function(){
        popUp.classList.remove('show');
        popUp.classList.add('hidden');
    });
}
navEventos();
togglePopup();
console.log(example, data);
