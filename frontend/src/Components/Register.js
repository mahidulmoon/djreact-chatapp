import React, { Component } from 'react';

class Register extends Component {
    state={
        register:{
            email:'',username:'',password:'',first_name:'',last_name:''
        }
    }
    inputChange = e => {
        const cred = this.state.register;
        cred[e.target.name] = e.target.value;
        this.setState({register:cred});
    }

    submitButton = e => {
        e.preventDefault();
        console.log(this.state.register);
    }

    render() {
        return (
            <div className="container">
                <h3>
                Register
                </h3>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" value={this.state.register.email} onChange={this.inputChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Username</label>
                        <input type="text" name="username" value={this.state.register.username} onChange={this.inputChange} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="password" value={this.state.register.password} onChange={this.inputChange} className="form-control" id="exampleInputPassword1" />
                    </div>
                    
                    <div className="row">
                        <div className="col">
                        <input type="text" name="first_name" value={this.state.register.first_name} onChange={this.inputChange} className="form-control" placeholder="First name" />
                        </div>
                        <div className="col">
                        <input type="text" name="last_name" value={this.state.register.last_name} onChange={this.inputChange} className="form-control" placeholder="Last name" />
                        </div>
                    </div>
                    

                    <button type="submit" onClick={this.submitButton} className="btn btn-primary">Submit</button>
                    </form>   
            </div>
        );
    }
}

export default Register;