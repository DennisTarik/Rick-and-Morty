export function createElement(tagName, probs, childen) {
    const element = document.createElement(tagName);
    if (probs) {
        Object.assign(element, probs);
    }
    if (childen) {
        element.append(...childen);
    }
    return element;
}