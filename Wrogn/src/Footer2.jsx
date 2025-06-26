import React from 'react'

export default function Footer2() {
  return (
    <>
        <div className='footer2 lg:grid grid-cols-4 justify-around h-full text-gray-400 sm:inline-block xl:flex w-full '>
            <div className='footer2 text-5xl font-bold leading-17 lg:text-lg xl:text-5xl place-content-center'>
                FOR THE <br></br>RIGHT<br></br> KIND OF MAN.<br></br>
                <span className='footer2 text-xl text-gray-500 font-semibold lg:text-sm place-items-center xl:text-2xl'>© 2024, Wrogn Powered by TMRW</span>
                <div className='footer2 lg: grid grid-cols-5 xl:flex gap-10 xl:size-10' style={{marginTop:'40px'}}>
                    <img src='insta.svg' className='rounded-4xl'></img>
                    <img src='facebook.svg' className='rounded-4xl'></img>
                    <img src='twitter.svg' className='rounded-4xl'></img>
                    <img src='pin.svg' className='rounded-4xl'></img>
                    <img src='youtube.svg' className='rounded-4xl'></img>
                </div>
            </div>
            <div className='footer2  xl:leading-25 lg:leading-10'>
                <p className='footer2 text-white font-semibold'>HELP</p>
                <p className='footer2'>My Account</p>
                <p className='footer2'>Privacy Policy</p>
                <p className='footer2'>Anti Corruption Policy</p>
                <p className='footer2'>Terms & Conditions</p>
                <p className='footer2'>Contact Us</p>
            </div>
            <div className='footer2 xl:leading-25 lg:leading-10'>
                <p className='footer2 text-white font-semibold'>ORDER SUPPORT</p>
                <p className='footer2'>Return & Refund Policy</p>
                <p className='footer2'>FAQ</p>
                <p className='footer2'>Shipping Policy</p>
                <p className='footer2'>Cancellation</p>
            </div>
            <div className='footer2 xl:leading-25 lg:leading-10 '>
                <a className='footer2 text-white font-semibold'>ABOUT US</a>
                <p className='footer2'>About Us</p>
                <p className='footer2'>Find a Store</p>
                <p className='footer2'>Blog</p>
                <p className='footer2'>Careers</p>
            </div>
        </div>
    </>
  )
}
