import React, { Component } from 'react';

class Chat extends Component {
    render() {
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
                                
                                <a href="{% url 'chat' request.user.id user.id %}" id="user{{ user.id }}" className="collection-item row">
                                    <img src="https://frontend-1.adjust.com/new-assets/images/site-images/interface/user.svg" alt="" className="col s4"/>
                                    <div className="col s8">
                                    <span className="title" style={{fontWeight: "bolder"}}>username </span>
                                    </div>
                                </a>
                                
                            </div>
                        </div>
                        </div>
                        <div className="col s9">
                            <div className="card">
                            <div id="board" className="section grey lighten-3" style={{height: '68vh', padding: 5,overflow:'scroll'}}>
                                

                                <p>Message</p>
                            </div>
                            <form id="chat-box" className="form-group {% block hide %}hide{% endblock %}" method="post">
                                
                                <div className="row">
                                    <div className="col s11">
                                        <div className="input-field">
                                            <input id="id_message" name="message" type="text" placeholder="Type your message.."/>
                                        </div>
                                    </div>
                                    <div className="col s1" style={{lineHeight: '80vh'}}>
                                        <button className="btn btn-floating blue lighten-2 waves-effect waves-light"><i className="material-icons">send</i></button>
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}

export default Chat;