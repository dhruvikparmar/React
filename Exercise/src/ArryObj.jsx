import React from 'react'

export default function ArryObj(props) // when use 2nd method -- ArryObj(name,id,city)
{ 
    
    return (  
        <div>
            <h1>Arry Of Object</h1>
            <h1>{props.student}</h1>
            {
                props.data.map((e, i) => {
                return  <ul> 
                    <li>{e.name}</li>
                    <li>{e.id}</li>
                    <li>{e.city}</li>
                </ul>
                
                })
            }
        </div>
        //<div>
        //      <h1>Arry Obj</h1>
        //      <ul>
        //              <li>{id}</li>
        //              <li>{name}</li>
        //              <li>{subject}</li>
        //      </ul>
        //</div>
    )
}
