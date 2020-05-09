import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewFeedback extends Component {

    componentDidMount() {
        
      }

    handleClick = () => {
        this.props.history.push("/ThankYou");
    }

    render() {
        return (
            <div>
                <h1>Review your feedback!</h1>
                <p>Feeling: {this.props.reduxState[0]} </p>
                <p>Understanding: {this.props.reduxState[1]} </p>
                <p>Support: {this.props.reduxState[2]} </p>
                <p>Comments: {this.props.reduxState[3]} </p>
                
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(ReviewFeedback);
