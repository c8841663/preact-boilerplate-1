import { h, render } from 'preact';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));

if (module.hot) {
  require('preact/devtools');
}

registerServiceWorker();
