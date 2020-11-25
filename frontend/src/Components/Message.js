import React, { Component } from 'react';
import axios from 'axios';
class Message extends Component {
    state = {
        chat:{
            sender: localStorage.getItem('userid'),receiver:localStorage.getItem('receiver'),message:''
        },
        token: localStorage.getItem('token'),
        result:[],
    }
    componentDidMount(){
        if(this.state.receiver !== null){
            axios.get(`http://127.0.0.1:8000/message/list/${this.state.chat.receiver}/`,{
                headers:{
                    "Authorization" : `Bearer ${this.state.token}`
                }
            }).then(res => this.setState({result:res.data})).catch(err => console.log(err));
        }
    }
    sendButton =()=>{
        console.log(this.state.chat);
    }
    inputChange = e =>{
        const cred = this.state.chat;
        cred[e.target.name] = e.target.value;
        this.setState({chat:cred});
    }
    
      
    render() {
        return (
            <div className="col s9">
                            <div className="card">
                            <div id="board" className="section grey lighten-3" style={{height: '68vh', padding: 5,overflow:'scroll'}}>
                                

                                
                            {this.state.result.map(message => 
                                <div>
                                    <div className="card-panel right" style={{width: '75%', position: 'relative'}}>
                                    <div style={{position: 'absolute', top: 0, left:'3px', fontWeight: 'bolder'}} className="title">You</div>
                                    {message.message}
                                </div>
                                    
                                <div className="card-panel left blue lighten-5" style={{width: '75%', position:'relative'}}>
                                    <div style={{position: 'absolute', top: 0, left:'3px', fontWeight: 'bolder'}} className="title">sender</div>
                                    {message.sender}
                                </div>
                                </div>
                            )}


                            </div>
                            <form id="chat-box" className="form-group" >
                                
                                <div className="row">
                                    <div className="col s11">
                                        <div className="input-field">
                                            <input id="id_message" name="message" onChange={this.inputChange} type="text" placeholder="Type your message.." />
                                        </div>
                                    </div>
                                    <div className="col s1" style={{lineHeight: '80px'}}>
                                        <button type="button" onClick={this.sendButton} class="btn btn-primary">Send</button>
                                    </div>
                                </div>
                            </form>
          
                            </div>
                        </div>
        );
    }
}

export default Message;