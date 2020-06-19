import React, { Component } from 'react';
// import './Register.css';
import '../../components/SignIn/SignIn.css';

class Register extends Component {
 
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      name:''
    }
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }
 
  onNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

  onSubmitSignIn = () => {
    fetch('https://powerful-mesa-54860.herokuapp.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })

  }

  render(){
    //const {onRouteChange} = this.props;
   return (
    <main>
      <div className='form'>
        <fieldset id="register">
          <legend >Register</legend>
          <div className='name'>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name" 
              id="names" 
              onChange={this.onNameChange}/>
          </div>
          <div className='email'>
            <label htmlFor="email-address">Email</label>
            <input 
              type="email" 
              name="email-address" 
              id="email-address" 
              onChange={this.onEmailChange}/>
          </div>
          <div className='pass'>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              onChange={this.onPasswordChange}/>
          </div>
        </fieldset>
        <div className=''>
          <input 
            className='submit grow' 
            type="submit" 
            value="Join" 
            onClick={this.onSubmitSignIn} />
        </div>
      </div>
    </main>
  )
 }
  
}

export default Register;