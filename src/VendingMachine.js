import React from 'react'
import NavBar from './NavBar'
import './VendingMachine.css'
import vendingMachineImage from './VendingMachine.png'

const VendingMachine = () => {
  return (
    <div 
      className='VendingMachine'
      style={{backgroundImage: `url(${vendingMachineImage})`}}
    >
        <div 
          className='container'>
            <h1>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h1>
        </div>
        <NavBar 
          className='container'/>
    </div>
  )
}

export default VendingMachine