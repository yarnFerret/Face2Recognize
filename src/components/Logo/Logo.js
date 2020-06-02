import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo_transparent.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='logo'>
      <Tilt className="Tilt" options={{ max: 55 }} >
        <img src={logo} alt='logo' />
      </Tilt>
    </div>
  )
}

export default Logo;