
import React, { Component } from 'react';

import { connect } from '../connect'

// import store from '../store'

class TopicList extends Component {
    // constructor(props) {
    //     super()
    //     this.state = {
    //         topics: store.getState().topics
    //     }
    // }
    // componentDidMount() {
    //     store.subscribe(() => {
    //         let topics = store.getState().topics;
    //         this.setState({ topics })
    //     })
    // }
    // componentWillUnmount() {
    //     //..
    // }
    // commonLogic() {
    //     //....
    // }
    renderTopics() {
        let { topics } = this.props;
        return topics.map((topic, idx) => {
            return (
                <li className="list-group-item" key={idx}>{topic}</li>
            )
        })
    }
    render() {
        return (
            <div className="card card-body">
                <ul>{this.renderTopics()}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        topics: state.topics
    }
}

export default connect(TopicList, mapStateToProps);