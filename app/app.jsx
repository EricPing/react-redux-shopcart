import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import FontAwesome from 'font-awesome/css/font-awesome.css';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        return (
            <div>Hello World</div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));