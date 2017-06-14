import React from 'react';
import PropTypes from 'prop-types';
/**
 * @return {component} The component of product list
 */
class ProductList extends React.Component {
    /**
     * @return {component}
     * @param {int} id
     * @param {string} title
     * @param {string} detail
     */
    productDetail(id, title, detail) {
        return (
            <div key={id} className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="panel panel-primary">
                    <div className="panel-heading">{title}</div>
                    <div className="panel-body">{detail}</div>
                </div>
            </div>
        );
    }

    /**
     * @return {component}
     */
    render() {
        let productList = this.props.productList;
        let products = productList.map((item) =>
                        this.productDetail(item.id, item.title, item.detail));
        return (
            <div>
                <h2>商品</h2>
                <div className="row">
                    {products}
                </div>
            </div>
        );
    }
}

ProductList.propTypes = {
    productList: PropTypes.array,
};

export default ProductList;
