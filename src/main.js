
import { searchPokemon, orderAlpha, orderRegion,orderByMxCP,filterByType,filterTopshow,computeStats } from './data.js';
import data from './data/pokemon/pokemon.js';

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
const typeMenu = document.getElementById('selectType');
const orderMaxPC = document.getElementById('orderByMaxPC');

//Para evoluciones
const pokemonList = document.getElementById('pokemonList');
const namePokemon = document.getElementById('namepokemon');
const numberOfCandies = document.getElementById('numberOfCandies');
const btnCalculate = document.getElementById('btn-calculate');

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
        <h5>Type</h5>
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

    document.getElementById('result').textContent=cont;
    resultText.textContent=cont;

}

showPokemon(pokemon);
search.addEventListener('keyup',function(e){
    alpha.value='0';
    typeMenu.value='0';
    orderMaxPC.value='0';
    region.value='0';

    let result=searchPokemon(pokemon,e.target.value);
    result.length===0?resultText.textContent='0'
    :bodyFilter.innerHTML='';
     showPokemon(result);  
});

// Filtro de Ordenar
alpha.addEventListener('change',function(e){
  let arrayOrder=orderAlpha(e.target.value,arrayShow);
    resultText.textContent='0';
    bodyFilter.innerHTML='';
    showPokemon(arrayOrder);
});
// Filtrar por Region
region.addEventListener('change',(e)=>{
  let arrayRegion=orderRegion(e.target.value,pokemon);
  resultText.textContent='0';
  bodyFilter.innerHTML='';
  alpha.value='0';
  search.value="";
  showPokemon(arrayRegion);
});
// Filtrar por CP
orderMaxPC.addEventListener('change',function(e){
  let arrayorderMaxPC=orderByMxCP(e.target.value,arrayShow);
    resultText.textContent='0';
    bodyFilter.innerHTML='';
    showPokemon(arrayorderMaxPC);
});
// Filtrar pokemon por Tipo
let typeSelected;
typeMenu.addEventListener('change', () => {
  typeSelected = typeMenu.value;
  resultText.textContent='0';
  bodyFilter.innerHTML='';
  showPokemon(filterByType(pokemon, 'type', typeSelected));
  search.value="";
});
// Navegador
const navEventos=()=>{
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav');
    
    burger.addEventListener('click',function(){
        burger.classList.toggle('move');
        nav.classList.toggle('move');
    });
 }
  navEventos();
 
// Pokemones con top 10
  const top10 = (obj) =>{
    const sectionTop = document.getElementById('sectionTop');
    let showTop10="";  
        for(let i=0;i<10;i++){
          showTop10 += ` 
      <div class="cardTop card">
          <h4 class="topTitle"><small class="titleSmall">Pokemon</small>${obj[i].num}</h4>
          <div class="containerTop">
            <header class="pk">
              <img src="https://www.serebii.net/pokemongo/pokemon/${obj[i].num}.png" alt="">
            </header>
            <section class="pk topBody">
              <span class="pk-name">${obj[i].name}</span>
              <br>
              <span class="pk-name">Spawn chance: ${obj[i]['spawn-chance']}%</span>
              </section>
          </div>
        </div>`;
        }
      sectionTop.innerHTML = showTop10;
  };

//Calcular el top de pokemones con mas chance de aparición
  top10(filterTopshow(pokemon));
// Calcular el numero de caramelos para la siguiente evolucion
btnCalculate.addEventListener('click', () => {
  const candy = computeStats(pokemon, namePokemon.value);
  const imgEvo= candy[0].img;
  if( candy[0].evolution['next-evolution']!= undefined ){
     const newCandy = candy[0].evolution['next-evolution'][0]['candy-cost'] - numberOfCandies.value;
     const newName = candy[0].evolution['next-evolution'][0]['name'];
     const prueba = pokemon.filter((item) => item.name == newName);
  let showEvolution = `
        <div class="boxEvolution">
          <span class="letter2"> A tu <span class="name">${namePokemon.value}</span></span> 
           <img class="img-styles" src='${imgEvo}'/> 
           <span class="letter2"> le faltan ${newCandy} caramelos para evolucionar a: </span>
           <img class="img-styles" src='${prueba[0].img}'/> 
           <span class="letter2 name"> ${newName}</span>
        </div>`;
      pokemonList.innerHTML = showEvolution;
      namePokemon.value="";
      numberOfCandies.value="";
  }
  else{
    alert("El Pokemon ingresado no cuenta con una siguiente evolución, por favor intente nuevamente.");
    namePokemon.value="";
    numberOfCandies.value="";
  }
});