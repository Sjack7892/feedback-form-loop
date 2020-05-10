import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const firstReducerInitialState = {};

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
    }
    return state;
}

//store with reducer for app
const myStore = createStore(myReducer)

ReactDOM.render(
    <Provider store={myStore}>
         <BrowserRouter>
             <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
