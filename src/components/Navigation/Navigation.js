import React from 'react';
import './Navigation.css';

const Navigation =({ onRouteChange, isSignedIn })=>{
    if(isSignedIn) {
      return(
        <nav>
          <p onClick={ ()=> onRouteChange('signout')}
      className='sign'>Sign Out</p>
        </nav>
      )
    } else {
      return(
        <nav>
          <p onClick={() => onRouteChange('register')}
            className='sign'>Register</p>
        <p onClick={() => onRouteChange('home')}
          className='sign'>Sign In</p>
      </nav>
      )
    }
}

export default Navigation;