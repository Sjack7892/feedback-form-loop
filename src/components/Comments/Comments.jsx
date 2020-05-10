import React, { Component } from 'react';
import {Button} from '@material-ui/core';


class Comments extends Component {

    state = {
        value: ''
    }
    // Keeps track of the current value of the input. 
    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

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
        // Navigates to ReviewFeedback page.
        this.props.history.push("/ReviewFeedback");
    }

    handleClickBack = () => {
        // Navigates to Support page.
        this.props.history.push("/Support");
    }

    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <textarea onChange={this.handleChange.bind(this)}></textarea>
                <br />
                <br/>
                <Button variant="outlined" color="primary" onClick={this.handleClickBack}>Back</Button>
                <Button variant="contained" color="primary" onClick={this.handleClickNext}>Next</Button>
            </div>
        )
    }
}

export default Comments;
