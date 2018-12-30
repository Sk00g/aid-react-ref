import React, { Component } from "react";
import axios from "axios";

class LoginForm extends Component {
    state = {
        username: "",
        password: ""
    };

    handleChange = ({ currentTarget: input }) => {
        const alterState = { ...this.state };
        alterState[input.name] = input.value;

        this.setState({
            username: alterState.username,
            password: alterState.password
        });
    };

    async handleSubmit(e) {
        e.preventDefault();

        const resp = await axios.get("http://127.0.0.1:5000/api/accounts");

        resp.data.forEach(acct => {
            if (acct.username === this.state.username) {
                console.log("username match");
            } else {
                console.log("username not found");
            }
        });
    }

    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <div className="form-group" style={{ width: "50%" }}>
                        <label htmlFor="inputUsername">Username</label>
                        <input
                            onChange={this.handleChange}
                            name="username"
                            className="form-control"
                            value={this.state.username}
                            id="inputUsername"
                            aria-describedby="usernameHelp"
                            placeholder="Enter username"
                        />
                    </div>
                    <div className="form-group" style={{ width: "50%" }}>
                        <label htmlFor="inputPassword">Password</label>
                        <input
                            onChange={this.handleChange}
                            name="password"
                            value={this.state.password}
                            className="form-control"
                            id="inputPassword"
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
