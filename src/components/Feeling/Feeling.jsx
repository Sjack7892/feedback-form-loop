import React, { Component } from 'react';
import {Button} from '@material-ui/core';


class Feeling extends Component {

    state = {
        value: ''
    }

    componentDidMount() {
      }

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
                value ="1" 
                name="feeling" 
                checked={this.state.value === '1'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>Terrible</label>
                <span> </span>
                <input 
                type="radio" 
                value ="2" 
                name="feeling" 
                checked={this.state.value === '2'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>Not Good</label>
                <span> </span>
                <input type="radio" 
                value ="3" 
                name="feeling" 
                checked={this.state.value === '3'} 
                onChange={this.handleChange.bind(this)}></input>
                <label>Okay</label>
                <span> </span>
                <input type="radio" 
                value ="4" 
                name="feeling" 
                checked={this.state.value === '4'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>Good</label>
                <span> </span>
                <input 
                type="radio" 
                value ="5" 
                name="feeling" 
                checked={this.state.value === '5'} 
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

export default Feeling;