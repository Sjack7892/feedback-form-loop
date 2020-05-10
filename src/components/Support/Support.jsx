import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from '@material-ui/core';


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
            <div>
                <h1>How well are you being supported?</h1>
                <input 
                type="radio" 
                value ="1" 
                name="support" 
                checked={this.state.value === '1'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>Not At All</label>
                <span> </span>
                <input 
                type="radio" 
                value ="2" 
                name="support" 
                checked={this.state.value === '2'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>Not Very Well</label>
                <span> </span>
                <input type="radio" 
                value ="3" 
                name="support" 
                checked={this.state.value === '3'} 
                onChange={this.handleChange.bind(this)}></input>
                <label>A Little</label>
                <span> </span>
                <input type="radio" 
                value ="4" 
                name="support" 
                checked={this.state.value === '4'} 
                onChange={this.handleChange.bind(this)}
                ></input>
                <label>Well</label>
                <span> </span>
                <input 
                type="radio" 
                value ="5" 
                name="support" 
                checked={this.state.value === '5'} 
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

export default connect(reduxStateToProps)(Support);