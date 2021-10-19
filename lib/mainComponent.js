import { createElement } from './lib/elements';

export function createMainElement() {
    const mainElement = createElement(
        'main',
        {
            className: 'main',
        },
        [
            createElement('p',
            {
                textContent: 'Cards will appear soon'
            })
        ]
    );
    return mainElement;
}