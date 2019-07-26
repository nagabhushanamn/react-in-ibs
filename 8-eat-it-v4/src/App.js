import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import CartBadge from './components/CartBadge'
import CartView from './components/CartView'
import Home from './components/Home'
import NotFound from './components/NotFound'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ItemList from './components/ItemList';
 
class App extends React.Component {
  state = {
    cart: {},
  }
  addToCart(e) {
    let { item } = e;
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
  renderCart() {
    let { cart } = this.state;
    return <CartView value={cart} />
  }
  render() {
    let { cart } = this.state;
    return (
      <div>
        <Navbar title="eat-IT" />
        <hr />
        <CartBadge value={Object.keys(cart).length} />
        <hr />

        <Router>
          <div>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="/">home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/items">items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">orders</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">sign-in</Link>
              </li>
            </ul>
            <hr />
            <div className="container">
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/items" render={props => <ItemList onBuy={e=>this.addToCart(e)}/>} />
                <Route path="/cart" render={props => this.renderCart()} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>

      </div>
    )
  }
}


export default App;
