import React, { Component } from 'react';

class ThankYou extends Component {

    handleClick = () => {
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <h1>Thank You!</h1>
                <button onClick={this.handleClick}>Leave New Feedback</button>
            </div>
        )
    }
}

export default ThankYou;