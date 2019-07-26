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
  renderCart() {
    return <CartView />
  }
  render() {
    return (
      <div>
        <Navbar title="eat-IT" />
        <hr />
        <CartBadge />
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
                <Route path="/items" render={props => <ItemList />} />
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
