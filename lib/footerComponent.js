import { createElement } from './elements';

export function createFooterComponent() {
    const footerElement = createElement(
        'footer',
        {
            className: 'footer',
        },
        [
            createElement(
                'p', {
                    textContent: 'This is a footer',
                }
            ),
        ]
    );
    return footerElement;
}
