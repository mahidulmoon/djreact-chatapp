import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <div className="col s9">
                            <div className="card">
                            <div id="board" className="section grey lighten-3" style={{height: '68vh', padding: 5,overflow:'scroll'}}>
                                

                                
                            <div className="card-panel right" style={{width: '75%', position: 'relative'}}>
                                <div style={{position: 'absolute', top: 0, left:'3px', fontWeight: 'bolder'}} className="title">You</div>
                                Hello
                            </div>
                                
                            <div className="card-panel left blue lighten-5" style={{width: '75%', position:'relative'}}>
                                <div style={{position: 'absolute', top: 0, left:'3px', fontWeight: 'bolder'}} className="title">sender</div>
                                Hey there
                            </div>


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
        );
    }
}

export default Message;