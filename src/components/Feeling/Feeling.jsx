import React, { Component } from 'react';

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

    handleClick = () => {
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
                <p>Value: {this.state.value}</p>
                <input 
                type="radio" 
                value ="1" 
                name="feeling" 
                checked={this.state.value === '1'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>1</label>
                <input 
                type="radio" 
                value ="2" 
                name="feeling" 
                checked={this.state.value === '2'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>2</label>
                <input type="radio" 
                value ="3" 
                name="feeling" 
                checked={this.state.value === '3'} 
                onChange={this.handleChange.bind(this)}></input>
                <label>3</label>
                <input type="radio" 
                value ="4" 
                name="feeling" 
                checked={this.state.value === '4'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>4</label>
                <input 
                type="radio" 
                value ="5" 
                name="feeling" 
                checked={this.state.value === '5'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>5</label>
                <br/>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default Feeling;