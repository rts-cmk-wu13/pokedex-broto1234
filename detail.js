const bodyElm = document.querySelector("body");

//1. Get the query string from the URL
const search = location.search;
// console.log(search);

//2. Parse the query string
const params = new URLSearchParams(search);
// console.log(params);

let id = params.get("id");
// let pokeName = params.get("name");
// let pokeName = params.get("offset");
// console.log(id);


//3. Display the ID/nam/offset value:
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    
    const divElm = document.createElement("div");
    divElm.className = "wrapper";

    divElm.innerHTML = `
      <header class="detail__header">
        <div class="detail__logo">
          <div class="detail__arrowPokename">
            <i class='fas fa-arrow-left detail__arrow'></i>
            <h1 class="detail__heading">${data.name}</h1>
          </div>
          <h4># ${data.id.toString().padStart(3, "0")}</h4>   
        </div>
      </header>
      <main class="main">
        <section>
          <div class="main__iconImage">
            <i class="material-icons  icon--left">&#xe314;</i>
            <img load="lazy" class="detail__img" src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
            <i class="material-icons icon--right">&#xe315;</i>
          </div>
          <ul class="main__lists">
            ${data.types.map( tp => 
              `
                <li class="list__item">${tp.type.name}</li>
              `
            ).join("")}
          </ul>
          <h3 class="main__header">About</h3>
          <ul class="main__weight">
            <li>${data.weight} Weight</li>
            <li class="height--border">${data.height}m Height</li>
            <li>${data.moves[2].move.name} Moves</li>
          </ul>
        </section>

        <section class="base">
          <h2 class="base__header">Base Stats</h2>
          <ul class="base__lists"> ${data.stats.map(st => 
            `
              <li class="base__item">
                <span class="base__name">${st.stat.name}</span> 
                <span class="base__stat">${st.base_stat}</span> 
                <progress class="base__progress" max="100" value="${st.base_stat}">
              </li>
            `
          ).join("")}
          </ul>
        </section>
      </main>

    `
    bodyElm.append(divElm);


    // ---------Back to the main page --------

    const detailArrow = document.querySelector(".detail__arrow");
    // console.log(detailArrow);
    
    detailArrow.addEventListener("click", () => {
      location.href = 'index.html';
    })
    //--------------
    

    //-------- previous & next Button -------------
    
    let presentId = parseInt(`${data.id}`);
    let lastItem = 20;
    
    const prevBtn = document.querySelector(".icon--left");
    const nextBtn = document.querySelector(".icon--right");
          
    //----- Display left and right button----
    const showBtn = () => {
      if (presentId == 1) {
        prevBtn.style.display = "none";                
      } else if (presentId == lastItem) {
        nextBtn.style.display = "none";                
      } else {
        prevBtn.style.display = "block";                
        nextBtn.style.display = "block";                
      }
    }
    showBtn() 
    //-----------

    prevBtn.addEventListener("click", () => {

      (presentId < 1) ? presentId = 1 : presentId--;
      location.href = `detail.html?id=${presentId}`;
    })
        
    nextBtn.addEventListener("click", () => {

      (presentId > lastItem) ? presentId = lastItem : presentId++;
      location.href = `detail.html?id=${presentId}`;
    })
  })


  