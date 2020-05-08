import React, { Component } from 'react';

class Feeling extends Component {
    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
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

export default Feeling;