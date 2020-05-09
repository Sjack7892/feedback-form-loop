import React, { Component } from 'react';

class ReviewFeedback extends Component {

    handleClick = () => {
        this.props.history.push("/ThankYou");
    }

    render() {
        return (
            <div>
                <h1>Review your feedback!</h1>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}

export default ReviewFeedback;
