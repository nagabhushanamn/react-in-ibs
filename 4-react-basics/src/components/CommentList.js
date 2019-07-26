
import React, { Component } from 'react';

// import store from '../store'
import { connect } from '../connect'

class CommentList extends Component {
    // constructor(props) {
    //     super()
    //     this.state = {
    //         comments: store.getState().comments['java']
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
    renderComments() {
        let { comments } = this.props;
        return comments.map((comment, idx) => {
            return (
                <li className="list-group-item bg-info" key={idx}>{comment}</li>
            )
        })
    }
    render() {
        return (
            <div className="card card-body">
                <ul>{this.renderComments()}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments['java']
    }
}


export default connect(CommentList, mapStateToProps);