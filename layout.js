const bodyElm = document.querySelector("body");

const divElm = document.createElement("div");
divElm.id = "root";
divElm.className = "index--wrapper";

divElm.innerHTML = `
  <header class="header">
    
  </header> 

  <main class="main"></main>

  <footer class="footer">
    Pokemane - 2025
  </footer>
`;
bodyElm.append(divElm);

