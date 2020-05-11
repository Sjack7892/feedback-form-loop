import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import { connect } from 'react-redux';


class Feeling extends Component {

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
            alert('Please select a value!');
            return;
        }
        // Sends data to redux store.
        this.props.dispatch({
            type: 'feelingInput',
            payload: this.state.value
        })
        this.props.history.push("/Understanding");
        }

    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <input 
                type="radio" 
                value ="Terrible" 
                name="feeling" 
                checked={this.state.value === 'Terrible'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>Terrible</label>
                <span> </span>
                <input 
                type="radio" 
                value ="Not Good" 
                name="feeling" 
                checked={this.state.value === 'Not Good'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>Not Good</label>
                <span> </span>
                <input type="radio" 
                value ="Okay" 
                name="feeling" 
                checked={this.state.value === 'Okay'} 
                onChange={this.handleChange.bind(this)}></input>
                <label>Okay</label>
                <span> </span>
                <input type="radio" 
                value ="Good" 
                name="feeling" 
                checked={this.state.value === 'Good'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>Good</label>
                <span> </span>
                <input 
                type="radio" 
                value ="Great" 
                name="feeling" 
                checked={this.state.value === 'Great'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>Great</label>
                <br/>
                <br/>
                <Button className="btn" variant="contained" color="primary" onClick={this.handleClickNext}>Next</Button>
            </div>
        )
    }
}

// Give Feeling access to reduxState and dispatch.
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(Feeling);