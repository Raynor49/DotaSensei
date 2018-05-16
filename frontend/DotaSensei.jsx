import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './component/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore({})
  const root = document.getElementById('root');


  window.getState = store.getState

  ReactDOM.render(<Root store={store} />, root);
})
