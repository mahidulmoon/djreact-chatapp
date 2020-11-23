import React, { Component } from 'react';

class Login extends Component {
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
                                        <input name="username" id="id_username" type="text" />
                                        <label for="id_username">Username</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input name="password" id="id_password" type="password" />
                                        <label for="id_password">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s8">
                                        <a href="{% url 'register' %}">Register</a>
                                    </div>
                                    <div className="col s4">
                                    <div className="right">
                                        <button className="btn blue waves-effect waves-light pull-s12">Login</button>
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