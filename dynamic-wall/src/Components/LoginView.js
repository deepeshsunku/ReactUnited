import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import $ from "jquery";
import { connect } from 'react-redux';
import '../App.css';

const textFieldStyle = {
  margin: '30px 40px 30px 40px',
  padding: '10px 10px 10px 10px',
  width: '250px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
  fontSize: '15px',
  display: 'block',
  outline: 'none'
};

const buttonStyle = {
  margin: '10px 40px 30px 40px',
  padding: '10px',
  width: '250px',
  borderRadius: '4px',
  border: '0px solid',
  boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2)',
  boxSizing: 'border-box',
  fontSize: '15px',
  color: 'white',
  background: '#2ac0ff', /* Old browsers */
  background: '-moz-linear-gradient(45deg, #2ac0ff 0%, #2ac0ff 3%, #2ac0ff 50%, #21d3d3 100%)', /* FF3.6-15 */
  background: '-webkit-linear-gradient(45deg, #2ac0ff 0%,#2ac0ff 3%,#2ac0ff 50%,#21d3d3 100%)', /* Chrome10-25,Safari5.1-6 */
  background: 'linear-gradient(45deg, #2ac0ff 0%,#2ac0ff 3%,#2ac0ff 50%,#21d3d3 100%)',
  outline: 'none'
};

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if(event.target.placeholder === "Email") {
      this.setState({email: event.target.value});
    } else if(event.target.placeholder === "Password") {
      this.setState({password: event.target.value});
    }
  }

  handleSubmit(event) {
    var payload = {
      username: this.state.email,
      password: this.state.password
    }
    console.log("auth payload", payload);
    // $.ajax({
    //   url: "",
    //   type: "POST",
    //   data: JSON.stringify(payload),
    //   contentType: "application/json",
    //   }).done(function(data) {
    //     if(data.success) {
    //       console.log("POST auth success!!!", data, data.login.token);
    //       //this.setState({isLoading: false, buttonState: "Completed!"});
    //       this.props.dispatch(addToken(data.login.token));
          browserHistory.push('/home');
    //     } else {
    //       //this.setState({isLoading: false, buttonState: "Error! Retry"});
    //       alert("We had trouble logging you in. Please try again.")
    //       console.log("POST auth fail!!!", data);
    //     }
    //   }.bind(this)
    // );
    event.preventDefault();
  }

  render() {
    return (
      <div className="Form-div">
        <form onSubmit={this.handleSubmit}>
          <input style={textFieldStyle} type="text" placeholder="Email" value={this.state.value} onChange={this.handleChange} />
          <input style={textFieldStyle} type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
          <input style={buttonStyle} type="button" value="Sign In" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default LoginView;