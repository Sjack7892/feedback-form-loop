import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {Button} from '@material-ui/core';


class ReviewFeedback extends Component {

    // Send new feedback data to server.
    postFeedback = () => {
        axios({
            method: 'POST',
            url: '/',
            data: this.props.reduxState
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }

    handleClickNext = () => {
        // Navigates to ThankYou page.
        this.props.history.push("/ThankYou");
        // Call putFeedback function.
        this.postFeedback();
    }

    handleClickBack = () => {
        // Navigate to Comments page.
        this.props.history.push("/Comments");
    }

    render() {
        return (
            <div>
                <h1>Review your feedback!</h1>
                <p>Feeling: {this.props.reduxState.feeling} </p>
                <p>Understanding: {this.props.reduxState.understanding} </p>
                <p>Support: {this.props.reduxState.support} </p>
                <p>Comments: {this.props.reduxState.comments} </p>
                <Button variant="outlined" color="primary" onClick={this.handleClickBack}>Back</Button>
                <Button variant="contained" color="primary" onClick={this.handleClickNext}>Submit</Button>
            </div>
        )
    }
}

// Give ReviewFeedback access to reduxState and dispatch.
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(ReviewFeedback);
