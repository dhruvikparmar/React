import React from 'react'

export default function First() {
 
    return (
    <div>

        {/* navbar */}
        <div class="navbar">
            
            <div class="nav-1">
                <img src="logo.svg" alt="logo" style={{height:'25px',marginTop:'5px'}}/>
                <a href="#">MEN</a>
                <a href="#">WOMEN</a>
                <a href="#">MOBILE COVERS</a>
            </div>
            <div class="nav-2">
                <input type='text' style={{width:'45%',height:'35px',backgroundColor:'rgb(233, 229, 229)',border:'none',borderRadius:'5px',paddingLeft:'20px'}}  placeholder='Search by products'/>
                <div style={{display:'flex',width:'35%',justifyContent:'space-around',borderLeft:'1px solid rgb(233, 229, 229)',marginLeft:'20px'}}>
                    <p>LOGIN</p>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-bag-shopping"></i>
                </div>
            </div>            
        </div>
        <div class="navbar2">
            <div class="nav-3">
                <p>Men</p>
                <p>Women</p>
                <p>Shop Now</p>
                <p>Live Now</p>
                <p>Plus Size</p>
                <p>Accessories</p>
                <p>Official Merch</p>
                <p>Sneakers</p>
                
            </div>
        </div>

        {/* slider */}
        <div class="slider">
            <div class="slide">
                <img src="1.jpg" alt="Slide 1"></img>
            </div>
            <div class="slide">
                <img src="2.jpg" alt="Slide 2"></img>
            </div>
            <div class="slide">
            <img src="3.jpg" alt="Slide 3"></img>
            </div>
            <div class="slide">
                <img src="4.jpg" alt="Slide 4"></img>
            </div>
            <div class="slide">
                <img src="5.jpg" alt="Slide 4"></img>
            </div>
            <div class="slide">
                <img src="6.jpg" alt="Slide 4"></img>
            </div>
            <div class="slide">
                <img src="7.jpg" alt="Slide 4"></img>
            </div>
        </div>

        {/* men-women */}
        <div class="men-women" style={{display:'flex',marginTop:'40px',}}>
            <div class="men" >
                <img src="14.jpg" width={'100%'}></img>
            </div>
            <div class="women">
                <img src="15.jpg" width={'100%'}></img>
            </div>
        </div>

        {/* footer */}
        <div class="footer" style={{backgroundColor:'rgb(28, 28, 28)',marginTop:'50px',paddingTop:'40px',color:'white',}}>
            <img src="logo2.svg" width={'12%'} style={{marginLeft:'95px'}}></img>

            <div style={{display:'flex',marginTop:'40px',justifyContent:'space-evenly',}}>

                <div class="f1" style={{color:'white'}}>
                    <p style={{color:'#FDD835',wordSpacing:'3px'}}>CUSTOMER SERVICE</p>
                    <div class="contact"> 
                        <p>Contact Us</p> 
                        <p>Track Order</p> 
                        <p>Return Order</p> 
                        <p>Cancel Order</p>
                    </div> 
                    <p style={{marginTop:'25px',marginBottom:'20px',fontSize:'15px'}}><i class="fa-solid fa-truck" style={{paddingRight:'10px'}}></i>15 Days Return Policy*</p>
                    <p style={{fontSize:'15px'}}><i class="fa-solid fa-money-bill" style={{paddingRight:'10px'}}></i>Case On Delivery*</p> 
                </div>

                <div class="f2">
                    <p style={{color:'#FDD835'}}>COMPANY</p>
                    <div class="contact"> 
                        <p>About Us</p> 
                        <p>Terms & Conditions</p> 
                        <p>Privacy Policy</p> 
                        <p>We are Hiring</p>
                        <p style={{color:'#FDD835',marginTop:'22px',wordSpacing:'3px'}}>DOWNLOAD THE APP</p>
                    </div>
                    <img src='google.webp' style={{width:'35%',marginRight:'10px',marginTop:'10px'}}></img>
                    <img src='apple.webp'  style={{width:'35%'}}></img>
                </div>

                <div class="f3">
                    <p style={{color:'#FDD835'}}>CONNECT WITH US</p>
                    <div class="contact"> 
                        <p><img src='download (10).svg' style={{marginRight:'10px',marginTop:'15px'}}></img>4.7M People like this</p> 
                        <p><img src='download (9).svg' style={{marginRight:'10px', marginTop:'10px'}}></img>1M People like this</p> 
                        <div>
                            <img src='download (8).svg' style={{marginRight:'10px',marginTop:'10px'}}></img>
                            <img src='download (7).svg' style={{marginRight:'10px'}}></img>
                            <img src='download (6).svg' style={{marginRight:'10px'}}></img>
                            <img src='download (5).svg' style={{marginRight:'10px'}}></img>
                        </div>
                        <p style={{color:'#FDD835',marginTop:'25px',wordSpacing:'3px'}}>100% SECURE PAYMENT</p>
                        <div class="payment">
                            <img src='download (1).svg' style={{marginRight:'10px',marginTop:'10px'}}></img>
                            <img src='download (2).svg' style={{marginRight:'10px',marginTop:'10px'}}></img>
                            <img src='download (3).svg' style={{marginRight:'10px',marginTop:'10px'}}></img>
                            <img src='download (4).svg' style={{marginRight:'10px',marginTop:'10px'}}></img>
                            <img src='download.svg' style={{marginRight:'10px',marginTop:'10px'}}></img>
                        </div>
                    </div>
                </div>
                <div class="f4">
                    <p style={{color:'#FDD835'}}>KEEP UP TO DATE</p>
                    <div>
                        <input type='email' placeholder='Enter Email Id:'style={{backgroundColor:'black',width:'50%',height:'30px',fontSize:'15px',marginTop:'30px',borderBottom:'1px solid #FDD835',borderRight:'black',paddingLeft:'15px'}}></input>
                        <button style={{height:'32px',backgroundColor:'#FDD835'}}>SUBSCRIBE</button> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}
