import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import RoutingBody from './RoutingBody';
import Login from './Login';
import {BrowserRouter ,Route,Switch} from 'react-router-dom';
class Body extends Component {
    render() {
        return (
            <>
            <Navbar />
            <br />
            <div>
                <div className="section blue lighten-3">
                    <div className="container white-text center-align text">
                    <h2>A special Chat for Mahidul Moon.</h2>
                    <p>A Chatting App.</p>
                    </div>
                </div>
                <RoutingBody>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/login" exact component={Login} />
                        </Switch>
                    </BrowserRouter>
                </RoutingBody>
                
            </div>
           </>
        );
    }
}

export default Body;