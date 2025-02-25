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
  // console.log(pokeId);
  
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
    <a href="detail.html?name=${pk.name}">

      <article class="pokemon__item">
        <!-- <p class="pkItem__id"># ${id < 10 ? '00' + id : (id < 100 ? '0' + id :id)}</p> -->
        <p class="pkItem__id"># ${id.toString().padStart(3, "0")}</p>
        <img class="pkItem__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" alt="${pk.name}">
        <h3 class="pkItem__header">${pk.name}</h3>
      </article>
    </a>
      `
  }).join("")
  
  mainElm.append(sectionElm)
})