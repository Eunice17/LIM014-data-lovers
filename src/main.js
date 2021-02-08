<<<<<<< HEAD
import { searchPokemon,orderByMxCP ,filterByType, computeStats} from './data.js';  //filterData
=======
import { searchPokemon, orderAlpha, orderRegion} from './data.js';
// import data from './data/lol/lol.js';
>>>>>>> eunice
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
const pokemon=data.pokemon;
const bodyFilter=document.getElementById('bodyFilter');
const pop=document.getElementById('popUp');
const search=document.querySelector('#search');
const resultText=document.getElementById('result');
//Para evento mostrar información
const homeNav=document.getElementById('homeNav'); 
const topNav=document.getElementById('topNav'); 
const evoNav=document.getElementById('evoNav'); 
const home=document.getElementById('home');
const topTen=document.getElementById('topTen');
const infoEvolution=document.getElementById('infoEvolution');
//Para manipular los select para el filtro
const alpha=document.getElementById('orderAlpha');
const region=document.getElementById('byRegion');

let arrayShow=[];

homeNav.addEventListener('click',function(){
  home.classList.remove('hide');
  topTen.classList.add('hide');
  infoEvolution.classList.add('hide');
});
topNav.addEventListener('click',function(){
  topTen.classList.remove('hide');
  home.classList.add('hide');
  infoEvolution.classList.add('hide');
});
evoNav.addEventListener('click',function(){
  infoEvolution.classList.remove('hide');
  home.classList.add('hide');
  topTen.classList.add('hide');
});

const typePk=(element)=>{
  let cad="";
    for(let i=0;i<element.length;i++){
        cad+=`<span class="type-value">${element[i]}</span>`;
    }
    return cad;
}
const weaknesses=(element)=>{
  let cad="";
  for(let i=0;i<element.length;i++){
    cad+=`<span>${element[i]}</span>`;
  }
  return cad;
}
const resistant=(element)=>{
  let cad="";
  for(let i=0;i<element.length;i++){
    cad+=`<span>${element[i]}</span>`;
  }
  return cad;
}
const candy=(element)=>{
  let candyNum=0;
  element['next-evolution']!=undefined?candyNum=element['next-evolution'][0]['candy-cost']:candyNum=0;
  return candyNum;
}
const imgEvolution=(element)=>{
  let cad="";
  
  if(element['next-evolution']!=undefined){
    element['next-evolution'].forEach(i=>{
      
        pokemon.find(item=>{
          if(item.name===i['name']){
            cad+=`<img src="https://www.serebii.net/pokemongo/pokemon/${item.num}.png" alt="${item.name}" title="${item.name}">`;
          }
         });
         if(element['next-evolution'][0]['next-evolution']!=undefined){
          pokemon.find(item=>{
            if(item.name===element['next-evolution'][0]['next-evolution'][0]['name']){
              cad+=`<img src="https://www.serebii.net/pokemongo/pokemon/${item.num}.png" alt="${item.name}" title="${item.name}">`;
            }
           });
         }
    });
  }
  
  if(element['prev-evolution']!=undefined){
    element['prev-evolution'].forEach(i=>{
        pokemon.find(item=>{
          if(item.name===i['name']){
            cad+=`<img src="https://www.serebii.net/pokemongo/pokemon/${item.num}.png" alt="${item.name}" title="${item.name}">`;
          }
         });

         if(element['prev-evolution'][0]['prev-evolution']!=undefined){
          pokemon.find(item=>{
            if(item.name===element['prev-evolution'][0]['prev-evolution'][0]['name']){
              cad+=`<img src="https://www.serebii.net/pokemongo/pokemon/${item.num}.png" alt="${item.name}" title="${item.name}">`;
            }
           });
         }
    });
  }
  return cad;
}
const showPop=(element)=>{
    const popContainer=document.getElementById('popContainer');
    popContainer.innerHTML=`<header class="card-img">
    <img class="close" id="close" src="./../img/close.svg" alt="Close" srcset="">
    <img class="flex-h"  src="${element.img}" alt="Close" srcset="">
  </header>
  <div class="card">
    <header class="name-pk-card">
      <h3 class="flex-h"><span>${element.name}</span> N°<span class="flex-h">${element.num}</span></h3>
    </header>
    <section>
      <p style="text-align: center;">${element.about}</p>
    </section>
    <section>
      <div class="point">
        <img class="point-img" src="./../img/puntero.svg" alt="Point" title="Point">
        <span class="point-text">${element.generation['name']}</span>
      </div>
      <div class="type">
        <h5>type</h5>
        ${typePk(element.type)}
      </div>
      <div class="candy">
        <img class="candy-img" src="./../img/dulce.svg" alt="Candy" title="Next evolution">
        <span class="candy-text" title="Next evolution">${candy(element.evolution)}</span>
      </div>
    </section>
    <section class="base-color">
      <div class="base">
        <span class="value">${element.encounter['base-flee-rate']}%</span>
        <span class="text-baseF">Base flee rate</span>
      </div>
      <div class="base">
        <span class="value">${element.encounter['base-capture-rate']}%</span>
        <span class="text-baseF">Base capture rate</span>
      </div>
      <div class="base">
        <span class="value">${element['spawn-chance']}%</span>
        <span class="text-chance">Spawn chance</span>
      </div>
    </section>
    <section class="resisWeak">
      <div class="weak-r weak">
        <h5 class="weak-title">Weaknesses</h5>${weaknesses(element.weaknesses)}
      </div>
      <div class="weak-r resistant" style="margin-top:0px;">
        <h5 class="weak-title">Resistant</h5>${resistant(element.resistant)}
      </div>
    </section>
    <section class="evolutions">
      <div class="title-ev">
        <h5>Evolutions & Pre-evolutions</h5>
      </div>
      <div class="body-ev">${imgEvolution(element.evolution)}
      </div> 
      </section>
      </div>`;
      pop.classList.add('show');
      const closePop=document.getElementById('close');
      closePop.addEventListener('click',function(){
        document.getElementById('popUp').classList.remove('show');  
    });
}

