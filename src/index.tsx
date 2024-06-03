import React from 'react';
import ReactDOM from 'react-dom';
import { registerApplication, start } from 'single-spa';
import { bootstrap, mount, unmount } from './root';
import App from './App';

registerApplication({
  name: 'todo-app',
  app: { bootstrap, mount, unmount },
  activeWhen: ['/todo'],
});

start();

ReactDOM.render(<App />, document.getElementById('root'));
