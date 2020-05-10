import React, { Component } from 'react';
import { connect } from 'react-redux'

class Understanding extends Component {

    state = {
        value: ''
    }

    componentDidMount() {
        console.log(this.props.reduxState)
      }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleClick = () => {
        if (this.state.value === '') {
            alert('Please select a value!');
            return;
        }
        this.props.dispatch({
            type: 'understandingInput',
            payload: this.state.value
        })
        this.props.history.push("/Support");
    }

    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <input 
                type="radio" 
                value ="1" 
                name="understanding" 
                checked={this.state.value === '1'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>1</label>
                <input 
                type="radio" 
                value ="2" 
                name="understanding" 
                checked={this.state.value === '2'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>2</label>
                <input type="radio" 
                value ="3" 
                name="understanding" 
                checked={this.state.value === '3'} 
                onChange={this.handleChange.bind(this)}></input>
                <label>3</label>
                <input type="radio" 
                value ="4" 
                name="understanding" 
                checked={this.state.value === '4'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>4</label>
                <input 
                type="radio" 
                value ="5" 
                name="understanding" 
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

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(Understanding);