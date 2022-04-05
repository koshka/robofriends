import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { search } from 'reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import 'tachyons';
import App from './containers/App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(search, composeEnhancers(applyMiddleware(logger)));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
