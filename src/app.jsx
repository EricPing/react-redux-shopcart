require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('./stylesheets/app.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {productData} from './reducers';

const store = createStore(productData);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('app'));
