require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('./stylesheets/app.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {productData} from './reducers';

const store = createStore(productData);
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('app'));
