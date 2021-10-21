import "./style.css";
import { createHeaderComponent } from "./lib/headerComponent";
import { createMainComponent } from "./lib/mainComponent";
import { createFooterComponent } from "./lib/footerComponent";
import { fetchCharacters } from "./lib/fetchCharacter";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const headerComponent = createHeaderComponent();

  const characterFetchElement = await fetchCharacters(
    "https://rickandmortyapi.com/api/character"
  );

  const mainComponent = createMainComponent(characterFetchElement);

  const footerComponent = createFooterComponent();

  appElement.append(headerComponent, mainComponent, footerComponent);
}

renderApp();
