import React, { Component } from 'react';

class Support extends Component {

    handleClick = () => {
        this.props.history.push("/Comments");
    }

    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <input type="radio" name="support"></input>
                <label>1</label>
                <input type="radio" name="support"></input>
                <label>2</label>
                <input type="radio" name="support"></input>
                <label>3</label>
                <input type="radio" name="support"></input>
                <label>4</label>
                <input type="radio" name="support"></input>
                <label>5</label>
                <br/>
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default Support;