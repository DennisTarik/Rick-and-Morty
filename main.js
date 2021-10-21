import "./style.css";
import { createHeaderComponent } from "./lib/headerComponent";
import { createMainComponent } from "./lib/mainComponent";
import { createFooterComponent } from "./lib/footerComponent";
import { fetchCharacters } from "./lib/fetchCharacter";
import { createSearchElement } from "./components/searchForm";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const headerComponent = createHeaderComponent();

  const searchForm = createSearchElement();

  const characterFetchElement = await fetchCharacters(
    "https://rickandmortyapi.com/api/character"
  );

  const mainComponent = createMainComponent(characterFetchElement);

  const footerComponent = createFooterComponent();

  appElement.append(
    headerComponent,
    searchForm,
    mainComponent,
    footerComponent
  );
}

renderApp();
