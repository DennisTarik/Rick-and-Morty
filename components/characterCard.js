import { createElement } from "../lib/elements";
import styles from './characterCard.module.css';

export default function createCharacterCard({name, status, location, episode}) {
    const characterCard = createElement(
        'article',
        {
            className: styles.card,
        },
        [
            createElement('h2', { textContent: name}),
            createElement('h4', { textContent: status}),
            createElement('h4', { textContent: 'Last seen in'}),
            createElement('h4', { textContent: location}),
            createElement('h4', { textContent: 'First seen in'}),
            createElement('h4', { textContent: episode}),
        ]
    );
    return characterCard;
}