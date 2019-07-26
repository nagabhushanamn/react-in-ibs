import React, { Component } from 'react';
import classNames from 'classnames'
import Review from './Review'

class Item extends Component {
    state = {
        currentTab: 1,
        reviews: [
            { stars: 5, body: 'sample-review-1', author: 'who@mail.com' },
            { stars: 1, body: 'sample-review-2', author: 'who@mail.com' }
        ]
    }
    changebTab(e, tabIndex) {
        e.preventDefault();
        this.setState({ currentTab: tabIndex })
    }
    handleBuy() {
        let { value: item, onBuy } = this.props;
        if (onBuy)
            onBuy({ item, qty: 1 })
    }
    renderBuyBtn(item) {
        if (item.canBuy)
            return (<button onClick={e => this.handleBuy()} className="btn btn-dark btn-sm">buy</button>)
        else return null;
    }
    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((review, idx) => {
            return <Review value={review} key={idx} />
        })
    }
    renderTabPanel(item) {
        let { currentTab } = this.state;
        switch (currentTab) {
            case 1: return (<div>{item.description}</div>)
            case 2: return (<div>{"Not Yet"}</div>)
            case 3: return (<div>{this.renderReviews()}</div>)
            default: return null;
        }
    }
    render() {
        let { value: item } = this.props;
        let { currentTab } = this.state;
        return (
            <div>
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
                                <a onClick={e => this.changebTab(e, 1)} className={classNames('nav-link', { active: currentTab === 1 })} href="/">Description</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={e => this.changebTab(e, 2)} className={classNames('nav-link', { active: currentTab === 2 })} href="/">Ingre..</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={e => this.changebTab(e, 3)} className={classNames('nav-link', { active: currentTab === 3 })} href="/">Reviews</a>
                            </li>
                        </ul>
                        {this.renderTabPanel(item)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;