import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Chips.css'
import chipsImage from './chips.png'

const Chips = () => {
  const [bags, setBags] = useState([]);

  const eatBag = () => {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    setBags(bags => [...bags, {x, y}])
  }

  const b = bags.map((bag, idx) => (
    <img
      key={idx}
      src={chipsImage}
      className="bag"
      style={{top: `${bag.y}px`, left: `${bag.x}px`}}
      alt="bag of cape cod salt & vinegar chips"  
    />
  ))

  return (
    <div className='Chips'>
      <div className='container'>
        <h2>BAGS EATEN: {bags.length}</h2>
        <button onClick={eatBag}>NOM NOM NOM</button>
        <Link exact to="/">GO BACK</Link>
      </div>
      {b}
    </div>
  )
}

export default Chips