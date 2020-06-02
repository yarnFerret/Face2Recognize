import React from 'react';
import './Rank.css';

const Rank =()=>{
  return(
    <div className='rank'>
      <p className='info'>{'Zenku, your current rank is...'}</p>
      <p className='number'>{' #5'}</p>
    </div>
  )
}

export default Rank;