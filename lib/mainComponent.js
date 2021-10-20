import { createElement } from "./elements";
import createCharacterCard from "../components/characterCard";

export function createMainComponent(characters) {
  const characterCards = characters.map((character) =>
    createCharacterCard(character)
  );
  const mainElement = createElement(
    "main",
    {
      className: "main",
    },
    characterCards
  );
  return mainElement;
}
