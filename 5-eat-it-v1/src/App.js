import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    items: [
      {
        id: 1,
        name: 'Veg',
        price: 100.00,
        canBuy: true,
        imgPath: 'images/veg.png',
        description: 'always veg is yummy'
      },
      // {
      //   id: 2,
      //   name: 'Non-Veg',
      //   price: 120.00,
      //   canBuy: true,
      //   imgPath: 'images/non-veg.png',
      //   description: 'non-veg is yummy'
      // }
    ]
  }
  renderBuyBtn(item) {
    if (item.canBuy)
      return (<button className="btn btn-dark btn-sm">buy</button>)
    else return null;
  }
  renderItems() {
    let { items } = this.state;
    return items.map((item, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3">
              <img src={item.imgPath} alt={item.name} className="img-fluid" />
            </div>
            <div className="col-9 col-sm-9 col-md-9">
              <h5>{item.name}</h5>
              <h6>&#8377;{item.price}</h6>
              {this.renderBuyBtn(item)}
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link" href="/">Description</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Ingre..</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Reviews</a>
                </li>
              </ul>
              <div>{item.description}</div>
              <div>Not Yet</div>
              <div>None Yet</div>
            </div>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">eat-IT</a>
        </nav>
        <hr />
        <hr />

        <div className="container">
          {this.renderItems()}
        </div>

      </div>
    )
  }
}


export default App;
