import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import FeedbackItem from '../FeedbackItem/FeedbackItem';


class Admin extends Component {

    componentDidMount() {
        this.getFeedback();
    }

    // Request feedback data from server.
    getFeedback = () => {
        axios
            .get("/feedback")
            .then(response => {
                this.props.dispatch({
                    type: 'feedback',
                    payload: response.data
                })
            })
            .catch(error => {
                console.log("error in getPizzas GET", error);
            });
    };

    render() {
        return (
            <div >
                {this.props.reduxState.map(feedbackObject => {
                    return (

                        <FeedbackItem
                            key={feedbackObject.id}
                            feedbackObject={feedbackObject}
                        />

                    )
                })}
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(Admin);