import React from 'react';
import PropTypes from 'prop-types';
import LoadingView from './loading_view';
import ModalView from './modal_view';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteFromShopcart, updateAmountToShopcart, getShopList} from '../actions/shopcart';
/**
 * @return {component} The component of shopcart
 */
class ShopCart extends React.Component {
    /**
     *
     */
    componentDidMount() {
        if (this.props.store.shopcart_list.length == 0) {
           this.props.getShopList();
        }
    }
    /**
     * 結帳事件，尚未實作
     */
    handleCheckout() {
        alert('It\'s just a demo project!');
    }

    /**
     * 處理刪除事件的程式碼，會先跳出Modal來讓使用者確認是否需要刪除
     * @param {int} id
     * @param {int} index
     */
    handleDelete(id, index) {
        this.setState({id: id, index: index, show_delete_check: true});
    }

    /**
     * 處理刪除事件的回傳程式碼
     * @param {bool} result
     */
    handleDeleteCallback(result) {
        this.setState({show_delete_check: false});
        if (result) {
            this.props.deleteFromShopcart(this.state.id, this.state.index);
        }
    }

    /**
     * 跳出提示視窗詢問是否要刪除
     * @return {null}
     */
    showDeleteModal() {
        if (this.state && this.state.show_delete_check == true) {
            return (
                <ModalView title="確認" content="是否要刪除此項目?"
                    callback={(result) => this.handleDeleteCallback(result)} />
             );
        }
    }
     /**
     * @return {component}
     * @param {int} index
     * @param {object} product
     * @param {int} amount
     * @param {int} total
     */
    itemDetail(index, product, amount, total) {
        const fontWeight = 'bolder';
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>
                    <select value={amount.toString()} className="form-control"
                        onChange={(e) => this.props.updateAmountToShopcart(index, parseInt(e.target.value))}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </td>
                <td>
                 <style jsx>{`
                  p {
                    font-weight: ${fontWeight};
                  }
                `}</style>
                    <p>{product.price - product.discount}</p>
                </td>
                <td><p>{total}</p></td>
                <td>
                    <button className="btn btn-danger" onClick={()=> this.handleDelete(product.id, index)}>
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
        let shopcartList = this.props.store.shopcart_list
                            .map((item, index) => this.itemDetail(index, item.product, item.amount, item.total));

        let renderChild = null;
        if (this.props.store.is_loading) {
            renderChild= <LoadingView/>;
        } else {
            renderChild = (
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
                            <td>{this.props.store.sum}</td>
                            <td>
                                <button className="btn btn-success" onClick={() => this.handleCheckout()}>
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i> 結帳
                                </button>
                            </td>
                        </tr>
                    </tfoot>
                    <tbody>
                        {shopcartList}
                    </tbody>
                </table>
            );
        }

        return (
            <div>
                <h2>購物車</h2>
                {this.showDeleteModal()}
                {renderChild}
            </div>
        );
    }
}

ShopCart.propTypes = {
    getShopList: PropTypes.func.isRequired,
    deleteFromShopcart: PropTypes.func.isRequired,
    updateAmountToShopcart: PropTypes.func.isRequired,
    store: PropTypes.shape({
        sum: PropTypes.number.isRequired,
        shopcart_list: PropTypes.array.isRequired,
        is_loading: PropTypes.bool.isRequired,
    }),
};


const mapStateToProps = ({shopcartStore}) => ({store: shopcartStore});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromShopcart: bindActionCreators(deleteFromShopcart, dispatch),
    updateAmountToShopcart: bindActionCreators(updateAmountToShopcart, dispatch),
    getShopList: bindActionCreators(getShopList, dispatch),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ShopCart);
