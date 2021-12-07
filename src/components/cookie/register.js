import React, {useState} from 'react';
import userService from '../../services/users-service';
import {Link, useHistory} from "react-router-dom";
import Header from "../partials/header";
import Footer from "../partials/footer";

class Register extends React.Component {
    state = {
        username: '',
        password: '',
        validatePassword: '',
        email: '',
        role: '',
        birthday: '',
        portrait: 'https://www.cyphercoders.com/sites/default/files/default_images/default-user-icon-4.jpg'
    }

    onChangeHandler = (e) => {
        const value = e.target.value;
        this.setState({
            [e.target.name] : value,
        })
    }

    onSubmit = (user) => {
        if(this.state.username === '') {
            alert('Please enter your username!')
            return;
        }
        if(this.state.password === '') {
            alert('Please enter your password!')
            return;
        }
        if(this.state.email === '') {
            alert('Please enter your email!')
            return;
        }
        if(this.state.birthday === '') {
            alert('Please enter your birthday!')
            return;
        }
        if(this.state.password !== '' && this.state.password !== this.state.validatePassword) {
            alert('Passwords do not match!')
            return;
        }

        userService.register(user)
            .then((newUser) => {
                if (newUser === 0) {
                    alert("Username is already taken")
                } else {
                    this.props.history.push({
                        pathname: `/profile/${this.state.username}`,
                    })
                }
            })
    }

    render() {
        return(
            <>
                <Header/>

                <div className="container">
                    <h1>Register</h1>
                    <br/>

                    <div className="img-profile">
                        <img className="image"
                             src={this.state.portrait}/>
                    </div>
                    <br/>

                    <div className="form-group row">
                        <label htmlFor="portrait" className="col-sm-2 col-form-label">Profile Photo</label>
                        <div className="col-sm-10">
                            <input value={this.state.portrait}
                            onChange={e => this.onChangeHandler(e)}
                                type="text" name="portrait" id="portrait" className="form-control"
                                />
                        </div>
                    </div>
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
                            <input onChange={e => this.onChangeHandler(e)}P
                                   value={this.state.password}
                                   type="password" name="password" id="password" className="form-control"
                                   placeholder="password"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Validate Password</label>
                        <div className="col-sm-10">
                            <input onChange={e => this.onChangeHandler(e)}
                                   value={this.state.validatePassword}
                                   type="password" name="validatePassword" id="validatePassword" className="form-control"
                                   placeholder="validate password"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email Address</label>
                        <div className="col-sm-10">
                            <input onChange={e => this.onChangeHandler(e)}
                                   value={this.state.email}
                                   type="email" name="email" id="email" className="form-control"
                                   placeholder="email@gmail.com"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="role" className="col-sm-2 col-form-label">Role</label>
                        <div className="col-sm-10">
                            <select onChange={e => this.onChangeHandler(e)}
                                    value={this.state.role}
                                    className="form-control"
                                    name="role" id="role">
                                <option value="Client" selected>Client</option>
                                <option value="Chef">Chef</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="birthday" className="col-sm-2 col-form-label">Date of Birth</label>
                        <div className="col-sm-10">
                            <input onChange={e => this.onChangeHandler(e)}
                                   value={this.state.birthday}
                                   className="form-control"
                                   type="date" id="birthday" name="birthday"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-12">
                            <button className="btn btn-primary form-control"
                                  onClick={() => this.onSubmit(this.state)}>
                                Register

                            </button>

                            <div>
                                 Already is a member?
                                 <Link to="/login">
                                     Sign in
                                 </Link>

                            </div>
                        </div>

                    </div>
                </div>

            </>
        )
    }
}

export default Register;