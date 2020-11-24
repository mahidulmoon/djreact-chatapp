import React, { Component } from 'react';
import axios from 'axios';
class Login extends Component {
    state ={
        login:{
            username:'',password:''
        }
    }

    inputChange = e =>{
        const cred = this.state.login;
        cred[e.target.name] = e.target.value;
        this.setState({login:cred});
    }
    submitButton = e =>{
        e.preventDefault();
        //console.log(this.state.login);
        axios.post('http://127.0.0.1:8000/user/logintoken/',this.state.login).then(res => {localStorage.setItem('islogin','true');localStorage.setItem('token',res.data.access);alert("Login successfull");window.location.reload();}).catch(err => alert(err));
    }

    render() {
        return (
            <div className="container">
                    <div className="row">
                    <div className="col s12 m8 l6 offset-m2 offset-l3">
                        <div className="section center-block">
                        <div>
                            <h3>
                            Login
                            </h3>
                            <form id="login-form" className="form-group">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input name="username" value={this.state.login.username} onChange={this.inputChange} id="id_username" type="text" />
                                        <label for="id_username">{this.state.login.username.length > 0 ? this.state.login.username : "Username"}</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input name="password" value={this.state.login.password} onChange={this.inputChange} id="id_password" type="password" />
                                        <label for="id_password">{this.state.login.password.length > 0 ? '' : "Password"}</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s8">
                                        <a href="/register">Register</a>
                                    </div>
                                    <div className="col s4">
                                    <div className="right">
                                    <button type="submit" onClick={this.submitButton} class="btn btn-primary">Submit</button>
                                    </div>
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

export default Login;