import React from 'react'
import './style.css'

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='navbar-item'>
          <h1 className='navbar-logo'>Codizen</h1>
        </div>
        <div className='navbar-item'>
          <ul>
            <li><a href='#'>Products</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Gallery</a></li>
            <li><a href='#'>Our Teams</a></li>
            <li><a href='#'>Contact Us</a></li>
          </ul>
        </div>
        <div className='navbar-item'>
          <a className='btn-red-outline' href='#'>LOGIN</a>
        </div>
      </div>
    </>
  )
}

export default Navbar