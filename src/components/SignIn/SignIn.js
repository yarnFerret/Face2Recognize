import React from 'react';
import './SignIn.css';

const SignIn = ({ onRouteChange }) => {
  return(
    <main>
      <div className='form'>
        <fieldset id="sign_up">
          <legend >Sign In</legend>
          <div className='email'>
            <label htmlFor="email-address">Email</label>
            <input type="email" name="email-address" id="email-address" />
          </div>
            <div className='pass'>
            <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
        </fieldset>
        <div className=''>
          <input className='submit grow' type="submit" value="Sign in" onClick={() => onRouteChange('home')}/>
        </div>
        <div className='other'>
          <p className='link' onClick={() => onRouteChange('register')}>Register</p>
        </div>
      </div>
    </main>
  )
}

export default SignIn;