import React, { Component } from 'react';

class Feeling extends Component {

    handleClick = () => {
        this.props.history.push("/Understanding");
    }

    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <input type="radio" name="feeling"></input>
                <label>1</label>
                <input type="radio" name="feeling"></input>
                <label>2</label>
                <input type="radio" name="feeling"></input>
                <label>3</label>
                <input type="radio" name="feeling"></input>
                <label>4</label>
                <input type="radio" name="feeling"></input>
                <label>5</label>
                <br/>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default Feeling;