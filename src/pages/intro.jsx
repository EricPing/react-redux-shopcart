import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

/**
 * @return {compoment} The main compoment of IntroPage.
 */
class IntroPage extends React.Component {
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
                <h1>說明</h1>
                <p>這只是個練習用購物車</p>
                <Link to="/">返回購物車</Link>
            </div>
        );
    }
}

IntroPage.propTypes = {
    shopcartStore: PropTypes.object.isRequired,
    productStore: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};

export default IntroPage;
