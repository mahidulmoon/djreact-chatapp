import React, { Component } from 'react';

class Navbar extends Component {
    state = {
        islogin:''
    }
    componentDidMount(){
        if(localStorage.getItem('islogin')){
            this.setState({islogin:localStorage.getItem('islogin')});
        }
    }
    logout(){
        localStorage.removeItem('islogin');
        localStorage.removeItem('token');
    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Chat App</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    {(this.state.islogin !== 'true' || this.state.islogin === '') && <li class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                    </li>}
                    {this.state.islogin === 'true' && <li class="nav-item" onClick={this.logout}>
                    <a class="nav-link" href="/">Logout</a>
                    </li>}
                    <li class="nav-item">
                        <a class="nav-link" href="/register">Register</a>
                    </li>
                    {this.state.islogin === 'true' && <li class="nav-item">
                        <a class="nav-link" href="/chat">Chat</a>
                    </li>}
                    <li class="nav-item">
                        <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;