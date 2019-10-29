import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {connect, Provider} from "react-redux";
import {createStore} from "redux";
import Main from "./App";

const initialState  = {
    name: '',
    surname: '',
};

const ACTION_CHANGE_NAME = 'ACTION_CHANGE_NAME';
const ACTION_CHANGE_SURNAME = 'ACTION_CHANGE_SURNAME';

const actionChangeName = {
    type: ACTION_CHANGE_NAME,
    payload: 'Vasya'
};

const actionChangeSurname = {
    type: ACTION_CHANGE_SURNAME,
    payload: 'Pupkin'
};

const rootReducer = (state = initialState, action : any) => {
    return state;
}

const store = createStore(rootReducer);
//
// console.log(store.getState());

const mapStateToProps = (state:any) => {
    console.log(state);
    return {
        test: 1
    }
};

const WrappedMainComponent = connect(mapStateToProps)(Main);

ReactDOM.render(<Provider store={store}>
                    <WrappedMainComponent/>
                </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
