import { createElement } from "../lib/elements";
import styles from './characterCard.module.css';

export default function createCharacterCard() {
    const characterCard = createElement(
        'article',
        {
            className: styles.card,
        },
        [
            createElement('div',
            { className: 'styles.cardName',
            textContent: 'Name:',
            }),
            createElement('div',
            { className: 'styles.cardStatus',
            textContent: 'Status:',
            }),
            createElement('div',
            { className: 'styles.cardLocation',
            textContent: 'Location:',
            }),
            createElement('div',
            { className: 'styles.Appearance',
            textContent: 'First Appearance:',
            }),
        ]
    );
    return characterCard;
}