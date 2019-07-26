import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-info">
                    <a className="navbar-brand" href="/">{this.props.title}</a>
                </nav>
            </div>
        );
    }
}

export default Navbar;