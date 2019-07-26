import React, { Component } from 'react';
import Item from './Item';

import { loadItems } from '../actions/items'

import { connect } from 'react-redux'

class ItemList extends Component {
    componentDidMount() {
        this.props.loadItems('food', 10)
    }
    renderItems() {
        let { items } = this.props;
        return items.map((item, idx) => {
            return (
                <div key={idx} className="list-group-item">
                    <Item value={item} />
                </div>
            )
        })
    }
    renderStatus() {
        let { reqStatus } = this.props;
        if (reqStatus.message) {
            return (
                <div className="alert alert-warning">{reqStatus.message}</div>
            )
        }
    }
    render() {

        return (
            <div>
                {this.renderStatus()}
                <hr />
                {this.renderItems()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.items,
        reqStatus: state.reqStatus
    }
}

const mapDispatchToProps = { loadItems }

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);