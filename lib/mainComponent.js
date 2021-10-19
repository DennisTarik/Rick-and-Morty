import { createElement } from './elements';
import createCharacterCard from '../components/characterCard';

export function createMainComponent() {
    const mainElement = createElement(
        'main',
        {
            className: 'main',
        },
        [
            createCharacterCard({ name: 'Rick', status: 'alive', location: 'C137', episode: 'Pilot'}),
            createCharacterCard({ name: 'Summer', status: 'alive', location: 'C137', episode: 'Pilot'}),
            createCharacterCard({ name: 'Jerry', status: 'alive', location: 'C137', episode: 'Pilot'}),
            createCharacterCard({ name: 'Morty', status: 'alive', location: 'C137', episode: 'Pilot'}),
            createCharacterCard({ name: 'Beth', status: 'alive', location: 'C137', episode: 'Pilot'}),
        ]
    );
    return mainElement;
}