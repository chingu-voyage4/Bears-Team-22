import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/index.css';
import App from './App';
import registerServiceWorker from './assets/js/registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ), document.getElementById('root'));

registerServiceWorker();
