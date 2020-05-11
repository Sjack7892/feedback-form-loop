import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Creates reducer.
const firstReducerInitialState = [];

const myReducer = (state = firstReducerInitialState, action) => {
   console.log('in myReducer:',  action)
    if (action.type === 'feelingInput'){
        console.log('adding feeling input:', action.payload)
        state = {...state, feeling: action.payload}
    } else if (action.type === 'understandingInput'){
        console.log('adding understanding input:', action.payload)
        state = {...state, understanding: action.payload}
    } else if (action.type === 'supportInput'){
        console.log('adding support input:', action.payload)
        state = {...state, support: action.payload}
    } else if (action.type === 'commentsInput'){
        console.log('adding comments input:', action.payload)
        state = {...state, comments: action.payload}
    } else if (action.type === 'feedback'){
        console.log('displaying feedback data:', action.payload)
        state = action.payload;
    }
    return state;
}

// Creates store for reducer.
const myStore = createStore(myReducer)

ReactDOM.render(
    // Gives App access to redux store.
    <Provider store={myStore}>
             <App/>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
