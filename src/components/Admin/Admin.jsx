import React, { Component } from 'react';
import axios from 'axios';


class Admin extends Component {

    componentDidMount() {
        this.getFeedback();
    }
    // Request feedback data from server.
    getFeedback = () => {
        axios({
            method: 'GET',
            url: '/',
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div >
                <h1>Admin Page</h1>
                <button onClick={this.getFeedback}>get</button>
            </div>
        )
    }
}

export default Admin;