import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import './assets/css/index.css';
import App from './App';
import registerServiceWorker from './assets/js/registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import client from './graphql/clientGraphql';



// const startPoint = (<ApolloProvider client={client}>
//     <App />
// </ApolloProvider>)


ReactDOM.render((
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
