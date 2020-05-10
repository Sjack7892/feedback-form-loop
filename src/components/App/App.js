import React, { Component } from 'react';
import './App.css';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'


class App extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback Form</h1>
        </header>
        <br />
        <div className="Main">
          <Switch>
            <Route exact path="/" render={(props) => <Feeling {...props} dispatch={this.props.dispatch} />} />
            <Route path="/Understanding" render={(props) => <Understanding {...props} dispatch={this.props.dispatch} />} />
            <Route path="/Support" render={(props) => <Support {...props} dispatch={this.props.dispatch} />} />
            <Route path="/Comments" render={(props) => <Comments {...props} dispatch={this.props.dispatch} />} />
            <Route path="/ReviewFeedback" component={ReviewFeedback} />
            <Route path="/ThankYou" component={ThankYou} />
            <Route path="/Admin" component={Admin} />
          </Switch>
        </div>
      </div>
    );
  }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(App);

