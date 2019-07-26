
import React, { Component } from 'react';

class CartView extends Component {
    renderCartItems(cart) {
        let keys = Object.keys(cart);
        return keys.map((key, idx) => {
            let itemLine = cart[key];
            let { item, qty } = itemLine;
            return (
                <tr key={idx}>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>{qty}</td>
                    <td>&#8377;{item.price * qty}</td>
                </tr>
            )
        })
    }
    render() {
        let { value: cart } = this.props
        return (
            <div className="card">
                <div className="card-header">Item(s) in cart</div>
                <div className="card-body">
                    <table className="table table-bordered table-sm">
                        <tbody>
                            {this.renderCartItems(cart)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CartView;