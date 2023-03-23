import React from 'react'
import {Link} from 'react-router-dom'
import './FreshSardines.css'

const FreshSardines = () => {
  return (
    <div className='freshsardines container'>
        <h2>YOU DON'T EAT THE SARDINES. THE SARDINES EAT YOU.</h2>
        <Link exact to="/">GO BACK</Link>
    </div>
  )
}

export default FreshSardines