import React from 'react'
import {Link} from 'react-router-dom'
import './Soda.css'
import sodaImage from './soda.png'

const Soda = () => {
  return (
    <div className='Soda'>
      <img src={sodaImage} alt="dr pepper can" />
      <div className='container'>
        <h2>OMG SUGARRRR</h2>
        <Link exact to="/">GO BACK</Link>
      </div>
      <img src={sodaImage} alt="dr pepper can" />
    </div>
  )
}

export default Soda