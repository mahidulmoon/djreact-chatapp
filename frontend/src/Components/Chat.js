import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Message from './Message';
class Chat extends Component {
    state = {
        user:[],
        islogin:'',
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/user/register/').then(res => this.setState({user:res.data}));
        if(localStorage.getItem('islogin')){
            this.setState({islogin:localStorage.getItem('islogin')});
        }
    }
    render() {
        if(this.state.islogin !== 'true' || this.state.islogin === ''){
            <Redirect to="/" />
        }
        return (
            <div>
                <nav className="blue lighten-3">
                    <div className="nav-wrapper container">
                    <a href="/" className="brand-logo">Chat</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/">username</a></li>
                        <li><a href="/"><i className="material-icons">power_settings_new</i></a></li>
                    </ul>
                    </div>
                </nav>
                    <div className="section" style={{height: '30vh'}}>
                    <div className="row">
                        <div className="col s3">
                        <div className="card">
                            <div className="collection">
                                
                                {this.state.user.map(user => {
                                    if(parseInt(user.id) !== parseInt(localStorage.getItem('userid'))){
                                        return (
                                            <a href="{% url 'chat' request.user.id user.id %}" id="user{{ user.id }}" className="collection-item row">
                                            <img src="https://frontend-1.adjust.com/new-assets/images/site-images/interface/user.svg" alt="" className="col s4"/>
                                            <div className="col s8">
                                                <span className="title" style={{fontWeight: "bolder"}}>{user.username} </span>
                                            </div>
                                        </a>
                                        );
                                        
                                    }
                                })}
                                
                            </div>
                        </div>
                        </div>
                        
                        <Message />

                    </div>
                    </div>
            </div>
        );
    }
}

export default Chat;