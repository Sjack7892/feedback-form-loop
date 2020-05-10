import React, { Component } from 'react';
import {Button} from '@material-ui/core';


class Support extends Component {

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
            type: 'supportInput',
            payload: this.state.value
        })
        // Navigates to Comments page.
        this.props.history.push("/Comments");
    }

    handleClickBack = () => {
        // Navigates to Understanding page.
        this.props.history.push("/Understanding");
    }

    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <input 
                type="radio" 
                value ="Not At All" 
                name="support" 
                checked={this.state.value === 'Not At All'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>Not At All</label>
                <span> </span>
                <input 
                type="radio" 
                value ="Not Very Well" 
                name="support" 
                checked={this.state.value === 'Not Very Well'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>Not Well</label>
                <span> </span>
                <input type="radio" 
                value ="A Little" 
                name="support" 
                checked={this.state.value === 'A Little'} 
                onChange={this.handleChange.bind(this)}></input>
                <label>A Little</label>
                <span> </span>
                <input type="radio" 
                value ="Well" 
                name="support" 
                checked={this.state.value === 'Well'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>Well</label>
                <span> </span>
                <input 
                type="radio" 
                value ="Very Well" 
                name="support" 
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


export default Support;