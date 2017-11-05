import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/js/bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/app';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const history = createHistory();

const store = createStore(
    combineReducers({routerReducer, ...reducers}),
    applyMiddleware(routerMiddleware(history), thunk),
);

ReactDOM.render(
<Provider store={store}>
    <ConnectedRouter history={history}>
        <AppContainer />
    </ConnectedRouter>
</Provider>
, document.getElementById('app'));
