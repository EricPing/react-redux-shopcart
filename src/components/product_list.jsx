import React from 'react';
/**
 * @return {component} The component of product list
 */
class ProductList extends React.Component {
    /**
     * @return {component}
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

        let product_list = this.props.product_list;

        let products = product_list.map((item) => this.productDetail(item.id, item.title, item.detail));
        return (
            <div>
                <h2>商品</h2>
                <div className="row">
                    {products}
                </div>
            </div>
        )
    }
}

export default ProductList