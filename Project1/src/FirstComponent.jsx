import React from 'react'
export default function FirstComponent() {
  // let name="rahul";

  // let obj={
  //   name:"dhruvik",
  //   subject:"react"
  // }

  // let arr=["red","green","blue"];
  return (
    // <div>
    //   <h1>{obj.name}</h1>
    //   <h2>{arr[2]}</h2>
    // </div>
    <nav style={{fontSize:'20px',textTransform:'uppercase',}} class='main-nav'>
      <section class="section1" id="home">
        <div class='nav'>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#services'>Services</a>
          <a href='#projects'>Projects</a>
          <a href='#blogs'>Blogs</a>
          <a href='#contact'>Contact</a>
        </div>
        <div style={{fontSize:'40px',textAlign:'center',color:'white',paddingTop:'18%'}}>
          <h1>Drone Photography <br></br>& Videography</h1>
          <button class="btn">Explore Services</button>
        </div>
      </section>
      <section id="about" class="section2">
        <div  style={{lineHeight:'35px',marginTop:'8%'}}>
          <h1 style={{fontSize:"30px"}}>Hassle-Free Drone<br></br> Photography</h1><br></br>
          <p style={{fontSize:'25px',textTransform:'lowercase'}}>Inasfa reprehenderit in voluptate velit esse cillum <br></br>reeut cupidatatfug nulla pariatur.</p><br></br>
          <p  style={{color:'grey',fontSize:'25px',textTransform:'lowercase'}}>Aute irure dolor inasfa reprehenderit in voluptate velit esse<br></br> cillum reeut cupidatatfug nulla pariatur. Excepteur sintxsdfas<br></br> occaecat.</p>
          <button class="btn2" style={{marginTop:'6%'}}>Explore Services</button>
        </div>
        <div>
          <img src='about1.png' height={'100%'}></img>
        </div>
      </section>
    </nav>
   
    
  )
}
