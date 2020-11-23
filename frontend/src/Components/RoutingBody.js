import React, { Component } from 'react';

class RoutingBody extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default RoutingBody;