import React from 'react'

export default function Card() {
    let cardobj=[
  
    {
    image: "men12.jpg",
    id: 1,
    title: "Mens Casual Premium Slim Fit Shirt",
    price: "109.95",
    description: "Slim-fitting style, contrast raglan long sleeve, light weight.",
    category: "men's clothing",
    rating:  "3.9",
    },
  {
    image: "men13.jpg",
    id: 2,
    title: "Mens Casual Slim Fit Black Half-sleeve Shirt",
    price: 22.3,
    description: "contrast raglan half sleeve, light weight,Slim-fitting style.",
    category: "men's clothing",
    rating: 4.1, 
  },
  {
    image:"men14.jpg",
    id: 3,
    title: "Mens Casual Premium grey Shirt",
    price: 55.99,
    description: " contrast raglan full sleeve, light weight,Slim-fitting style ",
    category: "men's clothing",
    rating: 4.7
  },
  {
    image:"men7.jpg" ,
    id: 4,
    title: "Mens casual black pant",
    price: 15.99,
    description: " contrast raglan ,confertable, light weight,Slim-fitting style.",
    category: "men's clothing",
    rating: 2.6,
    
  },
  {
    image: "men8.jpg",
    id: 5,
    title: "Mens casual sky-blue pant",
    price: 695,
    description: " contrast raglan ,confertable, light weight,Slim-fitting style.",
    category: "men's clothing",
    rating: 4
  },
  {
    image: "men11.jpg",
    id: 6,
    title: "Mens casual denim's pant",
    price: 168,
    description: " contrast raglan ,confertable, light weight,Slim-fitting style.",
    category: "men's clothing",
    rating: 3.9
  },
  {
    image: "women11.jpg",
    id: 7,
    title: "women's casual multi-color top",
    price: 9.99,
    description: "Classic top for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "women's clothing",
    rating: 3
  },
  {
    image: "women8.jpg",
    id: 8,
    title: "women's premium  green top",
    price: 10.99,
    description: "Classic top for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "women's clothing",
    rating: 4.6
  },
  {
    image: "women9.jpg",
    id: 9,
    title: "women's casual light-yellow top",
    price: 64,
    description: "Classic top for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "women's clothing",
    rating:  3.3
  },
  {
    image: "women13.jpg",
    id: 10,
    title: "women's slim dark-blue jeans pant",
    price: 109,
    description: "light-weight pant for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "women's clothing",
    rating: 3.6
  },
  {
    image: "women14.jpg",
    id: 11,
    title: "women's slim light-blue jeans pant",
    price: 109,
    description: "light-weight light-blue pant for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "women's clothing",
    rating: 4.8
  },
  {
    image: "women15.jpg",
    id: 12,
    title: "women's slim light-black jeans pant",
    price: 114,
    description: "light-weight black pant for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "women's clothing",
    rating: 4.9
  },
  {
    image: "kids10.jpg",
    id: 13,
    title: "kid's Premium white t-shirt",
    price: 599,
    description: "contrast raglan white t-shirt, light weight,Slim-fitting style.",
    category: "kid's clothing",
    rating: 2.9
  },
  {
    image: "kids13.jpg",
    id: 14,
    title: "kid's casual stripped green t-shirt",
    price: 999,
    description: "contrast raglan green t-shirt, light weight,Slim-fitting style.",
    category: "kid's clothing",
    rating: 3.9
  },
  {
    image: "kids12.jpg",
    id: 15,
    title: "kid's Premium black t-shirt",
    price: 599,
    description: "contrast raglan black t-shirt, light weight,Slim-fitting style.",
    category: "kid's clothing",
    rating: 2.9
  },
  {
    image: "kids14.jpg",
    id: 16,
    title: "kid's Premium multi-color t-shirt",
    price: 29.95,
    description: "contrast raglan multi-color t-shirt, light weight,Slim-fitting style.",
    category: "kid's clothing",
    rating: 2.9
  },
  {
    image: "kids9.jpg",
    id: 17,
    title: "kid's casual white t-shirt",
    price: 29.99,
    description: "contrast raglan white t-shirt, light weight,Slim-fitting style.",
    category: "kid's clothing",
    rating: 3.9
  },
  {
    image: "kids11.jpg",
    id: 18,
    title: "kid's Premium multi-color t-shirt",
    price: 9.85,
    description: " contrast raglan multi-color t-shirt, light weight,Slim-fitting style.",
    category: "kid's clothing",
    rating: 4.7
  },
]
  return (
    <div style={{ padding: '20px',paddingTop:'80px',display: 'flex',flexWrap: 'wrap',justifyContent:'space-evenly' }}>
      {
        cardobj.map((e) => (
            <div key={e.id} style={
            {
                border: '1px solid #ccc',
                borderRadius: '8px',
                marginBottom: '20px',
                padding: '16px',
                maxWidth: '400px',
                boxShadow: '10px 5px 10px rgba(0,0,0,0.1)'
            }
            }>
            <img
                src={e.image}
                style={
                {
                    width: '100%',
                    height: '500px',
                    
                    borderRadius: '4px'
                }
            }
          />
          <h2 style={{paddingTop:'25px'}}>{e.title}</h2>
          <p><strong><br></br>Price:</strong> ${e.price}</p>
          <p><strong><br></br>Description:</strong> {e.description}</p>
          <p><strong><br></br>Category:</strong> {e.category}</p>
          <p><strong><br></br>Rating:</strong> {e.rating}</p>
        </div>
      )
    )
    }
    </div>
  );
}
