import React from 'react';
/**
 * @return {component} The component of order
 */
class Order extends React.Component {
    /**
     * @return {component}
     */
    render() {
        return (
            <div>
                <h2>訂單明細</h2>
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
                            <td>1000</td>
                            <td>
                                <button className="btn btn-success">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i> 結帳
                                </button>
                            </td>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>玉米</td>
                            <td>
                                <select className="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </td>
                            <td>5</td>
                            <td>25</td>
                            <td>
                                <button className="btn btn-danger">
                                    <i className="fa fa-times" aria-hidden="true"></i> 刪除
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Order;
