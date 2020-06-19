import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value })
  }

  onSubmitSignIn = () => {
    fetch('https://powerful-mesa-54860.herokuapp.com/signin', {
      method: 'post',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
    
  }

  render(onRouteChange){
    //const { } = this.props;
    return (
      <main>
        <div className='form'>
          <fieldset id="sign_up">
            <legend >Sign In</legend>
            <div className='email'>
              <label htmlFor="email-address">Email</label>
              <input 
              onChange={this.onEmailChange}
              type="email" 
              name="email-address" 
              id="email-address" />
            </div>
            <div className='pass'>
              <label htmlFor="password">Password</label>
              <input 
              onChange={this.onPasswordChange}
              type="password" 
              name="password" 
              id="password" />
            </div>
          </fieldset>
          <div className=''>
            <input className='submit grow' type="submit" value="Sign in" 
            onClick={this.onSubmitSignIn}
            // onClick={() => onRouteChange('home')} 
            />
          </div>
          <div className='other'>
            <p className='link' onClick={() => onRouteChange('register')}>Register</p>
          </div>
        </div>
      </main>
    )
  }
} 

export default SignIn;