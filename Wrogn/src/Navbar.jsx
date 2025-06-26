import React from 'react'
export default function () {
  return (
    <>
        <div className='xl:flex justify-evenly place-items-center sticky top-0 w-full lg:flex ju lg:place-items-center'>            
                <img src='logo.svg' width={"4%"}></img>
            {/* Menus */}
            <div className='lg:grid grid-cols-4 lg:gap-5 lg:text-xs xl:flex font-extrabold xl:gap-10 w-[70%] text-xs'>
                <a>EOSS</a>
                <a>EXCLUSIVE</a>
                <a className='all'>ALL PRODUCTS
                    <div className='option3 flex gap-10 leading-13 shadow-2xl'>
                        <div>
                            <p>VIEW ALL</p>
                            <p>SPRING SUMMER 25</p>
                            <p>BESTSELLERS</p>
                            <p>FRESH ARRIVALS</p>
                            <p>SHIRTS</p>
                            <p>TSHIRTS</p>
                            <p>JEANS</p>
                            <p>CARGOS & JOGGERS</p>
                        </div>
                        <div>
                            <p>SWEATSHIRTS</p>
                            <p>JACKETS</p>
                            <p>SWEATERS</p>
                            <p>SHORTS</p>
                            <p>POLOS</p>
                            <p>ESSENTIALS</p>
                            <p>FOOTWEAR</p>
                        </div>
                    </div>
                </a>
                <a className='top'>TOPWEAR
                    <div className='option4 flex gap-10 leading-13 shadow-2xl'>
                        <div>
                            <p>VIEW ALL</p>
                            <p>BESTSELLERS</p>
                            <p>FRESH ARRIVALS</p>
                            <p>SHIRTS</p>
                            <p>TSHIRTS</p>
                        </div>
                        <div>
                            <p>POLOS</p>
                            <p>JACKETS</p>
                            <p>SWEATSHIRTS</p>
                            <p>SWEATERS</p>
                        </div>
                    </div>
                </a>
                <a className='bottom'>BOTTOMWEAR
                    <div className='option5 flex gap-10 leading-13 shadow-2xl'>
                        <div>
                            <p>VIEW ALL</p>
                            <p>BESTSELLERS</p>
                            <p>FRESH ARRIVALS</p>
                        </div>
                        <div>
                            <p>JEANS</p>
                            <p>CARGOS & JOGGERS</p>      
                            <p>SHORTS</p>
                        </div>
                    </div>
                </a>
                <a className='foot'>FOOTWEAR
                    <div className='option6 flex gap-10 leading-13 shadow-2xl'>
                        <div>
                            <p>VIEW ALL</p>
                            <p>SNEAKERS</p>
                        </div>
                        <div>
                            <p>SLIDERS</p>
                            <p>ATHLEISURE</p>
                        </div>
                    </div>
                </a>
                <a className='fresh'>FRESH ARRIVALS
                    <div className='option7 flex gap-10 leading-13 shadow-2xl'>
                        <div>
                            <p>T-SHIRTS</p>
                            <p>SHIRTS</p>
                            <p>JEANS</p>
                        </div>
                        <div>
                            <p>CARGOS</p>
                            <p>POLOS</p>
                        </div>
                    </div>
                </a>
                <a className='ess'>ESSENTIALS
                    <div className='option8 flex gap-10 leading-13 shadow-2xl'>
                        <div>
                            <p>VIEW ALL</p>
                            <p>PERFUME</p>
                            <p>CAPS</p>
                        </div>
                        <div>
                            <p>SHOCKS</p>
                            <p>TRUNKS</p>
                            <p>BRIEFS</p>
                        </div>
                    </div>
                </a>     
            </div>
            {/* search Box */}
            <div className='search xl:w-60 xl:flex lg:flex justify-around lg:gap-5'>
                <div className='xl:flex border-1 border-gray-300 rounded-md lg:w-fit flex'>
                    <img src='search.svg'></img>
                    <input type='text' placeholder='SEARCH' className='xl:w-24 h-10 text-sm font-semibold outline-none bg-white lg:w-20'></input>                    
                </div>
                    <>{/*user-logo */}
                        <img src='user.svg' className='w-7'></img>
                    </>
                    <>{/*cart-logo */}
                        <img src='shop.svg' className='w-7'></img>
                    </>
            </div>
        </div>          
    </>
  )
}
