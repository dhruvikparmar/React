import { useState } from 'react'
import ArryObj from './ArryObj'
import UseState from './UseState'
import './App.css'
import Events from './Events'
import UseRef from './UseRef'
import Form from './Form'
import Calc from './Calc'
import FormValidation from './FormValidation'
import LocalStorage from './LocalStorage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Router/Home'
import About from './Router/About'
import Contact from './Router/Contact'
import Create from './CrudWithRouting/Create'
import Display from './CrudWithRouting/Display'
import Searching from './Searching'
import Chome from './Context/Chome'
import { Provider } from 'react-redux'
import { store } from './app/Rstore'
import RreduxCounter from './RreduxCounter'
import Todoredux from './Todoredux'
import Apiredux from './Apiredux'
import UseReducer from './UseReducer'

function App() {
  // const [count, setCount] = useState(0)
  //  let arr =[
  //           {name:"John", id:1, city:"New York"},
  //           {name:"Magnus", id:2, city:"London"},
  //           {name:"Abd", id:3, city:"America"},
  //           {name:"Criss", id:4, city:"Dubai"},
  //           {name:"Sam", id:5, city:"Norvey"},
  //       ]

  return (
    <div>
      {/* <Events/>

      <UseRef/> */}

      {/* <Form/> */}

      {/* <Calc/> */}
      {/* <FormValidation/> */}
      {/* <LocalStorage/> */}
      {/* <ArryObj data={arr} student={"sumit"}/> */}

      {/* <BrowserRouter> */}
        {/* <Routes> */}
          {/* <Route path='/' element={<Display/>}></Route> */}
          {/* <Route path='/Create' element={<Create/>}></Route> */}
          {/*<Route path='/contact' element={<Contact/>}></Route> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
        {/* <Searching/> */}
        {/* <Chome/> */}
        <Provider store={store}>
          {/* <RreduxCounter/> */}
          <Apiredux/>
        </Provider>
        {/* <UseReducer/> */}
    </div>
    //<div>
    // {
    //   arr.map((e,i)=>{
    //     return <ArryObj iname=(e.id) iname=(e.name) city=(e.city) />;
    //   })
    // }
    // </div>
  )
}

export default App
