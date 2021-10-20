import { createElement } from "./elements";
import createCharacterCard from "../components/characterCard";

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

const characterCards = characters.map((character) =>
  createCharacterCard(character)
);

export function createMainComponent() {
  const mainElement = createElement(
    "main",
    {
      className: "main",
    },
    characterCards
    /*         [
            createCharacterCard({ name: 'Rick', imgSrc: 'https://freesvg.org/img/Placeholder.png', status: 'alive', race: 'Human', location: 'C137', episode: 'Pilot'}),
            createCharacterCard({ name: 'Summer', imgSrc: 'https://freesvg.org/img/Placeholder.png', status: 'alive', race: 'Human', location: 'C137', episode: 'Pilot'}),
            createCharacterCard({ name: 'Jerry', imgSrc: 'https://freesvg.org/img/Placeholder.png', status: 'alive', race: 'Human', location: 'C137', episode: 'Pilot'}),
            createCharacterCard({ name: 'Morty', imgSrc: 'https://freesvg.org/img/Placeholder.png', status: 'alive', race: 'Human', location: 'C137', episode: 'Pilot'}),
            createCharacterCard({ name: 'Beth', imgSrc: 'https://freesvg.org/img/Placeholder.png', status: 'alive', race: 'Human', location: 'C137', episode: 'Pilot'}),
        ] */
  );
  return mainElement;
}
