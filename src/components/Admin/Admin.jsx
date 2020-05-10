import React, { Component } from 'react';
import axios from 'axios';


class Admin extends Component {

    componentDidMount() {
        this.getFeedback();
    }

    // Request feedback data from server.
    getFeedback = () => {
        axios
          .get("/feedback")
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log("error in getPizzas GET", error);
          });
      };

    render() {
        return (
            <div >
                <h1>Admin Page</h1>
                {/* <table>
                    <thead>
                        <td>Feeling</td>
                        <td>Understanding</td>
                        <td>Support</td>
                        <td>Comments</td>
                        <td>Delete</td>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table> */}
            </div>
        )
    }
}

export default Admin;