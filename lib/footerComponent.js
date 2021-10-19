import { createElement } from './lib/elements';

export function createFooterComponent() {
    const footerElement = createElement(
        'footer',
        {
            className: 'footer',
        },
        [
            createElement(
                'h1', {
                    textContent: 'This is a footer',
                }
            ),
        ]
    );
    return footerElement;
}
