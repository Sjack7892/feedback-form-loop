import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ReviewFeedback extends Component {

    componentDidMount() {
        
      }

    putFeedback = () => {
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

    handleClick = () => {
        this.props.history.push("/ThankYou");
        this.putFeedback();
    }

    render() {
        return (
            <div>
                <h1>Review your feedback!</h1>
                <p>Feeling: {this.props.reduxState.feeling} </p>
                <p>Understanding: {this.props.reduxState.understanding} </p>
                <p>Support: {this.props.reduxState.support} </p>
                <p>Comments: {this.props.reduxState.comments} </p>
                
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(ReviewFeedback);
