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
     * @param {string} img
     * @param {float} price
     * @param {float} discount
     */
    productDetail(id, title, img, price, discount) {
        return (
            <div key={id} className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">{title}</div>
                    <div className="panel-body">
                        <img src={img} className="img-responsive img-rounded"/>
                    </div>
                    <div className="panel-footer">
                        <p>{`原價:$${price}，特價$${price-discount}`}</p>
                        <button className="btn btn-default pull-right">
                            <i className="fa fa-plus" aria-hidden="true"></i> 加入
                        </button>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }

    /**
     * @return {component}
     */
    render() {
        let productList = this.props.productList;
        let products = productList.map((item) => {
            let {id, title, img, price, discount} = item;
            return this.productDetail(id, title, img, price, discount);
        });

        return (
            <div>
                <h2>商品</h2>
                <div className="row" id="product-list">
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
