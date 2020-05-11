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
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback Form</h1>
        </header>
        <br />
        <div className="Main">
          <BrowserRouter>
            <Switch>
              {/* Setup for separate page routes and passes dispatch prop to other components. */}
              {/* <Route exact path="/" render={(props) => <Feeling {...props} dispatch={this.props.dispatch} />} />
            <Route path="/Understanding" render={(props) => <Understanding {...props} dispatch={this.props.dispatch} />} />
            <Route path="/Support" render={(props) => <Support {...props} dispatch={this.props.dispatch} />} />
            <Route path="/Comments" render={(props) => <Comments {...props} dispatch={this.props.dispatch} />} />
            <Route path="/ReviewFeedback" component={ReviewFeedback} />
            <Route path="/ThankYou" component={ThankYou} />
            <Route path="/Admin" render={(props) => <Admin {...props} dispatch={this.props.dispatch} />} /> */}

              <Route exact path="/" component={Feeling} />
              <Route path="/Understanding" component={Understanding} />} />
              <Route path="/Support" component={Support} />
              <Route path="/Comments" component={Comments} />
              <Route path="/ReviewFeedback" component={ReviewFeedback} />
              <Route path="/ThankYou" component={ThankYou} />
              <Route path="/Admin" component={Admin} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

// Give App access to reduxState and dispatch.
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(App);

