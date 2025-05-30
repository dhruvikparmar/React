import React from 'react'

export default function Navbar() {
  return (
     <div class='nav'>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#services'>Services</a>
          <a href='#projects'>Projects</a>
          <a href='#blogs'>Blogs</a>
          <a href='#contact'>Contact</a>
          <input type='text' placeholder='Search...' style={{width:'20%',height:'30px',borderRadius:'5px',paddingLeft:'20px'}}/>
        </div>
  )
}
