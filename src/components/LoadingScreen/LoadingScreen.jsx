import React from 'react'
import { Col } from 'react-bootstrap'
import logoCargando from '../../assets/logodecarga2.png'
import {spinnerContainer, spinner} from './loadingScreen.module.css'

const LoadingScreen = () => {
  return (
<<<<<<< Updated upstream
    <div className='divContainer'>
      <div className='containerLoader'>
        <div className='loader'>

        </div>
        <p className='message'>Loading...</p>
      </div>

    </div>
=======
    <Col className={spinnerContainer}>
      <img className={spinner} src={logoCargando} alt="spinner" />
    </Col>
    
>>>>>>> Stashed changes
  )
}

export default LoadingScreen