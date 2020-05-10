import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

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
            type: 'supportInput',
            payload: this.state.value
        })
        this.props.history.push("/Comments");
    }

    handleClickBack = () => {
        this.props.history.push("/Understanding");
    }

    render() {
        return (
            // console.log()
            <div>
                <h1>How well are you being supported?</h1>
                <input 
                type="radio" 
                value ="1" 
                name="support" 
                checked={this.state.value === '1'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>1</label>
                <input 
                type="radio" 
                value ="2" 
                name="support" 
                checked={this.state.value === '2'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>2</label>
                <input type="radio" 
                value ="3" 
                name="support" 
                checked={this.state.value === '3'} 
                onChange={this.handleChange.bind(this)}></input>
                <label>3</label>
                <input type="radio" 
                value ="4" 
                name="support" 
                checked={this.state.value === '4'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>4</label>
                <input 
                type="radio" 
                value ="5" 
                name="support" 
                checked={this.state.value === '5'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>5</label>
                <br/>
                <button onClick={this.handleClickBack}>Back</button>
                <button onClick={this.handleClickNext}>Next</button>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(Support);