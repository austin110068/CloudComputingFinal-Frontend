import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import userService from '../../services/users-service';
import Header from "../partials/header";
import Footer from "../partials/footer";
import {Button} from "react-bootstrap";

class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    onChangeHandler = (e) => {
        const value = e.target.value;
        this.setState({
            [e.target.name] : value,
        })
    }

    login = (user) => {
        userService.login(user)
            .then(actualUser => {
                if(actualUser === 0) {
                    alert("You are not the user of MealForToday.\n Please register first!")
                } else if (actualUser === 1) {
                    alert("Wrong password!")
                } else {
                    this.props.history.push('/search')
                }
            })
    }

    render() {
        return (
            <>
                <Header/>
                <div className="container">
                    <h1>Login</h1>
                    <br/>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input onChange={e => this.onChangeHandler(e)}
                                   value={this.state.username}
                                   type="text" name="username" id="username" className="form-control"
                                   placeholder="username"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onChange={e => this.onChangeHandler(e)}
                                   value={this.state.password}
                                   type="password" name="password" id="password" className="form-control"
                                   placeholder="password"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-12">
                            <button className="btn btn-primary form-control"
                                    onClick={() => this.login(this.state)}>
                                Login

                            </button>

                            <div className="row">
                                <div className="col-6">
                                    <Link to="/profile">
                                        Forgot Password?
                                    </Link>
                                </div>

                                <div className="col-6">
                                    <Link to="/register" className="float-right">
                                        Sign up
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </>
        )
    }

}

export default Login