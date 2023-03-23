import React from 'react'
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='NavBar container'>
        <Link exact to="/soda">SODA</Link>
        <Link exact to="/chips">CHIPS</Link>
        <Link exact to="/fresh-sardines">FRESH SARDINES</Link>
    </nav>
  )
}

export default NavBar

        