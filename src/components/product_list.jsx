import React from 'react';
import PropTypes from 'prop-types';
import LoadingView from './loading_view';
import classnames from 'classnames';
/**
 * @return {component} The component of product list
 */
class ProductList extends React.Component {
    /**
     * @return {component}
     * @param {object} product
     */
    productDetail(product) {
        let {id, title, img, price, discount} = product;
        let isDisabled = product.is_disabled;
        let options = {};
        if (isDisabled) {
            options['disabled'] = 'disabled';
        }

        return (
            <div key={id} className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">{title}</div>
                    <div className="panel-body">
                        <img src={img} className="img-responsive img-rounded"/>
                    </div>
                    <div className="panel-footer">
                        <p>{`原價:$${price}，特價$${price-discount}`}</p>
                        <button className={classnames('btn', 'btn-default', ' pull-right')} {...options}
                            onClick={() => this.props.actions.addToShopcart(product.id, product, 1)}>
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
        let productList = this.props.store.product_list;
        let products = productList.map((product) => {
            return this.productDetail( product);
        });

        return (
            <div>
                <h2>商品</h2>
                <div className="row" id="product-list">
                    {(() => {
                        if (this.props.store.is_loading) {
                            return (
                                <LoadingView/>
                            );
                        }

                        return products;
                    })()}
                </div>
            </div>
        );
    }
}

ProductList.propTypes = {
    actions: PropTypes.object.isRequired,
    store: PropTypes.shape({
        product_list: PropTypes.array.isRequired,
        is_loading: PropTypes.bool.isRequired,
    })
};

export default ProductList;
