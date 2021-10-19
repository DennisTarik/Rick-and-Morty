import { createElement } from './elements';

export function createMainComponent() {
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