import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './assets/css/index.css';
import App from './App';
import registerServiceWorker from './assets/js/registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import client from './graphql/clientGraphql';

import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
