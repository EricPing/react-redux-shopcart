import React from 'react';
import PropTypes from 'prop-types';
import LoadingView from './loading_view';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProducts} from '../actions/product';
import {addToShopcart} from '../actions/shopcart';
/**
 * @return {component} The component of product list
 */
class ProductList extends React.Component {
    /**
     *
     */
    componentDidMount() {
        if (this.props.store.product_list.length == 0) {
           this.props.getProducts();
        }
    }

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
                        <img src={img} className="img-fluid img-thumbnail"/>
                    </div>
                    <div className="panel-footer">
                        <style jsx>{`
                            p {
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                line-height: normal;
                                display: inline;
                                padding-top: 8px;
                            }
                        `}</style>
                        <p>{`原價:$${price}，特價$${price-discount}`}</p>
                        <button className={classnames('btn', 'btn-secondary', ' pull-right')} {...options}
                            onClick={() => this.props.addToShopcart(product.id, product, 1)}>
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
            return this.productDetail(product);
        });

        return (
            <div>
                <h2>商品</h2>
                <div className="row">
                    <style jsx>{`
                        #product-list { 
                            height:90vh;
                            overflow-y: scroll;
                        }
                    `}</style>
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
    addToShopcart: PropTypes.func.isRequired,
    getProducts: PropTypes.func.isRequired,
    store: PropTypes.shape({
        product_list: PropTypes.array.isRequired,
        is_loading: PropTypes.bool.isRequired,
    }),
};

const mapStateToProps = ({productStore}) => ({store: productStore});

const mapDispatchToProps = (dispatch) => {
  return {
    addToShopcart: bindActionCreators(addToShopcart, dispatch),
    getProducts: bindActionCreators(getProducts, dispatch),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
