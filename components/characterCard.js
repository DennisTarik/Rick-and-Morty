import { createElement } from "../lib/elements";
import styles from "./characterCard.module.css";

export default function createCharacterCard({
  name,
  status,
  location,
  episode,
  species,
  image,
}) {
  const firstEpisodeElement = createElement("h4", { textContent: "" });
  const firstEpisode = episode[0];
  const lastEpisodeLocation = createElement("h4", { textContent: "" });
  const lastLocation = location.url;

  const characterCard = createElement(
    "article",
    {
      className: styles.card,
    },
    [
      createElement("img", {
        className: styles.image,
        src: image,
      }),
      createElement("h2", {
        className: styles.main,
        textContent: name,
      }),
      createElement("h4", {
        className: styles.text,
        textContent: `${status} - ${species}`,
      }),
      createElement("h4", {
        className: styles.secondaryText,
        textContent: "First seen in:",
      }),
      firstEpisodeElement,
      createElement("h4", {
        className: styles.secondaryText,
        textContent: "Last known location:",
      }),
      lastEpisodeLocation,
    ]
  );

  fetch(firstEpisode)
    .then((response) => response.json())
    .then((body) => {
      firstEpisodeElement.textContent = body.name;
    });

  fetch(lastLocation)
    .then((response) => response.json())
    .then((body) => {
      lastEpisodeLocation.textContent = body.name;
    });

  return characterCard;
}