const showPokemon=(obj)=>{
  arrayShow=obj;
  //bodyFilter.innerHTML=``;
    let cont=0;
    obj.forEach(element => {
      const container=document.createElement('div');
      container.classList.add('container-pokemon');
      container.classList.add('modal');
        container.innerHTML=`<header class="pk-header">
          <span class="pk-num">${element.num}</span>
          <img src="${element.img}" alt="">
        </header>
        <section class="pk-body">
          <span class="pk-name">${element.name}</span>
          <span>CP Max. <span id="cp">${element.stats['max-cp']}</span></span>
          <span>HP Max. <span id="hp">${element.stats['max-hp']}</span></span>
        </section>`;
      cont++;
      bodyFilter.appendChild(container);
      container.addEventListener('click',function(){
        showPop(element);
      });
    });
<<<<<<< HEAD
    document.getElementById('result').textContent=cont;

    
// Filtrar pokemon por Tipo
const typeMenu = document.getElementById('selectType');
let typeSelected;
typeMenu.addEventListener('change', () => {
  typeSelected = typeMenu.value;
  showPokemon(filterByType(pokemon, 'type', typeSelected));
});

// Filtrar por CP
const orderMaxPC = document.getElementById('orderByMaxPC');
orderMaxPC.addEventListener('change', () => {
  typeSelected = orderMaxPC.value;
  showPokemon(orderByMxCP(pokemon, typeSelected));
});

=======
    resultText.textContent=cont;
>>>>>>> eunice
}


showPokemon(pokemon);

export const show=()=>{
  return arrayShow;
}
search.addEventListener('keyup',function(e){
    alpha.value='0';
    let result=searchPokemon(pokemon,e.target.value);
    result.length===0?resultText.textContent='0'
    :bodyFilter.innerHTML='';
     showPokemon(result);  
});

<<<<<<< HEAD


=======
alpha.addEventListener('change',function(e){
  let arrayOrder=orderAlpha(e.target.value);
    resultText.textContent='0';
    bodyFilter.innerHTML='';
    showPokemon(arrayOrder);
});

region.addEventListener('change',(e)=>{
  let arrayRegion=orderRegion(e.target.value);
  resultText.textContent='0';
  bodyFilter.innerHTML='';
  alpha.value='0';
  showPokemon(arrayRegion);
});
console.log(pokemon);
>>>>>>> eunice
const navEventos=()=>{
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav');
    
    burger.addEventListener('click',function(){
        burger.classList.toggle('move');
        nav.classList.toggle('move');
    });
<<<<<<< HEAD
 }
  navEventos();


/*
// funcion para llamar a filtro por tipo
const typeMenu = document.getElementById('selectType');
typeMenu[0].addEventListener('change', () => {
  const valueSelect = typeMenu;
  showPokemon(filterData(data.pokemon, valueSelect));
});
=======
}
navEventos();
>>>>>>> eunice

const orderMaxPC = document.getElementById('orderByMaxPC');
// funcion para llamar a filtro por egg
orderMaxPC[1].addEventListener('change', () => {
  const valueSelect = orderMaxPC;
  showPokemon(filterData(data.pokemon, valueSelect));
});
*/

const btnTop = document.getElementById('btn-evoNav');
btnTop.addEventListener('click', () => {
  
  showPokemon(computeStats(pokemon));
 
});
