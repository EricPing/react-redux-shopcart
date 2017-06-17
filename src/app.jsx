require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('./stylesheets/app.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = compose(applyMiddleware(thunk))(createStore)(reducers);
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('app'));
