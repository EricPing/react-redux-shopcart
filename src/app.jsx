import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './stylesheets/app.scss';
import 'bootstrap/dist/js/bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/app';
import {bindActionCreators, createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';

import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';

import thunk from 'redux-thunk';
import reducers from './reducers';
import actions from './actions';

const history = createHistory();

const store = createStore(
    combineReducers({routerReducer, ...reducers}),
    applyMiddleware(routerMiddleware(history), thunk),
);

const App = connect((state) =>{
  return state;
}, (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch,
  };
})(AppContainer)


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('app'));
