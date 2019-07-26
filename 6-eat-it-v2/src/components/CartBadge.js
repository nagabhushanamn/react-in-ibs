import React, { Component } from 'react';

class CartBadge extends Component {
    render() {
        return (
            <div>
                <i className="fa fa-shopping-cart"></i>
                &nbsp;<span className="badge badge-danger">{this.props.value}</span>
                item(s) in cart
            </div>
        );
    }
}

export default CartBadge;