import React from 'react'
import { Col } from 'react-bootstrap'
import logoCargando from '../../assets/logodecarga2.png'
import {spinnerContainer, spinner} from './loadingScreen.module.css'
import  './LoadingScreen.css'

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