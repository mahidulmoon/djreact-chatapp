import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="container">
                <h3>
                Register
                </h3>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    
                    <div className="row">
                        <div className="col">
                        <input type="text" className="form-control" placeholder="First name" />
                        </div>
                        <div className="col">
                        <input type="text" className="form-control" placeholder="Last name" />
                        </div>
                    </div>
                    

                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>   
            </div>
        );
    }
}

export default Register;