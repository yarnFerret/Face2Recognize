import React from 'react';
import './Navigation.css';

const Navigation =({ onRouteChange, isSignedIn })=>{
    if(isSignedIn) {
      return(
        <nav>
          <p onClick={ ()=> onRouteChange('signout')}
      className='sign'>Sign Out</p>
        </nav>
      );
    } else {
      return(
        <nav>
          <p onClick={() => onRouteChange('signin')}
            className='sign'>Sign In</p>
        <p onClick={() => onRouteChange('register')}
          className='sign'>Register</p>
      </nav>
      )
    }
}

export default Navigation;