import React from 'react';
import './App.css';
import Users from "./components/users";
import {BrowserRouter, Route, Link, BrowserRouterProps} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory"
import UserForm from "./components/UserForm";

const history = createBrowserHistory();


class Main extends React.Component {
    render(){
        return(
            <BrowserRouter >
                <div>
                    <h1>Welcome to Superleague!</h1>
                    <ul>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/contacts">Leagues</Link></li>
                    </ul>
                    <hr/>

                    <Route exact path="/users" component={Users}/>
                    <Route path="/users/add" component={UserForm}/>
                </div>
            </BrowserRouter>
        );
    }
  }


export default Main;
