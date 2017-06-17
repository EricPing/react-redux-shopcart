import React from 'react';
import PropTypes from 'prop-types';
/**
 * @return {component} The component of shopcart
 */
class ShopCart extends React.Component {
     /**
     * @return {component}
     * @param {object} product
     * @param {int} amount
     */
    itemDetail(product, amount) {
        return (
            <tr>
                <td>1</td>
                <td>{product.title}</td>
                <td>
                    <select value={amount.toString()} className="form-control">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </td>
                <td>{amount}</td>
                <td>{(product.price - product.discount) * amount}</td>
                <td>
                    <button className="btn btn-danger">
                        <i className="fa fa-times" aria-hidden="true"></i> 刪除
                    </button>
                </td>
            </tr>
        );
    }

    /**
     * @return {component}
     */
    render() {
        let sum = 0;
        let shopcartList = this.props.shopcart_list.map((item) => itemDetail(item.product, item.amount));
        for (let i = 0; i < this.props.shopcart_list.length; i++) {
            let item = this.props.shopcart_list[i];
            sum += (item.product.price - product.discount) * item.amount;
        }

        return (
            <div>
                <h2>購物車</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>品項</th>
                            <th>數量</th>
                            <th>價錢</th>
                            <th>小計</th>
                            <th>動作</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><b>總計</b></td>
                            <td>{sum}</td>
                            <td>
                                <button className="btn btn-success">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i> 結帳
                                </button>
                            </td>
                        </tr>
                    </tfoot>
                    <tbody>
                        {shopcartList}
                    </tbody>
                </table>
            </div>
        );
    }
}

ShopCart.propTypes = {
    shopcart_list: PropTypes.array.isRequired,
    is_loading: PropTypes.bool.isRequired,
};

export default ShopCart;
