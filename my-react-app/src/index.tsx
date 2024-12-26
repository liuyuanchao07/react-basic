import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { Provider } from "react-redux";
import "normalize.css"
import store from '@/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // 提供store
  <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
  </Provider>
);