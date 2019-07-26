

import React, { Component } from 'react';

class Greeting extends Component {
    constructor(props) {
        super();
        console.log("Greeting :: constructor()")
    }
    render() {
        console.log("Greeting :: render()")
        let { message } = this.props;
        return (
            <div>
                <div className="alert alert-info">
                    <p>{message}</p>
                    <hr />
                    <p>{new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}</p>
                </div>
            </div>
        );
    }
    componentDidMount() {
        console.log("Greeting :: componentDidMount()");
        this.interval = setInterval(() => {
            this.forceUpdate();
        }, 1000)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(prevProps)
        // console.log(this.props);
        console.log("Greeting :: componentDidUpdate()");
    }
    componentWillUnmount() {
        console.log("Greeting :: componentWillUnmount()");
        clearInterval(this.interval)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Greeting :: shouldComponentUpdate()");
        return this.props.message !== nextProps.message;
    }
}
Greeting.displayName = "ibs-greeting"

export default Greeting;