import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div>
                <div class="jumbotron">
                    <h1 class="display-4">404 - NotFound</h1>
                    <hr class="my-4" />
                    <a class="btn btn-primary btn-lg" href="/" role="button">go home</a>
                </div>
            </div>
        );
    }
}

export default NotFound;
