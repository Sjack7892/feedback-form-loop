import React, { Component } from 'react';

class Understanding extends Component {

    handleClick = () => {
        this.props.history.push("/Support");
    }

    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <input type="radio" name="understanding"></input>
                <label>1</label>
                <input type="radio" name="understanding"></input>
                <label>2</label>
                <input type="radio" name="understanding"></input>
                <label>3</label>
                <input type="radio" name="understanding"></input>
                <label>4</label>
                <input type="radio" name="understanding"></input>
                <label>5</label>
                <br/>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default Understanding;