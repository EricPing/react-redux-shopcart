require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('./stylesheets/app.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

ReactDOM.render(<App />, document.getElementById('app'));
