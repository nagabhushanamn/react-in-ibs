import React from 'react';
import './App.css';
import Item from './components/Item';
import Navbar from './components/Navbar'
import CartBadge from './components/CartBadge'
import CartView from './components/CartView'

class App extends React.Component {
  state = {
    isCartOpen: false,
    cart: {},
    items: [
      {
        id: 1,
        name: 'Veg',
        price: 100.00,
        canBuy: true,
        imgPath: 'images/veg.png',
        description: 'always veg is yummy'
      },
      {
        id: 2,
        name: 'Non-Veg',
        price: 120.00,
        canBuy: true,
        imgPath: 'images/non-veg.png',
        description: 'non-veg is yummy'
      }
    ]
  }

  toggleCart(e) {
    e.preventDefault();
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen })
  }

  addToCart(e) {
    let { item, qty } = e;
    let { id } = item;
    let { cart } = this.state;
    let itemLine = cart[id];
    if (itemLine) {
      itemLine = Object.assign({}, itemLine, { qty: itemLine.qty + 1 })
    } else {
      itemLine = { item, qty: 1 }
    }
    cart = { ...cart, [id]: itemLine }
    this.setState({ cart })
  }


  renderItems() {
    let { items, isCartOpen } = this.state;
    if (!isCartOpen)
      return items.map((item, idx) => {
        return (
          <div key={idx} className="list-group-item">
            <Item value={item} onBuy={e => this.addToCart(e)} />
          </div>
        )
      })
  }
  renderCart() {
    let { isCartOpen, cart } = this.state;
    if (isCartOpen)
      return <CartView value={cart} />
  }
  render() {
    let { cart, isCartOpen } = this.state;
    return (
      <div>
        <Navbar title="eat-IT" />
        <hr />
        <CartBadge value={Object.keys(cart).length} />
        <hr />
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a onClick={e => this.toggleCart(e)} className="nav-link" href="/">{isCartOpen ? 'items' : 'cart'}</a>
          </li>
        </ul>
        <hr />
        <div className="container">
          {this.renderCart()}
          {this.renderItems()}
        </div>
      </div>
    )
  }
}


export default App;
