import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import ThankYou from '../ThankYou/ThankYou';
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
        <br/>
        <Switch>
          {/* // render = {(props) => <Order {...props} pizzas={this.state.pizzas} /> } */}
          <Route exact path="/" render = {(props) => <Feeling {...props} dispatch={this.props.dispatch} /> } />
          <Route path="/Understanding" render = {(props) => <Understanding {...props} dispatch={this.props.dispatch} /> } />
          <Route path="/Support" render = {(props) => <Support {...props} dispatch={this.props.dispatch} /> } />
          <Route path="/Comments" render = {(props) => <Comments {...props} dispatch={this.props.dispatch} /> } />
          <Route path="/ReviewFeedback" render = {(props) => <ReviewFeedback {...props} dispatch={this.props.dispatch} inputInfo={this.reduxState} /> } />
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

const reduxStateToProps = (reduxState) => ({ reduxState });

// const mapToProps = reduxStore => {
//   return {
//       customerInfo: reduxStore.customerInfo,
//       pizzaInfo: reduxStore.cart,
//       pizzas: reduxStore.pizzas
//   }

export default connect(reduxStateToProps)(App);

