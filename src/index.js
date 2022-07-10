import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { unstable_HistoryRouter as BrowserRouter } from "react-router-dom";

import App from './App';
import { store } from './redux/store';
import { history } from './services';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
