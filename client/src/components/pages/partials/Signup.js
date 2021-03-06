import React, { Component } from 'react';
// import { Input, Button, Container } from 'reactstrap';
import api from '../../../api';
import { withRouter } from "react-router";

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      name: "",
      password: "",
      message: null
    }
  }

  handleInputChange(stateFieldName, event) {
    this.setState({
      [stateFieldName]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      email: this.state.email,
      password: this.state.password,
    }
    api.signup(data)
      .then(result => {
        this.props.history.push("/confirm");
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="signup-general-wrapper">
        <h2>Signup</h2>
        <form className="Signup-form">
          <input className="text-input" placeholder="Email"type="text" value={this.state.email} onChange={(e) => this.handleInputChange("email", e)} />
          <input className="text-input" placeholder="Password"type="password" value={this.state.password} onChange={(e) => this.handleInputChange("password", e)} />
          <div>
            <button color="primary" className="btn-second btn-login-signup" onClick={(e) => this.handleClick(e)}>Signup</button>
          </div>
        </form>
        {this.state.message && <div className="info info-danger">
          {this.state.message}
        </div>}
      </div>
    );
  }
}

export default withRouter(Signup);
