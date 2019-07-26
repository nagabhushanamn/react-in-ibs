
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { buy } from '../actions/cart'

class CartView extends Component {
    renderCartItems(cart, buy) {
        let keys = Object.keys(cart);
        return keys.map((key, idx) => {
            let itemLine = cart[key];
            let { item, qty } = itemLine;
            return (
                <tr key={idx}>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td><i onClick={e => buy(item, 1)} className="fa fa-plus"></i></td>
                    <td>{qty}</td>
                    <td><i onClick={e => buy(item, -1)} className="fa fa-minus"></i></td>
                    <td>&#8377;{item.price * qty}</td>
                </tr>
            )
        })
    }
    render() {
        let { cart, buy } = this.props
        return (
            <div className="card">
                <div className="card-header">Item(s) in cart</div>
                <div className="card-body">
                    <table className="table table-bordered table-sm">
                        <tbody>
                            {this.renderCartItems(cart, buy)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = { buy }
export default connect(mapStateToProps, mapDispatchToProps)(CartView);