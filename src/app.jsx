import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './stylesheets/app.scss';
import 'bootstrap/dist/js/bootstrap';
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
