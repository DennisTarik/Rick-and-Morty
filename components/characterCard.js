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
  const lastLocationUrl = location.url;

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
      createElement("p", {
        className: styles.text,
        textContent: `${status} - ${species}`,
      }),
      createElement("p", {
        className: styles.secondaryText,
        textContent: "First seen in:",
      }),
      firstEpisodeElement,
      createElement("p", {
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

  fetch(lastLocationUrl)
    .then((response) => response.json())
    .then((body) => {
      lastEpisodeLocation.textContent = body.name;
    });

  return characterCard;
}
