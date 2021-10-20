import "./style.css";
import { createHeaderComponent } from "./lib/headerComponent";
import { createMainComponent } from "./lib/mainComponent";
import /* createFooterComponent */ "./lib/footerComponent";
/* import createCharacterCard from "./components/characterCard"; */

async function renderApp() {
  const appElement = document.querySelector("#app");

  const headerComponent = createHeaderComponent();

  const response = await fetch("https://rickandmortyapi.com/api/character");
  const body = await response.json();
  console.log(body);
  const characters = body.results;

  const mainComponent = createMainComponent(characters);

  /*   const footerComponent = createFooterComponent(); */

  appElement.append(headerComponent, mainComponent /* footerComponent */);
}

renderApp();
