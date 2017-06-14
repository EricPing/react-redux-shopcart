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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>玉米</td>
                            <td>5</td>
                            <td>5</td>
                            <td>25</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Order;
