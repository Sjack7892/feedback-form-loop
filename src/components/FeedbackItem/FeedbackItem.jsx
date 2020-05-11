import React, { Component } from 'react';


class FeedbackItem extends Component {

    handleClick = () => {
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <p>{this.props.feedbackObject.feeling}, {this.props.feedbackObject.understanding}, {this.props.feedbackObject.support}, {this.props.feedbackObject.comments}</p>
            </div>
        )
    }
}

export default FeedbackItem;