import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import { connect } from 'react-redux';


class Understanding extends Component {

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
            type: 'understandingInput',
            payload: this.state.value
        })
        // Navigates to Support page.
        this.props.history.push("/Support");
    }

    handleClickBack = () => {
        // Navigates to home page.
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <input 
                type="radio" 
                value ="Not At All" 
                name="understanding" 
                checked={this.state.value === 'Not At All'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>Not At All</label>
                <span> </span>
                <input 
                type="radio" 
                value ="Not Well" 
                name="understanding" 
                checked={this.state.value === 'Not Well'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>Not Well</label>
                <span> </span>
                <input type="radio" 
                value ="A Little" 
                name="understanding" 
                checked={this.state.value === 'A Little'} 
                onChange={this.handleChange.bind(this)}></input>
                <label>A Little</label>
                <span> </span>
                <input type="radio" 
                value ="Well" 
                name="understanding" 
                checked={this.state.value === 'Well'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>Well</label>
                <span> </span>
                <input 
                type="radio" 
                value ="Very Well" 
                name="understanding" 
                checked={this.state.value === 'Very Well'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>Very Well</label>
                <br/>
                <br/>
                <Button variant="outlined" color="primary" onClick={this.handleClickBack}>Back</Button>
                <Button variant="contained" color="primary" onClick={this.handleClickNext}>Next</Button>
            </div>
        )
    }
}
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(Understanding);