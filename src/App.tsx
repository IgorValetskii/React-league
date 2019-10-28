import React from 'react';
import './App.css';
import Users from "./components/users";
import {BrowserRouter, Route, Link, BrowserRouterProps} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory"

const history = createBrowserHistory();


class Main extends React.Component {
    render(){
        return(
            <BrowserRouter >
                <div>
                    <h1>Welcome to Superleague!</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                    <hr/>

                    <Route exact path="/" component={Users}/>
                </div>
            </BrowserRouter>
        );
    }
  // render() {
  //   return (
  //       <div className="App">
  //         <h1>Welcome to Superleague!</h1>
  //           <Users/>
  //       </div>
  //   );
  // }
}


export default Main;
