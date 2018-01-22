import React from 'react';
/**
 * @return {component} The component of product list
 */
class LoadingView extends React.Component {
    /**
     * @return {component}
     */
    render() {
        return (
            <div className="loading">
                <style jsx>{`
                    div.loading {
                        text-align: center;
                        padding:10vh;
                    }
                `}</style>
                <h3>Loading...</h3>
                <i className="fa-3x fas fa-circle-notch fa-spin"></i>
            </div>
        );
    }
}

export default LoadingView;
