import React, { Component } from 'react';
import { Button } from '@material-ui/core';


class ThankYou extends Component {

    handleClick = () => {
        this.props.history.push("/");
    }

    render() {
        return (
            <div >
                <h1>Thank You!</h1>
                <Button variant="outlined" color="primary" onClick={this.handleClick}>Leave New Feedback</Button>
            </div>
        )
    }
}

export default ThankYou;