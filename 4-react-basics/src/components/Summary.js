import React, { Component } from 'react';

class Summary extends Component {
    render() {
        let { value } = this.props;
        return (
            <div className="alert alert-info">
                Total Actions :
                <span className="badge badge-warning">{value}</span>
            </div>
        );
    }
}

export default Summary;