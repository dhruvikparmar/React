import React from 'react'

export default function Footer() {
  return (
    <div className='footer w-full flex justify-evenly rounded-xl text-sm font-bold' style={{padding:'40px'}}>
        <div className='gap-4 flex'>
          <img src='truck.svg' className='h-10 '></img>
          <span className='border-r border-gray-400' style={{paddingRight:'100px'}}> FREE SHIPPING ON<br></br> ORDERS OVER $999</span>
        </div>
        <div className='gap-4 flex'>
          <img src='hand.svg' className='h-10'></img>
          <span className='border-r border-gray-400' style={{paddingRight:'100px'}}> PROMISE,ON TIME<br></br> DELIVERY</span>   
        </div>
        <div className='gap-4 flex'>
          <img src='secure.svg' className='h-10'></img>
          <span>100% SECURE<br></br> PAYMENT</span>
        </div>
    </div>
  )
}
