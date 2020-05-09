import React, { Component } from 'react';

class Comments extends Component {

    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleClick = () => {
        this.props.history.push("/ReviewFeedback");
    }

    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <p>Value: {this.state.value}</p>
                <textarea onChange={this.handleChange.bind(this)}></textarea>
                <br />
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default Comments;
