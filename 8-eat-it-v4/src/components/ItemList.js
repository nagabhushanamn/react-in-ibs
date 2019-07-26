import React, { Component } from 'react';
import Item from './Item';
import axios from 'axios'

class ItemList extends Component {
    state = {
        items: []
    } 
    componentDidMount() {
        let apiurl = "http://localhost:8181/api/items";
        axios
            .get(apiurl)
            .then(response => response.data)
            .then(items => this.setState({ items }))
    }
    renderItems() {
        let { items } = this.state;
        return items.map((item, idx) => {
            return (
                <div key={idx} className="list-group-item">
                    <Item value={item} onBuy={e => this.props.onBuy(e)} />
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

export default ItemList;