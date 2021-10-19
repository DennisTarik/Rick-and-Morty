import './style.css'
import { createHeaderComponent } from './lib/headerComponent';
import { createMainComponent } from './lib/mainComponent';
import { createFooterComponent } from './lib/footerComponent';
import createCharacterCard from './components/characterCard';

function renderApp() {
  const appElement = document.querySelector('#app');

  const headerComponent = createHeaderComponent();

  const mainComponent = createMainComponent();

  const footerComponent = createFooterComponent();

  const characterCard = createCharacterCard();

  appElement.append(headerComponent, mainComponent, footerComponent);
  mainComponent.append(characterCard);
}

renderApp();