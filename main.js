import "./style.css";
import { createHeaderComponent } from "./lib/headerComponent";
import { createMainComponent } from "./lib/mainComponent";
import { createFooterComponent } from "./lib/footerComponent";
import { fetchCharacters } from "./lib/fetchCharacter";
import createSearchElement from "./components/searchForm";
import createCharacterCard from "./components/characterCard";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const headerComponent = createHeaderComponent();

  async function handleSubmit(searchQuery) {
    const response = await fetchCharacters(
      "https://rickandmortyapi.com/api/character/?name=" + searchQuery
    );
    const characterElements = response.map((characterFetchElement) =>
      createCharacterCard(characterFetchElement)
    );
    mainComponent.innerHTML = "";
    mainComponent.append(...characterElements);
  }

  const searchForm = createSearchElement(handleSubmit);

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
