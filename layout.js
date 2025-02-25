const bodyElm = document.querySelector("body");

const divElm = document.createElement("div");
divElm.id = "root";
divElm.className = "index--wrapper";

divElm.innerHTML = `
  <header class="header">
    <span class="header__logo">
      <img class="header__img" src="imgs/Pokeball.svg" />
      Pokedex
    </span>
    <div class="header__input">
      <div class="input__body">
        <i class='fas fa-search input--icon'></i>
        <input type="search" id="search__input" class="search__input"  placeholder="Search">
      </div>
      <button class="search__btn">#</button>
    </div>
  </header> 
  <main class="main"></main>
  <footer class="footer">
    Pokemane - 2025
  </footer>
`;
bodyElm.append(divElm);