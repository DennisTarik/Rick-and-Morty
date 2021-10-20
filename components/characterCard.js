import { createElement } from "../lib/elements";
import styles from "./characterCard.module.css";

export default function createCharacterCard({
  name,
  status,
  lastKnownLocation,
  firstSeenIn,
  race,
  imgSrc,
}) {
  const characterCard = createElement(
    "article",
    {
      className: styles.card,
    },
    [
      createElement("img", { src: imgSrc }),
      createElement("h2", { textContent: name }),
      createElement("h4", { textContent: `${status} - ${race}` }),
      createElement("h4", { textContent: "Last seen in" }),
      createElement("h4", { textContent: lastKnownLocation }),
      createElement("h4", { textContent: "First seen in" }),
      createElement("h4", { textContent: firstSeenIn }),
    ]
  );
  return characterCard;
}
