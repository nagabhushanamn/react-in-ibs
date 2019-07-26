import React, { Component } from 'react';
import Action from './Action'
import Summary from './Summary'

class ActionBox extends Component {
    state = {
        totalCount: 0
    }
    incrementTotalCount(e) {
        let { totalCount } = this.state;
        totalCount += e.val
        this.setState({ totalCount })
    }
    renderActions() {
        let numbers = [10, 20, 30, -40, 50, 60, -70, 80]
        return numbers.map((n, idx) => {
            return <Action key={idx} value={n} onAction={e => this.incrementTotalCount(e)} />
        })
    }
    render() {
        let { totalCount } = this.state;
        return (
            <div className="card">
                <div className="card-header">ActionBox : <span className="badge badge-danger">{totalCount}</span></div>
                <div className="card-body">
                    {this.renderActions()}
                    {
                        /* 
                        <Action value={10} onAction={e => this.incrementTotalCount(e)} />
                        <Action value={-10} onAction={e => this.incrementTotalCount(e)} /> 
                        */
                    }
                    <div style={{ clear: 'both' }}>
                        <hr />
                        <Summary value={totalCount} />
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default ActionBox;