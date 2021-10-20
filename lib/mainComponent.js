import { createElement } from './elements';
import createCharacterCard from '../components/characterCard';

export function createMainComponent() {
    const mainElement = createElement(
        'main',
        {
            className: 'main',
        },
        [
            createCharacterCard({ name: 'Rick', status: 'alive', race: 'Human', location: 'C137', episode: 'Pilot'}),
            createCharacterCard({ name: 'Summer', status: 'alive', race: 'Human', location: 'C137', episode: 'Pilot'}),
            createCharacterCard({ name: 'Jerry', status: 'alive', race: 'Human', location: 'C137', episode: 'Pilot'}),
            createCharacterCard({ name: 'Morty', status: 'alive', race: 'Human', location: 'C137', episode: 'Pilot'}),
            createCharacterCard({ name: 'Beth', status: 'alive', race: 'Human', location: 'C137', episode: 'Pilot'}),
        ]
    );
    return mainElement;
}