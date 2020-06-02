import React from 'react';
// import './Register.css';
import '../../components/SignIn/SignIn.css';

const Register = (onRouteChange)=>{
  return (
    <main>
      <div className='form'>
        <fieldset id="register">
          <legend >Register</legend>
          <div className='name'>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="names" />
          </div>
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
          <input className='submit grow' type="submit" value="Join" onClick={() => onRouteChange('home')} />
        </div>
      </div>
    </main>
  )
}

export default Register;