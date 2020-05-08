import React, { Component } from 'react';

class Supported extends Component {
    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
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
            </div>
        )
    }
}

export default Supported;