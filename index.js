
//------------Header Section-----------

const headerElm = document.querySelector("header");

headerElm.innerHTML = `
<span class="header__logo">
      <img class="header__img" src="imgs/Pokeball.svg" />
      Pokédex
    </span>
    <div class="header__input">
      <div class="input__body">
        <i class='fas fa-search input--icon'></i>
        <form action="detail.html">
          <input type="search" id="search__input" name="id" class="search__input" placeholder="Search">
        </form>
      </div>
      <button class="search__btn"><span class="searchBtn--chart"></span></button>
    </div>
    <div class="sort">
      <p class="sort__para">Sort by: </p>
      <div class="sort__input">
        <input class="input--number" type="radio" id="number" name="number_name" value="number" checked>
        <label for="number">Number</label><br>
        <input class="input--name" type="radio" id="name" name="number_name" value="name">
        <label for="name">Name</label><br>
      </div>
  </div> 
`;

//------------- Show "sort by" div-------------

const searchBtn = document.querySelector(".search__btn")
const sortElm = document.querySelector(".sort")

searchBtn.addEventListener("click", () => {
  sortElm.classList.toggle("showElm");
})
//-----------------------------------

//-------------- Active number / name option--------------

const searchBtnCharc = document.querySelector(".searchBtn--chart")

const inputNumber = document.querySelector(".input--number");
const inputName = document.querySelector(".input--name");

const ShowSort = () => {
  searchBtnCharc.innerHTML = "#";
  
  inputNumber.addEventListener("click", () => {
    searchBtnCharc.innerHTML = "#";
    searchBtnCharc.classList.remove('underLine');
    sortElm.classList.remove("showElm");
  })
  
  inputName.addEventListener("click", () => {
    searchBtnCharc.innerHTML = "A";
    searchBtnCharc.classList.add('underLine');
    sortElm.classList.remove("showElm");
  })
}

ShowSort()

//------------ End header Section  --------

//-------------------------------------
//--------- Main Section-----------------          

const mainElm = document.querySelector("main");

// console.log(mainElm);

fetch("https://pokeapi.co/api/v2/pokemon", {
  headers: {
    "Accept": "application/json"
  }
  })
.then(response => response.json())
.then(data => {
  // console.log(data);
  
  let dataReslt = data.results;
  
  const sectionElm = document.createElement("section");
  sectionElm.className = "pokemons";

  // const pokeId = Math.floor(Math.random() * 100);
  // console.log(pokemons);
  
  sectionElm.innerHTML = dataReslt.map(pk => {
    //let id1 = pk.url;  
    //let id2 = pk.url.slice(0, -1);
    //let id3 = pk.url.slice(0, -1).split("/");
    let id = pk.url.slice(0, -1).split("/").pop()
    //console.log(id1); // https://pokeapi.co/api/v2/pokemon/1/
    //console.log(id2); //https://pokeapi.co/api/v2/pokemon/1
    //console.log(id3); // ['https:', '', 'pokeapi.co', 'api', 'v2', 'pokemon', '1']
    //console.log(id);  // 1
   

    return `
    <a href="detail.html?id=${id}">
    <!-- <a href="detail.html?name=${pk.name}"> -->

      <article class="pokemon__item">
        <!-- <p class="pkItem__id"># ${id < 10 ? '00' + id : (id < 100 ? '0' + id :id)}</p> -->
        <p class="pkItem__id"># ${id.toString().padStart(3, "0")}</p>
        <img load="lazy" class="pkItem__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" alt="${pk.name}">
        <h3 class="pkItem__header">${pk.name}</h3>
      </article>
    </a>
      `
  }).join("")
  
  mainElm.append(sectionElm)
})
//----------- End Main Section --------


//------- "Search input value" and Check from "main section"-----

const searchInput = document.querySelector("#search__input");

// const para = document.querySelector(".para");
searchInput.addEventListener("keyup", ()=> {
  
  const searchValue = searchInput.value;
  console.log(searchValue);

  // para.innerHTML = `${searchInput.value}`;

} )

