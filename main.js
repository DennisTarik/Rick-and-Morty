import './style.css'
import { createHeaderComponent } from './lib/headerComponent';
import { createMainComponent } from './lib/mainComponent';
import { createFooterComponent } from './lib/footerComponent';

function renderApp() {
  const appElement = document.querySelector('#app');

  const headerComponent = createHeaderComponent();

  const mainComponent = createMainComponent();

  const footerComponent = createFooterComponent();

  appElement.append(headerComponent, mainComponent, footerComponent);
}

renderApp();