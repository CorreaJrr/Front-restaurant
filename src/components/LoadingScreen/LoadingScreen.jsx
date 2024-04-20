import React from 'react';
import '../LoadingScreen/LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className='divContainer'>
      <div className='containerLoader'>
        <div className='loader'>

        </div>
        <p className='message'>Loading...</p>
      </div>

    </div>
  )
}

export default LoadingScreen