import React from 'react'
import './style.css'

const Information = () => {
  return (
    <>
      <div className='information'>
        <div className='information-item'>
          <p className='font-red'>Information: Welcome to our page</p>
          <small className='font-white text-thin'>Lorem Ipsum dolor sit amet, consecutor adipiscing elit, sed do eiusmod tempor incididunt ut labore magna aliqua</small>
        </div>
        <div className='information-item'>
          <button className='btn-red float-right'>SIGN TO NEWSLETTER</button>
        </div>
      </div>
    </>
  )
}

export default Information