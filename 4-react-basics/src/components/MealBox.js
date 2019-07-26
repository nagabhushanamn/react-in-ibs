import React, { Component } from 'react';

class MealBox extends Component {
    renderChildren() {
        let { children } = this.props
        return children.map((child, idx) => {
            return <li className="list-group-item" key={idx}>{child}</li>
        })
    }
    render() {
        return (
            <div className="card card-body">
                <ul>
                    {this.renderChildren()}
                </ul>
            </div>
        );
    }
}

export default MealBox;