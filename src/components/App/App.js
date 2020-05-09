import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import ThankYou from '../ThankYou/ThankYou';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback Form</h1>
        </header>
        <br/>
        <Switch>
          {/* // render = {(props) => <Order {...props} pizzas={this.state.pizzas} /> } */}
          <Route exact path="/" component={Feeling} />
          <Route path="/Understanding" component={Understanding} />
          <Route path="/Support" component={Support} />
          <Route path="/Comments" component={Comments} />
          <Route path="/ReviewFeedback" component={ReviewFeedback} />
          <Route path="/ThankYou" component={ThankYou} />
          {/* <Route path="/CustomerInfo" render = {(props) => <CustomerInfo {...props} dispatch={this.props.dispatch} /> } />
          <Route path="/checkout" render ={(props) => <Checkout {...props} dispatch={this.props.dispatch}/>}/>
          <Route path="/Admin" render ={(props) => <Admin {...props} dispatch={this.props.dispatch}/>}/> */}
        </Switch>
        {/* <Feeling />
        <Understanding />
        <Support />
        <Comments /> */}
      </div>
    );
  }
}

export default App;
