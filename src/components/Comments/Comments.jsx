import React, { Component } from 'react';

class Comments extends Component {

    handleClick = () => {
        this.props.history.push("/ReviewFeedback");
    }

    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <textarea></textarea>
                <br />
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default Comments;
