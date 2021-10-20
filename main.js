import "./style.css";
import { createHeaderComponent } from "./lib/headerComponent";
import { createMainComponent } from "./lib/mainComponent";
import /* createFooterComponent */ "./lib/footerComponent";

function renderApp() {
  const appElement = document.querySelector("#app");

  const headerComponent = createHeaderComponent();

  const characters = [
    {
      name: "Pawnshop Clerk",
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/258.jpeg",
      status: "Alive",
      race: "Alien",
      lastKnownLocation: "Pawn Shop Planet",
      firstSeenIn: "Raising Gazorpazorp",
    },
    {
      name: "Pencilvester",
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/259.jpeg",
      status: "Dead",
      race: "Alien",
      lastKnownLocation: "Earth (Replacement Dimension)",
      firstSeenIn: "Total Rickall",
    },
    {
      name: "Dr. Xenon Bloom",
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/108.jpeg",
      status: "Dead",
      race: "Humanoid",
      lastKnownLocation: "Anatomy Park",
      firstSeenIn: "Anatomy Park",
    },
  ];

  const mainComponent = createMainComponent(characters);

  /*   const footerComponent = createFooterComponent(); */

  appElement.append(headerComponent, mainComponent /* footerComponent */);
}

renderApp();
