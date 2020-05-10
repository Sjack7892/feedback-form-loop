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

    // handleClick = () => {
    //     if (this.state.value === '') {
    //         this.setState({
    //             value: 'none'
    //         })
    //     }
    //     this.props.dispatch({
    //         type: 'commentsInput',
    //         payload: this.state.value
    //     })
    //     this.props.history.push("/ReviewFeedback");
    // }

    handleClickNext = () => {
        if (this.state.value === '') {
            this.props.dispatch({
                type: 'commentsInput',
                payload: 'none'
            })
        } else {
            this.props.dispatch({
                type: 'commentsInput',
                payload: this.state.value
            })
        }
      
        this.props.history.push("/ReviewFeedback");
    }

    handleClickBack = () => {
        this.props.history.push("/Support");
    }

    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <textarea onChange={this.handleChange.bind(this)}></textarea>
                <br />
                <button onClick={this.handleClickBack}>Back</button>
                <button onClick={this.handleClickNext}>Next</button>
            </div>
        )
    }
}

export default Comments;
