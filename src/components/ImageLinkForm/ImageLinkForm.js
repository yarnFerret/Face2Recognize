import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='slogan'>
        {'Lets detect faces in your pictures.'}
      </p>
      <div className='center'> 
        <div className='form center'>
          <input type='text' onChange={onInputChange}/>
          <button onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;