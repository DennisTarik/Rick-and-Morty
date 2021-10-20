import { createElement } from "../lib/elements";
import styles from "./characterCard.module.css";

export default function createCharacterCard({
  name,
  status,
  location,
  firstSeenIn,
  type,
  gender,
  species,
  image,
}) {
  const characterCard = createElement(
    "article",
    {
      className: styles.card,
    },
    [
      createElement("img", { src: image }),
      createElement("h2", { textContent: name }),
      createElement("h4", { textContent: `${status} - ${species}` }),
      createElement("h4", { textContent: "Last seen in" }),
      createElement("h4", { textContent: location }),
      createElement("h4", { textContent: gender }),
      createElement("h4", { textContent: type }),
      createElement("h4", { textContent: "First seen in" }),
      createElement("h4", { textContent: firstSeenIn }),
    ]
  );
  return characterCard;
}
