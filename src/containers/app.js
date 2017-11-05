import React from 'react';
import HomePage from '../pages/home';
import IntroPage from '../pages/intro';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router';
import actions from '../actions';

const ConnectedSwitch = connect((state) => ({
    location: state.location,
}))(Switch);

/**
 * @return {component} connect with actions & store;
 * @param {component} item
 */
function connectDispatch(item) {
    return connect((state) =>{
      return state;
    }, (dispatch) => {
      return {
        actions: bindActionCreators(actions, dispatch),
        dispatch,
      };
    })(item);
}

const Home = connectDispatch(HomePage);
const Intro = connectDispatch(IntroPage);

/**
 * @return {compoment} The main compoment of AppContainer.
 */
class AppContainer extends React.Component {
    /**
     *
     */
    componentDidMount() {
    }

    /**
     * @return {component}
     */
    render() {
        return (
            <div className="container">
                <ConnectedSwitch>
                    <Route exact path="/" component={Home} />
                    <Route path="/intro" component={Intro} />
                </ConnectedSwitch>
            </div>
        );
    }
}

export default AppContainer;
