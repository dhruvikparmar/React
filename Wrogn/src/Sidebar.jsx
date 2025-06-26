import React from 'react'

export default function Sidebar() {
    let cardobj=[  
    {
    image: "1.png",
    price:1229,
    old:1399,
    title: "Fluid Flow Printed Shirt",
    },
    {
    image: "2.webp",
    price:1299,
    old:1499,
    title: "Fluid Flow Printed Shirt", 
    },
    {
    image: "3.webp",
    price:1199,
    old:1299,
    title: "Fluid Flow Printed Shirt",
    },
    {
    image: "4.webp",
    price:1399,
    old:1599,
    title: "AOP Fluid Viscose Shirt | Yellow",
    },
    {
    image: "5.webp",
    price:1149,
    old:1399,
    title: "AOP Fluid Viscose Shirt | Yellow",
  },
  {
    image: "6.jpg",
    price:899,
    old:1099,
    title: "Pure Cotton Yarn polo Off-White",
  },
  {
    image: "7.webp",
    price:1289,
    old:1489,
    title: "Casual Slim Tapered Jeans | Beige",
  },
  {
    image: "8.webp",
    price:1249,
    old:1499,
    title: "Textured Cotton Dobby AOP shirt",
  },
  {
    image: "9.webp",
    price:1729,
    old:1899,
    title: "Puff Print Oversized T-Shirt | Off White",    
  },
  {
    image: "10.webp",
    price:1559,
    old:1699,
    title: "Puff Print Oversized T-Shirt | Off White",
  },
  {
    image: "11.jpg",
    price:1449,
    old:1599,
    title: "Casual Anti Fit Jeans | Green",
  },
  {
    image: "12.webp",
    price:1389,
    old:1499,
    title: "Casual Loose Fit Denim Cargo | Blue",
  },
  {
    image: "13.webp",
    price:1699,
    old:1899,
    title: "Abstract Printed Viscose Shirt",
  },
  {
    image: "14.jpg",
    price:1199,
    old:1399,
    title: "Casual Anti Fit Denim Cargo | Grey",
  },
  {
    image: "15.webp",
    price:1149,
    old:1499,
    title: "Loose Fit Linen Blend Trouser | Green",
  },
  {
    image: "16.webp",
    price:1529,
    old:1799,
    title: "Textured Light Weight AOP Shirt | Off",
  },
  {
    image: "17.webp",
    price:1799,
    old:1999,
    title: "Textured Stripes Comfort Fit Shirt",
  },
  {
    image: "18.webp",
    price:1559,
    old:1799,
    title: "AOP Flowy Viscose Shirt | Brown",
  },
]
  return (
    <div style={{marginLeft:'25px',marginTop:'15px'}}>
        <p className='text-xs text-gray-500'>HOME / ALL PRODUCTS / <b className='text-black'>VIEW ALL</b></p>
        <p className='text-2xl font-bold' style={{marginTop:'25px'}}>VIEW ALL 
            <span style={{marginLeft:'10px'}} 
                className='text-lg text-gray-500 font-semibold'>1194 Procucts
            </span>
        </p>
        <div className=' text-2xl flex' style={{marginTop:'25px'}}>
            <div className='scroll overflow-y-auto line-clamp-10 w-fit h-fit'>
                <p className='font-bold border-b border-gray-400 w-3xs ' style={{paddingBottom:'20px'}}>Filters</p>
                <div className='text-lg text-gray-500 leading-10 font-semibold'>
                    <p className='font-semibold text-gray-950' style={{marginTop:'15px'}}>Category</p>
                    <p style={{marginTop:'15px'}}>Athleisure (5) <input type='checkbox' style={{marginLeft:'39.5%'}}></input></p>
                    <p>Briefs (23) <input type='checkbox' style={{marginLeft:'50%'}}></input></p>
                    <p>Caps (7) <input type='checkbox' style={{marginLeft:'56%'}}></input></p>
                    <p>Cargos (25) <input type='checkbox' style={{marginLeft:'45%'}}></input></p>
                    <p>Jackets (10) <input type='checkbox' style={{marginLeft:'45%'}}></input></p>
                    <p className='text-pink-600' style={{marginTop:'15px'}}>Show More</p>
                    <p className='font-semibold text-gray-950' style={{marginTop:'15px'}}>Color</p>
                    <p style={{marginTop:'15px'}}>Beige (45)<input type='checkbox' style={{marginLeft:'50%'}}></input></p>
                    <p>Black (138)<input type='checkbox' style={{marginLeft:'48%'}}></input></p>
                    <p>Black/ Brown (2) <input type='checkbox' style={{marginLeft:'27%'}}></input></p>
                    <p>Black/Grey (1) <input type='checkbox' style={{marginLeft:'36%'}}></input></p>
                    <p>Black/Maroon /Teal(1) <input type='checkbox' style={{marginLeft:'9%'}}></input></p>
                </div>
            </div>

            <div style={{ padding: '10px 10px 10px 70px'}} className='scroll overflow-y-scroll h-128 grid grid-cols-3 gap-7'>
            {
                cardobj.map((e) => (
                    <div key={e.id} className='leading-10' style={
                    {
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        marginBottom: '20px',
                        padding: '16px',
                        width: '300px',
                        boxShadow: '10px 5px 10px rgba(0,0,0,0.1)'
                    }
                    }>
                    <img src={e.image}
                    style={
                    {
                        width: '100%',
                        height: '400px',    
                        borderRadius: '4px'
                    }
            }
          />
          <span><strong>${e.price}</strong></span>
          <span className='text-sm text-gray-600' style={{marginLeft:'10px'}}><del>${e.old}</del></span>
          <h2 style={{marginTop:'10px'}} className='text-sm text-gray-600'>{e.title}</h2>
          <button className='border w-full text-lg rounded-xl font-semibold' style={{marginTop:'10px',paddingTop:'10px',paddingBottom:'10px'}}>Add To Bag</button>
        </div>
      )
    )
    }
    </div>
        </div>
    </div>
  )
}
