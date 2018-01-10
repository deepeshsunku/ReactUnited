import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import $ from "jquery";
import { connect } from 'react-redux';
import { addRequestKey, addUserName } from '../Actions/actions';
import '../App.css';
import axios from 'axios';

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
    this.state = {email: '', password: '', isLoading: false, loginState: ""};

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
    this.setState({isLoading: true});

    var self = this;
    axios({
      method: 'post',
      url: 'https://uat-secure-api3.sikkasoftware.com/api/v3/users/signin',
      data: {
      	un: this.state.email,
      	pw: this.state.password,
      	unique_id: 'react-united-dwall',
      	app_name: 'PM'
      }
    }).then(function (response) {
      console.log(response);
      console.log("request_key", response.data.response.profiles[0].request_key);
      console.log("User name", response.data.response.firstname);
      self.props.dispatch(addRequestKey(response.data.response.profiles[0].request_key));
      self.props.dispatch(addUserName(`${response.data.response.firstname} ${response.data.response.lastname}`));
      browserHistory.push('/home');
    }).catch(function (error) {
      self.setState({isLoading: false, loginState: "Error! Retry"});
      console.log("Login error", error);
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="Form-div">
          <form onSubmit={this.handleSubmit}>
            <input style={textFieldStyle} type="text" placeholder="Email" value={this.state.value} onChange={this.handleChange} />
            <input style={textFieldStyle} type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
            <input style={buttonStyle} type="button" value="Sign In" onClick={this.handleSubmit} />
          </form>
        </div>
        <span className="Form-msg">{this.state.isLoading ? "Signing in..." : this.state.loginState}</span>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapDispatchToProps)(LoginView);
