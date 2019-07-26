import React, { Component } from 'react';
import classNames from 'classnames'
import Review from './Review'

import { connect } from 'react-redux'
import { loadReviews } from '../actions/reviews'
import { buy } from '../actions/cart'

class Item extends Component {
    state = {
        currentTab: 1,
    }
    changebTab(e, tabIndex) {
        e.preventDefault();
        this.setState({ currentTab: tabIndex }, () => {
            if (tabIndex === 3) {
                let { value: item } = this.props;
                let { id } = item
                this.props.loadReviews(id)
            }
        }) // async
    }
    handleBuy() {
        let { value: item, buy } = this.props;
        if (buy)
            buy(item)
    }
    renderBuyBtn(item) {
        if (item.canBuy)
            return (
                <button onClick={e => this.handleBuy()} className="btn btn-dark btn-sm">buy</button>
            )
        else return null;
    }
    renderReviews() {
        let { reviews } = this.props;
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
        let { value: item, cartQty } = this.props;
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
                        &nbsp;<span className="badge badge-danger">{cartQty}</span>
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



function mapStateToProps(state, props) {
    let { value: item } = props;
    let { id } = item
    let itemLine = state.cart[id] || {}
    let cartQty = itemLine.qty || 0
    return {
        reviews: state.reviews[id] || [],
        cartQty
    }
}

const mapDispatchToProps = { loadReviews, buy }

export default connect(mapStateToProps, mapDispatchToProps)(Item);